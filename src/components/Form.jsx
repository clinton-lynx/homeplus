import React, {useState} from 'react'
import  './form.css';


function Form() {
        let property = "";
    // implementin search feature
    const [input, setInput] = useState("");
    const handleSearch = () =>{
        setInput(input.value)
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        property = input;
        console.log(property);
    }
    return (
     
          <form action="" className="form">
            <input
              type="text"
              placeholder="Address, City, Neighborhood, Zip code ...."
              value={input}
              onChange={handleSearch}
              className="input-el"
            />
            <button onClick={handlesubmit} className="btn">
              Search
            </button>
          </form>
     
    );
}

export default Form
