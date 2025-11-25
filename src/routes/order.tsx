import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import {
    ClipboardList,
    Flame,
    Truck,
    UserCheck,
    User,
    ShoppingCart,
} from "lucide-react";

export const Route = createFileRoute("/order")({
    component: OrderPage,
});

function OrderPage() {
    // Mock data based on the image
    const orderItems = [
        {
            id: 1,
            name: "1 Hotdog Bò",
            note: "Không mù tạt",
            price: 35000,
            image:
                "https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=200&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "2 Pizza Pepperoni",
            note: "Không olive",
            price: 298000,
            image:
                "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=200&auto=format&fit=crop",
        },
    ];

    const steps = [
        { icon: ClipboardList, label: "Đã tiếp nhận", active: true },
        { icon: Flame, label: "Đang chế biến", active: false },
        { icon: Truck, label: "Đang giao", active: false },
        { icon: UserCheck, label: "Hoàn tất", active: false },
    ];

    return (
        <div className="min-h-screen bg-white pb-24">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Page Title */}
                <h1 className="text-center text-primary text-3xl md:text-4xl font-bold uppercase mb-12">
                    Đơn hàng của bạn
                </h1>

                {/* Stepper / Progress Bar */}
                <div className="relative mb-16 px-4">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#8B4513] -translate-y-1/2 z-0 hidden md:block" />

                    <div className="flex justify-between items-center relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="flex flex-col items-center group">
                                    <div
                                        className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-colors duration-300
                    ${step.active
                                                ? "bg-primary border-primary text-white shadow-lg shadow-orange-200"
                                                : "bg-white border-[#E65100] text-[#E65100]"
                                            }
                  `}
                                    >
                                        <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
                                    </div>
                                    {step.active && (
                                        <span className="absolute -bottom-8 w-32 text-center text-sm md:text-base font-bold text-gray-700">
                                            {step.label}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Product List */}
                    <div className="space-y-8">
                        {orderItems.map((item) => (
                            <div key={item.id} className="flex items-center space-x-6">
                                <div className="flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-[#E65100]">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-500 font-medium">{item.note}</p>
                                    <p className="text-xl font-bold text-gray-800 italic">
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(item.price)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Summary Card */}
                    <div className="w-full">
                        <div className="bg-[#FFF9F0] rounded-[2.5rem] p-8 md:p-12 min-h-[400px] flex flex-col justify-between shadow-sm relative">
                            {/* User Avatar */}
                            <div className="flex items-start">
                                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-inner">
                                    <User className="w-10 h-10" />
                                </div>
                            </div>

                            {/* Empty space for details (as per Image 1 design) */}
                            <div className="flex-grow"></div>

                            {/* Total Price */}
                            <div className="mt-8 border-t border-orange-100 pt-6 md:border-none md:pt-0">
                                <div className="text-2xl md:text-3xl font-bold text-[#E65100]">
                                    Tổng cộng: <span className="text-gray-800">333.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Checkout Button (Mobile Only) - Matches Image design */}
            <div className="fixed bottom-4 right-4 z-50">
                <Button className="bg-primary hover:bg-primary-hover text-white rounded-full px-8 py-6 text-xl shadow-2xl flex items-center gap-2">
                    <ShoppingCart className="w-6 h-6" />
                    <span>0đ</span>
                </Button>
            </div>
        </div>
    );
}

export default OrderPage;
