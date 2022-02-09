import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        alt="airbnbImage"
        objectFit="cover"
        objectPosition="left"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md mt-3 font-bold cursor-pointer hover:shadow-xl active:scale-90 transition-all duration-150 ease-out">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
