import * as yup from "yup";

const emailRegex = /(^\s*$)|(^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$)/;
const number = /^[0-9]*\.?[0-9]+$/;

export function contactSchema() {
  return yup
    .object({
      name: yup.string().required("لطفا نام خود را وارد کنید"),
      phone: yup
        .string()
        .required("لطفا شماره خود را وارد کنید")
        .matches(number, "این تلفن معتبر نیست"),
      email: yup
        .string()
        .required("لطفا آدرس ایمیل خود را وارد نمایید")
        .matches(emailRegex, "آدرس ایمیلی که وارد کردید معتبر نیست"),

      description: yup.string().required("توضیحات خود را وارد کنید"),
    })
    .required();
}
export function personalInfoSchema() {
  return yup
    .object({
      first_name: yup.string().required("لطفا نام خود را وارد کنید"),
      last_name: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
      // birthday: yup.string().required("لطفا تاریخ تولد خود را وارد کنید"),
      accountNumber: yup.string().required("شماره حساب را وارد کنید"),
      shabaNumber: yup.string().required("شماره شبا را وارد کنید "),
      cardNumber: yup.string().required("شماره کارت را وارد کنید"),
      gender: yup.string().required("لطفا جنسیت خود را وارد کنید"),
      phone_number: yup
        .string()
        .required("لطفا شماره همراه خود را وارد کنید")
        .matches(number, "این تلفن معتبر نیست"),
      national_code: yup
        .string()
        .test("is-unique", "شماره ملی صحیح نیست", (value) => {
          if (!value) {
            return true;
          }
          const firstDigit = value[0];
          return !value.split("").every((digit) => digit === firstDigit);
        })
        .required("شماره ملی خود وارد کنید")
        .matches(number, "لطفا عدد وارد کنید")

        // .matches(identicalDigits, "شماره ملی صحیح نیست")
        .min(10, "کد ملی باید 10 رقم باشد")
        .max(10, "کد ملی باید 10 رقم باشد"),
      email: yup
        .string()
        .required("لطفا آدرس ایمیل خود را وارد نمایید")
        .matches(emailRegex, "آدرس ایمیلی که وارد کردید معتبر نیست"),
    })
    .required();
}

export function registerSchemaLogin() {
  return yup
    .object({
      phone_number: yup.string().required("لطفا شماره همراه خود را وارد کنید"),
      // .matches(number, "این تلفن معتبر نیست"),
      password: yup.string().required("لطفا رمز عبور خور را وارد کنید"),
    })
    .required();
}
export function registerSchemaProfile() {
  return yup
    .object({
      email: yup
        .string()
        .required("لطفا آدرس ایمیل خود را وارد نمایید")
        .matches(emailRegex, "آدرس ایمیلی که وارد کردید معتبر نیست"),
    })
    .required();
}
export function registerSchemaProfileHost() {
  return yup
    .object({
      email: yup
        .string()
        .required("لطفا آدرس ایمیل خود را وارد نمایید")
        .matches(emailRegex, "آدرس ایمیلی که وارد کردید معتبر نیست"),
      account: yup.string().required("شماره حساب را وارد کنید"),
      shaba: yup.string().required("شماره شبا را وارد کنید "),
      number: yup.string().required("شماره کارت را وارد کنید"),
    })
    .required();
}
export function registerSchemaSignUp() {
  return yup
    .object({
      // phone_number: yup
      //   .string()
      //   .matches(number, "لطفا عدد وارد کنید")
      //   .required("شماره موبایل خود را وارد کنید"),
      // .min(11, "شماره تماس نباید کمتر از 11 رقم باشد")
      // .max(11, "شماره تماس نباید بیشتر از 11 رقم باشد"),
      first_name: yup.string().required("لطفا نام خود را وارد کنید"),
      last_name: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),

      national_code: yup
        .string()
        .test("is-unique", "شماره ملی صحیح نیست", (value) => {
          if (!value) {
            return true;
          }
          const firstDigit = value[0];
          return !value.split("").every((digit) => digit === firstDigit);
        })
        .required("شماره ملی خود وارد کنید")
        .matches(number, "لطفا عدد وارد کنید")
        .min(10, "کد ملی باید 10 رقم باشد")
        .max(10, "کد ملی باید 10 رقم باشد"),
      password: yup
        .string()
        .required("لطفا رمز عبور خور را وارد کنید")
        .min(8, "حداقل مقدار وارد شده باید 8 کاراکتر باشد"),
      confirmPassword: yup
        .string()
        .required("وارد کردن تکرار رمز عبور الزامی است.")
        .oneOf(
          [yup.ref("password"), null],
          "تایید رمز عبور با رمز عبور تطابق ندارند"
        ),
    })
    .required();
}
export function registerSchemaMobileNumber() {
  return yup
    .object({
      phone_number: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("شماره موبایل خود را وارد کنید"),
      // .min(11, "شماره تماس نباید کمتر از 11 رقم باشد")
      // .max(11, "شماره تماس نباید بیشتر از 11 رقم باشد"),
    })
    .required();
}

