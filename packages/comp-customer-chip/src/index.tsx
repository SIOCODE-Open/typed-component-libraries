import classNames from "classnames";

/** The field names available to be shown in the chip */
export type CustomerChipField = "id" | "name" | "email" | "loyaltyPoints";

/** Props for the CustomerChip component */
export interface ICustomerChipProps {
    /** A customer record */
    value: {
        /** Customer identifier */
        id: string;
        /** Customer name */
        name: string;
        /** Customer email */
        email: string;
        /** Loyalty points */
        loyaltyPoints: number;
    };

    /** The field to show in the chip */
    field: CustomerChipField;

    /** Whether the chip should be styled as a danger chip (red) */
    danger?: boolean;

    /** Whether the chip should be styled as a warning chip (yellow) */
    warning?: boolean;

    /** Whether the chip should be styled as an info chip (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const CUSTOMER_CHIP_FIELD_NAMES = {
    id: "Id",
    name: "Name",
    email: "Email",
    loyaltyPoints: "Loyalty Points",
};

/** Shows a Customer chip */
export function CustomerChip(props: ICustomerChipProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {CUSTOMER_CHIP_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
