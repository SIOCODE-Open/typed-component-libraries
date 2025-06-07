import classNames from "classnames";

/** The field names available to be shown in the card */
export type CategoryCardField = "id" | "name" | "description";

/** Props for the CategoryCard component */
export interface ICategoryCardProps {
    /** A product category */
    value: {
        /** Category identifier */
        id: string;
        /** Category name */
        name: string;
        /** Category description */
        description: string;
    };

    /** The field to show in the card */
    field: CategoryCardField;

    /** Whether the card should be styled as a danger card (red) */
    danger?: boolean;

    /** Whether the card should be styled as a warning card (yellow) */
    warning?: boolean;

    /** Whether the card should be styled as an info card (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const CATEGORY_CARD_FIELD_NAMES = {
    id: "Id",
    name: "Name",
    description: "Description",
};

/** Shows a Category card */
export function CategoryCard(props: ICategoryCardProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {CATEGORY_CARD_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
