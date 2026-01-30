import Image from "next/image";

const CUBE_ASSETS = [
  { id: 1, src: "/img1.jpg", pos: "top-[10%] left-[20%]" },
  { id: 2, src: "/img2.jpg", pos: "top-[10%] right-[20%]" },
  { id: 3, src: "/img3.jpg", pos: "top-1/2 -translate-y-1/2 left-[10%]" },
  { id: 4, src: "/img4.jpg", pos: "top-1/2 -translate-y-1/2 right-[10%]" },
  { id: 5, src: "/img5.jpg", pos: "bottom-[10%] left-[20%]" },
  { id: 6, src: "/img6.jpg", pos: "bottom-[10%] right-[20%]" },
];

export default function Innovation() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#211208] px-6 overflow-hidden">
      
      {/* 1. The 6 Orbital Cubes */}
      <div className="absolute inset-0 z-0">
        {CUBE_ASSETS.map((cube) => (
          <div 
            key={cube.id} 
            className={`absolute ${cube.pos} w-32 h-32 md:w-48 md:h-48 border border-[#f5e6d8]/20 shadow-2xl transition-transform duration-500 hover:scale-105`}
          >
            <Image 
              src={cube.src} 
              alt={`Innovation Asset ${cube.id}`} 
              fill 
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* 2. Central Mission Text */}
      <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
        <h2 className="text-[#f5e6d8] font-bold text-xl md:text-2xl mb-6 tracking-wide">
          Where innovation meets precision.
        </h2>
        <p className="text-[#f5e6d8] text-sm md:text-base leading-relaxed opacity-90 font-light">
          Symphonia unites visionary thinkers, creative architects, and analytical experts, 
          collaborating seamlessly to transform challenges into opportunities. Together, 
          we deliver tailored solutions that drive impact and inspire growth.
        </p>
      </div>

    </section>
  );
}