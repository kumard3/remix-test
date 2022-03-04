import { Link, LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  const api = await fetch("https://blog-cms-backend.herokuapp.com/articles");
  const res = api.json();
  return res;
};
export default function Posts() {
  const posts = useLoaderData();
  return (
    <div className="bg-black min-h-screen text-white/80">
      <h1>Posts</h1>
      <ul>
        {posts.map(
          (
            post: {
              body: string;
              title: string;
              id: number;
              slug: string;
              description: string;
            },
            index: number
          ) => (
            <li key={post.slug}
            className="bg-slate-700 my-3 p-5 rounded-2xl max-w-3xl"
            >
              <Link to={post.slug}>{post.title}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
