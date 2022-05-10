import { useEffect, useState } from "react";


function TaskForm(props) {

    const {editTask} = props;

    const [inputValue, setInputValue] = useState({
        id: '',
        name: '',
        email: '',
        birthday: '',
        status: false
    })

    useEffect(() => {
        if (editTask) {
            setInputValue({
                id: editTask.id,
                name: editTask.name,
                email: editTask.email,
                birthday: editTask.birthday,
                status: editTask.status,
            })
        } else {
            setInputValue({
                id: '',
                name: '',
                email: '',
                birthday: '',
                status: false
            })
        }
    }, [editTask])

    const onChangeInput = (e) => {
        let { name, value } = e.target;
        if (name === 'status') {
            value = value === 'true' ? true : false;
        }
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const handleSave = (e) => {
        e.preventDefault();
        props.onAddNewTask(inputValue);
    }

    const { onCloseForm } = props;
    return (
        <div className="modal modal11" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{inputValue.id !== '' ? 'Sua cong viec' : 'Them cong viec'} </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onCloseForm}
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
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="name"
                                value={inputValue.name}
                                onChange={onChangeInput}
                                required
                                autoFocus
                            />
                        </div>
                        {/* <span style={{ color: 'red', paddingLeft: '20px' }}>{errorName}</span> */}
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
                                aria-describedby="basic-addon1"
                                name="email"
                                value={inputValue.email}
                                onChange={onChangeInput}
                                required
                            />
                        </div>
                        {/* <span
                            style={{ color: 'red', paddingLeft: '20px' }}
                        >{errorEamil}</span> */}
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
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    name="birthday"
                                    value={inputValue.birthday}
                                    onChange={onChangeInput}
                                    required
                                />
                            </div>
                            {/* <span
                                style={{ color: 'red' }}
                            >{errorBirthDay}</span> */}
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
                                    name="status"
                                    value={inputValue.status}
                                    onChange={onChangeInput}
                                >
                                    <option defaultValue>-Chon gioi tinh-</option>
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nu</option>
                                </select>
                            </div>
                            {/* <span
                                style={{ color: 'red' }}
                            >{errorGender}</span> */}
                        </div>
                    </div>
                    <div className="button_margin_top">
                        <button
                            type="button"
                            className="btn btn-primary width_button "
                            onClick={handleSave}
                        >{inputValue.id !== '' ? 'Save' : 'Add'} 
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger width_button"
                            onClick={onCloseForm}
                        >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskForm;