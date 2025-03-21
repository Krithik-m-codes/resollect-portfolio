"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FilterX, Download, Upload } from "lucide-react";

interface PortfolioFiltersProps {
    onUploadClick: () => void;
}

export function PortfolioFilters({ onUploadClick }: PortfolioFiltersProps) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            <Button
                variant="outline"
                size="sm"
                className="flex items-center text-xs"
            >
                <FilterX className="h-3.5 w-3.5 mr-1" />
                Download File Template
            </Button>

            <Button
                variant="outline"
                size="sm"
                className="flex items-center text-xs"
            >
                <Download className="h-3.5 w-3.5 mr-1" />
                Export Portfolio Data
            </Button>

            <Button
                variant="outline"
                size="sm"
                className="flex items-center text-xs"
                onClick={onUploadClick}
            >
                <Upload className="h-3.5 w-3.5 mr-1" />
                Upload Document
            </Button>
        </div>
    );
}