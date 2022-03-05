//https://blog-cms-backend.herokuapp.com/articles

import { Link, LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  const api = await fetch("https://astroyantra.com/wp-json/wp/v2/posts?per_page=20&?page=2");
  const res = api.json();
  return res;
};

export default function ApiDataFetch() {
  const data = useLoaderData();
console.log(data);
  return (
    <div className="bg-black min-h-screen text-white/80">
      <h1 className="text-center text-6xl py-10 ">
        Remix Basic Data fetching{" "}
      </h1>
      <div className="grid justify-center flex-col items-center  ">
      {data.map((n)=> {
        return (
          <div> 
            {/* {n.content} */}
            <main dangerouslySetInnerHTML={{ __html: n.content.rendered}} />
          </div>
        )
      })}
      {/* <main dangerouslySetInnerHTML={{ __html: data.results[0].data.page_content[0].primary.rich_text[3].text}} /> */}
      </div>
    </div>
  );
}

//YfrxThEAACIA-jcE 
//https://your-repo-name.cdn.prismic.io/api/v2/documents/search?ref=Your_Ref&access_token=Your_Token