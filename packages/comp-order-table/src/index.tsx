import classNames from "classnames";

/** The columns available to be shown in the data table */
export type OrderDataTableColumn =
    | "orderId"
    | "customerId"
    | "total"
    | "status";

/** Props for the OrderDataTable component */
export interface IOrderDataTableProps {
    /** A purchase order */
    value: Array<{
        /** The order ID */
        orderId: string;
        /** The customer placing the order */
        customerId: string;
        /** The order total */
        total: number;
        /** The status of the order */
        status: string;
    }>;

    /** The columns to show in the data table */
    columns: Array<OrderDataTableColumn>;
}

/** The capitalized names of the columns */
export const ORDER_DATA_TABLE_COLUMN_NAMES = {
    orderId: "Order Id",
    customerId: "Customer Id",
    total: "Total",
    status: "Status",
};

/** Shows a Order data table */
export function OrderDataTable(props: IOrderDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {ORDER_DATA_TABLE_COLUMN_NAMES[column]}
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
