import * as Yup from "yup"



export const commentSchema=Yup.object().shape({
    fullName:Yup.string().required("نام و نام خانوادگی الزامی میباشد ."),
    email:Yup.string().email("آدرس ایمیل معتبر نیست").required("ایمیل  الزامی میباشد ."),
    rank:Yup.string().required("رای دادن الزامی میباشد."),
    gender:Yup.string().nullable(),
    comment:Yup.string().required("وارد کردن نظر الزامی میباشد"),

})




export const contactSchema=Yup.object().shape({
    fullName:Yup.string().required("نام و نام خانوادگی الزامی میباشد ."),
    email:Yup.string().email("آدرس ایمیل معتبر نیست").required("ایمیل  الزامی میباشد ."),
    comment:Yup.string().required("وارد کردن نظر الزامی میباشد"),

})
export const recaptchaSchema=Yup.object().shape({
   
    reCaptcha:Yup.string().required("  کپتچا الزامی میباشد")
})