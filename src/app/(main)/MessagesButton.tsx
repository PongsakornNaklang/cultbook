"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

interface MessagesButtonProps { }

export default function MessagesButton({ }: MessagesButtonProps) {

    return (
        <Button
            variant="ghost"
            className="flex items-center justify-start gap-3"
            title="Messages"
            asChild
        >
            <Link href="/messages">
                <div className="relative">
                    <Mail />
                </div>
                <span className="hidden lg:inline">Messages</span>
            </Link>
        </Button>
    );
}