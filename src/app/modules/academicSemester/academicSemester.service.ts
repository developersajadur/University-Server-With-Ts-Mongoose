import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';


// create a new Academic Semester
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid academic semester name or code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

// update a new Academic Semester

const updateAcademicSemesterById = async (id: string, payload:TAcademicSemester ) => {

    const result = await AcademicSemester.findByIdAndUpdate(
        id,
        {...payload, updatedAt: new Date()},
        {new: true}
    )
    return result;
}

  // find all Academic Semester
  const getAllAcademicSemesters = async () => {
    const result = await AcademicSemester.find({});
    return result;
}

// get a Academic Semester

const getAcademicSemesterById = async (id: string) => {
    const result = await AcademicSemester.findById(id);
    return result;
}





export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  updateAcademicSemesterById,
  getAllAcademicSemesters,
  getAcademicSemesterById
};
