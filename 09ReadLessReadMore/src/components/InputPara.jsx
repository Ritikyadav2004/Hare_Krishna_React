import React from 'react'

const InputPara = ({ para, updatePara }) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Data Saved" + JSON.stringify(para))
    }

    const handleChange = (e) => {
        const  value  = e.target.value;
        updatePara(value)
    }

    return (
        <div>
            <h1>Enter Your Text</h1>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="input" id="input" placeholder='Enter text' value={para || ""} onChange={handleChange} /> */}
              
        

                 <textarea onChange={handleChange} onSubmit={handleSubmit}  placeholder="Enter Your Paragraph" name="input" id="input">
               
            </textarea>
             <button type='submit'> Submit</button>
            </form>


           
        </div>
    )
}

export default InputPara