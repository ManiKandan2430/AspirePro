import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import Job from "../Model/Jobmodel.js";
import User from "../Model/Usermodel.js";

const withvalidationError = (validatevalue) => {
  return [
    validatevalue,
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        const errorMessage = error.array().map((error) => error.msg);
        if (errorMessage[0].startsWith("no job")) {
          throw new NotFoundError(errorMessage);
        }
        if(errorMessage[0].startsWith("not Unauthorized")){
          throw new UnauthorizedError("not Unauthorized to access this route");
        }
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

export const validateTest = withvalidationError([
  body("company").notEmpty().withMessage("job company is required"),
  body("position").notEmpty().withMessage("job position is required"),
  body("jobLocation").notEmpty().withMessage("job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invalid status value"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("invalid type value"),
]);

export const validateParamsId = withvalidationError([
  param("id").custom(async (value,{req}) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDB id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with id ${value}`);
    const isAdmin = req.user.role === "admin"
    const isOwner = req.user.userID === job.createdBy.toString()
    if(!isAdmin && !isOwner){
      throw new UnauthorizedError("not Unauthorized to access this route")
    }
  }),
]);

export const validateUserInput = withvalidationError([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("Email is already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("jobLocation").notEmpty().withMessage("Job location is required"),
  body('lastname').notEmpty().withMessage('lastname is requires')
]);

export const validateLoginInput = withvalidationError([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validUpdateduserInput = withvalidationError([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email,{req}) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userID) {
        throw new BadRequestError("Email is already exists");
      }
    }),
  body("jobLocation").notEmpty().withMessage("Job location is required"),
  body("lastname").notEmpty().withMessage("lastname is requires"),
]);