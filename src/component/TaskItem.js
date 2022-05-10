

function TaskItem(props) {


    const { item, index } = props;

    const onDeleteItem = () => {
        props.onDelete(item.id)

    }

    const onEditItem = () => {
        props.onEdit(item.id)
    }

    return (
        <>
            <tr >
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.birthday}</td>
                <td>{item.status === true ? 'Nam' : 'Nu'}</td>
                <td>
                    <button type="button" className="btn btn-primary"
                        onClick={onEditItem}
                    >Edit</button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onDeleteItem}
                    >Delete</button>
                </td>
            </tr>

        </>

    )
}

export default TaskItem;