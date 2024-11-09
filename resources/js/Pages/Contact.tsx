import { PortfolioProvider } from "@/Features/Portfolio/Contexts/portfolio-context";
import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, ReactNode } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaStackOverflow, FaTwitter } from "react-icons/fa6";

const Contact = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "test@hasib.dev",
        name: "Hasib",
        message: "Hello World",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("contact.store"), {
            onFinish: () => reset("message"),
        });
    };

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <div id="contact-section">
                {/* <!-- Header --> */}
                <div className="p-10 bg-gray-10 dark:bg-gray-800">
                    <div className="text-center">
                        <h2 className="text-3xl">Contact</h2>
                        <p className="my-3">
                            Interested in hiring me for your project or just
                            want to say hi? You can fill in the contact form
                            below <br /> or send me an email to{" "}
                            <a
                                href="mailto:info@hasib.dev"
                                className="text-primary font-semibold"
                            >
                                info@hasib.dev
                            </a>
                        </p>

                        <p>
                            Want to get connected? Follow me on the social
                            channels below.
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
                            href="https://www.linkedin.com/in/hasibur"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaLinkedinIn />
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
                    <form onSubmit={submit} className="lg:w-3/5 mx-auto">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="px-3 py-2 rounded border border-gray-400"
                                required
                                autoFocus
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="px-3 py-2 rounded border border-gray-400"
                                required
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
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
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-10 py-2 font-semibold rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

Contact.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <DefaultLayout>{page}</DefaultLayout>
    </PortfolioProvider>
);

export default Contact;
