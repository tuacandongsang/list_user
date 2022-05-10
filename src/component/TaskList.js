import TaskItem from "./TaskItem";


function TaskList(props) {

    const {items, onDelete, onEdit} = props;

    const emlTask = items.map((item, index) => <TaskItem 
                                                    onDelete={onDelete} 
                                                    onEdit={onEdit} 
                                                    key={index}  
                                                    item={item} index={index} />)
    return (
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
            {emlTask}
            </tbody>
        </table>
    )
}

export default TaskList;