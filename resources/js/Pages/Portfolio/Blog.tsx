import { PortfolioProvider } from "@/Features/Portfolio/Contexts/portfolio-context";
import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import { ReactNode } from "react";

const Blog = () => {
    return <div>Blog</div>;
};

Blog.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <DefaultLayout>{page}</DefaultLayout>
    </PortfolioProvider>
);

export default Blog;
