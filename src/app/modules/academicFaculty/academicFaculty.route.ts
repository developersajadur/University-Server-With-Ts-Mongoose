import express from 'express';
import validationSchema from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router()

router.post('/create-academic-faculty',
    validationSchema(AcademicFacultyValidation.createAcademicFacultyValidationSchema),
    AcademicFacultyController.createAcademicFaculty

)


export const AcademicFacultyRoutes = router;