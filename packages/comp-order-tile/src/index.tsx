import classNames from "classnames";

/** The field names available to be shown in the tile */
export type OrderTileField = "orderId" | "customerId" | "total" | "status";

/** Props for the OrderTile component */
export interface IOrderTileProps {
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

    /** The field to show in the tile */
    field: OrderTileField;

    /** Whether the tile should be styled as a danger tile (red) */
    danger?: boolean;

    /** Whether the tile should be styled as a warning tile (yellow) */
    warning?: boolean;

    /** Whether the tile should be styled as an info tile (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const ORDER_TILE_FIELD_NAMES = {
    orderId: "Order Id",
    customerId: "Customer Id",
    total: "Total",
    status: "Status",
};

/** Shows a Order tile */
export function OrderTile(props: IOrderTileProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {ORDER_TILE_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
