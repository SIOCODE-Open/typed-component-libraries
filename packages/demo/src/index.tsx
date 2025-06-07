import { createRoot } from "react-dom/client";
import { useState, useEffect, useRef } from "react";
import { ProductBadgeDemo } from "./product-badge-demo";
import { ProductDataTableDemo } from "./product-table-demo";
import { ProductCardDemo } from "./product-card-demo";
import { ProductListDemo } from "./product-list-demo";
import { ProductDetailDemo } from "./product-detail-demo";
import { ProductSummaryDemo } from "./product-summary-demo";
import { ProductStatsDemo } from "./product-stats-demo";
import { ProductTileDemo } from "./product-tile-demo";
import { ProductChipDemo } from "./product-chip-demo";
import { ProductFormDemo } from "./product-form-demo";
import { BuildBadgeDemo } from "./build-badge-demo";
import { BuildDataTableDemo } from "./build-table-demo";
import { BuildCardDemo } from "./build-card-demo";
import { BuildListDemo } from "./build-list-demo";
import { BuildDetailDemo } from "./build-detail-demo";
import { BuildSummaryDemo } from "./build-summary-demo";
import { BuildStatsDemo } from "./build-stats-demo";
import { BuildTileDemo } from "./build-tile-demo";
import { BuildChipDemo } from "./build-chip-demo";
import { BuildFormDemo } from "./build-form-demo";
import { UserBadgeDemo } from "./user-badge-demo";
import { UserDataTableDemo } from "./user-table-demo";
import { UserCardDemo } from "./user-card-demo";
import { UserListDemo } from "./user-list-demo";
import { UserDetailDemo } from "./user-detail-demo";
import { UserSummaryDemo } from "./user-summary-demo";
import { UserStatsDemo } from "./user-stats-demo";
import { UserTileDemo } from "./user-tile-demo";
import { UserChipDemo } from "./user-chip-demo";
import { UserFormDemo } from "./user-form-demo";
import { OrderBadgeDemo } from "./order-badge-demo";
import { OrderDataTableDemo } from "./order-table-demo";
import { OrderCardDemo } from "./order-card-demo";
import { OrderListDemo } from "./order-list-demo";
import { OrderDetailDemo } from "./order-detail-demo";
import { OrderSummaryDemo } from "./order-summary-demo";
import { OrderStatsDemo } from "./order-stats-demo";
import { OrderTileDemo } from "./order-tile-demo";
import { OrderChipDemo } from "./order-chip-demo";
import { OrderFormDemo } from "./order-form-demo";
import { TransactionBadgeDemo } from "./transaction-badge-demo";
import { TransactionDataTableDemo } from "./transaction-table-demo";
import { TransactionCardDemo } from "./transaction-card-demo";
import { TransactionListDemo } from "./transaction-list-demo";
import { TransactionDetailDemo } from "./transaction-detail-demo";
import { TransactionSummaryDemo } from "./transaction-summary-demo";
import { TransactionStatsDemo } from "./transaction-stats-demo";
import { TransactionTileDemo } from "./transaction-tile-demo";
import { TransactionChipDemo } from "./transaction-chip-demo";
import { TransactionFormDemo } from "./transaction-form-demo";
import { CustomerBadgeDemo } from "./customer-badge-demo";
import { CustomerDataTableDemo } from "./customer-table-demo";
import { CustomerCardDemo } from "./customer-card-demo";
import { CustomerListDemo } from "./customer-list-demo";
import { CustomerDetailDemo } from "./customer-detail-demo";
import { CustomerSummaryDemo } from "./customer-summary-demo";
import { CustomerStatsDemo } from "./customer-stats-demo";
import { CustomerTileDemo } from "./customer-tile-demo";
import { CustomerChipDemo } from "./customer-chip-demo";
import { CustomerFormDemo } from "./customer-form-demo";
import { CategoryBadgeDemo } from "./category-badge-demo";
import { CategoryDataTableDemo } from "./category-table-demo";
import { CategoryCardDemo } from "./category-card-demo";
import { CategoryListDemo } from "./category-list-demo";
import { CategoryDetailDemo } from "./category-detail-demo";
import { CategorySummaryDemo } from "./category-summary-demo";
import { CategoryStatsDemo } from "./category-stats-demo";
import { CategoryTileDemo } from "./category-tile-demo";
import { CategoryChipDemo } from "./category-chip-demo";
import { CategoryFormDemo } from "./category-form-demo";
import { ReviewBadgeDemo } from "./review-badge-demo";
import { ReviewDataTableDemo } from "./review-table-demo";
import { ReviewCardDemo } from "./review-card-demo";
import { ReviewListDemo } from "./review-list-demo";
import { ReviewDetailDemo } from "./review-detail-demo";
import { ReviewSummaryDemo } from "./review-summary-demo";
import { ReviewStatsDemo } from "./review-stats-demo";
import { ReviewTileDemo } from "./review-tile-demo";
import { ReviewChipDemo } from "./review-chip-demo";
import { ReviewFormDemo } from "./review-form-demo";
import { InventoryItemBadgeDemo } from "./inventory-item-badge-demo";
import { InventoryItemDataTableDemo } from "./inventory-item-table-demo";
import { InventoryItemCardDemo } from "./inventory-item-card-demo";
import { InventoryItemListDemo } from "./inventory-item-list-demo";
import { InventoryItemDetailDemo } from "./inventory-item-detail-demo";
import { InventoryItemSummaryDemo } from "./inventory-item-summary-demo";
import { InventoryItemStatsDemo } from "./inventory-item-stats-demo";
import { InventoryItemTileDemo } from "./inventory-item-tile-demo";
import { InventoryItemChipDemo } from "./inventory-item-chip-demo";
import { InventoryItemFormDemo } from "./inventory-item-form-demo";
import { SupplierBadgeDemo } from "./supplier-badge-demo";
import { SupplierDataTableDemo } from "./supplier-table-demo";
import { SupplierCardDemo } from "./supplier-card-demo";
import { SupplierListDemo } from "./supplier-list-demo";
import { SupplierDetailDemo } from "./supplier-detail-demo";
import { SupplierSummaryDemo } from "./supplier-summary-demo";
import { SupplierStatsDemo } from "./supplier-stats-demo";
import { SupplierTileDemo } from "./supplier-tile-demo";
import { SupplierChipDemo } from "./supplier-chip-demo";
import { SupplierFormDemo } from "./supplier-form-demo";

