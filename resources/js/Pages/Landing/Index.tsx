import { Button } from "@/Components/Shared/Button";
import { Provider } from "@/Contexts/global-context";
import DefaultLayout from "@/Features/Landing/Layouts/DefaultLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { CiHeart } from "react-icons/ci";

type Props = {};

const Landing = (props: Props) => {
    return (
        <>
            <Head>
                <title>Welcome</title>
            </Head>
            <div className="container">
                {/* Hero section */}
                <div className="py-20 flex text-center gap-4 flex-col justify-center items-center">
                    <h2 className="text-6xl font-bold">
                        Create an amazing <br />
                        <span className="text-secondary">Software</span> in
                        minutes
                    </h2>
                    <p className="text-lg">
                        Show off your skills, experience and projects. Generate
                        <br />
                        markdown for your profile with just a few clicks!
                    </p>

                    <div className="flex gap-3">
                        <a
                            href="https://github.com/hasib-devs?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="gray"
                                className="uppercase"
                            >
                                Visit Github Repos
                            </Button>
                        </a>
                        <Link href="/portfolio">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="uppercase"
                            >
                                View Portfolio
                            </Button>
                        </Link>
                    </div>
                    <Button size="sm" variant="secondary" className="uppercase">
                        <CiHeart /> Sponsor Project
                    </Button>
                </div>

                {/* Banner Section */}
                <div className="py-20"></div>
            </div>
        </>
    );
};

Landing.layout = (page: React.ReactNode) => (
    <Provider>
        <DefaultLayout>{page}</DefaultLayout>
    </Provider>
);

export default Landing;
