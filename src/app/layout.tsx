import "@coinbase/onchainkit/styles.css";
import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/modules/Providers";
import Navbar from "@/modules/NavBar";
import ModalRender from "@/components/Modal";

export const metadata: Metadata = {
    title: "ETHBangkok",
    description: "ETHBangkok",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col items-center w-full bg-background dark">
                <Providers>
                    <Navbar />
                    <ModalRender />
                    <div className="mt-[70px]">{children}</div>
                </Providers>
            </body>
        </html>
    );
}
