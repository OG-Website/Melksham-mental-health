import Link from 'next/link';
import { FaHeart, FaUsers, FaTools, FaDownload, FaStar, FaSkull } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with grunge background */}
      <section className="relative py-20 md:py-32" style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-7xl md:text-9xl font-black mb-4 grunge-text" style={{
              WebkitTextStroke: '2px #000',
              paintOrder: 'stroke fill'
            }}>
              MMH
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 grunge-text" style={{
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
              href="/license"
              className="grunge-button text-secondary font-black py-5 px-10 rounded-lg text-xl uppercase"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* App Promotion Section */}
      <section className="py-16" style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Link
                  href="/app/download"
                  className="grunge-button text-secondary font-black py-4 px-8 rounded-lg inline-flex items-center justify-center text-lg uppercase"
                >
                  <FaDownload className="mr-3 text-xl" />
                  Download Free
                </Link>
                <Link
                  href="/license"
                  className="grunge-button text-secondary font-black py-4 px-8 rounded-lg inline-block text-center text-lg uppercase"
                >
                  License - £20
                </Link>
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
