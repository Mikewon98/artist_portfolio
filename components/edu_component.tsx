import Image from "next/image";

export default function EduComponent() {
  const images = [
    "/blender_icon.png",
    "/Creative_cloud.png",
    "/Figma.png",
    "/After_effects.png",
    "/Illustrator.png",
    "/InDesign.png",
    "/Lightroom.png",
    "/Photoshop.png",
    "/Premiere_pro.png",
  ];
  return (
    <div className="max-w-5xl mx-auto w-full sm:w-[90%] bg-gradient-to-br from-purple-500 to-purple-300 px-10 py-20 rounded-bl-lg rounded-tl-lg rounded-br-4xl rounded-tr-4xl shadow-l-xl shadow-[8px_0_24px_-4px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col col-span-1">
          <div className="flex gap-4">
            <h2 className="font-bold text-3xl text-white">Education</h2>
            <div className="border-2 border-purple-800 rounded-4xl px-6 py-2 flex items-center justify-center">
              <p className="text-white">2021-2025</p>
            </div>
          </div>
          <p className="py-3 text-[14px] text-white">
            Addis Ababa University -{" "}
            <span className="py-1 font-bold text-white">
              Visual Artist & Designer
            </span>
          </p>
          <div className="mt-10">
            <h2 className="font-bold text-3xl text-white">Technical skills</h2>
            <div className="flex flex-wrap w-[300px] mt-4">
              {images.map((image, index) => {
                return (
                  <div key={index} className="w-[70px] h-[70px] p-2">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/20">
                      <Image
                        src={image}
                        alt="art images"
                        sizes="100%"
                        fill
                        className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-bold text-3xl mb-6 text-white">Interest</h2>
            <div className="flex items-center gap-4 sm:gap-6">
              <p className="text-white">Designing</p>
              <div className="w-[2px] h-[12px] bg-purple-800"></div>
              <p className="text-white">Drawing</p>
              <div className="w-[2px] h-[12px] bg-purple-800"></div>
              <p className="text-white">Producing</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <div>
            <div className="mb-6">
              <h2 className="font-bold text-3xl text-white">Soft Skill</h2>
            </div>
            <div className="flex justify-start gap-6 sm:gap-12">
              <div className="flex flex-col gap-6">
                <p className="text-white">Team Work</p>
                <p className="text-white">Communication</p>
              </div>
              <div className="w-[2px] h-[70px] bg-purple-800"></div>
              <div className="flex flex-col gap-6">
                <p className="text-white">Team Work</p>
                <p className="text-white">Communication</p>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-6">
            <div className="mb-6">
              <h2 className="font-bold text-3xl text-white">Skill Set</h2>
            </div>
            <div className="flex justify-start gap-6 sm:gap-12">
              <div className="flex flex-col gap-6">
                <p className="text-white">User Research</p>
                <p className="text-white">Wireframing</p>
                <p className="text-white">Brainstorm</p>
              </div>
              <div className="w-[2px] h-[120px] bg-purple-800"></div>
              <div className="flex flex-col gap-6">
                <p className="text-white">Asset Design</p>
                <p className="text-white">Prototyping</p>
                <p className="text-white">Graphic Representation</p>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-6">
            <div className="mb-6">
              <h2 className="font-bold text-3xl text-white">Language</h2>
            </div>
            <div className="flex justify-start gap-12">
              <div className="flex flex-col gap-6">
                <p className="text-white">Amharic (native)</p>
              </div>
              <div className="w-[2px] h-[25px] bg-purple-800"></div>
              <div className="flex flex-col gap-6">
                <p className="text-white">English (Fluent)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
