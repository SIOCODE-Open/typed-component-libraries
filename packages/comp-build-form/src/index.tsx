import classNames from "classnames";

/** The field names available to be shown in the form */
export type BuildFormField = "buildNumber" | "date" | "status";

/** Props for the BuildForm component */
export interface IBuildFormProps {
    /** One build of a program */
    value: {
        /** The build number of the build */
        buildNumber: number;
        /** The date of the build */
        date: string;
        /** The status of the build */
        status: string;
    };

    /** The field to show in the form */
    field: BuildFormField;

    /** Whether the form should be styled as a danger form (red) */
    danger?: boolean;

    /** Whether the form should be styled as a warning form (yellow) */
    warning?: boolean;

    /** Whether the form should be styled as an info form (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const BUILD_FORM_FIELD_NAMES = {
    buildNumber: "Build Number",
    date: "Date",
    status: "Status",
};

/** Shows a Build form */
export function BuildForm(props: IBuildFormProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {BUILD_FORM_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
