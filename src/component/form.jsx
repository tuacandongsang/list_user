

import React, { useEffect, useState } from "react";
// import { ValidateGender, ValidatePassword, ValidateBirthDay, ValidateEmail, ValidateName } from './validate'


function Form(props) {
    const {
        modal,
        status,
        errorName,
        errorEamil,
        errorBirthDay,
        errorPassWord,
        errorGender,
        onChangeInput,
        inputName,
        inputEmail,
        inputBirthDay,
        inputGender,
        inputCodeId,
    } = props

    const handleClose = () => {
        props.handleClose()
    }


    const handleSave = () => {
        props.handleSave()
    }

    return (
        <>
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
                                        value={inputName}
                                        // defaultValue={input.name}
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
                                        value={inputEmail}
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
                                            value={inputBirthDay}
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
                                            value={inputGender}
                                            onChange={onChangeInput}
                                        >
                                            <option value='' >-Chon gioi tinh-</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nu">Nu</option>
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
                                >CODE ID NUMBER:</label>
                                <div className="input-group  mb-3 ">
                                    <input
                                        type="number"
                                        className="form-control input_Full"
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        name="inputCodeId"
                                        value={inputCodeId}
                                        onChange={onChangeInput}
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

                                            name='inputRepeatPassWord'
                                            onChange={onChangeInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <span
                                className="errorPassWord_margin"
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
export default Form;

