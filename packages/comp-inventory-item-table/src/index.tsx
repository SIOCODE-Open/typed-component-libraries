import classNames from "classnames";

/** The columns available to be shown in the data table */
export type InventoryItemDataTableColumn = "sku" | "quantity" | "warehouse";

/** Props for the InventoryItemDataTable component */
export interface IInventoryItemDataTableProps {
    /** Inventory entry */
    value: Array<{
        /** Product SKU */
        sku: string;
        /** Quantity in stock */
        quantity: number;
        /** Warehouse location */
        warehouse: string;
    }>;

    /** The columns to show in the data table */
    columns: Array<InventoryItemDataTableColumn>;
}

/** The capitalized names of the columns */
export const INVENTORY_ITEM_DATA_TABLE_COLUMN_NAMES = {
    sku: "Sku",
    quantity: "Quantity",
    warehouse: "Warehouse",
};

/** Shows a Inventory Item data table */
export function InventoryItemDataTable(props: IInventoryItemDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {INVENTORY_ITEM_DATA_TABLE_COLUMN_NAMES[column]}
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
