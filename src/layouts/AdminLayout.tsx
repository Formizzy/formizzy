import SidePanel from "@/components/sidepanel";
import React from "react";

export default function AdminLayout(props: any) {

    return <>
        {/* <Header /> */}
        <div className="flex w-screen">
            <SidePanel />
            <div className="bg-slate-50 w-full">
                {props.children}
            </div>
        </div>
    </>
}