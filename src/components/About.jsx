import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col items-center tracking-wide">
        <h2 className="text-center text-4xl font-bold mb-6">WE PUT THE <span className="text-yellow-400">AI</span> IN REP<span className="text-yellow-400">AI</span>R.</h2>
        <p className="text-center w-4/5 text-base mb-4 leading-10">
          The <span className="text-2xl font-family-sans">RockSpace</span> Telecoms Suite is the newest product line in our 20 year
          history of successful automated customer support solutions in
          telecoms.
        </p>
        <p className="w-4/5 text-center text-base leading-10">
          Discover one of 6 AI fueled and future-proove offerings that not only
          save operational cost, but improve customer experiences in an
          omnichannel world.
        </p>
      </div>
    </section>
  );
};

export default About;
