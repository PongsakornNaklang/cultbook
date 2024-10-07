"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UserAvatar from "@/components/common/UserAvatar";
import { submitPost } from "./action";
import "./styles.css";

export default function PostEditor() {
    const { user } = useSession();

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bold: false,
                italic: false,
            }),
            Placeholder.configure({
                placeholder: "Write something...",
            }),
        ],
    });

    const input =
        editor?.getText({
            blockSeparator: "\n",
        }) || "";

    async function onSubmit() {
        await submitPost(input);
        editor?.commands.clearContent();
    }

    return (
        <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 border">
            <div className="flex gap-5">
                <UserAvatar url={user.avatarUrl} size={40} className="hidden sm:inline" />
                <EditorContent
                    editor={editor}
                    className="max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background text-foreground px-5 py-3 border focus-visible:outline-none"
                />
            </div>

            <div className="flex justify-end gap-5">
                <Button
                    onClick={onSubmit}
                    loading={false}
                    disabled={!input.trim()}
                    className="min-w-20"
                >
                    Post
                </Button>
            </div>
        </div>
    );
}