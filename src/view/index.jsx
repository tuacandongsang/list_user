
import React, { useState, useEffect } from "react";
import "./style.css"
import Form from '../component/form'
import Api from '../api/axios'

const initItem = [
    {
        id: 1,
        name: "nguyen tuan",
        email: "tuancandongsang@gmail.com",
        birthDay: "1993-01-03",
        gender: "Nam",
        code: '1',
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
        code: '2',
        userName: "thanhhoa",
        passWord: "05101994",
        repeatPassWord: "03011993"
    },
    {
        id: 321,
        name: " nguyen nga",
        email: "ngaden@gmail.com",
        birthDay: "2001-12-26",
        gender: "Nu",
        code: '3',
        userName: "phuongnga",
        passWord: "28122001",
        repeatPassWord: "03011993"
    }
]

function View() {

    useEffect(() => {
        Api
            .getAll()
            .then((res) => setitems(res.data))
    }, [initItem])

    const [items, setitems] = useState(initItem)

    const [modal, setModal] = useState(false)

    const [status, setStatus] = useState('')

    const [errorName, setErrorName] = useState("")

    const [errorEamil, setErrorEamil] = useState('')

    const [errorBirthDay, setErrorBirthDay] = useState('')

    const [errorPassWord, setErrorPassWord] = useState('')

    const [errorGender, setErrorGender] = useState('')

    const [input, setInput] = useState({
        inputSearch: "",
        inputName: '',
        inputEmail: '',
        inputBirthDay: '',
        inputGender: '',
        inputCodeId: '',
        inputPassWord: '',
        inputRepeatPassWord: '',
        selecGender: '',
        ID: '',
    })

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleDelete = async (id) => {
        await Api
            .delete(id)
        await Api
            .getAll()
            .then(res => setitems(res.data))
    }

    const handleClose = () => {
        setModal(!modal)
    }

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
        } else
            setErrorBirthDay('nam sinh phai lon hon 2019')
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

    const handleAddEdit = async (id) => {

        setErrorBirthDay('')
        setErrorEamil('')
        setErrorName('')
        setErrorGender("")
        setErrorPassWord("")

        setModal(!modal)
        if (id > 0) {
            setStatus('Edit')
            await Api
                .get(id)
                .then((res) => {
                    setInput({
                        ...input,
                        inputName: res.data.name,
                        inputBirthDay: res.data.birthDay,
                        inputEmail: res.data.email,
                        inputGender: res.data.gender,
                        inputCodeId: res.data.code,
                        ID: res.data.id,
                    })
                })
        } else {
            setStatus('Add')
            input.inputName = ''
            input.inputEmail = ''
            input.inputBirthDay = ''
            input.inputGender = ''
            input.inputCodeId = ""
            input.inputUserName = ''
            input.inputPassWord = ''
            input.inputRepeatPassWord = ''
            input.ID = 0
        }
    }

    const handleSave = async () => {
        if (ValidateBirthDay() === false || ValidateEmail() === false || ValidateName() === false || ValidatePassword() === false || ValidateGender() === false) {
            ValidateBirthDay();
            ValidateEmail();
            ValidateName();
            ValidateGender();
            ValidatePassword();
        } else {
            if (input.ID > 0) {
                await Api
                    .patch(input.ID, {
                        name: input.inputName,
                        email: input.inputEmail,
                        birthDay: input.inputBirthDay,
                        gender: input.inputGender,
                        code: input.inputCodeId,
                    })
                await Api
                    .getAll()
                    .then(res => setitems(res.data))
            } else {
                const schema = {
                    name: input.inputName,
                    email: input.inputEmail,
                    birthDay: input.inputBirthDay,
                    gender: input.inputGender,
                    code: input.inputCodeId,
                    id: Math.random(60000)
                }
                await Api
                    .post(schema)
                await Api
                    .getAll()
                    .then(res => setitems(res.data))
            }
            handleClose()
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
                    onClick={(id) => handleAddEdit(id.target.value)}
                ><i className="fa-solid fa-circle-plus"></i> them nhan vien</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th >CODE</th>
                        <th >Name</th>
                        <th >Email</th>
                        <th >Birthday</th>
                        <th >
                            <div className="gender__block">
                                Gender
                                <div className="select_gender__block">
                                    <select
                                        className="form-select select_gender"
                                        aria-label="Default select example"
                                        name="selecGender"
                                        onChange={onChangeInput}
                                        value={input.selecGender}
                                    >
                                        <option value=''>All</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nu">Nu</option>
                                    </select>
                                </div>
                            </div>
                        </th>
                        <th >Title</th>
                    </tr>
                </thead>
                <tbody>
                    {items
                        .filter((item) => item.name.toLowerCase().includes(input.inputSearch))
                        .filter((item) => item.gender.includes(input.selecGender))
                        .map((item, index) => (
                            <tr key={index}>
                                <th>{item.code}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.birthDay.split("-").reverse().join("/")}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <button type="button" className="btn btn-primary"
                                        onClick={() => handleAddEdit(item.id)}
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

            <Form
                modal={modal}
                status={status}
                errorName={errorName}
                errorEamil={errorEamil}
                errorBirthDay={errorBirthDay}
                errorPassWord={errorPassWord}
                errorGender={errorGender}
                handleClose={handleClose}
                handleSave={handleSave}
                onChangeInput={onChangeInput}
                inputName={input.inputName}
                inputEmail={input.inputEmail}
                inputBirthDay={input.inputBirthDay}
                inputGender={input.inputGender}
                inputCodeId={input.inputCodeId}

            />


        </>
    )
}
export default View;