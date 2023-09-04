interface CheckOutCardProps {
  id: number;
  title: string;
  image: string;
  price: string;
  handleDeleteProduct?: () => void;
}

export type { CheckOutCardProps };
