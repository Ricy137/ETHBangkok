"use client";
import {useState, useEffect} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import cx from "clsx";
import Mobile from "./Mobile";

export interface NavItemProps {
    title: string;
    curPath: string;
    to: string;
    id: string;
    children?: React.ReactNode;
}
const NavItem: React.FC<NavItemProps> = ({
    to,
    children,
    curPath,
    id,
    title,
}) => (
    <li
        className={cx(
            "navbar-link relative flex items-center px-[14px] h-full overflow-hidden",
            {["navbar-link--active"]: curPath?.startsWith(to as string)}
        )}
    >
        <Link
            className="flex items-center h-full text-[#F1F1F3] decoration-none select-none"
            href={to}
            id={id}
        >
            {title}
        </Link>
    </li>
);

const Navbar: React.FC = () => {
    const pathName = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(false);
    }, [pathName]);

    return (
        <nav
            className={cx(
                "fixed flex flex-row items-center justify-center w-full h-[70px] bg-[#b1b4f8]"
            )}
        >
            <Mobile
                open={isMobile}
                curPath={pathName === "/" ? "/home" : pathName}
            />
            <div
                className={cx(
                    "flex flex-row justify-between items-center w-11/12 xl:w-[79%] h-full max-w-[1920px] z-[100]"
                )}
            >
                {/* <Link
                    href={`/${lang}`}
                    className="flex flex-row items-center gap-x-[10px] w-[200px] cursor-pointer"
                >
                    <Image src={HystaLogo} width={49} height={49} alt="Hysta" />
                    <Image
                        src={color == "black" ? HystaTxt : HystaTxtB}
                        // className="w-[65px] h-[48px]"
                        className="w-[54px] h-[40px]"
                        width={172}
                        height={118}
                        alt="Hysta Text"
                    />
                </Link> */}
                <div className="hidden lg:flex flex-row justify-center items-center grow">
                    <div className="flex flex-row justify-center gap-x-[42px]">
                        <NavItem
                            title="Home"
                            curPath={pathName}
                            to={"/"}
                            id="home-nav"
                        />
                        <NavItem
                            title="Merchant"
                            curPath={pathName}
                            to={"/merchant"}
                            id="merchant-nav"
                        />
                        <NavItem
                            title="Checkout"
                            curPath={pathName}
                            to={"/checkout"}
                            id="checkout-nav"
                        />
                    </div>
                </div>
                <div className="flex flex-row items-center gap-x-[8px]">
                    <label
                        htmlFor="burger-check"
                        className="sm:hidden flex flex-col w-[35px] h-[26px] cursor-pointer"
                    >
                        <input
                            id="burger-check"
                            type="checkbox"
                            className="hidden"
                            checked={isMobile}
                            onChange={() => setIsMobile(!isMobile)}
                        />
                        <div
                            className={cx(
                                "w-[35px] h-[4px] rounded-[3px] bg-[#000]"
                            )}
                        />
                        <div
                            className={cx(
                                "my-[5px] w-[30px] h-[4px] rounded-[3px] bg-[#000]"
                            )}
                        />
                        <div
                            className={cx(
                                "w-[25px] h-[4px] rounded-[3px] bg-[#000"
                            )}
                        />
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
