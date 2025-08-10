import * as z from "zod";

export const loginscheme = z
  .object({

    email: z.string().nonempty("this feild is empty").email("Not valid email"),
    password: z
      .string()
      .nonempty("this feild is empty")
      .regex( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'Password invaild'),
    
  })
