import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#211208] px-4">
      <div className="text-center max-w-6xl">

        {/* Logo - Centered and Static */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={64}
            height={64}
            priority
          />
        </div>

        {/* Heading - Static Typography matching the editorial style */}
        <h1
          className="
            text-[#f5e6d8]
            font-serif
            text-center
            mx-auto
            max-w-[1057px]

            text-[32px]
            leading-[1.1]

            md:text-[48px]
            md:leading-[1.1]

            lg:text-[61px]
            lg:leading-[1.1]
          "
        >
          The first media company crafted for <br className="hidden md:block" />
          the digital first generation.
        </h1>

      </div>
    </section>
  );
}