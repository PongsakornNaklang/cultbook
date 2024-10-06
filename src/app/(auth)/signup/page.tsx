import { Metadata } from "next";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
import Image from "next/image";
import signupImage from "@/assets/signup-image.jpg";

export const metaData: Metadata = {
    title: "Sign Up",
};

export default async function Page() {
    return (
        <main className="flex h-screen items-center justify-center p-8 bg-white/10">
            <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden backdrop-blur-sm bg-white/40 border rounded-2xl">
                <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
                    <div className="space-y-1 text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-muted-foreground">
                            A new way to connect with your friends and family
                        </p>
                    </div>
                    <div className="space-y-5">
                        <SignUpForm />
                        <Link href="/login" className="block text-center hover:underline mt-4">
                            Already have an account? Log in
                        </Link></div>
                </div>
                <Image
                    src={signupImage}
                    alt="A person sitting on a bench with a laptop"
                    className="hidden w-1/2 object-cover md:block"
                />
            </div>
        </main>
    );
}