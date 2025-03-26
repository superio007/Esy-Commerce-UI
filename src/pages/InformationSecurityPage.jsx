import React from "react";
import HeroSection from "../components/InformationSecurityPage/HeroSection";
import styles from "../css/InformationSecurity.module.css";

const InformationSecurityPage = () => {
  return (
    <>
      <HeroSection />
      <div className={`${styles.InformationSecurity} bg-white`}>
        <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <h3 className="text-2xl font-semibold mt-6">1.0 Executive Summary</h3>
          <p className="mb-4">
            An Information Security Plan (ISP) is designed to protect
            information and critical resources from a wide range of threats to
            ensure business continuity, minimize business risk, and maximize
            return on investments and business opportunities. Information
            Technology (IT) security is achieved by implementing a suitable set
            of controls, including policies, processes, procedures,
            organizational structures, and software and hardware functions.
            These controls need to be established, implemented, monitored,
            reviewed, and improved, where necessary, to ensure that the specific
            security and business objectives of EsyCommerce Digital Services LLP
            are met. This plan governs the privacy, security, and
            confidentiality of Company data, especially extremely sensitive
            data, and the responsibilities of departments and individuals for
            such data. IT security measures are intended to protect information
            assets and preserve the privacy of EsyCommerce employees,
            stakeholders, sponsors, suppliers, and other associated entities.
            Inappropriate use exposes EsyCommerce to risks including virus
            attacks, compromise of network systems and services, and legal
            issues. All users of EsyCommerce’s information technology resources
            are required to follow the Information Security Compliance Policy
            and are bound by this plan as well as other Company policies and
            procedures in terms of their employment. All employees share
            responsibility for the security of the information and resources in
            their respective departments.
          </p>

          <h3 className="text-2xl font-semibold mt-6">2.0 Purpose</h3>
          <p className="mt-2">
            The purpose of this plan is to ensure the confidentiality,
            integrity, and availability of data, define, develop, and document
            the information policies and procedures that support Company goals
            and objectives, and to allow the Company to satisfy its legal and
            ethical responsibilities regarding its IT resources. Information
            security policies and procedures represent the foundation for the
            Company’s ISP. Information security policies serve as overarching
            guidelines for the use, management, and implementation of
            information security throughout EsyCommerce. Internal controls
            provide a system of checks and balances intended to identify
            irregularities, prevent waste, fraud, and abuse from occurring, and
            assist in resolving discrepancies that are accidentally introduced
            in the operations of the business. When consistently applied
            throughout the Company, these policies and procedures ensure that
            information technology resources are protected from a range of
            threats to ensure business continuity and maximize the return on
            investments of business interests. This plan reflects EsyCommerce’s
            commitment to stewardship of sensitive personal information and
            critical business information, in acknowledgement of the many
            threats to information security and the importance of protecting the
            privacy of Company constituents, safeguarding vital business
            information, and fulfilling legal obligations. This plan will be
            reviewed and updated at least once a year or when the environment
            changes
          </p>

          <h3 className="text-2xl font-semibold mt-6">3.0 Scope</h3>
          <p className="mt-2">
            This plan applies to the entire EsyCommerce community, including the
            President, Vice Presidents, CXOs, Directors, and Department Heads,
            stakeholders, staff, temporary employees, contractors, volunteers,
            and guests who have access to EsyCommerce information technology
            resources. Such assets include data, images, text, or software,
            stored on hardware, paper or other storage media.
          </p>

          <h3 className="text-2xl font-semibold mt-6">4.0 Definitions</h3>
          <p className="mt-2">
            <span className="underline">Confidentiality:</span> “Preserving
            authorized restrictions on information access and disclosure,
            including means for protecting personal privacy and proprietary
            information...” A loss of confidentiality is the unauthorized
            disclosure of information.{" "}
          </p>
          <p className="mt-2">
            <span className="underline">Integrity:</span> “Guarding against
            improper information modification or destruction, and includes
            ensuring information non-repudiation and authenticity...” A loss of
            integrity is the unauthorized modification or destruction of
            information.{" "}
          </p>
          <p className="mt-2">
            <span className="underline">Availability:</span> “Ensuring timely
            and reliable access to and use of information...” A loss of
            availability is the disruption of access to or use of information or
            an information system.
          </p>
          <p className="mt-2">
            <span className="underline">Risk Assessment</span> is a process
            which determines what information technology resources exist that
            require protection, and to understand and document potential risks
            from IT security failures that may cause loss of information
            confidentiality, integrity, or availability.
          </p>
          <p className="mt-2">
            <span className="underline">Control Activities</span> are the
            policies, procedures, techniques, and mechanisms that help ensure
            that management's response to reduce risks identified during the
            risk assessment process is carried out.
          </p>
          <p className="mt-2">
            <span className="underline">Information Assets:</span> Definable
            pieces of information in any form, recorded or stored on any media
            that is recognized as “valuable” to the Company.
          </p>
          <p className="mt-2">
            <span className="underline">Access Control</span> refers to the
            process of controlling access to systems, networks, and information
            based on business and security requirements
          </p>
          <p className="mt-2">
            <span className="underline">
              ISO (International Organization for Standardization)
            </span>{" "}
            - An international-standard-setting body composed of representatives
            from various national standards organizations
          </p>
          <p className="mt-2">
            <span className="underline">
              NIST (National Institute of Standards and Technology)
            </span>{" "}
            - A non-regulatory federal agency within the U.S. Department of
            Commerce whose mission is to promote U.S. innovation and industrial
            competitiveness by advancing measurement science, standards, and
            technology in ways that enhance economic security and improve our
            quality of life.
          </p>
          <p className="mt-2">
            <span className="underline">VPN (Virtual Private Network)</span> - A
            network that uses a public telecommunication infrastructure, such as
            the Internet, to provide remote offices or individual users with
            secure access to the Company’s network. VPN’s use encryption and
            other security mechanisms to ensure that only authorized users can
            access the network and that the data cannot be intercepted.
          </p>
          <p className="mt-2">
            <span className="underline">IDS </span>(Intrusion Detection System)
            - A device (or application) that monitors network and/or system
            activities for malicious activities or policy violations.
          </p>
          <p className="mt-2">
            <span className="underline">IPS</span> (Intrusion Prevention System)
            - A device (or application) that identifies malicious activity, logs
            information about said activity, attempts to block/stop activity,
            and reports activity.
          </p>
          <p className="mt-2">
            <span className="underline">Encryption:</span> Process of converting
            information so that it is humanly unreadable except by someone who
            knows how to decrypt it.{" "}
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            5.0 IT Governance Commitments & Responsibilities
          </h3>
          <p className="mt-2">
            IT governance is the responsibility of Executive Management and
            consists of the leadership, organizational structures, and processes
            to ensure that the Company’s information technology sustains and
            extends EsyCommerce’s strategies and objectives.
          </p>
          <p className="mt-2">
            Executive Management has established the overall approach to
            governance and control by forming the Information Security Board of
            Review (ISBR) to provide strategic direction, ensure objectives are
            achieved, ascertain risks are managed appropriately, and verify that
            the Company’s resources are used responsibly.
          </p>
          <p className="mt-2">
            The Office of Information Technology (OIT) shows its commitment by
            developing and implementing good internal controls as well as
            ensuring the promotion and awareness of IT requirements and plans
            throughout the Company. EsyCommerce’s strategic vision is linked
            with the IT department’s goals and objectives, ensuring that the
            Company meets customer and legal requirements while undergoing
            continual improvement.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            6.0 Company Policy Statement
          </h3>
          <p className="mt-2">
            Each department will protect Company resources by adopting and
            implementing, at a minimum, the security standards and procedures
            developed and approved by the Information Security Board of Review
            that are included within this ISP. All departments must meet the
            minimum standards. Departments are encouraged to adopt standards
            that exceed the minimum requirements for the protection of Company
            resources that are controlled exclusively within the Department.
            Individuals within the scope of this policy are responsible for
            complying with this policy and the Department’s policy, if one
            exists, to ensure the security of Company resources.
          </p>

          <h3 className="text-2xl font-semibold mt-6">7.0 Enforcement</h3>
          <p className="mt-2">
            All individuals accessing Company data at EsyCommerce are required
            to comply with federal and state laws, Company policies and
            procedures regarding the security of extremely sensitive data. Any
            Company employee, stakeholder, or non-Company individual with access
            to Company data who engage in unauthorized use, disclosure,
            alteration, or destruction of data is in violation of this plan and
            will be subject to appropriate disciplinary action, including
            possible dismissal and/or legal action.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.0 Information Security Program
          </h3>
          <p className="mt-2">
            Through this document and associated policies, EsyCommerce has
            established, documented, and implemented an Information Security
            Program. The system is designed to result in improving the
            effectiveness of IT operations and ability to satisfy regulatory
            requirements. This program has been implemented to ensure the
            confidentiality and integrity of Company information while
            maintaining appropriate levels of accessibility.
          </p>
          <p>
            To ensure the security and confidentiality of sensitive information
            and to protect against any anticipated threats or hazards to the
            security or integrity of data, the Company has put in place all
            reasonable technological means, (i.e., security software, hardware)
            to keep information and facilities secure. The Company has defined
            its own security controls, which are to be equal to or greater than
            security requirements and controls prescribed by law and/or
            standards bodies (ISO, NIST, etc.).
          </p>
          <h3 className="text-2xl font-semibold mt-6">8.1 Risk Assessment</h3>
          <p>
            A risk assessment is a process which determines what information
            resources exist that require protection and to understand and
            document potential risks from IT security failures that may cause
            loss of information confidentiality, integrity, or availability. The
            purpose of a risk assessment is to help management create
            appropriate strategies and controls for stewardship of information
            assets. Because economic, regulatory, and operating conditions will
            continue to change, mechanisms are needed to identify and deal with
            the special risks associated with change. Objectives must be
            established before administrators can identify and take necessary
            steps to manage risks. Operations objectives relate to effectiveness
            and efficiency of the operations, including performance and
            financial goals and safeguarding resources against loss. Financial
            reporting objectives pertain to the preparation of reliable
            published financial statements, including the prevention of
            fraudulent financial reporting. Compliance objectives pertain to
            laws and regulations which establish minimum standards of behaviour.
            Information Technology Services (ITS), with the aid of other
            departments, will conduct an annual risk assessment and/or business
            impact analysis to:
            <ul className="list-disc list-inside mt-2">
              <li>
                Inventory and determine the nature of company campus/office
                area/on-site location information resources
              </li>
              <li>
                Understand and document the risks in the event of failures that
                may cause loss of confidentiality, integrity, or availability of
                information resources
              </li>
              <li>
                Identify the level of security necessary for the protection of
                the resources.
              </li>
            </ul>
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.2 Control Activities
          </h3>
          <p>
            Preventive controls are designed to discourage or prevent errors or
            irregularities from occurring. They are more cost effective than
            detective controls. Credit checks, job descriptions, required
            authorization signatures, data entry checks and physical control
            over assets to prevent their improper use are all examples of
            preventive controls.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.2.1 Internal Controls
          </h3>
          <p>
            Detective controls are designed to search for and identify errors
            after they have occurred. They are more expensive than preventive
            controls, but still essential since they measure the effectiveness
            of preventive controls and are the only way to effectively control
            certain types of errors. Account reviews and reconciliations,
            observations of payroll distribution, periodic physical inventory
            counts, passwords, transaction edits and internal auditors are all
            examples of detective controls.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.2.2 Preventative Controls
          </h3>
          <p>
            Preventive controls are designed to discourage or prevent errors or
            irregularities from occurring. They are more cost effective than
            detective controls. Credit checks, job descriptions, required
            authorization signatures, data entry checks and physical control
            over assets to prevent their improper use are all examples of
            preventive controls
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.2.3 Detective Controls
          </h3>
          <p>
            Detective controls are designed to search for and identify errors
            after they have occurred. They are more expensive than preventive
            controls, but still essential since they measure the effectiveness
            of preventive controls and are the only way to effectively control
            certain types of errors. Account reviews and reconciliations,
            observations of payroll distribution, periodic physical inventory
            counts, passwords, transaction edits and internal auditors are all
            examples of detective controls.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.2.4 Corrective Controls
          </h3>
          <p>
            Corrective controls are designed to prevent the recurrence of
            errors. They begin when improper outcomes occur and are detected and
            keep the "spotlight" on the problem until management can solve the
            problem or correct the defect. Quality teams and budget variance
            reports are examples of corrective controls.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.3 Control Environment
          </h3>
          <p>
            The control environment, as established by the Company’s
            administration, sets the tone of the Company, and influences the
            control consciousness of its people. Leaders of each department,
            area, or activity establish a local control environment. This is the
            foundation for all other components of internal control, providing
            discipline and structure. Managers and employees are to have
            personal and professional integrity and are to maintain a level of
            competence that allows them to accomplish their assigned duties, as
            well as understand the importance of developing and implementing
            good internal controls. This requires managers and their staff to
            maintain and always demonstrate:
            <ul className="list-disc list-inside mt-2">
              <li>Personal and professional integrity and ethical values</li>
              <li>
                A level of skill necessary to help ensure effective performance
              </li>
              <li>
                An understanding of information security and internal controls
                sufficient to effectively discharge their responsibilities
              </li>
            </ul>
            Managers and supervisors are also responsible for ensuring their
            employees are aware of the relevance and importance of their
            activities and how they contribute to the achievement of the control
            environment.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.3.1 EsyCommerce’s Security Policy
          </h3>
          <p>
            The information technology resources at EsyCommerce support the
            educational, instructional, research, and administrative activities
            of the Company and the use of these resources is a privilege that is
            extended to members of the Company community. Any employee using
            Company information technology resources for any reason must adhere
            to strict guidelines regarding its use. Employees are being
            entrusted with the safety and security of Company information
            resources. A sound security policy for information technology
            resources includes the participation of every employee, at all
            times. A sound policy promotes information security. Any person or
            organization within the Company community who uses or provides
            information technology resources has a responsibility to maintain
            and safeguard these assets. Each individual stakeholder, staff, and
            faculty member in the EsyCommerce community is expected to use these
            shared resources with consideration for others. Individuals are also
            expected to be informed and be responsible for protecting their own
            information resources in any environment, shared or stand-alone. It
            is unacceptable for anyone to use information resources to violate
            any law, Company policy, or perform unethical academic or business
            acts. EsyCommerce’s Acceptable Use of Information Technology
            Resources contains the governing philosophy for effective and
            efficient use of the Company's computing, communications, and
            information resources by all members of the Company community. While
            chairs/directors and supervisors are ultimately responsible for
            ensuring compliance with information security practices, ITS in
            cooperation with various departments will develop annual security
            awareness and compliance training to achieve technical proficiency
            and appropriate use for all employees who have access to information
            technology resources.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.4 Organization of Information Security
          </h3>
          <p>
            The Company assumes a coordinated approach to the protection of
            information technology resources and depositories of protected
            information that are under its custody by establishing appropriate
            and reasonable administrative, technical, and physical safeguards
            that include all departments, individuals, or others that
            administer, install, maintain, or make use of EsyCommerce’s
            information technology resources. The Information Security Board of
            Review’s (ISBR) role is to provide oversight and direction regarding
            information systems security and privacy assurance Company-wide.
            Chief Technology Officer (CTO) is responsible for the Company’s IT
            planning, budgeting, and performance including its information
            security components. Decisions made in these areas should be based
            on an effective risk management program. Security and Information
            Compliance Officers are responsible for the Company’s security
            programs, including risk management. They play a leading role in
            introducing an appropriate, structured methodology to help identify,
            evaluate, and minimize risks to the information technology resources
            that support the Company’s mission and compliance needs. Data Owners
            are responsible for ensuring that proper controls are in place to
            address integrity, confidentiality, and availability of information
            technology resources and data they own. IT security practitioners
            (e.g., network, system, application, and database administrators;
            computer specialists; security analysts) are responsible for proper
            implementation of security requirements within the information
            technology resources when change occurs. Data Custodians have a
            responsibility to the Company to ensure they grant access to data to
            only those who require that access to perform their job
            responsibilities. Data User is a person who has been granted
            explicit authorization to access the data by the owner. The user
            must use the data only for purposes specified by the owner, comply
            with security measures specified by the owner or custodian (i.e.,
            securing login-ID and password), and not disclose information or
            control over the data unless specifically authorized in writing by
            the owner of the data. Information Security Roles & Responsibilities
            describes the overall organization at EsyCommerce. All Information
            Technology personnel and users with access to sensitive data are
            required to sign and date the Confidentiality Agreement at time of
            hire, and annually thereafter.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.5 Accountability for assets
          </h3>
          <p>
            Information Technology Services, working in cooperation with other
            company campus/office area/on-site location departments will develop
            and maintain a Data Owner Matrix defining those persons responsible
            for each covered data field in relevant software systems (financial,
            development, etc.). ITS will conduct ongoing audits, and will report
            any significant questionable activities, which may compromise the
            security of protected information. Proper internal control is to be
            maintained over all information technology resources, at all times.
            Proper IT asset management – from requisition to disposal – ensures
            a much greater likelihood that the Company will continue to meet
            customer requirements into the indefinite future by planning in an
            orderly fashion and mandating consistency throughout the Company.
            ITS will conduct an annual survey to develop and maintain a registry
            of those members of the Company community who have access to
            protected information and maintain an inventory of information
            assets on all company campus/office area/on-site location systems
            that are considered in-scope. Individuals who are authorized to
            access institutional data shall adhere to the appropriate roles and
            responsibilities, as defined within Company policy.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.6 Information Classification
          </h3>
          <p>
            Information classification is required to determine the relative
            sensitivity and criticality of information technology resources,
            which provide the basis for protection efforts and access control.
            The Data Classification and Protection Standard establishes a
            baseline derived from federal laws, state laws, regulations, and
            Company policies that govern the privacy and confidentiality of
            data. The Data Classification and Protection Standards apply to all
            data (e.g., research, financial, and employee data collected in
            electronic or hard copy form that is generated, maintained and
            entrusted to EsyCommerce) except where a different standard is
            required by grant, contract, or law. All institutional data must be
            classified into one of three sensitivity tiers, or classifications
            that EsyCommerce has identified, which are referred to as
            Confidential, Internal/Private, and Public. Although all the
            enumerated data values require some level of protection, particular
            data values are considered more sensitive and correspondingly
            tighter controls are required for these values. All Company data is
            to be reviewed on a periodic basis and classified according to its
            use, sensitivity and importance to the Company and in compliance
            with federal and/or state laws. ITS has pre-defined several types of
            sensitive data. The level of security required depends in part on
            the effect that unauthorized access or disclosure of those data
            values would have on Company operations,functions, image or
            reputation, assets, or the privacy of individual members of the
            Company community.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.6.1 Tier I: Confidentia
          </h3>
          <p>
            Confidential information is information whose unauthorized
            disclosure, compromise or destruction would result in severe damage
            to the Company, its stakeholders, or employees (e.g., social
            security numbers, dates of birth, medical records, credit card or
            bank account information). Tier I data is intended solely for use
            within EsyCommerce and is limited to those with a “business
            need-to-know.”
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.6.2 Tier II: Internal/ Private
          </h3>
          <p>
            Internal use information must be guarded due to proprietary, ethical
            or privacy considerations. Although not specifically protected by
            statute, regulations, or other legal obligations or mandates,
            unauthorized use, access, disclosure, acquisition, modification,
            loss or deletion of information at this level could cause financial
            loss, damage to EsyCommerce’s reputation, or violate an individual’s
            privacy rights (e.g., employment history, and alumni biographical
            information). Tier II information is intended for use by Company
            employees, contractors, and vendors covered by a non-disclosure
            agreement.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.6.3 Tier III: Public
          </h3>
          <p>
            Public information is information that is not publicly disseminated,
            but assessable to the general public. These data values are either
            explicitly defined as public information (e.g., state employee
            salary ranges), intended to be readily available to individuals both
            on and off company campus/office area/on-site location (e.g., an
            employee’s work email addresses or stakeholder directory
            information), or not specifically classified elsewhere in the
            protected data classification standard. Knowledge of Tier III
            information does not expose EsyCommerce to financial or reputational
            loss or jeopardize the security of Company data. Publicly available
            data may be subject to appropriate review or disclosure procedures
            to mitigate potential risks of inappropriate disclosure data in
            order to organize it according to its risk of loss or harm from
            disclosure.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.7 Information Handling
          </h3>
          <p>
            Company employees create records as part of the normal course of
            conducting the business of the Company. Records containing highly
            sensitive information should exist only in areas where there is a
            legitimate and justifiable business need and maintained under strict
            controls as outlined in this document. Mishandling of sensitive
            information is a significant risk to the Company and may cause
            considerable financial or reputational harm. It is the
            responsibility of all EsyCommerce employees, regardless of position,
            to protect sensitive information by being aware of any sensitive
            information they may store, process, or transmit. The Data
            Classification and Protection Standard outlines the minimum
            standards for protection of highly sensitive Company information.
            Additional controls required under applicable laws, regulations, or
            standards governing specific forms of data (e.g., health or
            financial information, credit card data), may also apply.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.8 Identity & Access Management
          </h3>
          <p>
            Identity and access management ensures accurate identification of
            authorized Company community members and provides secure
            authenticated access to and use of network-based services. Identity
            and access management is based on a set of principles and control
            objectives to:{" "}
            <ul className="list-disc list-inside mt-2">
              <li>
                Ensure unique identification of members of the Company community
                and assignment of access privileges
              </li>
              <li>
                Allow access to information resources only by authorized
                individuals{" "}
              </li>
              <li>
                Ensure periodic review of membership in the community and review
                of their authorized access rights
              </li>
              <li>
                Maintain effective access mechanisms through evolving
                technologies
              </li>
            </ul>
            Access Control refers to the process of controlling access to
            systems, networks, and information based on business and security
            requirements. The objective is to prevent unauthorized disclosure of
            EsyCommerce’s information assets. Company access control measures
            include secure and accountable means of identification,
            authentication, and authorization. Please see the Identity and
            Access Management Policy for further reference.
          </p>
          <h3 className="text-2xl font-semibold mt-6">8.8.1 Identification</h3>
          <p>
            Identification is the process of uniquely naming or assigning an
            identifier to every individual or system to enable decisions about
            the levels of access that should be given. The key feature of an
            identity process is that each user of the Company community, and any
            other entity about which access decisions need to be made, is
            uniquely identifiable from all other users.{" "}
          </p>
          <h3 className="text-2xl font-semibold mt-6">8.8.2 Authentication</h3>
          <p>
            The authentication process determines whether someone or something
            is, in fact, who or what it is declared to be. Authentication
            validates the identity of the person. Authentication factors can be
            something you know (password), something you have (token), or
            something you are (biometric). Two-factor authentication consists of
            two of the three factors (e.g., password and token) in these
            distinct categories. For the purpose of access control,
            authentication verifies one’s identity through IT. Passwords are an
            important aspect of computer security. They are the front line of
            protection for user accounts. A poorly chosen password may result in
            the compromise of EsyCommerce’s entire network. Adhering to secure
            password procedures will help reduce the compromise of user accounts
            on the Company’s systems. As such, all community users (including
            staff, contractors and vendors etc.) are responsible for selecting
            and securing their passwords. Please see Password Standards for
            further reference on passwords.
          </p>
          <h3 className="text-2xl font-semibold mt-6">8.8.3 Authorization</h3>
          <p>
            Authorization is the process used to grant permissions to
            authenticated users. Authorization grants the user, through
            technology or process, the right to use the information assets and
            determines what type of access is allowed (read-only, create,
            delete, and/or modify). The access rights to the information must
            then be entered into the security system via an access list,
            directory entry, or view tables, for example, so the authorization
            rules can be enforced. The level of control will depend on the
            classification of the data and the level of risk associated with
            loss or compromise of the information. In addition,{" "}
            <ul className="list-disc list-inside mt-2">
              <li>
                Criteria must be established by the Data Owner for account
                eligibility, creation, maintenance and expiration.
              </li>
              <li>
                Highly sensitive data must be individually authorized by the
                Data Owner and an annual confidentiality agreement must be
                acknowledged or signed by all authorized users.
              </li>
              <li>
                Depending on the relative sensitivity of the data, staff may be
                subject to a security clearance check before they are hired,
                transferred, or promoted.
              </li>
              <li>
                Any employee who was not subjected to such a clearance check
                when first hired should not be placed in a sensitive position
                until security clearance has been obtained.
              </li>
              <li>
                Data Owners must periodically review user privileges and modify,
                remove, or inactivate accounts when access is no longer
                required.
              </li>
              <li>
                Procedures must be documented for the timely revocation of
                access privileges and return of institutionally owned materials
                (e.g., keys) for terminated employees and contractors.
              </li>
              <li>
                Inactivity time-outs must be implemented, where technically
                feasible, for terminals and workstations that access highly
                sensitive data. The period of inactivity shall be no longer than
                10 minutes in publicly accessible areas.
              </li>
              <li>
                Audit trails exist for detective and reactive response to system
                penetration, infection of systems and data due to malicious
                code, catastrophic system loss or a compromise of data
                integrity.{" "}
              </li>
            </ul>
          </p>
          <h3 className="text-2xl font-semibold mt-6">8.8.4 Remote Access</h3>
          <p>
            Remote access to information technology resources (switches,
            routers, computers, etc.) and to sensitive or confidential
            information (social security numbers, credit card numbers, bank
            account numbers, etc.) are only permitted through secure,
            authenticated and centrally managed access methods. Systems that
            contain sensitive stakeholder, personnel and financial data will be
            available for off-site remote access through a centrally managed VPN
            that provides encryption and secure authentication. It should also
            be understood that when accessing sensitive data remotely, it is
            prohibited to store cardholder or other sensitive data onto local
            hard drives, floppy disks, or other external media (including
            laptops and Smartphones). External computers that are used to
            administer Company resources or access sensitive information must be
            secured. This includes patching (operating systems and
            applications), possessing updated anti-virus software, operating a
            firewall and being configured in accordance with all relevant
            Company policies and procedures.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.8.5 Privileged Access
          </h3>
          <p>
            System administrators routinely require access to information
            resources to perform essential system administration functions
            critical to the continued operation of the Company. Such privileged
            access is often termed “superuser,” “root,” or “administrator”
            access. Privileged accounts enable vital system administration
            functions to be performed and are only to be used for authorized
            purposes. The number of privileged accounts is to be kept to a
            minimum, and only provided to those personnel whose job duties
            require it. Administrators or users who require privileged accounts
            should also have non-privileged accounts to use when performing
            daily routine tasks and should not use their privileged accounts for
            non-authorized purposes. Activities performed using a privileged
            account are to be logged and the logs will be reviewed on a regular
            basis by an independent and knowledgeable person. Personnel who
            manage, operate, and support Company information systems, including
            individuals who manage their own systems, are expected to use
            appropriate professional practices in providing the security of the
            systems they manage. Responsibility for systems and application
            security must be assigned to an individual knowledgeable about the
            information technology used in the system and in providing security
            for such technology
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.8.6 Segregation of Duties
          </h3>
          <p>
            Tasks involved in critical business processes must be performed by
            separate individuals. Responsibilities of programmers, system
            administrators and database administrators must not overlap, unless
            authorized by the Data Owner. Duties and responsibilities shall be
            assigned systematically to a number of individuals to ensure that
            effective checks and balances exist. Such controls keep a single
            individual from subverting a critical process. Key duties include
            authorizing, approving, and recording transactions; issuing and
            receiving assets; and reviewing or auditing transactions.
            Segregation of duties should be maintained between the following
            functions:
            <ul className="list-disc list-inside mt-2">
              <li>Data entry</li>
              <li>Computer operation</li>
              <li>Network management</li>
              <li>System administration</li>
              <li>Systems development and maintenance</li>
              <li>Change management</li>
              <li>Security administration</li>
              <li>Security audit</li>
            </ul>
            Qualified and continuous supervision is to be provided to ensure
            that internal control objectives are achieved. This standard
            requires supervisors to continuously review and approve the assigned
            work of their staff as well as provide the necessary guidance and
            training to ensure that errors, waste, and wrongful acts are
            minimized and that specific management directives are followed.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.9 Communication and Operations Management
          </h3>
          <p>
            System communications protection refers to the key elements used to
            assure data and systems are available, and exhibit the
            confidentiality and integrity expected by owners and users to
            conduct their business. The appropriate level of security applied to
            the information and systems is based on the classification and
            criticality of the information and the business processes that use
            it. The System's integrity controls must protect data against
            improper alteration or destruction during storage, during
            processing, and during transmission over electronic communication
            networks. The key elements of system and communications protection
            are backup protection, denial of service protection, boundary
            protection, use of validated cryptography (encryption), public
            access protection, and protection from malicious code. Operations
            management refers to implementing appropriate controls and
            protections on hardware, software, and resources; maintaining
            appropriate auditing and monitoring; and evaluating system threats
            and vulnerabilities. Proper operations management safeguards all the
            Company’s computing resources from loss or compromise, including
            main storage, storage media (e.g., tape, disk, and optical devices),
            communications software and hardware, processing equipment,
            standalone computers, and printers.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.9.1 Network Security
          </h3>
          <p>
            Network attacks launched from the Internet or from Company networks
            can cause significant damage and harm to information resources
            including the unauthorized disclosure of confidential information.
            In order to provide defensive measures against these attacks,
            firewall and network filtering technology must be used in a
            structured and consistent manner. EsyCommerce maintains appropriate
            configuration standards and network security controls to safeguard
            information resources from internal and external network mediated
            threats. Firewalls and Intrusion Detection Systems (IDS) are
            deployed at the company campus/office area/on-site location border
            and Intrusion Prevention Systems (IPS) are deployed on core services
            to augment normal system security measures to prevent denial of
            service attacks, malicious code, or other traffic that threatens
            systems within the network or that violates Company information
            security policies. Firewalls and or IDS/IPS are also deployed as
            appropriate to limit access to systems that host restricted or
            essential information.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.9.2 Security Monitoring
          </h3>
          <p>
            Security Monitoring provides a means by which to confirm that
            information resource security controls are in place, are effective
            and are not being bypassed. One of the benefits of security
            monitoring is the early identification of wrongdoing or new security
            vulnerabilities. Early detection and monitoring can prevent possible
            attacks or minimize their impact on computer systems. Any equipment
            attached to EsyCommerce’s network is subject to security
            vulnerability scans. The goal of the scans is to reduce the
            vulnerability of Company computers and the network to hacking,
            denial of service, infection, and other security risks from both
            inside and outside the Company. ITS scans Company servers using a
            mixture of commercial and open-source software to monitor and assess
            the security of the Company’s network. Critical servers that store
            legally protected or other important non-public data are given
            priority, but others may be scanned. ITS also coordinates the
            external vulnerability scans for departments that are required to
            use this service to meet the Payment Card Industry Data Security
            Standards (PCI DSS) for credit card processing. The external scans
            use a PCI approved external scan vendor.
          </p>
          <h3 className="text-2xl font-semibold mt-6">8.9.3 Encryption</h3>
          <p>
            EsyCommerce has developed standards for encryption to ensure that
            sensitive data is protected from disclosure. Suitably strong
            encryption measures are employed and implemented, whenever deemed
            appropriate, for information during transmission and in storage
          </p>
          <p>
            <span className="underline">Transmission</span> In order to protect
            the confidentiality and integrity of the Company’s sensitive data;
            any data classified as Tier I data and having a required need for
            confidentiality and/or integrity shall be transmitted via encrypted
            communication to ensure that it does not traverse the network in
            clear text. It is further recommended that data classified as Tier
            II be transmitted via encrypted communications when possible.
          </p>
          <p>
            <span className="underline">Storage</span> Encryption of information
            in storage presents risks to the availability of that information,
            due to the possibility of encryption key loss. In order to protect
            the confidentiality and integrity of the Company’s sensitive data;
            any data classified as Tier I data and having a required need for
            confidentiality and/or integrity, shall be stored encrypted in
            systems and/or databases and/or portable media. Tier II or Tier III
            data classifications do not require such encrypted storage however
            it is recommended. See the Data Classification and Protection Policy
            for further clarification on data classification and handling.{" "}
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.9.4 Virus Protection
          </h3>
          <p>
            Viruses are a threat to the Company as infected computers may
            transmit confidential information to unauthorized third parties,
            provide a platform for unauthorized access or use of the internal
            network, contaminate or infect other network connected devices, or
            interfere with Company information technology resources. Antivirus
            software is provided to the Company community to protect against the
            damage caused by virus attacks. Network administrators are
            responsible for creating procedures to ensure anti-virus software
            has the latest updates and virus signatures installed and to verify
            that computers are virus-free. The Company reserves the right to
            review any device attached to the network (public or nonpublic) for
            adequate virus protection. The Company reserves the right to deny
            access to the network to any device found to be inadequately
            protected. Additionally, the Company reserves the right to disable
            network access to any device that is insufficiently protected, or
            currently infected with a virus. Network access may be restored when
            the device has been cleaned and current antivirus software and
            applicable operating system and application patches have been
            installed.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.9.5 Backup and Recovery
          </h3>
          <p>
            All electronic information is to be copied onto secure storage media
            on a regular basis (i.e., backed up), for the purpose of disaster
            recovery and business resumption. The Backup and Recovery Standard
            outlines the minimum requirements for the creation and retention of
            backups. Special backup needs which exceed these minimum
            requirements may be accommodated on an individual basis. All backups
            must conform to the following best practice procedures:
            <ul className="list-disc list-inside mt-2">
              <li>
                All data and utility files must be adequately and systematically
                backed up. (Ensure this includes all patches, fixes and updates){" "}
              </li>
              <li>
                Records of what is backed up and to where must be maintained
              </li>
              <li>Records of software licensing should be backed up</li>
              <li>
                The backup media must be precisely labeled and must-have, at a
                minimum, the following identifying markers that can be readily
                displayed by labels and/or a bar-coding system:{" "}
              </li>
              <ul className="list-disc list-inside mt-2">
                <li>System name</li>
                <li>Creation date</li>
                <li>
                  Sensitivity Classification (Based on applicable electronic
                  record retention regulations)
                </li>
              </ul>
              <li>
                Copies of the back-up media, together with the back-up record,
                should be stored safely in a remote location, at a sufficient
                distance away to escape any damage from a disaster at the main
                site
              </li>
              <li>
                Regular tests of restoring data/software from the backup copies
                should be undertaken, to ensure that they can be relied upon for
                use in an emergency. Note: For most important and time-critical
                data, a mirror system, or at least a mirror disk may be needed
                for a quick recovering.
              </li>
            </ul>
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.10 Systems & Application Security{" "}
          </h3>
          <p>
            Application development procedures are vital to the integrity of
            systems. If applications are not developed properly, data may be
            processed in such a way that the integrity of the data is corrupted.
            In addition, the integrity of the application software itself should
            be maintained, both in terms of change control and terms of attacks
            from malicious software.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.10.1 Systems Development and Maintenance
          </h3>
          <p>
            Application development procedures are vital to the integrity of
            systems. If applications are not developed properly, data may be
            processed in such a way that the integrity of the data is corrupted.
            In addition, the integrity of the application software itself should
            be maintained, both in terms of change control and terms of attack
            from malicious software.
          </p>
          <h3 className="text-2xl font-semibold mt-6">8.10.2 Change Control</h3>
          <p>
            Security must be considered at all stages of the life cycle of an
            information system in order to: a) ensure conformance with all
            appropriate security requirements, b) protect sensitive information
            throughout its life cycle, c) facilitate efficient implementation of
            security controls, d) prevent the introduction of new risks when the
            system is modified, and e) ensure proper removal of data when the
            system is retired. In order to ensure that systems security is
            considered during the development and maintenance stages EsyCommerce
            has defined a Systems Development Lifecycle (SDLC) and the following
            minimum requirements during each phase:
            <ul className="list-disc list-inside mt-2">
              <li>
                Feasibility Phase – high level review to ensure security
                requirements can support the business case
              </li>
              <li>
                Requirements Phase – define any initial security requirements or
                controls to support the business requirements
              </li>
              <li>
                Design Phase – verify appropriate security controls for the
                baseline have been identified and ensure change control is
                established and used for the remainder of the life cycle. Repeat
                verification with each design change or as warranted
              </li>
              <li>
                Development Phase – to verify and validate all security controls
                identified from design phase. Repeated throughout as changes are
                made or as warranted
              </li>
              <li>
                Implementation Phase – final verification of existing controls
                and the appropriate levels of risk mitigation
              </li>
            </ul>
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.11 Physical Security Measures
          </h3>
          <p>
            Physical security controls and secure areas are used to minimize
            unauthorized access, damage, and interference to information and
            information systems. Physical Security means providing environmental
            safeguards for controlling physical access to equipment and data on
            the Company network in order to protect information technology
            resources from unauthorized use, in terms of both physical hardware
            and data perspectives.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.11.1 Physical Entry Controls
          </h3>
          <p>
            Access to areas containing sensitive information must be physically
            restricted. Access to all entry points into and within the data
            center is protected by electronic access control mechanisms to
            validate access and ensure only authorized individuals enter the
            facility. An audit trail of all access is securely maintained for
            auditing purposes. All individuals with access to these areas must
            wear an identification badge on their outer garments so that both
            the picture and information on the badge are clearly visible.
            Individuals are also encouraged to challenge unescorted strangers
            and anyone not wearing visible identification. Access rights to
            secure areas are regularly reviewed and updated.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.11.2 Provisioning Process
          </h3>
          <p>
            Individuals requesting access to the data center are to be enrolled
            in a structured and documented provisioning process for ensuring the
            integrity of the person entering the facility. Personnel working
            within the data center or clients utilizing the facility services
            must be immediately removed from systems that have allowed access to
            the facility itself when no longer employed by the Company. This
            includes all electronic access control mechanisms along with removal
            of all systems, databases, Web portals, or any other type of sign-in
            mechanism that requires authentication and authorization activities.
          </p>
          <h3 className="text-2xl font-semibold mt-6">8.11.3 Visitors</h3>
          <p>
            Visitors must be properly identified with a current, valid form of
            identification and must be given a temporary facility badge allowing
            access to certain areas within the data center. A log of this
            activity is retained for audit and security purposes.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.11.4 Alarms & Surveillance
          </h3>
          <p>
            All exterior doors and sensitive areas within the facility are hard
            wired with alarms and have a mixture of security cameras in place
            throughout all critical areas, both inside and out, of the data
            center
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.11.5 Equipment Control
          </h3>
          <p>
            The assigned user of information technology resources is considered
            the custodian for the resource. If the item has been damaged, lost,
            stolen, borrowed, or is otherwise unavailable for normal business
            activities, the custodian must promptly inform the department
            manager involved. Sensitive information technology resources located
            in unsecured areas should be secured to prevent physical tampering,
            damage, theft, or unauthorized physical access. An inventory of all
            computer equipment and media is maintained to account for restricted
            and confidential information. When feasible, IT equipment is to be
            marked with some form of identification that clearly indicates it is
            the property of EsyCommerce.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.11.6 Computer Data and Media Disposal Policy
          </h3>
          <p>
            Proper data disposal is essential to controlling sensitive data
            including staff records, personnel records, financial data, and
            protected health and credit card information. If the information on
            those systems is not properly removed before the equipment is
            disposed of, or transferred within the Company, that information
            could be accessed and viewed by unauthorized individuals. Media or
            devices containing sensitive information transferred between
            departments or removed from service must be properly sanitized, as
            outlined within the Data Sanitization Standard to ensure that all
            computers and electronic media are properly sanitized before
            disposal. EsyCommerce is committed to compliance with federal
            statutes associated with the protection of confidential information
            as well as ensuring compliance with software licensing agreements.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.12 Business Continuity
          </h3>
          <p>
            EsyCommerce provides a safe, secure IT environment to serve its
            customers’ requirements, ensure stability and continuity of the
            business, and promote confidence in its ability to not only
            continuously provide goods and/or services, but also to recover
            quickly from disaster and minimize disruption.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.12.1 Business Impact Analysis
          </h3>
          <p>
            A Business Impact Analysis should correlate specific system
            components with the critical services that they provide, and based
            on that information, characterize the consequences of a disruption
            to the system components. It is the responsibility of both the Data
            Owner and Data Custodian to perform appropriate business impact
            analysis tasks as outlined below. Identifying Critical IT Resources
            Data owners and custodians are to evaluate his/her system to
            determine the critical functions performed and to identify the
            specific system resources required to perform them. Two activities
            usually are needed to complete this step:{" "}
            <ul className="list-decimal list-inside mt-2">
              <li>
                Identify and coordinate with internal and external users
                associated with the system to characterize the ways that they
                depend on or support the system. When identifying contacts, it
                is important to include departments that provide or receive data
                from the system as well as contacts supporting any
                interconnected systems. This coordination should enable the data
                owner and custodian to characterize the full range of support
                provided by the system, including security, managerial,
                technical, and operational requirements.
              </li>
              <li>
                Evaluate the system to link these critical services to system
                resources. This analysis usually will identify infrastructure
                requirements such as electric power, telecommunications
                connections, and environmental controls. Specific IT equipment,
                such as application servers, and authentication servers, are
                usually considered to be critical. However, the analysis may
                determine that certain IT components, such as a printer or print
                server, are not needed to support critical services.
              </li>
            </ul>
            Identify Outage Impacts and Allowable Outage Times Data owners and
            custodians should analyze the critical resources identified in the
            previous step and determine the impact(s) on IT operations if a
            given resource were disrupted or damaged. The analysis should
            evaluate the impact of the outage in the following three ways:
            <ul className="list-decimal list-inside mt-2">
              <li>
                The effects of the outage may be tracked over time. This will
                enable the Company to identify the maximum allowable time that a
                resource may be unavailable before it prevents or inhibits the
                performance of an essential function.
              </li>
              <li>
                The effects of the outage may be tracked across related
                resources and dependent systems, identifying any cascading
                effects that may occur as a disrupted system affects other
                processes that rely on it
              </li>
              <li>
                The effects of the outage may be tracked using revenue streams
                and cost expenditures, identifying any areas of monetary need or
                concern that could cause a delay in the recovery effort.{" "}
              </li>
            </ul>
            Data owners and custodians will determine the optimum point to
            recover the IT system by balancing the cost of system inoperability
            against the cost of resources required for restoring the system.
            <span className="font-bold">Develop Recovery Priorities</span>
            Data owners and custodians should develop recovery priorities for
            the system resources. A scale of high-, medium-, low should be used
            to prioritize the resources. High priorities are based on the need
            to restore critical resources within their allowable outage times;
            medium and low priorities reflect the requirement to restore full
            operational capabilities over a longer recovery period. The outage
            impact(s) and allowable outage times characterized in the previous
            step enable the Company to develop and prioritize recovery
            strategies that personnel will implement during contingency plan
            activation. For example, if the outage impacts step determines that
            the system must be recovered within 4 hours, EsyCommerce needs to
            adopt measures to meet that requirement. Similarly, if most system
            components could tolerate a 24-hour outage but a critical component
            could be unavailable for only 8 hours, the necessary resources for
            the critical component would be prioritised. By prioritizing these
            recovery strategies, the Company may make more informed, tailored
            decisions regarding contingency resource allocations and
            expenditures, saving time, and effort.
            <span className="font-bold">
              Business Impact Analysis Documentation Requirements
            </span>
            Data owners and custodians are responsible for maintaining the
            Business Impact Analysis document(s). A periodic review of the
            Business Impact Analysis should be performed by the data owner to
            ensure accuracy and completeness.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.12.2 Disaster Recovery
          </h3>
          <p>
            A disaster recovery plan can be defined as the ongoing process of
            planning, developing and implementing disaster recovery management
            procedures and processes to ensure the efficient and effective
            resumption of critical functions in the event of an unscheduled
            interruption. There are five main components of the disaster
            recovery plan. The Supporting Information and Plan Appendices
            provide essential information to ensure a comprehensive plan. The
            Notification/Activation, Recovery, and Reconstitution Phases address
            specific actions that Company should take following a system
            disruption or emergency. IT contingency plans should be clear,
            concise, and easy to implement in an emergency. Where possible,
            checklists and stepby-step procedures should be used. The Disaster
            Recovery Plan must contain detailed information on how to continue
            business operations and perform all tasks required to do so while
            the computer hardware, network and data are being recovered.
            Technical capabilities need to be documented and designed to support
            operations and should be tailored to the Company requirements. The
            order in which systems are to be recovered and at what level of
            functionality based upon the BIA needs to be fully documented. Not
            all systems may need to be recovered simultaneously or to 100% for
            the system to begin functioning. EsyCommerce is in the process of
            developing a comprehensive contingency planning program. Each
            company campus/office area/on-site location department will develop
            IT contingency plans that contain detailed roles, responsibilities,
            teams, and procedures associated with restoring an IT system
            following a disruption.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            8.13 Information Security Incident Response
          </h3>
          <p>
            An IT security incident is defined as an event that impacts or has
            the potential to impact the confidentiality, availability, or
            integrity of Company information technology resources. Having an
            effective incident response is essential in mitigating damage and
            loss due to an information security incident. Proper handling of
            such incidents protects the Company’s information technology
            resources from future unauthorized access, use or damage. If you
            suspect an IT security incident, immediate action should be taken to
            isolate the problem from the company campus/office area/on-site
            location network. Be ready to provide specifics such as date/time of
            loss, type of device(s), contact information, and any specific
            information that you believe indicates that a device was breached, a
            computer security incident occurred, or a device was lost or stolen.
            Please see the IT Incident Response Procedure for further reference.
          </p>
          <h3 className="text-2xl font-semibold mt-6">9.0 Regulations</h3>
          <p className="mt-2">
            The Company must be proactively aware of and prepared to comply with
            a wide variety of federal and state laws, regulations, and Company
            policies with respect to information protection and privacy. While
            this is not an exhausted list,
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            9.1 Health Insurance Portability and Accountability Act
          </h3>
          <p className="mt-2">
            HIPAA and its regulations (the "Privacy Rule" and the "Security
            Rule") protect the privacy of an individual’s health information as
            well as govern the way EsyCommerce collects, maintains, uses and
            discloses protected health information (“PHI”). EsyCommerce must
            ensure the confidentiality, integrity and availability of
            confidential information; and detect and prevent reasonably
            anticipated errors and threats due to malicious or criminal actions,
            system failure, natural disasters and employee or user error. Such
            events could result in damage to or loss of personal information,
            corruption or loss of data integrity, interruption of Company
            activities, or compromise to the privacy of the Company employees
            and its records.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            9.2 Health Information Technology for Economic and Clinical Health
            Act
          </h3>
          <p className="mt-2">
            HITECH imposes federal security breach notification requirements for
            unauthorized uses and disclosures of “unsecured PHI” and adds
            numerous privacy and data security restrictions to HIPAA.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            9.3 International Traffic in Arms Regulations/Export Administration
            Regulations
          </h3>
          <p className="mt-2">
            ITAR and EAR are federal regulations that prohibit the unlicensed
            export of specific technologies for reasons of national security or
            protection of trade. If Company research involves such specified
            technologies, regulations may require the Company to obtain prior
            approval before allowing foreign nationals to participate in the
            research, partnering with a foreign company and/or sharing
            research—verbally or in writing—with persons who are not United
            States citizens or permanent resident aliens.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            9.4 Gramm-Leach-Bliley Act for Disclosure of Nonpublic Personal
            Information
          </h3>
          <p className="mt-2">
            GLBA mandates that the Company safeguard nonpublic personally
            identifiable financial information (PIFI); limit disclosures of such
            data and notify customers of their information sharing practices and
            privacy policies. The act states, among other things, that the
            Company must develop, implement and maintain a written comprehensive
            information security program
          </p>
          <h3 className="text-2xl font-semibold mt-6">9.5 Red Flag Rules</h3>
          <p className="mt-2">
            The RFR requires that the Company implement a written Identity Theft
            Prevention Program designed to detect the warning signs — or "red
            flags" — of identity theft in their day-to-day operations. By
            identifying red flags in advance, businesses will be better equipped
            to spot suspicious patterns that may arise -- and take steps to
            prevent a red flag from escalating into a costly episode of identity
            theft.
          </p>
          <h3 className="text-2xl font-semibold mt-6">
            9.6 Payment Card Industry Data Security Standards
          </h3>
          <p className="mt-2">
            PCI DSS provides a single approach to safeguarding confidential
            credit card account data and establishes security best practice
            standards that the Company must follow when storing, processing, or
            transmitting credit card data. While not a law, the Company must
            comply in order to be approved and continue to accept payment cards.
          </p>
          <h3 className="text-2xl font-semibold mt-6">10.0 COMPLIANCE</h3>
          <p className="mt-2">
            Upon implementation of this plan, ITS will ensure that the plan is
            being effectively carried out in accordance with regulatory and
            Company requirements and meets or exceeds industry standards for
            information security.
          </p>
          <p className="mt-2">
            No part of this documentation may be reproduced or transmitted in
            any form or by any means, electronic or mechanical, including
            photocopying or recording, for any purpose without express written
            permission of the CEO of EsyCommerce.
          </p>
        </div>
      </div>
    </>
  );
};

export default InformationSecurityPage;
