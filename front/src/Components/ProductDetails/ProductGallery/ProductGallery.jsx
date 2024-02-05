import React from 'react'
import "./ProductGallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import ViewProductsDetalisHook from '../../../hook/products/view-product-details-hook';
import { useParams } from 'react-router-dom';

export default function ProductGallery() {
  const { id } = useParams();

  const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id)
  


  


  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      isRTL={true}
      showPlayButton={false}
      showThumbnails={false}
       />
  )
}





