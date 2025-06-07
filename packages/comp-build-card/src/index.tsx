import classNames from "classnames";

/** The field names available to be shown in the card */
export type BuildCardField = "buildNumber" | "date" | "status";

/** Props for the BuildCard component */
export interface IBuildCardProps {
    /** One build of a program */
    value: {
        /** The build number of the build */
        buildNumber: number;
        /** The date of the build */
        date: string;
        /** The status of the build */
        status: string;
    };

    /** The field to show in the card */
    field: BuildCardField;

    /** Whether the card should be styled as a danger card (red) */
    danger?: boolean;

    /** Whether the card should be styled as a warning card (yellow) */
    warning?: boolean;

    /** Whether the card should be styled as an info card (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const BUILD_CARD_FIELD_NAMES = {
    buildNumber: "Build Number",
    date: "Date",
    status: "Status",
};

/** Shows a Build card */
export function BuildCard(props: IBuildCardProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {BUILD_CARD_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
