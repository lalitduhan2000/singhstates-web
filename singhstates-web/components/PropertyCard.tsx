import Image from "next/image";
import { Property } from "@/lib/properties";

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative h-48">
        <Image src={p.image} alt={p.title} fill className="object-cover" />
        <span className="absolute top-2 left-2 bg-white/90 text-xs px-2 py-1 rounded">
          {p.intent === "buy" ? "For Sale" : "For Rent"}
        </span>
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-slate-500">{p.address}, {p.city}</p>
        <p className="mt-2 font-semibold text-brand-600">
          {p.intent === "buy" ? `₹${p.price.toLocaleString("en-IN")}` : `₹${p.price.toLocaleString("en-IN")}/month`}
        </p>
        <div className="text-sm text-slate-600">{p.beds} Beds • {p.baths} Baths • {p.area} sqft</div>
      </div>
    </article>
  );
}
