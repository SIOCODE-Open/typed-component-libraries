import { useState, useEffect } from "react";
import {
    IProductDataTableProps,
    ProductDataTableColumn,
    PRODUCT_DATA_TABLE_COLUMN_NAMES,
    ProductDataTable,
} from "component-library";

const PRODUCT_DATA_TABLE_COLUMNS_LIST = Object.keys(
    PRODUCT_DATA_TABLE_COLUMN_NAMES
) as Array<ProductDataTableColumn>;

const PRODUCT_DEFAULT_ARRAY = [
    {
        sku: "",
        name: "",
        description: "",
        price: 0,
        isAvailable: false,
    },
];

export function ProductDataTableDemo() {
    const [demoColumns, setDemoColumns] = useState<
        Array<ProductDataTableColumn>
    >(PRODUCT_DATA_TABLE_COLUMNS_LIST);
    const [demoDataJson, setDemoDataJson] = useState<string>(
        JSON.stringify(PRODUCT_DEFAULT_ARRAY, null, 2)
    );
    const [demoDataArray, setDemoDataArray] = useState<Array<any>>(
        PRODUCT_DEFAULT_ARRAY
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
                            (option) => option.value as ProductDataTableColumn
                        )
                    )
                }
            >
                <option value="sku">Sku</option>
                <option value="name">Name</option>
                <option value="description">Description</option>
                <option value="price">Price</option>
                <option value="isAvailable">Is Available</option>
            </select>

            <ProductDataTable value={demoDataArray} columns={demoColumns} />
        </div>
    );
}
