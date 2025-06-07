import classNames from "classnames";

/** The field names available to be shown in the stats */
export type ReviewStatsField = "id" | "productSku" | "rating" | "comment";

/** Props for the ReviewStats component */
export interface IReviewStatsProps {
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

    /** The field to show in the stats */
    field: ReviewStatsField;

    /** Whether the stats should be styled as a danger stats (red) */
    danger?: boolean;

    /** Whether the stats should be styled as a warning stats (yellow) */
    warning?: boolean;

    /** Whether the stats should be styled as an info stats (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const REVIEW_STATS_FIELD_NAMES = {
    id: "Id",
    productSku: "Product Sku",
    rating: "Rating",
    comment: "Comment",
};

/** Shows a Review stats */
export function ReviewStats(props: IReviewStatsProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {REVIEW_STATS_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
