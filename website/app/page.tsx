import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaUsers, FaTools, FaDownload, FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with detailed background */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)'
      }}>
        {/* Detailed background pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 102, 0, 0.3) 10px, rgba(255, 102, 0, 0.3) 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255, 153, 0, 0.2) 10px, rgba(255, 153, 0, 0.2) 20px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        {/* Orange glow accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-600/20 via-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-orange-500/15 via-orange-600/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            {/* Logo instead of MMH text */}
            <div className="flex justify-center mb-8">
              <Image 
                src="/logo.png" 
                alt="Melksham Mental Health Logo" 
                width={400}
                height={150}
                className="w-auto h-32 md:h-48"
                priority
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 102, 0, 0.5)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.9))'
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 grunge-text" style={{
              WebkitTextStroke: '2px #000',
              paintOrder: 'stroke fill'
            }}>
              MELKSHAM MENTAL HEALTH
            </h1>
            <p className="text-2xl md:text-4xl font-black mb-8 grunge-text text-white" style={{
              textShadow: '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000'
            }}>
              ⚡ REAL STRUGGLES. REAL SUPPORT ⚡
            </p>
          </div>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto font-bold" style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'
          }}>
            Mental health support for Melksham, Wiltshire and beyond. 
            Access free resources, connect with your community, and find real help when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/resources"
              className="grunge-button text-secondary font-black py-5 px-10 rounded-lg text-xl uppercase"
            >
              Get Help
            </Link>
            <Link
              href="/contact"
              className="grunge-button text-secondary font-black py-5 px-10 rounded-lg text-xl uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section with detailed background */}
      <section className="py-16 relative overflow-hidden">
        {/* Detailed geometric background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(30deg, #ff6600 12%, transparent 12.5%, transparent 87%, #ff6600 87.5%, #ff6600),
            linear-gradient(150deg, #ff6600 12%, transparent 12.5%, transparent 87%, #ff6600 87.5%, #ff6600),
            linear-gradient(30deg, #ff6600 12%, transparent 12.5%, transparent 87%, #ff6600 87.5%, #ff6600),
            linear-gradient(150deg, #ff6600 12%, transparent 12.5%, transparent 87%, #ff6600 87.5%, #ff6600)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 grunge-text">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="grunge-button p-8 rounded-lg">
              <FaHeart className="text-6xl text-secondary mb-6 mx-auto" style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 102, 0, 0.6))'
              }} />
              <h3 className="text-2xl font-black mb-4 grunge-text text-center">Support</h3>
              <p className="text-white font-bold text-center" style={{
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
              }}>
                Real mental health support for real people. We understand because we&apos;ve been there.
              </p>
            </div>
            <div className="grunge-button p-8 rounded-lg">
              <FaUsers className="text-6xl text-secondary mb-6 mx-auto" style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 102, 0, 0.6))'
              }} />
              <h3 className="text-2xl font-black mb-4 grunge-text text-center">Resources</h3>
              <p className="text-white font-bold text-center" style={{
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
              }}>
                Comprehensive local and national crisis resources available 24/7.
              </p>
            </div>
            <div className="grunge-button p-8 rounded-lg">
              <FaTools className="text-6xl text-secondary mb-6 mx-auto" style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 102, 0, 0.6))'
              }} />
              <h3 className="text-2xl font-black mb-4 grunge-text text-center">Tools</h3>
              <p className="text-white font-bold text-center" style={{
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
              }}>
                Free content creation app for mental health awareness and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Promotion Section with detailed background */}
      <section className="py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)'
      }}>
        {/* Hexagonal pattern background */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255, 102, 0, 0.4) 0%, transparent 2px),
            radial-gradient(circle at center, rgba(255, 153, 0, 0.3) 0%, transparent 2px)
          `,
          backgroundSize: '40px 40px, 40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
        {/* Orange accent glows */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-radial from-orange-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-radial from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 grunge-text">
                Post Creator Desktop App
              </h2>
              <p className="text-white text-lg mb-8 font-bold" style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'
              }}>
                Generate positive mental health content with our free desktop application. 
                Perfect for raising awareness and supporting your community.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <FaStar className="text-secondary mt-1 mr-3 flex-shrink-0 text-xl" style={{
                    filter: 'drop-shadow(0 0 6px rgba(255, 102, 0, 0.6))'
                  }} />
                  <span className="text-white font-bold text-lg">100+ inspirational quotes and affirmations</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-secondary mt-1 mr-3 flex-shrink-0 text-xl" style={{
                    filter: 'drop-shadow(0 0 6px rgba(255, 102, 0, 0.6))'
                  }} />
                  <span className="text-white font-bold text-lg">Uplifting recovery stories</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-secondary mt-1 mr-3 flex-shrink-0 text-xl" style={{
                    filter: 'drop-shadow(0 0 6px rgba(255, 102, 0, 0.6))'
                  }} />
                  <span className="text-white font-bold text-lg">Evidence-based advice and tips</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-secondary mt-1 mr-3 flex-shrink-0 text-xl" style={{
                    filter: 'drop-shadow(0 0 6px rgba(255, 102, 0, 0.6))'
                  }} />
                  <span className="text-white font-bold text-lg">Local Melksham & Wiltshire resources</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-secondary mt-1 mr-3 flex-shrink-0 text-xl" style={{
                    filter: 'drop-shadow(0 0 6px rgba(255, 102, 0, 0.6))'
                  }} />
                  <span className="text-white font-bold text-lg">20+ mental health topics covered</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-6">
                <div
                  className="grunge-button text-secondary font-black py-4 px-8 rounded-lg inline-flex items-center justify-center text-lg uppercase opacity-70 cursor-not-allowed"
                >
                  <FaDownload className="mr-3 text-xl" />
                  Coming Soon
                </div>
              </div>
            </div>
            <div className="grunge-button p-8 rounded-lg">
              <div className="aspect-video rounded flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(26, 26, 26, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)'
              }}>
                <div className="text-center">
                  <div className="text-7xl mb-4">📱</div>
                  <p className="text-white font-bold text-xl grunge-text">App Screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            From Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quote Card */}
            <div className="bg-dark p-6 rounded-lg border border-primary/20">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-primary mb-3">Daily Inspiration</h3>
              <blockquote className="text-white italic mb-4">
                &quot;You don&apos;t have to be positive all the time. Having feelings doesn&apos;t make you negative. It makes you human.&quot;
              </blockquote>
              <Link href="/blog" className="text-secondary hover:text-primary transition-colors">
                Read more →
              </Link>
            </div>

            {/* Blog Card */}
            <div className="bg-dark p-6 rounded-lg border border-primary/20">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-primary mb-3">Latest Blog Post</h3>
              <p className="text-white mb-4">
                5 Ways to Support Your Mental Health This Winter
              </p>
              <Link href="/blog" className="text-secondary hover:text-primary transition-colors">
                Read article →
              </Link>
            </div>

            {/* Community Card */}
            <div className="bg-dark p-6 rounded-lg border border-primary/20">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-primary mb-3">Community Stories</h3>
              <p className="text-white mb-4">
                Real stories of hope and recovery from people just like you.
              </p>
              <Link href="/community/stories" className="text-secondary hover:text-primary transition-colors">
                Share your story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            You Are Not Alone
          </h2>
          <p className="text-xl text-white mb-8">
            Whether you&apos;re struggling or supporting someone who is, we&apos;re here to help. 
            Reach out today.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg text-lg inline-block transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
