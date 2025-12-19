import { FaPhone, FaComments, FaExclamationTriangle, FaAmbulance } from 'react-icons/fa';

export const metadata = {
  title: "Crisis Support - Immediate Help | Melksham Mental Health",
  description: "Get immediate mental health crisis support. 24/7 helplines, emergency contacts, and urgent support services.",
};

export default function CrisisResourcesPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Header */}
        <div className="bg-error text-white p-8 rounded-lg mb-12 text-center">
          <FaExclamationTriangle className="text-6xl mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Crisis Support - Immediate Help</h1>
          <p className="text-xl mb-6">
            If you&apos;re in crisis, you don&apos;t have to face it alone. Help is available right now.
          </p>
          <div className="bg-white text-error p-4 rounded-lg inline-block">
            <FaAmbulance className="text-3xl mx-auto mb-2" />
            <p className="font-bold text-2xl">LIFE-THREATENING EMERGENCY?</p>
            <a href="tel:999" className="text-4xl font-bold hover:underline">CALL 999</a>
          </div>
        </div>

        {/* 24/7 Crisis Helplines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">24/7 Crisis Helplines</h2>
          
          <div className="space-y-6">
            {/* Samaritans */}
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <div className="flex items-start">
                <FaPhone className="text-3xl text-primary mt-1 mr-4 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">Samaritans</h3>
                  <p className="text-muted mb-3">
                    Whatever you&apos;re going through, call free any time from any phone.
                  </p>
                  <div className="bg-primary text-white p-4 rounded mb-3">
                    <p className="font-bold text-lg">Phone: <a href="tel:116123" className="hover:underline">116 123</a></p>
                    <p>Email: <a href="mailto:jo@samaritans.org" className="hover:underline">jo@samaritans.org</a></p>
                    <p className="text-sm mt-2">Available 24/7, 365 days a year - FREE to call</p>
                  </div>
                  <p className="text-sm text-muted">
                    Response time: Answer immediately by phone, email within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Shout */}
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <div className="flex items-start">
                <FaComments className="text-3xl text-primary mt-1 mr-4 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">Shout Crisis Text Line</h3>
                  <p className="text-muted mb-3">
                    Free, confidential, 24/7 text support for anyone in crisis.
                  </p>
                  <div className="bg-primary text-white p-4 rounded mb-3">
                    <p className="font-bold text-lg">Text <strong>SHOUT</strong> to <a href="sms:85258" className="hover:underline">85258</a></p>
                    <p className="text-sm mt-2">Free on all major mobile networks - Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* NHS 111 */}
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <div className="flex items-start">
                <FaPhone className="text-3xl text-primary mt-1 mr-4 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">NHS 111</h3>
                  <p className="text-muted mb-3">
                    Urgent mental health support when you need help but it&apos;s not an emergency.
                  </p>
                  <div className="bg-primary text-white p-4 rounded mb-3">
                    <p className="font-bold text-lg">Phone: <a href="tel:111" className="hover:underline">111</a></p>
                    <p className="text-sm mt-2">Available 24/7 - FREE to call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wiltshire Crisis Line */}
            <div className="bg-darker p-6 rounded-lg border border-accent/20">
              <div className="flex items-start">
                <FaPhone className="text-3xl text-accent mt-1 mr-4 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">Wiltshire Mental Health Crisis Line</h3>
                  <p className="text-muted mb-3">
                    Local crisis support for people in Wiltshire experiencing a mental health crisis.
                  </p>
                  <div className="bg-accent text-white p-4 rounded mb-3">
                    <p className="font-bold text-lg">Phone: <a href="tel:08009530110" className="hover:underline">0800 953 0110</a></p>
                    <p className="text-sm mt-2">Available 24/7 for Wiltshire residents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialist Helplines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Specialist Support Lines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">CALM (Men&apos;s Mental Health)</h3>
              <p className="text-muted mb-3 text-sm">Support for men, any age, any issue</p>
              <p className="text-white"><strong>Phone:</strong> <a href="tel:08005858585" className="text-secondary hover:text-primary">0800 58 58 58</a></p>
              <p className="text-muted text-sm">5pm-midnight daily</p>
            </div>

            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">Papyrus (Under 35s)</h3>
              <p className="text-muted mb-3 text-sm">Suicide prevention for young people</p>
              <p className="text-white"><strong>Phone:</strong> <a href="tel:08000684141" className="text-secondary hover:text-primary">0800 068 4141</a></p>
              <p className="text-muted text-sm">Mon-Fri 10am-10pm, Weekends 2pm-10pm</p>
            </div>

            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">The Mix (Under 25s)</h3>
              <p className="text-muted mb-3 text-sm">Support for young people</p>
              <p className="text-white"><strong>Phone:</strong> <a href="tel:08088084994" className="text-secondary hover:text-primary">0808 808 4994</a></p>
              <p className="text-muted text-sm">7 days, 3pm-midnight</p>
            </div>

            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">Childline (Under 19s)</h3>
              <p className="text-muted mb-3 text-sm">Confidential support for children</p>
              <p className="text-white"><strong>Phone:</strong> <a href="tel:08001111" className="text-secondary hover:text-primary">0800 1111</a></p>
              <p className="text-muted text-sm">24/7 - Calls won&apos;t show on bill</p>
            </div>
          </div>
        </section>

        {/* What to Do in Crisis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">What To Do In A Crisis</h2>
          <div className="bg-darker p-6 rounded-lg border border-primary/20">
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">1.</span>
                <span><strong>Keep yourself safe:</strong> Remove any means of self-harm if possible</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">2.</span>
                <span><strong>Reach out:</strong> Call one of the helplines above - they&apos;re there to help</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">3.</span>
                <span><strong>Tell someone:</strong> A friend, family member, or neighbor you trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">4.</span>
                <span><strong>Go to A&E:</strong> If you need immediate medical attention</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">5.</span>
                <span><strong>Call 999:</strong> If you&apos;ve seriously harmed yourself or your life is at risk</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Help Someone Else */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Helping Someone In Crisis</h2>
          <div className="bg-darker p-6 rounded-lg border border-primary/20">
            <p className="text-white mb-4">If someone you know is in crisis:</p>
            <ul className="space-y-3 text-muted">
              <li>• <strong className="text-white">Stay calm</strong> and listen without judgment</li>
              <li>• <strong className="text-white">Take them seriously</strong> - never dismiss suicidal thoughts</li>
              <li>• <strong className="text-white">Keep them safe</strong> - stay with them if possible</li>
              <li>• <strong className="text-white">Encourage professional help</strong> - offer to call with them</li>
              <li>• <strong className="text-white">Call 999</strong> if they&apos;re in immediate danger</li>
              <li>• <strong className="text-white">Look after yourself</strong> too - supporting someone is hard</li>
            </ul>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-primary p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            You Are Not Alone
          </h2>
          <p className="text-white mb-6">
            These feelings will pass. Help is available. Please reach out.
          </p>
          <p className="text-white text-2xl font-bold">
            Call <a href="tel:116123" className="hover:underline">116 123</a> (Samaritans) - It&apos;s FREE
          </p>
        </div>
      </div>
    </div>
  );
}
