import * as z from "zod";

export const registerscheme = z
  .object({
    name: z
      .string()
      .nonempty("this feild is empty")
      .min(2,"min length is 2 char").max(10,'max length is 10 char'),
    email: z.string().nonempty("this feild is empty").email("Not valid email"),
    password: z
      .string()
      .nonempty("this feild is empty")
      .regex( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'Password invaild'),
    rePassword: z.string(),
    gender: z.enum(["female", "male"]),
    dateOfBirth: z.coerce.string()
  })
  .refine(
    (data) => 
      data.password === data.rePassword
    ,
    {
      path: ["rePassword"],
      message: "not the same",
    }
  );
