import { FaHandPointRight } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link, useLoaderData } from "react-router-dom";
import { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/a1.jpg";

import "./Home.css";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div className="">
      <div className="md:h-[calc(100vh-350px)]">
        <Swiper
          style={{
            "--swiper-navigation-color": "#ffffff",
            "--swiper-pagination-color": "#ffffff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg  opacity-50"
            style={{
              backgroundImage: `url("https://i.ibb.co/fF9kSnF/herro.jpg")`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div
              className="title text-2xl md:text-5xl font-bold md:pl-16 md:pt-10"
              data-swiper-parallax="-300"
            >
              Welcome & Enjoy <br /> World-Class Cuisine
            </div>
            <div
              className="subtitle md:w-96 mt-2 md:pl-16"
              data-swiper-parallax="-200"
            >
              <p>
                Family dinners, date nights, brunches, parties, get-togethers,
                and even meals for the entire week.
              </p>
              <button className="px-3 py-2 hover:bg-[#f4d699] hover:text-black md:px-5 md:py-3 border-2 mt-3 border-[#f4d699] rounded-2xl text-lg md:text-xl font-bold">
                Contact Us
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="title text-2xl md:text-5xl font-bold md:pl-16 md:pt-10"
              data-swiper-parallax="-300"
            >
              We&apos;ll Take Care <br /> Of All the Details
            </div>
            <div
              className="subtitle md:w-96 mt-2 md:pl-16"
              data-swiper-parallax="-200"
            >
              <p>
                Think back to your last party. It was probably a great time with
                amazing friends.
              </p>
              <button className="px-3 py-2 hover:bg-orange-500 md:px-5 md:py-3 border-2 mt-3 border-orange-500 rounded-2xl text-lg md:text-xl font-bold">
                Contact Us
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="title text-2xl md:text-5xl font-bold md:pl-16 md:pt-10"
              data-swiper-parallax="-300"
            >
              Delicious Food is <br /> My Passion
            </div>
            <div
              className="subtitle md:w-96 mt-2 md:pl-16"
              data-swiper-parallax="-200"
            >
              <p>
                I belever in its power to nourish, sustain, delight, and bring
                people together. I use only the heighest quality ingredients
              </p>
              <button className="px-3 py-2 hover:bg[#f4d699] md:px-5 md:py-3 border-2 mt-3 border-[#f4d699] rounded-2xl text-lg md:text-xl font-bold">
                Contact Us
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" px-5 md:px-0 flex flex-wrap gap-6 md:gap-0 items-center mt-10">
        <div className="w-1/2">
          <img
            className="mx-auto"
            src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/bg-8.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold">
            Experience The <br /> Sublime!
          </h2>
          <p className=" md:w-2/3 text-justify leading-relaxed mt-2">
            Chef Alanzo prepares and serves exquisite dinners to parties from
            two to 200 at your home, business or private catering event. His
            blend of French-Mediterranean cuisine draws on a lifetime of skills
            and the knowledge that all meals, no matter how large or how small,
            are special events among family and friends
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-500 mt-10 relative">
        <img
          className="h-screen md:h-[calc(100vh-250px)] w-full object-cover opacity-30 "
          src={image1}
          alt=""
        />
        <div className="absolute top-0 left-0 pt-24 px-5 md:px-32">
          <h2 className="text-2xl md:text-4xl text-white font-bold my-2">
            Restaurant Consulting <br /> Services
          </h2>
          <p className="text-white md:w-1/3 my-2">
            Alanzo, along with his team, offers culinary and management
            services. We have the experience to provide concept development
            strategies and best practice principles in order to achieve maximum
            sales performance.
          </p>
          <div className="border-2 md:w-1/3 my-2"></div>
          <div className="grid grid-cols-3 md:w-1/3 text-white  my-2">
            <h3>The Process</h3>
            <ul className="list-disc">
              <li>Discover</li>
              <li>Plan</li>
              <li>Design</li>
            </ul>
            <ul className="list-disc">
              <li>Organize</li>
              <li>Grow</li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <button className="text-[#f4d699] border-2 px-8 hover:bg-[#f4d699] hover:text-black py-2 border-[#f4d699] rounded-2xl ">
              Get Start
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="mb-2 mt-5 md:my-16 md:mb-5 text-2xl md:text-4xl font-bold ">
          Latest <span className="text-[#f4d699]">Blog</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="relative">
            <img
              className="h-72 w-full"
              src={`https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=1060&t=st=1682968261~exp=1682968861~hmac=5a1da2f9b9dc4b35c2842c534b5a7a5761c7fb54707412bf2a84e4b346d9a605`}
              alt=""
            />
            <p className="bg-[#f4d699] text-black w-20 text-lg font-bold text-center px-5 py-4 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-72 w-full"
              src={`https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.2.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-[#f4d699] text-black w-20 text-lg font-bold text-center px-5 py-4 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-72 w-full"
              src={`https://img.freepik.com/free-photo/pakistani-dish-arrangement-view_23-2148825114.jpg?size=626&ext=jpg&ga=GA1.2.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-[#f4d699] text-black w-20 text-lg font-bold text-center px-5 py-4 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-72 w-full"
              src={`https://img.freepik.com/free-photo/delicious-pakistani-dish-high-angle_23-2148825127.jpg?size=626&ext=jpg&ga=GA1.2.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-[#f4d699] text-black w-20 text-lg font-bold text-center px-5 py-4 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-72 w-full"
              src={`https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?size=626&ext=jpg&ga=GA1.2.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-[#f4d699] text-black w-20 text-lg font-bold text-center px-5 py-4 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
          <div className="relative">
            <img
              className="h-72 w-full"
              src={`https://img.freepik.com/premium-photo/mutton-biryani-food-photography_162831-2.jpg?size=626&ext=jpg&ga=GA1.1.1589682514.1675421972&semt=sph`}
              alt=""
            />
            <p className="bg-[#f4d699] text-black w-20 text-lg font-bold text-center px-5 py-4 absolute top-2 left-4">
              2 May 2023
            </p>
            <p className="text-lg font-bold absolute bottom-4 text-white">
              Blog Title Goes To Here
            </p>
          </div>
        </div>
      </div>

      <div className="md:ml-28 md:mr-28  mt-10 relative ">
        <img className="h-[calc(100vh-250px)] md:h-[calc(100vh-350px)] w-full" src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/img_6.jpg?id=416" alt="" />
        <div className="absolute top-16 md:top-28 px-5 right-0 text-black">
          <h1 className="text-2xl font-bold md:text-4xl">Menus</h1>
          <p className="text-gray-500">Browse our traditional menus or let us create something new for you.</p>
          <ul className="list-disc whitespace-norma">
            <li className="text-lg">Dinner Menu</li>
            <p className="md:w-2/3 text-gray-500">Our menu features time honored favorites that have come to define the perfect Park City dining experience.</p>
            <li className="text-lg">Brunch Menu</li>
            <p className="md:w-2/3 text-gray-500">Savor the stuffed French toast with warm syrup or delight in a classic eggs benedict with rich hollandaise.</p>
            <li className="text-lg">Vegan & Gluten Free Menu</li>
            <p className="md:w-2/3 text-gray-500">100% vegan, vegetarian & gluten free cuisine from our kitchen to your table.</p>
            <p></p>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h3 className="mb-2 md:mb-5 text-3xl md:text-4xl font-bold">
          Our <span className="text-[#f4d699]">Chef</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {chefData.map((singleChef) => (
            <div
              key={singleChef?.id}
              className="card md:w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <LazyLoad threshold={0.95}>
                  <img
                    className="w-full h-64 "
                    src={singleChef?.picture}
                    alt="Shoes"
                  />
                </LazyLoad>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleChef?.name}</h2>
                <p>Experience: {singleChef?.experience} years</p>
                <div className="flex items-center justify-between">
                  <p>Recipes: {singleChef?.recipes_count}</p>
                  <p className="flex items-center gap-2">
                    Likes: {singleChef?.likes}
                    <span className="text-[#f4d699] text-lg">
                      <FaHandPointRight></FaHandPointRight>
                    </span>
                  </p>
                </div>
                <div className="card-actions ">
                  <Link to={`/category/${singleChef?.id}`}>
                    <button className="btn bg-[#f4d699] text-black hover:text-white">View Recipes </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-black relative ">
          <img
            className="opacity-40 w-full h-[700px] md:h-80"
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmSfv3W5Y_IzDRGnvA0mlLnCnTo2BiXMmlw&usqp=CAU`}
            alt=""
          />
          <div className="absolute top-5 flex flex-wrap items-center justify-between gap-10">
            <div className="md:w-5/12 ">
              <h2 className="text-white text-xl font-bold px-5 uppercase">
                most selling food in Bangladesh
              </h2>
              <p className="text-white px-5 mt-2">
                Bangladesh is a country of great cuisine. Its food has been
                shaped by its diverse history and its particular geography.
                Bangladeshi cuisine is influenced by Mughlai cuisine and many
                Persian, Turkish, Arabic, and Indian dishes are popular here. So
                you can guess how many different tastes you will find on any
                menu.
              </p>
            </div>
            <div className="carousel carousel-center md:w-6/12 bg-white  p-4 space-x-4  rounded-box  ">
              {chefData.map((singleChef) => (
                <div
                  key={singleChef.id}
                  className="carousel-item bg-black relative"
                >
                  <img
                    src={singleChef.food_img}
                    className="w-56 h-56 rounded-box opacity-60"
                  />
                  <p className="text-lg text-white absolute bottom-3 font-bold">
                    {singleChef.food_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
