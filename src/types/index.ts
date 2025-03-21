export interface PortfolioItem {
  id: string;
  loanNo: string;
  loanType: string;
  borrower: string;
  borrowerAddress: string;
  coBorrowerName?: string;
  coBorrowerAddress?: string;
  currentDPD: number | string;
  sanctionAmount: string;
  stage?: string;
  filterCategory:
    | "All"
    | "Pre Sarfaesi"
    | "NPA"
    | "RSLI Responses"
    | "Symbolic Possession"
    | "DM Order"
    | "Physical Possession"
    | "Auction";
}

export type FilterTab =
  | "All"
  | "Pre Sarfaesi"
  | "NPA"
  | "RSLI Responses"
  | "Symbolic Possession"
  | "DM Order"
  | "Physical Possession"
  | "Auction";
