import { useState, useEffect } from "react";
import {
    IBuildDataTableProps,
    BuildDataTableColumn,
    BUILD_DATA_TABLE_COLUMN_NAMES,
    BuildDataTable,
} from "component-library";

const BUILD_DATA_TABLE_COLUMNS_LIST = Object.keys(
    BUILD_DATA_TABLE_COLUMN_NAMES
) as Array<BuildDataTableColumn>;

const BUILD_DEFAULT_ARRAY = [
    {
        buildNumber: 0,
        date: "",
        status: "",
    },
];

export function BuildDataTableDemo() {
    const [demoColumns, setDemoColumns] = useState<Array<BuildDataTableColumn>>(
        BUILD_DATA_TABLE_COLUMNS_LIST
    );
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(BUILD_DEFAULT_ARRAY, null, 2)
    );
    const [demoDataArray, setDemoDataArray] =
        useState<Array<any>>(BUILD_DEFAULT_ARRAY);

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
                            (option) => option.value as BuildDataTableColumn
                        )
                    )
                }
            >
                <option value="buildNumber">Build Number</option>
                <option value="date">Date</option>
                <option value="status">Status</option>
            </select>

            <BuildDataTable value={demoDataArray} columns={demoColumns} />
        </div>
    );
}
