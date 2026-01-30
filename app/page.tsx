import Image from "next/image";
import ThreeCube from "./src/components/ThreeCube";

export default function LandingPage() {
  return (
    <main className="w-full selection:bg-brand-cream selection:text-brand-dark">
      
      {/* SECTION 1: HERO (image_182f55.png) */}
      <section className="h-screen w-full bg-[#211208] flex flex-col items-center justify-center text-center px-6">
        {/* Logo - Sized according to Figma specs */}
        <div className="mb-14">
          <Image 
            src="/logo.png" 
            alt="Symphonia Logo" 
            width={56} 
            height={40} 
            className="opacity-90"
            priority 
          />
        </div>

        {/* Heading - Fluid typography with tighter leading */}
        <h1 className="text-[#f5e6d8] font-serif tracking-tight max-w-[1200px]
          text-[36px] leading-[1.1]
          md:text-[56px] md:leading-[1.1]
          lg:text-[72px] lg:leading-[1.1]">
          The first media company <br className="hidden md:block" /> 
          crafted for the <br className="md:hidden" />
          digital first generation.
        </h1>
      </section>

      {/* SECTION 2: INNOVATION GRID (image_172c30.png / image_17994d.png) */}
      <section className="relative h-screen w-full bg-[#211208] flex items-center justify-center px-6 overflow-hidden">
        
        {/* Orbital Images - Strategic placement for visual balance */}
        <div className="absolute inset-0 w-full h-full pointer-events-none container mx-auto">
          {/* Top Left */}
          <div className="absolute top-[12%] left-[10%] w-36 h-36 md:w-56 md:h-56 overflow-hidden shadow-2xl rotate-[-2deg]">
            <ThreeCube />
          </div>
          {/* Top Right */}
          <div className="absolute top-[10%] right-[8%] w-40 h-40 md:w-60 md:h-60 overflow-hidden shadow-2xl rotate-[3deg]">
            <ThreeCube />
          </div>
          {/* Middle Left */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[2%] w-32 h-32 md:w-52 md:h-52 overflow-hidden shadow-2xl">
            <ThreeCube />
          </div>
          {/* Middle Right */}
          <div className="absolute top-[55%] -translate-y-1/2 right-[4%] w-32 h-40 md:w-52 md:h-64 overflow-hidden shadow-2xl rotate-[-1deg]">
            <ThreeCube />
          </div>
          {/* Bottom Left */}
          <div className="absolute bottom-[8%] left-[15%] w-40 h-40 md:w-64 md:h-48 overflow-hidden shadow-2xl rotate-[1deg]">
            <ThreeCube />
          </div>
          {/* Bottom Right */}
          <div className="absolute bottom-[10%] right-[18%] w-36 h-36 md:w-52 md:h-52 overflow-hidden shadow-2xl">
            <ThreeCube />
          </div>
        </div>

        {/* Central Mission Text - Vertical rhythm and opacity */}
        <div className="relative z-10 text-center max-w-2xl bg-[#211208]/40 backdrop-blur-sm p-8 rounded-2xl">
          <h2 className="text-[#f5e6d8] font-bold text-lg md:text-xl mb-4 tracking-[0.2em] uppercase">
            Where innovation meets precision.
          </h2>
          <p className="text-[#f5e6d8]/70 text-[15px] md:text-[17px] leading-relaxed font-light">
            Symphonia unites visionary thinkers, creative architects, and analytical experts, 
            collaborating seamlessly to transform challenges into opportunities. Together, 
            we deliver tailored solutions that drive impact and inspire growth.
          </p>
        </div>
      </section>

      {/* SECTION 4: BEIGE TRANSITION (image_1798f6.png) */}
      <section className="h-screen w-full bg-[#dcc9b6] flex items-center justify-center text-center">
        <p className="text-[#211208] text-[22px] md:text-[28px] font-medium tracking-tight opacity-80 font-serif">
          Your next section goes here.
        </p>
      </section>

    </main>
  );
}