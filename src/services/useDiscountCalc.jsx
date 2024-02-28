const useDiscountCalculator = () => {
  const calcDiscountPrice = (price, discountPerc) => {
    const discountAmount = (price * discountPerc) / 100;
    const discountPrice = price - discountAmount;
    return discountPrice;
  };

  return {
    calcDiscountPrice,
  };
};

export default useDiscountCalculator;
