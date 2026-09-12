export default function ServicesSection() {
  const services = [
    {
      icon: '⚡',
      title: 'No Power Repair',
      description: 'Dead laptop, no power and not turning on issues.',
    },
    {
      icon: '🔧',
      title: 'Motherboard Repair',
      description: 'Advanced board and component-level troubleshooting.',
    },
    {
      icon: '🔌',
      title: 'Charging Problems',
      description: 'DC jack, charging IC and adapter-related faults.',
    },
    {
      icon: '🖥️',
      title: 'Display Repair',
      description: 'No display, screen flickering and screen replacement.',
    },
    {
      icon: '🌡️',
      title: 'Overheating Repair',
      description: 'Cleaning, thermal paste and shutdown issues.',
    },
    {
      icon: '💾',
      title: 'BIOS Programming',
      description: 'BIOS corruption and firmware-related repairs.',
    },
    {
      icon: '⌨️',
      title: 'Keyboard Replacement',
      description: 'Damaged, non-working and liquid-affected keyboards.',
    },
    {
      icon: '🚀',
      title: 'SSD & RAM Upgrade',
      description: 'Upgrade storage and memory for improved performance.',
    },
    {
      icon: '🪟',
      title: 'Windows Support',
      description: 'Windows installation, drivers and software troubleshooting.',
    },
    {
      icon: '🧹',
      title: 'Laptop Cleaning',
      description: 'Internal cleaning and professional thermal paste service.',
    },
    {
      icon: '🔐',
      title: 'Data Backup',
      description: 'Backup assistance and data-related support services.',
    },
    {
      icon: '🔬',
      title: 'IC & MOSFET Repair',
      description: 'Chip-level repair for complex motherboard faults.',
    },
  ];

  return (
    <section id="services" className="border-y border-white/10 bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-sky-400">What we repair</p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Complete laptop repair solutions
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            We handle everyday laptop issues as well as difficult motherboard-level faults with a
            systematic diagnostic approach.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(service => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:border-sky-400/45 hover:bg-sky-500/[0.08]"
            >
              <span className="block text-2xl">{service.icon}</span>

              <h3 className="mt-4 font-bold text-white">{service.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
