import { Provider } from "@/Contexts/global-context";
import DefaultLayout from "@/Features/Landing/Layouts/DefaultLayout";
import React from "react";

const Changelog = () => {
    return (
        <div className="container">
            <h1 className="text-5xl font-bold">Changelog</h1>
        </div>
    );
};

Changelog.layout = (page: React.ReactNode) => (
    <Provider>
        <DefaultLayout>{page}</DefaultLayout>
    </Provider>
);

export default Changelog;
