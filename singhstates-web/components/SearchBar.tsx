import { clsx } from "clsx";

type Props = {
  query: string; onQuery: (v: string)=>void;
  type: "" | "buy" | "rent"; onType: (v: any)=>void;
  min: number|""; max: number|""; onMin: (v:any)=>void; onMax: (v:any)=>void;
};

export default function SearchBar({ query,onQuery,type,onType,min,max,onMin,onMax }: Props) {
  const priceSteps = [ "", 1000000, 2500000, 5000000, 10000000, 20000000 ];

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <input
        className="flex-1 rounded-xl border px-3 py-2"
        placeholder="Search city, locality or property"
        value={query} onChange={e=>onQuery(e.target.value)}
      />
      <div className="flex gap-2">
        {(["buy","rent"] as const).map(k => (
          <button key={k}
            onClick={()=>onType(type===k? "": k)}
            className={clsx("px-3 py-2 rounded-xl border", type===k && "bg-brand-600 text-white border-brand-600")}
          >
            {k.toUpperCase()}
          </button>
        ))}
      </div>
      <select className="rounded-xl border px-3 py-2" value={min as any} onChange={e=>onMin(e.target.value===""?"":Number(e.target.value))}>
        {priceSteps.map(v => <option key={"min"+v} value={v}>{v===""?"Min price":fIN(v)}</option>)}
      </select>
      <select className="rounded-xl border px-3 py-2" value={max as any} onChange={e=>onMax(e.target.value===""?"":Number(e.target.value))}>
        {priceSteps.map(v => <option key={"max"+v} value={v}>{v===""?"Max price":fIN(v)}</option>)}
      </select>
    </div>
  );
}

function fIN(n:any){ return "₹"+Number(n).toLocaleString("en-IN"); }
