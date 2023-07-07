'use client';

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './carousel.scss';

// import required modules
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ImgRonnie from '/src/assets/ronko3.jpg';
import ImgRonnie2 from '/src/assets/ronko2.jpg';
import ImgRonnie1 from '/src/assets/ronko1.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './carousel.scss';

// import required modules
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

export default function App() {
	return (
		<>
			<Swiper
				rewind={true}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image src={ImgRonnie} width={80} height={50} alt={''}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={ImgRonnie2} width={80} height={50} alt={''}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={ImgRonnie1} width={80} height={50} alt={''}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={ImgRonnie} width={80} height={100} alt={''}></Image>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
