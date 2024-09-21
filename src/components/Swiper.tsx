import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComponent() {
  return (
    <div className="p-6">
      <Swiper
        // install Swiper modules
        centeredSlides={true}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="h-[300px]"
        breakpoints={
          {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }
        }
      >
        <SwiperSlide className="h-[100%] w-[250px]">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md h-[100%]">
            <img src="https://source.boomplaymusic.com/buzzgroup1/M00/3B/EA/rBEevGKwFzKAMfUDAAI274qlbHs722.jpg" alt="Product Image" className="object-cover w-full h-[100%]" />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75">
              <h2 className="text-white text-lg font-bold">Featured Product</h2>
              <p className="text-white text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex items-center justify-center mt-4">
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">

                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-[100%] w-[250px]">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md h-[100%]">
            <img src="https://i.ebayimg.com/images/g/cmMAAOSw~RRm5Sxn/s-l960.jpg" alt="Product Image" className="object-cover w-full h-[100%]" />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75">
              <h2 className="text-white text-lg font-bold">Featured Product</h2>
              <p className="text-white text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex items-center justify-center mt-4">
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">

                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-[100%] w-[250px]">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md h-[100%]">
            <img src="https://i.ebayimg.com/images/g/F78AAOSw6lRmpPHG/s-l960.jpg" alt="Product Image" className="object-cover w-full h-[100%]" />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75">
              <h2 className="text-white text-lg font-bold">Featured Product</h2>
              <p className="text-white text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex items-center justify-center mt-4">
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">

                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide className="h-[100%] w-[250px]">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md h-[100%]">
            <img src="https://i.ebayimg.com/images/g/APQAAOSwmdNm7G7l/s-l960.jpg" alt="Product Image" className="object-cover w-full h-[100%]" />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75">
              <h2 className="text-white text-lg font-bold">Featured Product</h2>
              <p className="text-white text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex items-center justify-center mt-4">
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">

                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        ...
      </Swiper>
    </div>
  )
}