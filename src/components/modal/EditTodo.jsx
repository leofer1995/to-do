import React, { useState } from "react";
import { connect } from "react-redux";
import { editTodo } from "../../actions";
import styles from './styles/EditTodo.module.css';

const EditTodo = ({name, editTodo}) => {

    const [input, setInput] = useState('')

    const handleInputChange = ({target}) => {
        setInput(target.value)
    }

    return(
    <div className={styles.container}>
        <div className={styles.todo}>
            <p>{name}</p>
        </div>
        <div className={styles.contForm}>
            <input 
                type="text"
                className={styles.editTodo}
                placeholder='New description todo'
                onChange = {handleInputChange}
            />
            <button onClick={()=>editTodo(input)} className={styles.changeEdit}>EDIT TODO</button>
        </div>
        
    </div>
    )
}

export default connect(null,{editTodo})(EditTodo)