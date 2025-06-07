import classNames from "classnames";

/** The field names available to be shown in the card */
export type CustomerCardField = "id" | "name" | "email" | "loyaltyPoints";

/** Props for the CustomerCard component */
export interface ICustomerCardProps {
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

    /** The field to show in the card */
    field: CustomerCardField;

    /** Whether the card should be styled as a danger card (red) */
    danger?: boolean;

    /** Whether the card should be styled as a warning card (yellow) */
    warning?: boolean;

    /** Whether the card should be styled as an info card (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const CUSTOMER_CARD_FIELD_NAMES = {
    id: "Id",
    name: "Name",
    email: "Email",
    loyaltyPoints: "Loyalty Points",
};

/** Shows a Customer card */
export function CustomerCard(props: ICustomerCardProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {CUSTOMER_CARD_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
