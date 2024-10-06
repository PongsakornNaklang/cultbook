"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Check, LogOut, Monitor, Moon, Settings, Sun, UserIcon } from "lucide-react";
import Link from "next/link";
import { logout } from "@/app/(auth)/action";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface UserButtonProps {
    className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
    const { user } = useSession();
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn("flex-none rounded-full", className)}>
                    <UserAvatar url={user.avatarUrl} size={36} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    Logged in as @{user.username}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={`/users/${user.username}`}>
                    <DropdownMenuItem>
                        <UserIcon className="mr-2 size-4" />
                        Profile
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Monitor className="mr-2 size-4" />
                        Theme
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                <Monitor className="mr-2 size-4" />
                                System
                                {theme === "system" && <Check className="ml-auto size-3" />}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="mr-2 size-4" />
                                Light
                                {theme === "light" && <Check className="ml-auto size-3" />}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="mr-2 size-4" />
                                Dark
                                {theme === "dark" && <Check className="ml-auto size-3" />}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                    <Settings className="mr-2 size-4" />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        logout();
                    }}
                >
                    <LogOut className="mr-2 size-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}