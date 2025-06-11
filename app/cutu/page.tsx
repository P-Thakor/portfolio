
"use client";

import Image from "next/image";

const page = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 dark:from-pink-900 dark:via-purple-900 dark:to-red-900 overflow-hidden relative">
      
      <Image
        src="https://res.cloudinary.com/dxhgmcprv/image/upload/v1749664177/IMG_20231210_113412_gd6ufh.jpg"
        alt="Love Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-50"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 dark:text-gray-200 relative z-10 mt-20">
        I love you 3000 Cutu ❤️
      </h1>
      <p className="text-lg md:text-2xl text-center text-gray-700 dark:text-gray-300 relative z-10 mt-4 p-14">
        Hey cutu, I know I am not able to express my feelings well. It makes us
        both sad sometimes. But I want you to know that you mean the world to me.
        I do not take you for granted really. I am so grateful to have you in my life.
        You are my everything, my love and my best friend.
        I know you think that I do not appreciate you, but I truly do.
        But till now it was important that I took my placement seriously. 
        Please believe me, I really do want to spend time with you.
        I love you my sweet sweet pankhu. I love you more than I can express.
      </p>
    </div>
  );
};

export default page;
