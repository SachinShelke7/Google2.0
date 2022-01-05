import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
      e.preventDefault();
      const term = searchInputRef.current.value;

      if (!term) return;

      router.push(`/search?term=${term}`);
  }

  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
      <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        priority
        width={150}
        height={40}
        onClick={() => router.push("/")}
        className="cursor-pointer"
        alt="Image"
      />
      <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg
      max-w-3xl items-center px-6 py-2 sm:py-3 ml-2 sm:ml-10 mr-5">
        <input ref={searchInputRef} type="text" 
        className="flex-grow w-full focus:outline-none"
        />
        <XIcon 
        className="h-7 mr-0 sm=mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
        onClick={() => (searchInputRef.current.value ="")}
        />
        <MicrophoneIcon 
        className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300"/>
        <SearchIcon onClick={search} 
        className="mr-3 h-6 hidden sm:inline-flex text-blue-500 
        "/>
        <button hidden onClick={search} type="submit">Search</button>
      </form>
      <Avatar url='https://lh3.googleusercontent.com/ogw/ADea4I5nN7BhPoDRKOMgHyE-TK5Ugdv6J9tFZ5oaGWrZuA=s83-c-mo'
      className="ml-auto" />
      </div>
      {/* header */}
      <HeaderOptions />

    </header>
  );
}

export default Header;
