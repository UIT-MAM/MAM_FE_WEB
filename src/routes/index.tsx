import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Phone, ShoppingCart, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})


// --- Mock Data ---
const CATEGORIES = [
  { id: '1', name: 'Pizza', image: 'https://picsum.photos/seed/pizza/200/200' },
  { id: '2', name: 'Burger', image: 'https://picsum.photos/seed/burger/200/200' },
  { id: '3', name: 'Gà Rán', image: 'https://picsum.photos/seed/friedchicken/200/200' },
  { id: '4', name: 'Hotdog', image: 'https://picsum.photos/seed/hotdog/200/200' },
];

const FEATURED_ITEMS = [
  { 
    id: '1', 
    name: 'Pizza BBQ Gà', 
    price: 149000, 
    image: 'https://picsum.photos/seed/pizzabbq/400/400',
    category: 'Pizza'
  },
  { 
    id: '2', 
    name: 'Pizza Hawaii', 
    price: 149000, 
    image: 'https://picsum.photos/seed/pizzahawaii/400/400',
    category: 'Pizza' 
  },
  { 
    id: '3', 
    name: 'Pizza Margherita', 
    price: 149000, 
    image: 'https://picsum.photos/seed/margherita/400/400',
    category: 'Pizza' 
  },
];

// --- Schema for Newsletter/Promo Form ---
const promoSchema = z.object({
  email: z.email({ message: "Email không hợp lệ" }),
});

type PromoFormValues = z.infer<typeof promoSchema>;

// --- Component ---
function HomePage () {
  const form = useForm<PromoFormValues>({
    resolver: zodResolver(promoSchema),
    defaultValues: { email: '' }
  });

  const onSubmit = (data: PromoFormValues) => {
    console.log("Subscribed:", data);
    alert("Đăng ký nhận tin thành công!");
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-20">
      
      {/* HERO SECTION */}
      <section className="relative bg-primary pt-8 pb-24 md:pt-16 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Hero Text */}
          <div className="text-white z-10 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="inline-block relative">
               <span className="absolute -top-6 -right-6 rotate-12 bg-yellow-400 text-red-600 font-black text-xl px-3 py-1 rounded-lg shadow-lg transform animate-pulse">
                 50% OFF
               </span>
               <h2 className="text-5xl md:text-7xl font-extrabold leading-tight font-sans tracking-tight">
                 Hamburger <br/>
                 <span className="text-yellow-300">NEW</span>
               </h2>
            </div>
            
            <p className="text-lg md:text-xl text-orange-100 font-medium max-w-md mx-auto md:mx-0">
              Thưởng thức hương vị tuyệt hảo với công thức đặc biệt từ đầu bếp 5 sao. Giao hàng nhanh trong 30 phút!
            </p>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 justify-center md:justify-start">
               <Button size="lg" className="bg-yellow-400 text-red-600 hover:bg-yellow-300 text-lg px-8 font-extrabold uppercase tracking-wider shadow-xl hover:scale-105 transform transition-all">
                 ĐẶT NGAY
               </Button>
               
               <div className="flex items-center font-bold text-white text-lg">
                 <Phone className="w-6 h-6 mr-2 fill-white" />
                 +123-456-7890
               </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
               {/* Abstract shapes background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-400 rounded-full opacity-50 blur-3xl"></div>
               <img 
                 src="https://picsum.photos/seed/bigburger/600/600" 
                 alt="Delicious Hamburger" 
                 className="relative object-contain w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               />
               {/* Floating elements */}
               <div className="absolute -bottom-4 -left-4 md:bottom-10 md:-left-10 bg-white p-3 rounded-2xl shadow-lg flex items-center space-x-2 animate-bounce">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-xl">🥗</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    <p>Tươi ngon</p>
                    <p className="text-green-600">100%</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom Divider (SVG) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFBF2"></path>
          </svg>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
         <div className="text-center mb-12">
            <h3 className="text-primary font-bold text-lg uppercase tracking-widest mb-2">Nhoàm nhoàm</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Hôm nay <span className="text-primary">Ăn Gì?</span></h2>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="group cursor-pointer">
                 <div className="relative overflow-hidden rounded-full aspect-square border-4 border-white shadow-xl mb-4 bg-white hover:border-primary transition-colors duration-300">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                 </div>
                 <h3 className="text-center font-bold text-xl text-gray-700 group-hover:text-primary transition-colors">{cat.name}</h3>
              </div>
            ))}
         </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full bg-white rounded-3xl shadow-sm my-8 p-8">
         <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Pizza Yêu Thích</h2>
              <p className="text-gray-500">Những món Pizza bán chạy nhất tuần qua</p>
            </div>
            <Button variant="link" className="text-primary font-bold text-lg hidden md:flex">
              Xem tất cả <ArrowRight className="ml-2 w-5 h-5"/>
            </Button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_ITEMS.map((item) => (
               <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-[#FFFBF2]">
                  <div className="relative p-6 flex-grow flex items-center justify-center">
                     <img 
                       src={item.image} 
                       alt={item.name} 
                       className="w-48 h-48 object-cover rounded-full shadow-lg group-hover:rotate-3 transition-transform duration-500 border-4 border-white"
                     />
                     <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow">HOT</div>
                  </div>
                  <CardContent className="text-center pb-8">
                     <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                     <p className="text-primary font-extrabold text-xl mb-6">
                       {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                     </p>
                     <Button className="w-full rounded-full font-bold text-md py-6">
                        <ShoppingCart className="mr-2 w-5 h-5" /> Thêm vào giỏ
                     </Button>
                  </CardContent>
               </Card>
            ))}
         </div>
         
         <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full rounded-full border-2">
              Xem tất cả Menu
            </Button>
         </div>
      </section>

      {/* NEWSLETTER / FOOTER CTA (To demonstrate Form) */}
      <section className="bg-orange-100 py-16 mt-8 relative overflow-hidden">
         {/* Decorative circles */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
         <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Nhận Ưu Đãi Đặc Biệt?</h2>
            <p className="text-gray-600 mb-8">Đăng ký email để nhận mã giảm giá 50% cho đơn hàng đầu tiên của bạn!</p>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-grow">
                <input 
                   {...form.register('email')}
                   placeholder="Nhập email của bạn..." 
                   className="w-full h-12 px-6 rounded-full border-2 border-orange-200 focus:border-primary focus:outline-none text-gray-700 bg-white"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-2 text-left ml-4">{form.formState.errors.email.message}</p>
                )}
              </div>
              <Button type="submit" size="lg" className="rounded-full">
                Đăng Ký Ngay
              </Button>
            </form>
         </div>
      </section>

      {/* Floating Mobile Cart (Fixed at bottom) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-40">
          <Button className="w-full h-12 rounded-full flex justify-between items-center px-6 text-lg shadow-orange-500/30 shadow-lg">
             <div className="flex items-center">
                <ShoppingCart className="mr-2 w-5 h-5" />
                <span className="font-bold">0đ</span>
             </div>
             <span className="font-bold">Xem Giỏ Hàng</span>
          </Button>
      </div>

    </div>
  );
};

export default HomePage;
