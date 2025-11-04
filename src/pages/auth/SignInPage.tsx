import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import bg from "@/assets/background_auth.png";

export const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-screen w-screen bg-white font-sans text-gray-900">
            <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
                {/* Cột bên trái (Hình ảnh) */}
                <div className="relative hidden flex-col items-center justify-center p-10 md:flex">
                    <img src={bg} alt="Background" className="absolute inset-0 h-full w-full object-cover" />
                </div>

                {/* Cột bên phải (Form) */}
                <div className="flex items-center justify-center p-8">
                    <div className="w-full max-w-lg">
                        <div className="text-center mb-20">
                            <div className="text-3xl font-bold text-[#952B14]">ĐĂNG NHẬP</div>
                        </div>
                        <div>
                            <form className="space-y-4">
                                {/* Email/SĐT */}
                                <div className="space-y-2">
                                    <Input
                                        id="username"
                                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                                        required
                                    />
                                </div>

                                {/* Mật khẩu */}
                                <div className="space-y-2">
                                    <Label htmlFor="password">Mật khẩu</Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="******"
                                            required
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500 hover:bg-transparent hover:text-gray-900"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOffIcon className="h-4 w-4" />
                                            ) : (
                                                <EyeIcon className="h-4 w-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-[#952B14] hover:underline">
                                        Quên mật khẩu?
                                    </div>
                                </div>
                                {/* Nút Đăng nhập */}
                                <Button type="submit" className="w-full text-base font-bold">
                                    ĐĂNG NHẬP
                                </Button>
                            </form>

                            {/* Dải phân cách "HOẶC" */}
                            <div className="my-6 flex items-center">
                                <Separator className="flex-1" />
                                <span className="mx-4 text-xs font-medium text-gray-500">
                                    HOẶC
                                </span>
                                <Separator className="flex-1" />
                            </div>

                            {/* Nút Đăng nhập Google */}
                            <Button variant="outline" className="w-full text-base text-white">
                                Đăng nhập bằng Google
                            </Button>

                            {/* Link Đăng ký */}
                            <p className="mt-6 text-center text-sm text-gray-700">
                                Bạn chưa có tài khoản?{" "}
                                <p className="inline font-medium text-[#952B14] hover:underline">
                                    Đăng ký
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
