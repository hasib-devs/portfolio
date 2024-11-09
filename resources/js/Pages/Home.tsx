import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import AboutSection from "@/Features/Portfolio/Sections/AboutSection";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <AboutSection />
        </>
    );
};

Home.layout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
