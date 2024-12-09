import { TAcademicDepartment } from "./academicDepartment.interface"
import { AcademicDepartment } from "./academicDepartment.model"



const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {

    const isAcademicDepartmentExist = await AcademicDepartment.findOne({
        name: payload.name
    })

    if(isAcademicDepartmentExist){
        throw new Error("Academic Department already exists!")
    }

    const result = await AcademicDepartment.create(payload);
    return result;
}


export const AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
  };