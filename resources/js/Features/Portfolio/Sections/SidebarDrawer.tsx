const SidebarDrawer = () => {
    return (
        <header
            id="sidebar_header"
            className="lg:relative lg:translate-x-0 absolute transform custom-scrollbar "
            // :class="{ '-translate-x-full': !isSidebarOpen }"
        >
            <div className="">
                <h3 className="text-2xl text-center mt-2 mb-6 font-bold tracking-wide">
                    Hasib
                </h3>

                <div className="rounded-full overflow-hidden w-36 h-36 mx-auto">
                    <img src="/images/DSC_8788.jpg" alt="Hasibur Rahman" />
                </div>

                <p className="text-center mt-6">
                    I am a professional full-stack web developer since 2018. I
                    can design and develop any type of website, web-based
                    application using backend Node JS and frontend VueJS or
                    ReactJS.
                </p>

                <div className="flex justify-center items-center my-4">
                    <a
                        href="https://twitter.com/Hasibur40252192"
                        target="_blank"
                        className="social-icon"
                    >
                        {/* <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon> */}
                    </a>

                    <a
                        href="https://www.facebook.com/Hasibur.Rahman.web"
                        target="_blank"
                        className="social-icon"
                    >
                        {/* <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon> */}
                    </a>

                    <a
                        href="https://github.com/hasibDev"
                        target="_blank"
                        className="social-icon"
                    >
                        {/* <font-awesome-icon :icon="['fab', 'github-alt']"></font-awesome-icon> */}
                    </a>

                    <a
                        href="https://stackoverflow.com/users/16370387/hasibur-rahman"
                        target="_blank"
                        className="social-icon"
                    >
                        {/* <font-awesome-icon
            :icon="['fab', 'stack-overflow']"
          ></font-awesome-icon> */}
                    </a>
                </div>
            </div>

            <div className="border-b border-gray-400 w-11/12 my-5"></div>

            <nav className="flex flex-col text-gray-100">
                {/* <nuxt-link
        to="/"
        class="p-1 mb-1 hover:text-primary-dark transition-colors duration-300"
      >
        <span className="inline-block w-8 text-center">
          <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
        </span>
        <span className="text-md font-semibold">About Me</span>
      </nuxt-link> */}
                {/* <nuxt-link
        to="/portfolio"
        class="p-1 mb-1 hover:text-primary-dark transition-colors duration-300"
      >
        <span className="inline-block w-8 text-center">
          <font-awesome-icon :icon="['fas', 'laptop-code']"></font-awesome-icon>
        </span>
        <span className="text-md font-semibold">Portfolio</span>
      </nuxt-link> */}
            </nav>

            <div className="border-b border-gray-400 w-11/12 my-5"></div>
        </header>
    );
};

export default SidebarDrawer;
