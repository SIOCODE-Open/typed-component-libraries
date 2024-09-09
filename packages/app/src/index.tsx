import { createRoot } from "react-dom/client";

function App() {
    return <>
        <h1 className="text-2xl font-bold">My Application works!</h1>
    </>
}

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
root.render(<App />);
