import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Archiv = {
  name: string;
};

const archive: Archiv[] = [
  {
    name: "Archiv vergangener Rundenwettkämpfe",
    
  },
];

const ArchivAccordion = () => {
  const [offen, setOffen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOffen(offen === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {archive.map((archiv, index) => (
        <div key={index} className="mb-4 border border-black rounded-lg shadow overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 py-2 text-left text-lg font-semibold bg-slate-200 hover:bg-slate-100 focus:outline-none duration-200 "
          >
            {archiv.name}
          </button>

          <AnimatePresence initial={false}>
            {offen === index && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-3 bg-white space-y-2 overflow-hidden"
              >
                <h5 className="font-semibold text-black mb-4">Hier finden Sie die Ergebnisse vergangener Rundenwettkämpfe:</h5>
                <ul>  
                  <li className="font-semibold">Rundenwettkampf Luftgewehr 2024/2025</li>
                  <li className="mb-5"><a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=31&sel_discipline_id=4&sel_class_id=18&sel_list_type=teamList&sel_turn_date=&showCombined=0">RWK-Onlinemelder LG 24/25 Bezirksklasse 3 Nord</a></li>
                  <li className="font-semibold">Rundenwettkampf Luftgewehr 2023/2024</li>
                  <li className="mb-5"><a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=27&sel_discipline_id=4&sel_class_id=18&showCombined=0">RWK-Onlinemelder LG 23/24 Bezirksklasse 3 Nord</a></li>
                  <li className="font-semibold">Rundenwettkampf Luftgewehr 2022/2023</li>
                  <li className="mb-5"><a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=22&sel_discipline_id=4&sel_class_id=18&showCombined=0">RWK-Onlinemelder LG 22/23 Bezirksklasse 3 Nord</a></li>
                  <li className="font-semibold">Rundenwettkampf Luftgewehr 2021/2022</li>
                  <li className="mb-5"><a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=19&sel_discipline_id=4&sel_class_id=18&showCombined=0">RWK-Onlinemelder LG 21/22 Bezirksklasse 3 Nord</a></li>
                  <li className="font-semibold">Rundenwettkampf Luftgewehr 2020/2021</li>
                  <li className="mb-5"><a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=16&sel_discipline_id=4&sel_class_id=15&showCombined=0">RWK-Onlinemelder LG 20/21 Bezirksklasse 2 Nord</a></li>
                  <li className="font-semibold">Rundenwettkampf Luftgewehr 2019/2020</li>
                  <li className="mb-5"><a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=12&sel_discipline_id=4&sel_class_id=18&showCombined=0">RWK-Onlinemelder LG 19/20 Bezirksklasse 3 Nord</a></li>
                  <li className="font-semibold">Rundenwettkampf Luftgewehr 2018/2019</li>
                  <li className="mb-5"><a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=9&sel_discipline_id=4&sel_class_id=18&showCombined=0">RWK-Onlinemelder LG 18/19 Bezirksklasse 3 Nord</a></li>
                  <li className="font-semibold">Rundenwettkampf Luftgewehr 2017/2018</li>
                  <li className="mb-5"><a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=2&sel_discipline_id=4&sel_class_id=21&showCombined=0">RWK-Onlinemelder LG 17/18 Bezirksklasse 4 Nord</a></li>
                </ul>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ArchivAccordion;
