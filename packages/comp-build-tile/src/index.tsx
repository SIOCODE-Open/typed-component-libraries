import classNames from "classnames";

/** The field names available to be shown in the tile */
export type BuildTileField = "buildNumber" | "date" | "status";

/** Props for the BuildTile component */
export interface IBuildTileProps {
    /** One build of a program */
    value: {
        /** The build number of the build */
        buildNumber: number;
        /** The date of the build */
        date: string;
        /** The status of the build */
        status: string;
    };

    /** The field to show in the tile */
    field: BuildTileField;

    /** Whether the tile should be styled as a danger tile (red) */
    danger?: boolean;

    /** Whether the tile should be styled as a warning tile (yellow) */
    warning?: boolean;

    /** Whether the tile should be styled as an info tile (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const BUILD_TILE_FIELD_NAMES = {
    buildNumber: "Build Number",
    date: "Date",
    status: "Status",
};

/** Shows a Build tile */
export function BuildTile(props: IBuildTileProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {BUILD_TILE_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
