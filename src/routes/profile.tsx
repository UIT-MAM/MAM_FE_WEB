import AccountSidebar from "../components/AccountSidebar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
    component: ProfilePage,
});

// --- Validation Schema ---
const profileSchema = z.object({
    fullName: z.string().min(2, "Họ và tên quá ngắn"),
    phone: z.string().regex(/^[0-9]{10}$/, "Số điện thoại không hợp lệ"),
    email: z.email("Email không hợp lệ"),
    address: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

function ProfilePage() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            fullName: "Trần Trân Châu",
            phone: "0912345789",
            email: "congchuabongbong@gmail.com",
            address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
        },
    });

    const onSubmit = (data: ProfileFormValues) => {
        console.log("Updated Profile:", data);
        alert("Cập nhật thông tin thành công!");
    };

    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#E65100] uppercase mb-12 text-center md:text-left md:pl-8">
                    Tài khoản của tôi
                </h1>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <AccountSidebar />

                    {/* Main Content: Profile Form */}
                    <div className="w-full md:w-3/4">
                        <div className="bg-[#FFF9F0] rounded-[2rem] p-8 md:p-12 shadow-sm">
                            {/* Avatar Section */}
                            <div className="flex flex-col items-center mb-10">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                                        <img
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                                            alt="Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-hover transition-colors">
                                        <Camera size={20} />
                                    </button>
                                </div>
                                <h2 className="mt-4 text-2xl font-bold text-[#8B4513]">
                                    congchuabongbong
                                </h2>
                            </div>

                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6 max-w-2xl mx-auto"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">
                                            Họ và tên
                                        </label>
                                        <Input
                                            {...form.register("fullName")}
                                            className="h-12 rounded-xl border-orange-200"
                                        />
                                        {form.formState.errors.fullName && (
                                            <p className="text-red-500 text-sm">
                                                {form.formState.errors.fullName.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">
                                            Số điện thoại
                                        </label>
                                        <Input
                                            {...form.register("phone")}
                                            className="h-12 rounded-xl border-orange-200"
                                        />
                                        {form.formState.errors.phone && (
                                            <p className="text-red-500 text-sm">
                                                {form.formState.errors.phone.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Email
                                    </label>
                                    <Input
                                        {...form.register("email")}
                                        className="h-12 rounded-xl border-orange-200"
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {form.formState.errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">
                                        Địa chỉ
                                    </label>
                                    <Input
                                        {...form.register("address")}
                                        className="h-12 rounded-xl border-orange-200"
                                    />
                                </div>

                                <div className="pt-6 text-center md:text-right">
                                    <Button
                                        type="submit"
                                        className="px-8 py-6 text-lg font-bold rounded-xl bg-primary shadow-lg shadow-orange-200"
                                    >
                                        Lưu Thay Đổi
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

export default ProfilePage;
