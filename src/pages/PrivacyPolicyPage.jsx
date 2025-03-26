import React from "react";
import HeroSection from "../components/PrivacyPolicy/HeroSection";
import styles from "../css/PrivacyPolicyPage.module.css"

const PrivacyPolicyPage = () => {
  return (
    <>
      <HeroSection />
      <div className={`${styles.PrivacyPolicy} bg-white`}>
        <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <p className="mb-4">
            At EsyCommerce Digital Services LLC we value your trust and
            confidence the most and thereby recognize that privacy is important.
            This Privacy Policy statement applies to all products and services
            provided by us (“www.esycommerce.com”) and describes how we collect
            and use the personal information you provide on our website:
            http://www.esycommerce.com/.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            1. Collection of Personal Information
          </h3>
          <p className="mt-2">
            We only use and process personal information for the purposes
            described in this Privacy Policy. We have a strict No-Spam Policy
            prohibiting the use of any data collected to send spam. We will not
            sell any contact information to third parties. In addition to above,
            such purposes may include;
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Communicating with you</li>
            <li>Making services easier by reducing repeated data entry</li>
            <li>Providing our products and services</li>
            <li>Auditing, research, and analysis to improve our services</li>
            <li>Ensuring technical functionality of our network</li>
            <li>Protecting our rights and property</li>
            <li>Developing new products and services</li>
          </ul>
          <h4 className="mt-2 font-bold">Choices of Personal Information</h4>
          <p>
            When you sign up for a particular service that requires
            registration, we ask you to provide personal information. If we use
            this information in a manner different than the purpose defined
            herein and in the terms of the services offered then we will ask for
            your consent prior to such use. Most browsers are initially set up
            to accept cookies, but you can reset your browser to refuse all
            cookies or to indicate when a cookie is being sent. However, some of
            our features and services may not function properly if your cookies
            are disabled. You can decline to submit personal information to any
            of our services, in which case we may not be able to provide those
            services to you.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            2. Information Sharing
          </h3>
          <p className="mt-2">
            We only share personal information with other companies or
            individuals in the following limited circumstances; We have a prior
            consent from your regarding the sharing of the said information.
            Sharing the information with our subsidiaries, affiliated companies
            or other trusted businesses or persons for the purpose of processing
            personal information on our behalf. We require that these parties
            agree to process such information based on our instructions and in
            compliance with this Privacy Policy and any other appropriate
            confidentiality and security measures. We may share with third
            parties certain pieces of aggregated, non-personal information, such
            as the number of users by demographic. Such information does not
            identify you individually. We have a good faith belief that access,
            use, preservation or disclosure of such information is reasonably
            necessary to satisfy any applicable law, legal process or
            enforceable governmental request, applicable Terms of Service,
            including investigation of potential violations thereof, detect,
            prevent, or otherwise address fraud, security or technical issues,
            or protect against harm to rights, property or safety, of our users,
            us or the public as required or permitted by law.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            3. Information Security
          </h3>
          <p className="mt-2">
            We take appropriate security measures to protect against
            unauthorized access to or unauthorized alteration, disclosure or
            destruction of data. These include internal reviews of our data
            collection, storage and processing practices and security measures,
            as well as physical security measures to guard against unauthorized
            access to systems where we store personal data.
          </p>
          <p className="mt-2">
            We restrict access to personal information to our employees,
            contractors and agents who need to know that information in order to
            operate, develop or improve our services. These individuals are
            bound by confidentiality obligations and may be subject to
            discipline, including termination and criminal prosecution, if they
            fail to meet these obligations.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            4. Accessing and Updating Personal Information
          </h3>
          <p className="mt-2">
            When you use our products and/or services, we make good faith
            efforts to provide you with access to your personal information and
            to correct this data if it is inaccurate. o review, delete and
            update your personal information to ensure it is accurate, you may
            login to your account or contact us directly at
            support@esycommerce.com
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            5. Changes to This Privacy Policy
          </h3>
          <p className="mt-2">
            Please note that this Privacy Policy may change from time to time.
            If we make any material changes we will notify you by email (sent to
            the e-mail address specified in your account) or by means of a
            notice on this Site prior to the change becoming effective. We
            encourage you to periodically review this page for the latest
            information on our privacy practices.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            6. Contact Information
          </h3>
          <p className="mt-2">
            You can contact us about this privacy policy statement by writing or
            email us at support@esycommerce.com
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
