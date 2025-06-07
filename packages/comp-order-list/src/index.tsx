import classNames from "classnames";

/** The field names available to be shown in the list */
export type OrderListField = "orderId" | "customerId" | "total" | "status";

/** Props for the OrderList component */
export interface IOrderListProps {
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

    /** The field to show in the list */
    field: OrderListField;

    /** Whether the list should be styled as a danger list (red) */
    danger?: boolean;

    /** Whether the list should be styled as a warning list (yellow) */
    warning?: boolean;

    /** Whether the list should be styled as an info list (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const ORDER_LIST_FIELD_NAMES = {
    orderId: "Order Id",
    customerId: "Customer Id",
    total: "Total",
    status: "Status",
};

/** Shows a Order list */
export function OrderList(props: IOrderListProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {ORDER_LIST_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
