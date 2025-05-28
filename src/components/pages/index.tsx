import { FaCircleCheck } from "react-icons/fa6";
import AutoScrollCarousel from "../reuseables/autoScrollCarousel";
import TestimonialCarousel from "../reuseables/testimonialCarousel";

import {
  AirfranceLogo,
  BarclayLogo,
  ectcGif,
  dashboardImage,
  DftLogo,
  DiscoveryLogo,
  DshcLogo,
  GskLogo,
  IconFive,
  IconFour,
  IconOne,
  IconSix,
  IconThree,
  IconTwo,
  image1,
  LloydLogo,
  RollsroyceLogo,
  SendUpIcon,
} from "../../constant/images";
import { NavLink } from "react-router-dom";

const imageList = [
  BarclayLogo,
  LloydLogo,
  AirfranceLogo,
  DshcLogo,
  DftLogo,
  DiscoveryLogo,
  RollsroyceLogo,
  GskLogo,
  BarclayLogo,
  LloydLogo,
  AirfranceLogo,
  DshcLogo,
  DftLogo,
  DiscoveryLogo,
  RollsroyceLogo,
  GskLogo,
];

const Home = () => {
  return (
    <div className="flex flex-col items-center lg:gap-20 gap-10 w-full">
      <div className="flex flex-col bg-black w-full">
        <div className="flex flex-col w-full justify-center items-center lg:h-[35rem] h-[25rem] text-white bg-pattern">
          <div className="flex flex-col gap-7 lg:w-8/12 w-11/12">
            <div className="lg:text-sm lg:leading-[32px]">
              Visualise <span className="text-[#006dad] font-extrabold">|</span>{" "}
              Optimise <span className="text-[#006dad] font-extrabold">|</span>{" "}
              Innovate
            </div>
            <div className="text-[28px] md:text-4xl lg:text-[2.6rem] lg:leading-[50px]">
              Data analytics <br /> and AI consulting.
            </div>
            <div className="text-sm lg:text-lg lg:w-3/5 opacity-80">
              Our team can advise & implement the right solution to suit your
              needs. Data-driven success starts here.
            </div>
            <div className="flex">
              <NavLink
                className="flex h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
                to="/booking"
              >
                <span className="opacity-80">
                  {" "}
                  Book a free discovery session{" "}
                </span>{" "}
                <img src={SendUpIcon} className="h-2" alt="SendUpIcon" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:w-8/12 w-11/12 items-center">
        <div className="text-gray-500 tracking-normal text-center text-lg group-hover:lg:text-base">
          Trusted by 50+ enterprise, government, and SMB clients around the
          world
        </div>
        <AutoScrollCarousel images={imageList} />
      </div>
      <div className="flex flex-col lg:w-8/12 w-11/12">
        <div className="grid lg:grid-cols-2 gap-10 w-full pb-4 items-center border-gray-200">
          <div className="text-center text-3xl lg:text-left lg:text-[2.4rem] lg:leading-[3rem]">
            Turn Raw Data into Real Results.
          </div>
          <div className="text-base text-gray-500 lg:mx-4">
            We provide the support you need to design, build, and deploy
            solutions across the entire data lifecycle.
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 w-full border-y border-gray-200">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full gap-10 pt-10 lg:py-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <img src={IconOne} className="h-5" alt="IconOne" />
                  <span className="font-medium">Data Strategy</span>
                </div>
                <div className="text-gray-500 text-sm leading-6 lg:w-4/5">
                  We use our exclusive methodologies to develop a playbook of
                  tailored strategies that support your business goals for
                  long-term success.
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <img src={IconTwo} className="h-5" alt="IconTwo" />
                  <span className="font-medium">Data Integration</span>
                </div>
                <div className="text-gray-500 text-sm leading-6 lg:w-4/5">
                  We use modern technology and practical experience to create
                  efficient integration processes that are easily interpreted,
                  iterated on, and replicated.
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <img src={IconThree} className="h-5" alt="IconThree" />
                  <span className="font-medium">Data Analytics</span>
                </div>
                <div className="text-gray-500 text-sm leading-6 lg:w-4/5">
                  From fine-tuning reports to migrating to a new analytics
                  platform—we help you choose the right tools and find more
                  meaning in your data.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end w-full lg:border-l border-gray-200">
            <div className="flex flex-col lg:w-3/4 gap-10 lg:py-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <img src={IconFour} className="h-5" alt="IconFour" />
                  <span className="font-medium">Data Governance</span>
                </div>
                <div className="text-gray-500 text-sm leading-6">
                  We establish ‘right-sized’ data governance programs that
                  integrate naturally into business processes for higher user
                  adoption and enhanced security.
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <img src={IconFive} className="h-5" alt="IconFive" />
                  <span className="font-medium">Data Modernisation</span>
                </div>
                <div className="text-gray-500 text-sm leading-6">
                  We can move your data to the cloud or optimise cloud
                  architecture without disrupting business operations.
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <img src={IconSix} className="h-5" alt="IconSix" />
                  <span className="font-medium">Data Visualisation</span>
                </div>
                <div className="text-gray-500 text-sm leading-6">
                  Our consultants equip you with the right tools and training to
                  explore data from every angle and share your discoveries.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center">
        <div className="flex flex-col gap-4 w-full lg:order-2">
          <h2 className="text-center text-3xl lg:text-left lg:text-[40px] lg:leading-[50px]">
            Experience the <br /> AI Advantage.
          </h2>
          <p className="text-sm mx-auto max-w-[480px] pt-2 text-center text-gray-500 lg:mx-0 lg:text-left">
            Hassle-free AI projects delivered on time and within budget. Our
            AI/ML experts can help you with everything from readiness assessment
            to use case identification, planning, and execution. Turn your AI
            ideas into production-ready applications.
          </p>
          <div className="flex flex-col mx-auto max-w-[480px] space-y-2 my-5 lg:mx-0 lg:max-w-none">
            {[
              "Enhanced Accuracy with ML models",
              "Real-Time Analytics using Azure’s capabilities",
              "Dynamic scalability to meet the client’s needs",
              "Customization for forecasting models",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>
          <div className="flex">
            <NavLink
              className="flex h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
              to="/booking"
            >
              <span className="opacity-80">
                {" "}
                Book a free discovery session{" "}
              </span>{" "}
              <img src={SendUpIcon} className="h-2" alt="SendUpIcon" />
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            className="opacity-60"
            decoding="async"
            data-nimg="1"
            src={image1}
          />
        </div>
      </div>
      <div className="bg-[#F9F9F9] border-y relative w-full flex flex-col items-center">
        <div className="bg-pattern w-full relative flex flex-col items-center">
          <div className="flex flex-col gap-10 relative items-center lg:w-8/12 w-11/12 my-10">
            <h2 className="w-full text-center text-3xl lg:text-4xl lg:leading-[48px]">
              We Create <br /> Powerful dashboards
            </h2>
            <img
              src={dashboardImage}
              className="w-3/5 shadow-sm -mb-[15rem]"
              alt="background"
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 mt-[12rem] items-center">
        <div className="flex flex-col w-full">
          <h2 className="text-center text-3xl lg:text-left lg:text-4xl lg:leading-[50px]">
            Why DATAWORKS ?
          </h2>
          <p className="text-sm mx-auto max-w-[480px] pt-2 text-center text-gray-500 lg:mx-0 lg:text-left">
            With over 20+ years in the data industry, we have experience solving
            the exact problems you face today. Our AI and data experts bring
            strong technical skills, insider knowledge, and a collaborative
            approach to your data project. We’re passionate about driving your
            business transformation and committed to delivering the results you
            need.
          </p>
          <div className="flex flex-col mx-auto max-w-[480px] space-y-2 my-5 lg:mx-0 lg:max-w-none">
            {[
              "We dig deep into your business before coding.",
              "Tech recommendations based on your needs, not vendor affiliations.",
              "One-stop shop for all things data.",
              "Practical and laser-focused data solutions.",
              "Experts in data, not tech jargon.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            className="opacity-60"
            decoding="async"
            data-nimg="1"
            src={ectcGif}
          />
        </div>
      </div>
      <div className="flex flex-col lg:items-center gap-3 lg:w-8/12 w-11/12 py-16">
        <TestimonialCarousel />
      </div>
      <div className="flex flex-col gap-10 lg:w-8/12 w-11/12">
        <div className="grid lg:grid-cols-2 gap-10 w-full pb-4 items-center border-gray-200">
          <div className="text-center text-3xl lg:text-left lg:text-[2.4rem] lg:leading-[3rem]">
            Outcomes You <br /> Can Expect
          </div>
          <div className="text-base text-gray-500 lg:mx-4">
            We help you cut through the noise in this crowded industry so you
            can implement effective data solutions and achieve your business
            goals.
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 w-full">
          <div className="flex flex-col gap-4 bg-[#fefcfc] border border-gray-300 rounded-lg p-5">
            <div className="flex flex-row items-center gap-2">
              <FaCircleCheck className="text-[#006dad] text-sm" />
              <span className="font-semibold lg:text-xs">
                Enhanced Collaboration
              </span>
            </div>
            <div className="text-gray-500 text-sm lg:text-xs leading-6">
              Unify all data across the enterprise, regardless of form or
              function. Improve cross-team access to critical data, fostering
              better communication and alignment.
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#fefcfc] border border-gray-300 rounded-lg p-5">
            <div className="flex flex-row items-center gap-2">
              <FaCircleCheck className="text-[#006dad] text-sm" />
              <span className="font-semibold lg:text-xs">
                Higher ROI on Data Investments
              </span>
            </div>
            <div className="text-gray-500 text-sm lg:text-xs leading-6">
              Maximise the value of your data assets by making them fully
              accessible and actionable. Reduce spending by introducing
              efficiencies across the data lifecycle.
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#fefcfc] border border-gray-300 rounded-lg p-5">
            <div className="flex flex-row items-center gap-2">
              <FaCircleCheck className="text-[#006dad] text-sm" />
              <span className="font-semibold lg:text-xs">
                Actionable Customer Intelligence
              </span>
            </div>
            <div className="text-gray-500 text-sm lg:text-xs leading-6">
              Build predictive and real-time analytics on diverse customer data.
              Gain deep insights into customer behaviour to enhance
              satisfaction, mitigate risk, and drive growth.
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <NavLink
            className="flex h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
            to="/booking"
          >
            <span className="opacity-80"> Book a free discovery session </span>{" "}
            <img src={SendUpIcon} className="h-2" alt="SendUpIcon" />
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col bg-pattern items-center w-full py-10 border-t">
        <div className="flex flex-col lg:items-center gap-3 lg:w-8/12 w-11/12 py-16">
          <div className="text-2xl lg:text-3xl !leading-[3rem] text-center lg:w-2/3">
            Our team can advise & implement the right solution to suit your
            needs
          </div>
          <p className="text-base mx-auto pt-2 text-center text-gray-500 lg:text-left">
            Data-driven success starts here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
