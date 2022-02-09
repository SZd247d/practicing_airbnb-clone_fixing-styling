import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:pl-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          alt="airbnbImage"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm overflow-hidden">
        <input
          type="text"
          placeholder="Start Your Search"
          className="px-4 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full text-white p-1 cursor-pointer hidden md:inline-flex md:mx-2 shrink-0" />
      </div>

      {/* Right */}

      <div className="flex space-x-4 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6  cursor-pointer shrink-0" />

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm space-x-2 px-2">
          <MenuIcon className="h-6  cursor-pointer  shrink-0" />
          <UserCircleIcon className="h-6 cursor-pointer shrink-0" />
        </div>
      </div>
    </header>
  );
}

export default Header;
