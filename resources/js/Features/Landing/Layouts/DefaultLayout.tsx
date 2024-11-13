import { useGlobalContext } from "@/Hooks/contexts";
import { classNames } from "@/Utils";
import React, { FC } from "react";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";

type Props = {
    children: React.ReactNode;
};

const DefaultLayout: FC<Props> = ({ children }) => {
    const { isDarkMode } = useGlobalContext();
    return (
        <>
            <div
                className={classNames({
                    dark: isDarkMode,
                })}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default DefaultLayout;
