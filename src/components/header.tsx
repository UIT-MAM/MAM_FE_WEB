import React from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, UserRound } from "lucide-react";
import Logo from "../assets/logo.svg";
type NavItem = {
  label: string;
  to?: string;
};
const navItems: NavItem[] = [
  { label: "TRANG CHỦ", to: "/" },
  { label: "VỀ 'MĂM'" },
  { label: "THỰC ĐƠN", to: "/menu-page" },
  { label: "KHUYẾN MÃI" },
  { label: "GIAO HÀNG" },
];
export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#F0623A] to-[#FF8A5B] text-white shadow-sm">
      {/* Top bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        {/* Logo */}
        <Link to="/" className="select-none">
          <div className="flex items-baseline gap-1">
            <img src={Logo} alt="Logo" className="h-20" />
          </div>
        </Link>
        {/* Actions */}
        <div className=""></div>

        {/* <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-2 rounded-full border border-white/80 bg-white/0 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
            <MapPin className="size-4" />
            <span>Chọn địa điểm</span>
          </button>
          <Link
            to="/auth/sign-in"
            className="flex items-center gap-2 rounded-full border border-white/80 bg-white/0 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <UserRound className="size-4" />
            <span>Đăng ký / Đăng nhập</span>
          </Link>
        </div> */}
      </div>
      {/* Nav row */}
      <nav className="mx-auto max-w-6xl px-4 pb-2">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
          {navItems.map((item, idx) => (
            <li key={`${item.label}-${idx}`}>
              {item.to ? (
                <Link
                  to={item.to}
                  preload={false}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{
                    className: "bg-[#F6E2C1] text-[#8A3F22]",
                  }}
                  className="rounded-full px-3 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-white/95 hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="rounded-full px-3 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-white/80">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
