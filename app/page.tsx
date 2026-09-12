'use client';
import ContactSection from '@/components/ContactSection';
import FAQs from '@/components/FAQs';
import GallerySection from '@/components/GallerySection';
import GoogleReviews from '@/components/GoogleReviews';
import ReviewsSection from '@/components/ReviewsSection';
import ServicesSection from '@/components/ServicesSection.';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const repairImages = [
  'https://loremflickr.com/1600/900/laptop,repair?lock=1',
  'https://loremflickr.com/1600/900/laptop,technician?lock=2',
  'https://loremflickr.com/1600/900/computer,repair,workshop?lock=3',
  'https://loremflickr.com/1600/900/laptop,motherboard,repair?lock=4',
  'https://loremflickr.com/1600/900/electronics,repair,technician?lock=5',
];

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageVisible(false);

      setTimeout(() => {
        setImageIndex(currentIndex => {
          return (currentIndex + 1) % repairImages.length;
        });

        setImageVisible(true);
      }, 300);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <section className="relative overflow-hidden pt-36">
        <div className="absolute inset-0 -z-20">
          <img
            src={repairImages[imageIndex]}
            alt="Laptop repair workspace"
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              imageVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-slate-950/80"></div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.28),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.20),_transparent_30%)]"></div>

        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pb-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              Professional Laptop Repair in Wagholi
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              Your laptop deserves
              <span className="text-sky-400"> expert care.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Reliable laptop, motherboard and chip-level repair services in Wagholi, Pune. From
              no-power faults to screen replacement and upgrades, we diagnose problems accurately
              and repair them professionally.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919960526832?text=Hi%20Laptop%20Repair%20Lab%2C%20I%20need%20help%20with%20my%20laptop."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                <span>💬</span>
                WhatsApp Us
              </a>

              <a
                href="tel:+919960526832"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/20"
              >
                <span>📞</span>
                99605 26832
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">✓ Transparent diagnosis</span>
              <span className="flex items-center gap-2">✓ Professional tools</span>
              <span className="flex items-center gap-2">✓ Quality-focused repairs</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-sky-500/20 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-glow backdrop-blur-xl sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Repair expertise</p>
                  <p className="mt-1 text-2xl font-bold text-white">Basic to Advanced</p>
                </div>

                <div className="rounded-2xl bg-sky-400/10 p-4 text-3xl">🛠️</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-red-400/10 text-xl">
                    ⚡
                  </span>
                  <div>
                    <p className="font-semibold text-white">No Power & Dead Laptop</p>
                    <p className="text-sm text-slate-400">Accurate fault diagnosis</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-400/10 text-xl">
                    🔬
                  </span>
                  <div>
                    <p className="font-semibold text-white">Motherboard & Chip-Level</p>
                    <p className="text-sm text-slate-400">Component-level repair</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/10 text-xl">
                    🚀
                  </span>
                  <div>
                    <p className="font-semibold text-white">SSD & RAM Upgrades</p>
                    <p className="text-sm text-slate-400">Better speed and performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      {/* Why Us  */}
      <section id="why-us" className="py-24 bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-sky-400">Why choose us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Repair first. Replace only when needed.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Our focus is accurate diagnosis, dependable repair and clear communication. We aim to
              avoid unnecessary part replacement wherever a professional repair is possible.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="text-xl text-emerald-400">✓</span>
                <div>
                  <h3 className="font-bold text-white">Transparent diagnosis</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Understand the issue before approving the repair.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-xl text-emerald-400">✓</span>
                <div>
                  <h3 className="font-bold text-white">Professional equipment</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Diagnostic and repair tools for basic to advanced faults.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-xl text-emerald-400">✓</span>
                <div>
                  <h3 className="font-bold text-white">Support for multiple brands</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Assistance for common laptop brands and models.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-4xl font-extrabold text-sky-400">01</p>
              <h3 className="mt-8 font-bold text-white">Diagnose</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Identify the actual cause of the problem.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-4xl font-extrabold text-sky-400">02</p>
              <h3 className="mt-8 font-bold text-white">Explain</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Share the repair options clearly.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-4xl font-extrabold text-sky-400">03</p>
              <h3 className="mt-8 font-bold text-white">Repair</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Work with care using suitable tools.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-4xl font-extrabold text-sky-400">04</p>
              <h3 className="mt-8 font-bold text-white">Test</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Verify the laptop before handover.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GallerySection />
      <ContactSection />
      <ReviewsSection />
      <FAQs />
      <GoogleReviews />
    </>
  );
}
