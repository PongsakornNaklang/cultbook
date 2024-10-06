"use client";

import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
    url: string | null;
    size?: number
    className?: string;
}

export default function UserAvatar({ url, size, className }: UserAvatarProps) {
    return (
        <Image
            src={url || avatarPlaceholder}
            alt="User avatar"
            width={size ?? 16}
            height={size ?? 16}
            className={cn("aspect-square h-fit flex-none rounded-full bg-secondary object-cover", className)}
        />
    );
}