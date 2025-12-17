import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/services/auth-module/auth-module";
import { loginBody } from "@/services/auth-module/auth-module.zod";
import type { LoginRequestDTO } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const Route = createFileRoute("/auth/login")({
    component: LoginPage,
});

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const login = useLogin({
        mutation: {
            onSuccess: () => {
                toast.success("Đăng nhập thành công!");
            },
            onError: () => {
                toast.error("Đăng nhập thất bại. Vui lòng thử lại.");
            },
        },
    });

    const form = useForm<LoginRequestDTO>({
        resolver: zodResolver(loginBody),
        defaultValues: {
            credentialId: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginRequestDTO) => {
        login.mutate({
            data,
        });
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Brand Visual (Hidden on mobile) */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#FF5B28] to-[#FF8F00] relative overflow-hidden flex-col justify-center items-center">
                {/* Background texture/circles */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

                <div className="relative z-10 text-center">
                    <h1 className="font-cursive text-9xl text-white drop-shadow-lg mb-8">
                        măm
                    </h1>
                    <img
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
                        alt="Burger"
                        className="w-[400px] object-contain drop-shadow-2xl animate-bounce-slow"
                        style={{ animationDuration: "3s" }}
                    />
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-[#8B4513] uppercase mb-8 tracking-wide">
                            Đăng nhập
                        </h2>
                    </div>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <Input
                                placeholder="Email/Số điện thoại/Tên đăng nhập"
                                {...form.register("credentialId")}
                                className="text-lg py-6 rounded-xl border-gray-300"
                            />
                            {form.formState.errors.credentialId && (
                                <p className="text-sm font-medium text-red-500">
                                    {form.formState.errors.credentialId.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="******"
                                    {...form.register("password")}
                                    className="text-lg py-6 rounded-xl border-gray-300 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {form.formState.errors.password && (
                                <p className="text-sm font-medium text-red-500">
                                    {form.formState.errors.password.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-6 text-lg uppercase font-bold rounded-xl shadow-lg shadow-orange-200"
                        >
                            Đăng nhập
                        </Button>
                    </form>

                    <div className="text-center">
                        <a
                            href="#"
                            className="text-sm font-semibold text-gray-600 hover:text-primary underline underline-offset-4 decoration-1"
                        >
                            Quên mật khẩu?
                        </a>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm uppercase">
                            <span className="bg-white px-4 text-gray-500 font-bold">
                                Hoặc
                            </span>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full py-6 text-base font-bold text-gray-600 border-2 rounded-xl flex items-center gap-2 hover:bg-gray-50"
                    >
                        {/* Google Icon SVG */}
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Đăng nhập bằng Google
                    </Button>

                    <div className="text-center mt-6">
                        <span className="text-gray-600">Bạn chưa có tài khoản? </span>
                        <Link
                            to="/auth/register"
                            className="text-primary font-bold hover:underline"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
