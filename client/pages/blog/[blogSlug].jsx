import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsDown,
  faThumbsUp,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import marked from 'marked';
import matter from 'gray-matter';
import { GET_BLOG } from '../../utils/queries';

const BlogPage = ({ slug }) => {
  const { data, error, loading } = useQuery(GET_BLOG, {
    variables: { id: slug },
  });
  if (error) {
    return <h1 className="text-red-700"> Error:{error.message}</h1>;
  }
  if (loading) {
    return <h1>Loading Wait!</h1>;
  }
  const blog = data?.Blog;
  const { content } = matter(blog.body);
  return (
    <section className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="lg:w-2/3">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white md:text-left">
              {blog.name}
            </h1>
            <h2 className="italic text-sm">- {blog.author.name}</h2>
          </div>
          <div
            className="prose dark:prose-dark prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none mx-auto md:ml-0"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />

          <div className="flex justify-evenly items-center m-6">
            <div className="flex">
              <button className="flex items-baseline mx-1 p-2 bg-transparent rounded border border-green-900 hover:bg-green-900 transition">
                {blog.likes}
                <FontAwesomeIcon className="ml-1" icon={faThumbsUp} />
              </button>{' '}
              <button className="flex items-end mx-1 p-2 bg-transparent rounded border border-green-900 hover:bg-green-900 transition">
                {blog.dislikes}{' '}
                <FontAwesomeIcon className="ml-1" icon={faThumbsDown} />
              </button>{' '}
            </div>
            <h2>
              {blog._commentsMeta.count} <FontAwesomeIcon icon={faComment} />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps({ params: { blogSlug } }) {
  return {
    props: {
      slug: blogSlug,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default BlogPage;
