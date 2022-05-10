
// function ValidateName() {
//     if (input.inputName.trim() === '') {
//         setErrorName('ten khong duoc de trong')
//         return false
//     } else {
//         setErrorName("")
//         return true
//     }
// }

// function ValidateEmail() {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.inputEmail)) {
//         setErrorEamil("")
//         return (true)
//     } else if (input.inputEmail.trim() === '') {
//         setErrorEamil('vui long dien Email')
//         return false
//     } else {
//         setErrorEamil("Trường này phải là email hợp lệ!")
//         return (false)
//     }
// }

// function ValidateBirthDay() {
//     if (input.inputBirthDay.trim() === '') {
//         setErrorBirthDay("vui long nhap nam sinh")
//         return false
//     } else if (input.inputBirthDay.split('-')[0] < 2019) {
//         setErrorBirthDay('')
//         return true
//     } else
//         setErrorBirthDay('nam sinh phai lon hon 2019')
//     return false
// }

// function ValidatePassword() {
//     if (input.inputPassWord.trim() === '') {
//         setErrorPassWord("vui long nhap pass")
//         return false
//     } else if (input.inputPassWord.length < 6) {
//         setErrorPassWord("pass phai gom 6 ky tu")
//         return false
//     } else if (input.inputPassWord !== input.inputRepeatPassWord) {
//         setErrorPassWord("pass khong trung nhau")
//         return false
//     }
//     setErrorPassWord("")
//     return true
// }

// function ValidateGender() {
//     if (input.inputGender !== '') {
//         setErrorGender("vui long nhap gioi tinh")
//         return false
//     }
//     setErrorGender("")
//     return true
// }

// export { ValidateGender, ValidatePassword, ValidateBirthDay, ValidateEmail, ValidateName }