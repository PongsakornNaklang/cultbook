import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await validateRequest();

    if (!session.user) redirect("/login");

    return (
        <SessionProvider session={session}>
            <Navbar />
            <div className="flex min-h-screen flex-col">
                {children}
            </div>
        </SessionProvider>
    );
}