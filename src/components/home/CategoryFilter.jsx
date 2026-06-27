import { categories } from "../../data/mockData";
import { ChevronRight } from "lucide-react";

export default function CategoryFilter() {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="pt-4 flex flex-row items-center justify-between relative">
        <div className="flex flex-row items-center justify-between overflow-x-auto gap-8 no-scrollbar scroll-smooth w-full">
          {categories.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
              ${index === 0 ? "border-neutral-800 text-neutral-800" : "border-transparent text-neutral-500"}`}
            >
              <item.icon size={24} />
              <div className="font-medium text-sm whitespace-nowrap">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-center border-[1px] border-neutral-300 rounded-full p-2 bg-white shadow-sm cursor-pointer hover:shadow-md transition ml-4 min-w-[32px]">
          <ChevronRight size={16} />
        </div>
        <div className="hidden md:flex items-center gap-2 border-[1px] border-neutral-300 rounded-xl px-4 py-3 ml-4 cursor-pointer hover:border-black transition whitespace-nowrap">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '14px', width: '14px', fill: 'currentcolor'}}><path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
          <span className="text-xs font-semibold">Filters</span>
        </div>
      </div>
    </div>
  );
}