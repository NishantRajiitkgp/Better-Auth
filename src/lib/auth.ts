import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema"; // <-- Import your schema
import { headers } from "next/headers";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // PostgreSQL
        schema,         // <-- Pass schema so BetterAuth knows about verification table
    }),
    pages: {
        signIn: "/login",
    },
    socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        },
    },
});

export const getSession = async () =>
    auth.api.getSession({
        headers: await headers(),
    });
