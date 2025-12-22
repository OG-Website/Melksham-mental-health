import Link from 'next/link';
import { FaHeart, FaUsers, FaTools, FaDownload, FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark via-darker to-dark py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold text-primary mb-4 grunge-text">
              MMH
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 grunge-text">
              MELKSHAM MENTAL HEALTH
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-bold mb-8 grunge-text">
              ⚡ REAL STRUGGLES. REAL SUPPORT ⚡
            </p>
          </div>
          <p className="text-xl text-muted mb-12 max-w-3xl mx-auto font-bold">
            Mental health support for Melksham, Wiltshire and beyond. 
            Access free resources, connect with your community, and find real help when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="grunge-button bg-accent hover:bg-accent/80 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all uppercase grunge-text"
            >
              Get Help Now
            </Link>
            <Link
              href="/app"
              className="grunge-button bg-primary hover:bg-primary/80 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all uppercase grunge-text"
            >
              Download App
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 grunge-text uppercase">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="grunge-button p-8 rounded-lg transition-all">
              <FaHeart className="text-5xl text-primary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 grunge-text uppercase">Support</h3>
              <p className="text-muted font-bold">
                Real mental health support for real people. We understand because we&apos;ve been there.
              </p>
            </div>
            <div className="grunge-button p-8 rounded-lg transition-all">
              <FaUsers className="text-5xl text-primary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 grunge-text uppercase">Resources</h3>
              <p className="text-muted font-bold">
                Comprehensive local and national crisis resources available 24/7.
              </p>
            </div>
            <div className="grunge-button p-8 rounded-lg transition-all">
              <FaTools className="text-5xl text-primary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4 grunge-text uppercase">Tools</h3>
              <p className="text-muted font-bold">
                Free content creation app for mental health awareness and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 grunge-text uppercase">
                Post Creator Desktop App
              </h2>
              <p className="text-muted text-lg mb-6 font-bold">
                Generate positive mental health content with our free desktop application. 
                Perfect for raising awareness and supporting your community.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaStar className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white font-bold">100+ inspirational quotes and affirmations</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white font-bold">Uplifting recovery stories</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white font-bold">Evidence-based advice and tips</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white font-bold">Local Melksham & Wiltshire resources</span>
                </li>
                <li className="flex items-start">
                  <FaStar className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white font-bold">20+ mental health topics covered</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/app/download"
                  className="grunge-button bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition-all uppercase grunge-text"
                >
                  <FaDownload className="mr-2" />
                  Download Free
                </Link>
                <Link
                  href="/license"
                  className="grunge-button bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-6 rounded-lg inline-block text-center transition-all uppercase grunge-text"
                >
                  Remove Branding - £20
                </Link>
              </div>
            </div>
            <div className="bg-darker p-8 rounded-lg border border-primary/20">
              <div className="aspect-video bg-dark rounded flex items-center justify-center text-muted">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p>App Screenshot</p>
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
