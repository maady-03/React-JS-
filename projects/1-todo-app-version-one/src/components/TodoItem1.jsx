function TodoItem1() {

  let item='Buy Milk';
  let date='4/10/2023';
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-4">
            {item}
          </div>
          <div class="col-4">
            {date}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

    </>

  )
}

export default TodoItem1;