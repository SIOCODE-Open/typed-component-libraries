import classNames from "classnames";

/** The field names available to be shown in the card */
export type InventoryItemCardField = "sku" | "quantity" | "warehouse";

/** Props for the InventoryItemCard component */
export interface IInventoryItemCardProps {
    /** Inventory entry */
    value: {
        /** Product SKU */
        sku: string;
        /** Quantity in stock */
        quantity: number;
        /** Warehouse location */
        warehouse: string;
    };

    /** The field to show in the card */
    field: InventoryItemCardField;

    /** Whether the card should be styled as a danger card (red) */
    danger?: boolean;

    /** Whether the card should be styled as a warning card (yellow) */
    warning?: boolean;

    /** Whether the card should be styled as an info card (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const INVENTORY_ITEM_CARD_FIELD_NAMES = {
    sku: "Sku",
    quantity: "Quantity",
    warehouse: "Warehouse",
};

/** Shows a Inventory Item card */
export function InventoryItemCard(props: IInventoryItemCardProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {INVENTORY_ITEM_CARD_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
