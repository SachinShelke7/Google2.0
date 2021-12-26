import { GlobeIcon } from "@heroicons/react/solid";
import React from "react";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
        <div className="px-8 py-3">
          <p>India</p>
        </div>
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
            <GlobeIcon className="h-5 mr-1 text-green-700"/>carbon neutral since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Work</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto lg:col-start-3">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
        </div>

    </footer>
  );
}

export default Footer;
