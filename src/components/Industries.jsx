import React from "react";

const Industries = () => {
  return (
    <section
      id="industries"
      className="min-h-screen flex flex-col justify-center items-center px-20"
    >
      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 px-10">
        <div className="w-full h-full flex flex-col justify-center text-right col-span-1">
          <div className="font-family-mono text-3xl mb-10 text-right">
            INDUSTRIES
          </div>
          <p>
            VERGEFORM solutions optimize efficiency and drive cost reductions in
            customer operations of various telco companies. Get in touch for
            more information regarding your specific business challenge.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 gap-y-6 text-xs md:text-base">
          <div className="w-full flex justify-center items-center gap-2 md:gap-5">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-xl border-2 flex flex-col justify-center text-right px-3 font-family-mono hover:scale-110 transition-all duration-300 ease-in-out">
              COMMUNICATION <br /> SERVICE <br /> PROVIDERS
            </div>
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-xl border-2 flex flex-col justify-center text-right px-3 font-family-mono hover:scale-110 transition-all duration-300 ease-in-out">
              MOBILE <br /> NETWORK <br /> OPERATORS
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-2 md:gap-5">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-xl border-2 flex flex-col justify-center text-right px-3 font-family-mono hover:scale-110 transition-all duration-300 ease-in-out">
              INTERNET <br /> SERVICE <br /> PROVIDERS
            </div>
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-xl border-2 flex flex-col justify-center text-right px-3 font-family-mono hover:scale-110 transition-all duration-300 ease-in-out">
              WHOLESALE & OAN <br /> OPERATORS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
