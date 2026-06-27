import ListingCard from "./ListingCard";
import { homeSections } from "../../data/sectionsData";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ListingGrid() {
  return (
    <div className="pt-6 pb-12 flex flex-col gap-12">
      {homeSections.map((section, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {/* Section Header */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer group">
              <h2 className="text-[22px] font-semibold text-neutral-800 tracking-tight">
                {section.title}
              </h2>
              <ArrowRight size={18} className="text-neutral-800 group-hover:translate-x-1 transition-transform" />
            </div>
            
            {/* Nav Arrows */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center cursor-pointer hover:shadow-md hover:border-neutral-400 transition bg-white/50">
                <ChevronLeft size={16} className="text-neutral-400" />
              </div>
              <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center cursor-pointer hover:shadow-md hover:border-neutral-400 transition bg-white">
                <ChevronRight size={16} className="text-neutral-800" />
              </div>
            </div>
          </div>

          {/* Section Carousel */}
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {section.items.map((item, idx) => (
              <div key={item.id} className="w-[85vw] sm:w-[calc(50%-8px)] md:w-[calc(25%-12px)] lg:w-[calc(14.285%-14px)] flex-shrink-0">
                <ListingCard item={item} index={idx} />
              </div>
            ))}
            
            {/* See All Card */}
            <div className="w-[85vw] sm:w-[calc(50%-8px)] md:w-[calc(25%-12px)] lg:w-[calc(14.285%-14px)] flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-neutral-100 flex flex-col items-center justify-center p-6 aspect-[20/19]">
              <div className="relative w-24 h-24 mb-4">
                <img src={section.items[0]?.image} alt="pic1" className="absolute top-2 left-0 w-14 h-14 object-cover rounded-lg border-2 border-white shadow-sm -rotate-6 z-10" />
                <img src={section.items[1]?.image} alt="pic2" className="absolute top-4 right-0 w-14 h-14 object-cover rounded-lg border-2 border-white shadow-sm rotate-6 z-20" />
                <img src={section.items[2]?.image} alt="pic3" className="absolute top-8 left-4 w-16 h-16 object-cover rounded-lg border-2 border-white shadow-md z-30" />
              </div>
              <span className="font-semibold text-neutral-800 underline">See all</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}