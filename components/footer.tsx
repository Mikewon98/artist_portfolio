import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Bekama Dawit
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto md:mx-0 mt-2"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 text-center md:text-right">
          <div className="flex items-center justify-center gap-3 group cursor-pointer hover:text-blue-400 transition-colors duration-300">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg">Bekamadawit@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-3 group cursor-pointer hover:text-blue-400 transition-colors duration-300">
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg">+251937667595</span>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Bekama Dawit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
