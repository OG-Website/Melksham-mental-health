'use client';

import { useState } from 'react';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-xl text-muted text-center mb-12">
          We&apos;re here to help. Reach out with questions, feedback, or support requests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-bold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker border border-primary/20 rounded text-white focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker border border-primary/20 rounded text-white focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-bold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darker border border-primary/20 rounded text-white focus:border-primary focus:outline-none"
                >
                  <option value="general">General Inquiry</option>
                  <option value="app">App Support</option>
                  <option value="license">License Issue</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-bold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-darker border border-primary/20 rounded text-white focus:border-primary focus:outline-none resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="bg-accent/20 border border-accent text-white p-4 rounded">
                  Thank you! Your message has been sent. We&apos;ll respond within 24-48 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="bg-darker p-6 rounded-lg border border-primary/20">
                <div className="flex items-start">
                  <FaEnvelope className="text-3xl text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <a
                      href="mailto:Melksham-mental-health@outlook.com"
                      className="text-secondary hover:text-primary"
                    >
                      Melksham-mental-health@outlook.com
                    </a>
                    <p className="text-muted text-sm mt-2">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-darker p-6 rounded-lg border border-primary/20">
                <div className="flex items-start">
                  <FaFacebook className="text-3xl text-accent mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Community Group</h3>
                    <a
                      href="https://www.facebook.com/groups/m.m.health"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary"
                    >
                      Join Our Private Facebook Group
                    </a>
                    <p className="text-muted text-sm mt-2">
                      A private peer support group where people help one another with mental health challenges
                    </p>
                    <p className="text-muted text-xs mt-1 italic">
                      Note: This is a private group - requests to join are reviewed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Office Hours</h3>
                <p className="text-muted">
                  We respond to messages Monday-Friday, 9am-5pm GMT. 
                  For urgent mental health support, please visit our{' '}
                  <a href="/resources/crisis" className="text-primary hover:text-secondary">
                    crisis resources page
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 bg-error/20 border border-error p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">⚠️ In Crisis?</h3>
              <p className="text-white mb-3">
                This contact form is not monitored 24/7. If you&apos;re in crisis:
              </p>
              <div className="space-y-2">
                <a href="tel:999" className="block text-white hover:text-error font-bold">
                  • Call 999 (Emergency)
                </a>
                <a href="tel:116123" className="block text-white hover:text-error font-bold">
                  • Call Samaritans: 116 123 (24/7)
                </a>
                <a href="/resources/crisis" className="block text-error hover:text-white font-bold">
                  • View All Crisis Resources →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
