import classNames from "classnames";

/** The columns available to be shown in the data table */
export type ReviewDataTableColumn = "id" | "productSku" | "rating" | "comment";

/** Props for the ReviewDataTable component */
export interface IReviewDataTableProps {
    /** A product review */
    value: Array<{
        /** Review identifier */
        id: string;
        /** The reviewed product SKU */
        productSku: string;
        /** Rating 1-5 */
        rating: number;
        /** Review comment */
        comment: string;
    }>;

    /** The columns to show in the data table */
    columns: Array<ReviewDataTableColumn>;
}

/** The capitalized names of the columns */
export const REVIEW_DATA_TABLE_COLUMN_NAMES = {
    id: "Id",
    productSku: "Product Sku",
    rating: "Rating",
    comment: "Comment",
};

/** Shows a Review data table */
export function ReviewDataTable(props: IReviewDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {REVIEW_DATA_TABLE_COLUMN_NAMES[column]}
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
