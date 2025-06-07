import classNames from "classnames";

/** The field names available to be shown in the tile */
export type SupplierTileField = "id" | "name" | "contactEmail" | "active";

/** Props for the SupplierTile component */
export interface ISupplierTileProps {
    /** A supplier of products */
    value: {
        /** Supplier identifier */
        id: string;
        /** Supplier name */
        name: string;
        /** Contact email */
        contactEmail: string;
        /** Whether supplier is active */
        active: boolean;
    };

    /** The field to show in the tile */
    field: SupplierTileField;

    /** Whether the tile should be styled as a danger tile (red) */
    danger?: boolean;

    /** Whether the tile should be styled as a warning tile (yellow) */
    warning?: boolean;

    /** Whether the tile should be styled as an info tile (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const SUPPLIER_TILE_FIELD_NAMES = {
    id: "Id",
    name: "Name",
    contactEmail: "Contact Email",
    active: "Active",
};

/** Shows a Supplier tile */
export function SupplierTile(props: ISupplierTileProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {SUPPLIER_TILE_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
