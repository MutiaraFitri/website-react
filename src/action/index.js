import { todosRef } from "../config/firebase";
import { jumlah } from "../config/firebase";
import { FETCH_TODOS } from "./types";
var temanku = "";
export const addToDo = newToDo => async dispatch => {
  // var dataJumlahku = todosRefJumlah.once('value').then(function(snapshot){
    //   var dataJumlah = snapshot.val().jumlah;
    // })
    jumlah.once('value', snapshot => {
      temanku = snapshot.val().jumlah;
      console.log(temanku);
      var jumlahku= {};
      jumlahku['jumlah']= parseInt(temanku)+1;
      jumlah.update(jumlahku);
    });
    todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const fetchToDoJumlah = () => async dispatch => {
  jumlah.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};