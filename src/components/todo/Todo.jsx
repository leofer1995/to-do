import React from "react";
import styles from './styles/Todo.module.css';
import {connect} from 'react-redux'
import { deleteTodo, renderModalEdit, todoComplete } from "../../actions";

const Todo = ({todo, done, todoComplete, deleteTodo, renderModalEdit}) => {
    return(
        <div className={styles.todo}>
            <button onClick={()=>todoComplete(todo)} className={done ? styles.btnCheckDone:styles.btnCheck}></button>
            <span className={styles.description}>{todo.length > 50 ? todo.substr(0,50)+'...': todo}</span>
            <div className={styles.contConfig}>
                <button onClick={()=>{renderModalEdit('edit', todo)}} className={styles.btnEdit}></button>
                <button onClick={()=>{deleteTodo(todo)}} className={styles.btnDelete}></button>
            </div>
        </div>
    )
}

export default connect(null,{todoComplete, deleteTodo, renderModalEdit})(Todo)