import classNames from "classnames";

/** The field names available to be shown in the form */
export type OrderFormField = "orderId" | "customerId" | "total" | "status";

/** Props for the OrderForm component */
export interface IOrderFormProps {
    /** A purchase order */
    value: {
        /** The order ID */
        orderId: string;
        /** The customer placing the order */
        customerId: string;
        /** The order total */
        total: number;
        /** The status of the order */
        status: string;
    };

    /** The field to show in the form */
    field: OrderFormField;

    /** Whether the form should be styled as a danger form (red) */
    danger?: boolean;

    /** Whether the form should be styled as a warning form (yellow) */
    warning?: boolean;

    /** Whether the form should be styled as an info form (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const ORDER_FORM_FIELD_NAMES = {
    orderId: "Order Id",
    customerId: "Customer Id",
    total: "Total",
    status: "Status",
};

/** Shows a Order form */
export function OrderForm(props: IOrderFormProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {ORDER_FORM_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
