import Link from 'next/link';
import { FaDownload, FaWindows, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: "Download Post Creator | Melksham Mental Health",
  description: "Download the free Melksham Mental Health Post Creator desktop application for Windows.",
};

export default function DownloadPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Download Post Creator
        </h1>
        <p className="text-xl text-muted text-center mb-12">
          Free mental health content generator for Windows
        </p>

        {/* Download Card */}
        <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg mb-12 text-center">
          <FaWindows className="text-6xl text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Windows Installer
          </h2>
          <p className="text-white mb-6">
            Latest Version: 1.0.0 | Release Date: December 2024
          </p>
          <a
            href="/downloads/Melksham-Mental-Health-Setup.exe"
            className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center transition-colors"
            download
          >
            <FaDownload className="mr-3" />
            Download for Windows
          </a>
          <p className="text-white text-sm mt-4">
            File size: ~50MB | Free Forever
          </p>
        </div>

        {/* Installation Instructions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Installation Instructions</h2>
          <div className="bg-darker p-8 rounded-lg border border-primary/20">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Download the Installer</h3>
                  <p className="text-muted">Click the download button above to get the Windows installer (.exe file)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Run the Installer</h3>
                  <p className="text-muted">Double-click the downloaded file and follow the on-screen instructions</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Launch the App</h3>
                  <p className="text-muted">Find &quot;Melksham Mental Health&quot; in your Start Menu and launch the application</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Start Creating</h3>
                  <p className="text-muted">Begin generating mental health awareness content immediately!</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">System Requirements</h2>
          <div className="bg-darker p-6 rounded-lg border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Minimum</h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    Windows 7 or later
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    2GB RAM
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    100MB free disk space
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    Internet connection (initial setup)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Recommended</h3>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    Windows 10 or later
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    4GB+ RAM
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    500MB free disk space
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                    Stable internet connection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Troubleshooting</h2>
          <div className="bg-darker p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-bold text-white mb-3">Windows SmartScreen Warning?</h3>
            <p className="text-muted mb-4">
              Windows might show a security warning because this is a new application. 
              Click &quot;More info&quot; and then &quot;Run anyway&quot; to proceed with the installation.
            </p>
            <h3 className="text-xl font-bold text-white mb-3">Installation Issues?</h3>
            <p className="text-muted">
              If you encounter problems during installation, please visit our{' '}
              <Link href="/app/support" className="text-secondary hover:text-primary">
                support page
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="text-secondary hover:text-primary">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Version History */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Version History</h2>
          <div className="space-y-4">
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-primary">Version 1.0.0</h3>
                <span className="text-muted text-sm">December 2024</span>
              </div>
              <ul className="space-y-2 text-muted">
                <li>• Initial release</li>
                <li>• 100+ quotes and affirmations</li>
                <li>• 50+ recovery stories</li>
                <li>• 100+ practical advice tips</li>
                <li>• Local resources integration</li>
                <li>• Export and print functionality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted mb-4">Questions about the app?</p>
          <Link
            href="/app/support"
            className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Visit Support Center
          </Link>
        </div>
      </div>
    </div>
  );
}
