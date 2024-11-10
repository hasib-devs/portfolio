import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Link } from "@inertiajs/react";
import { FaTwitter, FaFacebookF, FaGithub, FaStackOverflow, FaUser, FaFileAlt, FaBlog, FaEnvelope, FaAdjust } from "react-icons/fa";
import { createContext, useState, useContext } from "react";
const PortfolioContext = createContext(
  void 0
);
const PortfolioProvider = ({
  children,
  value
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }
  const contextValue = {
    isDarkMode,
    toggleDarkMode,
    isSidebarOpen,
    setIsSidebarOpen,
    ...value
  };
  return /* @__PURE__ */ jsx(PortfolioContext.Provider, { value: contextValue, children });
};
function classNames(...inputs) {
  return twMerge(clsx(inputs));
}
const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === void 0) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
const SidebarDrawer = ({}) => {
  const { isDarkMode, isSidebarOpen, setIsSidebarOpen, toggleDarkMode } = usePortfolio();
  return /* @__PURE__ */ jsxs(
    "header",
    {
      id: "sidebar_header",
      className: classNames(
        "lg:relative lg:translate-x-0 absolute transform custom-scrollbar",
        {
          "-translate-x-full": !isSidebarOpen
        }
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl text-center mt-2 mb-6 font-extrabold tracking-wide", children: "Hasib" }),
          /* @__PURE__ */ jsx("div", { className: "rounded-full overflow-hidden w-36 h-36 mx-auto", children: /* @__PURE__ */ jsx("img", { src: "/images/DSC_8788.jpg", alt: "Hasibur Rahman" }) }),
          /* @__PURE__ */ jsxs("p", { className: "text-center mt-6", children: [
            "I am a professional full-stack web developer since 2017. I can design and develop any type of website, web-based application using backend ",
            /* @__PURE__ */ jsx("strong", { children: "Node JS" }),
            " and frontend ",
            /* @__PURE__ */ jsx("strong", { children: "VueJS" }),
            " or ",
            /* @__PURE__ */ jsx("strong", { children: "ReactJS" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center my-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://twitter.com/Hasibur40252192",
                target: "_blank",
                className: "social-icon",
                children: /* @__PURE__ */ jsx(FaTwitter, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.facebook.com/Hasibur.Rahman.web",
                target: "_blank",
                className: "social-icon",
                children: /* @__PURE__ */ jsx(FaFacebookF, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://github.com/hasib-devs",
                target: "_blank",
                className: "social-icon",
                children: /* @__PURE__ */ jsx(FaGithub, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://stackoverflow.com/users/16370387/hasibur-rahman",
                target: "_blank",
                className: "social-icon",
                children: /* @__PURE__ */ jsx(FaStackOverflow, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-b border-gray-400 w-11/12 my-5" }),
        /* @__PURE__ */ jsxs("nav", { className: "flex flex-col text-gray-100", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/",
              className: "p-1 mb-1 hover:text-primary-dark transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-8 text-center", children: /* @__PURE__ */ jsx(FaUser, {}) }),
                /* @__PURE__ */ jsx("span", { className: "text-md font-semibold", children: "About Me" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/resume",
              className: "p-1 mb-1 hover:text-primary-dark transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-8 text-center", children: /* @__PURE__ */ jsx(FaFileAlt, {}) }),
                /* @__PURE__ */ jsx("span", { className: "text-md font-semibold", children: "Resume" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/blog",
              className: "p-1 mb-1 hover:text-primary-dark transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-8 text-center", children: /* @__PURE__ */ jsx(FaBlog, {}) }),
                /* @__PURE__ */ jsx("span", { className: "text-md font-semibold", children: "Blog" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/contact",
              className: "p-1 mb-1 hover:text-primary-dark transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-8 text-center", children: /* @__PURE__ */ jsx(FaEnvelope, {}) }),
                /* @__PURE__ */ jsx("span", { className: "text-md font-semibold", children: "Contact" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-b border-gray-400 w-11/12 my-5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center", children: [
            /* @__PURE__ */ jsx(FaAdjust, {}),
            /* @__PURE__ */ jsxs("span", { className: "text-md font-semibold", children: [
              isDarkMode ? "Light" : "Dark",
              " Mode"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center mt-4 cursor-pointer", children: /* @__PURE__ */ jsx(
            "div",
            {
              onClick: toggleDarkMode,
              className: classNames(
                "w-14 h-7 flex items-center rounded-full mx-3 px-1",
                {
                  "bg-primary": isDarkMode,
                  "bg-navy": !isDarkMode
                }
              ),
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: classNames(
                    "bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300",
                    {
                      "translate-x-7": isDarkMode
                    }
                  )
                }
              )
            }
          ) })
        ] })
      ]
    }
  );
};
const DefaultLayout = ({ children }) => {
  const { isDarkMode, isSidebarOpen, setIsSidebarOpen } = usePortfolio();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: classNames("flex h-screen overflow-hidden", {
        dark: isDarkMode
      }),
      children: [
        /* @__PURE__ */ jsx(SidebarDrawer, {}),
        isSidebarOpen && /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => setIsSidebarOpen(false),
            className: "bg-gray-900 bg-opacity-90 fixed w-screen h-screen lg:hidden"
          }
        ),
        /* @__PURE__ */ jsxs("main", { className: "main-content overflow-y-auto custom-scrollbar", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:hidden py-3 px-6 bg-primary dark:bg-navy flex items-center text-white", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsSidebarOpen(!isSidebarOpen),
                className: "p-2 ml-2 bg-gray-100 bg-opacity-10 rounded-full"
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-center text-2xl flex-grow ", children: "Hasibur Rahman" })
          ] }),
          children,
          /* @__PURE__ */ jsx("footer", { className: "p-6", children: /* @__PURE__ */ jsxs("p", { className: "text-center", children: [
            " ",
            "Template Copyright ©",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "3rd Wave Media" }),
            " "
          ] }) })
        ] })
      ]
    }
  ) });
};
export {
  DefaultLayout as D,
  PortfolioProvider as P,
  classNames as c
};
