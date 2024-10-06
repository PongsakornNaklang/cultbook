"use client";

import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchField() {
    const router = useRouter();

    function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const query = (form.query as HTMLInputElement).value.trim();
        if (!query) return;

        router.push(`/search?q=${encodeURIComponent(query)}`);
    }

    return (
        <form onSubmit={handleSearch} method="GET" action="/search">
            <div className="relative">
                <Input name="query" placeholder="Search" variant="secondary" />
                <SearchIcon className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
        </form>
    );
}