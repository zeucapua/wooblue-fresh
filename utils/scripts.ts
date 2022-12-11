import { Prices } from "./types.ts";

export function convertString(text : string) {
    var regex_num_set = /&#(\d+);/g;
    return text.replace(regex_num_set, function(_, $1) {
        return String.fromCharCode($1);
    });
}

export function getPriceText(prices: Prices) {
    const price = (Number(prices.price) / (10 ** prices.currency_minor_unit)).toFixed(2);
    const priceText = prices.currency_prefix + price + prices.currency_suffix;
    return priceText;
}
