'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Statistics() {
  const stats = [
    { number: 9000, suffix: '+', label: 'Items in our product range' },
    { number: 35000, suffix: '+', label: 'Cross reference OEM' },
    { number: 500, suffix: '+', label: 'New items every year' },
    { number: 90, suffix: '+', label: 'Countries served worldwide' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounter = (index: number, target: number) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = Math.floor(current);
        return newCounts;
      });
    }, duration / steps);
  };

  useEffect(() => {
    if (hasAnimated) {
      stats.forEach((stat, index) => {
        animateCounter(index, stat.number);
      });
    }
  }, [hasAnimated]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setHasAnimated(true)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-amber-400">Achievement</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and global reach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg font-medium text-white uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}