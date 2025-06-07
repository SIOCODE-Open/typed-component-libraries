import classNames from "classnames";

/** The field names available to be shown in the stats */
export type SupplierStatsField = "id" | "name" | "contactEmail" | "active";

/** Props for the SupplierStats component */
export interface ISupplierStatsProps {
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

    /** The field to show in the stats */
    field: SupplierStatsField;

    /** Whether the stats should be styled as a danger stats (red) */
    danger?: boolean;

    /** Whether the stats should be styled as a warning stats (yellow) */
    warning?: boolean;

    /** Whether the stats should be styled as an info stats (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const SUPPLIER_STATS_FIELD_NAMES = {
    id: "Id",
    name: "Name",
    contactEmail: "Contact Email",
    active: "Active",
};

/** Shows a Supplier stats */
export function SupplierStats(props: ISupplierStatsProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {SUPPLIER_STATS_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
