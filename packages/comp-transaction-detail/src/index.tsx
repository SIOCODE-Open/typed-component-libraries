import classNames from "classnames";

/** The field names available to be shown in the detail */
export type TransactionDetailField =
    | "transactionId"
    | "amount"
    | "date"
    | "status";

/** Props for the TransactionDetail component */
export interface ITransactionDetailProps {
    /** A financial transaction */
    value: {
        /** The transaction ID */
        transactionId: string;
        /** The transaction amount */
        amount: number;
        /** The transaction date */
        date: string;
        /** The status of the transaction */
        status: string;
    };

    /** The field to show in the detail */
    field: TransactionDetailField;

    /** Whether the detail should be styled as a danger detail (red) */
    danger?: boolean;

    /** Whether the detail should be styled as a warning detail (yellow) */
    warning?: boolean;

    /** Whether the detail should be styled as an info detail (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const TRANSACTION_DETAIL_FIELD_NAMES = {
    transactionId: "Transaction Id",
    amount: "Amount",
    date: "Date",
    status: "Status",
};

/** Shows a Transaction detail */
export function TransactionDetail(props: ITransactionDetailProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {TRANSACTION_DETAIL_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
