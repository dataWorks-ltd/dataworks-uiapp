import { useEffect, useState } from "react";
import { faqsQuery } from "../../utils/data";
import { client } from "../../utils/client";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { BlockText } from "./blockContent";

interface Faq {
  _id: string;
  title: string;
  body: any[];
}

export default function FaqComponent() {
  const [selected, setSelected] = useState('')
  const [faqList, setFaqList] = useState<Faq[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await client.fetch(faqsQuery());
        setFaqList(data);
      } catch (error) {
        console.error("Error fetching faqList:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      <div className='flex flex-col gap-5 lg:gap-10 lg:w-8/12 w-11/12 lg:my-10 lg:items-center'>
        <div className="w-full lg:text-3xl text-lg">
          Frequently Asked Questions
        </div>
        <div className='flex flex-col w-full border-t'>
          {faqList?.map((faq, index) => (
            <div key={index} className='flex flex-col px-5 border-b text-black/70'>
              <div onClick={() => setSelected(selected !== faq._id ? faq._id : '')} className='flex flex-row cursor-pointer items-center py-5 justify-between w-full'>
                <div className={`${selected !== faq._id? 'font-medium' : 'font-semibold'} text-sm`}>{faq.title}</div>
                <div>
                  <FaPlus className={`${selected !== faq._id ? '' : 'hidden'} text-black/70 text-sm`}/>
                  <FaMinus className={`${selected === faq._id ? '' : 'hidden'} text-black/70 text-sm`}/>
                </div>
              </div>
              <div className={`${selected === faq._id? '' : 'hidden'} pb-4 w-full`}>
                <div className={`w-full text-sm`}>
                  {/* {faq.subtitle} */}
                  <BlockText blocks={faq?.body} />
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
