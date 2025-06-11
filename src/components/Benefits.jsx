import React from "react";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="min-h-screen flex flex-col justify-center items-center px-20"
    >
      <div className="flex flex-col items-center justify-center mt-52 md:mt-0">
        <h2 className="text-6xl font-family-mono mb-8 text-center">BENEFIT</h2>
        <p className="text-base text-center mb-12 w-2/3">
          Every offering in the VERGEFORM Telecom Suite is designed to help
          operators and service providers tackle 2 major challenges:
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center hover:-translate-x-2 hover:transition-all hover:ease-linear">
          <h2 className="text-4xl font-family-mono font-light mb-8 text-center">
            COST <br />
            PRESSURE
          </h2>
          <p className="text-base text-center mb-12 w-5/6">
            Customers expect closed loop customer support on their channel of
            choice while expecting 24/7 availability and perfect customer
            experience.
            <br />
            VERGEFORM helps deliver omnichannel customer experiences at an
            outstanding level while improving customer satisfaction and cost
            parameters.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:translate-x-2 hover:transition-all hover:ease-linear">
          <h2 className="text-4xl font-family-mono font-light mb-8 text-center">
            CUSTOMER <br />
            EXPECTATION
          </h2>
          <p className="text-base text-center mb-12 w-5/6">
            In a converging market with limited growth opportunity, revenue
            assurance and cost control remain essential to the telecoms business
            model.
            <br />
            VERGEFORM helps reduce operational expenses by automating customer
            support requests from A to Z – alongside your current tools &
            systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
