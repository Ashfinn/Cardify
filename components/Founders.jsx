import React from "react";
import { Users, Palette, Code, TrendingUp, Linkedin, Twitter, Mail } from "lucide-react";

export default function Founders() {
  const founders = [
    {
      name: "Obidur Rahman",
      role: "Design & UX Lead",
      description: "Crafting intuitive user experiences and beautiful interfaces that make learning effortless and engaging.",
      image: "obidur.png",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      name: "Himel",
      role: "Engineering Lead",
      description: "Building robust, scalable solutions that power seamless learning experiences for students worldwide.",
      image: "himel.png",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      name: "Mehreen",
      role: "Strategy & Growth",
      description: "Driving innovation and growth strategies to make effective learning tools accessible to everyone.",
      image: "fiona.png",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Meet Our Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate innovators dedicated to revolutionizing how people learn and retain knowledge
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 overflow-hidden"
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${founder.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 p-8">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                  </div>

                  {/* Role icon */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${founder.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <founder.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {founder.name}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent mb-4`}>
                    {founder.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {founder.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200">
                      <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200">
                      <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200">
                      <Mail className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}