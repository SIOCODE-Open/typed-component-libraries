export function TestComponent(
    props: {
        message: string
    }
) {
    return <p>
        Message from TestComponent: {props.message}
    </p>;
}