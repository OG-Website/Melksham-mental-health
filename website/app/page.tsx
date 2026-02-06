'use client';

import Link from 'next/link';
import { FaHeart, FaUsers, FaTools, FaDownload, FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with warm welcoming design */}
      <section className="relative py-24 md:py-36" style={{
        background: `
          radial-gradient(circle at 20% 40%, rgba(143, 165, 143, 0.08), transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(212, 134, 106, 0.06), transparent 45%),
          linear-gradient(to bottom, #f5f1e8, #fdfbf7)
        `
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-5 py-2 rounded-full text-sm font-medium tracking-wide" style={{
              background: 'rgba(143, 165, 143, 0.12)',
              color: '#5d7861'
            }}>
              Supporting Melksham & Wiltshire Communities
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 grunge-text" style={{
              color: '#3d3834'
            }}>
              You&apos;re Not Alone
            </h1>
            <p className="text-2xl md:text-3xl mb-8" style={{
              color: '#5d7861',
              fontFamily: 'Georgia, serif',
              fontWeight: '500',
              lineHeight: '1.4'
            }}>
              Finding strength together through compassionate support
            </p>
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-center" style={{
            color: '#3d3834',
            lineHeight: '1.8'
          }}>
            Mental health support for Melksham, Wiltshire and beyond. 
            Access free resources, connect with your community, and find real help when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="grunge-button py-4 px-9 text-lg font-medium tracking-wide text-white"
            >
              Find Support Now
            </Link>
            <Link
              href="/contact"
              className="py-4 px-9 text-lg font-medium tracking-wide rounded-xl border-2 transition-all duration-300"
              style={{
                borderColor: '#8fa58f',
                color: '#5d7861',
                background: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(143, 165, 143, 0.08)';
                e.currentTarget.style.borderColor = '#5d7861';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = '#8fa58f';
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20" style={{ background: '#fdfbf7' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 grunge-text">
            How We Help
          </h2>
          <p className="text-center text-lg mb-16 max-w-2xl mx-auto" style={{
            color: '#5d7861'
          }}>
            Compassionate support designed with you in mind
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #ffffff, #f5f1e8)',
              boxShadow: '0 4px 20px rgba(61, 56, 52, 0.08)'
            }}>
              <div className="mb-6 inline-block p-4 rounded-xl" style={{
                background: 'rgba(212, 134, 106, 0.12)'
              }}>
                <FaHeart className="text-5xl" style={{ color: '#b86f56' }} />
              </div>
              <h3 className="text-2xl mb-4 grunge-text">Real Support</h3>
              <p style={{ color: '#3d3834', lineHeight: '1.7' }}>
                Real mental health support for real people. We understand because we&apos;ve been there.
              </p>
            </div>
            <div className="p-8 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #ffffff, #f5f1e8)',
              boxShadow: '0 4px 20px rgba(61, 56, 52, 0.08)'
            }}>
              <div className="mb-6 inline-block p-4 rounded-xl" style={{
                background: 'rgba(143, 165, 143, 0.12)'
              }}>
                <FaUsers className="text-5xl" style={{ color: '#5d7861' }} />
              </div>
              <h3 className="text-2xl mb-4 grunge-text">Local Resources</h3>
              <p style={{ color: '#3d3834', lineHeight: '1.7' }}>
                Comprehensive local and national crisis resources available 24/7.
              </p>
            </div>
            <div className="p-8 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #ffffff, #f5f1e8)',
              boxShadow: '0 4px 20px rgba(61, 56, 52, 0.08)'
            }}>
              <div className="mb-6 inline-block p-4 rounded-xl" style={{
                background: 'rgba(212, 134, 106, 0.12)'
              }}>
                <FaTools className="text-5xl" style={{ color: '#b86f56' }} />
              </div>
              <h3 className="text-2xl mb-4 grunge-text">Free Tools</h3>
              <p style={{ color: '#3d3834', lineHeight: '1.7' }}>
                Free content creation app for mental health awareness and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-20" style={{
        background: 'linear-gradient(to bottom, #f5f1e8, #fdfbf7)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium" style={{
                background: 'rgba(212, 134, 106, 0.15)',
                color: '#b86f56'
              }}>
                Coming Soon
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 grunge-text">
                Post Creator Desktop App
              </h2>
              <p className="text-lg mb-10" style={{
                color: '#3d3834',
                lineHeight: '1.8'
              }}>
                Generate positive mental health content with our free desktop application. 
                Perfect for raising awareness and supporting your community.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{
                    background: 'rgba(143, 165, 143, 0.2)'
                  }}>
                    <FaStar style={{ color: '#5d7861', fontSize: '12px' }} />
                  </div>
                  <span style={{ color: '#3d3834' }}>100+ inspirational quotes and affirmations</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{
                    background: 'rgba(143, 165, 143, 0.2)'
                  }}>
                    <FaStar style={{ color: '#5d7861', fontSize: '12px' }} />
                  </div>
                  <span style={{ color: '#3d3834' }}>Uplifting recovery stories</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{
                    background: 'rgba(143, 165, 143, 0.2)'
                  }}>
                    <FaStar style={{ color: '#5d7861', fontSize: '12px' }} />
                  </div>
                  <span style={{ color: '#3d3834' }}>Evidence-based advice and tips</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{
                    background: 'rgba(143, 165, 143, 0.2)'
                  }}>
                    <FaStar style={{ color: '#5d7861', fontSize: '12px' }} />
                  </div>
                  <span style={{ color: '#3d3834' }}>Local Melksham & Wiltshire resources</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{
                    background: 'rgba(143, 165, 143, 0.2)'
                  }}>
                    <FaStar style={{ color: '#5d7861', fontSize: '12px' }} />
                  </div>
                  <span style={{ color: '#3d3834' }}>20+ mental health topics covered</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <div
                  className="py-4 px-8 rounded-xl inline-flex items-center justify-center font-medium opacity-60 cursor-not-allowed"
                  style={{
                    background: 'rgba(143, 165, 143, 0.15)',
                    color: '#5d7861'
                  }}
                >
                  <FaDownload className="mr-3" />
                  Available Soon
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #ffffff, #f5f1e8)',
              boxShadow: '0 8px 30px rgba(61, 56, 52, 0.1)'
            }}>
              <div className="aspect-video rounded-xl flex items-center justify-center" style={{
                background: 'linear-gradient(to bottom right, rgba(143, 165, 143, 0.1), rgba(212, 134, 106, 0.08))'
              }}>
                <div className="text-center">
                  <div className="text-7xl mb-4">📱</div>
                  <p className="font-medium text-lg" style={{ color: '#5d7861' }}>Preview Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20" style={{ background: '#fdfbf7' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-14 grunge-text">
            From Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quote Card */}
            <div className="p-7 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #ffffff, #f5f1e8)',
              border: '1px solid rgba(143, 165, 143, 0.15)',
              boxShadow: '0 2px 12px rgba(61, 56, 52, 0.06)'
            }}>
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl mb-3 grunge-text" style={{ fontSize: '1.3rem' }}>Daily Inspiration</h3>
              <blockquote className="italic mb-4" style={{ color: '#3d3834', lineHeight: '1.7' }}>
                &quot;You don&apos;t have to be positive all the time. Having feelings doesn&apos;t make you negative. It makes you human.&quot;
              </blockquote>
              <Link href="/blog" className="font-medium transition-colors" style={{ color: '#b86f56' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#d4866a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#b86f56'}>
                Read more →
              </Link>
            </div>

            {/* Blog Card */}
            <div className="p-7 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #ffffff, #f5f1e8)',
              border: '1px solid rgba(143, 165, 143, 0.15)',
              boxShadow: '0 2px 12px rgba(61, 56, 52, 0.06)'
            }}>
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl mb-3 grunge-text" style={{ fontSize: '1.3rem' }}>Latest Article</h3>
              <p className="mb-4" style={{ color: '#3d3834', lineHeight: '1.7' }}>
                5 Ways to Support Your Mental Health This Winter
              </p>
              <Link href="/blog" className="font-medium transition-colors" style={{ color: '#b86f56' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#d4866a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#b86f56'}>
                Read article →
              </Link>
            </div>

            {/* Community Card */}
            <div className="p-7 rounded-2xl" style={{
              background: 'linear-gradient(135deg, #ffffff, #f5f1e8)',
              border: '1px solid rgba(143, 165, 143, 0.15)',
              boxShadow: '0 2px 12px rgba(61, 56, 52, 0.06)'
            }}>
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-xl mb-3 grunge-text" style={{ fontSize: '1.3rem' }}>Community Stories</h3>
              <p className="mb-4" style={{ color: '#3d3834', lineHeight: '1.7' }}>
                Real stories of hope and recovery from people just like you.
              </p>
              <Link href="/community/stories" className="font-medium transition-colors" style={{ color: '#b86f56' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#d4866a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#b86f56'}>
                Share your story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{
        background: 'linear-gradient(to right, #d4866a, #b86f56)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6" style={{
            fontFamily: 'Georgia, serif'
          }}>
            You Are Not Alone
          </h2>
          <p className="text-xl text-white mb-10" style={{ opacity: 0.95, lineHeight: '1.7' }}>
            Whether you&apos;re struggling or supporting someone who is, we&apos;re here to help. 
            Reach out today.
          </p>
          <Link
            href="/contact"
            className="inline-block py-4 px-10 rounded-xl text-lg font-medium transition-all duration-300"
            style={{
              background: 'white',
              color: '#b86f56',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.15)';
            }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
