import { PortfolioProvider } from "@/Features/Portfolio/Contexts/portfolio-context";
import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import { ReactNode } from "react";

const Contact = () => {
    return <div>Contact</div>;
};

Contact.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <DefaultLayout>{page}</DefaultLayout>
    </PortfolioProvider>
);

export default Contact;
