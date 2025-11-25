import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import AccountSidebar from "@/components/AccountSidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/auth/change-password")({
    component: ChangePasswordPage,
});

// --- Validation Schema ---
const passwordSchema = z
    .object({
        currentPassword: z.string().min(1, "Vui lòng nhập mật khẩu hiện tại"),
        newPassword: z.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự"),
        confirmPassword: z.string().min(1, "Vui lòng xác nhận mật khẩu mới"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Mật khẩu xác nhận không khớp",
        path: ["confirmPassword"],
    });

type PasswordFormValues = z.infer<typeof passwordSchema>;

function ChangePasswordPage() {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const form = useForm<PasswordFormValues>({
        resolver: zodResolver(passwordSchema),
    });

    const onSubmit = (data: PasswordFormValues) => {
        console.log("Password Change Requested:", data);
        alert("Đổi mật khẩu thành công!");
        form.reset();
    };

    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#E65100] uppercase mb-12 text-center md:text-left md:pl-8">
                    Đổi mật khẩu
                </h1>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <AccountSidebar />

                    {/* Main Content: Password Form */}
                    <div className="w-full md:w-3/4">
                        <div className="bg-[#FFF9F0] rounded-[2rem] p-8 md:p-12 shadow-sm">
                            <div className="mb-8 text-center md:text-left">
                                <h2 className="text-xl text-gray-700 font-medium">
                                    Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho
                                    người khác.
                                </h2>
                            </div>

                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6 max-w-2xl"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Mật khẩu hiện tại
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type={showCurrent ? "text" : "password"}
                                            {...form.register("currentPassword")}
                                            className="h-12 rounded-xl border-orange-200 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowCurrent(!showCurrent)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        >
                                            {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    {form.formState.errors.currentPassword && (
                                        <p className="text-red-500 text-sm">
                                            {form.formState.errors.currentPassword.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Mật khẩu mới
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type={showNew ? "text" : "password"}
                                            {...form.register("newPassword")}
                                            className="h-12 rounded-xl border-orange-200 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNew(!showNew)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        >
                                            {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    {form.formState.errors.newPassword && (
                                        <p className="text-red-500 text-sm">
                                            {form.formState.errors.newPassword.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Xác nhận mật khẩu mới
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type={showConfirm ? "text" : "password"}
                                            {...form.register("confirmPassword")}
                                            className="h-12 rounded-xl border-orange-200 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirm(!showConfirm)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        >
                                            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    {form.formState.errors.confirmPassword && (
                                        <p className="text-red-500 text-sm">
                                            {form.formState.errors.confirmPassword.message}
                                        </p>
                                    )}
                                </div>

                                <div className="pt-6 text-center md:text-right">
                                    <Button
                                        type="submit"
                                        className="px-8 py-6 text-lg font-bold rounded-xl bg-primary shadow-lg shadow-orange-200"
                                    >
                                        Xác Nhận Đổi
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePasswordPage;
