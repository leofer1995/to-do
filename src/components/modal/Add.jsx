import React from "react";
import { connect } from "react-redux";
import { onDelete } from "../../actions";
import styles from './styles/Add.module.css'

const Add = ({todo, onDelete}) => {
    return(
        <div className={styles.container}>
            <button className={styles.x} onClick={()=>onDelete(todo)}></button>
            <span>{todo.length > 50 ? todo.substr(0,50)+'...': todo}</span>
        </div>
    )

}

export default connect(null, {onDelete}) (Add)