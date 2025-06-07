import { useState, useEffect } from "react";
import {
    ISupplierDataTableProps,
    SupplierDataTableColumn,
    SUPPLIER_DATA_TABLE_COLUMN_NAMES,
    SupplierDataTable,
} from "component-library";

const SUPPLIER_DATA_TABLE_COLUMNS_LIST = Object.keys(
    SUPPLIER_DATA_TABLE_COLUMN_NAMES
) as Array<SupplierDataTableColumn>;

const SUPPLIER_DEFAULT_ARRAY = [
    {
        id: "",
        name: "",
        contactEmail: "",
        active: false,
    },
];

export function SupplierDataTableDemo() {
    const [demoColumns, setDemoColumns] = useState<
        Array<SupplierDataTableColumn>
    >(SUPPLIER_DATA_TABLE_COLUMNS_LIST);
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(SUPPLIER_DEFAULT_ARRAY, null, 2)
    );
    const [demoDataArray, setDemoDataArray] = useState<Array<any>>(
        SUPPLIER_DEFAULT_ARRAY
    );

    // Try to update the demo data array when the JSON changes
    useEffect(() => {
        try {
            setDemoDataArray(JSON.parse(demoDataJson));
        } catch (error) {
            console.error(error);
        }
    }, [demoDataJson]);

    return (
        <div className="flex flex-col justify-start items-center gap-2">
            <p className="text-gray-600">Update demo data below</p>
            <textarea
                rows={10}
                cols={40}
                value={demoDataJson}
                onChange={(e) => setDemoDataJson(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 font-mono"
                placeholder="Enter an array of objects here"
            />

            <p className="text-gray-600">Select columns to show</p>
            <select
                multiple={true}
                value={demoColumns}
                onChange={(e) =>
                    setDemoColumns(
                        Array.from(
                            e.target.selectedOptions,
                            (option) => option.value as SupplierDataTableColumn
                        )
                    )
                }
            >
                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="contactEmail">Contact Email</option>
                <option value="active">Active</option>
            </select>

            <SupplierDataTable value={demoDataArray} columns={demoColumns} />
        </div>
    );
}
