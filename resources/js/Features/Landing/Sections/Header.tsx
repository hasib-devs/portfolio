import { Button } from "@/Components/Shared/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/Shared/DropdownMenu";
import { Link } from "@inertiajs/react";
import { FaChevronDown } from "react-icons/fa6";

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
                    <div className="flex-1 flex gap-1.5 items-center justify-end">
                        <Link href="/portfolio">
                            <Button variant={"secondary"} size="sm">
                                PORTFOLIO
                            </Button>
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="gray" size="sm">
                                    <FaChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        Item One
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Item Two
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Item Three
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
