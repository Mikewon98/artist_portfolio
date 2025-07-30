export default function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto w-full gap-20 justify-between">
      <div className="flex flex-col mx-8 lg:mx-0">
        <h2 className="font-bold text-4xl lg:text-6xl px-4 text-gray-700">
          About me
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-400 mt-4">
          I am a passionate Visual Artist and Graphic Designer with over two
          years of experience in the design industry. My specialty lies in
          translating narratives into visually captivating and easily
          comprehensible representations. I thrive on transforming ideas into
          striking visuals that resonate with audiences. Throughout my career,
          I’ve engaged in a variety of creative projects, including branding
          initiatives, character development, and social media campaigns. I’ve
          had the pleasure of collaborating with notable organizations and
          brands such as PANA Communications and YOT Technologies, where I’ve
          delivered impactful and visually compelling solutions. My approach is
          defined by a commitment to excellence, a meticulous eye for detail,
          and a drive for innovation. I’m dedicated to creating designs that not
          only meet but exceed expectations, ensuring that every project I
          undertake is a testament to quality and creativity.
        </p>
      </div>
      <div className="mx-8 lg:mx-0">
        <div className="w-full h-full relative rounded-[120px] overflow-hidden ml-auto">
          <img
            src="/bekama_dawit.jpeg"
            alt="About Us"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
