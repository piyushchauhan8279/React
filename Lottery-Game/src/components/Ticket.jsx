import Ticketnum from "./TicketNum";

export default function Ticket({ ticket }) {
  return (
    <>
      <div>
        {ticket.map((val) => {
          return <Ticketnum num={val.value} id={val.id} key={val.id}></Ticketnum>;
        })}
      </div>
    </>
  );
}
