import { useState } from "react";
import { X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/promotions")({
    component: PromotionsPage,
});

// --- Types ---
interface Promotion {
    id: number;
    title: string;
    shortDesc?: string;
    details?: {
        title: string;
        description: string;
        codeName: string;
        offer: string;
        target: string;
        period: string;
        conditions: string[];
    };
}

// --- Mock Data ---
const PROMOTIONS: Promotion[] = [
    {
        id: 1,
        title: "Deal Chào Bạn Mới",
        details: {
            title: "Deal Chào Bạn Mới",
            description:
                "Giảm ngay 50% giá trị đơn hàng cho khách hàng lần đầu đặt món trên website/ứng dụng Mam!",
            codeName: "Deal chào bạn mới.",
            offer: "Giảm 50% giá trị đơn hàng.",
            target: "Khách hàng lần đầu tiên đặt món trên website hoặc ứng dụng Mam.",
            period: "từ 01/01/2025 đến 31/12/2025",
            conditions: [
                "Áp dụng 1 lần duy nhất cho mỗi tài khoản mới.",
                "Không áp dụng đồng thời với các chương trình khuyến mãi khác.",
                "Giá trị giảm tối đa: (ví dụ 100.000đ, bạn có thể đặt con số cụ thể).",
            ],
        },
    },
    {
        id: 2,
        title: "Miễn phí vận chuyển trong khu vực Thủ Đức",
        shortDesc: "Freeship bán kính 5km",
    },
    {
        id: 3,
        title: "Sinh nhật thả ga",
        shortDesc: "Tặng bánh ngọt cho tiệc sinh nhật",
    },
];

function PromotionsPage() {
    const [selectedPromo, setSelectedPromo] = useState<Promotion | null>(null);

    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                {/* Title */}
                <h1 className="text-center text-primary text-3xl md:text-5xl font-bold font-cursive mb-12 drop-shadow-sm">
                    Khuyến Mãi Hot
                </h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROMOTIONS.map((promo) => (
                        <Card
                            key={promo.id}
                            onClick={() => setSelectedPromo(promo)}
                            className="bg-[#FFF9F0] border-none shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-[350px]"
                        >
                            {/* Card Top: Orange Background with Logo */}
                            <div className="bg-[#FF5B28] h-[250px] flex items-center justify-center relative p-8">
                                <div className="text-center">
                                    {/* Decorative Fork Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                                        <svg
                                            width="120"
                                            height="120"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                        >
                                            <path d="M15 7v2a3 3 0 0 0 6 0V7" />
                                            <line x1="6" y1="14" x2="6" y2="21" />
                                            <line x1="18" y1="14" x2="18" y2="21" />
                                            <line x1="12" y1="7" x2="12" y2="21" />
                                        </svg>
                                    </div>

                                    {/* Logo Text */}
                                    <h2 className="font-cursive text-7xl text-white relative z-10 drop-shadow-md">
                                        măm
                                    </h2>
                                    {/* Small fork on logo */}
                                    <svg
                                        className="absolute top-[35%] right-[25%] w-8 h-8 text-white z-10 rotate-12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 7v2a3 3 0 0 0 6 0V7" />
                                        <path d="M15 7v2a3 3 0 0 0 6 0V7" />
                                        <line x1="6" y1="14" x2="6" y2="21" />
                                        <line x1="18" y1="14" x2="18" y2="21" />
                                        <line x1="12" y1="7" x2="12" y2="21" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card Bottom: Text */}
                            <div className="flex-grow flex items-center justify-center p-6 text-center">
                                <h3 className="text-[#8B4513] font-bold text-xl md:text-2xl leading-tight">
                                    {promo.title}
                                </h3>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* MODAL / POPUP DETAIL (Matches Image 3) */}
            {selectedPromo && selectedPromo.details && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-[#FFF5E6] w-full max-w-2xl rounded-3xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedPromo(null)}
                            className="absolute top-4 right-4 bg-[#8B4513] text-white rounded-full p-2 hover:bg-[#6d360f] transition-colors z-10"
                        >
                            <X size={24} strokeWidth={3} />
                        </button>

                        {/* Modal Content */}
                        <div className="p-8 md:p-12 text-[#6D2E14]">
                            <h2 className="text-center text-3xl md:text-4xl font-bold text-[#FF5B28] mb-6">
                                {selectedPromo.details.title}
                            </h2>

                            <p className="text-lg font-semibold text-center mb-6 leading-relaxed">
                                {selectedPromo.details.description}
                            </p>

                            <div className="space-y-3 text-base md:text-lg">
                                <p>
                                    <span className="font-bold text-[#8B4513]">Tên ưu đãi:</span>{" "}
                                    {selectedPromo.details.codeName}
                                </p>
                                <p>
                                    <span className="font-bold text-[#8B4513]">Ưu đãi:</span>{" "}
                                    {selectedPromo.details.offer}
                                </p>
                                <p>
                                    <span className="font-bold text-[#8B4513]">
                                        Đối tượng áp dụng:
                                    </span>{" "}
                                    {selectedPromo.details.target}
                                </p>
                                <p>
                                    <span className="font-bold text-[#8B4513]">
                                        Thời gian áp dụng:
                                    </span>{" "}
                                    {selectedPromo.details.period}
                                </p>

                                <div className="mt-4">
                                    <span className="font-bold text-[#8B4513]">Điều kiện:</span>
                                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                                        {selectedPromo.details.conditions.map((cond, index) => (
                                            <li key={index}>{cond}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Bottom decoration gradient */}
                        <div className="h-4 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 opacity-30"></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PromotionsPage;
