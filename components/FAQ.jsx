import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Plus, Download, Smartphone, Lock, Users, CreditCard } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: HelpCircle,
      question: "What is Cardify?",
      answer: "Cardify is a comprehensive learning platform designed to help users create, organize, and study flashcards with advanced features like spaced repetition, progress tracking, and AI-powered learning optimization."
    },
    {
      icon: Plus,
      question: "How do I create a flashcard?",
      answer: "Simply click the 'Create' button, add your question and answer with optional images and formatting, then save your flashcard to a deck. You can also use our quick-create feature or import from various formats."
    },
    {
      icon: Download,
      question: "Can I import flashcards from other platforms?",
      answer: "Yes! You can import flashcards from CSV files, Anki decks, Quizlet sets, and other popular formats. We also support bulk import to easily transfer your existing study materials."
    },
    {
      icon: Smartphone,
      question: "Is there a mobile app available?",
      answer: "Currently, Cardify is a responsive web application that works perfectly on mobile browsers. We're developing dedicated iOS and Android apps, which will be available in early 2025."
    },
    {
      icon: Lock,
      question: "How secure is my study data?",
      answer: "Your data is encrypted both in transit and at rest using industry-standard security protocols. We never share your personal information or study materials with third parties, and you have full control over your data."
    },
    {
      icon: Users,
      question: "Can I collaborate with others?",
      answer: "Absolutely! You can share decks with classmates, create study groups, and collaborate on flashcard creation. Teachers can also create assignments and track student progress."
    },
    {
      icon: CreditCard,
      question: "What are the pricing options?",
      answer: "We offer a free tier with basic features, perfect for individual learners. Premium plans start at $9/month with advanced analytics, unlimited decks, and collaboration features. Students get 50% off with valid ID."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column - Header */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Frequently Asked
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Find answers to common questions about Cardify and get the help you need to succeed.
              </p>

              {/* Contact CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-2">Still have questions?</h3>
                <p className="text-blue-200 text-sm mb-4">Our support team is here to help you 24/7</p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/15"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-2xl"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-blue-300 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                  <div className="px-6 pb-5">
                    <div className="pl-14">
                      <div className="bg-white/5 rounded-xl p-4 border-l-4 border-blue-400">
                        <p className="text-blue-100 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}