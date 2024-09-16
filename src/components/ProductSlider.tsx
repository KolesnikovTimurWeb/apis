import React from "react";
import ReactImageGallery from "react-image-gallery";
import "../styles/ProductSlide.css";
import "react-rater/lib/react-rater.css";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "../styles/ProductPage.module.scss";

const productDetailItem = {
  images: [
    {
      original: "https://i.ibb.co/R9CTvzX/Large-Photo.png",
      thumbnail: "https://i.ibb.co/R9CTvzX/Large-Photo.png",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/5f7a/f75f/c205ece57af1aff5cf87d4d4eab8bc46?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cIfvybIwT9Rpg8c2IKhINClDCnW0ShV6-p5m-IOWSM7rHT9XWxkLS6GLPA83mkYzoWgDcAES7LVaucE4ydv152828tYnUqCIqJTbK2hRcjD0H1S1M6ivIzA8YiDlaqVVZQoPXpoksmUcpzBxSYBVA5JgoWvfvg8OIHk0vUm0zh2~np3OfFidmHTElbA59MAJ12Zi6fiMYTUC8ikCXvkt3NGbWqGe-xkfGehSIaQVLms3MKvnsdjOTapYv1nvpQ7stKg8Ufv9g3AIthD3-MfGQQdlF5dW5BvnLwwqgpK~SlGQLTj8r~majL0BrXKuVJ8jL~pRQJqwAbxWU1jnIsJGZQ__",
      thumbnail: "https://i.ibb.co/NYyt29v/Photo.png",
    },
  ],
  title: "BIG ITALIAN SOFA",
  reviews: "150",
  availability: true,
  brand: "apex",
  category: "Sofa",
  sku: "BE45VGTRK",
  price: 450,
  previousPrice: 599,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
  size: ["XS", "S", "M", "L", "XL"],
  color: ["gray", "violet", "red"],
};

const ProductSlider = () => {
  return (
    <div className={styles.product_slider}>
      <ReactImageGallery
        showBullets={false}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={false}
        showPlayButton={false}
        showNav={false}
        showFullscreenButton={false}
        thumbnailPosition={"left"}
        items={productDetailItem.images}
      />
    </div>
  );
};

export default ProductSlider;
