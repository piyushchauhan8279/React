import './App.css'
function App() {
  // functional component

  return (
    <>
      <center>
        <h2 id="myHeading">ToDo App</h2>
        <div class="container text-center taskRow">
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter your Todo" />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </div>

        <div class="container text-center taskRow">
          <div class="row">
            <div class="col-6">
              Buy Milk
            </div>
            <div class="col-4">
              14/07/2025
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div class="container text-center taskRow">
          <div class="row">
            <div class="col-6">
              Go to College
            </div>
            <div class="col-4">
              14/07/2025
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
