import { Router } from "express";

const route = Router()

import { Register,Login, Logout } from "../controllers/authcontrollers.js";
import {
  validateUserInput,
  validateLoginInput,
} from "../middleware/validateMiddleware.js";
import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
  windowMs:15*60*1000,
  max:15,
  message:{msg:'IP rate limit expries wait 15 mins'}
})

route.post("/register",validateUserInput,Register)
route.post("/login",apiLimiter,validateLoginInput,Login);
route.get("/logout",Logout)

export default route