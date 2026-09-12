FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci


FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=6000
ENV HOSTNAME=0.0.0.0

RUN addgroup -S RepairLab
RUN adduser -S RepairLab -G RepairLab

COPY --from=builder --chown=RepairLab:RepairLab /app/public ./public
COPY --from=builder --chown=RepairLab:RepairLab /app/.next/standalone ./
COPY --from=builder --chown=RepairLab:RepairLab /app/.next/static ./.next/static

USER RepairLab

EXPOSE 6000

CMD ["node", "server.js"]