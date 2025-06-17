import React from "react";
import { Plus, FolderOpen, TrendingUp, Sparkles, Brain, Target, Zap, Users, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Plus,
      title: "Create Flashcards",
      description: "Easily create flashcards with text, images, and custom formatting to make learning efficient and engaging.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-500"
    },
    {
      icon: FolderOpen,
      title: "Organize Decks",
      description: "Organize flashcards into decks by topic, subject, or category for easy retrieval and structured study sessions.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed analytics and insights into your strengths and areas for improvement.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-500"
    },
    {
      icon: Brain,
      title: "Smart Learning",
      description: "AI-powered spaced repetition algorithm adapts to your learning pace for maximum retention and efficiency.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      iconBg: "bg-orange-500"
    },
    {
      icon: Zap,
      title: "Rapid Study Mode",
      description: "Quick review sessions designed for busy schedules, helping you learn effectively in just minutes a day.",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      iconBg: "bg-yellow-500"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your study materials are encrypted and stored securely, ensuring your learning data remains private and protected.",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      iconBg: "bg-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful tools designed to transform your learning experience and help you achieve your educational goals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 overflow-hidden"
            >
              {/* Card background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white max-w-4xl mx-auto">
            <div className="flex-1 mb-6 sm:mb-0 sm:mr-8">
              <h3 className="text-2xl font-bold mb-2">Ready to revolutionize your learning?</h3>
              <p className="text-blue-100">Join thousands of students already using our platform to achieve their goals.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-200 border border-white/30">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}