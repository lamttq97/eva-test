import { shopify, session, RestAPI } from "../../config/shopify";
import fs from 'fs';
import path from 'path';
import { config } from "../../config/config";


export async function AddFile(themeId: number) : Promise<any> {
    try {
        
        const file = fs.readFileSync(path.resolve(__dirname, "../../../templates/section/product-comment.liquid"), 'utf8').toString().replaceAll("process.env", config.domain);
        const body = {
            asset: {
                theme_id: themeId,
                key: "sections/comment.liquid",
                value: file
            }
        }
    
        const response = await RestAPI.put({
            path: `/themes/${themeId}/assets`,
            data: body,
        });
    
        return response

    } catch (e) {
        console.log(e)
    }
}