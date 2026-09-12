type Review = {
  name: string;
  initials: string;
  color: string;
  rating: number;
  service: string;
  review: string;
};

// Paste your complete reviews array here
const reviews: Review[] = [
  {
    name: 'Ritesh Belure',
    initials: 'RB',
    color: '#4F46E5',
    rating: 5,
    service: 'Complete Laptop Repair and Servicing',
    review:
      "I recently visited Laptop Repair Lab, Wagholi after my laptop suddenly stopped working, and I couldn't be happier with the service.\n\nTheir expertise covers motherboard repair, chip-level repair, BIOS programming, no power issues, display problems, overheating, charging issues, SSD upgrades, RAM upgrades, Windows installation and complete laptop servicing.\n\nThe service was professional, transparent, reasonably priced, and completed on time. My laptop is working like new again.",
  },
  {
    name: 'Penta Computers',
    initials: 'PC',
    color: '#059669',
    rating: 5,
    service: 'Chip-Level Motherboard Repair',
    review:
      "Laptop Repair Lab completed a chip-level motherboard repair on my dead laptop. I thought it couldn't be repaired, but the technicians fixed the no power issue quickly. Best laptop repair experience in Wagholi.",
  },
  {
    name: 'Omkar Swami',
    initials: 'OS',
    color: '#DC2626',
    rating: 5,
    service: 'System Repair and Data Recovery',
    review:
      'Cheers for Ganesh… Excellent service! My system was down for 2-3 months and showing an invalid partition table error. They fixed it quickly without any data loss. Very professional and affordable. Highly recommended!',
  },
  {
    name: 'Amlan D',
    initials: 'AD',
    color: '#D97706',
    rating: 5,
    service: 'Laptop Charging Port Inspection',
    review:
      'Took my laptop in for a charging issue. He diagnosed the problem and suggested I claim the charger warranty. He also cleaned the charging port and got it working again. Very knowledgeable, honest and highly recommended!',
  },
  {
    name: 'Sahil Awari',
    initials: 'SA',
    color: '#7C3AED',
    rating: 5,
    service: 'Laptop Repair and Upgrade Services',
    review:
      'I was looking for a reliable laptop repair shop in Wagholi and found Laptop Repair Lab. They provide complete laptop solutions, including motherboard repair, screen replacement, keyboard replacement, SSD and RAM upgrades, BIOS programming and Windows installation. Excellent service with affordable pricing.',
  },
  {
    name: 'Sumit Lokhande',
    initials: 'SL',
    color: '#0891B2',
    rating: 5,
    service: 'Laptop Hinge and Body Repair',
    review:
      'Laptop Repair Lab fixed my broken laptop hinge and completed the body repair professionally. The laptop looks almost new again. Excellent workmanship, affordable pricing, and trusted laptop repair service in Wagholi.',
  },
];

function renderStars(rating: number) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="border-y border-white/10 bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-sky-400">Customer Reviews</p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by laptop owners in Wagholi
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            See what our customers say about our laptop repair and upgrade services.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(review => (
            <article
              key={`${review.name}-${review.service}`}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-sky-400/40"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-bold"
                    style={{
                      backgroundColor: `${review.color}33`,
                      color: review.color,
                    }}
                  >
                    {review.initials}
                  </div>

                  <div>
                    <h3 className="font-bold text-white">{review.name}</h3>

                    <p className="text-xs text-slate-500">Google Review</p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                  Verified
                </span>
              </div>

              <div
                className="mt-5 flex gap-1 text-lg text-yellow-400"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {renderStars(review.rating)}
              </div>

              <p className="mt-4 flex-1 whitespace-pre-line leading-7 text-slate-300">
                {review.review}
              </p>

              <p className="mt-5 text-xs text-slate-500">{review.service}</p>
            </article>
          ))}
          <a
            href="https://g.page/r/CZWu0U8sEu0PEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-slate-950 transition hover:bg-sky-100"
          >
            <span className="text-xl text-yellow-500" aria-hidden="true">
              ★
            </span>

            <span>Read all Google reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
}
