'use client';
import React, { useState } from 'react';
import { Plus, X, RotateCcw, BookOpen, Trash2 } from 'lucide-react';

export default function FlashcardGenerator() {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleAddCard = () => {
    if (question.trim() && answer.trim()) {
      setFlashcards([...flashcards, { front: question.trim(), back: answer.trim() }]);
      setQuestion('');
      setAnswer('');
    }
  };

  const handleRemoveCard = (indexToRemove) => {
    setFlashcards(flashcards.filter((_, index) => index !== indexToRemove));
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      newSet.delete(indexToRemove);
      return newSet;
    });
  };

  const toggleFlip = (index) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddCard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
            Cardify
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Create, study, and master your knowledge with interactive flashcards
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Input Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-blue-500" />
              Create New Flashcard
            </h2>

            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="What would you like to learn?"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="2"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter the answer here..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="2"
                />
              </div>

              <button
                onClick={handleAddCard}
                disabled={!question.trim() || !answer.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Flashcard
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        {flashcards.length > 0 && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 shadow-md">
              <span className="text-gray-600 font-medium">
                {flashcards.length} {flashcards.length === 1 ? 'card' : 'cards'} created
              </span>
            </div>
          </div>
        )}

        {/* Flashcards Grid */}
        {flashcards.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">No flashcards yet</h3>
            <p className="text-gray-400">Create your first flashcard to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {flashcards.map((flashcard, index) => (
              <div key={index} className="group">
                <div className="relative">
                  {/* Flashcard */}
                  <div
                    className="relative w-full h-64 cursor-pointer transform-gpu transition-all duration-300 hover:scale-105"
                    style={{ perspective: '1000px' }}
                    onClick={() => toggleFlip(index)}
                  >
                    <div
                      className="relative w-full h-full transition-transform duration-500 preserve-3d"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: flippedCards.has(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      {/* Front */}
                      <div
                        className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-2xl p-6 flex items-center justify-center text-white shadow-xl">
                          <div className="text-center">
                            <div className="text-lg font-semibold leading-relaxed break-words">
                              {flashcard.front}
                            </div>
                            <div className="mt-4 flex items-center justify-center text-blue-100">
                              <RotateCcw className="w-4 h-4 mr-1" />
                              <span className="text-sm">Click to reveal</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Back */}
                      <div
                        className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 rounded-2xl p-6 flex items-center justify-center text-white shadow-xl">
                          <div className="text-center">
                            <div className="text-lg font-semibold leading-relaxed break-words">
                              {flashcard.back}
                            </div>
                            <div className="mt-4 flex items-center justify-center text-emerald-100">
                              <RotateCcw className="w-4 h-4 mr-1" />
                              <span className="text-sm">Click to flip back</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveCard(index);
                    }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-600 hover:scale-110 flex items-center justify-center z-10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Card number */}
                <div className="text-center mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/60 text-gray-600">
                    Card {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Clear all button */}
        {flashcards.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setFlashcards([]);
                setFlippedCards(new Set());
              }}
              className="inline-flex items-center px-6 py-3 bg-white/60 hover:bg-white/80 text-gray-600 hover:text-gray-800 rounded-xl font-medium transition-all duration-200 hover:shadow-md"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All Cards
            </button>
          </div>
        )}
      </div>
    </div>
  );
}