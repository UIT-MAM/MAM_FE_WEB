import { createFileRoute } from "@tanstack/react-router";

import { Sparkles, Zap, Heart, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/about")({
    component: AboutPage,
});

function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FFFBF2] via-orange-50/30 to-[#FFFBF2]">
            <section className="relative pt-16 md:pt-24 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>

                                <img
                                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
                                    alt="Pizza"
                                    className="relative w-full h-full object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-700"
                                    style={{ animation: "spin 60s linear infinite" }}
                                />

                                <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-2xl shadow-xl rotate-12 hover:rotate-0 transition-transform duration-300">
                                    <Sparkles className="w-8 h-8" />
                                </div>

                                <div className="absolute -bottom-4 -left-4 bg-orange-600 text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm hover:scale-110 transition-transform duration-300">
                                    100% Fresh
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-10 -z-10 opacity-5">
                                <span className="text-[12rem] md:text-[18rem] font-bold text-orange-600 font-cursive">
                                    M
                                </span>
                            </div>
                        </div>

                        <div className="space-y-8 text-center lg:text-left order-1 lg:order-2">
                            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                Về chúng tôi
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-600 mb-6 leading-tight">
                                Sứ mệnh của <span className="font-cursive">Mam</span>
                            </h1>

                            <div className="text-lg md:text-xl text-gray-700 space-y-6 leading-relaxed">
                                <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg transition-shadow duration-300">
                                    Tại Mam, chúng tôi tin rằng mỗi bữa ăn ngon - là pizza nóng
                                    hổi, burger đậm đà hay hotdog thơm lừng - đều mang đến niềm
                                    vui và kết nối giữa con người.
                                </p>
                                <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg transition-shadow duration-300">
                                    Sứ mệnh của chúng tôi mang đến cho thực khách những bữa ăn
                                    nhanh ngon miệng, chất lượng và tiện lợi, kết hợp giữa hương
                                    vị quốc tế và sự phục vụ tận tâm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 flex justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/30 to-transparent"></div>
                <h2 className="font-cursive text-7xl md:text-9xl text-orange-600 opacity-90 relative z-10 hover:scale-110 transition-transform duration-500">
                    măm
                </h2>
            </section>

            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                                <Heart className="w-4 h-4" />
                                <span>Câu chuyện của chúng tôi</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                                Bắt đầu từ năm 2025
                            </h2>

                            <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                Mam là một quán ăn hiện đại, được thành lập vào năm 2025, với
                                khát vọng mang đến cho thực khách những bữa ăn nhanh vừa ngon
                                miệng, vừa tiện lợi, nhưng vẫn đảm bảo chất lượng và trải nghiệm
                                tuyệt vời. Ngay từ những ngày đầu, Mam đã lựa chọn tập trung vào
                                các món ăn quốc tế phổ biến và được yêu thích rộng rãi như
                                Pizza, Burger, Hotdog..., nhằm mang đến sự quen thuộc nhưng cũng
                                đầy mới mẻ cho khách hàng tại Việt Nam.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
                                <div className="text-3xl font-bold mb-1">100+</div>
                                <div className="text-sm opacity-90">Món ăn</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
                                <div className="text-3xl font-bold mb-1">5★</div>
                                <div className="text-sm opacity-90">Đánh giá</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-700 to-orange-800 text-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
                                <div className="text-3xl font-bold mb-1">24/7</div>
                                <div className="text-sm opacity-90">Phục vụ</div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full blur-3xl animate-pulse"></div>

                            <img
                                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop"
                                alt="Burger"
                                className="relative w-80 md:w-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />

                            <div className="absolute top-0 right-0 bg-green-500 text-white p-3 rounded-full shadow-xl animate-bounce">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="space-y-6 max-w-2xl text-white">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                                <Zap className="w-4 h-4" />
                                <span>Công nghệ hiện đại</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold">
                                Đặt hàng dễ dàng
                            </h2>

                            <p className="text-lg text-white/90 leading-relaxed">
                                Nhằm đáp ứng nhu cầu ngày càng đa dạng của khách hàng, Mam không
                                chỉ phục vụ tại chỗ mà còn đẩy mạnh dịch vụ giao hàng trực tuyến
                                thông qua Website và App.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    Tải App ngay
                                </button>
                                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
                                    Xem thêm
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-white/20 rounded-[3rem] blur-2xl"></div>

                            <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg p-8 rounded-[3rem] border-4 border-white/30 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1512428559087-560fa0db7f01?q=80&w=400&auto=format&fit=crop"
                                    alt="App Mobile"
                                    className="w-56 md:w-72 rounded-[2.5rem] shadow-2xl border-8 border-white hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="absolute -bottom-4 -right-4 bg-white text-orange-600 p-4 rounded-2xl shadow-xl font-bold hover:rotate-6 transition-transform duration-300">
                                <Sparkles className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Chất lượng
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Nguyên liệu tươi ngon, được chọn lọc kỹ càng từ các nguồn cung
                                cấp uy tín
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-gradient-to-br from-orange-600 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Nhanh chóng
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Giao hàng tận nơi trong thời gian ngắn nhất, đảm bảo món ăn luôn
                                nóng hổi
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-gradient-to-br from-orange-700 to-orange-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Đa dạng</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Thực đơn phong phú với nhiều lựa chọn từ các món ăn quốc tế được
                                yêu thích
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
