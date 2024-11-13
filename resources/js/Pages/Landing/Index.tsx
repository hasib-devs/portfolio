import { Provider } from "@/Contexts/global-context";
import DefaultLayout from "@/Features/Landing/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className="container">
                <p>Hasib</p>
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