export function createAccommodation() {
  return yup
    .object({
      name: yup.string().required("لطفا اقامتگاه خود را وارد کنید"),
      // rules: yup.string().required("توضیحات  خود را وارد کنید"),
      category: yup.string().required(" نوع اقامتگاه را وارد کنید"),
      location_type: yup.string().required("منطقه اقامتگاه را وارد کنید "),
      // phone_number: yup
      //   .string()
      //   .matches(number, "لطفا عدد وارد کنید")
      //   .required("شماره اقامتگاه را وارد کنید"),
      capacity: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("ظرفیت استاندارد را وارد کنید"),
      max_capacity: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("حداکثر ظرفیت را وارد کنید"),
      created_year: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("سال ساخت خود را وارد کنید")
        .min(4, "حداقل مقدار وارد شده باید چهار کاراکتر باشد")
        .max(4, "حداقل مقدار وارد شده باید چهار کاراکتر باشد"),

      size: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("متراژ بنا خود را وارد کنید"),
      rooms: yup.string().required("تعداد اتاق خود را وارد کنید"),
      beds: yup.string().required("تعداد تخت  را وارد نمایید"),
      rent_start_date: yup
        .string()
        .required("لطفا تاریخ شروع رزور خود را وارد کنید"),

      rent_end_date: yup
        .string()
        .required("لطفا تاریخ پایان رزور خود را وارد کنید"),

      description: yup.string().required("لطفا توضیحات خود را وارد کنید"),
      facilities: yup
        .array()
        .required("لطفا امکانات اقامتگاه خود را وارد کنید"),
      neighbourhood: yup
        .string()
        .required("لطفا شهرستان اقامتگاه خود را وارد کنید"),
      city: yup.string().required("لطفا شهر اقامتگاه خود را وارد کنید"),
      house_number: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("شماره پلاک خود را وارد کنید "),
      // postal_code: yup
      //   .string()
      //   .matches(number, "لطفا عدد وارد کنید")
      //   .required("کدپستی اقامتگاه خود را وارد کنید "),
      address: yup.string().required("لطفا آدرس اقامتگاه خود را وارد کنید"),
      media_links: yup
        .array()
        .min(5, "حداقل باید 5 تصویر اقامتگاه وارد کنید")
        .required("لطفا تصاویر اقامتگاه خود را وارد کنید"),
      price: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("لطفا نرخ اجاره بها  خود را وارد کنید"),
      price_extra: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("لطفا قیمت اضافی خود را وارد کنید"),
      // document: yup
      //   .array()
      //   .required("لطفا مدارک مالیکت اقامتگاه خود را اضافه کنید."),
      holiday_price: yup
        .string()
        .matches(number, "لطفا عدد وارد کنید")
        .required("لطفا قیمت تعطیلات خود را وارد کنید"),
    })

    .required();
}
