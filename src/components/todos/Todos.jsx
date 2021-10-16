import React, { useState } from "react";
import { connect } from "react-redux";
import { renderModal, search } from "../../actions";
import Todo from "../todo/Todo";
import styles from './styles/Todos.module.css';

const Todos = ({renderModal, todos, search}) => {

    const [render, setRender] = useState({
        actual:'Todos',
        change:'Done',
    });

    const changeClick = () => {
        setRender({
            actual: render.change,
            change: render.actual,
        });
    }

    const handleInputChange = ({target}) => {
        search(target.value)
    }

    return(
        <div className={styles.container}>
            <h1>TODO LIST</h1>

            <div className={styles.buttons}>
                <button onClick={changeClick}>{render.change}</button>
                <input 
                    type="text" 
                    className={styles.inputSearch}
                    placeholder='Search'
                    onChange={handleInputChange}
                />
            </div>


            <div className={styles.todos}>
                <div onClick={()=>renderModal('add')} className={styles.new}>New Todo</div>
                {todos.map((todo,i)=>
                        render.actual === 'Todos' ? 
                        !todo.done && <Todo todo={todo.fact} done={todo.done} key={i}/>:
                        render.actual === 'Done' ? 
                        todo.done && <Todo todo={todo.fact} done={todo.done} key={i}/>:null
                )}
            </div>
            {/* {todos.length > 10 &&
                <div className={styles.contPag}>
                    <button>Anterior</button>
                    <button>Siguiente</button>
                </div>
            } */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos:state.render,
    }
}

export default connect(mapStateToProps,{renderModal, search})(Todos)