import { useState, useEffect } from "react";
import {
    ICustomerDataTableProps,
    CustomerDataTableColumn,
    CUSTOMER_DATA_TABLE_COLUMN_NAMES,
    CustomerDataTable,
} from "component-library";

const CUSTOMER_DATA_TABLE_COLUMNS_LIST = Object.keys(
    CUSTOMER_DATA_TABLE_COLUMN_NAMES
) as Array<CustomerDataTableColumn>;

const CUSTOMER_DEFAULT_ARRAY = [
    {
        id: "",
        name: "",
        email: "",
        loyaltyPoints: 0,
    },
];

export function CustomerDataTableDemo() {
    const [demoColumns, setDemoColumns] = useState<
        Array<CustomerDataTableColumn>
    >(CUSTOMER_DATA_TABLE_COLUMNS_LIST);
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(CUSTOMER_DEFAULT_ARRAY, null, 2)
    );
    const [demoDataArray, setDemoDataArray] = useState<Array<any>>(
        CUSTOMER_DEFAULT_ARRAY
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
                            (option) => option.value as CustomerDataTableColumn
                        )
                    )
                }
            >
                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="loyaltyPoints">Loyalty Points</option>
            </select>

            <CustomerDataTable value={demoDataArray} columns={demoColumns} />
        </div>
    );
}
