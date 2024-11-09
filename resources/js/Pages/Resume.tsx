import { PortfolioProvider } from "@/Features/Portfolio/Contexts/portfolio-context";
import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import { ReactNode } from "react";

const Resume = () => {
    return <div>Resume</div>;
};

Resume.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <DefaultLayout>{page}</DefaultLayout>
    </PortfolioProvider>
);

export default Resume;
