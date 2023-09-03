interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}

export default Product;
