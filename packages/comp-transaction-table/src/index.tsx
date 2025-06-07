import classNames from "classnames";

/** The columns available to be shown in the data table */
export type TransactionDataTableColumn =
    | "transactionId"
    | "amount"
    | "date"
    | "status";

/** Props for the TransactionDataTable component */
export interface ITransactionDataTableProps {
    /** A financial transaction */
    value: Array<{
        /** The transaction ID */
        transactionId: string;
        /** The transaction amount */
        amount: number;
        /** The transaction date */
        date: string;
        /** The status of the transaction */
        status: string;
    }>;

    /** The columns to show in the data table */
    columns: Array<TransactionDataTableColumn>;
}

/** The capitalized names of the columns */
export const TRANSACTION_DATA_TABLE_COLUMN_NAMES = {
    transactionId: "Transaction Id",
    amount: "Amount",
    date: "Date",
    status: "Status",
};

/** Shows a Transaction data table */
export function TransactionDataTable(props: ITransactionDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {TRANSACTION_DATA_TABLE_COLUMN_NAMES[column]}
        </th>
    ));
    const dataRows = props.value.map((row, rowIndex) => (
        <tr key={rowIndex}>
            {props.columns.map((column, columnIndex) => (
                <td key={columnIndex} className="p-2 border border-gray-800">
                    {row[column]}
                </td>
            ))}
        </tr>
    ));
    return (
        <table className="table-auto">
            <thead>
                <tr>{columnHeaderCells}</tr>
            </thead>
            <tbody>{dataRows}</tbody>
        </table>
    );
}
