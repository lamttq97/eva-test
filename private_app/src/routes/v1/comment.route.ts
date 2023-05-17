import express from "express";
import validate from "../../middlewares/validate";
import controller from "../../controllers";

const router = express.Router();


router
.route('/:handle')
.get(controller.comment.getComment)
.delete(controller.comment.deleteComment)

router
  .route("/")
  .get(controller.comment.getAllComment)
  .post(controller.comment.addNewComment);


export default router;
