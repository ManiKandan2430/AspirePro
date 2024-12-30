import { UnauthendicatedError, UnauthorizedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/jsonwebToken.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthendicatedError("authenticated invalid");
  try {
    const {userID,role} = verifyJWT(token);
    req.user = {userID,role}
    next();
  } catch (error) {
    throw new UnauthendicatedError("authenticated invalid");
  }
};

export const authorizedPermission = (...roles) =>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            throw new UnauthorizedError(
              "not Unauthorized to access this route"
            );
        }
        next()
    }
}