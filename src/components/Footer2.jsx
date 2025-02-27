export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        {/* Left Section - Company Info */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">esycommerce™</h2>
          <p className="mt-4 text-sm text-gray-600">
            Your one stop service provider for all HITL data labeling and
            content management services required for successful AI & Machine
            Learning projects.
          </p>
          {/* Certification Badges */}
          <div className="flex items-center gap-3 flex-wrap mt-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Microsoft_logo.svg/100px-Microsoft_logo.svg.png"
              alt="Microsoft Gold Partner"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/ISO_Logo.png"
              alt="ISO Certified"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/CMMI_logo.png"
              alt="CMMI Level 3"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/ISO_27001_logo.svg"
              alt="ISO 27001"
              className="h-6"
            />
          </div>
        </div>

        {/* Middle Section - Services & Compliance */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Computer Vision</li>
              <li>NLP Labeling</li>
              <li>Audio & Speech</li>
              <li>Content Moderation</li>
              <li>Data Processing</li>
              <li>Content Migration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal Compliance</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Ethics Policy</li>
              <li>Data Security Policy</li>
              <li>Code of Conduct</li>
              <li>Information Security</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="mt-3 space-y-4 text-sm text-gray-600">
            {/* USA Office */}
            <div>
              <p className="font-medium flex items-center">
                🇺🇸{" "}
                <span className="ml-2">EsyCommerce Digital Services LLC</span>
              </p>
              <p className="mt-1">
                447 Broadway, 2nd Floor, Suite 896, New York, NY 10013, USA
              </p>
              <p className="mt-1">Phone: +1 (279) 732-6842</p>
            </div>

            {/* India Office */}
            <div>
              <p className="font-medium flex items-center">
                🇮🇳{" "}
                <span className="ml-2">
                  Offshore Global Capability Center (GCC)
                </span>
              </p>
              <p className="mt-1">
                811, Opal Business Park, Wagle Estate, Thane, Mumbai 400 606,
                India
              </p>
              <p className="mt-1">Phone: +91 865-223-3399</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
