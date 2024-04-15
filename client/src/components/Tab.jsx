import { useState } from "react";

const Tab = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
      };
    return (
        <div className="flex justify-center items-center flex-col p-4 bg-opacity-40 bg-black shadow-md shadow-slate-600 rounded-md">
          <div className="flex gap-4 text-base md:text-xl font-semibold">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`cursor-pointer p-2 rounded-md ${
                  index === activeTab ? 'bg-black text-white' : 'bg-gray-200 text-black'
                }`}
                onClick={() => handleTabClick(index)}
                // disabled
              >
                {tab.title}
                {
                  index === activeTab ? <span className="animate-bounce ml-2">🎉</span> : null
                
                }
              </button>
            ))}
          </div>
          <div className="p-4">
            {tabs[activeTab].content}
          </div>

        </div>
      );
}

export default Tab