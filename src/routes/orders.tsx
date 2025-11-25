import { createFileRoute } from "@tanstack/react-router";
import AccountSidebar from "../components/AccountSidebar";

export const Route = createFileRoute("/orders")({
    component: OrdersPage,
});

function OrdersPage() {
    const orders = [
        {
            id: "DH001",
            date: "11/10/2025, 19:23",
            items: "Hotdog Bò, Pizza Gà",
            status: "Đã giao",
            statusColor: "text-primary",
            total: 333000,
        },
        {
            id: "DH002",
            date: "09/10/2025, 10:30",
            items: "Hamburger Gà, Pizza Hawaii, Pizza Pepperoni, Nước Chanh",
            status: "Đã hủy",
            statusColor: "text-red-500",
            total: 500000,
        },
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#E65100] uppercase mb-12 text-center md:text-left md:pl-8">
                    Đơn hàng của tôi
                </h1>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {/* Sidebar Navigation */}
                    <AccountSidebar />

                    {/* Main Content: Orders List */}
                    <div className="w-full md:w-3/4 space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-[#FFF9F0] rounded-[2rem] p-8 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-[#8B4513]">
                                            #{order.id}
                                        </h3>
                                        <p className="text-gray-600 font-bold">{order.date}</p>
                                        <p className="text-gray-700 italic text-lg">
                                            {order.items}
                                        </p>
                                        <p className={`text-xl font-bold ${order.statusColor}`}>
                                            {order.status}
                                        </p>
                                    </div>

                                    <div className="flex flex-col justify-between items-end h-full mt-4 md:mt-0">
                                        <div className="text-2xl font-bold text-[#E65100]">
                                            Tổng giá trị:{" "}
                                            <span className="text-gray-800 italic">
                                                {new Intl.NumberFormat("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                }).format(order.total)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {orders.length === 0 && (
                            <div className="text-center py-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                                <p className="text-gray-500 text-xl">
                                    Bạn chưa có đơn hàng nào
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrdersPage;
