import { jsx } from "react/jsx-runtime";
import { P as PortfolioProvider, D as DefaultLayout } from "./DefaultLayout-DMESMh7a.js";
import "clsx";
import "tailwind-merge";
import "@inertiajs/react";
import "react-icons/fa";
import "react";
const Blog = () => {
  return /* @__PURE__ */ jsx("div", { children: "Blog" });
};
Blog.layout = (page) => /* @__PURE__ */ jsx(PortfolioProvider, { children: /* @__PURE__ */ jsx(DefaultLayout, { children: page }) });
export {
  Blog as default
};
