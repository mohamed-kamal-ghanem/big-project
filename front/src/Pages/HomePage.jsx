import React from 'react'
import Slider from '../Components/Home/Slider/Slider'
import HomeCategorie from '../Components/Home/HomeCategorie/HomeCategorie'
import CardProductsCon from '../Components/CardProductsCon/CardProductsCon'
import DiscountBanner from '../Components/Home/DiscountBanner/DiscountBanner'
import BrandFeatured from '../Components/Brand/BrandFeatured'
import ViewHomeProductHook from '../hook/products/view-home-product-hook'

const HomePage = () => {

    const [products] = ViewHomeProductHook();

    
    return (
        <div>
            <Slider />
            <HomeCategorie />
            <CardProductsCon title="Best Seller" btnTitle="More" products={products.slice(0, 4)}  />
            <DiscountBanner />
            <CardProductsCon title="Latest Fashion" btnTitle="More" products={products.slice(0, 4)} />
            <BrandFeatured title="Brand Featured" btnTitle="More" />
        </div>
    )
}

export default HomePage