const DEMOS = {
    ProductBadgeDemo,
    ProductDataTableDemo,
    ProductCardDemo,
    ProductListDemo,
    ProductDetailDemo,
    ProductSummaryDemo,
    ProductStatsDemo,
    ProductTileDemo,
    ProductChipDemo,
    ProductFormDemo,
    BuildBadgeDemo,
    BuildDataTableDemo,
    BuildCardDemo,
    BuildListDemo,
    BuildDetailDemo,
    BuildSummaryDemo,
    BuildStatsDemo,
    BuildTileDemo,
    BuildChipDemo,
    BuildFormDemo,
    UserBadgeDemo,
    UserDataTableDemo,
    UserCardDemo,
    UserListDemo,
    UserDetailDemo,
    UserSummaryDemo,
    UserStatsDemo,
    UserTileDemo,
    UserChipDemo,
    UserFormDemo,
    OrderBadgeDemo,
    OrderDataTableDemo,
    OrderCardDemo,
    OrderListDemo,
    OrderDetailDemo,
    OrderSummaryDemo,
    OrderStatsDemo,
    OrderTileDemo,
    OrderChipDemo,
    OrderFormDemo,
    TransactionBadgeDemo,
    TransactionDataTableDemo,
    TransactionCardDemo,
    TransactionListDemo,
    TransactionDetailDemo,
    TransactionSummaryDemo,
    TransactionStatsDemo,
    TransactionTileDemo,
    TransactionChipDemo,
    TransactionFormDemo,
    CustomerBadgeDemo,
    CustomerDataTableDemo,
    CustomerCardDemo,
    CustomerListDemo,
    CustomerDetailDemo,
    CustomerSummaryDemo,
    CustomerStatsDemo,
    CustomerTileDemo,
    CustomerChipDemo,
    CustomerFormDemo,
    CategoryBadgeDemo,
    CategoryDataTableDemo,
    CategoryCardDemo,
    CategoryListDemo,
    CategoryDetailDemo,
    CategorySummaryDemo,
    CategoryStatsDemo,
    CategoryTileDemo,
    CategoryChipDemo,
    CategoryFormDemo,
    ReviewBadgeDemo,
    ReviewDataTableDemo,
    ReviewCardDemo,
    ReviewListDemo,
    ReviewDetailDemo,
    ReviewSummaryDemo,
    ReviewStatsDemo,
    ReviewTileDemo,
    ReviewChipDemo,
    ReviewFormDemo,
    InventoryItemBadgeDemo,
    InventoryItemDataTableDemo,
    InventoryItemCardDemo,
    InventoryItemListDemo,
    InventoryItemDetailDemo,
    InventoryItemSummaryDemo,
    InventoryItemStatsDemo,
    InventoryItemTileDemo,
    InventoryItemChipDemo,
    InventoryItemFormDemo,
    SupplierBadgeDemo,
    SupplierDataTableDemo,
    SupplierCardDemo,
    SupplierListDemo,
    SupplierDetailDemo,
    SupplierSummaryDemo,
    SupplierStatsDemo,
    SupplierTileDemo,
    SupplierChipDemo,
    SupplierFormDemo,
};

