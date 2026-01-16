'use client';

import { useState } from 'react';

export default function StoriesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    story: '',
    category: 'recovery',
    anonymous: false,
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      title: '',
      story: '',
      category: 'recovery',
      anonymous: false,
      consent: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Community Stories
        </h1>
        <p className="text-xl text-muted text-center mb-12">
          Share your story and inspire others
        </p>

        {/* Story Submission Form */}
        <div className="bg-darker p-8 rounded-lg border border-primary/20 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Submit Your Story</h2>
          
          {submitted ? (
            <div className="bg-accent/20 border border-accent p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-white mb-4">
                Your story has been submitted for review. We&apos;ll review it within 48 hours 
                and notify you via email once it&apos;s published.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Submit Another Story
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-bold mb-2">
                    Name {!formData.anonymous && '*'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!formData.anonymous}
                    disabled={formData.anonymous}
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded text-white focus:border-primary focus:outline-none disabled:opacity-50"
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
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded text-white focus:border-primary focus:outline-none"
                  />
                  <p className="text-muted text-sm mt-1">For moderation only, not published</p>
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-white font-bold mb-2">
                  Story Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded text-white focus:border-primary focus:outline-none"
                >
                  <option value="recovery">Recovery Story</option>
                  <option value="coping">Coping Strategies</option>
                  <option value="support">Finding Support</option>
                  <option value="awareness">Raising Awareness</option>
                  <option value="hope">Message of Hope</option>
                </select>
              </div>

              <div>
                <label htmlFor="title" className="block text-white font-bold mb-2">
                  Story Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., How I Found Hope Through Therapy"
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded text-white focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="story" className="block text-white font-bold mb-2">
                  Your Story *
                </label>
                <textarea
                  id="story"
                  name="story"
                  value={formData.story}
                  onChange={handleChange}
                  required
                  rows={10}
                  placeholder="Share your experience, what helped you, and your message of hope..."
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded text-white focus:border-primary focus:outline-none resize-none"
                />
                <p className="text-muted text-sm mt-2">
                  Please avoid graphic details and focus on hope and recovery
                </p>
              </div>

              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-white">
                    Post anonymously (your name will not be shown)
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3"
                  />
                  <span className="text-white">
                    I consent to my story being published on this website and understand it will be 
                    moderated before publication *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Submit Story for Review
              </button>
            </form>
          )}
        </div>

        {/* Published Stories Preview */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Recent Stories</h2>
          <p className="text-muted text-center mb-6">Community stories will appear here after moderation</p>
        </div>
      </div>
    </div>
  );
}
