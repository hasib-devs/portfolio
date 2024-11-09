import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useState, useContext } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Link, Head } from "@inertiajs/react";
import { FaTwitter, FaFacebookF, FaGithub, FaStackOverflow, FaUser, FaLaptopCode, FaFileAlt, FaBlog, FaEnvelope, FaAdjust, FaArrowCircleRight } from "react-icons/fa";
import { FaJs, FaReact, FaVuejs, FaNodeJs, FaNpm, FaPhp, FaLaravel, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa6";
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
              href: "/",
              className: "p-1 mb-1 hover:text-primary-dark transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-8 text-center", children: /* @__PURE__ */ jsx(FaLaptopCode, {}) }),
                /* @__PURE__ */ jsx("span", { className: "text-md font-semibold", children: "Portfolio" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/",
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
              href: "/",
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
              href: "/",
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
const AboutSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "p-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-10/12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold tracking-wide", children: "Hasibur Rahman" }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-thin mt-2 mb-6", children: "Full-stack web developer" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
        "Starting out at the age of 17 I never stopped learning new programming skills and languages. Early I started creating websites for curiosity and just for fun as well. And then I became a good web designer with ",
        /* @__PURE__ */ jsx("strong", { children: "HTML" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "CSS" }),
        ", and ",
        /* @__PURE__ */ jsx("strong", { children: "jQuery" }),
        " (jQuery was a hero!). Besides Front-end development, I also explored Backend and other non-web-only technologies. This passion has since lasted and led to my decision to work as a freelance web developer. The success and fun I have in this job are immense and really keep that passion burningly alive."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:flex mt-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-7/12 pr-8 mt-5", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
          "Starting web development on the frontend using modern frameworks like (",
          /* @__PURE__ */ jsx("strong", { children: "ReactJS" }),
          " and",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "VueJS" }),
          ") I also became more and more of a Backend developer with (Node JS and Laravel) frameworks. I love both worlds nowadays!"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
          "Not only developing, but I'm also very good at deploying web applications into Linux servers. And I have a very good understanding of ",
          /* @__PURE__ */ jsx("strong", { children: "CI/CD" }),
          " pipeline with Github Actions and Gitlab Runner."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Besides Developing and deploying, I explored a little bit of Robotics staff. That's why I bought an Arduino learning kit online. When I feel boring to code then, why not make a Robot!" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Want to know how I may help your project? Check out my project",
          "and online"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              className: "px-5  items-center py-2 rounded inline-flex text-white bg-primary hover:bg-primary-dark transition-colors duration-300",
              href: "/portfolio",
              children: [
                /* @__PURE__ */ jsx(FaArrowCircleRight, { className: "mr-2" }),
                /* @__PURE__ */ jsx("span", { children: "View Portfolio" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              className: "px-5 py-2 rounded items-center inline-flex text-white bg-gray-700 hover:bg-gray-800 transition-colors duration-300",
              href: "/resume",
              children: [
                /* @__PURE__ */ jsx(FaFileAlt, { className: "mr-2" }),
                /* @__PURE__ */ jsx("span", { children: "View Resume" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:w-5/12 p-2 my-10 md:my-0", children: /* @__PURE__ */ jsx("img", { src: "/images/DSC_8784.JPG", alt: "Hasibur Rahman" }) })
    ] })
  ] });
};
const FlutterIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className,
      children: [
        /* @__PURE__ */ jsx("polygon", { fill: "#40c4ff", points: "26,4 6,24 12,30 38,4" }),
        /* @__PURE__ */ jsx("polygon", { fill: "#40c4ff", points: "38,22 27,33 21,27 26,22" }),
        /* @__PURE__ */ jsx(
          "rect",
          {
            width: "8.485",
            height: "8.485",
            x: "16.757",
            y: "28.757",
            fill: "#03a9f4",
            transform: "rotate(-45.001 21 33)"
          }
        ),
        /* @__PURE__ */ jsx("polygon", { fill: "#01579b", points: "38,44 26,44 21,39 27,33" }),
        /* @__PURE__ */ jsx("polygon", { fill: "#084994", points: "21,39 30,36 27,33" })
      ]
    }
  );
};
const GulpIcon = ({ className }) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "gulp",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 512",
      "data-fa-i2svg": "",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M209.8 391.1l-14.1 24.6-4.6 80.2c0 8.9-28.3 16.1-63.1 16.1s-63.1-7.2-63.1-16.1l-5.8-79.4-14.9-25.4c41.2 17.3 126 16.7 165.6 0zm-196-253.3l13.6 125.5c5.9-20 20.8-47 40-55.2 6.3-2.7 12.7-2.7 18.7.9 5.2 3 9.6 9.3 10.1 11.8 1.2 6.5-2 9.1-4.5 9.1-3 0-5.3-4.6-6.8-7.3-4.1-7.3-10.3-7.6-16.9-2.8-6.9 5-12.9 13.4-17.1 20.7-5.1 8.8-9.4 18.5-12 28.2-1.5 5.6-2.9 14.6-.6 19.9 1 2.2 2.5 3.6 4.9 3.6 5 0 12.3-6.6 15.8-10.1 4.5-4.5 10.3-11.5 12.5-16l5.2-15.5c2.6-6.8 9.9-5.6 9.9 0 0 10.2-3.7 13.6-10 34.7-5.8 19.5-7.6 25.8-7.6 25.8-.7 2.8-3.4 7.5-6.3 7.5-1.2 0-2.1-.4-2.6-1.2-1-1.4-.9-5.3-.8-6.3.2-3.2 6.3-22.2 7.3-25.2-2 2.2-4.1 4.4-6.4 6.6-5.4 5.1-14.1 11.8-21.5 11.8-3.4 0-5.6-.9-7.7-2.4l7.6 79.6c2 5 39.2 17.1 88.2 17.1 49.1 0 86.3-12.2 88.2-17.1l10.9-94.6c-5.7 5.2-12.3 11.6-19.6 14.8-5.4 2.3-17.4 3.8-17.4-5.7 0-5.2 9.1-14.8 14.4-21.5 1.4-1.7 4.7-5.9 4.7-8.1 0-2.9-6-2.2-11.7 2.5-3.2 2.7-6.2 6.3-8.7 9.7-4.3 6-6.6 11.2-8.5 15.5-6.2 14.2-4.1 8.6-9.1 22-5 13.3-4.2 11.8-5.2 14-.9 1.9-2.2 3.5-4 4.5-1.9 1-4.5.9-6.1-.3-.9-.6-1.3-1.9-1.3-3.7 0-.9.1-1.8.3-2.7 1.5-6.1 7.8-18.1 15-34.3 1.6-3.7 1-2.6.8-2.3-6.2 6-10.9 8.9-14.4 10.5-5.8 2.6-13 2.6-14.5-4.1-.1-.4-.1-.8-.2-1.2-11.8 9.2-24.3 11.7-20-8.1-4.6 8.2-12.6 14.9-22.4 14.9-4.1 0-7.1-1.4-8.6-5.1-2.3-5.5 1.3-14.9 4.6-23.8 1.7-4.5 4-9.9 7.1-16.2 1.6-3.4 4.2-5.4 7.6-4.5.6.2 1.1.4 1.6.7 2.6 1.8 1.6 4.5.3 7.2-3.8 7.5-7.1 13-9.3 20.8-.9 3.3-2 9 1.5 9 2.4 0 4.7-.8 6.9-2.4 4.6-3.4 8.3-8.5 11.1-13.5 2-3.6 4.4-8.3 5.6-12.3.5-1.7 1.1-3.3 1.8-4.8 1.1-2.5 2.6-5.1 5.2-5.1 1.3 0 2.4.5 3.2 1.5 1.7 2.2 1.3 4.5.4 6.9-2 5.6-4.7 10.6-6.9 16.7-1.3 3.5-2.7 8-2.7 11.7 0 3.4 3.7 2.6 6.8 1.2 2.4-1.1 4.8-2.8 6.8-4.5 1.2-4.9.9-3.8 26.4-68.2 1.3-3.3 3.7-4.7 6.1-4.7 1.2 0 2.2.4 3.2 1.1 1.7 1.3 1.7 4.1 1 6.2-.7 1.9-.6 1.3-4.5 10.5-5.2 12.1-8.6 20.8-13.2 31.9-1.9 4.6-7.7 18.9-8.7 22.3-.6 2.2-1.3 5.8 1 5.8 5.4 0 19.3-13.1 23.1-17 .2-.3.5-.4.9-.6.6-1.9 1.2-3.7 1.7-5.5 1.4-3.8 2.7-8.2 5.3-11.3.8-1 1.7-1.6 2.7-1.6 2.8 0 4.2 1.2 4.2 4 0 1.1-.7 5.1-1.1 6.2 1.4-1.5 2.9-3 4.5-4.5 15-13.9 25.7-6.8 25.7.2 0 7.4-8.9 17.7-13.8 23.4-1.6 1.9-4.9 5.4-5 6.4 0 1.3.9 1.8 2.2 1.8 2 0 6.4-3.5 8-4.7 5-3.9 11.8-9.9 16.6-14.1l14.8-136.8c-30.5 17.1-197.6 17.2-228.3.2zm229.7-8.5c0 21-231.2 21-231.2 0 0-8.8 51.8-15.9 115.6-15.9 9 0 17.8.1 26.3.4l12.6-48.7L228.1.6c1.4-1.4 5.8-.2 9.9 3.5s6.6 7.9 5.3 9.3l-.1.1L185.9 74l-10 40.7c39.9 2.6 67.6 8.1 67.6 14.6zm-69.4 4.6c0-.8-.9-1.5-2.5-2.1l-.2.8c0 1.3-5 2.4-11.1 2.4s-11.1-1.1-11.1-2.4c0-.1 0-.2.1-.3l.2-.7c-1.8.6-3 1.4-3 2.3 0 2.1 6.2 3.7 13.7 3.7 7.7.1 13.9-1.6 13.9-3.7z"
        }
      )
    }
  );
};
const ScssIcon = ({ className }) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: classNames(className),
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fab",
      "data-icon": "sass",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 640 512",
      "data-fa-i2svg": "",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"
        }
      )
    }
  );
};
const WebpackIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      width: "45px",
      height: "45px",
      className,
      children: [
        /* @__PURE__ */ jsx("polygon", { fill: "#eceff1", points: "24,4 7,14 7,34 24,44 41,34 41,14" }),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            fill: "#0277bd",
            points: "23.5,24.5 23.5,33.5 15,29 15,19.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            fill: "#0277bd",
            points: "24.5,24.5 24.5,33.5 33,29 33,19.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            fill: "#0277bd",
            points: "24,23.5 15.5,18.5 24,14 32.5,18.5"
          }
        ),
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx(
            "polygon",
            {
              fill: "#81d4fa",
              points: "23.5,7 23.5,13 14.5,18 9.5,15"
            }
          ),
          /* @__PURE__ */ jsx(
            "polygon",
            {
              fill: "#81d4fa",
              points: "23.5,41 23.5,35 14.5,30 9.5,33"
            }
          ),
          /* @__PURE__ */ jsx("polygon", { fill: "#81d4fa", points: "14,19 9,16 9,32 14,29" }),
          /* @__PURE__ */ jsx(
            "polygon",
            {
              fill: "#81d4fa",
              points: "24.5,7 24.5,13 33.5,18 38.5,15"
            }
          ),
          /* @__PURE__ */ jsx(
            "polygon",
            {
              fill: "#81d4fa",
              points: "24.5,41 24.5,35 33.5,30 38.5,33"
            }
          ),
          /* @__PURE__ */ jsx("polygon", { fill: "#81d4fa", points: "34,19 39,16 39,32 34,29" })
        ] })
      ]
    }
  );
};
const OverviewSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "p-14", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-3xl", children: "What I do" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
      "I have more than 5 year's experience building website for clients all over the world. ",
      /* @__PURE__ */ jsx("br", {}),
      " Below is a quick overview of my main technical skill sets and technologies I use."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(FaJs, { className: "text-3xl text-[#f7df1e]" }) }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg my-3 font-semibold", children: "JavaScript" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "JavaScript is my first choice. I know JavaScript more than any other programming language. And I love JavaScript because JavaScript is everywhere. We can make both frontend and backend in one language. And also native-like mobile apps. Not only that, with the help of Node.js we can even use JS into IoT devices like Raspberry pi or Arduino.",
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FaReact, { className: "text-3xl text-[#62d4fa]" }),
          /* @__PURE__ */ jsx(FaVuejs, { className: "text-3xl text-[#41b883]" })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg my-3 font-semibold", children: "React & Vue" }),
        /* @__PURE__ */ jsx("p", { children: "To be honest, I like Vue.js over React because of the way it separates the logic in a component and is also very easy to manage global state. However, React was the first front-end framework I learned. But, I love both of those including jQuery." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(FaNodeJs, { className: "text-3xl text-[#3c873a]" }) }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg my-3 font-semibold", children: "Node JS" }),
        /* @__PURE__ */ jsx("p", { children: "Now, this is the point where Javascript achieves superpower. We can build both frontend and backend in a single language. And also can be installed in some of the popular IoT devices like Raspberry Pi or Arduino. Emagine One day we will program Javascript code in robotics." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FaNpm, { className: "text-3xl text-[#cb3837]" }),
          /* @__PURE__ */ jsx(WebpackIcon, { className: "text-3xl" }),
          /* @__PURE__ */ jsx(GulpIcon, { className: "w-4 text-[#cf4647]" })
        ] }) }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg my-3 font-semibold", children: "Npm, Webpack & Gulp" }),
        /* @__PURE__ */ jsx("p", { children: "The package manager for Node JS is very good. And Webpack and Gulp is the most popular JavaScript bundler now a day. Both have very different and manageable ways to build production-ready and also developer-friendly workflow." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FaPhp, { className: "text-3xl text-[#8892be]" }),
          /* @__PURE__ */ jsx(FaLaravel, { className: "text-3xl text-[#ff2d20]" })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg my-3 font-semibold", children: "PHP & Laravel" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Besides frontend design and development I also explored the backend. But, first I learned the way Node.js server works. The MVC design pattern authentication and authorization system. Connecting and managing Database Etc. Then I switched to PHP Laravel framework and fallen in love with it.",
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FaHtml5, { className: "text-3xl text-[#e34f26]" }),
          /* @__PURE__ */ jsx(FaCss3, { className: "text-3xl text-[#264de4]" }),
          /* @__PURE__ */ jsx(ScssIcon, { className: "w-10" })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg my-3 font-semibold", children: "HTML, CSS & SCSS" }),
        /* @__PURE__ */ jsx("p", { children: "HTML and CSS are essential for web design and development. I have very strong understanding of html, css and SCSS preprocessor, flexbox, gridlayout and animation as well. In real product application We mostly use Bootstrap CSS or Tailwind CSS." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx(FlutterIcon, { className: "w-8" }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg my-3 font-semibold", children: "Mobile Apps" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "I'm a front-end developer first, so I also explore some of the famous mobile app frameworks like Ionic, React Native and Flutter. I personally like Flutter.",
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx(FaGitAlt, { className: "text-3xl text-[#f34f29]" }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg my-3 font-semibold", children: "Git, Github & Gitlab" }),
        /* @__PURE__ */ jsx("p", { children: "I always use Git version control to manage and deploy my application. And also I have pretty good experience with Github, Gitlab and Bitbucket." })
      ] })
    ] }) })
  ] });
};
const Home = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Home" }) }),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx("div", { className: "border-b border-gray-400 mx-auto w-[95%]" }),
    /* @__PURE__ */ jsx(OverviewSection, {})
  ] });
};
Home.layout = (page) => /* @__PURE__ */ jsx(PortfolioProvider, { children: /* @__PURE__ */ jsx(DefaultLayout, { children: page }) });
export {
  Home as default
};
