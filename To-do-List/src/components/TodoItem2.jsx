function TodoItem2(){
  let taskName='Go to College';
  let taskDate='14/07/2025';
  return <div class="container taskRow">
          <div class="row myrow">
            <div class="col-6">
              {taskName}
            </div>
            <div class="col-4">
              {taskDate}
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger mybtn">
                Delete
              </button>
            </div>
          </div>
        </div>
}

export default TodoItem2;