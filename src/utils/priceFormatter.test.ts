import formatPrice from "./priceFormatter";

describe("Price formatter", () => {
  it("formats prices as expected", () => {
    expect(formatPrice("AUD", 20)).toEqual("A$20");
    expect(formatPrice("GBP", 20)).toEqual("£20");
    expect(formatPrice("EUR", 2000)).toEqual("€2,000");
  });

  it("keeps decimals where appropriate", () => {
    expect(formatPrice("EUR", 15.99)).toEqual("€15.99");
    expect(formatPrice("EUR", 4.5)).toEqual("€4.50");
  });
});
