import express from 'express';
import { UserControllers } from './user.controller';
import validationSchema from '../../middlewares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';

const router = express.Router();

router.post('/create-student', validationSchema(createStudentValidationSchema) , UserControllers.createStudent);

export const UserRoutes = router;
