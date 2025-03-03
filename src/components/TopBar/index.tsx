import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';

export const TopBar = () => {
    const router = useRouter();

    const MENU_ITEMS = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                router.push('/');
            },
        },
        {
            label: 'Favorites',
            icon: 'pi pi-heart',
            command: () => {
                router.push('/favorites');
            },
        },
    ];

    return (
        <Menubar
            model={MENU_ITEMS}
            className="rounded-none sm:bg-transparent border-none sm:absolute sm:top-0 sm:z-10"
        />
    );
};
