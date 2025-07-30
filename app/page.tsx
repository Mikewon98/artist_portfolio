import { BackgroundLines } from "@/components/ui/background-lines";
import ContactComponent from "@/components/contact_component";
import TabsComponent from "@/components/tabs_component";
import EduComponent from "@/components/edu_component";
import AboutUs from "@/components/about_us";
import Footer from "@/components/footer";
import React from "react";

export default function Home() {
  return (
    <>
      <BackgroundLines className="my-20 md:my-2 flex items-center justify-center w-full flex-col px-4">
        <div className="w-[200px] rounded-full">
          <img
            src="/bekama_dawit.jpeg"
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans py-4 md:pt-10 relative z-20 font-bold tracking-tight">
          Bekama Dawit
        </h2>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-sans py-1 md:py-5 relative z-20 font-bold tracking-tight">
          Visual Artist & Designer
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          "Art is not what you see, but what you make others see." – Edgar Degas
        </p>
      </BackgroundLines>
      <AboutUs />
      <ContactComponent />
      <EduComponent />
      <TabsComponent />
      <Footer />
    </>
  );
}
