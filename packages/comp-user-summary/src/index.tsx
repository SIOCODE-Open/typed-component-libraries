import classNames from "classnames";

/** The field names available to be shown in the summary */
export type UserSummaryField = "id" | "username" | "email" | "isActive";

/** Props for the UserSummary component */
export interface IUserSummaryProps {
    /** A user of the system */
    value: {
        /** Unique identifier */
        id: string;
        /** The username */
        username: string;
        /** The email address */
        email: string;
        /** Whether the user is active */
        isActive: boolean;
    };

    /** The field to show in the summary */
    field: UserSummaryField;

    /** Whether the summary should be styled as a danger summary (red) */
    danger?: boolean;

    /** Whether the summary should be styled as a warning summary (yellow) */
    warning?: boolean;

    /** Whether the summary should be styled as an info summary (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const USER_SUMMARY_FIELD_NAMES = {
    id: "Id",
    username: "Username",
    email: "Email",
    isActive: "Is Active",
};

/** Shows a User summary */
export function UserSummary(props: IUserSummaryProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {USER_SUMMARY_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
