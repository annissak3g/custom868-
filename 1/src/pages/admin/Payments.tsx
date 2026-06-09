import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

interface PaymentOrder {
    id: string;
    items: Array<{ name: string; price: number; quantity: number }>;
    total: number;
    status: string;
    gateway?: string;
    customerEmail?: string;
}

const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AdminPayments() {
    const [orders, setOrders] = useState<PaymentOrder[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<PaymentOrder | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchOrders = () => {
        setLoading(true);
        fetch(`${BASE}/api/orders`)
            .then((r) => r.json())
            .then((d) => setOrders(d.orders || []))
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handlePaymentConfirm = async (gateway: string) => {
        if (!selectedOrder) return;

        try {
            const response = await fetch(`${BASE}/api/orders/${selectedOrder.id}/status`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    status: "paid",
                    gateway,
                    txnRef: `TXN-${Date.now()}`,
                }),
            });

            if (!response.ok) throw new Error("Failed to confirm payment");

            // Update order in list
            setOrders((prev) =>
                prev.map((o) =>
                    o.id === selectedOrder.id
                        ? { ...o, status: "paid", gateway }
                        : o
                )
            );

            setSelectedOrder(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Payment confirmation failed");
        }
    };

    const pendingOrders = orders.filter((o) => o.status === "pending");

    return (
        <div className="min-h-screen bg-gradient-to-b from-navy-deep to-[#0f172a] text-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">Payment Processing</h1>
                    <p className="text-silver text-sm mt-2">Confirm payments and manage orders</p>
                </div>

                {loading && (
                    <div className="text-silver animate-pulse text-center py-20">
                        Loading orders…
                    </div>
                )}

                {error && (
                    <div className="mb-6 rounded-lg border border-crimson/50 bg-crimson/10 p-4 text-crimson text-sm">
                        Error: {error}
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Pending Orders List */}
                        <div className="lg:col-span-2">
                            <div className="space-y-3">
                                {pendingOrders.length === 0 ? (
                                    <div className="rounded-lg border border-silver/20 bg-navy-card p-8 text-center text-silver">
                                        No pending payments
                                    </div>
                                ) : (
                                    pendingOrders.map((order) => (
                                        <button
                                            key={order.id}
                                            onClick={() => setSelectedOrder(order)}
                                            className={cn(
                                                "w-full rounded-lg border-2 p-4 text-left transition-all",
                                                selectedOrder?.id === order.id
                                                    ? "border-blue-500 bg-blue-500/10"
                                                    : "border-silver/20 bg-navy-card hover:border-silver/40"
                                            )}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="font-semibold">Order #{order.id}</div>
                                                    <div className="text-xs text-silver/60 mt-1">
                                                        {order.items.map((i) => i.name).join(", ")}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-bold text-lg">PKR {order.total.toLocaleString()}</div>
                                                    <div className="text-xs text-yellow-500">Pending</div>
                                                </div>
                                            </div>
                                        </button>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Payment Widget Panel */}
                        <div className="rounded-lg border border-silver/20 bg-navy-card p-6">
                            <h2 className="text-lg font-bold mb-4">Payment Confirmation</h2>

                            {selectedOrder ? (
                                <div className="space-y-4">
                                    <div className="rounded-lg bg-navy-deep p-3 border border-silver/10">
                                        <div className="text-xs text-silver/60">Order ID</div>
                                        <div className="font-mono font-semibold text-white break-all">
                                            {selectedOrder.id}
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-navy-deep p-3 border border-silver/10">
                                        <div className="text-xs text-silver/60">Customer Email</div>
                                        <div className="text-sm text-white truncate">
                                            {selectedOrder.customerEmail || "N/A"}
                                        </div>
                                    </div>

                                    <PaymentGatewayWidget
                                        orderId={selectedOrder.id}
                                        amount={selectedOrder.total}
                                        currency="PKR"
                                        onPaymentConfirm={handlePaymentConfirm}
                                    />
                                </div>
                            ) : (
                                <div className="text-center text-silver/60 py-8">
                                    Select an order to confirm payment
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

