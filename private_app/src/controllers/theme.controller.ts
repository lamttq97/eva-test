import ApiError from "../utils/ApiError";
import catchAsync from "../utils/catchAsync";

import shopifyAPI from "../helpers";
import { Request, Response } from "express";


export const addTheme = catchAsync(async (req: Request, res: Response) => {
    const data = await shopifyAPI.getMainTheme();
    var themeId = data.themes[0].id
    const theme = await shopifyAPI.AddFile(themeId)
    res.send(theme)
})