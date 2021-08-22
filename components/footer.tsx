import React from 'react';
import Image from 'next/image';
export const Footer = () => {
  return (
    <a
      href="https://theprosecode.com"
      className="w-screen overflow-hidden absolute bottom-0 flex justify-center bg-darkText h-10 items-center"
    >
      <Image
        src="/images/logo.png"
        alt="TheProseCode"
        height={50}
        width={50}
      ></Image>
      <div className="brand flex items-end">
        <p>The Prose Code</p>
        <p className="ml-8 brand name">Pawan Bhandarkar © 2021</p>
      </div>
    </a>
  );
};
