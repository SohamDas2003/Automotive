'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Globe, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'ISO 9001 Certified',
      description: 'Quality management system ensuring consistent high standards'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'All products made in Italy with highest quality materials'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with reliable shipping'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Professional technical support and consultation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-amber-600">JAAPS</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            JAAPS was established with a vision to provide premium automotive spare parts 
            for heavy-duty trucks and commercial vehicles. We specialize in engineering 
            and manufacturing high-quality parts that meet the most demanding standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Automotive Parts"
                className="relative w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Product Range Focuses On:
            </h3>
            <div className="space-y-4">
              {['Gearbox Components', 'Axle & Differential', 'Propeller Shaft', 'P.T.O. & Hydraulic System'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 mt-8">
              <p className="text-gray-800 font-semibold text-lg">
                All products are MADE IN ITALY with the highest quality and perfect 
                interchangeability, suitable for Mercedes Trucks, MAN Trucks, and ZF Transmissions.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}