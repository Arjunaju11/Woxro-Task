import Image from "next/image";
import ThreeCube from "./src/components/ThreeCube";

export default function LandingPage() {
  return (
    <main className="w-full bg-[#211208] text-[#f5e6d8] selection:bg-brand-cream selection:text-brand-dark overflow-x-hidden">

      {/* ========================= */}
      {/* SECTION 1: HERO */}
      {/* ========================= */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-5xl">

          {/* Logo */}
          <div className="mb-12">
            <Image
              src="/logo.png"
              alt="Symphonia Logo"
              width={56}
              height={40}
              priority
              className="opacity-90"
            />
          </div>

          {/* Heading */}
          <h1
            className="
              font-serif tracking-tight
              text-[34px] leading-tight
              sm:text-[44px]
              md:text-[56px]
              lg:text-[72px]
            "
          >
            The first media company <br className="hidden md:block" />
            crafted for the digital-first generation.
          </h1>

        </div>
      </section>

      {/* ========================= */}
      {/* SECTION 2: INNOVATION GRID */}
      {/* ========================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        {/* Floating Cubes */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Top Left */}
          <Cube className="top-[10%] left-[6%]" size="sm" rotate="-2deg" />

          {/* Top Right */}
          <Cube className="top-[8%] right-[6%]" size="md" rotate="3deg" />

          {/* Middle Left */}
          <Cube className="top-1/2 left-[2%] -translate-y-1/2" size="sm" />

          {/* Middle Right */}
          <Cube className="top-1/2 right-[4%] -translate-y-1/2" size="md" rotate="-1deg" />

          {/* Bottom Left */}
          <Cube className="bottom-[10%] left-[10%]" size="md" rotate="1deg" />

          {/* Bottom Right */}
          <Cube className="bottom-[8%] right-[12%]" size="sm" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 max-w-2xl text-center bg-[#211208]/50 backdrop-blur-md p-8 md:p-10 rounded-2xl">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4">
            Where innovation meets precision
          </h2>

          <p className="text-[15px] md:text-[17px] leading-relaxed text-[#f5e6d8]/75 font-light">
            Symphonia brings together visionary thinkers, creative architects,
            and analytical experts. We transform complex challenges into
            meaningful digital experiences that inspire growth and impact.
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* SECTION 3: TRANSITION */}
      {/* ========================= */}
      <section className="min-h-screen bg-[#dcc9b6] flex items-center justify-center px-6">
        <p className="font-serif text-[#211208] text-[22px] md:text-[28px] opacity-80 text-center">
          Your next section goes here.
        </p>
      </section>

    </main>
  );
}

/* ========================= */
/* Cube Helper Component */
/* ========================= */

function Cube({
  className,
  size = "sm",
  rotate = "0deg",
}: {
  className: string;
  size?: "sm" | "md";
  rotate?: string;
}) {
  const sizes = {
    sm: "w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44",
    md: "w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56",
  };

  return (
    <div
      className={`absolute ${className} ${sizes[size]} shadow-2xl`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <ThreeCube />
    </div>
  );
}
