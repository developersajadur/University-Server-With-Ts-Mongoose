import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";


const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
    const createAcademicFacultyIntoDB = await AcademicFaculty.create(payload)
    return createAcademicFacultyIntoDB;
}


export const AcademicFacultiesService = {
    createAcademicFacultyIntoDB
}