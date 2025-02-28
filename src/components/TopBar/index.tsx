import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MENU_ITEMS } from './config';

export const TopBar = () => {
    return (
        <div className="card">
            <Menubar model={MENU_ITEMS} />
        </div>
    );
};
