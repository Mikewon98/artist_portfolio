import { LuInstagram } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Image from "next/image";

export default function ContactComponent() {
  return (
    <div className="max-w-5xl mx-8 lg:mx-auto my-20">
      <h2 className="font-bold text-4xl lg:text-6xl text-gray-700 mb-12">
        Contact
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-200">
              <SiGmail className="text-purple-900" />
            </div>
            <p>Bekamadawit@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-purple-200 p-1">
              <Image
                src="/telegram-logo.webp"
                alt="Telegram Logo"
                className="w-full h-full object-cover rounded-full"
                width={100}
                height={100}
              />
            </div>
            <p>@buzz_bkm</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-200">
              <FaPhone className="text-purple-900" />
            </div>
            <p>+251937667595</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-200">
              <LuInstagram className="text-purple-900" />
            </div>
            <p>@buzz_bkm </p>
          </div>
        </div>
      </div>
    </div>
  );
}
