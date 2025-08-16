import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container-ss py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={120} height={32} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-brand-600">Buy</Link>
          <Link href="/" className="hover:text-brand-600">Rent</Link>
          <Link href="/" className="hover:text-brand-600">Sell</Link>
          <Link href="/" className="hover:text-brand-600">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg border hover:bg-slate-50">Sign in</button>
          <button className="px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500">List your property</button>
        </div>
      </div>
    </header>
  );
}
