import { ImageContainer } from "./image_container";
import { Tabs } from "./ui/tabs";

export default function TabsComponent() {
  const tabs = [
    {
      title: "Character Design",
      value: "character_design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
          <p className="mb-8">Character Design</p>
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
              <ImageContainer src="/character_design_1.png" />
              <ImageContainer src="/character_design_2.png" />
              <ImageContainer src="/character_design_5.png" />
              <ImageContainer src="/character_design_3.png" />
              <ImageContainer src="/character_design_4.png" />
              <ImageContainer src="/character_design_6.png" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Assets",
      value: "assets",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
          <p className="mb-8">Assets</p>
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
              <ImageContainer src="/assets_1.png" />
              <ImageContainer src="/assets_2.png" />
              <ImageContainer src="/assets_3.png" />
              <ImageContainer src="/assets_5.png" />
              <ImageContainer src="/assets_4.png" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "StoryBoard Projects",
      value: "storyboard_projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
          <p className="mb-8">StoryBoard Projects</p>
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
              <ImageContainer src="/story_1.png" />
              <ImageContainer src="/story_2.png" />
              <ImageContainer src="/story_3.png" />
              <ImageContainer src="/story_4.png" />
              <ImageContainer src="/story_5.png" />
              <ImageContainer src="/story_6.png" />
              <ImageContainer src="/story_7.png" />
              <ImageContainer src="/story_8.png" />
              <ImageContainer src="/story_9.png" />
              <ImageContainer src="/story_10.png" />
              <ImageContainer src="/story_11.png" />
              <ImageContainer src="/story_12.png" />
              <ImageContainer src="/story_13.png" />
              <ImageContainer src="/story_14.png" />
              <ImageContainer src="/story_15.png" />
              <ImageContainer src="/story_16.png" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Illustration Projects",
      value: "illustration_projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
          <p className="mb-8">Illustration Projects</p>
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
              <ImageContainer src="/illustration_1.png" />
              <ImageContainer src="/illustration_2.png" />
              <ImageContainer src="/illustration_3.png" />
              <ImageContainer src="/illustration_4.png" />
              <ImageContainer src="/illustration_5.png" />
              <ImageContainer src="/illustration_6.png" />
              <ImageContainer src="/illustration_7.png" />
              <ImageContainer src="/illustration_8.png" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Digital Portraits",
      value: "digital_portraits",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
          <p className="mb-8">Digital Portraits</p>
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
              <ImageContainer src="/digital_1.jpg" />
              <ImageContainer src="/digital_2.png" />
              <ImageContainer src="/digital_3.png" />
              <ImageContainer src="/digital_4.png" />
              <ImageContainer src="/digital_5.png" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Traditional Paintings",
      value: "traditional_painting",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
          <p className="mb-8">Traditional Paintings</p>
          <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
              <ImageContainer src="/traditional_1.png" />
              <ImageContainer src="/traditional_2.png" />
              <ImageContainer src="/traditional_3.png" />
              <ImageContainer src="/traditional_4.png" />
              <ImageContainer src="/traditional_5.png" />
              <ImageContainer src="/traditional_6.png" />
              <ImageContainer src="/traditional_7.png" />
              <ImageContainer src="/traditional_8.png" />
              <ImageContainer src="/traditional_9.png" />
              <ImageContainer src="/traditional_10.png" />
              <ImageContainer src="/traditional_11.png" />
              <ImageContainer src="/traditional_12.png" />
              <ImageContainer src="/traditional_13.png" />
              <ImageContainer src="/traditional_14.png" />
              <ImageContainer src="/traditional_15.png" />
              <ImageContainer src="/traditional_16.png" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[50rem] [perspective:1000px] relative flex flex-col max-w-5xl px-4 mx-auto w-full items-start justify-start my-40 gap-10">
      <h2 className="font-bold text-5xl sm:text-6xl text-gray-700">
        Best Project
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

// import { ImageContainer } from "./image_container";
// import { Tabs } from "./ui/tabs";

// export default function TabsComponent() {
//   const tabs = [
//     {
//       title: "Character Design",
//       value: "character_design",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
//           <p className="mb-8">Character Design</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 h-[400px]">
//             <ImageContainer src="/character_design_1.png" />
//             <ImageContainer src="/character_design_2.png" />
//             <ImageContainer src="/character_design_5.png" />
//             <ImageContainer src="/character_design_3.png" />
//             <ImageContainer src="/character_design_4.png" />
//             <ImageContainer src="/character_design_6.png" />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Assets",
//       value: "assets",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
//           <p className="mb-8">Assets</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 h-[400px]">
//             <ImageContainer src="/assets_1.png" />
//             <ImageContainer src="/assets_2.png" />
//             <ImageContainer src="/assets_3.png" />
//             <ImageContainer src="/assets_5.png" />
//             <ImageContainer src="/assets_4.png" />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "StoryBoard Projects",
//       value: "storyboard_projects",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
//           <p className="mb-8">StoryBoard Projects</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 h-[400px]">
//             <ImageContainer src="/story_1.png" />
//             <ImageContainer src="/story_2.png" />
//             <ImageContainer src="/story_3.png" />
//             <ImageContainer src="/story_4.png" />
//             <ImageContainer src="/story_5.png" />
//             <ImageContainer src="/story_6.png" />
//             <ImageContainer src="/story_7.png" />
//             <ImageContainer src="/story_8.png" />
//             <ImageContainer src="/story_9.png" />
//             <ImageContainer src="/story_10.png" />
//             <ImageContainer src="/story_11.png" />
//             <ImageContainer src="/story_12.png" />
//             <ImageContainer src="/story_13.png" />
//             <ImageContainer src="/story_14.png" />
//             <ImageContainer src="/story_15.png" />
//             <ImageContainer src="/story_16.png" />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Illustration Projects",
//       value: "illustration_projects",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
//           <p className="mb-8">Illustration Projects</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 h-[400px]">
//             <ImageContainer src="/illustration_1.png" />
//             <ImageContainer src="/illustration_2.png" />
//             <ImageContainer src="/illustration_3.png" />
//             <ImageContainer src="/illustration_4.png" />
//             <ImageContainer src="/illustration_5.png" />
//             <ImageContainer src="/illustration_6.png" />
//             <ImageContainer src="/illustration_7.png" />
//             <ImageContainer src="/illustration_8.png" />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Digital Portraits",
//       value: "digital_portraits",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
//           <p className="mb-8">Digital Portraits</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 h-[400px]">
//             <ImageContainer src="/digital_1.jpg" />
//             <ImageContainer src="/digital_2.png" />
//             <ImageContainer src="/digital_3.png" />
//             <ImageContainer src="/digital_4.png" />
//             <ImageContainer src="/digital_5.png" />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Traditional Paintings",
//       value: "traditional_painting",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-blue-700">
//           <p className="mb-8">Traditional Paintings</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 h-[400px]">
//             <ImageContainer src="/traditional_1.png" />
//             <ImageContainer src="/traditional_2.png" />
//             <ImageContainer src="/traditional_3.png" />
//             <ImageContainer src="/traditional_4.png" />
//             <ImageContainer src="/traditional_5.png" />
//             <ImageContainer src="/traditional_6.png" />
//             <ImageContainer src="/traditional_7.png" />
//             <ImageContainer src="/traditional_8.png" />
//             <ImageContainer src="/traditional_9.png" />
//             <ImageContainer src="/traditional_10.png" />
//             <ImageContainer src="/traditional_11.png" />
//             <ImageContainer src="/traditional_12.png" />
//             <ImageContainer src="/traditional_13.png" />
//             <ImageContainer src="/traditional_14.png" />
//             <ImageContainer src="/traditional_15.png" />
//             <ImageContainer src="/traditional_16.png" />
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="h-[90rem] sm:h-[50rem] [perspective:1000px] relative flex flex-col max-w-5xl px-4 mx-auto w-full items-start justify-start my-40 gap-10">
//       <h2 className="font-bold text-5xl sm:text-6xl text-gray-700">
//         Best Project
//       </h2>
//       <Tabs tabs={tabs} />
//     </div>
//   );
// }
