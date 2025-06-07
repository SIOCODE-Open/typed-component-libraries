import { useState, useEffect } from "react";
import {
    IInventoryItemDataTableProps,
    InventoryItemDataTableColumn,
    INVENTORY_ITEM_DATA_TABLE_COLUMN_NAMES,
    InventoryItemDataTable,
} from "component-library";

const INVENTORY_ITEM_DATA_TABLE_COLUMNS_LIST = Object.keys(
    INVENTORY_ITEM_DATA_TABLE_COLUMN_NAMES
) as Array<InventoryItemDataTableColumn>;

const INVENTORY_ITEM_DEFAULT_ARRAY = [
    {
        sku: "",
        quantity: 0,
        warehouse: "",
    },
];

export function InventoryItemDataTableDemo() {
    const [demoColumns, setDemoColumns] = useState<
        Array<InventoryItemDataTableColumn>
    >(INVENTORY_ITEM_DATA_TABLE_COLUMNS_LIST);
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(INVENTORY_ITEM_DEFAULT_ARRAY, null, 2)
    );
    const [demoDataArray, setDemoDataArray] = useState<Array<any>>(
        INVENTORY_ITEM_DEFAULT_ARRAY
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
                            (option) =>
                                option.value as InventoryItemDataTableColumn
                        )
                    )
                }
            >
                <option value="sku">Sku</option>
                <option value="quantity">Quantity</option>
                <option value="warehouse">Warehouse</option>
            </select>

            <InventoryItemDataTable
                value={demoDataArray}
                columns={demoColumns}
            />
        </div>
    );
}
