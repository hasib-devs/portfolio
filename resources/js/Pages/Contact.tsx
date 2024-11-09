import { PortfolioProvider } from "@/Features/Portfolio/Contexts/portfolio-context";
import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import { ReactNode } from "react";
import {
    FaFacebookF,
    FaGithubAlt,
    FaStackOverflow,
    FaTwitter,
} from "react-icons/fa6";

const Contact = () => {
    return (
        <div id="contact-section">
            {/* <!-- Header --> */}
            <div className="p-10 bg-gray-10 dark:bg-gray-800">
                <div className="text-center">
                    <h2 className="text-3xl">Contact</h2>
                    <p className="my-3">
                        Interested in hiring me for your project or just want to
                        say hi? You can fill in the contact form below <br /> or
                        send me an email to hasib.active@gmail.com
                    </p>

                    <p>
                        Want to get connected? Follow me on the social channels
                        below.
                    </p>
                </div>

                {/* <!-- Social Icons --> */}
                <div className="flex justify-center items-center my-4">
                    <a
                        href="https://twitter.com/Hasibur40252192"
                        target="_blank"
                        className="social-icon"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href="https://www.facebook.com/Hasibur.Rahman.web"
                        target="_blank"
                        className="social-icon"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://github.com/hasibDev"
                        target="_blank"
                        className="social-icon"
                    >
                        <FaGithubAlt />
                    </a>

                    <a
                        href="https://stackoverflow.com/users/16370387/hasibur-rahman"
                        target="_blank"
                        className="social-icon"
                    >
                        <FaStackOverflow />
                    </a>
                </div>
            </div>

            {/* <!-- Main content --> */}
            <div className="p-10">
                <h3 className="text-2xl mb-6 text-center">Get In Touch</h3>
                <form className="lg:w-3/5 mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="px-3 py-2 rounded border border-gray-400"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="px-3 py-2 rounded border border-gray-400"
                            required
                        />
                    </div>

                    <div className="mt-5">
                        <textarea
                            name="message"
                            cols={30}
                            rows={10}
                            className="w-full px-3 py-2 rounded border border-gray-400"
                            placeholder="Enter Your message"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="px-10 py-2 rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

Contact.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <DefaultLayout>{page}</DefaultLayout>
    </PortfolioProvider>
);

export default Contact;
