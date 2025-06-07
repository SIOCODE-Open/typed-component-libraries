import classNames from "classnames";

/** The field names available to be shown in the summary */
export type BuildSummaryField = "buildNumber" | "date" | "status";

/** Props for the BuildSummary component */
export interface IBuildSummaryProps {
    /** One build of a program */
    value: {
        /** The build number of the build */
        buildNumber: number;
        /** The date of the build */
        date: string;
        /** The status of the build */
        status: string;
    };

    /** The field to show in the summary */
    field: BuildSummaryField;

    /** Whether the summary should be styled as a danger summary (red) */
    danger?: boolean;

    /** Whether the summary should be styled as a warning summary (yellow) */
    warning?: boolean;

    /** Whether the summary should be styled as an info summary (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const BUILD_SUMMARY_FIELD_NAMES = {
    buildNumber: "Build Number",
    date: "Date",
    status: "Status",
};

/** Shows a Build summary */
export function BuildSummary(props: IBuildSummaryProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {BUILD_SUMMARY_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
