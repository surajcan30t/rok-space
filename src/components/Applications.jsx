import React from "react";
import { FlipCard } from "./FlipCard";

const servicesData = [
  {
    th: "SELF",
    title: "CARE",
    description: "Solve up to 80% of issues digitally",
    bigDescHead: `Solve 50 to 80% of your customer problems digitally through AI-driven self-care`,
    bigDesc: `<p style="font-weight: 400; text-align: center;">Truly relevant cost savings through self-care are only achieved when solutions are effortless, adaptive and automated. However, customers still experience customer support solutions that require a lot of knowledge and patience on their part. The challenge is to leverage system and conversational data dynamically in real-time to provide customers with simple, relevant and automated assistance.</p><br><p style="font-weight: 400; text-align: center;">If there is a fundamental lack of dynamism, simplification and automation, the solution rates and acceptance of self-care channels will not improve in the long term. In addition to the high costs caused by manual customer contacts, this has a negative impact on customer experience and the image of the telco companies concerned.</p><br><p style="font-weight: 400; text-align: center;">HRAIZN solutions combine real-time OSS/BSS data with a powerful AI inference engine to address these challenges. Instead of hard-coded resolution paths, the inference engine treats every customer issue uniquely and leverages data dynamically to find the shortest path to resolution. Interactions on self-care channels are concise and effortless, while connection to underlying systems allows for powerful automated actions. This proven approach leads to enhanced self-care acceptance and improvement in resolution and adoption rates.</p>`,
  },
  {
    th: "CUSTOMER",
    title: "CARE",
    description: "Boost customer support KPIs across channels",
    bigDescHead: `Boost Customer Service KPIs Across All Channels—Effortlessly`,
    bigDesc: `<p style="font-weight: 400; text-align: center;">Reducing customer service costs is an obvious goal, but unlocking real savings can feel impossible:</p><br><p style="text-align: center;">— How can you<strong> leverage data</strong> to empower self-service channels and automate 80% of resolutions —<br>
— How can you<strong> use AI</strong> to create seamless, intuitive interactions that handle even complex issues effortlessly? —<br>
— How can you<strong> implement adaptive guidance</strong> to reduce AHT and eliminate wait times? —<br>
— How can you<strong> apply Machine Learning</strong> to proactively detect issues before they impact CX? —</p><br><p style="font-weight: 400; text-align: center;">The answer is often&nbsp;<strong>effort</strong>. Customer service teams must prioritize due to limited resources—improving quality in one area while sacrificing another. Existing solutions struggle to fully utilize AI and GenAI, and starting from scratch isn’t an option. The result? A constant cycle of improvement that never addresses the root problem:&nbsp;<strong>high effort, limited next-gen capabilities, and shifting priorities.</strong></p><br><p style="font-weight: 400; text-align: center;">HRAIZN tackles these challenges head-on, enhancing customer service KPIs&nbsp;<strong>while reducing effort</strong>. Our powerful AI inference engine, combined with preconfigured customer support content, instantly elevates service quality across all channels.<br>
At the core of HRAIZN is a true&nbsp;<strong>omnichannel architecture</strong>, enabling seamless, data-driven support interactions that adapt in real time. Built specifically for&nbsp;<strong>telco customer support</strong>, HRAIZN isn’t just a platform—it’s a&nbsp;<strong>plug-and-play solution</strong>&nbsp;with ready-to-use customer support flows for the most common technologies.</p><br>`,
  },
  {
    th: "FIELD",
    title: "FORCE",
    description: "Reduce field service cost",
    bigDescHead: `Efficient field service without unnecessary dispatches`,
    bigDesc: `<p style="font-weight: 400; text-align: center;">Field service remains a major cost driver in telecom customer support. The lack of data-driven root cause detection and intelligent guidance leads to excessive dispatches. Field Service is often the default when no immediate solution is available—an expensive approach. However, If a technician visit is unavoidable, they must be equipped with the right tools and guidance to ensure efficiency.</p><br><p style="font-weight: 400; text-align: center;">Unnecessary dispatches are the result of lacking a&nbsp;<strong>data-driven approach</strong>. The basis to avoid costly on-site visits is a root cause diagnosis that leverages OSS/BSS data and topology analysis. Combined with powerful remote resolutions, most issues can be solved in self-care channels or 1<sup>st</sup> level. Field service technicians rely heavily on their expertise, making well-trained workers a valuable but limited resource. To maximize efficiency, they need remote access to essential systems and tools via a unified interface. Additionally, intuitive, dynamic guidance can help new technicians quickly adapt to the complexity of their tasks. Failing to optimize both dispatch prevention and field force efficiency leads to soaring costs.</p><br><p style="font-weight: 400; text-align: center;">By leveraging&nbsp;<strong>an</strong> AI-driven real-time fault clearance,&nbsp;<strong>Swisscom AG</strong>&nbsp;reduced field service dispatch costs by&nbsp;<strong>€4.5 million</strong>&nbsp;over three years. A data-focused approach enabled root cause resolution, minimizing unnecessary dispatches and improving customer experience through faster fixes. However, when dispatch is unavoidable,&nbsp;<strong>HRAIZN </strong>still provides technicians with&nbsp;<strong>tailored action recommendations and remote system access</strong>, enhancing efficiency and customer satisfaction while reducing costs.</p>`,
  },
  {
    th: "PROACTIVE",
    title: "CARE",
    description: "Resolve issues before they impact CX",
    bigDescHead: `Reduce Costs by Resolving Customer Issues Before They Impact CX`,
    bigDesc: `<p style="text-align: center;"><span lang="EN-US">Size and versatility of telco infrastructure pose a challenge to save cost with proactive issues resolution. Many systems either lack proactive capabilities or fail to utilize them effectively due to their sheer number and unclear dependencies. To address this, data streams must be continuously monitored and analyzed for anomalies, with automated root cause detection and resolution wherever possible.</span></p><br><p style="text-align: center;"><span lang="EN-US">Without proactive measures, manual fixes and customer service cases drive up costs. The effort required to implement proactivity forces NOC, IT teams, and product managers to focus only on the most critical 5% of cases, leaving significant potential untapped. Smart, proactive solutions can unlock this potential and drive substantial cost savings.</span></p><br><p style="text-align: center;"><span lang="EN-US">HRAIZN PULSE leverages statistical models and machine learning to detect issues proactively. It enables you to enhance existing alerting systems or introduce new proactive capabilities. Early detection and automated root cause analysis can be applied to various use cases—monitoring critical network components, optimizing OTT service performance, managing smart home devices. As safety mechanism, you can also detect large scale customer issues and their root cause after just a few customer contacts. Apply automated fixes, reduce manual effort and prevent negative customer experiences.</span></p>`,
  },
];

const Applications = () => {
  return (
    <section
      id="applications"
      className="min-h-screen flex flex-col justify-center items-center px-20"
    >
      <div className="flex flex-col-reverse mt-52 md:mt-0 md:grid md:grid-cols-2 gap-10 px-10">
        <div className="col-span-1 flex gap-x-3 gap-y-6 flex-wrap">
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
        <div className="flex flex-col items-center text-left col-span-1">
          <div className="font-family-mono text-3xl mb-10">APPLICATIONS</div>
          <p>
            Elevate your operations with the HRAIZN Telecoms Suite, offering
            benefits for all major operational departments within operators.
          </p>
          <br />
          <br />
          <p>
            Explore how HRAIZN can help you overcome business challenges within
            your organisation to deliver better customer care and build your
            brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Applications;
