import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllProducts } from "../../utils/woocommerce.ts";
import { Product, Image, Prices, AddToCart } from "../../utils/types.ts";
import { ProductCard } from "../../components/ProductCard.tsx"; 

export const handler: Handlers<Product[]> = {
    async GET(_req, ctx) {
        const data = await getAllProducts();
        return ctx.render(data);
    }
}

export default function ProductsPage(ctx: PageProps) {
    const { data } = ctx;

    return (
        <main class="flex flex-col w-full min-w-screen h-full min-h-screen p-16">
            <p class="text-8xl font-shrimp font-bold text-center">SHOP</p>
            <div class="grid grid-cols-3">
            {
                data.map((product) => <ProductCard product={product} /> )
            }
            </div>
        </main>
    );
}


//function getPrice(prices : Prices) {
    
//}
