import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { c as classNames, P as PortfolioProvider, D as DefaultLayout } from "./DefaultLayout-DMESMh7a.js";
import { useForm, Head } from "@inertiajs/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaStackOverflow } from "react-icons/fa6";
import { toast, Flip } from "react-toastify";
import "clsx";
import "tailwind-merge";
import "react";
const Contact = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    name: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending message...", {
      position: "bottom-right",
      closeButton: true,
      draggable: true,
      hideProgressBar: true,
      transition: Flip
    });
    post(route("contact.store"), {
      onSuccess: () => {
        toast.update(toastId, {
          render: "Thank you for your message. I will get back to you soon.",
          type: "success",
          isLoading: false,
          autoClose: 3e3,
          hideProgressBar: true,
          transition: Flip
        });
        reset("message");
      },
      onError: (errors2) => {
        toast.update(toastId, {
          render: "Failed to send message. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3e3,
          hideProgressBar: true,
          transition: Flip
        });
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Contact" }) }),
    /* @__PURE__ */ jsxs("div", { id: "contact-section", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-10 bg-gray-10 dark:bg-gray-800", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl", children: "Contact" }),
          /* @__PURE__ */ jsxs("p", { className: "my-3", children: [
            "Interested in hiring me for your project or just want to say hi? You can fill in the contact form below ",
            /* @__PURE__ */ jsx("br", {}),
            " or 'send' me an email to",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:info@hasib.dev",
                className: "text-primary font-semibold",
                children: "info@hasib.dev"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Want to get connected? Follow me on the social channels below." })
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
              href: "https://www.linkedin.com/in/hasibur",
              target: "_blank",
              className: "social-icon",
              children: /* @__PURE__ */ jsx(FaLinkedinIn, {})
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
      /* @__PURE__ */ jsxs("div", { className: "p-10", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl mb-6 text-center", children: "Get In Touch" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "lg:w-3/5 mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  className: classNames(
                    "px-3 py-2 rounded w-full border border-gray-400",
                    {
                      "border-red-500": errors.name
                    }
                  ),
                  required: true,
                  autoFocus: true,
                  value: data.name,
                  onChange: (e) => setData("name", e.target.value)
                }
              ),
              errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm col-span-2 mt-1", children: errors.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  className: classNames(
                    "px-3 py-2 rounded border w-full border-gray-400",
                    {
                      "border-red-500": errors.email
                    }
                  ),
                  required: true,
                  value: data.email,
                  onChange: (e) => setData("email", e.target.value)
                }
              ),
              errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm col-span-2 mt-1", children: errors.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col", children: [
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "message",
                cols: 30,
                rows: 10,
                className: classNames(
                  "px-3 py-2 rounded border w-full border-gray-400",
                  {
                    "border-red-500": errors.message
                  }
                ),
                placeholder: "Enter Your message",
                required: true,
                value: data.message,
                onChange: (e) => setData("message", e.target.value)
              }
            ),
            errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.message })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "px-10 py-2 mt-5 font-semibold rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300",
              disabled: processing,
              children: processing ? `Sending...` : "Send"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
Contact.layout = (page) => /* @__PURE__ */ jsx(PortfolioProvider, { children: /* @__PURE__ */ jsx(DefaultLayout, { children: page }) });
export {
  Contact as default
};
