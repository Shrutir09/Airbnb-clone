import { Heart } from "lucide-react";

export default function ListingCard({ item, index }) {
  // Show Guest favourite only on some cards (e.g. even index)
  const isGuestFavourite = index % 2 === 0;

  return (
    <div className="flex flex-col gap-2 cursor-pointer group w-full">
      {/* Image Container */}
      <div className="aspect-[20/19] w-full relative overflow-hidden rounded-xl">
        <img 
          className="object-cover h-full w-full" 
          src={item.image} 
          alt={item.title} 
        />

        {/* Guest Favourite Badge */}
        {isGuestFavourite && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full shadow-sm">
            <span className="text-[12px] font-semibold text-neutral-800">Guest favourite</span>
          </div>
        )}

        {/* Favorite Button */}
        <div className="absolute top-3 right-3 text-white hover:scale-110 transition active:scale-95">
          <Heart className="drop-shadow-md" size={24} fill="rgba(0,0,0,0.4)" strokeWidth={1.5} />
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col mt-1">
        <div className="font-semibold text-[15px] truncate text-neutral-800">{item.title}</div>
        <div className="text-neutral-500 text-[14px] leading-tight truncate mt-0.5">{item.details}</div>
      </div>
    </div>
  );
}