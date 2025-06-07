import classNames from "classnames";

/** The field names available to be shown in the detail */
export type ProductDetailField =
    | "sku"
    | "name"
    | "description"
    | "price"
    | "isAvailable";

/** Props for the ProductDetail component */
export interface IProductDetailProps {
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

    /** The field to show in the detail */
    field: ProductDetailField;

    /** Whether the detail should be styled as a danger detail (red) */
    danger?: boolean;

    /** Whether the detail should be styled as a warning detail (yellow) */
    warning?: boolean;

    /** Whether the detail should be styled as an info detail (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const PRODUCT_DETAIL_FIELD_NAMES = {
    sku: "Sku",
    name: "Name",
    description: "Description",
    price: "Price",
    isAvailable: "Is Available",
};

/** Shows a Product detail */
export function ProductDetail(props: IProductDetailProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {PRODUCT_DETAIL_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
