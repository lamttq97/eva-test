import { RequestReturn } from "@shopify/shopify-api";
import { RestAPI } from "../../config/shopify";

interface MainTheme{
    themes?: any,
    error?: any
}


export async function getMainTheme() : Promise<MainTheme> {
    const data : RequestReturn<MainTheme> = await RestAPI.get({
        path: `/themes`,
        query: { role: "main"}
    });
    return data.body
}