import React, { useState, useEffect } from "react";

const TravelDestination = () => {
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState("2021-11-22");

  const handleChange = (e) => {
    setDestination(e.target.value);
    console.log(destination);
  }
  const handleClick = () => {
    console.log(destination)
  }

  return (
    <div>
      <h2>Not sure where to go? Check out these popular destinations!</h2>

      <div class="grid-container">
        <div class="grid-item">
          <form action="" method="get" class="form-example">
            <div class="form-example">
              <label for="name">Enter your name: </label>
              <input type="text" name="name" id="name" onChange={handleChange} required></input>
            </div>
          </form>
        </div>
        <div class="grid-item">
          <label for="start">Start date:</label>

          <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
          </input>
        </div>
      </div>
    </div>
  )
}

export default TravelDestination;