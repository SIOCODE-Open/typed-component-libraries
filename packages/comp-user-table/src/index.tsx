import classNames from "classnames";

/** The columns available to be shown in the data table */
export type UserDataTableColumn = "id" | "username" | "email" | "isActive";

/** Props for the UserDataTable component */
export interface IUserDataTableProps {
    /** A user of the system */
    value: Array<{
        /** Unique identifier */
        id: string;
        /** The username */
        username: string;
        /** The email address */
        email: string;
        /** Whether the user is active */
        isActive: boolean;
    }>;

    /** The columns to show in the data table */
    columns: Array<UserDataTableColumn>;
}

/** The capitalized names of the columns */
export const USER_DATA_TABLE_COLUMN_NAMES = {
    id: "Id",
    username: "Username",
    email: "Email",
    isActive: "Is Active",
};

/** Shows a User data table */
export function UserDataTable(props: IUserDataTableProps) {
    const columnHeaderCells = props.columns.map((column, index) => (
        <th key={index} className="p-2 border border-gray-600">
            {USER_DATA_TABLE_COLUMN_NAMES[column]}
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
