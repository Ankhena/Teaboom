const ACTIVE_CLASS = 'product__variant--active';

document.querySelectorAll('.product').forEach((product) => {
  const variants = product.querySelectorAll('.product__variant');
  const skuElement = product.querySelector('[data-product-sku]');
  const stockElement = product.querySelector('[data-product-stock]');
  const oldPriceElement = product.querySelector('[data-product-price-old]');
  const newPriceElement = product.querySelector('[data-product-price-new]');

  const formatPrice = (value) => {
    const number = parseFloat(value.replace(',', '.'));
    const formatted = number
      .toFixed(2)
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${formatted} ₽`;
  };

  variants.forEach((variant) => {
    variant.addEventListener('click', () => {
      variants.forEach((item) => {
        item.classList.remove(ACTIVE_CLASS);
      });
      variant.classList.add(ACTIVE_CLASS);

      const { sku, priceOld, priceNew, stock } = variant.dataset;

      skuElement.textContent = sku;
      stockElement.textContent = stock;
      oldPriceElement.textContent = formatPrice(priceOld);
      newPriceElement.textContent = formatPrice(priceNew);
    });
  });
});
