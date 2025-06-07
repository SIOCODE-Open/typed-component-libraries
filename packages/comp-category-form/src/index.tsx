import classNames from "classnames";

/** The field names available to be shown in the form */
export type CategoryFormField = "id" | "name" | "description";

/** Props for the CategoryForm component */
export interface ICategoryFormProps {
    /** A product category */
    value: {
        /** Category identifier */
        id: string;
        /** Category name */
        name: string;
        /** Category description */
        description: string;
    };

    /** The field to show in the form */
    field: CategoryFormField;

    /** Whether the form should be styled as a danger form (red) */
    danger?: boolean;

    /** Whether the form should be styled as a warning form (yellow) */
    warning?: boolean;

    /** Whether the form should be styled as an info form (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const CATEGORY_FORM_FIELD_NAMES = {
    id: "Id",
    name: "Name",
    description: "Description",
};

/** Shows a Category form */
export function CategoryForm(props: ICategoryFormProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {CATEGORY_FORM_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
