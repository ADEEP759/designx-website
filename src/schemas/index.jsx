import * as Yup from 'yup'

export const formValidation = Yup.object({
    name: Yup.string().min(3).required("Please enter Name"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]+$/, 'Phone must contain only numbers'),
    company_name: Yup.string(),
    remark: Yup.string(),
})