import React from "react";
import Todos from "./components/todos/Todos";
import './App.css';
import {connect} from 'react-redux'
import Modal from "./components/modal/Modal";

function App({modal}) {

  console.log(modal)
  return (
    <>
      <Todos />
      {
        modal.render && 
        <Modal type={modal.type}/>
      }
    </>

  );
}

const mapStateToProps = (state) => {
  return {
    modal:state.modal
  }
}

export default connect(mapStateToProps,null)(App);
