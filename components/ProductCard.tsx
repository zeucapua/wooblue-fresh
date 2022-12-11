import { convertString, getPriceText } from "../utils/scripts.ts";
import { Product, Image, Prices, Category } from "../utils/types.ts";
type Props = { product: Product }
export function ProductCard({ product } : Props) {
    return (
        <article class="flex flex-col gap-4 p-8 mx-auto border-2 border-black rounded-lg">
            <a href={`products/${product.id}`}>
            <img src={product.images[0].src} alt="name" class="aspect-auto" />
            <p class="text-3xl text-black font-bold">{convertString(product.name)}</p>
            <p class="text-2xl">{getPriceText(product.prices)}</p>
            </a>
        </article>
    );
}

