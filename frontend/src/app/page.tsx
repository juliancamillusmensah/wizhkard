'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Create Beautiful Digital Cards in Minutes
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Design stunning greeting cards for birthdays, weddings, anniversaries, and more. 
                No design experience needed.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/auth/register"
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
                >
                  Get Started Free
                </Link>
                <Link
                  href="#features"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-white rounded-lg shadow-2xl p-8 inline-block">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-gray-600">100+ Beautiful Templates Ready to Use</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose CardCraft?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Occasions Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Perfect for Every Occasion</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {occasions.map((occasion, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition text-center"
                >
                  <div className="text-3xl mb-2">{occasion.icon}</div>
                  <p className="font-medium text-gray-900">{occasion.name}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your First Card?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users creating beautiful digital cards today
            </p>
            <Link
              href="/auth/register"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Start Creating Free
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p>&copy; 2024 CardCraft. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

const features = [
  {
    icon: '🎨',
    title: 'Drag & Drop Editor',
    description: 'Easy-to-use canvas editor with intuitive controls',
  },
  {
    icon: '🎭',
    title: '100+ Templates',
    description: 'Choose from hundreds of professionally designed templates',
  },
  {
    icon: '🤖',
    title: 'AI Messages',
    description: 'Let AI generate personalized messages for you',
  },
  {
    icon: '📸',
    title: 'Upload Photos',
    description: 'Add your own images and customize them easily',
  },
  {
    icon: '🔗',
    title: 'QR Sharing',
    description: 'Share cards via QR codes with anyone',
  },
  {
    icon: '⬇️',
    title: 'HD Download',
    description: 'Export cards in high resolution formats',
  },
];

const occasions = [
  { icon: '🎂', name: 'Birthday' },
  { icon: '💕', name: 'Valentine' },
  { icon: '💍', name: 'Wedding' },
  { icon: '👶', name: 'Baby' },
  { icon: '🎓', name: 'Graduation' },
  { icon: '🎄', name: 'Christmas' },
  { icon: '🎊', name: 'Anniversary' },
  { icon: '💐', name: 'Thank You' },
];
