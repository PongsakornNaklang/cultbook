"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { generateIdFromEntropySize } from "lucia";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function signUp(credentials: SignUpValues): Promise<{ error: string }> {
    try {
        const { email, username, password } = signUpSchema.parse(credentials);

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const userId = generateIdFromEntropySize(10);

        const existingUsername = await prisma.user.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                }
            },
        });

        if (existingUsername) {
            return { error: "Username is already taken" };
        }

        const existingEmail = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive",
                }
            },
        });

        if (existingEmail) {
            return { error: "Email is already taken" };
        }

        await prisma.user.create({
            data: {
                id: userId,
                email,
                username,
                displayName: username,
                passwordHash,
            },
        });

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        );

        return redirect("/");
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }

        console.log(error);
        return { error: "Something went wrong, please try again" };
    }
}