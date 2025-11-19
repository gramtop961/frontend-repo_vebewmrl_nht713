const logos = [
  { name: 'SkyBridge', src: 'https://dummyimage.com/120x40/ffffff/000000&text=SkyBridge' },
  { name: 'NimbusOps', src: 'https://dummyimage.com/120x40/ffffff/000000&text=NimbusOps' },
  { name: 'AeroFin', src: 'https://dummyimage.com/120x40/ffffff/000000&text=AeroFin' },
  { name: 'VectorAir', src: 'https://dummyimage.com/120x40/ffffff/000000&text=VectorAir' },
  { name: 'Northwind', src: 'https://dummyimage.com/120x40/ffffff/000000&text=Northwind' },
];

export default function Logos() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6 opacity-70">
          {logos.map((l) => (
            <img key={l.name} src={l.src} alt={l.name} className="mx-auto h-8 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
