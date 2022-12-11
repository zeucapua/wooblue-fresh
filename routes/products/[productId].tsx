import { Handlers, PageProps } from "$fresh/server.ts";
import { convertString, getPriceText } from "../../utils/scripts.ts";
import { getProductFromID } from "../../utils/woocommerce.ts";
import { Product, Image, Prices, AddToCart } from "../../utils/types.ts";

export const handler: Handlers<Product> = {
    async GET(_req, ctx) {
        const { productId } = ctx.params; 
        const product = await getProductFromID(productId);
        return ctx.render(product);
    }
}

export default function ProductPage(ctx: PageProps) {
    const { data } = ctx;
    const product : Product = data;
    return (
        <div class="flex flex-col w-full min-w-screen h-full min-h-screen p-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img 
                    src={product.images[0].src} 
                    alt={product.images[0].name} 
                    class="aspect-auto border-4 border-black rounded-xl p-8" 
                />
                <div class="flex flex-col p-8">
                    <p class="text-5xl font-shrimp font-bold">{convertString(product.name)}</p>
                </div>
            </div>
        </div>
    )
}

