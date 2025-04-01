import React from "react";
import styles from "../../css/DataPolicy.module.css";
import HeroSection from "../../components/DataSecurity/HeroSection";

const DataSecurityPolicyPage = () => {
  return (
    <>
      <HeroSection />
      <div className={`${styles.DataPolicy} bg-white`}>
        <div className="xl:px-10 py-12 3xl:mx-auto 3xl:max-w-screen-xl">
          <h3 className="text-2xl font-semibold mt-6">Introduction</h3>
          <p className="mb-4">
            The grievance process, outlined in the document, provides an avenue
            for stakeholders to voice their concerns and gives transparency on
            how grievances will be managed internally, which aims to reduce
            conflict and strengthen relationships between external stakeholders.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Scope</h3>
          <p className="mt-2">
            The grievance mechanism procedure applies to all external
            stakeholders of our operations. This procedure does not cover
            grievances raised by internal stakeholders, such as employees, who
            are to refer to company internal grievance standard
          </p>

          <h3 className="text-2xl font-semibold mt-6">Definitions</h3>
          <p className="mt-2">
            <span className="font-bold">Grievance - </span>An issue, concern,
            problem, or claim (perceived or actual) that an individual or
            community group wants addressed by the company in a formal manner.
            <br />
            <span className="font-bold">Grievance Handling Mechanism - </span>A
            way to accept assess and resolve community complaints concerning the
            performance or behaviour of the company, its contractors, or
            employees. This includes adverse economic, environmental and social
            impacts.
            <br />
            <span className="font-bold">Internal Stakeholders - </span>Groups or
            individuals within a business who work directly within the business,
            such as employees and contractors.
            <br />
            <span className="font-bold">External Stakeholders - </span>Groups or
            individuals outside a business who are not directly employed or
            contracted by the business but are affected in some way from the
            decisions of the business, such as customers, suppliers, community,
            NGOs and the government.
            <br />
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            Grievance Reporting Channels
          </h3>
          <p className="mt-2">
            EsyCommerce will communicate this procedure to its external
            stakeholders to raise awareness and offer transparency of how
            stakeholders can voice their grievances. Various channels for
            external stakeholders to vocalize their grievances formally include:
            Stakeholders can connect with the Admin & Liaison Officer
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            Roles and Responsibilities
          </h3>
          <p className="mt-2">
            <span className="font-bold">
              Grievance Committee (Team Comprises of Function heads of HRM, F&C
              & Environment) -{" "}
            </span>
            <ul className="list-disc list-inside mt-2">
              <li>
                Employee investigating the grievance and liaising with the
                external stakeholder/s.{" "}
              </li>
              <li>
                Developing resolutions and actions to rectify any issues.{" "}
              </li>
              <li>Follow up and track progress of grievance.</li>
            </ul>
            <br />
            <span className="font-bold">
              Stakeholder Contact Officer (Admin & Liaison officer) -{" "}
            </span>
            <ul className="list-disc list-inside mt-2">
              <li>Receive grievances and forward to Grievance Committee.</li>
              <li>
                Makes sure the grievance mechanism procedure is being adhered to
                and followed correctly.
              </li>
              <li>
                Maintains grievance register and monitor any correspondence.
              </li>
              <li>
                Monitor grievances/trends over time and report findings to the
                Committee.
              </li>
              <li>Document any interactions with external stakeholders.</li>
            </ul>
            <br />
            <span className="font-bold">
              Employees (Officers of CSR, IR, ADMIN & Environment) -{" "}
            </span>
            <ul className="list-disc list-inside mt-2">
              <li>Receive grievances in person</li>
              <li>
                Report grievance to the Stakeholder Contact Officer by lodging
                the Grievance Lodgement Form.
              </li>
              <li>
                May provide information and assistance in developing a response
                and close out of a grievance.
              </li>
            </ul>
            <br />
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            Grievance Mechanism Process
          </h3>
          <p className="mt-2">
            The figure below describes the process that will be used to resolve
            any grievances:
          </p>

          <h3 className="text-2xl font-semibold mt-6">Electronic </h3>
          <p className="mt-2">
            The stakeholder contact officer receives all grievances that come
            through via email. The stakeholder contact officer will review the
            grievance form and process the grievance in accordance with this
            procedure.
            <ul className="list-disc list-inside mt-2">
              <li>
                <span className="font-bold">Record</span>All formal grievances
                will be logged in the Grievance Register and Grievance Lodgement
                Forms will be saved in the record of correspondence.
              </li>
              <li>
                <span className="font-bold">Acknowledge</span>A grievance will
                be acknowledged, by the grievance owner, within fiveworking days
                of a grievance being submitted.
              </li>
              <li>
                <span className="font-bold">Investigate</span>The Stakeholder
                officer along with the employees is responsible for
                investigating the grievance. The investigation may require the
                team to make site visits, consult employees, contact external
                stakeholders and complete other activities. Records of meetings,
                discussions and activities all need to be recorded during the
                investigation. Information gathered during the investigation
                will be analyzed and will assist in determining how the
                grievance is handled and what steps need to be taken in order to
                resolve the grievance.
              </li>
              <li>
                <span className="font-bold">Act</span>Following the
                investigation, the Stakeholder officer will use the findings to
                create an action plan outlining steps to be taken in order to
                resolve the grievance. The Stakeholder officersofficersible for
                assigning actions, monitoring actions undertaken and making sure
                deadlines are adhered to. Once all actions have been completed
                and the team feels the grievance has been resolved, they will
                then formally advise the external stakeholder via their
                preferred method of contact.
              </li>
              <li>
                <span className="font-bold">Follow up and close out</span>The
                Stakeholder officer will contact the external stakeholder/s
                three weeks after the grievance is resolved. When contacting the
                external stakeholder, the stakeholder officer will verify that
                the outcome was satisfactory and gather any feedback on the
                grievance process.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default DataSecurityPolicyPage;
