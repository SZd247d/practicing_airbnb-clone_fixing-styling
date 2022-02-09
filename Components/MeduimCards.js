import Image from "next/image";

function MeduimCards({ img, title }) {
  return (
    <div className=" m-2 mt-5 rounded-xl cursor-pointer hover:scale-105  transition-all transform duration-150 ease-out">
      {/* Left */}
      <div className="relative h-64 w-64">
        <Image src={img} layout="fill" className="rounded-lg" alt="cardImage" />
      </div>
      {/* Right */}
      <div className="mt-3 text-2xl">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MeduimCards;
