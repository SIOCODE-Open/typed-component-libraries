import classNames from "classnames";

/** The field names available to be shown in the summary */
export type TransactionSummaryField =
    | "transactionId"
    | "amount"
    | "date"
    | "status";

/** Props for the TransactionSummary component */
export interface ITransactionSummaryProps {
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

    /** The field to show in the summary */
    field: TransactionSummaryField;

    /** Whether the summary should be styled as a danger summary (red) */
    danger?: boolean;

    /** Whether the summary should be styled as a warning summary (yellow) */
    warning?: boolean;

    /** Whether the summary should be styled as an info summary (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const TRANSACTION_SUMMARY_FIELD_NAMES = {
    transactionId: "Transaction Id",
    amount: "Amount",
    date: "Date",
    status: "Status",
};

/** Shows a Transaction summary */
export function TransactionSummary(props: ITransactionSummaryProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {TRANSACTION_SUMMARY_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
