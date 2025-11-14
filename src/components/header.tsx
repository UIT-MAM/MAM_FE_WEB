import React from "react";
import { Link } from "@tanstack/react-router";
import Logo from "../assets/logo.svg";
import topHeader from "../assets/top-header.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { MapPin, UserRound } from "lucide-react";
type NavItem = {
  label: string;
  to?: string;
};
const navItems: NavItem[] = [
  { label: "TRANG CHỦ", to: "/menu-page" },
  { label: "VỀ 'MĂM'", to: "/about" },
  { label: "THỰC ĐƠN", to: "/menu" },
  { label: "KHUYẾN MÃI", to: "/promotions" },
  { label: "GIAO HÀNG", to: "/delivery" },
];
export default function Header() {
  return (
    <header
      className="w-full text-white shadow-sm relative"
      style={{
        backgroundImage: `url(${topHeader}), linear-gradient(to right, #F0623A, #FF8A5B)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top",
        backgroundSize: "120% 60%, cover",
      }}
    >
      {/* Logo */}
      <Link to="/" className="select-none">
        <div className="flex items-baseline gap-1">
          <img
            src={Logo}
            alt="Logo"
            className="h-20 absolute z-10 top-5 left-2"
          />
        </div>
      </Link>
      <div className="flex items-right justify-end py-2 gap-2">
        <Button type="button" className="!bg-transparent !text-[#952B14]">
          <MapPin className="size-6" />
          <span className="text-[16px]">Chọn địa điểm</span>
        </Button>
        <div className="flex flex-row">
          <UserRound className="size-8 pt-1.5 text-[#952B14]" />
          <Link
            to="/auth/sign-up"
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium !text-[#952B14] transition-colors "
          >
            <span className="text-[16px]">Đăng ký</span>
          </Link>
          <Link
            to="/auth/sign-in"
            className="flex items-center pl-1 pr-3 py-1.5 text-sm font-medium !text-[#952B14] transition-colors hover:bg-white/10"
          >
            <span className="text-[16px]">Đăng nhập</span>
          </Link>
        </div>
      </div>
      {/* Nav row */}
      <NavigationMenu className="mx-auto max-w-6xl pb-1">
        <NavigationMenuList className="flex flex-wrap gap-4 sm:gap-8">
          {navItems.map((item, idx) => (
            <NavigationMenuItem key={`${item.label}-${idx}`}>
              {item.to ? (
                <NavigationMenuLink asChild>
                  <Link
                    to={item.to}
                    preload={false}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{
                      className:
                        "rounded-tl-2xl rounded-tr-2xl rounded-b-none px-3 py-1.5 text-[14px] font-bold uppercase tracking-wide !text-[#952B14] !bg-[#FFE4BC]",
                    }}
                    className="rounded-tl-2xl rounded-tr-2xl rounded-b-none px-3 py-1.5 text-[14px] font-bold uppercase tracking-wide text-[#FFE4BC] hover:!bg-[#FFE4BC] hover:!text-[#952B14] transition-colors"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              ) : (
                <span className="px-3 py-1.5 text-[15px] font-bold uppercase tracking-wide text-[#FFE4BC]">
                  {item.label}
                </span>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* <nav className="mx-auto max-w-6xl px-20 pb-2">
        <ul className="flex flex-wrap items-center gap-4 sm:gap-8">
          {navItems.map((item, idx) => (
            <li key={`${item.label}-${idx}`}>
              {item.to ? (
                <Link
                  to={item.to}
                  preload={false}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{
                    className:
                      "rounded-tl-2xl rounded-tr-2xl px-3 py-1.5 text-[14px] font-bold uppercase tracking-wide !text-[#952B14] !bg-[#FFE4BC]",
                  }}
                  className="rounded-tl-2xl rounded-tr-2xl px-3 py-1.5 text-[14px] uppercase tracking-wide !text-[#FFE4BC] !bg-transparent hover:!bg-[#FFE4BC] hover:!text-[#952B14]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="px-3 py-1.5 text-[15px] font-bold uppercase tracking-wide text-[#FFE4BC]">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
}
