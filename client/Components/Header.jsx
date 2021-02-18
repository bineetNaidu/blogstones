import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex py-5 mx-12">
      <div className="flex-1">
        <Link href="/">
          <h1 className="text-2xl cursor-pointer">BlogStones.dev</h1>
        </Link>
      </div>

      <div>
        <Link href="/signup">
          <span className="text-green-500 hover:text-white cursor-pointer text-lg transition mx-1">
            Signup
          </span>
        </Link>
        <Link href="/login">
          <span className="text-green-500 hover:text-white cursor-pointer text-lg transition mx-1">
            Login
          </span>
        </Link>
        <Link href="/blog/create">
          <span className="text-green-500 hover:text-white cursor-pointer text-lg transition mx-1">
            Create a Blog
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
