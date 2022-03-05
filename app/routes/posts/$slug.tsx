import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  //   invariant(params.slug, "expected params.slug");
  //   return getPost(params.slug);
  const api = await fetch("https://blog-cms-backend.herokuapp.com/articles");
  const res = await api.json();
  return { res, params };
};

export default function PostSlug() {
  const post = useLoaderData();
  const slug = post.params.slug;
  const Filter = post.res.filter((e) => e.slug === slug);
  console.log(Filter[0]);
  return (
    <div className="bg-black min-h-screen text-white px-10 flex  py-9 flex-col items-center">
      <h1 className="text-3xl">{Filter[0].title}</h1>
      <h3> {Filter[0].description}</h3>
    </div>
  );
}

//<main dangerouslySetInnerHTML={{ __html: post.html }} />;