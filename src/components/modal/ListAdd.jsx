import React from "react";
import Add from "./Add";
import styles from './styles/ListAdd.module.css';
import {connect} from 'react-redux'
const ListAdd = ({todoAdd}) => {

    return(
        <div className={styles.container}>
            {todoAdd.map((todo,i)=> 
                <Add todo={todo.fact} key={i}/>
            )}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todoAdd:state.todoAdd
    }
}
export default connect(mapStateToProps,null)(ListAdd)