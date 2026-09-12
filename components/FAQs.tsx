const faqs = [
  {
    question: 'What types of laptop problems do you repair?',
    answer:
      'We repair laptop no-power issues, motherboard faults, charging problems, DC jack faults, display issues, overheating, shutdown problems, BIOS faults, keyboard problems, software issues and more.',
  },
  {
    question: 'Do you repair dead or completely dead laptops?',
    answer:
      'Yes. We diagnose dead laptops and no-power faults at the motherboard and component level to identify the actual cause of the problem.',
  },
  {
    question: 'Do you provide motherboard and chip-level repair?',
    answer:
      'Yes. We provide motherboard-level and chip-level repair, including IC, MOSFET, BIOS and other component-level faults.',
  },
  {
    question: 'Can you fix laptop charging and DC jack problems?',
    answer:
      'Yes. We check the charger, charging circuit, charging IC, battery connection and DC jack to determine the correct repair.',
  },
  {
    question: 'Do you replace laptop screens and keyboards?',
    answer:
      'Yes. We provide laptop screen, keyboard and other compatible component replacement services for different laptop brands and models.',
  },
  {
    question: 'Do you provide SSD and RAM upgrades?',
    answer:
      'Yes. We provide SSD and RAM upgrade services to improve laptop speed, storage capacity and overall performance.',
  },
  {
    question: 'Do you install Windows and provide software support?',
    answer:
      'Yes. We provide Windows installation, driver support, software troubleshooting, system setup and basic data backup assistance.',
  },
  {
    question: 'How long does laptop repair take?',
    answer:
      'Repair time depends on the fault, laptop model and availability of required parts. After diagnosis, we explain the expected repair time before proceeding.',
  },
  {
    question: 'Where is Laptop Repair Lab located?',
    answer:
      'Laptop Repair Lab is located at Oxy Primo, A-113, Bakori Phata, Wagholi, Pune, Maharashtra 412207.',
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="border-y border-white/10 bg-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-sky-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Laptop repair questions answered
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Find answers to common questions about our laptop and motherboard repair services.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map(faq => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
                <span>{faq.question}</span>

                <span
                  aria-hidden="true"
                  className="text-2xl text-sky-400 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-4xl leading-7 text-slate-400">{faq.answer}</p>
            </details>
          ))}

          <details className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
              <span>How can I contact Laptop Repair Lab?</span>

              <span
                aria-hidden="true"
                className="text-2xl text-sky-400 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <p className="mt-4 max-w-4xl leading-7 text-slate-400">
              Call us on{' '}
              <a href="tel:+919960526832" className="font-semibold text-sky-400">
                +91 99605 26832
              </a>{' '}
              or message us on WhatsApp for laptop repair assistance.
            </p>

            <a
              href="https://wa.me/919960526832?text=Hello%20Laptop%20Repair%20Lab%2C%20I%20need%20laptop%20repair%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Message on WhatsApp
            </a>
          </details>
        </div>
      </div>
    </section>
  );
}
