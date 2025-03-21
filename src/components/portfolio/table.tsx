"use client";

import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import type { PortfolioItem } from "@/types";

interface PortfolioTableProps {
    data: PortfolioItem[];
}

export function PortfolioTable({ data }: PortfolioTableProps) {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const toggleSelectAll = () => {
        if (selectedRows.length === data.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map((item) => item.id));
        }
    };

    const toggleSelectRow = (id: string) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <div className="rounded-md border bg-white overflow-hidden">
            <div className="px-4 py-3 flex items-center justify-between">
                <div>
                    {selectedRows.length > 0 && (
                        <span className="text-sm text-gray-500">{selectedRows.length} items selected</span>
                    )}
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Select Column</span>
                    <button className="px-3 py-1 border rounded-md text-sm bg-blue-600 text-white">
                        + Add Filters
                    </button>
                </div>
            </div>
            <div className="overflow-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-10">
                                <Checkbox
                                    checked={data.length > 0 && selectedRows.length === data.length}
                                    onCheckedChange={toggleSelectAll}
                                />
                            </TableHead>
                            <TableHead>Loan No.</TableHead>
                            <TableHead>Loan Type</TableHead>
                            <TableHead>Borrower</TableHead>
                            <TableHead>Borrower Address</TableHead>
                            <TableHead>Co-Borrower Name</TableHead>
                            <TableHead>Co-Borrower Address</TableHead>
                            <TableHead>Current DPD</TableHead>
                            <TableHead>Sanction Amount</TableHead>
                            <TableHead>Stage</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={10} className="text-center py-6 text-gray-500">
                                    No data available
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <Checkbox
                                            checked={selectedRows.includes(item.id)}
                                            onCheckedChange={() => toggleSelectRow(item.id)}
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium text-blue-600">{item.loanNo}</TableCell>
                                    <TableCell>{item.loanType}</TableCell>
                                    <TableCell>{item.borrower}</TableCell>
                                    <TableCell className="max-w-xs truncate">{item.borrowerAddress}</TableCell>
                                    <TableCell>{item.coBorrowerName || "-"}</TableCell>
                                    <TableCell className="max-w-xs truncate">{item.coBorrowerAddress || "-"}</TableCell>
                                    <TableCell>{item.currentDPD}</TableCell>
                                    <TableCell>{item.sanctionAmount}</TableCell>
                                    <TableCell>{item.stage || "-"}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}