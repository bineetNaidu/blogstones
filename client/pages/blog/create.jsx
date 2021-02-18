import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_BLOG } from '../../utils/queries';

const create = () => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [createBlog] = useMutation(CREATE_BLOG);
  const router = useRouter();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const notEmptyFields = !!(name && body);

    if (notEmptyFields) {
      const { data } = await createBlog({
        variables: { name, body, createAt: Date.now().toString() },
      });

      const blog = data.createBlog;
      // TODO: Fix This ( id of undefined )
      if (blog) {
        setBody('');
        setName('');
        router.push(`/blog/${blog.id}`);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleCreatePost}
        className="flex flex-col justify-center items-center my-4 sm:w-8/12 md:w-6/12 "
      >
        <h1 className="text-3xl justify-self-start mb-3">Create Your Blog</h1>
        <input
          className="px-5 py-2 bg-transparent border border-green-900 rounded my-1 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="Blog Name"
        />
        <input
          className="px-5 py-2 bg-transparent border border-green-900 rounded my-1 w-full"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          required
          placeholder="Body"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-green-900 border border-green-900 rounded my-1 w-full"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default create;
