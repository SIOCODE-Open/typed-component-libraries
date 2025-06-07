import classNames from "classnames";

/** The columns available to be shown in the data table */
export type SupplierDataTableColumn = "id" | "name" | "contactEmail" | "active";

/** Props for the SupplierDataTable component */
export interface ISupplierDataTableProps {
    /** A supplier of products */
    value: Array<{
        /** Supplier identifier */
        id: string;
        /** Supplier name */
        name: string;
        /** Contact email */
        contactEmail: string;
        /** Whether supplier is active */
        active: boolean;
    }>;

    /** The columns to show in the data table */
    columns: Array<SupplierDataTableColumn>;
}

/** The capitalized names of the columns */
export const SUPPLIER_DATA_TABLE_COLUMN_NAMES = {
    id: "Id",
    name: "Name",
    contactEmail: "Contact Email",
    active: "Active",
};

/** Shows a Supplier data table */
export function SupplierDataTable(props: ISupplierDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {SUPPLIER_DATA_TABLE_COLUMN_NAMES[column]}
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
