import mongoose from 'mongoose';
import { Student } from './student.model';
import { User } from '../user/user.model';
import { TStudent } from './student.interface';
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchableFields } from './student.constant';

const getAllStudentsFromDB =async (query: Record<string, unknown>) => {

  const studentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  )
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
  return result;
};


const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({id}).populate('admissionSemester').populate({
    path: 'academicDepartment',
    populate: 'academicFaculty'
  })
  return result;
};

const updateStudentIntoDB = async (id: string, payload : Partial<TStudent>) => {

 const { name, guardian, localGuardian, ...remainingStudentData} = payload;

 const modifiedUpdatedData : Record<string, unknown> = {
  ...remainingStudentData
 }

 if(name && Object.keys(name).length){
  for(const [keys, value] of Object.entries(name)){
    modifiedUpdatedData[`name.${keys}`] = value;
  }
 }

 if(guardian && Object.keys(guardian).length){
  for(const [keys, value] of Object.entries(guardian)){
    modifiedUpdatedData[`guardian.${keys}`] = value;
  }
 }

 if(localGuardian && Object.keys(localGuardian).length){
  for(const [keys, value] of Object.entries(localGuardian)){
    modifiedUpdatedData[`guardian.${keys}`] = value;
  }
 }


  const result = await Student.findOneAndUpdate({id}, modifiedUpdatedData , {
    new: true,
    runValidators: true
  });
  return result;
};




const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
     session.startTransaction();
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
       { isDeleted: true },
       {new: true, session}
      );
      if(!deletedStudent){
        throw new Error('Student not found');
      }
      const deletedUser = await User.findOneAndUpdate(
        {id},
        { isDeleted: true },
        {new: true, session}
      )
      if(!deletedUser){
        throw new Error('User not found');
      }
      await session.commitTransaction();
      await session.endSession();
    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Error while deleting')
  }

}; 

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
  deleteStudentFromDB,
};
