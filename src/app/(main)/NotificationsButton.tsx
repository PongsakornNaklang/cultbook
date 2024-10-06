"use client";

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import Link from "next/link";

interface NotificationsButtonProps { }

export default function NotificationsButton({ }: NotificationsButtonProps) {

    return (
        <Button
            variant="ghost"
            className="flex items-center justify-start gap-3"
            title="Notifications"
            asChild
        >
            <Link href="/notifications">
                <div className="relative">
                    <Bell />
                </div>
                <span className="hidden lg:inline">Notifications</span>
            </Link>
        </Button>
    );
}