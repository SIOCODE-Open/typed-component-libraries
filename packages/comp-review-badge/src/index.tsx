import classNames from "classnames";

/** The field names available to be shown in the badge */
export type ReviewBadgeField = "id" | "productSku" | "rating" | "comment";

/** Props for the ReviewBadge component */
export interface IReviewBadgeProps {
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

    /** The field to show in the badge */
    field: ReviewBadgeField;

    /** Whether the badge should be styled as a danger badge (red) */
    danger?: boolean;

    /** Whether the badge should be styled as a warning badge (yellow) */
    warning?: boolean;

    /** Whether the badge should be styled as an info badge (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const REVIEW_BADGE_FIELD_NAMES = {
    id: "Id",
    productSku: "Product Sku",
    rating: "Rating",
    comment: "Comment",
};

/** Shows a Review badge */
export function ReviewBadge(props: IReviewBadgeProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {REVIEW_BADGE_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
