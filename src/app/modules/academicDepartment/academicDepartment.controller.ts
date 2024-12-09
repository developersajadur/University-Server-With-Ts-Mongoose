import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepartment.service";



const  createAcademicDepartmemt = (catchAsync( async (req, res) => {

    const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Department is created succesfully',
        data: result,
    })
}))



export const AcademicDepartmentControllers = {
    createAcademicDepartmemt,
  };