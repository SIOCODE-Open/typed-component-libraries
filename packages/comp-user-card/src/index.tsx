import classNames from "classnames";

/** The field names available to be shown in the card */
export type UserCardField = "id" | "username" | "email" | "isActive";

/** Props for the UserCard component */
export interface IUserCardProps {
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

    /** The field to show in the card */
    field: UserCardField;

    /** Whether the card should be styled as a danger card (red) */
    danger?: boolean;

    /** Whether the card should be styled as a warning card (yellow) */
    warning?: boolean;

    /** Whether the card should be styled as an info card (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const USER_CARD_FIELD_NAMES = {
    id: "Id",
    username: "Username",
    email: "Email",
    isActive: "Is Active",
};

/** Shows a User card */
export function UserCard(props: IUserCardProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {USER_CARD_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
