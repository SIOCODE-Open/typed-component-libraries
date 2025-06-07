import classNames from "classnames";

/** The columns available to be shown in the data table */
export type CustomerDataTableColumn = "id" | "name" | "email" | "loyaltyPoints";

/** Props for the CustomerDataTable component */
export interface ICustomerDataTableProps {
    /** A customer record */
    value: Array<{
        /** Customer identifier */
        id: string;
        /** Customer name */
        name: string;
        /** Customer email */
        email: string;
        /** Loyalty points */
        loyaltyPoints: number;
    }>;

    /** The columns to show in the data table */
    columns: Array<CustomerDataTableColumn>;
}

/** The capitalized names of the columns */
export const CUSTOMER_DATA_TABLE_COLUMN_NAMES = {
    id: "Id",
    name: "Name",
    email: "Email",
    loyaltyPoints: "Loyalty Points",
};

/** Shows a Customer data table */
export function CustomerDataTable(props: ICustomerDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {CUSTOMER_DATA_TABLE_COLUMN_NAMES[column]}
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
