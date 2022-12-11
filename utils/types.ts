export interface Product {
    id: number,
    name: string,
    parent: number,
    type: string,
    variation: string,
    permalink: string,
    sku: string,
    short_description: string,
    description: string,
    on_sale: boolean,
    prices: Prices,
    price_html: string,
    average_rating: string,
    review_count: number,
    images: Image[],
    categories: Category[],
    has_options: boolean,
    is_purchasable: boolean,
    is_in_stock: boolean,
    low_stock_remaining: any,
    add_to_cart: AddToCart
}

export interface AddToCart {
    text: string,
    description: string
}

export interface Image {
    id: number,
    src: string,
    thumbnail: src,
    srcset: string,
    sizes: string,
    name: string,
    alt: string
}

export interface Prices {
    currency_code: string,
    currency_symbol: string,
    currency_minor_unit: number,
    currency_decimal_separator: string,
    currency_thousand_separator: string,
    currency_prefix: string,
    currency_suffix: string,
    price: string,
    regular_price: string,
    sale_price: string,
    price_range: any
}


export interface Category {
    id: number,
    name: string,
    slug: string,
}
