const galleryItems = [
  {
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85',
    fullImage:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop motherboard repair service',
    title: 'Motherboard Repair',
    description: 'Advanced laptop diagnosis',
  },
  {
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    fullImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    alt: 'Computer chip level repair',
    title: 'Chip-Level Repair',
    description: 'IC and component repair',
  },
  {
    image:
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=900&q=85',
    fullImage:
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop cleaning and service',
    title: 'Laptop Service',
    description: 'Cleaning and maintenance',
  },
  {
    image:
      'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=900&q=85',
    fullImage:
      'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop SSD and RAM upgrade',
    title: 'SSD & RAM Upgrade',
    description: 'Laptop performance upgrade',
  },
  {
    image:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=85',
    fullImage:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop screen replacement',
    title: 'Screen Replacement',
    description: 'Display repair service',
  },
  {
    image:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=85',
    fullImage:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop keyboard replacement',
    title: 'Keyboard Service',
    description: 'Keyboard replacement',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
    fullImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Professional laptop repair workstation',
    title: 'Repair Workstation',
    description: 'Professional equipment',
  },
  {
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85',
    fullImage:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop repair and computer service',
    title: 'Laptop Repair',
    description: 'Reliable technical service',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-sky-400">Our Repair Work</p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Inside Laptop Repair Lab
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Professional laptop repair, motherboard service and computer upgrades in Wagholi, Pune.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map(item => (
            <a
              key={item.title}
              href={item.fullImage}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-5 pt-20">
                <h3 className="font-bold text-white">{item.title}</h3>

                <p className="mt-1 text-sm text-slate-300">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
