import { Router } from "express";
import { getApplicationstats, getCurrentuser, getUpdateuser } from "../controllers/usercontrollers.js";
import { validUpdateduserInput } from "../middleware/validateMiddleware.js";
import { authorizedPermission } from "../middleware/authMiddleware.js";
import upload from "../middleware/MulterMiddleware.js";

const route = Router()


route.get("/current-user", getCurrentuser);
route.get("/admin/app-stats",[authorizedPermission('admin'), getApplicationstats]);
route.patch("/update-user",upload.single('avatar'), validUpdateduserInput,getUpdateuser);

export default route