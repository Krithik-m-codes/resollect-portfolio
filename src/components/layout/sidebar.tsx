"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    MessageSquare,
    Bell,
    Gavel,
    FileText,
    Settings,
    Users,
    ShieldCheck
} from "lucide-react";

const navItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
        title: "Portfolio",
        href: "/portfolio",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "Notifications",
        href: "/notifications",
        icon: <Bell className="h-5 w-5" />,
    },
    {
        title: "Notices",
        href: "/notices",
        icon: <MessageSquare className="h-5 w-5" />,
    },
    {
        title: "Auction",
        href: "/auction",
        icon: <Gavel className="h-5 w-5" />,
    },
    {
        title: "Data Upload",
        href: "/upload-data",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        title: "User Management",
        href: "/user-management",
        icon: <Users className="h-5 w-5" />,
    },
    {
        title: "Control Panel",
        href: "/control-panel",
        icon: <Settings className="h-5 w-5" />,
    },
    {
        title: "Permissions",
        href: "/permissions",
        icon: <ShieldCheck className="h-5 w-5" />,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex h-screen flex-col border-r bg-white w-64 fixed">
            <div className="p-4 border-b flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-2">
                    <span className="text-white font-bold">R</span>
                </div>
                <span className="text-blue-600 font-semibold text-lg">Resollect</span>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="space-y-1 px-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-4 py-2 text-sm font-medium rounded-md",
                                pathname === item.href
                                    ? "bg-blue-100 text-blue-600"
                                    : "text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            {item.icon}
                            <span className="ml-3">{item.title}</span>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="p-4 border-t flex items-center">
                <div className="flex items-center justify-center">
                    <div className="text-xs text-gray-500">powered by</div>
                    <div className="ml-1 flex items-center">
                        <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center mr-1">
                            <span className="text-white font-bold text-xs">R</span>
                        </div>
                        <span className="text-blue-600 font-semibold text-xs">Resollect</span>
                    </div>
                </div>
            </div>
        </div>
    );
}