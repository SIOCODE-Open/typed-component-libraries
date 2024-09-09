import { createRoot } from "react-dom/client";
import { ProductBadge } from "component-library";

function App() {
    const testProduct = {
        sku: "123-456-789",
        name: "Vacuum Cleaner",
        description: "A vacuum cleaner that cleans your house",
        price: 99.99,
        isAvailable: true,
    }

    return <div className="p-2 flex flex-col justify-start items-start gap-2">
        <h1 className="text-2xl font-bold">Component Demo works!</h1>

        <ProductBadge value={testProduct} field="sku" />
        <ProductBadge value={testProduct} field="name" danger />
        <ProductBadge value={testProduct} field="price" info />
        <ProductBadge value={testProduct} field="description" warning />
    </div>
}

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
root.render(<App />);
