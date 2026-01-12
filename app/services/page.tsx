import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Magor Security's comprehensive security services including close protection escorts for high-risk zones, operational facilitation for NGOs, CCTV systems, cybersecurity solutions, and security training.",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services Page"
        description=""
      />
      <Services />
    </>
  );
};

export default ServicesPage;

