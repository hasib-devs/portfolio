import { useGlobalContext } from "@/Hooks/contexts";
import { classNames } from "@/Utils";
import React, { FC } from "react";

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
                <main>{children}</main>
            </div>
        </>
    );
};

export default DefaultLayout;
