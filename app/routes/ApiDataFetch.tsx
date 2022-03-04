import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = api.json();
  return res;
};

export default function ApiDataFetch() {
  const data = useLoaderData();

  return (
    <div className="bg-black min-h-screen text-white/80">
      <h1 className="text-center text-6xl py-10 ">Remix Basic Data fetching </h1>
      <div className="grid justify-center flex-col items-center  ">
        {data.map(
          (n: { body: string; title: string; id: number }, index: number) => {
            return (
              <div
                key={index}
                className="bg-slate-700 my-3 p-5 rounded-2xl max-w-3xl"
              >
                <h1 className="text-3xl font-mono ">{n.title}</h1>
                <p className="text-xl">{n.body}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
