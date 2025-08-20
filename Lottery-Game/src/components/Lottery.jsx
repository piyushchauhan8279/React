import {useState} from "react";
import { getTicket ,sum} from "../helper";
import Ticket from "./Ticket";
import Button from "./Button";
export default function Lottery({n,winCond}){

  
  let [ticket,setTicket]=useState(getTicket(n));
  let handleGenerate=()=>{
    
    setTicket(getTicket(n))
  }
  let isWinner=winCond(ticket);

  return (
    <>
  <Ticket ticket={ticket}/>
  <Button action={handleGenerate}></Button>
  {isWinner  && <p>Congrats !! you are a winner</p>}
    </>

  )
}