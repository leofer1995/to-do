import React, { useState } from "react";
import { addRandom } from "../../actions/index";
import styles from './styles/AddRandom.module.css';
import {connect} from 'react-redux';
const AddRandom = ({addRandom}) => {

    const [input, setInput] = useState();

    const handleInputChange = ({target}) => {
        setInput(target.value)
    }

    return(
        <>
            <input 
                type="number" 
                className={styles.input}
                placeholder='Number TO-DO Random'
                onChange = {handleInputChange}
            />
            <button className={styles.btn} onClick={()=>{addRandom(input)}}>Add Todos</button>
        </>
    )
}

export default connect(null,{addRandom})(AddRandom)