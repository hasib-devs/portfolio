import { Link } from "@inertiajs/react";

const Header = () => {
    return (
        <header>
            <div className="container py-3">
                <div className="flex">
                    <div className="flex-1">
                        <Link href="/" className="text-xl font-bold">
                            <img
                                src="/images/hasib-dev.svg"
                                alt="Hasib.dev"
                                width={150}
                            />
                        </Link>
                    </div>
                    <div className="flex-1 text-right">
                        <Link href="/portfolio" className="mr-4">
                            Portfolio
                        </Link>
                        <Link href="/login" className="mr-4">
                            Login
                        </Link>
                        <Link href="/register">Register</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
