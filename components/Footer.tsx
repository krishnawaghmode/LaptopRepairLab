'use client';
import Link from 'next/link';
export function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
                Laptop Repair <span className="text-sky-400">Lab</span>
              </Link>

              <p className="mt-5 max-w-sm leading-7 text-slate-400">
                Professional laptop repair and motherboard-level repair services in Wagholi, Pune.
                We repair laptop hardware, software, charging faults and more.
              </p>

              {/* <div className="mt-6 flex gap-3">
                <a
                  href="https://wa.me/919960526832"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Laptop Repair Lab on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white transition hover:bg-emerald-400"
                >
                  W
                </a>

                <a
                  href="tel:+919960526832"
                  aria-label="Call Laptop Repair Lab"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-lg font-bold text-white transition hover:bg-sky-400"
                >
                  ☎
                </a>

                <a
                  href="https://g.page/r/CZWu0U8sEu0PEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read Google reviews"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-slate-950 transition hover:bg-yellow-400"
                >
                  ★
                </a>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white">Quick Links</h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <Link href="/" className="transition hover:text-sky-400">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/#services" className="transition hover:text-sky-400">
                    Our Services
                  </Link>
                </li>

                <li>
                  <Link href="/#about" className="transition hover:text-sky-400">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/#faqs" className="transition hover:text-sky-400">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link href="/#contact" className="transition hover:text-sky-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white">Our Services</h3>

              <ul className="mt-5 space-y-3 text-slate-400">
                <li>Laptop motherboard repair</li>
                <li>No-power laptop repair</li>
                <li>Laptop charging repair</li>
                <li>Screen and keyboard replacement</li>
                <li>SSD and RAM upgrades</li>
                <li>Windows installation</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-white">Contact Details</h3>

              <ul className="mt-5 space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-sky-400">📍</span>
                  <span>
                    Oxy Primo, A-113,
                    <br />
                    Bakori Phata, Wagholi,
                    <br />
                    Pune, Maharashtra 412207
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-sky-400">☎</span>
                  <a href="tel:+919960526832" className="transition hover:text-sky-400">
                    +91 99605 26832
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Laptop Repair Lab. All rights reserved.</p>

            <div className="flex gap-5">
              <Link href="/privacy-policy" className="transition hover:text-sky-400">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-sky-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/919960526832?text=Hi%20Laptop%20Repair%20Lab%2C%20I%20need%20help%20with%20my%20laptop."
        target="_blank"
        rel="noopener"
        aria-label="Chat with Laptop Repair Lab on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl shadow-xl shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-400"
      >
        💬
      </a>
    </>
  );
}
