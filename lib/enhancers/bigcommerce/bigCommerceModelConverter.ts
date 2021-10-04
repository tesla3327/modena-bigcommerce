export const bigCommerceModelConverter = ({ parameter }: any) => {
  const productData = parameter.value;
  if (Array.isArray(productData)) {
    return productData.map((p) => transformBigCommerceProduct(p));
  } else {
    return transformBigCommerceProduct(productData);
  }
};

function transformBigCommerceProduct(productData: any) {
  const productImages = productData?.images?.map((i) => {
    return {
      url: i?.url_zoom,
    };
  });

  return {
    name: productData.name,
    tag: '',
    description: productData.description,
    price: productData.price,
    images: productImages,
  };
}
