import Counter from "react-number-increment"
import React from 'react';
function Count(){
    return(
        <div className="App">
        <Counter
          start=0 // starting
          end=500 // ends
          speed=1 // 100ms
          decrement // in case if you want to decrement
          style={{ fontSize: "200px", fontWeight: 900 }} // add custom style
          threshold=1 // viewport 1=100%,
          child="+" // add childs ie + , - , *
          offset=5 // increments by 5
          seperate="," // seperates number in comma
         />
      </div>
    )
}