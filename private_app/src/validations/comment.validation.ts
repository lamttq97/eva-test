import * as Joi from "joi";

export const deleteComment = {
  query: Joi.object().keys({
    id: Joi.string().required(),
  }),
};


export const postComment = {
  params: Joi.object().keys({
    user: Joi.string(),
    userName : Joi.string(),
    product : Joi.string(),
    content: Joi.string()
  }),
};

