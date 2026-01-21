import Link from 'next/link';
import { FaHeart, FaPen, FaFacebook } from 'react-icons/fa';

export const metadata = {
  title: "Community | Melksham Mental Health",
  description: "Join our community. Share your story and connect with others.",
};

export default function CommunityPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💚</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Community
          </h1>
          <p className="text-xl text-muted">
            You&apos;re not alone. Connect with others who understand.
          </p>
        </div>

        {/* Community Stories Section */}
        <div className="mb-12">
          <div className="bg-darker p-8 rounded-lg border border-primary/20 text-center">
            <FaHeart className="text-6xl text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Real Stories, Real Hope
            </h2>
            <p className="text-muted text-lg mb-8">
              Read stories of recovery, resilience, and hope from people in our community. 
              Every story shared helps reduce stigma and reminds others they&apos;re not alone.
            </p>
            <Link
              href="/community/stories"
              className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
            >
              Read Community Stories
            </Link>
          </div>
        </div>

        {/* Facebook Community Group */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-accent to-primary p-8 rounded-lg text-center">
            <FaFacebook className="text-6xl text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Private Support Group
            </h2>
            <p className="text-white text-lg mb-6">
              Connect with others in our private Facebook group where people help one another 
              with mental health challenges in a safe, moderated environment.
            </p>
            <p className="text-white/90 text-sm mb-8 italic">
              This is a private group - all join requests are reviewed to maintain a safe space
            </p>
            <a
              href="https://www.facebook.com/groups/m.m.health"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg inline-block transition-colors"
            >
              Join Facebook Group
            </a>
          </div>
        </div>

        {/* Share Your Story */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg text-center">
            <FaPen className="text-6xl text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Share Your Story
            </h2>
            <p className="text-white text-lg mb-8">
              Your story could help someone else. Share your experience, offer hope, 
              or let others know they&apos;re not alone in their struggles.
            </p>
            <Link
              href="/community/stories"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg inline-block transition-colors"
            >
              Submit Your Story
            </Link>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-darker p-8 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-6">Community Guidelines</h2>
          <div className="space-y-4 text-muted">
            <div>
              <h3 className="text-white font-bold mb-2">✓ Be Respectful</h3>
              <p>Treat everyone with kindness and respect. We&apos;re all here to support each other.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">✓ Be Honest</h3>
              <p>Share your authentic experiences. Real stories help others.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">✓ Be Safe</h3>
              <p>Avoid sharing personal information like addresses, phone numbers, or specific locations.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">✓ Be Mindful</h3>
              <p>Consider your words carefully. What you share may affect someone in crisis.</p>
            </div>
            <div className="bg-error/20 border border-error p-4 rounded-lg mt-6">
              <h3 className="text-white font-bold mb-2">⚠️ Content Moderation</h3>
              <p className="text-white">
                All submissions are reviewed before publishing to ensure they meet our community standards 
                and are safe for all readers. Content that glorifies self-harm, includes graphic details, 
                or violates our guidelines will not be published.
              </p>
            </div>
          </div>
        </div>

        {/* Support Links */}
        <div className="mt-12 text-center">
          <p className="text-muted mb-4">
            If you&apos;re struggling and need immediate support:
          </p>
          <Link
            href="/resources/crisis"
            className="bg-error hover:bg-error/80 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Access Crisis Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
