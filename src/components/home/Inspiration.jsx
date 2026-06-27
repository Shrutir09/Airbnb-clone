import { ChevronDown } from "lucide-react";

export default function Inspiration() {
  const tabs = ["Popular", "Arts & culture", "Beach", "Mountains", "Outdoors", "Things to do"];
  
  const locations = [
    { city: "Paris", type: "Villa rentals" },
    { city: "Ohio Stadium", type: "Holiday rentals" },
    { city: "Lake Bled", type: "Flat rentals" },
    { city: "Lake Wawasee", type: "Holiday rentals" },
    { city: "ESPN Wide World of Sports", type: "Apartment rentals" },
    { city: "Lake Como", type: "Cabin rentals" },
    
    { city: "Principe Real", type: "Holiday rentals" },
    { city: "Covent Garden", type: "House rentals" },
    { city: "Assateague Island", type: "Cottage rentals" },
    { city: "Lido Key", type: "Flat rentals" },
    { city: "Coronado Islands", type: "Flat rentals" },
    { city: "Lake Gregory", type: "House rentals" },
    
    { city: "Gozo", type: "House rentals" },
    { city: "Sand Key Beach", type: "Flat rentals" },
    { city: "North Cascades National Park", type: "Cabin rentals" },
    { city: "Amalfi Coast", type: "House rentals" },
    { city: "Lake Willoughby", type: "Holiday rentals" },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] py-12 mt-12 border-t border-neutral-200">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <h2 className="text-[22px] font-semibold text-neutral-800 mb-6 tracking-tight">Inspiration for future getaways</h2>
        
        {/* Tabs */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar border-b border-neutral-200 mb-8">
          {tabs.map((tab, idx) => (
            <div 
              key={idx} 
              className={`pb-3 text-[14px] cursor-pointer whitespace-nowrap transition-all ${tab === "Arts & culture" ? 'text-neutral-800 font-semibold border-b-2 border-black' : 'text-neutral-500 font-medium hover:text-black hover:border-b-2 hover:border-neutral-300'}`}
            >
              {tab}
            </div>
          ))}
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex flex-col cursor-pointer group">
              <span className="text-[14px] font-medium text-neutral-800 group-hover:underline">{loc.city}</span>
              <span className="text-[14px] text-neutral-500">{loc.type}</span>
            </div>
          ))}
          
          {/* Show more */}
          <div className="flex items-center gap-1 cursor-pointer group h-fit">
            <span className="text-[14px] font-semibold text-neutral-800 group-hover:underline">Show more</span>
            <ChevronDown size={14} className="text-neutral-800 mt-1" strokeWidth={2.5} />
          </div>
        </div>

      </div>
    </div>
  );
}
