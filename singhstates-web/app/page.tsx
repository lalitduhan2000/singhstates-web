"use client";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { useMemo, useState } from "react";
import { properties as seed } from "@/lib/properties";

export default function Home() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<"buy" | "rent" | "">("");
  const [min, setMin] = useState<number | "">("");
  const [max, setMax] = useState<number | "">("");

  const list = useMemo(() => {
    return seed.filter(p => {
      const okQ = q ? (p.city + p.title + p.address).toLowerCase().includes(q.toLowerCase()) : true;
      const okT = type ? p.intent === type : true;
      const okPriceMin = min !== "" ? p.price >= (min as number) : true;
      const okPriceMax = max !== "" ? p.price <= (max as number) : true;
      return okQ && okT && okPriceMin && okPriceMax;
    });
  }, [q, type, min, max]);

  return (
    <>
      <section className="bg-gradient-to-b from-brand-600 to-brand-500 text-white">
        <div className="container-ss py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">Find your perfect home</h1>
              <p className="mt-2 text-white/90">Buy or rent properties across India with SinghStates.</p>
            </div>
            <div className="relative w-full md:w-[420px] h-32 md:h-28">
              <Image src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c68e?q=80&w=1200&auto=format&fit=crop" alt="hero" fill className="object-cover rounded-xl shadow-lg"/>
            </div>
          </div>

          <div className="mt-8 card p-4">
            <SearchBar
              query={q} onQuery={setQ}
              type={type} onType={setType}
              min={min} max={max}
              onMin={setMin} onMax={setMax}
            />
          </div>
        </div>
      </section>

      <section className="container-ss py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured properties</h2>
          <span className="text-sm text-slate-500">{list.length} results</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
