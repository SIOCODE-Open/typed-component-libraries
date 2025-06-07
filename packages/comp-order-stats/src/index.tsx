import classNames from "classnames";

/** The field names available to be shown in the stats */
export type OrderStatsField = "orderId" | "customerId" | "total" | "status";

/** Props for the OrderStats component */
export interface IOrderStatsProps {
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

    /** The field to show in the stats */
    field: OrderStatsField;

    /** Whether the stats should be styled as a danger stats (red) */
    danger?: boolean;

    /** Whether the stats should be styled as a warning stats (yellow) */
    warning?: boolean;

    /** Whether the stats should be styled as an info stats (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const ORDER_STATS_FIELD_NAMES = {
    orderId: "Order Id",
    customerId: "Customer Id",
    total: "Total",
    status: "Status",
};

/** Shows a Order stats */
export function OrderStats(props: IOrderStatsProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {ORDER_STATS_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
