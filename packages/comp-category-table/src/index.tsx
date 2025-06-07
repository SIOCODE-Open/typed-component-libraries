import classNames from "classnames";

/** The columns available to be shown in the data table */
export type CategoryDataTableColumn = "id" | "name" | "description";

/** Props for the CategoryDataTable component */
export interface ICategoryDataTableProps {
    /** A product category */
    value: Array<{
        /** Category identifier */
        id: string;
        /** Category name */
        name: string;
        /** Category description */
        description: string;
    }>;

    /** The columns to show in the data table */
    columns: Array<CategoryDataTableColumn>;
}

/** The capitalized names of the columns */
export const CATEGORY_DATA_TABLE_COLUMN_NAMES = {
    id: "Id",
    name: "Name",
    description: "Description",
};

/** Shows a Category data table */
export function CategoryDataTable(props: ICategoryDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {CATEGORY_DATA_TABLE_COLUMN_NAMES[column]}
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
