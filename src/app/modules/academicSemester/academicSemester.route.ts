  import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import validationSchema from "../../middlewares/validateRequest";
import { AcademicSemesterValidations } from "./academicSemester.validation";

  const router = express.Router();

router.post('/create-academic-semester', validationSchema(AcademicSemesterValidations.createAcdemicSemesterValidationSchema), AcademicSemesterController.createAcademicSemester)



export const AcademicSemesterRoutes = router;