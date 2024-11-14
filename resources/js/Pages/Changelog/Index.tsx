import { Button } from "@/Components/Shared/Button";
import { Provider } from "@/Contexts/global-context";
import DefaultLayout from "@/Features/Landing/Layouts/DefaultLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Changelog = () => {
    return (
        <>
            <Head>
                <title>Changelog - ProfileMe.dev</title>
                <meta
                    name="description"
                    content="All of the changes made to ProfileMe.dev since launch."
                />
            </Head>

            <div className="container pt-5">
                <h1 className="text-5xl font-bold mb-1.5">Changelog</h1>
                <p className="mb-4">
                    All of the changes made to ProfileMe.dev since launch.
                </p>

                <div className="bg-white mb-5 gap-3 rounded-lg items-center p-2.5 flex justify-between">
                    <p className="max-w-[80%]">
                        If you are a developer and would like to contribute to
                        ProfileMe.dev, please visit the GitHub repo and make a
                        pull request.
                    </p>
                    <Link href="/">
                        <Button variant="secondary">
                            <FaGithub /> Visit Github
                        </Button>
                    </Link>
                </div>

                <div className="pt-5">
                    <article className="flex gap-x-6 flex-col md:flex-row gap-y-3 border-b border-light-200 dark:border-dark-600 transition-all duration-150 ease-in-out pb-8 md:pb-0">
                        <div className="w-full md:w-1/4 flex flex-col border-r-0 md:border-r border-light-200 dark:border-dark-600 py-0 md:py-6 transition-all duration-150 ease-in-out">
                            <h3>July 14th 2022 </h3>
                            <p className="text-sm mb-0">
                                Posted by Hasibur Rahman
                            </p>
                        </div>
                        <div className="w-full md:w-3/4 flex flex-col py-0 md:py-6 transition-all duration-150 ease-in-out">
                            <div className="gap-y-4 flex flex-col mb-0"></div>
                            <div className="flex flex-col items-start gap-y-1">
                                {" "}
                            </div>
                            <div>
                                <Button size="sm">New</Button>
                            </div>
                            <p className="text-sm mb-0 mt-1.5">
                                On-load animations added to homepage.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

Changelog.layout = (page: React.ReactNode) => (
    <Provider>
        <DefaultLayout>{page}</DefaultLayout>
    </Provider>
);

export default Changelog;
