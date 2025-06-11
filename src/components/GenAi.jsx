import React from "react";
import { FlipCard } from "./FlipCard";

const servicesData = [
  {
    th: "HOUDINI",
    title: "AI",
    description: "Use Gen AI to reduce overhead",
    bigDescHead: `Use GenAI to shortcut resolution processes for reduced Average Handling Time (AHT)`,
    bigDesc: `<p style="font-weight: 400; text-align: center;">Efficiently resolving customer issues relies on effective guidance for call center representatives. The more dynamic this guidance, the faster issues can be resolved. Both OSS/BSS data and customer statements should dynamically influence the interaction. However, guiding tools often restrict flexibility by steering reps in one fixed direction. This limits the simultaneous retrieval of customer statements and OSS/BSS data, as customer inputs are only incorporated into the problem-solving process when specifically prompted.</p><br><p style="text-align: center;">-Dynamic guidance accelerates issue resolution for call center reps.<br>
                -OSS/BSS data and customer inputs should shape interactions in real time.<br>
                -Rigid tools limit flexibility, delaying problem-solving and reducing efficiency.</p><br><p style="font-weight: 400; text-align: center;">When customer statements are not dynamically integrated into the resolution process, customers are often forced to repeat themselves during interactions, leading to frustration and poor experiences. Long AHTs further exacerbate this issue, causing longer wait times due to overwhelmed call centers. This wastes the potential to shorten interactions and fully utilize the value of customer inputs in real-time.</p><br><p style="text-align: center;">-Lack of dynamic integration forces customers to repeat themselves, causing frustration.<br>
                -Long AHTs lead to overwhelmed call centers and extended wait times.<br>
                -Real-time customer input utilization remains underleveraged, missing efficiency gains.</p><br><p style="font-weight: 400; text-align: center;">HOUDINI AI enables call center reps to shorten interactions at any stage through simple text inputs. Using LLM, natural language inputs are precisely mapped to technical data points, enhancing the guidance provided to agents. Every second of the call is optimized to achieve results as quickly and dynamically as possible. While the system performs automated actions like reconfigurations or reboots, agents can simultaneously gather new information to directly influence problem resolution. This LLM-based approach reduces AHT by up to 38% and significantly improves customer experiences.</p><br><p style="text-align: center;">-HOUDINI AI shortens call interactions with LLM-powered text input mapping.<br>
                -It optimizes guidance, automates actions, and enables real-time issue resolution.<br>
                -This approach reduces AHT by up to 38% and enhances customer experiences.</p>`,
  },
  {
    th: "CHAD",
    title: "AI",
    description: "Fuel decisions with data to drive efficency.",
    bigDescHead: `Drive self-care adoption with hyper-adaptive, personalized customer service journeys.`,
    bigDesc: `<p style="font-weight: 400; text-align: center;">Chatbots are in a dilemma of rigid processes vs. freedom. They either require big knowledge bases – or provide overly creative and unreliable answers. Lack of reliability renders chatbots unsuitable for executing automated actions and solving technically complex problems independently. However, your customer service team and knowledge engineers face significant challenges in creating content for chatbots. Despite their efforts, gaps remain when addressing highly specific or individual customer inquiries.</p><br><p style="text-align: center;">-Chatbots struggle between rigid processes and unreliable creativity.<br>
                -They either need vast knowledge bases or risk providing inaccurate responses.<br>
                -Creating chatbot content is challenging, leaving gaps in handling complex inquiries.</p><br><p style="font-weight: 400; text-align: center;">As a result, while chatbots are available 24/7, they fail to solve problems autonomously around the clock. Instead, they are often used as entry points while their full potential to assist customers quickly and independently remains untapped. This leaves your customers more frustrated than impressed, hindering the adoption of chatbot solutions. Moreover, the considerable effort required from knowledge engineers to generate content does not align with the actual outcomes or the intended business value. Your key metrics like NPS and FCR remain below expectations, and you struggle to realize the anticipated cost savings from automating customer issue resolution.</p><br><p style="text-align: center;">-Chatbots operate 24/7 but fail to resolve issues autonomously.<br>
                -Their potential remains untapped, leading to customer frustration and low adoption.<br>
                -High content creation effort yields poor results, keeping NPS and FCR below expectations.</p><br><p style="font-weight: 400; text-align: center;">CHAD AI is an LLM-powered chatbot interface that solves your dilemma. It provides instant troubleshooting guidance and excels in answering even highly specific questions, ensuring swift resolutions and improved customer satisfaction. To do that, CHAD AI enriches your chatbot interactions with global knowledge and the unique knowledge resources of your company – without the need to implement additional content. CHAD AI delivers tailored, seamless interactions that elevate customer satisfaction and optimize the overall service experience – while ensuring reliability through a data-driven framework. You save effort and costs for maintaining knowledge bases while improving KPIs like NPS and FCR.</p><br><p style="text-align: center;">-CHAD AI, powered by LLM, enables instant, reliable troubleshooting and support.<br>
                -It integrates global and company-specific knowledge without extra content creation.<br>
                -Enhancing customer satisfaction, it reduces costs and improves KPIs like NPS and FCR.</p><br>`,
  },
  {
    th: "GEN",
    title: "AI",
    description: "Reduce field service cost",
    bigDescHead: `Efficient field service without unnecessary dispatches`,
    bigDesc: `<p style="font-weight: 400; text-align: center;">Despite significant efforts to enhance the acceptance and functionality of self-care channels, resolution rates remain below expectations. Customers expect their journeys to be effortless, simple, and concise. To meet these expectations, interactions need to adapt continuously to new data, insights, and customer inputs. However, most customer service journeys are still characterized by lengthy and rigid processes. Once a context is set, customers face a series of questions, many of which may no longer relate to their actual issue.</p><br><p style="text-align: center;">-Despite improvements, self-care resolution rates remain low.<br>
                -Customers expect effortless, adaptive support experiences.<br>
                -Rigid, outdated processes lead to irrelevant questions and frustration.</p><br><p style="font-weight: 400; text-align: center;">The result: negative customer experiences. Customers often feel misunderstood regarding their problem. Lengthy, complex interactions involve fixed dialog sequences and questions which the customer may have already answered. This leads to poor resolution rates, low adoption of self-care tools, and frequent escalations to human-assisted channels. Investments in reworking or extending existing journeys often fail, as they do not address the core issue: a lack of adaptivity and a data-driven approach to customer service.</p><br><p style="text-align: center;">-Rigid interactions frustrate customers, making them feel misunderstood.<br>
                -Fixed dialogues and repeated questions lower resolution rates and self-care adoption.<br>
                -Without adaptivity and a data-driven approach, improvements fail to solve the core issue.</p><br><p style="font-weight: 400; text-align: center;">HRAIZN NBA AI transforms customer service journeys into adaptive, dynamic experiences – on all your customer support channels. It leverages data from OSS/BSS systems, customer feedback, and new insights to continuously enhance and personalize customer journeys. This approach allows for seamless context switching at any point in the interaction. Additional information is used to personalize responses, while irrelevant questions are eliminated. For knowledge engineers, this reduces the complexity of modeling extensive processes. Customer service teams are enabled to create better customer experiences that drive self-care adoption and improve the performance of human-assisted channels. Ultimately, this approach ensures telcos achieve the ROI they expect from self-care solutions and agent guidance.</p><br><p style="text-align: center;">-HRAIZN NBA AI creates adaptive, data-driven customer service experiences across all channels.<br>
                -It personalizes interactions by leveraging OSS/BSS data, feedback, and insights.<br>
                -This reduces process complexity, boosts self-care adoption, and improves ROI for telcos.</p>`,
  },
];

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
              {servicesData.map((service, index) => (
                <FlipCard
                  key={index}
                  th={service.th}
                  title={service.title}
                  description={service.description}
                  bigDescHead={service.bigDescHead}
                  bigDesc={service.bigDesc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAi;
