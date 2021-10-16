import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import styles from './styles/AddTodo.module.css';

const AddTodo = ({addTodo}) => {

    const [input, setInput] = useState('')

    const handleInputChange = ({target}) => {
        setInput(target.value)
    }

    return(
        <>
            <input 
                type="text" 
                className={styles.input}
                placeholder='TO-DO Name'
                onChange = {handleInputChange}
            />
            <button onClick={()=>addTodo(input)} className={styles.btn}>Add Todo</button>
        </>
    )
}

export default connect(null,{addTodo})(AddTodo)