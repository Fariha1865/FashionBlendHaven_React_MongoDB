import Marquee from "react-fast-marquee";

const Reviews = () => {
    return (
        <div>
            <Marquee pauseOnHover={false} speed={50} className="flex gap-20">

                <div className="flex gap-20 mt-16 mb-20">

                    <div className="flex flex-col items-center">
                        <img src="https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff" alt="" className="h-20 w-20 rounded-full" />
                        <h1 className="font-bold text-xl mt-5">Sara Kabir</h1>
                        <p className="w-52 text-center text-sm">Stylish and Affordable - My go-to for budget-friendly fashion</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1464863979621-258859e62245" alt="" className="h-20 w-20 rounded-full" />
                        <h1 className="font-bold text-xl mt-5">Tasneem Anjum</h1>
                        <p className="w-52 text-center text-sm">Great Selection for All Occasions - Always find the perfect outfit.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167" alt="" className="h-20 w-20 rounded-full" />
                        <h1 className="font-bold text-xl mt-5">Rayhan Chowdhury</h1>
                        <p className="w-52 text-center text-sm">Fast Shipping and Easy Returns - Hassle-free shopping experience.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" alt="" className="h-20 w-20 rounded-full" />
                        <h1 className="font-bold text-xl mt-5">John Smith</h1>
                        <p className="w-52 text-center">Unique and Trendy Pieces - Constantly turning heads in their fashion.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1613005798967-632017e477c8" alt="" className="h-20 w-20 rounded-full" />
                        <h1 className="font-bold text-xl mt-5">pheebe Aren</h1>
                        <p className="w-52 text-center text-sm">High-Quality Products - Never disappointed with their quality.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb" alt="" className="h-20 w-20 rounded-full" />
                        <h1 className="font-bold text-xl mt-5">Rafia Alam</h1>
                        <p className="w-52 text-center text-sm">Responsive Customer Service - They truly care about their customers.</p>
                    </div>
                </div>

            </Marquee>
        </div>
    );
};

export default Reviews;