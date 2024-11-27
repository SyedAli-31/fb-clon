import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      {/* Main content wrapper */}
      <div className="flex-grow">
        {/* Left Section */}
        <div className="">
          <Image
            className="absolute top-[4%]"
            src={"/logo.png"}
            height={150}
            width={120}
            alt="logo"
          />
        </div>
        <div>
          <Image
            src={"/image1.png"}
            width={616}
            height={390}
            alt="facebook"
            className="block text-[rgb(28,30,33)] ltr font-sans text-[12px] leading-[16.08px] h-[616px] ml-24 rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] overflow-clip object-contain"
          />
          <div
            className="
            absolute
            left-[2%]  /* Adjust left position to fit the placement */
            top-[60%]   /* Adjust top position for vertical alignment */
            text-black
            text-[56px]  /* Font size matching the text in the image */
            leading-[1.1] /* Adjust line height */
            font-bold /* Font weight */
            max-w-[100%] /* Ensure text doesn't overflow */
            whitespace-normal
          "
          >
            <span className="block">Explore</span>
            <span className="block">the things</span>
            <span className="block text-blue-500">you love.</span>
          </div>
        </div>

        {/* Center line */}
        

        {/* Right Side Form */}
        <div className="absolute right-[8%] top-[20%] w-[400px] bg-gray-100 p-6 rounded-2xl  ">
          <h2 className="text-[24px] font-bold mb-4">Log in to Facebook</h2>
          <form>
            <input
              type="text"
              placeholder="Email or mobile number"
              className="w-[450px] px-4 py-5 h-16 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[450px] px-4 py-5 h-16 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-[450px] py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition">
              Log in
            </button>
            <div className="text-center ml-20 text-blue-500 mt-3 cursor-pointer">
              Forgotten password?
            </div>
            <hr className="my-6" />
            <button className="w-[450px] py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition">
              Create new account
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 py-6 mt-6">
        <div className="flex flex-wrap justify-center text-gray-500 text-sm mb-4">
          <span className="mx-2">English (UK)</span>
          <span className="mx-2">اردو</span>
          <span className="mx-2">پښتو</span>
          <span className="mx-2">العربية</span>
          <span className="mx-2">हिन्दी</span>
          <span className="mx-2">বাংলা</span>
          <span className="mx-2">ਪੰਜਾਬੀ</span>
          <span className="mx-2">More languages…</span>
        </div>
        <div className="flex flex-wrap justify-center text-gray-500 text-xs">
          <span className="mx-2"><a href=""> Sign Up</a></span>
          <span className="mx-2"><a href=""> Log in</a></span>
          <span className="mx-2"><a href=""> Messenger</a></span>
          <span className="mx-2"><a href=""> Facebook Lite</a></span>
          <span className="mx-2"><a href=""> Video</a></span>
          <span className="mx-2"><a href=""> Places</a></span>
          <span className="mx-2"><a href=""> Games</a></span>
          <span className="mx-2"><a href=""> Marketplace</a></span>
          <span className="mx-2"><a href=""> Meta Pay</a></span>
          <span className="mx-2"><a href=""> Meta Store</a></span>
          <span className="mx-2"><a href=""> Meta Quest</a></span>
          <span className="mx-2"><a href=""> Ray-Ban Meta</a></span>
          <span className="mx-2"><a href=""> Meta AI</a></span>
          <span className="mx-2"><a href=""> Instagram</a></span>
          <span className="mx-2"><a href=""> Threads</a></span>
          <span className="mx-2"><a href=""> Fundraisers</a></span>
          <span className="mx-2"><a href=""> Services</a></span>
          <span className="mx-2"><a href=""> Voting Information Centre</a></span>
          <span className="mx-2"><a href=""> Privacy Policy</a></span>
          <span className="mx-2"><a href=""> Privacy Centre</a></span>
          <span className="mx-2"><a href=""> Groups</a></span>
          <span className="mx-2"><a href=""> About</a></span>
          <span className="mx-2"><a href=""> Create ad</a></span>
          <span className="mx-2"><a href=""> Create Page</a></span>
          <span className="mx-2"><a href=""> Developers</a></span>
          <span className="mx-2"><a href=""> Careers</a></span>
          <span className="mx-2"><a href=""> Cookies</a></span>
          <span className="mx-2"><a href=""> AdChoices</a></span>
          <span className="mx-2"><a href=""> Terms</a></span>
          <span className="mx-2"><a href=""> Help</a></span>
          <span className="mx-2"><a href=""> Contact uploading and non-users</a></span>
          <span className="mx-2"><a href="">Meta © 2024</a></span>
        </div>
      </footer>
    </div>
  );
};

export default Page;
