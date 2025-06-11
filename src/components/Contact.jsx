import React from "react";

export default function ContactForm() {
  return (
    <div
      id="contact"
      className="min-h-screen min-w-[100vw] bg-[#0a0a12] text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 text-gray-700 opacity-10 text-[6vw] font-bold leading-none tracking-widest select-none whitespace-nowrap">
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap justify-center items-center">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="mx-4 my-2 font-family-mono">
              ROKSPACE
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 font-family-mono">
            GET IN TOUCH
          </h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Find out more about our products and offerings and schedule your
            demo to see more!
          </p>
        </div>
        <form className="space-y-4 bg-[#0a0a12]">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              First name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              Last name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              Business Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Message</label>
            <textarea
              rows="4"
              className="mt-1 p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" required />
            <label className="text-sm">
              I agree to receive other communications from solvatio.
              <span className="text-red-500">*</span>
            </label>
          </div>
          <p className="text-xs text-gray-400">
            You may unsubscribe from these communications at any time by sending
            an email at{" "}
            <a
              href="mailto:marketing2@solvatio.com"
              className="text-blue-400 underline"
            >
              mradul@rokspace.com
            </a>
            . For more information on how to unsubscribe, our privacy practices,
            and how we are committed to protecting and respecting your privacy,
            please review our{" "}
            <a href="#" className="text-yellow-400 underline">
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            BOOK A MEETING
          </button>
        </form>
      </div>

      <footer className="relative z-10 w-full mt-20 px-4 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white py-10 border-t border-gray-800">
          <div className="space-y-2 flex justify-center">
            <ul className="space-y-1 font-family-mono">
              <li>HOME</li>
              <li>OFFERINGS</li>
              <li>APPLICATION</li>
              <li>BENEFITS</li>
              <li>GEN AI</li>
              <li>INDUSTRIES</li>
              <li>ABOUT US</li>
            </ul>
          </div>
          <div className="space-y-2 flex justify-center">
            <div>
              <h4 className="font-bold mb-2 text-lg">Overview</h4>
              <ul className="space-y-1">
                <li>IMPRINT</li>
                <li>DATA PROTECTION</li>
                <li>INVESTOR RELATIONS</li>
                <li>JOB OFFERINGS</li>
                <li>RESSOURCES</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2 flex justify-center">
            <div>
              <h4 className="font-bold mb-2 text-lg">Business Info</h4>
              <p>Zenia, 4th Floor</p>
              <p>Hiranandani Business Park</p>
              <p>Hiranandani Estate</p>
              <p>Off Ghodbunder Road</p>
              <p>Thane (West), Maharashtra - 400607</p>
              <p>mradul@rokspace.com</p>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 py-4 text-xs">
          © {new Date().getFullYear()} RokSpace
        </div>
      </footer>
    </div>
  );
}
