import { PostData } from "@/lib/types";
import UserAvatar from "../common/UserAvatar";
import Link from "next/link";
import { formatRelativeDate } from "@/lib/utils";

interface PostProps {
    post: PostData;
}

export default function Post({ post }: PostProps) {
    return (
        <article className="space-y-3 rounded-2xl p-5 bg-card border">
            <div className="flex flex-wrap gap-3">
                <Link href={`/user/${post.user.username}`}>
                    <UserAvatar url={post.user.avatarUrl} size={36} />
                </Link>
                <div>
                    <Link href={`/user/${post.user.username}`} className="hover:underline block font-medium">
                        {post.user.displayName}
                    </Link>
                    <Link href={`/post/${post.id}`} className="text-muted-foreground text-sm hover:underline">
                        {formatRelativeDate(post.createdAt)}
                    </Link>
                </div>
            </div>

            <div className="whitespace-pre-line break-words">
                {post.content}
            </div>
        </article>
    )
}
