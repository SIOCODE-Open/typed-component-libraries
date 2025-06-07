import { useState, useEffect } from "react";
import {
    ITransactionDataTableProps,
    TransactionDataTableColumn,
    TRANSACTION_DATA_TABLE_COLUMN_NAMES,
    TransactionDataTable,
} from "component-library";

const TRANSACTION_DATA_TABLE_COLUMNS_LIST = Object.keys(
    TRANSACTION_DATA_TABLE_COLUMN_NAMES
) as Array<TransactionDataTableColumn>;

const TRANSACTION_DEFAULT_ARRAY = [
    {
        transactionId: "",
        amount: 0,
        date: "",
        status: "",
    },
];

export function TransactionDataTableDemo() {
    const [demoColumns, setDemoColumns] = useState<
        Array<TransactionDataTableColumn>
    >(TRANSACTION_DATA_TABLE_COLUMNS_LIST);
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(TRANSACTION_DEFAULT_ARRAY, null, 2)
    );
    const [demoDataArray, setDemoDataArray] = useState<Array<any>>(
        TRANSACTION_DEFAULT_ARRAY
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
                                option.value as TransactionDataTableColumn
                        )
                    )
                }
            >
                <option value="transactionId">Transaction Id</option>
                <option value="amount">Amount</option>
                <option value="date">Date</option>
                <option value="status">Status</option>
            </select>

            <TransactionDataTable value={demoDataArray} columns={demoColumns} />
        </div>
    );
}
