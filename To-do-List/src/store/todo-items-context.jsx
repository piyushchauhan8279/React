import { createContext } from "react";

export let TodoItemsContext=createContext({taskItem:[],newTaskItem:()=>{} ,onClickBtn:()=>{}});