import { FaHeart, FaUsers, FaHandshake, FaShieldAlt } from 'react-icons/fa';

export const metadata = {
  title: "About Us | Melksham Mental Health",
  description: "Learn about our mission to provide real mental health support for Melksham, Wiltshire and beyond.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Melksham Mental Health
          </h1>
          <p className="text-xl text-muted">
            ⚡ REAL STRUGGLES. REAL SUPPORT ⚡
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted text-lg leading-relaxed mb-4">
              Melksham Mental Health was born from a simple truth: mental health struggles are real, 
              and the support should be real too. No corporate jargon, no empty promises—just genuine 
              understanding and practical help.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
              Founded in the heart of Melksham, Wiltshire, we recognized that our community needed 
              something different. Too often, mental health resources feel distant, impersonal, or 
              overwhelming. We set out to change that.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              What started as a simple post creator app has grown into a comprehensive mental health 
              support hub, connecting people with local resources, national services, and a community 
              that truly understands.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-darker p-8 rounded-lg border border-primary/20">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-white text-lg leading-relaxed mb-4">
            To provide accessible, authentic mental health support for everyone in Melksham, 
            Wiltshire, and beyond. We believe that:
          </p>
          <ul className="space-y-3 text-muted text-lg">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Mental health matters just as much as physical health
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Support should be accessible to everyone, regardless of circumstance
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Real talk beats corporate speak every time
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Community connection is a powerful force for healing
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              Recovery is possible, and hope is real
            </li>
          </ul>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark p-6 rounded-lg border border-primary/20">
              <FaHeart className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Authenticity</h3>
              <p className="text-muted">
                We speak honestly about mental health. No sugar-coating, no stigma—just real talk 
                about real struggles.
              </p>
            </div>
            <div className="bg-dark p-6 rounded-lg border border-primary/20">
              <FaUsers className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Accessibility</h3>
              <p className="text-muted">
                Mental health support should be free and available to all. Our app, resources, 
                and information are freely accessible.
              </p>
            </div>
            <div className="bg-dark p-6 rounded-lg border border-primary/20">
              <FaHandshake className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-muted">
                We&apos;re stronger together. Building connections and supporting each other is at 
                the heart of everything we do.
              </p>
            </div>
            <div className="bg-dark p-6 rounded-lg border border-primary/20">
              <FaShieldAlt className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">No Judgment</h3>
              <p className="text-muted">
                Everyone&apos;s mental health journey is different. We provide support without judgment, 
                criticism, or shame.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="mb-16 bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white">Mental Health Posts Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white">Resources Compiled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white">Crisis Support Access</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Remember: You Matter
          </h2>
          <p className="text-muted text-lg mb-8">
            It&apos;s okay to not be okay, but it&apos;s not okay to stay that way. Reach out. 
            Help is available, and recovery is possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resources/crisis"
              className="bg-error hover:bg-error/80 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Need Help Now?
            </a>
            <a
              href="/contact"
              className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
