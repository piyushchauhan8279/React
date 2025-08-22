import { useState } from "react";
export default function CommentForm() {
  let [formData, setformData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let [allComments, setAllComments] = useState([]);

  let handleInput = (event) => {
    let fieldName = event.target.name;
    let newVal = event.target.value;

    setformData((currData) => {
      return { ...currData, [fieldName]: newVal };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();

    setAllComments((prevComment) => {
      return [...prevComment, formData];
    });
    setformData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <>
      <div>
        <h2>Comment form</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="username">User Name</label>
          <input
            onChange={handleInput}
            type="text"
            id="username"
            placeholder="enter your username"
            name="username"
            value={formData.username}
          />

          <label htmlFor="remarks">Remarks</label>
          <textarea
            name="remarks"
            type="text"
            id="remarks"
            placeholder="write some remarks"
            value={formData.remarks}
            onChange={handleInput}
          ></textarea>

          <label htmlFor="rating">rating</label>
          <input
            onChange={handleInput}
            type="number"
            id="rating"
            min={1}
            max={5}
            name="rating"
            value={formData.rating}
          />

          <button type="submit">Submit</button>
        </form>

        <div style={{ marginTop: "40px" }}>
          <h2>All Comments</h2>
          {allComments.length === 0 ? (
            <p>No Comments yet</p>
          ) : (
            allComments.map((c, idx) => {
              return (
                <div key={idx}>
                  <p>Username: {c.username}</p>
                  <p>Remarks: {c.remarks}</p>
                  <p>Rating: {c.rating}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
