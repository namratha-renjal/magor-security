import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="pt-8 md:pt-10 lg:pt-12">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <SectionTitle
                title="Our Core Services"
                paragraph=""
                mb="44px"
              />
              <p className="mb-12 text-base font-medium text-body-color">
                At <b>Magor Security</b>, we deliver a range of specialized services designed to protect and empower our clients in volatile environments. Here's what we offer:
              </p>

              {/* Core Services */}
              <div className="mb-12">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  1. Close Protection Escorts for High-Risk Zones
                </h3>
                <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
                  Personalized security details for individuals, especially NGO personnel, in dangerous areas affected by military or political conflicts. Armed or unarmed escorts, risk assessments, and real-time threat monitoring. Ideal for humanitarian missions, ensuring safe travel and operations.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  2. Operational Facilitation in Conflict Areas
                </h3>
                <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
                  Assistance with administrative and logistical challenges in host countries, including visa processing, local partnerships, and compliance with regulations. Support for NGOs to aid local populations through secure service delivery, such as medical aid, education, and relief efforts. Customized plans to navigate political instability and military zones while prioritizing community support.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  3. Advisory Services for Asset and Personnel Protection
                </h3>
                <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
                  Expert consultations for companies and associations on comprehensive security strategies.
                </p>
                <ul className="mb-6 ml-6 list-disc space-y-3 text-base font-medium leading-relaxed text-body-color">
                  <li>
                    <b>CCTV and Surveillance Systems</b>: Installation, maintenance, and integration of high-definition cameras for real-time monitoring.
                  </li>
                  <li>
                    <b>Alarm and Intrusion Detection</b>: Advanced alarm systems with rapid response protocols.
                  </li>
                  <li>
                    <b>Close Protection Training</b>: Programs for executives, staff, and VIPs to enhance personal safety.
                  </li>
                  <li>
                    <b>Anti-Cybercrime Solutions</b>: Cybersecurity assessments, firewalls, encryption, and training to prevent data breaches, ransomware, and online threats.
                  </li>
                </ul>
              </div>

              {/* Additional Offerings */}
              <div className="mb-12">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Additional Offerings
                </h3>
                <ul className="mb-6 ml-6 list-disc space-y-3 text-base font-medium leading-relaxed text-body-color">
                  <li>
                    <b>Risk Assessments and Audits</b>: In-depth evaluations of physical and digital vulnerabilities.
                  </li>
                  <li>
                    <b>Emergency Response Planning</b>: Customized contingency plans for crises.
                  </li>
                  <li>
                    <b>Training Workshops</b>: For NGOs, businesses, and associations on security best practices.
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/contact"
                  className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
                >
                  Contact us to discuss your specific needs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

