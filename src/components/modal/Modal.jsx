import React, { useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import AddRandom from "./AddRandom";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import ListAdd from "./ListAdd";
import { addListTodo, renderModal } from "../../actions";
import styles from './styles/Modal.module.css';

const Modal = ({type,renderModal,addListTodo, edit}) => {

    const [typeAdd, setTypeTodo] = useState ({
        actual:'Add Todo',
        change:'Random',
    });

    const changeType = () => {
        setTypeTodo({
            actual:typeAdd.change,
            change:typeAdd.actual,
        })
    }

    return ReactDOM.createPortal(
        <div className={styles.container}>

            {type==='edit' &&
                <div className={styles.modalContEdit}>
                    <div className={styles.contBtn}>
                        <button className={styles.x} onClick={()=>renderModal('')}></button>
                    </div>
                    <div className={styles.formEdit}>
                        <h1>Edit TO-DO</h1>
                        <div className={styles.containerEdit}>
                            <EditTodo name={edit}/>
                        </div>
                    </div>
                    
                </div>
            }
    
            {type==='add' &&
                <div className={styles.modalCont}>
                    <div className={styles.contBtn}>
                        <button className={styles.x} onClick={()=>renderModal('')}></button>
                    </div>
                        <div className={styles.form}>
                            <h1>Add TO-DO</h1>
                            <div>
                                <button className={styles.change}onClick={changeType}>{typeAdd.change}</button>                           
                            </div>
                            <div className={styles.containerAdd}>
                                {typeAdd.actual==='Random' &&      
                                    <AddRandom />
                                }

                                {typeAdd.actual==='Add Todo' &&
                                    <AddTodo />
                                }
                            </div>
                        </div>
                    <ListAdd />
                    <button onClick={addListTodo}className={styles.changeAdd}>ADD TODOS</button>
                </div>            
            }
        </div>,
        document.getElementById("modal")
    )
}

const mapStateToProps = (state) => {
    return {
        edit:state.edit
    }
}

export default connect(mapStateToProps,{renderModal,addListTodo})(Modal)