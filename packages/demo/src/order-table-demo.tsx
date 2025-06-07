import { useState, useEffect } from "react";
import {
    IOrderDataTableProps,
    OrderDataTableColumn,
    ORDER_DATA_TABLE_COLUMN_NAMES,
    OrderDataTable,
} from "component-library";

const ORDER_DATA_TABLE_COLUMNS_LIST = Object.keys(
    ORDER_DATA_TABLE_COLUMN_NAMES
) as Array<OrderDataTableColumn>;

const ORDER_DEFAULT_ARRAY = [
    {
        orderId: "",
        customerId: "",
        total: 0,
        status: "",
    },
];

export function OrderDataTableDemo() {
    const [demoColumns, setDemoColumns] = useState<Array<OrderDataTableColumn>>(
        ORDER_DATA_TABLE_COLUMNS_LIST
    );
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(ORDER_DEFAULT_ARRAY, null, 2)
    );
    const [demoDataArray, setDemoDataArray] =
        useState<Array<any>>(ORDER_DEFAULT_ARRAY);

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
                            (option) => option.value as OrderDataTableColumn
                        )
                    )
                }
            >
                <option value="orderId">Order Id</option>
                <option value="customerId">Customer Id</option>
                <option value="total">Total</option>
                <option value="status">Status</option>
            </select>

            <OrderDataTable value={demoDataArray} columns={demoColumns} />
        </div>
    );
}
