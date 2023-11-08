'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleHeroSlider from './SingleHeroSlider'
import { Navigation, EffectFade, Autoplay } from 'swiper/modules'
import "swiper/css/bundle";
import mainSlider from '@/data/mainSlider'
import Image from 'next/image'


const HeroSlider = () => {
  return (
<div className='main-slider'>
	
<Swiper
	slidesPerView={1}
	loop
	navigation
	effect="fade"
	autoplay
	modules={[Navigation, EffectFade, Autoplay]}
	>
		{
			mainSlider.map(info =><SwiperSlide key={info.id}>
				<SingleHeroSlider info={info}></SingleHeroSlider>
			</SwiperSlide>)
		}
	</Swiper>
</div>

  )
}

export default HeroSlider