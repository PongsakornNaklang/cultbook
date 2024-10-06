"use client";

import { Session, User } from "lucia";
import { createContext, PropsWithChildren, useContext } from "react";

interface SessionContext {
    user: User;
    session: Session;
}

const SessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
    children,
    session,
}: PropsWithChildren<{ session: SessionContext }>) {
    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    const session = useContext(SessionContext);

    if (!session) {
        throw new Error("useSession must be used within a SessionProvider");
    }

    return session;
}