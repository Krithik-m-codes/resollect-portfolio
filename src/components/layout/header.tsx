import React from "react";
import Link from "next/link";
import {
    Bell,
    ChevronDown
} from "lucide-react";

export function Header() {
    return (
        <header className="h-16 border-b bg-white flex items-center justify-between px-4">
            <div className="md:hidden flex items-center">
                <Link href={'/'} >
                    <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-2">
                        <span className="text-white font-bold">R</span>
                    </div>
                    <span className="text-blue-600 font-semibold text-lg">Resollect</span>
                </Link>
            </div>

            <div className="flex-1 md:flex md:items-center md:justify-end">
                <div className="flex items-center space-x-4">
                    <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                        <Bell className="h-5 w-5" />
                    </button>
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold">
                                T
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="font-medium text-black">Krithik M</span>
                                <span className="text-xs text-gray-500">krithik.dev@resollect.com</span>
                            </div>
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}