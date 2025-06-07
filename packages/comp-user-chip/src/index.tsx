import classNames from "classnames";

/** The field names available to be shown in the chip */
export type UserChipField = "id" | "username" | "email" | "isActive";

/** Props for the UserChip component */
export interface IUserChipProps {
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

    /** The field to show in the chip */
    field: UserChipField;

    /** Whether the chip should be styled as a danger chip (red) */
    danger?: boolean;

    /** Whether the chip should be styled as a warning chip (yellow) */
    warning?: boolean;

    /** Whether the chip should be styled as an info chip (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const USER_CHIP_FIELD_NAMES = {
    id: "Id",
    username: "Username",
    email: "Email",
    isActive: "Is Active",
};

/** Shows a User chip */
export function UserChip(props: IUserChipProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {USER_CHIP_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
