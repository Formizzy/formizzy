import { IconProps } from "@/components/icons"

type SideMenuType = {
    menuName: string

    menuIcon: IconProps['iconName']

    menuLink: string
}

export const sidePanelMenus: Array<SideMenuType> = [
    {
        menuName: "Dashboard",
        menuIcon: "Dashboard",
        menuLink: "/dashboard"
    },
    {
        menuIcon: "Analytics",
        menuName: "Analytics",
        menuLink: "/dashboard/analytics"
    },
    {
        menuName: "Forms",
        menuIcon: "Form",
        menuLink: "/dashboard/forms"
    },
    {
        menuName: "Settings",
        menuIcon: "Settings",
        menuLink: "/dashboard/settings"
    }
]