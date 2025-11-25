import { Link } from "@tanstack/react-router";
import { User, FileText, Lock, LogOut } from "lucide-react";

const AccountSidebar = () => {
    const navItems = [
        { to: "/profile", icon: User, label: "Tài khoản của tôi" },
        { to: "/orders", icon: FileText, label: "Đơn hàng của tôi" },
        { to: "/auth/change-password", icon: Lock, label: "Đổi mật khẩu" },
    ];

    return (
        <div className="w-full md:w-1/4 bg-[#FFE0B2]/30 md:bg-transparent p-6 rounded-2xl md:p-0 h-fit">
            <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className="flex items-center space-x-3 font-bold text-lg p-3 rounded-xl transition-all duration-200"
                        activeProps={{
                            className:
                                "text-primary bg-orange-50 border-l-4 border-primary shadow-sm",
                        }}
                        inactiveProps={{
                            className: "text-gray-600 hover:text-primary hover:bg-orange-50",
                        }}
                    >
                        <item.icon className="w-6 h-6" />
                        <span>{item.label}</span>
                    </Link>
                ))}

                <Link
                    to="/auth/login"
                    className="flex items-center space-x-3 text-red-500 font-bold text-lg p-3 rounded-xl hover:bg-red-50 transition-colors mt-8 text-left w-full"
                >
                    <LogOut className="w-6 h-6" />
                    <span>ĐĂNG XUẤT</span>
                </Link>
            </nav>
        </div>
    );
};

export default AccountSidebar;
