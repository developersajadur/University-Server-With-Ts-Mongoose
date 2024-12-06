import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';

const createAcdemicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]], {
      required_error: "Academic semester name is required",
      invalid_type_error: "Invalid academic semester name",
    }),
    year: z
      .string({
        required_error: "Year is required",
        invalid_type_error: "Year must be a string",
      }),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]], {
      required_error: "Academic semester code is required",
      invalid_type_error: "Invalid academic semester code",
    }),
    startMonth: z.enum([...Months] as [string, ...string[]], {
      required_error: "Start month is required",
      invalid_type_error: "Invalid start month",
    }),
    endMonth: z.enum([...Months] as [string, ...string[]], {
      required_error: "End month is required",
      invalid_type_error: "Invalid end month",
    }),
  }),
});

export const AcademicSemesterValidations = {
  createAcdemicSemesterValidationSchema,
};
