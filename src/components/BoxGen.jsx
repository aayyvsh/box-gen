import React, { useState } from "react";

const BoxGen = props => {
    const [ boxes, setBoxes] = useState([])
    const [ formState, setFormState] = useState({
        color: "",
        height: "",
        width: ""
    })
    const onChangeHandler = e => {
        setFormState({
            ...formState, [e.target.name] : e.target.value
        });
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        let color = formState.color;
        let height = formState.height + "px";
        let width = formState.width + "px";
        let newBox = { color, height, width };
        setBoxes([...boxes, newBox]);
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Color: </label>
                <input type="text" name="color" onChange={onChangeHandler}/>
                <br/>
                <label>Height: </label>
                <input type="text" name="height" onChange={onChangeHandler}/>
                <br/>
                <label>Width: </label>
                <input type="text" name="width" onChange={onChangeHandler}/>
                <br/>
                <input type="submit" />
            </form>
            {boxes.map((item,i) =>
                <div key= {i} style={{backgroundColor:item.color, height:item.height, width:item.width, display:"inline-block"}}></div>
            )}
        </div>
    )
}

export default BoxGen;