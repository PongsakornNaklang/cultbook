import SearchField from "@/components/common/SearchField";
import UserButton from "@/components/common/UserButton";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-10">
            <div className="max-auto flex flex-wrap items-center justify-center gap-5 px-6 py-4 border-b">
                <Link href="/" className="text-2xl font-bold text-primary">
                    Cults
                </Link>

                <SearchField />
                <UserButton className="sm:ms-auto" />
            </div>
        </header>
    );
}