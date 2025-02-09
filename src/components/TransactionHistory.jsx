import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { LuChevronDown } from "react-icons/lu";

// Define columns for the transaction table
export const columns = [
  { name: "DATE", uid: "date" },
  { name: "DESCRIPTION", uid: "description" },
  { name: "AMOUNT", uid: "amount" },
  { name: "CATEGORY", uid: "category" },
  { name: "STATUS", uid: "status" },
];

// Sample transaction data
export const transactions = [
  {
    id: 1,
    date: "2023-10-01",
    description: "Salary",
    amount: "$5,000",
    category: "Income",
    status: "credit",
  },
  {
    id: 2,
    date: "2023-10-02",
    description: "Groceries",
    amount: "$200",
    category: "Food",
    status: "debit",
  },
  {
    id: 3,
    date: "2023-10-03",
    description: "Rent",
    amount: "$1,500",
    category: "Housing",
    status: "debit",
  },
  {
    id: 4,
    date: "2023-10-04",
    description: "Freelance Payment",
    amount: "$1,200",
    category: "Income",
    status: "credit",
  },
  {
    id: 5,
    date: "2023-10-05",
    description: "Internet Bill",
    amount: "$50",
    category: "Utilities",
    status: "debit",
  },
];

// Status color mapping
const statusColorMap = {
  credit: "success",
  debit: "danger",
};

export default function TransactionHistory() {
  const [filter, setFilter] = React.useState("all"); // State for filtering

  // Filter transactions based on status
  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true;
    return transaction.status === filter;
  });

  // Render cell content based on column key
  const renderCell = React.useCallback((transaction, columnKey) => {
    const cellValue = transaction[columnKey];

    switch (columnKey) {
      case "date":
        return <span>{cellValue}</span>;
      case "description":
        return <span>{cellValue}</span>;
      case "amount":
        return <span>{cellValue}</span>;
      case "category":
        return <span>{cellValue}</span>;
      case "status":
        return (
          <Tooltip
            content={cellValue === "credit" ? "Received" : "Sent"}
            color={cellValue === "credit" ? "success" : "danger"}
          >
            <Chip
              className="capitalize"
              color={statusColorMap[transaction.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          </Tooltip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className=" bg-white rounded-lg shadow-md">
     <div className="flex items-center justify-between p-4"> 
      <h2 className="text-xl font-semibold">Transaction History</h2>


<div className="">
  <Dropdown>
    <DropdownTrigger>
      <Button variant="flat" className="flex items-center gap-1">Filter by Status <LuChevronDown size={20} /></Button>
    </DropdownTrigger>
    <DropdownMenu
      aria-label="Filter by Status"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={[filter]}
      onSelectionChange={(keys) => setFilter(Array.from(keys)[0])}
    >
      <DropdownItem key="all">All</DropdownItem>
      <DropdownItem key="credit">Credit (Received)</DropdownItem>
      <DropdownItem key="debit">Debit (Sent)</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</div>
</div>

      {/* Table */}
      <Table aria-label="Transaction History">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align="start">
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={filteredTransactions}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}