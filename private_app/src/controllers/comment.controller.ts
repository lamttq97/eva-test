import httpStatus from "http-status";
import ApiError from "../utils/ApiError";
import catchAsync from "../utils/catchAsync";
import formatId from "../utils/setShopify";
import shopifyAPI from "../helpers";
import * as Comment from '../services/comment.service'

import { Request, Response } from "express";
import { off } from "process";

export const getCustomerName = catchAsync(async (req : Request, res: Response) => {
  const customerId = formatId("Customer", req.params.id);
  var data : any = await shopifyAPI.getCustomerName(customerId);
  if (data.error || data.data.customer == null) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Customer dont have data');
  }
  res.status(200).send(data);
});

export const getProduct = catchAsync(async (req: Request, res: Response) => {
  var data = await shopifyAPI.getProductCount(req.params.handle)

  var count : number = data.data.productByHandle.metafield == null ? 1 : parseInt(data.data.productByHandle.metafield.value) + 1
  shopifyAPI.updateMetafield(data.data.productByHandle.id, count)
  res.status(200).send(data)
})

export const getAllComment = catchAsync(async (req: Request, res: Response) => {
  const page  = req.query.page as string || "1";
  const offset : number = (parseInt(page) - 1) * 5
  var totalComment = await Comment.getAll(offset)
  res.status(200).send(totalComment.rows)
})


export const getComment = catchAsync( async (req : Request, res: Response) => {
  const handle : string = req.params.handle as string;
  const page  = req.query.page as string || "1";
  const offset = (parseInt(page) - 1) * 5
  var  data : any = await Comment.getComment(handle, offset);
  res.status(200).send(data.rows)
})


export const deleteComment = catchAsync( async (req : Request, res: Response) => {
  const handle : string = req.params.handle as string;
  var  data : any = await Comment.deleteComment(parseInt(handle));
  // if (data) {
  //   var totalComment = await Comment.getTotalCommentPerProduct(req.params.product as string)
  //   shopifyAPI.updateMetafield(req.body.product, totalComment)
  // }
  res.status(200).send(data)
})


export const addNewComment = catchAsync(async (req : Request, res: Response) => {
  var  data : any = await Comment.addComment(req.body)
  if (data) {
    var product = await shopifyAPI.getProductCount(req.body.product)
    var count : number = product.data.productByHandle.metafield == null ? 1 : parseInt(product.data.productByHandle.metafield.value) + 1
    shopifyAPI.updateMetafield(product.data.productByHandle.id, count)
  }
  res.status(200).send(data)
})