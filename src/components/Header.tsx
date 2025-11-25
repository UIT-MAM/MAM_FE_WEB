import { Link } from '@tanstack/react-router';
import { MapPin, User, ShoppingCart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-lg">
      {/* Top Bar: Location & User */}
      <div className="w-full bg-orange-600/20 text-white py-1 px-4 md:px-8">
         <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6 text-sm font-semibold">
            <button className="flex items-center hover:text-orange-100 transition-colors">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Chọn địa điểm</span>
            </button>
            {/* 
              User Profile Link - Changed to point to /profile based on user feedback
            */}
            <Link to="/profile" className="flex items-center hover:text-orange-100 transition-colors">
              <div className="bg-white/20 rounded-full p-0.5 mr-2">
                 <User className="w-3 h-3" />
              </div>
              <span>congchuabongbong</span>
            </Link>
         </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <h1 className="font-cursive text-4xl md:text-5xl text-white drop-shadow-md">
              măm
            </h1>
            {/* Decorative fork icon simulation */}
            <div className="absolute -top-2 -right-3 text-white opacity-80">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v2a3 3 0 0 0 6 0V7"/><path d="M15 7v2a3 3 0 0 0 6 0V7"/><line x1="6" y1="14" x2="6" y2="21"/><line x1="18" y1="14" x2="18" y2="21"/><line x1="12" y1="7" x2="12" y2="21"/></svg>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'TRANG CHỦ', to: '/' },
            { name: "VỀ 'MĂM'", to: '/about' },
            { name: 'THỰC ĐƠN', to: '/' }, 
            { name: 'KHUYẾN MÃI', to: '/promotions' }, 
          ].map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-white font-bold text-lg hover:text-yellow-200 transition-colors"
              activeProps={{ className: "text-yellow-300 underline decoration-wavy decoration-2 underline-offset-4" }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white">
            <Menu className="w-8 h-8" />
          </button>

          {/* Delivery/Cart Button */}
          <Link to="/cart">
            <div className="hidden md:flex bg-white rounded-full px-1 py-1 pl-4 pr-1 items-center space-x-2 shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
               <span className="font-bold text-primary text-sm uppercase">Giao Hàng</span>
               <div className="rounded-full h-8 w-8 bg-primary text-white flex items-center justify-center">
                 <ShoppingCart className="w-4 h-4" />
               </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
