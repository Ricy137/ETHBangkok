import React, {type ComponentProps} from "react";
import cx from "clsx";
import Link from "next/link";
import {NavItemProps} from ".";

const NavLink: React.FC<NavItemProps> = ({to, children, curPath}) => (
    <li
        className={cx("relative flex items-center h-[48px]", {
            ["nav-link-mobile--active"]: curPath?.startsWith(
                to.toLocaleLowerCase() as string
            ),
        })}
    >
        <Link
            className="flex items-center h-full text-#F1F1F3 decoration-none select-none"
            href={to}
        >
            {children}
        </Link>
    </li>
);

const Mobile: React.FC<{open: boolean; curPath: string}> = ({
    open,
    curPath,
}) => {
    return (
        <div
            className={cx(
                "nav-mobile sm:display-none absolute w-full h-[calc(100vh-60px)] left-0 top-[60px] bg-[#303549e0] transition-transform duration-[300] z-50 -translate-y-[100vh]",
                open && "translate-y-[0px]"
            )}
        >
            <p className="mt-[32px] pl-[40px] text-[12px] text-[#A5A8B6] font-semibold">
                Menu
            </p>
            <ul className="pl-40px flex flex-col gap-12px mt-8px text-22px font-semibold">
                <NavLink title="Home" curPath={curPath} to={"/"} id="home-nav">
                    Dashboard
                </NavLink>
                <NavLink
                    title="Merchant"
                    curPath={curPath}
                    to={"/merchant"}
                    id="merchant-nav"
                >
                    Merchant
                </NavLink>
                <NavLink
                    title="Checkout"
                    curPath={curPath}
                    to={"/checkout"}
                    id="checkout-nav"
                >
                    Checkout
                </NavLink>
            </ul>
        </div>
    );
};

export default Mobile;
