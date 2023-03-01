import Link from "next/link";
import React from "react";
import { sidePanelMenus } from "./@core/sidepanel.config";

export default function SidePanel() {

    const theSidePanelMenus = sidePanelMenus.map(menu => <div key={menu.menuName} className="flex m-3">
        {menu.menuIcon}
        <Link href={menu.menuLink}>{menu.menuName}</Link>
    </div>)

    return <>
        <div className="w-[25vw] h-screen bg-slate-300">
            {theSidePanelMenus}
        </div>
    </>
}