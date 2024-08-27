import { Phone } from '@mui/icons-material';
import * as yup from 'yup';
import "yup-phone";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const specialCharacter = /^'?(?:\p{L}\p{M}*)+(?:['\s](?:\p{L}\p{M}*)+)*'?$/u;

export const loginyupschema = yup.object().shape({
    email: yup.string().email("Geçerli bir Email adresi giriniz").required("Email adresi zorunlu"),
    password: yup.string().required("şifre alanı zorunlu"),
    rememberMe: yup.bool(),
})
export const registeryupschema = yup.object().shape({
    name: yup.string().min(2).max(30).matches(specialCharacter, "özel karakter kullanmayın").required("Name alanı zorunlu"),
    email: yup.string().email("Geçerli bir Email adresi giriniz").required("Email adresi zorunlu"),
    password: yup.string().required("Şifre alanı zorunlu"),
    username: yup.string().min(4).max(30).required("Kullanıcı adı zorunlu"),
    surname: yup.string().min(2).max(30).matches(specialCharacter, "özel karakter kullanmayın").required("Soy adı zorunlu"),
    phone: yup.string().matches(phoneRegExp, 'Numara geçersiz').required("Telefon numarası zorunlu"),
    term: yup.boolean().oneOf([true], 'You must agree to the terms and conditions.')

})
