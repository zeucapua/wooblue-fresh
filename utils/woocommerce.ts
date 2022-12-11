import "https://deno.land/std@0.167.0/dotenv/load.ts";
import { Product } from "./types.ts";

const WOO_SHOP = Deno.env.get("WOO_SHOP_LOCAL");
if (WOO_SHOP === undefined) { throw new Error("no 'WOO_SHOP_LOCAL' variable set"); }

export async function fetchAPI<T>(query : string = "") : Promise<T> {
    const url = WOO_SHOP + query;
    console.log(url);
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }); 
    if (!response.ok) { 
        const body = await response.text(); 
        throw new Error(body); 
    }

    const json = await response.json();
    if (json.errors) { console.log(json.errors); throw new Error('Failed to fetch API'); }
    return json;
}

export async function getAllProducts<T>() : Promise<T> {
    return await fetchAPI("products");
}

export async function getProductFromID<T>(id : number) : Promise<T> {
    return await fetchAPI(`products/${id}`);
}





