import classNames from "classnames";

/** The field names available to be shown in the detail */
export type SupplierDetailField = "id" | "name" | "contactEmail" | "active";

/** Props for the SupplierDetail component */
export interface ISupplierDetailProps {
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

    /** The field to show in the detail */
    field: SupplierDetailField;

    /** Whether the detail should be styled as a danger detail (red) */
    danger?: boolean;

    /** Whether the detail should be styled as a warning detail (yellow) */
    warning?: boolean;

    /** Whether the detail should be styled as an info detail (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const SUPPLIER_DETAIL_FIELD_NAMES = {
    id: "Id",
    name: "Name",
    contactEmail: "Contact Email",
    active: "Active",
};

/** Shows a Supplier detail */
export function SupplierDetail(props: ISupplierDetailProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {SUPPLIER_DETAIL_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
