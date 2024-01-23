import React from "react";
import ArtificialIntelligence from "../Assets/Images/ArtificialDetailed.png";
import { Link } from "react-router-dom";
const ArtificalIntelligence = () => {
  return (
    <div className="blogback">
      <div className="blogHeaderBack pt-[75px]">
        {/* <img src={headerblogDetails} alt="" className='absolute top-0 w-full' /> */}
        <div className="block lg:grid lg:grid-cols-2 gap-4 relative z-[1]">
          <div className="pl-[50px] lg:pl-[100px] pr-[50px]">
            <p className="text-white text-[14px] lg:text-[18px] font-inter mt-[31px]">
            <Link to="/" className="homeButton">
                Home
              </Link>{" "}
              /{" "}
              <Link to="/Blogs" className="homeButton">
                Blog
              </Link>
            </p>
            <p className="text-white text-[28px] sm:text-[32px] lg:text-[42px] font-robotoSlab">
              How to Leverage the Benefits of Artificial Intelligence?
            </p>
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <img src={ArtificialIntelligence} alt="" />
          </div>
        </div>
      </div>
      <div className="mx-[30px] md:mx-[50px] xl:mx-[80px] mt-[52px] pb-[50px]">
        {/* <p className='text-[#FCFCFC] text-[28px] font-poppins'>
      Unveil a plethora of opportunities with IIOT solutions.
      </p> */}
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins">
          Back in the 90s, artificial intelligence and machine learning were
          only algorithms and systems, but now they have real-time usage. From
          helping businesses automate their operations to helping them make
          data-driven decisions, AI has proven its worth in our ultra-modern
          world. Building smart machines and performing repetitive tasks are the
          basic concepts of AI. But are we using AI to its full potential? The
          answer is NO! Businesses have not used AI to its full extent.
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins">
          Thus, we have made a DIY platform called DFOS, which helps
          manufacturing hubs embrace the advantages of deep tech such as AI,
          IIOT, =RPA, and so forth. Today, we will primarily focus on artificial
          intelligence.
        </p>

        <p className="text-[#FCFCFC] text-[20px] md:text-[24px] lg:text-[28px] mt-[40px] font-poppins font-medium">
          What is Artificial Intelligence?
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins">
          The thirst of humans to invent something new and more innovative has
          led to num technologies that can now perform human tasks, and
          Artificial intelligence, or AI, is one of them. AI is a branch of
          computer science involved in creating smart machines that can
          replicate human intelligence and perform repetitive tasks. In other
          words, AI is a technology that can make decisions which generally
          requires a certain level of human knowledge or expertise. Today, it
          can deal with the basic problems and issues of everyday life.
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins">
          AI has the capability of changing vision of the entire world. It is a
          wonderful technology for gathering information, analyzing data, and
          helping organizations take real-time decisions. So, now we have a
          brief understanding that what AI is. But do you know how AI works?
          Let’s peep into the answer.
        </p>

        <p className="text-[#FCFCFC] text-[20px] md:text-[24px] lg:text-[28px] mt-[40px] font-poppins font-medium">
          How Does Artificial Intelligence Work?
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins">
          Understanding the workings of AI technology is a hard nut to crack but
          let us learn about it in simple terms.
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins">
          AI has intuitive processing algorithms that can learn the behavioral
          patterns of humans\machines and replicate them. Further, AI uses
          zillions of data sources to extract meaningful insights from them.
          This data can be manipulated to solve complex issues, use cases and
          answer generic questions about everyday lives.
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins">
          Here are the five basic steps of how AI works:
        </p>
        <ul
          className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins"
          style={{ listStyleType: "disc" }}
        >
          <li>Input</li>
          <li>Processing</li>
          <li>Data outcome</li>
          <li>Adjustments</li>
          <li>Assessment</li>
        </ul>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins">
          Now let us look at the benefits of AI for the manufacturing industry.
        </p>
        <p className="text-[#FCFCFC] text-[20px] md:text-[24px] lg:text-[28px] mt-[40px] font-medium">
          Benefits of AI for manufacturing industry
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins ">
          Today AI has multiple benefits for the manufacturing industry. From
          solving complex problems to automating ordinary tasks, it can turn the
          tables for the shop floors. Some of the benefits are as follows:
        </p>
        <p className="text-[#FCFCFC] text-[16px] md:text-[20px] lg:text-[24px] mt-[40px] font-poppins font-medium">
          Accelerate Operations
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins ">
          Reaching maximum shop floor efficiency by using the right technology
          is no longer an easy task. Thus, you need to accelerate your shop
          floor operations with the assistance of AI to achieve overall
          efficiency.
        </p>

        <p className="text-[#FCFCFC] text-[16px] md:text-[20px] lg:text-[24px] mt-[40px] font-poppins font-medium">
          Transparent process
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins ">
          Shop floors can now use advanced technology and increase process
          visibility with the help of AI. The staff members can collect accurate
          data from machines, which makes the process more transparent.
          Furthermore, with artificial intelligence your shop floor is powered
          with the right data.
        </p>

        <p className="text-[#FCFCFC] text-[16px] md:text-[20px] lg:text-[24px] mt-[40px] font-poppins font-medium">
          Better Inventory Management
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins ">
          By automating inventory management and transportation processes, you
          can reduce wastage errors and improve monitoring. Storage and shipping
          costs can be optimized with the help of AI solutions. Additionally,
          the demand and supply gap between the changing customer demand and
          market supply can be quickly responded to with AI tools.
        </p>

        <p className="text-[#FCFCFC] text-[16px] md:text-[20px] lg:text-[24px] mt-[40px] font-poppins font-medium">
          Seamless Data Access
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins ">
          Another benefit of AI that can enhance the productivity of your shop
          floor is its access to endless data sources. Data can be a game
          changer, as with its assistance, you can make data-backed decisions,
          which can be profitable for your shop floor. From tracking customer
          demand to improving product quality, data can help you generate
          valuable insights for the success of your organization.
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins ">
          So now you know where artificial intelligence is used and its benefits
          for the manufacturing industry. So, you should switch to AI solutions.
        </p>
        <p className="text-[#FCFCFC] text-[20px] md:text-[24px] lg:text-[28px] mt-[40px] font-poppins font-medium">
          Leverage AI Solutions with DFOS
        </p>
        <p className="text-[#C8C8C8] text-[14px] lg:text-[18px] font-poppins ">
          DFOS can help you embrace the benefits of AI and many other deep tech
          solutions on a single platform. It provides you with real-time
          analytics, reports & live dashboards with which you can automate your
          operations seamlessly and effectively. If you want to use the
          potential of AI to its maximum extent, reach DesignX.
        </p>
      </div>
    </div>
  );
};

export default ArtificalIntelligence;
