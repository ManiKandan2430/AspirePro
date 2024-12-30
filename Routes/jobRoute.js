import { Router } from "express";
import { Createjob, Deletejob, getAlljobs, Singlejob, Status, updatedjob } from "../controllers/jobcontrollers.js";
import { validateParamsId, validateTest } from "../middleware/validateMiddleware.js";

const router = Router()

router.route('/').get(getAlljobs).post(validateTest,Createjob)
router.route('/stats').get(Status)
router.route('/:id').get(validateParamsId,Singlejob).patch(validateParamsId,validateTest,updatedjob).delete(validateParamsId,Deletejob)

export default router