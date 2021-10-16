import React from "react";
import {connect} from 'react-redux'
import Add from "./Add";
import styles from './styles/ListAdd.module.css';

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