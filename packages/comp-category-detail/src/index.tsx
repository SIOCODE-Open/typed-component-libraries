import classNames from "classnames";

/** The field names available to be shown in the detail */
export type CategoryDetailField = "id" | "name" | "description";

/** Props for the CategoryDetail component */
export interface ICategoryDetailProps {
    /** A product category */
    value: {
        /** Category identifier */
        id: string;
        /** Category name */
        name: string;
        /** Category description */
        description: string;
    };

    /** The field to show in the detail */
    field: CategoryDetailField;

    /** Whether the detail should be styled as a danger detail (red) */
    danger?: boolean;

    /** Whether the detail should be styled as a warning detail (yellow) */
    warning?: boolean;

    /** Whether the detail should be styled as an info detail (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const CATEGORY_DETAIL_FIELD_NAMES = {
    id: "Id",
    name: "Name",
    description: "Description",
};

/** Shows a Category detail */
export function CategoryDetail(props: ICategoryDetailProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {CATEGORY_DETAIL_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
