"use client";

import React, { useState, useMemo } from "react";
import { PortfolioTabs } from "@/components/portfolio/tabs";
import { PortfolioFilters } from "@/components/portfolio/filters";
import { PortfolioTable } from "@/components/portfolio/table";
import { UploadDocument } from "@/components/upload-document/upload";
import { portfolioData } from "@/data/demo-data";
import type { FilterTab } from "@/types";

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState<FilterTab>("All");
    const [uploadOpen, setUploadOpen] = useState(false);

    // Filter data based on active tab
    const filteredData = useMemo(() => {
        if (activeTab === "All") {
            return portfolioData;
        }
        return portfolioData.filter(item => item.filterCategory === activeTab);
    }, [activeTab]);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Portfolio</h1>

            <PortfolioTabs
                activeTab={activeTab}
                onChange={(value) => setActiveTab(value)}
            />

            <div className="py-4">
                <PortfolioFilters onUploadClick={() => setUploadOpen(true)} />
                <PortfolioTable data={filteredData} />
            </div>

            <UploadDocument
                open={uploadOpen}
                onOpenChange={setUploadOpen}
            />
        </div>
    );
}