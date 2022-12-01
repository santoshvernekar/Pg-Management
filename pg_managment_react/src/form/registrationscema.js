import * as Yup from "yup";


export const registrationscema= Yup.object({

    name: Yup.string().min(2).max(25).required("Please enter your name"),
    phonenumber:Yup.number().min(10).required("please enter your phone number"),
    username:Yup.string().min(3).required("please enter your username"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirmpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const loginscema=Yup.object({
   email:Yup.string().email().required("Please enter your email"),
   password: Yup.string().min(6).required("Please enter your password")
})

export const tanentschema=Yup.object({
   name:Yup.string().min(2).required("please enter your name"),
   phonenumber:Yup.number().min(10).required("please enter your phonenumber"),
   adharenumber:Yup.number().min(10).required("please enter your adharenumber"),
   adress:Yup.string().min(2).required("please enter your adress"),
  // ownerId:Yup.string().min(2).required("please enter your ownerId"),
   buildingId:Yup.string().min(2).required("please enter your buildingId"),
   roomId:Yup.string().min(2).required("please enter your roomId")
})