import express from 'express';
import { StudentControllers } from './student.controller';
import validationSchema from '../../middlewares/validateRequest';
import { studentValidations } from './student.validation';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);

router.get('/', StudentControllers.getAllStudents);


router.patch('/:studentId', validationSchema(studentValidations.updateStudentValidationSchema),StudentControllers.updateStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);



export const StudentRoutes = router; 
 