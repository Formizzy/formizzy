import { getApi } from "@/utils/apiUtils";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { logOut } from "../auth/@core/authUtils";
import Icons from "../icons";
import { sidePanelMenus } from "./@core/sidepanel.config";
import ProfileImage from "./@core/ProfileImage";
import { Button } from "@nextui-org/react";
import { Modal, Text, Input, Row, Checkbox } from "@nextui-org/react";
import Popup from "./@core/PopUp";


export default function SidePanel() {

    const [userData, setUserData] = useState<any>()
    const router = useRouter();

    useEffect(() => {
        fetch("http://localhost:3001/get-user-profile", {
            headers: {
                "Authorization": getCookie("session-token")?.toString() ?? ""
            }
        }).then(data => data.json())
            .then(data => {
                console.log(data)
                setUserData(data?.user)
            }).catch(er => { console.log(er) }
            )
    }, [])



    const theSidePanelMenus = sidePanelMenus.map(menu => {
        const isLinkActive = router.pathname === menu.menuLink

        return <Link key={menu.menuName} href={menu.menuLink} className="group">
            <div className={`flex w-full hover:text-primary items-center p-2 pl-4 my-2 transition-colors duration-300 ${isLinkActive ? "text-primary bg-gradient-to-r bg-opacity-5 from-[#605bff15] via-white" : "text-fi-gray "}`}>
                <div className={`w-1 h-9 rounded-r-xl group-hover:left-0  bg-primary  absolute duration-300 transition-all ${isLinkActive ? "left-0" : "-left-1"}`}></div>
                <Icons iconName={menu.menuIcon} />
                <span className="m-2" />
                <span className="font-medium">{menu.menuName}</span>
            </div>
        </Link>
    }
    )

    return <>
        <aside className="w-64 h-screen flex flex-col justify-between">
            <div>
                {/* Logo section */}
                <div className="flex h-24 justify-center items-center">
                    <div className="flex items-center">
                        <Icons iconName="Brand Logo" />
                        <span className="m-2" />
                        <h3 className="text-2xl font-bold">Formizzy</h3>
                    </div>
                </div>

                {/* menu items will be loaded here */}
                {theSidePanelMenus}
            </div>

            {/* profile section */}
            {/* <div className=" flex my-3 justify-between flex-col items-center"> */}
            <div>
                {/* <Button className="m-auto" size="sm">Create New Form</Button>; */}
                <Popup/>
                <div className=" flex my-3 justify-between items-center">
                    {/* <ProfileImage name="kartik jetani" /> */}
                    <div className="flex ">
                        <div style={{ backgroundImage: `url(${userData?.image})` }} className={` w-12 h-12 bg-cover bg-center rounded-lg mx-3`} />
                        <div className="flex">
                            <span className="text-sm font-semibold ">{userData?.firstName}</span>
                            <p className="text-xs text-fi-gray">Free Account</p>
                        </div>
                    </div>
                    <div onClick={() => { logOut() }} className="text-fi-gray hover:text-primary mr-2 cursor-pointer">
                        <Icons iconName="Logout" />
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </aside>
    </>
}