import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 rounded-xl cursor-pointer hover:scale-105 hover:bg-slate-100 transition-all transform duration-150 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt="cardImage" />
      </div>
      {/* Right */}
      <div className="pl-4">
        <h2>{location}</h2>
        <h3 className="text-slate-500">{distance}</h3>
      </div>
    </div>
  );
}
export default SmallCard;
