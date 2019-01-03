/**
 * Formats currency and price according to display language and locale.
 * Doesn't display trailing double zeroes for whole numbers.
 *
 * @param currency
 * @param price
 * @param locale
 */
function formatPrice(
  currency: string,
  price: number,
  locale: string = "en-US"
): string {
  let output = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  // cut off trailing double zeroes
  if (output.slice(-3) === ".00" || output.slice(-3) === ",00") {
    output = output.slice(0, -3);
  }

  return output;
}

export default formatPrice;
