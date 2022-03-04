import { Link } from "remix";

export default function Index() {
  return (
    <div className="bg-black min-h-screen text-white/80">
      <Link to="/" className="text-center text-6xl py-10 ">
        Remix Basic Data fetching{" "}
      </Link>
      <div className="flex text-2xl p-10 ">
        <Link
          to="/ApiDataFetch"
          className="bg-slate-600 px-3 mx-2 py-[.6em] flex rounded-lg "
        >
          {" "}
          ApiDataFetch
        </Link>
        <Link
          to="/StrapiDataFetch"
          className="bg-slate-600 px-3 mx-2 py-[.6em] rounded-lg flex"
        >
          {" "}
          Strapi Data Fetch
        </Link>
      </div>
    </div>
  );
}
