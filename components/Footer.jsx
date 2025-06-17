import React from "react";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section - Branding */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-lg font-semibold">
              Cardify Inc.
            </p>
            <p className="text-blue-100 text-sm">
              Making Learning Simple.
            </p>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/hasanul-banna-himel/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-300 group-hover:text-blue-400 transition-colors duration-200">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-6.5 19h-3v-8h3v8zm-1.5-9.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm10 9.268h-3v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4h-3v-8h3v1.085c.414-.544 1.09-.916 1.871-.916 1.379 0 2.5 1.121 2.5 2.5v5.331z"
                    />
                  </svg>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/obidur-rahman-shawal/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-300 group-hover:text-blue-400 transition-colors duration-200">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-6.5 19h-3v-8h3v8zm-1.5-9.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm10 9.268h-3v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4h-3v-8h3v1.085c.414-.544 1.09-.916 1.871-.916 1.379 0 2.5 1.121 2.5 2.5v5.331z"
                    />
                  </svg>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mehreen-mallick-fiona/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-300 group-hover:text-blue-400 transition-colors duration-200">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-6.5 19h-3v-8h3v8zm-1.5-9.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm10 9.268h-3v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4h-3v-8h3v1.085c.414-.544 1.09-.916 1.871-.916 1.379 0 2.5 1.121 2.5 2.5v5.331z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}