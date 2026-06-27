import { Globe, Menu, Search, HelpCircle, Navigation, Building2, Waves, TreePine, Building, Mountain, Map, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null); // 'where', 'when', 'who', or null
  
  // State for guests
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });

  const menuRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setActiveTab(null); // Close dropdown on scroll
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActiveTab(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const suggestedDestinations = [
    { icon: Navigation, color: "bg-blue-50 text-blue-600", title: "Nearby", subtitle: "Find what’s around you" },
    { icon: Building2, color: "bg-rose-50 text-rose-500", title: "Varanasi, Uttar Pradesh", subtitle: "Popular with travellers near you" },
    { icon: Waves, color: "bg-blue-50 text-blue-600", title: "Puri, Odisha", subtitle: "For its seaside allure" },
    { icon: TreePine, color: "bg-emerald-50 text-emerald-600", title: "Ranchi, Jharkhand", subtitle: "A hidden gem" },
    { icon: Building, color: "bg-rose-50 text-rose-500", title: "Kolkata, West Bengal", subtitle: "For sights like Victoria Memorial" },
    { icon: Mountain, color: "bg-stone-100 text-stone-600", title: "Darjeeling, West Bengal", subtitle: "For nature lovers" },
    { icon: Map, color: "bg-rose-50 text-rose-500", title: "Siliguri, West Bengal", subtitle: "Off the beaten path" },
  ];

  const updateGuest = (type, operation) => {
    setGuests(prev => {
      const newValue = operation === 'add' ? prev[type] + 1 : prev[type] - 1;
      if (newValue < 0) return prev;
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <header className={`w-full bg-white transition-all duration-300 z-50 sticky top-0 ${isScrolled ? 'border-b py-4' : 'border-b pb-6 pt-4'}`}>
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        
        {/* Top Row / Compact Row */}
        <div className="flex flex-row items-center justify-between">
          
          {/* LEFT: Logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <svg viewBox="0 0 32 32" className="h-8 w-8 fill-rose-500">
              <path d="M16 1c-1.7 0-3.3.9-4.1 2.4L3.3 18.6a6.2 6.2 0 0 0 5.4 9.4c2.3 0 4.4-1.2 5.6-3.2l1.7-2.8 1.7 2.8c1.2 2 3.3 3.2 5.6 3.2a6.2 6.2 0 0 0 5.4-9.4L20.1 3.4A4.7 4.7 0 0 0 16 1zm0 5c.5 0 .9.3 1.2.7l8.6 15.2a2.2 2.2 0 0 1-1.9 3.3c-.8 0-1.5-.4-1.9-1.1L16 13.7l-6 10.4c-.4.7-1.1 1.1-1.9 1.1a2.2 2.2 0 0 1-1.9-3.3L14.8 6.7c.3-.4.7-.7 1.2-.7z" />
            </svg>
            <span className="hidden lg:block text-[22px] font-bold text-rose-500 tracking-tight">
              airbnb
            </span>
          </div>

          {/* CENTER: Navigation Links (Expanded) OR Compact Search (Scrolled) */}
          <div className="flex-1 flex justify-center px-4">
            {isScrolled ? (
              // Compact Search Bar
              <div 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => setActiveTab('where'), 300);
                }}
                className="flex items-center bg-white rounded-full border border-neutral-200 shadow-sm hover:shadow-md transition px-2 py-2 cursor-pointer w-full max-w-[400px] justify-between"
              >
                <div className="flex items-center gap-3 pl-3 text-[14px] font-medium text-neutral-800">
                  <span className="text-lg">🏠</span>
                  Anywhere
                </div>
                <div className="hidden sm:block w-[1px] h-6 bg-neutral-200 mx-2"></div>
                <div className="hidden sm:block text-[14px] font-medium text-neutral-800">Anytime</div>
                <div className="hidden sm:block w-[1px] h-6 bg-neutral-200 mx-2"></div>
                <div className="text-[14px] text-neutral-500 flex items-center gap-3">
                  <span className="hidden sm:block">Add guests</span>
                  <div className="bg-rose-600 text-white p-2 rounded-full">
                    <Search size={14} strokeWidth={3} />
                  </div>
                </div>
              </div>
            ) : (
              // Expanded Navigation Links
              <div className="hidden md:flex flex-row items-center gap-8 text-neutral-600 font-medium">
                {/* Homes */}
                <div className="flex flex-col items-center justify-center cursor-pointer gap-2 relative mt-2">
                  <div className="flex items-center gap-2 text-black">
                    <span className="text-2xl">🏠</span>
                    <span className="text-[15px]">Homes</span>
                  </div>
                  <div className="absolute -bottom-3 left-0 w-full h-[2px] bg-black"></div>
                </div>

                {/* Experiences */}
                <div className="flex items-center gap-2 cursor-pointer hover:text-black transition relative mt-2">
                  <span className="text-2xl">🎈</span>
                  <span className="text-[15px]">Experiences</span>
                  <div className="absolute -top-3 right-0 bg-[#2b3a55] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    New
                  </div>
                </div>

                {/* Services */}
                <div className="flex items-center gap-2 cursor-pointer hover:text-black transition relative mt-2">
                  <span className="text-2xl">🛎️</span>
                  <span className="text-[15px]">Services</span>
                  <div className="absolute -top-3 right-0 bg-[#2b3a55] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    New
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: User Menu */}
          <div className="flex flex-row items-center gap-2 relative" ref={menuRef}>
            <div className="hidden md:block text-[14px] font-medium py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              Become a host
            </div>
            <div className="p-2.5 bg-neutral-100 hover:bg-neutral-200 rounded-full transition cursor-pointer flex items-center justify-center text-neutral-700">
              <Globe size={18} />
            </div>
            <div 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 bg-neutral-100 hover:bg-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer transition text-neutral-700"
            >
              <Menu size={18} />
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-14 w-[320px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-neutral-200 py-3 flex flex-col z-50">
                <div className="flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 cursor-pointer">
                  <HelpCircle size={18} className="text-neutral-700" />
                  <span className="text-[15px] text-neutral-700">Help Centre</span>
                </div>
                <hr className="my-2 border-neutral-200" />
                <div className="px-5 py-3 hover:bg-neutral-50 cursor-pointer flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-neutral-800">Become a host</span>
                    <span className="text-[13px] text-neutral-500 w-[200px] leading-snug mt-0.5">
                      It's easy to start hosting and earn extra income.
                    </span>
                  </div>
                  <span className="text-3xl drop-shadow-sm">🧍‍♀️</span>
                </div>
                <hr className="my-2 border-neutral-200" />
                <div className="px-5 py-3 hover:bg-neutral-50 cursor-pointer text-[15px] text-neutral-700">
                  Refer a host
                </div>
                <div className="px-5 py-3 hover:bg-neutral-50 cursor-pointer text-[15px] text-neutral-700">
                  Find a co-host
                </div>
                <hr className="my-2 border-neutral-200" />
                <div className="px-5 py-3 hover:bg-neutral-50 cursor-pointer text-[15px] text-neutral-700">
                  Log in or sign up
                </div>
              </div>
            )}
          </div>
          
        </div>

        {/* Bottom Row: Big Search Bar */}
        <div className={`flex justify-center transition-all duration-300 overflow-visible ${isScrolled ? 'h-0 opacity-0' : 'h-[80px] mt-6 opacity-100'}`}>
          <div 
            ref={searchRef}
            className={`hidden md:flex items-center rounded-full border border-neutral-200 transition-colors max-w-[850px] w-full h-[64px] relative ${activeTab ? 'bg-neutral-200' : 'bg-white shadow-[0_3px_10px_rgb(0,0,0,0.08)] hover:shadow-[0_3px_15px_rgb(0,0,0,0.1)]'}`}
          >
            
            {/* Where */}
            <div 
              onClick={() => setActiveTab('where')}
              className={`flex-1 h-full rounded-full cursor-pointer px-8 flex flex-col justify-center transition-all duration-200 ${activeTab === 'where' ? 'bg-white shadow-lg z-10 scale-100 border-2 border-transparent' : 'hover:bg-neutral-300 hover:text-black'}`}
            >
              <div className="text-[12px] font-bold text-black tracking-wide">Where</div>
              {activeTab === 'where' ? (
                <input 
                  type="text" 
                  placeholder="Search destinations" 
                  className="text-[14px] text-neutral-800 bg-transparent outline-none w-full placeholder:text-neutral-500"
                  autoFocus
                />
              ) : (
                <div className="text-[14px] text-neutral-500 truncate">Search destinations</div>
              )}
            </div>

            {/* Dropdown for Where */}
            {activeTab === 'where' && (
              <div className="absolute top-[80px] left-0 w-[420px] bg-white rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.15)] border border-neutral-200 py-6 flex flex-col z-50">
                <div className="px-6 pb-2 text-[13px] font-bold text-neutral-800">Suggested destinations</div>
                
                <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                  {suggestedDestinations.map((dest, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-3 hover:bg-neutral-100 cursor-pointer group">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${dest.color}`}>
                        <dest.icon size={22} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[15px] font-medium text-neutral-800 group-hover:text-black">{dest.title}</span>
                        <span className="text-[14px] text-neutral-500">{dest.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!activeTab && <div className="w-[1px] h-10 bg-neutral-200 self-center"></div>}

            {/* When */}
            <div 
              onClick={() => setActiveTab('when')}
              className={`flex-1 h-full rounded-full cursor-pointer px-8 flex flex-col justify-center transition-all ${activeTab === 'when' ? 'bg-white shadow-lg z-10 scale-100 border-2 border-black' : 'hover:bg-neutral-300'}`}
            >
              <div className="text-[12px] font-bold text-black tracking-wide">When</div>
              <div className="text-[14px] text-neutral-500">Add dates</div>
            </div>

            {/* Dropdown for When */}
            {activeTab === 'when' && (
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[850px] bg-white rounded-[32px] shadow-[0_6px_24px_rgba(0,0,0,0.15)] border border-neutral-200 p-8 flex flex-col z-50">
                {/* Toggle Switch */}
                <div className="flex justify-center mb-8">
                  <div className="flex bg-neutral-100 rounded-full p-1">
                    <button className="px-6 py-1.5 bg-white shadow-sm rounded-full text-[14px] font-semibold text-neutral-800">Dates</button>
                    <button className="px-6 py-1.5 rounded-full text-[14px] font-medium text-neutral-600 hover:text-neutral-800">Flexible</button>
                  </div>
                </div>
                
                {/* Calendars */}
                <div className="flex gap-12">
                  {/* June 2026 */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-4 px-2">
                      <ChevronLeft size={20} className="text-neutral-300" />
                      <span className="font-semibold text-[15px]">June 2026</span>
                      <div className="w-5"></div>
                    </div>
                    <div className="grid grid-cols-7 text-center mb-2 text-[12px] text-neutral-500 font-medium">
                      <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-1 text-[14px]">
                      <div></div>
                      <div className="text-neutral-300 py-3">1</div><div className="text-neutral-300 py-3">2</div><div className="text-neutral-300 py-3">3</div><div className="text-neutral-300 py-3">4</div><div className="text-neutral-300 py-3">5</div><div className="text-neutral-300 py-3">6</div>
                      <div className="text-neutral-300 py-3">7</div><div className="text-neutral-300 py-3">8</div><div className="text-neutral-300 py-3">9</div><div className="text-neutral-300 py-3">10</div><div className="text-neutral-300 py-3">11</div><div className="text-neutral-300 py-3">12</div><div className="text-neutral-300 py-3">13</div>
                      <div className="text-neutral-300 py-3">14</div><div className="text-neutral-300 py-3">15</div><div className="text-neutral-300 py-3">16</div><div className="text-neutral-300 py-3">17</div><div className="text-neutral-300 py-3">18</div><div className="text-neutral-300 py-3">19</div><div className="text-neutral-300 py-3">20</div>
                      <div className="text-neutral-300 py-3">21</div><div className="text-neutral-300 py-3">22</div><div className="text-neutral-300 py-3">23</div><div className="text-neutral-300 py-3">24</div><div className="text-neutral-300 py-3">25</div><div className="text-neutral-300 py-3">26</div><div className="text-neutral-800 font-semibold py-3 bg-neutral-100 rounded-full">27</div>
                      <div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">28</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">29</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">30</div>
                    </div>
                  </div>
                  
                  {/* July 2026 */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-4 px-2">
                      <div className="w-5"></div>
                      <span className="font-semibold text-[15px]">July 2026</span>
                      <ChevronRight size={20} className="text-neutral-800 cursor-pointer" />
                    </div>
                    <div className="grid grid-cols-7 text-center mb-2 text-[12px] text-neutral-500 font-medium">
                      <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-1 text-[14px]">
                      <div></div><div></div><div></div>
                      <div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">1</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">2</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">3</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">4</div>
                      <div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">5</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">6</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">7</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">8</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">9</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">10</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">11</div>
                      <div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">12</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">13</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">14</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">15</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">16</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">17</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">18</div>
                      <div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">19</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">20</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">21</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">22</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">23</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">24</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">25</div>
                      <div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">26</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">27</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">28</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">29</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">30</div><div className="text-neutral-800 font-medium py-3 hover:bg-neutral-100 rounded-full cursor-pointer transition">31</div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Pills */}
                <div className="flex gap-2 mt-8 overflow-x-auto no-scrollbar pt-2">
                  <button className="px-4 py-1.5 rounded-full border-2 border-black text-[13px] font-medium text-black">Exact dates</button>
                  <button className="px-4 py-1.5 rounded-full border border-neutral-300 text-[13px] font-medium text-neutral-700 flex items-center gap-1 hover:border-black transition">± 1 day</button>
                  <button className="px-4 py-1.5 rounded-full border border-neutral-300 text-[13px] font-medium text-neutral-700 flex items-center gap-1 hover:border-black transition">± 2 days</button>
                  <button className="px-4 py-1.5 rounded-full border border-neutral-300 text-[13px] font-medium text-neutral-700 flex items-center gap-1 hover:border-black transition">± 3 days</button>
                  <button className="px-4 py-1.5 rounded-full border border-neutral-300 text-[13px] font-medium text-neutral-700 flex items-center gap-1 hover:border-black transition">± 7 days</button>
                  <button className="px-4 py-1.5 rounded-full border border-neutral-300 text-[13px] font-medium text-neutral-700 flex items-center gap-1 hover:border-black transition">± 14 days</button>
                </div>
              </div>
            )}

            {!activeTab && <div className="w-[1px] h-10 bg-neutral-200 self-center"></div>}

            {/* Who */}
            <div 
              onClick={() => setActiveTab('who')}
              className={`flex-1 h-full flex items-center justify-between rounded-full cursor-pointer pl-8 pr-2 transition-all ${activeTab === 'who' ? 'bg-white shadow-lg z-10 scale-100 border-2 border-black' : 'hover:bg-neutral-300'}`}
            >
              <div className="flex flex-col justify-center">
                <div className="text-[12px] font-bold text-black tracking-wide">Who</div>
                <div className="text-[14px] text-neutral-500 truncate">
                  {guests.adults + guests.children > 0 ? `${guests.adults + guests.children} guests` : 'Add guests'}
                </div>
              </div>
              <div className={`bg-rose-600 flex items-center justify-center text-white h-12 rounded-full hover:bg-rose-700 transition flex-shrink-0 ${activeTab ? 'w-auto px-6 gap-2' : 'w-12'}`}>
                <Search size={20} strokeWidth={3} />
                {activeTab && <span className="font-semibold text-[15px]">Search</span>}
              </div>
            </div>

            {/* Dropdown for Who */}
            {activeTab === 'who' && (
              <div className="absolute top-[80px] right-0 w-[400px] bg-white rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.15)] border border-neutral-200 py-4 px-8 flex flex-col z-50">
                
                {/* Adults */}
                <div className="flex justify-between items-center py-6 border-b border-neutral-200">
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-neutral-800">Adults</span>
                    <span className="text-[14px] text-neutral-500">Ages 13 or above</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateGuest('adults', 'sub'); }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${guests.adults === 0 ? 'bg-neutral-100 text-neutral-300 cursor-not-allowed' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                    >
                      <Minus size={14} strokeWidth={2} />
                    </button>
                    <span className="text-[15px] text-neutral-800 w-4 text-center">{guests.adults}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateGuest('adults', 'add'); }}
                      className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition"
                    >
                      <Plus size={14} strokeWidth={2} />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex justify-between items-center py-6 border-b border-neutral-200">
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-neutral-800">Children</span>
                    <span className="text-[14px] text-neutral-500">Ages 2–12</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateGuest('children', 'sub'); }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${guests.children === 0 ? 'bg-neutral-100 text-neutral-300 cursor-not-allowed' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                    >
                      <Minus size={14} strokeWidth={2} />
                    </button>
                    <span className="text-[15px] text-neutral-800 w-4 text-center">{guests.children}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateGuest('children', 'add'); }}
                      className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition"
                    >
                      <Plus size={14} strokeWidth={2} />
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="flex justify-between items-center py-6 border-b border-neutral-200">
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-neutral-800">Infants</span>
                    <span className="text-[14px] text-neutral-500">Under 2</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateGuest('infants', 'sub'); }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${guests.infants === 0 ? 'bg-neutral-100 text-neutral-300 cursor-not-allowed' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                    >
                      <Minus size={14} strokeWidth={2} />
                    </button>
                    <span className="text-[15px] text-neutral-800 w-4 text-center">{guests.infants}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateGuest('infants', 'add'); }}
                      className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition"
                    >
                      <Plus size={14} strokeWidth={2} />
                    </button>
                  </div>
                </div>

                {/* Pets */}
                <div className="flex justify-between items-center py-6">
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-neutral-800">Pets</span>
                    <a href="#" className="text-[14px] text-neutral-400 font-semibold underline hover:text-neutral-800 transition">Bringing a service animal?</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateGuest('pets', 'sub'); }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${guests.pets === 0 ? 'bg-neutral-100 text-neutral-300 cursor-not-allowed' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                    >
                      <Minus size={14} strokeWidth={2} />
                    </button>
                    <span className="text-[15px] text-neutral-800 w-4 text-center">{guests.pets}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateGuest('pets', 'add'); }}
                      className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition"
                    >
                      <Plus size={14} strokeWidth={2} />
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </header>
  );
}