import classNames from "classnames";

/** The field names available to be shown in the list */
export type ProductListField =
    | "sku"
    | "name"
    | "description"
    | "price"
    | "isAvailable";

/** Props for the ProductList component */
export interface IProductListProps {
    /** A product that is sold in a webshop */
    value: {
        /** The stock keeping unit */
        sku: string;
        /** The name of the product */
        name: string;
        /** A description of the product */
        description: string;
        /** The price of the product */
        price: number;
        /** Whether the product is available */
        isAvailable: boolean;
    };

    /** The field to show in the list */
    field: ProductListField;

    /** Whether the list should be styled as a danger list (red) */
    danger?: boolean;

    /** Whether the list should be styled as a warning list (yellow) */
    warning?: boolean;

    /** Whether the list should be styled as an info list (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const PRODUCT_LIST_FIELD_NAMES = {
    sku: "Sku",
    name: "Name",
    description: "Description",
    price: "Price",
    isAvailable: "Is Available",
};

/** Shows a Product list */
export function ProductList(props: IProductListProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {PRODUCT_LIST_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
