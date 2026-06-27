import { Globe, ChevronDown } from "lucide-react";

export default function Footer() {
  const popularLocations = [
    { city: "Dallas", type: "Holiday rentals" },
    { city: "North Myrtle Beach", type: "Holiday rentals" },
    { city: "Portland", type: "Apartment rentals" },
    { city: "Nice", type: "Villa rentals" },
    { city: "Cleveland", type: "Monthly Rentals" },
    { city: "Galveston", type: "House rentals" },
    { city: "Lake Michigan", type: "House rentals" },
    { city: "Barcelona", type: "Flat rentals" },
    { city: "Portland", type: "Apartment rentals" },
    { city: "Minneapolis", type: "Holiday rentals" },
    { city: "Kauai", type: "Cottage rentals" },
    { city: "Amsterdam", type: "Apartment rentals" },
    { city: "Raleigh", type: "House rentals" },
    { city: "Gulf Shores", type: "Flat rentals" },
    { city: "Niagara Falls", type: "Cottage rentals" },
    { city: "Philadelphia", type: "House rentals" },
    { city: "Orange Beach", type: "Villa rentals" },
  ];

  return (
    <footer className="bg-[#f7f7f7] mt-12 border-t border-neutral-200">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-12">
        
        {/* Inspiration for future getaways */}
        <div className="pb-10 border-b border-neutral-200">
          <h2 className="text-[22px] font-semibold text-neutral-800 mb-4 tracking-tight">
            Inspiration for future getaways
          </h2>
          
          {/* Tabs */}
          <div className="flex gap-6 border-b border-neutral-200 mb-8 overflow-x-auto no-scrollbar">
            <button className="pb-3 text-[14px] font-medium text-black border-b-2 border-black whitespace-nowrap">
              Popular
            </button>
            <button className="pb-3 text-[14px] font-medium text-neutral-500 hover:text-black hover:border-neutral-300 border-b-2 border-transparent transition whitespace-nowrap">
              Arts & culture
            </button>
            <button className="pb-3 text-[14px] font-medium text-neutral-500 hover:text-black hover:border-neutral-300 border-b-2 border-transparent transition whitespace-nowrap">
              Beach
            </button>
            <button className="pb-3 text-[14px] font-medium text-neutral-500 hover:text-black hover:border-neutral-300 border-b-2 border-transparent transition whitespace-nowrap">
              Mountains
            </button>
            <button className="pb-3 text-[14px] font-medium text-neutral-500 hover:text-black hover:border-neutral-300 border-b-2 border-transparent transition whitespace-nowrap">
              Outdoors
            </button>
            <button className="pb-3 text-[14px] font-medium text-neutral-500 hover:text-black hover:border-neutral-300 border-b-2 border-transparent transition whitespace-nowrap">
              Things to do
            </button>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            {popularLocations.map((loc, idx) => (
              <div key={idx} className="flex flex-col cursor-pointer group">
                <span className="text-[14px] font-medium text-neutral-800 group-hover:underline">
                  {loc.city}
                </span>
                <span className="text-[14px] text-neutral-500">
                  {loc.type}
                </span>
              </div>
            ))}
            
            {/* Show More Button */}
            <div className="flex flex-col cursor-pointer group justify-start pt-1">
              <div className="flex items-center gap-1 group-hover:underline">
                <span className="text-[14px] font-medium text-neutral-800">Show more</span>
                <ChevronDown size={16} className="text-neutral-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-neutral-200">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[14px] text-neutral-800 tracking-tight">Support</h3>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Help Centre</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Get help with a safety issue</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">AirCover</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Anti-discrimination</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Disability support</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Cancellation options</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Report neighbourhood concern</div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[14px] text-neutral-800 tracking-tight">Hosting</h3>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Airbnb your home</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Airbnb your experience</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Airbnb your service</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">AirCover for Hosts</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Hosting resources</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Community forum</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Hosting responsibly</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Join a free hosting class</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Find a co-host</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Refer a host</div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[14px] text-neutral-800 tracking-tight">Airbnb</h3>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">2026 Summer Release</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Newsroom</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Careers</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Investors</div>
            <div className="text-[14px] text-neutral-600 hover:underline cursor-pointer transition">Airbnb.org emergency stays</div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6">
          <div className="flex flex-col md:flex-row items-center gap-2 text-[14px] text-neutral-600">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="hidden md:block">·</span>
            <div className="flex gap-2">
              <span className="hover:underline cursor-pointer">Privacy</span>
              <span>·</span>
              <span className="hover:underline cursor-pointer">Terms</span>
              <span>·</span>
              <span className="hover:underline cursor-pointer">Company details</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 mt-4 md:mt-0 font-medium text-[14px] text-neutral-800">
            <div className="flex items-center gap-2 hover:underline cursor-pointer">
              <Globe size={18} />
              <span>English (IN)</span>
            </div>
            <div className="flex items-center gap-2 hover:underline cursor-pointer">
              <span>₹</span>
              <span>INR</span>
            </div>
            <div className="flex items-center gap-4 ml-4">
               <span className="hover:opacity-70 cursor-pointer transition">
                 <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                   <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                 </svg>
               </span>
               <span className="hover:opacity-70 cursor-pointer transition">
                 {/* X / Twitter Custom SVG icon to match image closely or use Lucide Twitter */}
                 <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                 </svg>
               </span>
               <span className="hover:opacity-70 cursor-pointer transition">
                 <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                 </svg>
               </span>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}