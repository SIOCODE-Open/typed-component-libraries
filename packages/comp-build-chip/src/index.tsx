import classNames from "classnames";

/** The field names available to be shown in the chip */
export type BuildChipField = "buildNumber" | "date" | "status";

/** Props for the BuildChip component */
export interface IBuildChipProps {
    /** One build of a program */
    value: {
        /** The build number of the build */
        buildNumber: number;
        /** The date of the build */
        date: string;
        /** The status of the build */
        status: string;
    };

    /** The field to show in the chip */
    field: BuildChipField;

    /** Whether the chip should be styled as a danger chip (red) */
    danger?: boolean;

    /** Whether the chip should be styled as a warning chip (yellow) */
    warning?: boolean;

    /** Whether the chip should be styled as an info chip (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const BUILD_CHIP_FIELD_NAMES = {
    buildNumber: "Build Number",
    date: "Date",
    status: "Status",
};

/** Shows a Build chip */
export function BuildChip(props: IBuildChipProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {BUILD_CHIP_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
