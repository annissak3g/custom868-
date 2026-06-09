import { createBrowserRouter } from "react-router-dom";
import Storefront from "./pages/home/Storefront";
import Checkout from "./pages/checkout";
import PaymentSuccess from "./pages/payment/Success";
import PaymentFailed from "./pages/payment/Failed";
import PaymentPending from "./pages/payment/Pending";
import AdminPanel from "./pages/admin/AdminPanel";
import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Storefront /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/payment/success", element: <PaymentSuccess /> },
  { path: "/payment/failed", element: <PaymentFailed /> },
  { path: "/payment/pending", element: <PaymentPending /> },
  { path: "/payment/cancel", element: <PaymentFailed /> },
  { path: "/admin", element: <AdminPanel /> },
  { path: "/inventory", element: <Inventory /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

export default router;
