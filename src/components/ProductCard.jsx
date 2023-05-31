import PropTypes from "prop-types";
import { CartIcon } from "../icons/Icons";

export default function ProductCard({ product }) {
  const { images, title, price, discountPercentage, rating } = product;
  return (
    <div
      role="card"
      className="px-2 py-2 rounded-md flex flex-col justify-between shadow-md"
    >
      <ProductImage images={images}></ProductImage>
      <h2 className="pt-4 pb-2 font-bold text-xl text-center">{title}</h2>
      {/* <p className="pb-4 text-xs font-semibold">{description}</p> */}
      <div className="flex flex-row items-center justify-between">
        <PriceTag
          price={price}
          discountPercentage={discountPercentage}
        ></PriceTag>
        <RatingTag rating={rating}></RatingTag>
      </div>
      <div>
        <CartButton></CartButton>
        <ViewDetailsButton></ViewDetailsButton>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

const ProductImage = ({ images }) => {
  return (
    <div role="image" className="rounded-md">
      <img
        className="w-full h-48 object-contain rounded-md"
        src={images[0]}
        alt=""
      ></img>
    </div>
  );
};

ProductImage.propTypes = {
  images: PropTypes.array,
};

const PriceTag = ({ price, discountPercentage }) => {
  const getReducedPrice = (price, discountPercentage) => {
    return (price - (price * discountPercentage) / 100).toFixed(2);
  };
  return (
    <div role="price" className="py-2 flex">
      <div className="">
        <p className="text-xs font-semibold">Price</p>
        <h3 className="text-3xl font-semibold text-purple">{`$${getReducedPrice(
          price,
          discountPercentage
        )}`}</h3>
      </div>
      <h6 className="pl-1 pb-1 text-sm self-end text-gray">
        <s>{`$${price}`}</s>
      </h6>
    </div>
  );
};

PriceTag.propTypes = {
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
};

const RatingTag = ({ rating }) => {
  return (
    <div role="rating">
      <p className="text-xs font-semibold">Rating</p>
      <h3 className="text-3xl font-semibold text-purple">{rating}</h3>
    </div>
  );
};

RatingTag.propTypes = {
  rating: PropTypes.number,
};

const CartButton = () => {
  return (
    <div className="border-2 flex flex-row items-center justify-center border-purple px-6 py-2 mt-4 text-sm font-semibold rounded-md bg-purple text-white hover:bg-white hover:text-purple transition-all 0.2s">
      <CartIcon></CartIcon>
      <button type="button" className="pl-2">
        ADD TO CART
      </button>
    </div>
  );
};

const ViewDetailsButton = () => {
  return (
    <button className="w-full border-2 border-lightGray px-6 py-2 my-2 text-sm font-semibold rounded-md bg-dimGray text-gray hover:bg-white transition-all 0.2s">
      VIEW DETAILS
    </button>
  );
};
/**
 * * Sample Product Object
 * {
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
}
 */
