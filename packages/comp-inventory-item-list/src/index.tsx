import classNames from "classnames";

/** The field names available to be shown in the list */
export type InventoryItemListField = "sku" | "quantity" | "warehouse";

/** Props for the InventoryItemList component */
export interface IInventoryItemListProps {
    /** Inventory entry */
    value: {
        /** Product SKU */
        sku: string;
        /** Quantity in stock */
        quantity: number;
        /** Warehouse location */
        warehouse: string;
    };

    /** The field to show in the list */
    field: InventoryItemListField;

    /** Whether the list should be styled as a danger list (red) */
    danger?: boolean;

    /** Whether the list should be styled as a warning list (yellow) */
    warning?: boolean;

    /** Whether the list should be styled as an info list (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const INVENTORY_ITEM_LIST_FIELD_NAMES = {
    sku: "Sku",
    quantity: "Quantity",
    warehouse: "Warehouse",
};

/** Shows a Inventory Item list */
export function InventoryItemList(props: IInventoryItemListProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {INVENTORY_ITEM_LIST_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
