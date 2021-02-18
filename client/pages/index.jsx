import { useQuery } from '@apollo/client';
import BlogCard from '../Components/BlogCard';
import { GET_ALL_BLOGS } from '../utils/queries';

export default function Home() {
  const { data, error } = useQuery(GET_ALL_BLOGS);
  if (error) {
    return <h1 className="text-red-700"> Error:{error.message}</h1>;
  }
  return (
    <div className="text-center px-12">
      <main>
        <h1 className="text-4xl my-6 text-green-400 font-bold underline">
          Latest Blogs
        </h1>
        <h3 className="text-green-600">
          Read Latest Blog post as they happens!
        </h3>
      </main>
      <section className="flex">
        <article className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none transition-all">
          {data?.allBlogs?.map((blog) => (
            <BlogCard blog={blog} key={blog?.id} />
          ))}
        </article>
      </section>
    </div>
  );
}
