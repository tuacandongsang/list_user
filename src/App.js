

import React from 'react';
import './App.css';
import View from './view/index'


function App(){

  return (
    <>
    <View />
    </>
  )
}
export default App;








// import { useEffect, useState } from 'react';
// import './App.css';
// import TaskForm from './component/TaskForm';
// import TaskList from './component/TaskList';
// import View from './view/index'
// import { cloneDeep } from 'lodash';

// const initItem = [
//   {
//     id: 1,
//     name: "nguyen tuan",
//     email: "tuancandongsang@gmail.com",
//     birthDay: "1993-01-03",
//     gender: "Nam",
//     userName: "tuancandongsang",
//     passWord: "03011993",
//     repeatPassWord: "03011993"
//   },
//   {
//     id: 2,
//     name: "bui hoa",
//     email: "hoaham@gmail.com",
//     birthDay: "1994-10-05",
//     gender: "Nu",
//     userName: "thanhhoa",
//     passWord: "05101994",
//     repeatPassWord: "03011993"
//   },
//   {
//     id: 3,
//     name: " nguyen nga",
//     email: "ngaden@gmail.com",
//     birthDay: "2001-26-12",
//     gender: "Nu",
//     userName: "phuongnga",
//     passWord: "28122001",
//     repeatPassWord: "03011993"
//   }
// ]

// const generateId = () => {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }
// function App() {

//   const [items, setItems] = useState([]);
//   const [newItems, setNewItems] = useState();
//   const [openForm, setOpenForm] = useState(false);
//   const [editTask, setEditTask] = useState(null);

//   const [load, setLoad] = useState(false);
  
//   useEffect(() => {
//     const dataLocal = JSON.parse(localStorage.getItem('task'));
//     console.log(dataLocal);
//     if (dataLocal) {
//       setItems(dataLocal)
//     }
//   }, [load]);


//   const onToggleForm = () => {
//     setOpenForm(!openForm);
//     setEditTask(null)
//   }

//   const onCloseForm = () => {
//     setOpenForm(false);
//   }

//   const onShowForm = () => {
//     setOpenForm(true);
//   }

//   const onEdit = (id) => {
//     let index = findIndex(id);
//     let editTask = items[index];
//     setEditTask(editTask);
//     onShowForm();
//   }

//   const onAddNewTask = (data) => {
//     if (data.id !== '') {
//       let index = findIndex(data.id);
//       items[index] = data;

//     } else {
//       data.id = generateId();
//       items.push(data);
//     }
//     setItems(items);
//     localStorage.setItem('task', JSON.stringify(items));
//     onCloseForm()
//   }

//   const handleDelete = (id) => {
    
//     let index = findIndex(id);
//     if (index !== -1) {
//       items.splice(index, 1)
//       setItems(items)
//       localStorage.setItem('task', JSON.stringify(items));
//     }
//     setLoad(!load)
//   }

//   const findIndex = (id) => {
//     let result = -1;
//     items.forEach((item, index) => {
//       if (item.id === id) {
//         result = index;
//       }
//     })

//     return result;
//   }

//   const elmTaskForm = openForm ? <TaskForm
//     editTask={editTask}
//     onCloseForm={onCloseForm}
//     onAddNewTask={onAddNewTask}

//   /> : '';

//   return (
//     <div className="App">
//       <h2 className="header border">Danh sach nhan su</h2>
//       <div className="input-group mb-3">
//         <button
//           type="button"
//           className="btn btn-primary"
//         >Search</button>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search for name"
//           aria-label="Recipient's username"
//           aria-describedby="basic-addon2"
//           name="inputSearch"
//         // value={input.inputSearch}
//         // onChange={onChangeInput}
//         />
//         <button
//           type="button"
//           className="btn btn-primary width_add"
//           value='0'
//           onClick={onToggleForm}
//         ><i className="fa-solid fa-circle-plus"></i> them nhan vien</button>
//       </div>
//       {elmTaskForm}
//       <TaskList onDelete={handleDelete} onEdit={onEdit} items={items} />
//     </div>
//   );
// }

// export default App;
