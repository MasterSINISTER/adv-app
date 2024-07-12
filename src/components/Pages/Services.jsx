import React from "react";
import "./serviceStyle.css";
import DynamicNav from "../DynamicNav";
import Footer from "../Footer";

function Services() {
  return (
    <>
      <DynamicNav />
      <h1 id="services-heading">Practice Areas</h1>
      <div id="services-container">
        <div id="services-card">
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/493582/family-facing-diagonally.svg"
              className="card-img"
            ></img>
            <h3>FAMILY LAWYER</h3>
            <p>
              Family law is a legal practice area that focuses on issues
              involving family relationships such as marriage, adoption,
              divorce, and child custody, among others. We are practicing in
              Family court and represent our valuable clients in family court
              proceedings. We draft ourselves important legal documents such as
              petitions and agreements. We are specialized in Divorce matters,
              Family counseling, and Child Custody, Adoption, and Matrimonial
              cases. We, the team of Lawyers are in the field, help all kinds of
              people facing all kinds of sensitive issues that many people
              wouldn't immediately assume go under the family law umbrella.
            </p>
          </div>
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/428709/cheque-finance-business.svg"
              className="card-img"
            ></img>
            <h3>NEGOTIABLE INSTRUMENT ACT</h3>
            <p>
              The Negotiable Instruments Act, 1881 is applicable for the cases
              of dishonour of cheque. This Act has been amended many times since
              1881. According to Section 138 of the Act, the dishonour of cheque
              is a criminal offence and is punishable by imprisonment up to two
              years or with monetary penalty or with both.
            </p>
          </div>
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/411346/agree.svg"
              className="card-img"
            ></img>
            <h3>ARBITRATION</h3>
            <p>
              Arbitration is outside the court settlement of a dispute by one or
              more persons .We are appointed as arbitrators under Section
              2(1)(a) of the Arbitration & Conciliation Act. 1996. We as
              Arbitrators, mediators, and conciliators help opposing parties
              resolve problems outside of the judicial system by facilitating
              negotiation and dialogue. Typically, we do the following:
              Facilitate discussion amongst disputants in order to lead them to
              a mutually beneficial agreement. The arbitral award is binding on
              the parties just like a court decree or order.
            </p>
          </div>
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/513282/car.svg"
              className="card-img"
            ></img>
            <h3>MOTOR ACCIDENT CLAIM CASES</h3>
            <p>
              Under Section 166 IPC (Chapter XII) of the Motor Vehicles Act
              1988, an individual can be considered the rightful claimant and
              can claim compensation from Motor Accidents Claim Tribunal if:
              They are someone or authorized representatives of someone who has
              sustained any injuries in the vehicular accident. We help our
              valuable clients for getting compensation in the MACT courts .
            </p>
          </div>
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/528202/diploma-verified.svg"
              className="card-img"
            ></img>
            <h3>CONSUMER PROTECTION</h3>
            <p>
              Consumer protection safeguards the well-being and interests of
              consumers through education, mobilization and representation.
              Consumer protection ensures that consumers make well-informed
              decisions about their choices and have access to effective redress
              mechanisms. The Consumer Protection Act, to provide a simpler and
              quicker access to redressal of consumer grievances. The Act for
              the first time introduced the concept of 'consumer' and conferred
              express additional rights on him.We deal the cases of Consumer
              Forums and Consumer Commissions.
            </p>
          </div>
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/499839/money.svg"
              className="card-img"
            ></img>
            <h3>MONEY RECOVERY CASES</h3>
            <p>
              The civil remedy for the recovery of money is by way of
              institution of a suit in a court of appropriate jurisdiction. The
              suit can be instituted under Order XXXVII of the said code. The
              civil remedy for the recovery of money is by way of institution of
              a suit in a court of appropriate jurisdiction. The suit can be
              instituted under Order XXXVII of the said code, in case there is
              an admitted liability in the form of a promissory note, hundies
              etc. Order XXXVII is a summary procedure.
            </p>
          </div>
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/492990/pc-security.svg"
              className="card-img"
            ></img>
            <h3>CYBER LAW AND IT ACT</h3>
            <p>
              We deal the cases under Cyber Crimes .The Cyber law deals with the
              legal aspects of cyberspace, the internet, and computing. In a
              broader view, cyber law handles the issues of intellectual
              property, contract, jurisdiction, data protection laws, privacy,
              and freedom of expression in the digital space.
            </p>
          </div>
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/66309/court.svg"
              className="card-img"
            ></img>
            <h3>TRANSFER PETITION IN SUPREME COURT</h3>
            <p>
              Transfer Petition in Supreme Court can be filed in Civil and
              Criminal matters. When the matter is to be transferred from one
              Court of State to another Court of different state, then you have
              to approach Hon’ble Supreme Court. Civil matter (i.e. Divorce
              cases Domestic Violence etc.) comes under Sec 25 CPC and Criminal
              matter is transferred under sec 406 Crpc.{" "}
            </p>
          </div>
          <div id="card">
            <img
              src="https://www.svgrepo.com/show/469937/tax-left.svg"
              className="card-img"
            ></img>
            <h3>TAX EVASION CASES</h3>
            <p>
              Tax Evasion is crime in India . Tax Evasion example is failing to
              declare cash transactions, etc. People utilize various methods to
              avoid paying taxes, including filing fraudulent tax returns,
              smuggling, falsifying documents, and bribery. Tax evasion is
              important because it is considered illegal in India and leads to
              severe penalties. Tax evasion is a criminal offence in India.
              Chapter XXII of the Income Tax Act, 1961 states provisions related
              to the prosecution of such offences, failure to file a timely
              return, false information, deliberate attempt to evade tax,
              fabrication of numbers etc. The burden of proof in such cases lies
              on the accused.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
