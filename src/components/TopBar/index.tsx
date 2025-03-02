import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MENU_ITEMS } from './config';

export const TopBar = () => {
    return <Menubar model={MENU_ITEMS} className="rounded-none bg-white" />;
};
