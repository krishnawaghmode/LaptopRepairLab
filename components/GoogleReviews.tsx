export default function GoogleReviews() {
  return (
    <section>
      <div className="mx-auto max-w-full">
        <div className="overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Laptop%20Repair%20Lab%20Oxy%20Primo%20A-113%20Bakori%20Phata%20Wagholi%20Pune%20412207&output=embed"
            className="h-[520px] w-full border-0"
            loading="lazy"
            title="Laptop Repair Lab Google Maps location"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
