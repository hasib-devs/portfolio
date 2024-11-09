import { classNames } from "@/Utils";
import React, { FC, useState } from "react";
import SidebarDrawer from "../Sections/SidebarDrawer";

type Props = {
    children: React.ReactNode;
};

const DefaultLayout: FC<Props> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }
    return (
        <>
            <div
                className={classNames("flex h-screen overflow-hidden", {
                    dark: isDarkMode,
                })}
            >
                {/* Sidebar */}
                <SidebarDrawer
                    toggleDarkMode={toggleDarkMode}
                    isDarkMode={isDarkMode}
                    isSidebarOpen={isSidebarOpen}
                />

                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        onClick={() => setIsSidebarOpen(false)}
                        className="bg-gray-900 bg-opacity-90 fixed w-screen h-screen lg:hidden"
                    ></div>
                )}

                <main className="main-content overflow-y-auto custom-scrollbar">
                    <div className="lg:hidden py-3 px-6 bg-primary dark:bg-navy flex items-center text-white">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 ml-2 bg-gray-100 bg-opacity-10 rounded-full"
                        >
                            {/* <menu-icon></menu-icon> */}
                        </button>
                        <h1 className="text-center text-2xl flex-grow ">
                            Hasibur Rahman
                        </h1>
                    </div>

                    {children}

                    <footer className="p-6">
                        <p className="text-center">
                            {" "}
                            Template Copyright ©{" "}
                            <span className="text-primary">
                                3rd Wave Media
                            </span>{" "}
                        </p>
                    </footer>
                </main>
            </div>
        </>
    );
};

export default DefaultLayout;
