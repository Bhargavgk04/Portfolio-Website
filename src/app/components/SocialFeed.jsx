"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SocialFeed = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated Twitter feed data
    const mockTweets = [
      {
        id: 1,
        text: "Just launched my new portfolio website! Check it out at #webdev #portfolio",
        date: "2024-03-15",
        likes: 42,
        retweets: 12
      },
      {
        id: 2,
        text: "Working on some exciting new projects using React and Node.js. Stay tuned! #coding #webdevelopment",
        date: "2024-03-14",
        likes: 38,
        retweets: 8
      },
      {
        id: 3,
        text: "Attended an amazing tech conference today. Learned so much about the future of web development! #tech #learning",
        date: "2024-03-13",
        likes: 56,
        retweets: 15
      }
    ];

    // Simulate API call
    setTimeout(() => {
      setTweets(mockTweets);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="py-16 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Latest Updates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array(3).fill().map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#1E1E1E] rounded-lg p-6 border border-[#333333]"
              >
                <div className="animate-pulse">
                  <div className="h-4 bg-[#333333] rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-[#333333] rounded w-full mb-2"></div>
                  <div className="h-4 bg-[#333333] rounded w-5/6"></div>
                </div>
              </motion.div>
            ))
          ) : (
            tweets.map((tweet, index) => (
              <motion.div
                key={tweet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1E1E1E] rounded-lg p-6 border border-[#333333] hover:border-[#FF8C00] transition-colors duration-300"
              >
                <p className="text-[#ADB7BE] mb-4">{tweet.text}</p>
                <div className="flex justify-between items-center text-sm text-[#666666]">
                  <span>{tweet.date}</span>
                  <div className="flex space-x-4">
                    <span>❤️ {tweet.likes}</span>
                    <span>🔄 {tweet.retweets}</span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Follow on Twitter
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeed; 