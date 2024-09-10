import { createRoot } from "react-dom/client";
import { useState, useEffect, useRef } from "react";
import { ProductBadgeDemo } from "./product-badge-demo";
import { BuildBadgeDemo } from "./build-badge-demo";

const DEMOS = {
    ProductBadgeDemo,
    BuildBadgeDemo,
};

const DEMO_NAMES = {
    ProductBadgeDemo: "Product Badge",
    BuildBadgeDemo: "Build Badge",
};

const DEMO_NAMES_LIST = Object.keys(DEMO_NAMES);

function App() {
    const currentDemoComponentRef = useRef(DEMOS[DEMO_NAMES_LIST[0]]);
    const [currentDemoKey, setCurrentDemoKey] = useState<string>(
        DEMO_NAMES_LIST[0]
    );
    const [demoUpdateKey, setDemoUpdateKey] = useState<number>(0);

    // Update the current demo component when the key changes
    useEffect(() => {
        currentDemoComponentRef.current = DEMOS[currentDemoKey];
        setDemoUpdateKey(demoUpdateKey + 1);
    }, [currentDemoKey]);

    return (
        <div className="p-2 flex flex-col justify-start items-start gap-2">
            <h1 className="text-2xl font-bold">Component Demo!</h1>

            <p className="text-gray-600">Select a component demo</p>

            <select
                value={currentDemoKey}
                onChange={(e) => setCurrentDemoKey(e.target.value)}
            >
                {DEMO_NAMES_LIST.map((demoKey) => (
                    <option key={demoKey} value={demoKey}>
                        {DEMO_NAMES[demoKey]}
                    </option>
                ))}
            </select>

            <currentDemoComponentRef.current key={demoUpdateKey} />
        </div>
    );
}

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
root.render(<App />);
