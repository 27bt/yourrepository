/*'use client'

export default function SubMenu() {

    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Saved' },
        { id: 3, name: 'Electronics' },
        { id: 4, name: 'Motors' },
        { id: 5, name: 'Fashion' },
        { id: 6, name: 'Collectables and Art' },
        { id: 7, name: 'Sports' },
        { id: 8, name: 'Health & Beauty' },
        { id: 9, name: 'Industrial Equipment' },
        { id: 10, name: 'Home & Garden' },
        { id: 11, name: 'Sell' },
    ]

    return (
        <>
            <div id="SubMenu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul 
                        id="TopMenuLeft"
                        className="
                            flex 
                            items-center 
                            text-[13px] 
                            text-[#333333]
                            px-2 
                            h-8
                        "
                    >
                        {menuItems.map(item => (
                            <li key={item.id} className="px-3 hover:underline cursor-pointer">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
  }
  */
// app/includes/SubMenu.js
'use client'

import { useState, useEffect } from "react";
import Link from 'next/link';

export default function SubMenu() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setLoggedIn(!!user);
    }, []);

    const menuItems = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Saved', path: '/saved' },
        { id: 3, name: 'Electronics', path: '/electronics' },
        { id: 4, name: 'Motors', path: '/motors' },
        { id: 5, name: 'Fashion', path: '/fashion' },
        { id: 6, name: 'Collectables and Art', path: '/collectables' },
        { id: 7, name: 'Sports', path: '/sports' },
        { id: 8, name: 'Health & Beauty', path: '/health' },
        { id: 9, name: 'Industrial Equipment', path: '/industrial' },
        { id: 10, name: 'Home & Garden', path: '/home' },
        { id: 11, name: 'Sell', path: '/sell' },
        { id: 12, name: 'Products', path: '/products' },
    ];

    return (
        <div id="SubMenu" className="border-b">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <ul 
                    id="TopMenuLeft"
                    className="
                        flex 
                        items-center 
                        text-[13px] 
                        text-[#333333]
                        px-2 
                        h-8
                    "
                >
                    {menuItems.map(item => (
                        <li key={item.id} className="px-3 hover:underline cursor-pointer">
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
