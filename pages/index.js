import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { useRef } from "react";
import { useRouter } from "next/router";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  const SeachInputRef = useRef(null);

const search = (e) => {
  e.preventDefault();
  const term = SeachInputRef.current.value;

  if (!term) return;

  router.push(`search?term=${term}`)
}

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 hover:scale-110 cursor-pointer duration-200" />

          {/* Avtar */}
          <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I5nN7BhPoDRKOMgHyE-TK5Ugdv6J9tFZ5oaGWrZuA=s83-c-mo" />
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
          alt="Image"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-2 text-gray-500" />
          <input ref={SeachInputRef}  type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-2">
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  );
}
