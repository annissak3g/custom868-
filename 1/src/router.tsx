import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import PaymentSuccess from "./pages/payment/Success";
import PaymentFailed from "./pages/payment/Failed";
import PaymentPending from "./pages/payment/Pending";
import AdminOrders from "./pages/admin/Orders";

const router = createBrowserRouter([
  { path: "/",                element: <Home /> },
  { path: "/checkout",        element: <Checkout /> },
  { path: "/payment/success", element: <PaymentSuccess /> },
  { path: "/payment/failed",  element: <PaymentFailed /> },
  { path: "/payment/pending", element: <PaymentPending /> },
  { path: "/payment/cancel",  element: <PaymentFailed /> },
  { path: "/admin/orders",    element: <AdminOrders /> },
]);

export default router;
