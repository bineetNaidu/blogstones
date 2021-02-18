import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsDown,
  faThumbsUp,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ blog }) => {
  console.log(blog);
  return (
    <Link href={'/blog/' + blog.id}>
      <a
        className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl"
        key={blog.id}
      >
        <div>
          <img
            className="h-48 w-full object-cover"
            src={blog.thumbnailImg || 'https://bit.ly/3jZzeX0'}
            alt={blog.name + "'s Thumbnail"}
          />
        </div>
        <div className="bg-green-300 dark:bg-green-900 p-6 flex flex-col">
          <div className="flex space-x-1 text-sm text-green-900 dark:text-gray-300">
            <time dateTime={blog.createAt}>
              {new Date(blog.createAt).toDateString()}
            </time>
          </div>
          <div className="mt-2">
            <p className="text-2xl font-extrabold text-green-900 dark:text-gray-100">
              {blog.name}
            </p>
            <p className="text-lg mt-3 text-green-900 dark:text-purple-100 flex justify-between items-center">
              <h1 className="italic">- {blog.author.name}</h1>
              <div className="flex">
                <span className="flex items-baseline mx-1">
                  {blog.likes}
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>{' '}
                <span className="flex items-baseline mx-1">
                  {blog.dislikes}
                  <FontAwesomeIcon icon={faThumbsDown} />
                </span>{' '}
                <span className="flex items-baseline mx-1">
                  {blog._commentsMeta.count}
                  <FontAwesomeIcon icon={faComment} />
                </span>
              </div>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
