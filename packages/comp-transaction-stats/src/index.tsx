import classNames from "classnames";

/** The field names available to be shown in the stats */
export type TransactionStatsField =
    | "transactionId"
    | "amount"
    | "date"
    | "status";

/** Props for the TransactionStats component */
export interface ITransactionStatsProps {
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

    /** The field to show in the stats */
    field: TransactionStatsField;

    /** Whether the stats should be styled as a danger stats (red) */
    danger?: boolean;

    /** Whether the stats should be styled as a warning stats (yellow) */
    warning?: boolean;

    /** Whether the stats should be styled as an info stats (blue) */
    info?: boolean;
}

/** The capitalized names of the fields */
export const TRANSACTION_STATS_FIELD_NAMES = {
    transactionId: "Transaction Id",
    amount: "Amount",
    date: "Date",
    status: "Status",
};

/** Shows a Transaction stats */
export function TransactionStats(props: ITransactionStatsProps) {
    const valueClassname = classNames("text-white px-2 py-1 rounded-r-lg", {
        "bg-red-500": props.danger,
        "bg-yellow-500": props.warning,
        "bg-blue-500": props.info,
        "bg-green-500": !props.danger && !props.warning && !props.info,
    });
    return (
        <div className="flex flex-row justify-start items-center">
            <div className="bg-gray-600 text-white px-2 py-1 rounded-l-lg">
                {TRANSACTION_STATS_FIELD_NAMES[props.field]}
            </div>
            <div className={valueClassname}>{props.value[props.field]}</div>
        </div>
    );
}
