export default function ContactSection() {
  return (
    <section id="contact" className="">
      <div className="mx-auto max-w-full ">
        <div className="overflow-hidden border border-sky-400 bg-gradient-to-br from-sky-800 via-slate-900 to-slate-900 p-7 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            {/* Contact information */}
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-sky-300">
                Visit or contact us
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Let&apos;s get your laptop working again.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                Contact Laptop Repair Lab for laptop repair, motherboard repair, upgrades and
                software support in Wagholi, Pune.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/919960526832?text=Hi%20Laptop%20Repair%20Lab%2C%20I%20need%20help%20with%20my%20laptop."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white transition hover:bg-emerald-400"
                >
                  Message on WhatsApp
                </a>

                <a
                  href="tel:+919960526832"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/15"
                >
                  Call 99605 26832
                </a>
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <div className="flex gap-4">
                <span className="text-2xl" aria-hidden="true">
                  📍
                </span>

                <div>
                  <p className="font-bold text-white">Our location</p>

                  <p className="mt-2 leading-7 text-slate-400">
                    Oxy Primo, A-113,
                    <br />
                    Bakori Phata, Wagholi,
                    <br />
                    Pune, Maharashtra 412207
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex gap-4">
                  <span className="text-2xl" aria-hidden="true">
                    📞
                  </span>

                  <div>
                    <p className="font-bold text-white">Phone</p>

                    <a
                      href="tel:+919960526832"
                      className="mt-2 block text-sky-400 hover:text-sky-300"
                    >
                      +91 99605 26832
                    </a>
                  </div>
                </div>
              </div>

              {/* <a
                href="https://www.google.com/maps/search/?api=1&query=Oxy%20Primo%20A-113%20Bakori%20Phata%20Wagholi%20Pune%20412207"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Get Directions →
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
