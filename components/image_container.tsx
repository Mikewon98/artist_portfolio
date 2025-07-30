import Image from "next/image";

export function ImageContainer({ src }: { src: string }) {
  return (
    <div className="relative w-full h-[200px] sm:h-[150px] md::h-full rounded-xl overflow-hidden bg-black/20">
      <Image
        src={src}
        alt="art images"
        sizes="100%"
        fill
        className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
