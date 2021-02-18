import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/queries';

const Signup = () => {
  const [loginUser] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const isFieldsAreNotEmpty = !!(email && password);

    if (isFieldsAreNotEmpty) {
      const { data, errors } = await loginUser({
        variables: {
          email,
          password,
        },
      });

      const { token, item } = data.authenticateUserWithPassword;
      if (token && item.id) {
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
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center my-4 sm:w-8/12 md:w-6/12 "
      >
        <h1 className="text-3xl justify-self-start mb-3">
          Login to Your Account
        </h1>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
