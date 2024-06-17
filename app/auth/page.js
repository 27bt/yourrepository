
/*

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";

export default function AuthPage() {
    const supabase = createClientComponentClient();
    const [lastEmailSent, setLastEmailSent] = useState(0);
    const EMAIL_SEND_INTERVAL = 60000; // 60 seconds

    const handleAuthEvent = (event) => {
        const now = Date.now();
        if (event === 'SEND_MAGIC_LINK' && now - lastEmailSent < EMAIL_SEND_INTERVAL) {
            alert('Please wait a minute before requesting another email.');
            return false; // prevent default behavior
        }
        if (event === 'SEND_MAGIC_LINK') {
            setLastEmailSent(now);
        }
    };

    // Check if window is defined (client-side) before using it
    const redirectUrl = typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : "";

    return (
        <>
            <div id="AuthPage" className="w-full min-h-screen bg-white">
                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    <Link href="/" className="min-w-[170px]">
                        <img width="170" src="/images/logo.svg" />
                    </Link>
                </div>

                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    Login / Register
                </div>

                <div className="max-w-[400px] mx-auto px-2">
                    <Auth
                        redirectTo={redirectUrl}
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa }}
                        handleAuthEvent={handleAuthEvent}
                    />
                </div>
            </div>
        </>
    );
}

*/
/*
"use client"; 

import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

export default function AuthPage() {
    const supabase = createClientComponentClient();
    const [lastEmailSent, setLastEmailSent] = useState(0);
    const [redirectTo, setRedirectTo] = useState('');
    const EMAIL_SEND_INTERVAL = 60000; // 60 seconds

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRedirectTo(`${window.location.origin}/auth/callback`);
        }
    }, []);

    const handleAuthEvent = (event) => {
        const now = Date.now();
        if (event === 'SEND_MAGIC_LINK' && now - lastEmailSent < EMAIL_SEND_INTERVAL) {
            alert('Please wait a minute before requesting another email.');
            return false; // prevent default behavior
        }
        if (event === 'SEND_MAGIC_LINK') {
            setLastEmailSent(now);
        }
    };

    if (!redirectTo) {
        // You can show a loading state or placeholder here while redirectTo is being set
        return <div>Loading...</div>;
    }

    return (
        <>
            <div id="AuthPage" className="w-full min-h-screen bg-white">
                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    <Link href="/" className="min-w-[170px]">
                        <img width="170" src="/images/logo.svg" alt="Logo"/>
                    </Link>
                </div>

                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    Login / Register
                </div>

                <div className="max-w-[400px] mx-auto px-2">
                    <Auth
                        redirectTo={redirectTo}
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa }}
                        handleAuthEvent={handleAuthEvent}
                    />
                </div>
            </div>
        </>
    );
}
*/

"use client";

import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

export default function AuthPage() {
    const supabase = createClientComponentClient();
    const [lastEmailSent, setLastEmailSent] = useState(0);
    const [redirectTo, setRedirectTo] = useState('');
    const EMAIL_SEND_INTERVAL = 60000; // 60 seconds

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRedirectTo(`${window.location.origin}/auth/callback`);
        }
    }, []);

    const handleAuthEvent = (event) => {
        const now = Date.now();
        if (event === 'SEND_MAGIC_LINK' && now - lastEmailSent < EMAIL_SEND_INTERVAL) {
            alert('Please wait a minute before requesting another email.');
            return false; // prevent default behavior
        }
        if (event === 'SEND_MAGIC_LINK') {
            setLastEmailSent(now);
        }
    };

    if (!redirectTo) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div id="AuthPage" className="w-full min-h-screen bg-white">
                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    <Link href="/" className="min-w-[170px]">
                        <img width="170" src="/images/logo.svg" alt="Logo" />
                    </Link>
                </div>

                <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
                    Login / Register
                </div>

                <div className="max-w-[400px] mx-auto px-2">
                    <Auth
                        redirectTo={redirectTo}
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa }}
                        handleAuthEvent={handleAuthEvent}
                    />
                </div>
            </div>
        </>
    );
}
