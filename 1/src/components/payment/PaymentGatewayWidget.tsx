import { useState } from "react";
import { cn } from "../../lib/utils";

const GATEWAY_LOGOS: Record<string, { emoji: string; name: string; color: string }> = {
    stripe: { emoji: "💳", name: "Stripe", color: "from-blue-600 to-blue-700" },
    jazzcash: { emoji: "📱", name: "JazzCash", color: "from-orange-500 to-orange-600" },
    alfalah: { emoji: "🏦", name: "Alfalah", color: "from-green-600 to-green-700" },
    meezan: { emoji: "🏦", name: "Meezan", color: "from-indigo-600 to-indigo-700" },
};

interface PaymentGateway {
    id: string;
    label: string;
    icon: string;
}

interface Props {
    orderId: string;
    amount: number;
    currency: string;
    onPaymentConfirm: (gateway: string) => void;
    disabled?: boolean;
}

export default function PaymentGatewayWidget({
    orderId,
    amount,
    currency,
    onPaymentConfirm,
    disabled = false,
}: Props) {
    const [selected, setSelected] = useState<string>("stripe");
    const [processing, setProcessing] = useState(false);

    const gateways: PaymentGateway[] = [
        { id: "stripe", label: "Stripe", icon: "💳" },
        { id: "jazzcash", label: "JazzCash", icon: "📱" },
        { id: "alfalah", label: "Alfalah", icon: "🏦" },
        { id: "meezan", label: "Meezan", icon: "🏦" },
    ];

    const handleConfirm = async () => {
        setProcessing(true);
        try {
            onPaymentConfirm(selected);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="space-y-4">
            {/* Payment Gateway Logo Selection */}
            <div className="space-y-2">
                <label className="text-xs font-semibold text-silver uppercase tracking-wide">
                    Payment Method
                </label>
                <div className="grid grid-cols-4 gap-2">
                    {gateways.map((gw) => {
                        const meta = GATEWAY_LOGOS[gw.id];
                        return (
                            <button
                                key={gw.id}
                                onClick={() => setSelected(gw.id)}
                                disabled={disabled || processing}
                                className={cn(
                                    "relative h-16 rounded-lg border-2 transition-all duration-200",
                                    "flex flex-col items-center justify-center gap-1",
                                    selected === gw.id
                                        ? `border-white bg-gradient-to-br ${meta.color} text-white shadow-lg`
                                        : "border-silver/20 bg-navy-card/50 text-silver hover:border-silver/40 hover:bg-navy-card"
                                )}
                            >
                                <span className="text-xl">{meta.emoji}</span>
                                <span className="text-xs font-semibold">{meta.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Payment Amount Display */}
            <div className="rounded-lg border border-silver/20 bg-navy-card p-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-silver">Amount</span>
                    <span className="text-lg font-bold text-white">
                        {currency} {amount.toLocaleString()}
                    </span>
                </div>
                <div className="mt-2 text-xs text-silver/60">Order #{orderId}</div>
            </div>

            {/* Confirm Payment Button */}
            <button
                onClick={handleConfirm}
                disabled={disabled || processing}
                className={cn(
                    "w-full rounded-lg px-4 py-2 font-semibold transition-all duration-200",
                    processing || disabled
                        ? "bg-silver/20 text-silver/40 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-600/50 active:scale-95"
                )}
            >
                {processing ? "Processing..." : `Confirm Payment`}
            </button>
        </div>
    );
}
