import React from "react";
import { BookOpen, ArrowRight, Sparkles, Brain, Target } from "lucide-react";

export default function Hero({ onButtonClick }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating cards animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-20 bg-white/5 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-16 bg-white/5 rounded-lg -rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-14 h-18 bg-white/5 rounded-lg rotate-6 animate-float-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl shadow-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Cardify
            </span>
            <br />
            <span className="text-white">Studio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Transform your learning experience with beautiful, interactive flashcards
          </p>

          <p className="text-lg text-blue-200/80 mb-12 max-w-xl mx-auto animate-fade-in-up delay-500">
            Create, study, and master any subject with our intuitive flashcard platform designed for modern learners
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up delay-600">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-blue-100">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Interactive Cards</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-blue-100">
              <Brain className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium">Smart Learning</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-blue-100">
              <Target className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm font-medium">Track Progress</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up delay-700">
            <button
              onClick={onButtonClick}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-3">Start Creating</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </button>

            <p className="text-sm text-blue-200/60 mt-4">
              No sign-up required • Start learning immediately
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-25px) rotate(6deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}