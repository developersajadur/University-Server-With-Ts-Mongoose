import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultiesService } from "./academicFaculty.service";


const createAcademicFaculty = catchAsync( async (req, res) => {
    const result = await AcademicFacultiesService.createAcademicFacultyIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic faculty is created succesfully',
        data: result,
    })
})


export const AcademicFacultyController = {
    createAcademicFaculty,
}