const DEMO_NAMES = {
    ProductBadgeDemo: "Product Badge",
    ProductDataTableDemo: "Product Data Table",
    ProductCardDemo: "Product Card",
    ProductListDemo: "Product List",
    ProductDetailDemo: "Product Detail",
    ProductSummaryDemo: "Product Summary",
    ProductStatsDemo: "Product Stats",
    ProductTileDemo: "Product Tile",
    ProductChipDemo: "Product Chip",
    ProductFormDemo: "Product Form",
    BuildBadgeDemo: "Build Badge",
    BuildDataTableDemo: "Build Data Table",
    BuildCardDemo: "Build Card",
    BuildListDemo: "Build List",
    BuildDetailDemo: "Build Detail",
    BuildSummaryDemo: "Build Summary",
    BuildStatsDemo: "Build Stats",
    BuildTileDemo: "Build Tile",
    BuildChipDemo: "Build Chip",
    BuildFormDemo: "Build Form",
    UserBadgeDemo: "User Badge",
    UserDataTableDemo: "User Data Table",
    UserCardDemo: "User Card",
    UserListDemo: "User List",
    UserDetailDemo: "User Detail",
    UserSummaryDemo: "User Summary",
    UserStatsDemo: "User Stats",
    UserTileDemo: "User Tile",
    UserChipDemo: "User Chip",
    UserFormDemo: "User Form",
    OrderBadgeDemo: "Order Badge",
    OrderDataTableDemo: "Order Data Table",
    OrderCardDemo: "Order Card",
    OrderListDemo: "Order List",
    OrderDetailDemo: "Order Detail",
    OrderSummaryDemo: "Order Summary",
    OrderStatsDemo: "Order Stats",
    OrderTileDemo: "Order Tile",
    OrderChipDemo: "Order Chip",
    OrderFormDemo: "Order Form",
    TransactionBadgeDemo: "Transaction Badge",
    TransactionDataTableDemo: "Transaction Data Table",
    TransactionCardDemo: "Transaction Card",
    TransactionListDemo: "Transaction List",
    TransactionDetailDemo: "Transaction Detail",
    TransactionSummaryDemo: "Transaction Summary",
    TransactionStatsDemo: "Transaction Stats",
    TransactionTileDemo: "Transaction Tile",
    TransactionChipDemo: "Transaction Chip",
    TransactionFormDemo: "Transaction Form",
    CustomerBadgeDemo: "Customer Badge",
    CustomerDataTableDemo: "Customer Data Table",
    CustomerCardDemo: "Customer Card",
    CustomerListDemo: "Customer List",
    CustomerDetailDemo: "Customer Detail",
    CustomerSummaryDemo: "Customer Summary",
    CustomerStatsDemo: "Customer Stats",
    CustomerTileDemo: "Customer Tile",
    CustomerChipDemo: "Customer Chip",
    CustomerFormDemo: "Customer Form",
    CategoryBadgeDemo: "Category Badge",
    CategoryDataTableDemo: "Category Data Table",
    CategoryCardDemo: "Category Card",
    CategoryListDemo: "Category List",
    CategoryDetailDemo: "Category Detail",
    CategorySummaryDemo: "Category Summary",
    CategoryStatsDemo: "Category Stats",
    CategoryTileDemo: "Category Tile",
    CategoryChipDemo: "Category Chip",
    CategoryFormDemo: "Category Form",
    ReviewBadgeDemo: "Review Badge",
    ReviewDataTableDemo: "Review Data Table",
    ReviewCardDemo: "Review Card",
    ReviewListDemo: "Review List",
    ReviewDetailDemo: "Review Detail",
    ReviewSummaryDemo: "Review Summary",
    ReviewStatsDemo: "Review Stats",
    ReviewTileDemo: "Review Tile",
    ReviewChipDemo: "Review Chip",
    ReviewFormDemo: "Review Form",
    InventoryItemBadgeDemo: "Inventory Item Badge",
    InventoryItemDataTableDemo: "Inventory Item Data Table",
    InventoryItemCardDemo: "Inventory Item Card",
    InventoryItemListDemo: "Inventory Item List",
    InventoryItemDetailDemo: "Inventory Item Detail",
    InventoryItemSummaryDemo: "Inventory Item Summary",
    InventoryItemStatsDemo: "Inventory Item Stats",
    InventoryItemTileDemo: "Inventory Item Tile",
    InventoryItemChipDemo: "Inventory Item Chip",
    InventoryItemFormDemo: "Inventory Item Form",
    SupplierBadgeDemo: "Supplier Badge",
    SupplierDataTableDemo: "Supplier Data Table",
    SupplierCardDemo: "Supplier Card",
    SupplierListDemo: "Supplier List",
    SupplierDetailDemo: "Supplier Detail",
    SupplierSummaryDemo: "Supplier Summary",
    SupplierStatsDemo: "Supplier Stats",
    SupplierTileDemo: "Supplier Tile",
    SupplierChipDemo: "Supplier Chip",
    SupplierFormDemo: "Supplier Form",
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
