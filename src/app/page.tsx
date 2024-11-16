"use client";
import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/assets/banner.png";
import TextImg from "@/assets/text.png";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen w-full text-black">
            <header className="relative pt-2 pr-4 grid grid-cols-[3fr_1fr] justify-items-center items-center">
                <Image
                    src={BannerImg}
                    alt=""
                    className="relative left-[-10%] w-[85%] z-0"
                />
                <div className="relative flex flex-col gap-24px">
                    <Image src={TextImg} alt="" />
                    <Link
                        href="merchant"
                        className="cursor-pointer ock-bg-primary active:bg-[var(--ock-bg-primary-active)] hover:bg-[var(--ock-bg-primary-hover)] ock-border-radius ock-font-family font-semibold leading-normal ock-text-inverse inline-flex min-w-[153px] items-center justify-center px-4 py-3"
                    >
                        Here
                    </Link>
                </div>
            </header>
        </div>
    );
}
