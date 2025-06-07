import { useState, useEffect } from "react";
import {
    IReviewDataTableProps,
    ReviewDataTableColumn,
    REVIEW_DATA_TABLE_COLUMN_NAMES,
    ReviewDataTable,
} from "component-library";

const REVIEW_DATA_TABLE_COLUMNS_LIST = Object.keys(
    REVIEW_DATA_TABLE_COLUMN_NAMES
) as Array<ReviewDataTableColumn>;

const REVIEW_DEFAULT_ARRAY = [
    {
        id: "",
        productSku: "",
        rating: 0,
        comment: "",
    },
];

export function ReviewDataTableDemo() {
    const [demoColumns, setDemoColumns] = useState<
        Array<ReviewDataTableColumn>
    >(REVIEW_DATA_TABLE_COLUMNS_LIST);
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(REVIEW_DEFAULT_ARRAY, null, 2)
    );
    const [demoDataArray, setDemoDataArray] =
        useState<Array<any>>(REVIEW_DEFAULT_ARRAY);

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
                            (option) => option.value as ReviewDataTableColumn
                        )
                    )
                }
            >
                <option value="id">Id</option>
                <option value="productSku">Product Sku</option>
                <option value="rating">Rating</option>
                <option value="comment">Comment</option>
            </select>

            <ReviewDataTable value={demoDataArray} columns={demoColumns} />
        </div>
    );
}
