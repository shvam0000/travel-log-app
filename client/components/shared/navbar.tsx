import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Travel } from '../../public/icons/travel-log';
import { useRouter } from 'next/router';

const NavLink = ({ to, children }) => {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
};

const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }>
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }>
          Contact
        </a>
      </div>
    </div>
  );
};

const Navbar = ({}) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const logoutHandler = () => {
    localStorage.clear();
    router.replace('/');
  };

  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link href="/" passHref>
          <figure className="text-5xl">
            <Travel />
          </figure>
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}>
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex font-semibold text-xl">
          {router.pathname === '/travel-log' || '/add-log' || '/profile' ? (
            <div className="flex items-center">
              <NavLink to="/travel-log">View All Logs</NavLink>
              <NavLink to="/add-log">Log Entry</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <button
                onClick={logoutHandler}
                className="font-bold text-xl  px-4 py-2 rounded-xl bg-slate-400 text-white">
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/auth">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;