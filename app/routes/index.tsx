import { Link } from "remix";

export default function Index() {
  return (
    <div className="bg-black min-h-screen text-white/80">
      <div className="flex text-2xl p-10 ">

      <Link to="/ApiDataFetch" className="bg-slate-600 px-3 mx-2 py-[.6em] flex rounded-lg " > ApiDataFetch</Link>
      <Link to="/Todo" className="bg-slate-600 px-3 mx-2 py-[.6em] rounded-lg flex"  > Todo</Link>
      </div>
    </div>
  );
}
