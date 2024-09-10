import classNames from "classnames";

/** The columns available to be shown in the data table */
export type ProductDataTableColumn =
    | "sku"
    | "name"
    | "description"
    | "price"
    | "isAvailable";

/** Props for the ProductDataTable component */
export interface IProductDataTableProps {
    /** A product that is sold in a webshop */
    value: Array<{
        /** The stock keeping unit */
        sku: string;
        /** The name of the product */
        name: string;
        /** A description of the product */
        description: string;
        /** The price of the product */
        price: number;
        /** Whether the product is available */
        isAvailable: boolean;
    }>;

    /** The columns to show in the data table */
    columns: Array<ProductDataTableColumn>;
}

/** The capitalized names of the columns */
export const PRODUCT_DATA_TABLE_COLUMN_NAMES = {
    sku: "Sku",
    name: "Name",
    description: "Description",
    price: "Price",
    isAvailable: "Is Available",
};

/** Shows a Product data table */
export function ProductDataTable(props: IProductDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {PRODUCT_DATA_TABLE_COLUMN_NAMES[column]}
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
