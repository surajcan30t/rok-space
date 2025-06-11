import React from "react";
import { FlipCard } from "./FlipCard";

const GenAi = () => {
  return (
    <section
      id="genai"
      className="min-h-screen flex flex-col justify-center items-center px-20"
    >
      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 px-10">
        <div className="relative h-screen md:h-full col-span-1 flex justify-center items-center">
          <div class="absolute w-40 h-40 md:w-52 md:h-52 border-2 border-white rounded-full md:left-30 md:top-0 flex items-center justify-center text-center text-base font-semibold">
            MACHINE
            <br />
            LEARNING
          </div>

          <div class="absolute w-40 h-40 md:w-52 md:h-52 border-2 border-white rounded-full left-[44%] top-[53%] md:left-10 md:top-34 flex items-center justify-center text-center text-base font-semibold">
            RULES
          </div>

          <div class="absolute w-40 h-40 md:w-52 md:h-52 border-2 border-white rounded-full right-[44%] top-[53%] md:left-50 md:top-34 flex items-center justify-center text-center text-base font-semibold">
            GEN
            <br />
            AI
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col items-center justify-start">
            <h2 className="text-4xl font-family-mono mb-8 text-left mt-32 md:mt-0">
              AI
            </h2>
            <p className="text-base text-left mb-12 md:w-2/3">
              Elevate your operations with the HRAIZN Telecoms Suite, where
              cutting-edge AI technology not only reduces costs but also
              dramatically enhances the customer experience. <br />
              <br /> Explore industry leading AI-powered tools designed to bring
              about the change you’ve been seeking. With HRAIZN, experience a
              paradigm shift in how you connect with customers, offering them a
              seamless omnichannel journey that’s both efficient and satisfying.
              Step into the future of telecom—where innovation drives superior
              service and strategic excellence.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <FlipCard
                th={"HOUDINI"}
                title={"AI"}
                description={"Use Gen AI to reduce overhead"}
                bigDesc={`Use GenAI to shortcut resolution processes for reduced Average Handling Time (AHT)`}
                bigDescHead={`Dynamic guidance accelerates issue`}
              />
              <FlipCard
                th={"CHAD"}
                title={"AI"}
                description={"Use Gen AI to reduce overhead"}
                bigDesc={`Use GenAI to shortcut resolution processes for reduced Average Handling Time (AHT)`}
                bigDescHead={`Dynamic guidance accelerates issue`}
              />
              <FlipCard
                th={"GEN"}
                title={"AI"}
                description={"Use Gen AI to reduce overhead"}
                bigDesc={`Use GenAI to shortcut resolution processes for reduced Average Handling Time (AHT)`}
                bigDescHead={`Dynamic guidance accelerates issue`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAi;
