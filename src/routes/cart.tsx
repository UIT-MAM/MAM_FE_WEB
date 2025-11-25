import { useState } from "react";
import { Button } from "../components/ui/button";
import { Trash2, Plus, Minus, ChevronDown } from "lucide-react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
    component: CartPage,
});

// Mock Data for Cart
const INITIAL_CART_ITEMS = [
    {
        id: 1,
        name: "Hotdog Bò",
        note: "Không mù tạt",
        price: 35000,
        quantity: 1,
        image:
            "https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=200&auto=format&fit=crop", }, {
        id: 2,
        name: "Pizza Pepperoni",
        note: "Không olive",
        price: 298000,
        quantity: 2,
        image:
            "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=200&auto=format&fit=crop",
    },
];

function CartPage() {
    const [items, setItems] = useState(INITIAL_CART_ITEMS);
    const navigate = useNavigate();

    const updateQuantity = (id: number, change: number) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + change);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }),
        );
    };

    const removeItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    return (
        <div className="min-h-screen bg-[#FFFBF2] py-8 md:py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-[#E65100] mb-8 font-cursive">
                    Giỏ Hàng Của Bạn
                </h1>

                {/* Cart Card - Orange Background */}
                <div className="bg-[#FF5B28] rounded-[2rem] shadow-xl overflow-hidden relative text-white">
                    {/* Decorative Header Icon */}
                    <div className="absolute top-4 right-6 text-white/80 cursor-pointer hover:text-white transition-colors">
                        <ChevronDown className="w-8 h-8" />
                    </div>

                    <div className="p-6 md:p-10 space-y-8">
                        {items.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-2xl font-bold mb-4">Giỏ hàng trống</p>
                                <Link
                                    to="/"
                                    className="text-yellow-300 hover:text-white underline"
                                >
                                    Quay lại thực đơn
                                </Link>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col md:flex-row items-center gap-6"
                                >
                                    {/* Product Image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 object-cover shadow-lg"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-grow text-center md:text-left space-y-1">
                                        <h3 className="text-xl md:text-2xl font-bold">
                                            {item.name}
                                        </h3>
                                        <p className="text-orange-100 text-sm md:text-base">
                                            {item.note}
                                        </p>
                                    </div>

                                    {/* Controls & Price */}
                                    <div className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end">
                                        {/* Quantity */}
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-10 h-10 rounded-lg bg-white text-[#FF5B28] flex items-center justify-center font-bold text-xl hover:bg-orange-100 transition-colors shadow-md"
                                            >
                                                <Plus className="w-5 h-5" />
                                            </button>
                                            <span className="text-2xl font-bold w-6 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center font-bold text-xl hover:bg-white/30 transition-colors shadow-md"
                                            >
                                                <Minus className="w-5 h-5" />
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div className="text-xl md:text-2xl font-bold min-w-[120px] text-right">
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(item.price * item.quantity)}
                                        </div>

                                        {/* Delete */}
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 hover:bg-red-50 hover:text-red-600 transition-all shadow-md group"
                                        >
                                            <Trash2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer / Total */}
                    {items.length > 0 && (
                        <>
                            {/* Dotted Divider */}
                            <div className="px-6 md:px-10">
                                <div className="border-t-2 border-dashed border-white/30 w-full h-1"></div>
                            </div>

                            <div className="p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="text-lg text-orange-100 font-medium">
                                    *Đã bao gồm thuế VAT
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl md:text-3xl font-bold text-white">
                                        Tổng cộng:
                                    </span>
                                    <span className="text-3xl md:text-4xl font-bold text-white">
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(totalPrice)}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white p-6 md:p-8 flex justify-center">
                                <Button
                                    size="lg"
                                    className="w-full md:w-auto min-w-[300px] h-14 text-xl uppercase rounded-full bg-[#FF5B28] text-white hover:bg-[#E64A1C] shadow-lg shadow-orange-300"
                                    onClick={() => navigate({
                                        to: "/order"
                                    })}
                                >
                                    Thanh Toán Ngay
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartPage;
