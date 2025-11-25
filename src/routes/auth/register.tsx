import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/services/auth-module/auth-module";
import { registerBody } from "@/services/auth-module/auth-module.zod";
import type { RegisterRequestDTO } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export const Route = createFileRoute("/auth/register")({
    component: RouteComponent,
});

function RouteComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const registerMutation = useRegister();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<
        RegisterRequestDTO & {
            confirmPassword: string;
        }
    >({
        resolver: zodResolver(
            z
                .object({
                    ...registerBody.shape,
                    confirmPassword: z
                        .string()
                        .min(6, "Xác nhận mật khẩu ít nhất 6 ký tự"),
                })
                .refine((data) => data.password === data.confirmPassword, {
                    message: "Mật khẩu và xác nhận mật khẩu không khớp",
                }),
        ),
    });

    const onSubmit = (data: RegisterRequestDTO) => {
        registerMutation.mutate({ data });
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Visual (Hidden on mobile) */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#FF5B28] to-[#FF8F00] relative overflow-hidden flex-col justify-center items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
                <div className="relative z-10 text-center">
                    <h1 className="font-cursive text-9xl drop-shadow-lg mb-4">măm</h1>
                    <p className="text-2xl font-bold uppercase tracking-wider mb-8">
                        Thưởng thức trọn vẹn
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500&auto=format&fit=crop"
                        alt="Burger"
                        className="w-[350px] object-contain drop-shadow-2xl animate-pulse"
                    />
                </div>
            </div>

            {/* Right Side - Register Form */}
            <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 overflow-y-auto">
                <div className="w-full max-w-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-[#8B4513] uppercase tracking-wide">
                            Đăng ký
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Họ và tên
                            </label>
                            <Input
                                {...register("fullname")}
                                placeholder="Nhập họ và tên"
                                className="rounded-xl h-12"
                            />
                            {errors.fullname && (
                                <p className="text-red-500 text-xs">
                                    {errors.fullname.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Số điện thoại
                            </label>
                            <Input
                                {...register("phone")}
                                placeholder="Nhập số điện thoại"
                                className="rounded-xl h-12"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs">{errors.phone.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <Input
                                {...register("email")}
                                placeholder="Nhập email"
                                className="rounded-xl h-12"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Tên người dùng
                            </label>
                            <Input
                                {...register("username")}
                                placeholder="Nhập tên người dùng"
                                className="rounded-xl h-12"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-xs">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Mật khẩu
                            </label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="******"
                                    {...register("password")}
                                    className="rounded-xl h-12 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Xác nhận mật khẩu
                            </label>
                            <div className="relative">
                                <Input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="******"
                                    {...register("confirmPassword")}
                                    className="rounded-xl h-12 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-6 mt-4 text-lg font-bold rounded-xl uppercase shadow-lg shadow-orange-200"
                        >
                            Đăng ký
                        </Button>
                    </form>

                    <div className="text-center mt-6">
                        <span className="text-gray-600">Bạn đã có tài khoản? </span>
                        <Link
                            to="/auth/login"
                            className="text-primary font-bold hover:underline"
                        >
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
