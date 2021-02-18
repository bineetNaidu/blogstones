import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/queries';

const Signup = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const isFieldsAreNotEmpty = !!(name && email && password);

    if (isFieldsAreNotEmpty) {
      const { data, errors } = await createUser({
        variables: {
          name,
          email,
          password,
        },
      });

      const user = data.createUser;
      if (user.id && user.email) {
        setName('');
        setEmail('');
        setPassword('');
        router.push('/');
      }
    } else {
      alert('Please Fill Out the Required Fields');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleCreateUser}
        className="flex flex-col justify-center items-center my-4 sm:w-8/12 md:w-6/12 "
      >
        <h1 className="text-3xl justify-self-start mb-3">
          Create Your Account
        </h1>
        <input
          className="px-5 py-2 bg-transparent border border-green-900 rounded my-1 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="Name"
        />
        <input
          className="px-5 py-2 bg-transparent border border-green-900 rounded my-1 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Email"
        />
        <input
          className="px-5 py-2 bg-transparent border border-green-900 rounded my-1 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
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

export default Signup;
