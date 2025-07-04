import { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import {
  AirfranceLogo,
  BarclayLogo,
  DftLogo,
  DiscoveryLogo,
  DshcLogo,
  GskLogo,
  LloydLogo,
  placeholderImg,
  RollsroyceLogo,
  SendUpIcon,
} from "../../constant/images";
import AutoScrollCarousel from "../reuseables/autoScrollCarousel";
import FaqComponent from "../reuseables/faq";
import { professionalListQuery } from "../../utils/data";
import { client } from "../../utils/client";
import { isMobile } from "react-device-detect";
import { FaChevronDown } from "react-icons/fa6";

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

interface TeamMemberInfo{
  _id: string;
  name: string;
  title: string;
  imageUrl: string;
  role: string;
  specialties: string[];
}

const MeetTheTeam = () => {
  const [selected, setSelected] = useState('')
   const [teamList, setTeamList] = useState<TeamMemberInfo[]>([]);
  
    useEffect(() => {
      const fetchFaqs = async () => {
        try {
          const data = await client.fetch(professionalListQuery());
          setTeamList(data);
        } catch (error) {
          console.error("Error fetching teamList:", error);
        }
      };
  
      fetchFaqs();
    }, []);

  return (
    <div className="flex flex-col gap-10 items-center w-full">
      <div className="flex flex-col bg-black w-full items-center border-b">
        <div className="flex flex-col lg:w-8/12 w-11/12">
          <div className="flex flex-col w-full justify-center items-center text-white gap-7 bg-pattern">
            <div className="relative flex justify-center py-[5rem] md:py-[9rem]">
              <div className="md:px-8 lg:w-4/5 text-center">
                <div className="relative items-center z-40 flex flex-col space-y-3">
                  <div className="flex flex-col w-3/4 items-center">
                    <div className="lg:text-5xl text-2xl w-full leading-tight md:!mb-2 md:text-[48px]">
                      Meet the Experts <br className="hidden lg:block"/> Behind <span className="text-[#006dad]">the Data</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-8">
                    <p className="lg:text-lg text-sm md:w-4/5">
                      <span className="md:whitespace-pre-wrap">
                        A team of engineers, analysts, and innovators shaping 
                        intelligent data-driven solutions. We don’t just work with data
                        we turn it into clarity, innovation, and smart decisions.
                      </span>
                    </p>
                    <div className="flex flex-col w-full items-center">
                      <NavLink
                        className="flex h-[40px] gap-3 items-center justify-center rounded-sm lg:px-4 px-5 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm"
                        to="/booking"
                      >
                        <span className="opacity-80">
                          {" "}
                          Learn More
                        </span>{" "}
                        <img
                          src={SendUpIcon}
                          className="h-2"
                          alt="SendUpIcon"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
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
      <div className="flex flex-col gap-5 relative items-center lg:w-8/12 w-11/12 lg:my-16">
          <div className="w-full lg:w-3/4 text-center text-xl lg:text-4xl lg:leading-[48px]">
            Meet our Team
          </div>
          <p className="text-sm text-center">
            <span className="text-gray-600 ">
              At DataNinjas, we combine technical excellence 
              <br className="hidden lg:block"/> with a passion for building scalable data systems
            </span>
          </p>
          <div className="relative flex flex-col pt-5 item-center w-full">
            <div className="grid lg:grid-cols-3 gap-10 justify-center items-center w-full mb-10 lg:mb-0">
               {teamList?.map((member, index) => (
                <div key={index} className="w-64 overflow-hidden flex flex-col items-center">
                  {/* Image Section */}
                  <div className="w-full h-64">
                    <img
                      src={member.imageUrl || placeholderImg}
                      alt={member.name}
                      className="w-full h-full rounded-lg object-cover object-top"
                    />
                  </div>

                  {/* Name + Role */}
                  <div className="p-3 w-full text-center">
                    <p className="text-[#006dad] font-bold text-sm">{member.name}</p>
                    <p className="text-gray-500 pt-1 text-xs">{member.title}</p>

                    <hr className="my-2" />

                    <div className="text-[#006dad] flex justify-center items-center gap-5 font-semibold text-sm">Specialties <span onClick={() =>setSelected((!selected || selected !== member._id) ? member._id : '')} className={`${!isMobile ? 'hidden' : ''}`}><FaChevronDown/></span> </div>
                    <hr className={`${!isMobile ? 'hidden' : 'mt-2'}`} />
                    {/* Specialties list */}
                    <div className={`${isMobile && (!selected || selected !== member._id) ? 'hidden' : ''} ${!isMobile ? 'mt-2' : ''} flex flex-col gap-2 text-left`}>
                      {member?.specialties.map((item, idx) => (
                        <div
                          key={idx}
                          className="border border-blue-100 bg-slate-50 rounded-sm text-xs text-gray-700 py-1 px-2"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
               ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-pattern-2 items-center w-full">
          <div className="flex flex-col items-center w-full py-10 lg:py-20 bg-gray-400/20">
            <div className="flex flex-col items-center gap-3 lg:w-8/12 w-11/12">
              <div className="text-xl lg:text-4xl text-center lg:w-3/4">
                Join Our Team <br/>of Data Builders 
              </div>
              <p className="lg:text-base text-sm mx-auto pb-5 lg:w-3/5 text-center">
                At DataNinjas, we combine technical excellence <br className="hidden lg:block"/> with a passion for building scalable data systems
              </p>
              <div className="flex lg:flex-row flex-col items-center gap-5">
                <NavLink
                  className="flex h-[40px] items-center justify-center rounded-sm px-10 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm"
                  to="/careers"
                >
                  <span className="">
                    View Open Roles
                  </span>
                </NavLink>
                <NavLink
                  className="flex h-[40px] items-center justify-center rounded-sm px-14 text-sm  hover:text-white text-[#006dad] hover:!bg-[#006dad] border border-gray-500/70"
                  to="/booking"
                >
                  <span className="font-semibold">
                    Learn more
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <FaqComponent/>
    </div>
  );
};

export default MeetTheTeam;
