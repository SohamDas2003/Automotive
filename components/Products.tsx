'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Products() {
  const productCategories = [
    {
      title: 'STEERING',
      description: 'The components of the steering system are related to steer the car by mechanically changing and physically redirecting the movement of tires. We can offer all the components and the reliability of this systems against many elements and for the necessity of the customers companies.',
      image: '/1.jpg',
      products: [
        'STEERING RACKS',
        'STEERING PUMPS', 
        'TIE ROD ENDS',
        'CONTROL ARMS',
        'BALL JOINTS'
      ]
    },
    {
      title: 'SUSPENSIONS', 
      description: 'Suspension system is a mechanical system of components. In their design, most offer the benefits that we use and appreciate for many years. We provide for suspension parts for all applications by our customers.',
      image: '/2.jpg',
      products: [
        'SHOCK ABSORBERS',
        'STRUTS',
        'COIL SPRINGS', 
        'STABILIZER LINKS',
        'BUSHINGS'
      ]
    },
    {
      title: 'BRAKES',
      description: 'The components of the braking system are related to deliver the car by mechanically extending and physically redirecting the movement of tires. We can offer all the components and the reliability of this systems against many elements and for the necessity of the customers companies.',
      image: '/3.jpg',
      products: [
        'BRAKE DISCS',
        'BRAKE PADS',
        'BRAKE ROTORS',
        'BRAKE CALIPERS',
        'BRAKE LINES'
      ]
    },
    {
      title: 'WHEEL HUBS',
      description: 'The unique Wheel hubs are for the car for special system of components. In their design, most offer the benefits that we use and appreciate for many years. We provide for wheel hubs parts for all applications by our customers.',
      image: '/4.jpg',
      products: [
        'COMPLETE WHEEL HUBS',
        'WHEEL HUBS ASSEMBLIES',
        'HUB BEARINGS',
        'LOCKING HUBS',
        'SEALING RINGS'
      ]
    },
    {
      title: 'ENGINE FLYWHEELS',
      description: 'The engine flywheel function is to moderate the inertial forces on the crankshaft and contribute to engine speed as uniform as possible, ensuring the transmission of the kinematic chain, they are also an important part that regulates the mechanics of the clutch wheel, and circulation.',
      image: '/5.jpg',
      products: [
        'ENGINE FLYWHEELS',
        'DUAL MASS ENGINE FLYWHEELS',
        'CLUTCH DISCS',
        'FLYWHEELS',
        'CLUTCH KITS'
      ]
    },
    {
      title: 'PROPELLER SHAFT',
      description: 'The propeller shaft components transfer power the propeller for aircraft the main rotor for helicopters, thus propeller shafts must be capable of operating at the maximum RPM of the engine and transferring the full available power without affecting system integrity.',
      image: '/6.jpg',
      products: [
        'DRIVE SHAFTS',
        'UNIVERSAL JOINTS',
        'CV JOINTS',
        'COUPLING ASSEMBLIES',
        'SUPPORT BEARINGS'
      ]
    },
    {
      title: 'CABIN LIFT DEVICES',
      description: 'Advanced cabin lift mechanisms and hydraulic systems for commercial vehicles and heavy-duty applications providing reliable lifting solutions.',
      image: '/7.jpg',
      products: [
        'HYDRAULIC CYLINDERS',
        'LIFT PUMPS',
        'CONTROL VALVES',
        'SEALS & GASKETS',
        'MOUNTING HARDWARE'
      ]
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {productCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-32 last:mb-16"
          >
            {/* Category Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wider">
                {category.title}
              </h2>
              <div className="w-16 h-px bg-orange-400 mx-auto mt-6"></div>
            </div>

            {/* Content Layout - Alternating */}
            <div className={`flex flex-col lg:flex-row items-center gap-16 px-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Product Image */}
              <div className="flex-1 max-w-2xl">
                <motion.div
                  className="relative overflow-hidden rounded-lg"
                  initial={{ 
                    scale: 0.8, 
                    rotateY: index % 2 === 0 ? -15 : 15,
                    opacity: 0 
                  }}
                  whileInView={{ 
                    scale: 1, 
                    rotateY: 0,
                    opacity: 1 
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ perspective: "1000px" }}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain transform-gpu"
                    priority={index < 2}
                  />
                </motion.div>
              </div>

              {/* Product Details */}
              <motion.div 
                className="flex-1 max-w-xl"
                initial={{ 
                  y: 30, 
                  opacity: 0
                }}
                whileInView={{ 
                  y: 0,
                  opacity: 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="text-center lg:text-left">
                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-12">
                    {category.description}
                  </p>

                  {/* Products List */}
                  <div className="mb-8">
                    <h3 className="text-orange-400 font-semibold text-sm tracking-wider mb-6 uppercase">
                      Our Products
                    </h3>
                    <div className="space-y-3">
                      {category.products.map((product, productIndex) => (
                        <div
                          key={productIndex}
                          className="text-gray-700 text-base font-medium tracking-wide"
                        >
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View More Button */}
                  <Button 
                    variant="outline"
                    className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-none font-semibold tracking-wider transition-all duration-300"
                  >
                    VIEW MORE
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}