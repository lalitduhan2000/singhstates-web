export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container-ss py-8 text-sm text-slate-600 grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-800">SinghStates</p>
          <p className="mt-2">A modern real-estate platform for India.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Company</p>
          <ul className="mt-2 space-y-1">
            <li>About</li><li>Careers</li><li>Press</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Legal</p>
          <ul className="mt-2 space-y-1">
            <li>Privacy</li><li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} SinghStates</div>
    </footer>
  );
}
