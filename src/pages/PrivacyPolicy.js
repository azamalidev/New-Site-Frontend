import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footur';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <section className="py-12 bg-gradient-to-r from-blue-700 to-[rgba(180,42,185,0.94)] text-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-yellow-100 leading-tight mb-4">
              Privacy Policy for RMHP (Roshan Mustaqbil Hunarmand Program)
            </h2>
            <div className="hr-theme-slash-2 flex items-center justify-center mb-6">
              <div className="hr-line w-1/4 h-1 bg-yellow-300 mx-2"></div>
              <div className="hr-icon text-lg font-medium text-yellow-100 uppercase">
                Understanding Your Privacy
              </div>
              <div className="hr-line w-1/4 h-1 bg-yellow-300 mx-2"></div>
            </div>
          </div>

          <div className="space-y-12 text-lg text-gray-200">
            {/* Introduction */}
            <div className="space-y-4">
              <p>
                At Roshan Mustaqbil Hunarmand Program (RMHP), accessible from{' '}
                <a
                  href="https://www.roshanmustaqbil.org"
                  className="text-yellow-300 underline"
                >
                  www.roshanmustaqbil.org
                </a>
                , we value your privacy and are committed to protecting your
                personal information. This Privacy Policy outlines how we
                collect, use, and protect your data when you visit our website
                or use our services. By using our website, you agree to the
                practices described here.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                1. Information We Collect
              </h3>
              <p>
                We collect two types of information: personal information (PII)
                and non-personal information (non-PII). This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email, phone
                  number, address, educational background, and any other details
                  necessary for program participation.
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> Browser type, IP
                  address, device type, pages visited, and time spent on the
                  website.
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving RMHP services.</li>
                <li>
                  Communicating updates, opportunities, and notifications.
                </li>
                <li>Personalizing your experience on our website.</li>
                <li>Ensuring compliance with applicable laws.</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                3. Cookies and Tracking Technologies
              </h3>
              <p>
                Our website uses cookies to enhance user experience. Cookies are
                small files stored on your device that help us track
                preferences, measure website performance, and improve our
                services.
              </p>
            </div>

            {/* Data Sharing */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                4. Data Sharing and Disclosure
              </h3>
              <p>
                We do not sell, trade, or rent your personal information to
                others. However, we may share information in the following
                cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>With Service Providers:</strong> Trusted third-party
                  vendors assisting us in operations.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> To comply with laws,
                  regulations, or legal processes.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of mergers or
                  acquisitions, your data may be transferred.
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                5. Data Security
              </h3>
              <p>
                We implement industry-standard security measures to protect your
                personal information. However, no method of transmission over
                the internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            {/* User Rights */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                6. Your Rights
              </h3>
              <p>
                You have the right to access, update, or delete your personal
                information. To exercise these rights, contact us at:
              </p>
              <ul className="list-none pl-0 space-y-2">
                <li>Email: support@roshanmustaqbil.org</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                7. Third-Party Links
              </h3>
              <p>
                Our website may contain links to third-party websites. RMHP is
                not responsible for the privacy practices or content of these
                external sites. Please review their privacy policies before
                providing personal information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                8. Changes to this Privacy Policy
              </h3>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page, and the revised policy will take
                effect immediately upon posting.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300 text-opacity-80">
                9. Contact Us
              </h3>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-none text-lg mt-2">
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:support@roshanmustaqbil.org"
                    className="text-yellow-300 underline"
                  >
                    support@roshanmustaqbil.org
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> [Insert Phone Number]
                </li>
                <li>
                  <strong>Address:</strong> [Insert Address]
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
