import { validateRequest } from "@/auth";
import { Button } from "@/components/ui/button";
import { Bookmark, Home } from "lucide-react";
import Link from "next/link";
import NotificationsButton from "./NotificationsButton";
import MessagesButton from "./MessagesButton";

interface MenuBarProps {
    className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {
    const { user } = await validateRequest();

    if (!user) return null;

    return (
        <div className={className}>
            <Button
                variant="ghost"
                className="flex items-center justify-start gap-3"
                title="Home"
                asChild
            >
                <Link href="/">
                    <Home />
                    <span className="hidden lg:inline">Home</span>
                </Link>
            </Button>
            <NotificationsButton />
            <MessagesButton />
            <Button
                variant="ghost"
                className="flex items-center justify-start gap-3"
                title="Bookmarks"
                asChild
            >
                <Link href="/bookmarks">
                    <Bookmark />
                    <span className="hidden lg:inline">Bookmarks</span>
                </Link>
            </Button>
        </div>
    );
}