import classNames from "classnames";

/** The columns available to be shown in the data table */
export type BuildDataTableColumn = "buildNumber" | "date" | "status";

/** Props for the BuildDataTable component */
export interface IBuildDataTableProps {
    /** One build of a program */
    value: Array<{
        /** The build number of the build */
        buildNumber: number;
        /** The date of the build */
        date: string;
        /** The status of the build */
        status: string;
    }>;

    /** The columns to show in the data table */
    columns: Array<BuildDataTableColumn>;
}

/** The capitalized names of the columns */
export const BUILD_DATA_TABLE_COLUMN_NAMES = {
    buildNumber: "Build Number",
    date: "Date",
    status: "Status",
};

/** Shows a Build data table */
export function BuildDataTable(props: IBuildDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {BUILD_DATA_TABLE_COLUMN_NAMES[column]}
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
