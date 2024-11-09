import { createContext, FC, useState } from "react";

type PortfolioContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
};
type PortfolioProviderProps = {
    children: React.ReactNode;
    value?: PortfolioContextType;
};

export const PortfolioContext = createContext<PortfolioContextType | undefined>(
    undefined
);

export const PortfolioProvider: FC<PortfolioProviderProps> = ({
    children,
    value,
}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }

    const contextValue: PortfolioContextType = {
        isDarkMode,
        toggleDarkMode,
        isSidebarOpen,
        setIsSidebarOpen,
        ...value,
    };

    return (
        <PortfolioContext.Provider value={contextValue}>
            {children}
        </PortfolioContext.Provider>
    );
};
