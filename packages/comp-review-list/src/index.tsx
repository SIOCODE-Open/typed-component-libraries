import classNames from "classnames";

/** The field names available to be shown in the list */
export type ReviewListField = "id" | "productSku" | "rating" | "comment";

/** Props for the ReviewList component */
export interface IReviewListProps {
    /** A product review */
    value: {
        /** Review identifier */
        id: string;
        /** The reviewed product SKU */
        productSku: string;
        /** Rating 1-5 */
        rating: number;
        /** Review comment */
        comment: string;
    };

    /** The field to show in the list */
    field: ReviewListField;

    /** Whether the list should be styled as a danger list (red) */
    danger?: boolean;

    /** Whether the list should be styled as a warning list (yellow) */
    warning?: boolean;

    /** Whether the list should be styled as an info list (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const REVIEW_LIST_FIELD_NAMES = {
    id: "Id",
    productSku: "Product Sku",
    rating: "Rating",
    comment: "Comment",
};

/** Shows a Review list */
export function ReviewList(props: IReviewListProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {REVIEW_LIST_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
