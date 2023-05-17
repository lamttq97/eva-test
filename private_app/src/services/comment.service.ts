import Comment from '../db/models/comment'

interface CommentContent {
    user: number,
    userName: string,
    product: string,
    content: string
}

export const getTotalCommentPerProduct = async (id: string) : Promise<any> => {
    var data = await Comment.count({ 
        where: {
            product: id
        }
    })
    return data
}

export const getAll = async (offset: number = 0) : Promise<any> => {
    var data = await Comment.findAndCountAll({
        limit: 5,
        offset: offset,
        attributes: ['userName', 'product', 'content'], 
        order: [
            ['createdAt', 'DESC']
        ]
    })
    return data
}


export const getComment = async (productId: string, offset: number = 0) => {
    var data = await Comment.findAndCountAll({
        where: {
            product: productId 
        },
        limit: 5,
        order: [
            ['createdAt', 'DESC']
        ],
        offset: offset
    })
    return data
}

export const addComment = async (comment: CommentContent) => {
    var data = await Comment.create(comment)
    return data
}


export const deleteComment = async (id: number) => {
    var data = await Comment.destroy({
        where: {
            id: id
        }
    })
    return data
}