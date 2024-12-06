import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester: RequestHandler = catchAsync( async (req, res) =>{

    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester is created succesfully',
        data: result,
      });
})


const updateAcademicSemesterById : RequestHandler = catchAsync( async (req, res) => {
    const id = req.params.id;
    const updatedData =  req.body;
    const result = await AcademicSemesterServices.updateAcademicSemesterById(id, updatedData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester is updated succesfully',
        data: result,
    });
})


const getAllAcademicSemesters : RequestHandler = catchAsync( async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemesters();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semesters are retrieved succesfully',
        data: result,
    })
})

const getAcademicSemesterById : RequestHandler = catchAsync( async (req, res) => {
    const id = req.params.id;
    const result = await AcademicSemesterServices.getAcademicSemesterById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester is retrieved succesfully',
        data: result,
    })
})



export const AcademicSemesterController ={
    createAcademicSemester,
    updateAcademicSemesterById,
    getAllAcademicSemesters,
    getAcademicSemesterById,
}