"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { filterCategories } from "@/lib/utils";
import type { FilterTab } from "@/types";

interface PortfolioTabsProps {
    activeTab: FilterTab;
    onChange: (value: FilterTab) => void;
}

export function PortfolioTabs({ activeTab, onChange }: PortfolioTabsProps) {
    return (
        <Tabs value={activeTab} onValueChange={(value) => onChange(value as FilterTab)} className="w-full overflow-x-auto">
            <TabsList className="flex w-full h-10 space-x-1 bg-white border-b">
                {filterCategories.map((category) => (
                    <TabsTrigger
                        key={category}
                        value={category}
                        className={`flex-shrink-0 px-4 py-2 text-sm font-medium border-b-2 ${activeTab === category
                                ? "text-blue-600 border-blue-600"
                                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        {category}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}