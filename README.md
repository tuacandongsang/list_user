# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






import React, { useState, useEffect } from "react";
import "./style.css"
// import Form from '../component/form'
// import api from '../api/axios'


const initItem = [
    {
        id: 1,
        name: "nguyen tuan",
        email: "tuancandongsang@gmail.com",
        birthDay: "1993-01-03",
        gender: "Nam",
        userName: "tuancandongsang",
        passWord: "03011993",
        repeatPassWord: "03011993"
    },
    {
        id: 2,
        name: "bui hoa",
        email: "hoaham@gmail.com",
        birthDay: "1994-10-05",
        gender: "Nu",
        userName: "thanhhoa",
        passWord: "05101994",
        repeatPassWord: "03011993"
    },
    {
        id: 3,
        name: " nguyen nga",
        email: "ngaden@gmail.com",
        birthDay: "2001-26-12",
        gender: "Nu",
        userName: "phuongnga",
        passWord: "28122001",
        repeatPassWord: "03011993"
    }
]

function View() {
    const [items, setitems] = useState(initItem)

    const [modal, setModal] = useState(false)

    const [input, setInput] = useState({
        inputSearch: '',
        inputName: '',
        inputEmail: '',
        inputBirthDay: '',
        inputGender: "",
        inputUserName: '',
        inputPassWord: '',
        inputRepeatPassWord: '',
        indexID: '',
    })

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleDelete = (id) => {
        const item = JSON.parse(JSON.stringify(items))
        const index = item.findIndex((item) => item.id === id)
        item.splice(index, 1)
        setitems(item)
    }

    const handleClose = () => {
        setModal(!modal)
    }

    const [status, setStatus] = useState('')

    const handleStatus = (id) => {
        setErrorBirthDay('')
        setErrorEamil('')
        setErrorName('')
        setErrorGender("")
        setErrorPassWord("")
        setModal(!modal)

        if (id > 0) {
            setStatus('Edit')
            const item = JSON.parse(JSON.stringify(items))
            const index = item.findIndex((item) => item.id === id)
            input.inputName = item[index].name
            input.inputEmail = item[index].email
            input.inputBirthDay = item[index].birthDay
            input.inputGender = item[index].gender
        } else {
            setStatus('Add')
            input.inputName = ''
            input.inputEmail = ''
            input.inputBirthDay = ''
            input.inputGender = ''
        }
        setInput({
            ...input,
            indexID: id,
        })
    }

    const [errorName, setErrorName] = useState("")

    const [errorEamil, setErrorEamil] = useState('')

    const [errorBirthDay, setErrorBirthDay] = useState('')

    const [errorPassWord, setErrorPassWord] = useState('')

    const [errorGender, setErrorGender] = useState('')

    function ValidateName() {
        if (input.inputName.trim() === '') {
            setErrorName('ten khong duoc de trong')
            return false
        } else {
            setErrorName("")
            return true
        }
    }

    function ValidateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.inputEmail)) {
            setErrorEamil("")
            return (true)
        } else if (input.inputEmail.trim() === '') {
            setErrorEamil('vui long dien Email')
            return false
        } else {
            setErrorEamil("Trường này phải là email hợp lệ!")
            return (false)
        }
    }

    function ValidateBirthDay() {
        if (input.inputBirthDay.trim() === '') {
            setErrorBirthDay("vui long nhap nam sinh")
            return false
        } else if (input.inputBirthDay.split('-')[0] < 2019) {
            setErrorBirthDay('')
            return true
        } else setErrorBirthDay('nam sinh phai lon hon 2019')
        return false
    }

    function ValidatePassword() {
        if (input.inputPassWord.trim() === '') {
            setErrorPassWord("vui long nhap pass")
            return false
        } else if (input.inputPassWord.length < 6) {
            setErrorPassWord("pass phai gom 6 ky tu")
            return false
        } else if (input.inputPassWord !== input.inputRepeatPassWord) {
            setErrorPassWord("pass khong trung nhau")
            return false
        }
        setErrorPassWord("")
        return true
    }

    function ValidateGender() {
        if (input.inputGender === '') {
            setErrorGender("vui long nhap gioi tinh")
            return false
        }
        setErrorGender("")
        return true
    }

    const handleSave = () => {
        const item = JSON.parse(JSON.stringify(items))
        if (ValidateBirthDay() === false || ValidateEmail() === false || ValidateName() === false || ValidatePassword() === false ||  ValidateGender() ===false) {
            ValidateBirthDay();
            ValidateEmail();
            ValidateName();
            ValidatePassword();
            ValidateGender();
        } else {
            if (input.indexID > 0) {
                const index = item.findIndex((item) => item.id === input.indexID)
                item[index].name = input.inputName
                item[index].email = input.inputEmail
                item[index].birthDay = input.inputBirthDay
                item[index].gender = input.inputGender
            } else {
                const schema = {
                    name: input.inputName,
                    email: input.inputEmail,
                    birthDay: input.inputBirthDay,
                    gender: input.inputGender,
                }
                item.push(schema)
            }
            setitems(item)
            setModal(!modal)
        }
    }





    return (
        <>
            <h2 className="header border">Danh sach nhan su</h2>
            <div className="input-group mb-3">
                <button
                    type="button"
                    className="btn btn-primary"
                >Search</button>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="inputSearch"
                    value={input.inputSearch}
                    onChange={onChangeInput}
                />
                <button
                    type="button"
                    className="btn btn-primary width_add"
                    value='0'
                    onClick={(id) => handleStatus(id.target.value)}
                ><i className="fa-solid fa-circle-plus"></i> them nhan vien</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th >STT</th>
                        <th >Name</th>
                        <th >Email</th>
                        <th >Birthday</th>
                        <th >Gender</th>
                        <th >Title</th>
                    </tr>
                </thead>
                <tbody>
                    {items
                        .filter((item) => item.name.includes(input.inputSearch))
                        .map((item, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.birthDay.split("-").reverse().join("/")}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <button type="button" className="btn btn-primary"
                                        onClick={() => handleStatus(item.id)}
                                    >Edit</button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(item.id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {modal && (
                <div className="modal modal11" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{status}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleClose}
                                ></button>
                            </div>
                            <div className="label_title">
                                <label
                                    htmlFor="basic-url"
                                    className="htmlForm-label label_paddingLeft_20px "
                                >Name:</label>
                                <div className="input-group ">
                                    <input
                                        type="text"
                                        className="form-control input_Full"
                                        placeholder="Username" aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        name="inputName"
                                        value={input.inputName}
                                        onChange={onChangeInput}
                                        // required
                                        autoFocus
                                    />
                                </div>
                                <span
                                    style={{ color: 'red', paddingLeft: '20px' }}
                                >{errorName}</span>
                            </div>
                            <div className="label_title">
                                <label
                                    htmlFor="basic-url"
                                    className="htmlForm-label label_paddingLeft_20px"
                                >Email:</label>
                                <div className="input-group ">
                                    <input
                                        type="text"
                                        className="form-control input_Full"
                                        placeholder="Username" aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        name="inputEmail"
                                        value={input.inputEmail}
                                        onChange={onChangeInput}
                                        required
                                    />
                                </div>
                                <span
                                    style={{ color: 'red', paddingLeft: '20px' }}
                                >{errorEamil}</span>
                            </div>
                            <div className="nameModal">
                                <div className="label_title_2">
                                    <label
                                        htmlFor="basic-url"
                                        className="htmlForm-label"
                                    >Birthday:</label>
                                    <div className="input-group  ">
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            name="inputBirthDay"
                                            value={input.inputBirthDay}
                                            onChange={onChangeInput}
                                            required
                                        />
                                    </div>
                                    <span
                                        style={{ color: 'red' }}
                                    >{errorBirthDay}</span>
                                </div>
                                <div className="label_title_2">
                                    <div>
                                        <label
                                            htmlFor="basic-url"
                                            className="htmlForm-label"
                                        >Gender:</label>
                                        <select
                                            className="form-select form-select-sm"
                                            aria-label=".form-select-sm example"
                                            name="inputGender"
                                            value={input.inputGender}
                                            onChange={onChangeInput}
                                        >
                                            <option defaultValue>-Chon gioi tinh-</option>
                                            <option value="nam">Nam</option>
                                            <option value="nu">Nu</option>
                                        </select>
                                    </div>
                                    <span
                                        style={{ color: 'red' }}
                                    >{errorGender}</span>
                                </div>
                            </div>
                            <div className="label_title">
                                <label
                                    htmlFor="basic-url"
                                    className="htmlForm-label label_paddingLeft_20px"
                                >Usename:</label>
                                <div className="input-group  mb-3 ">
                                    <input
                                        type="text"
                                        className="form-control input_Full"
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                            </div>
                            <div className="nameModal">
                                <div className="label_title_2">
                                    <label
                                        htmlFor="basic-url"
                                        className="htmlForm-label"
                                    >Password:</label>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            value={input.inputPassWord}
                                            name='inputPassWord'
                                            onChange={onChangeInput}
                                        />
                                    </div>
                                </div>
                                <div className="label_title_2">
                                    <label
                                        htmlFor="basic-url"
                                        className="htmlForm-label"
                                    >Repeat Password:</label>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            value={input.inputRepeatPassWord}
                                            name='inputRepeatPassWord'
                                            onChange={onChangeInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <span
                                style={{ color: 'red' }}
                            >{errorPassWord}</span>
                            <div className="button_margin_top">
                                <button
                                    type="button"
                                    className="btn btn-primary width_button "
                                    onClick={handleSave}
                                >Save</button>
                                <button
                                    type="button"
                                    className="btn btn-danger width_button"
                                    onClick={handleClose}
                                >Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
export default View;