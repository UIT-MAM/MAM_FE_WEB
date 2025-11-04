import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import bg from "@/assets/background_auth.png";

export const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return (
        <div className="min-h-screen w-screen bg-white font-sans text-gray-900">
            <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">

                {/* Cột bên trái (Hình ảnh) - Giống UI gốc */}
                <div className="relative hidden flex-col items-center justify-center p-10 md:flex">
                    {/* Ảnh nền */}
                    <img src={bg} alt="Background" className="absolute inset-0 h-full w-full object-cover" />
                </div>

                {/* Cột bên phải (Form) - Dùng style của SignInPage */}
                <div className="flex items-center justify-center p-8">
                    <div className="w-full max-w-lg">
                        <div className="text-center mb-10">
                            <div className="text-3xl font-bold text-[#952B14]">ĐĂNG KÝ</div>
                        </div>
                        <div>
                            <form className="space-y-4">
                                {/* Họ và tên */}
                                <div className="space-y-2">
                                    <Label htmlFor="fullname">Họ và tên</Label>
                                    <Input
                                        id="fullname"
                                        placeholder="Trần Trân Châu"
                                        required
                                    />
                                </div>

                                {/* Số điện thoại */}
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Số điện thoại</Label>
                                    <Input
                                        id="phone"
                                        placeholder="0912345789"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="trantranchau@gmail.com"
                                        required
                                    />
                                </div>
                                {/* Tên người dùng */}
                                <div className="space-y-2">
                                    <Label htmlFor="username">Tên người dùng</Label>
                                    <Input
                                        id="username"
                                        placeholder="tranchausg"
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

                                {/* Xác nhận Mật khẩu */}
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="******"
                                            required
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500 hover:bg-transparent hover:text-gray-900"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOffIcon className="h-4 w-4" />
                                            ) : (
                                                <EyeIcon className="h-4 w-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                {/* Nút Đăng ký */}
                                <Button type="submit" className="w-full text-base font-bold">
                                    ĐĂNG KÝ
                                </Button>
                            </form>

                            {/* Link Đăng nhập */}
                            <p className="mt-6 text-center text-sm text-gray-700">
                                Bạn đã có tài khoản?{" "}
                                <a
                                    href="/auth/sign-in" // Thay thế Link bằng <a>
                                    className="inline font-medium text-[#952B14] hover:underline"
                                >
                                    Đăng nhập
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}