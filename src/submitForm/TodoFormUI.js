import React from 'react';

const TodoFormUI = (props) =>{
    return (
        <div>
        <form id='todoForm'>
            <label>
                Description:
                <input type="text" value={props.inputValue} onChange={props.changeInputValue}/>
            </label><br/>
            <label>
                Category
                <select name="category" >
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                </select>
            </label><br/>
            <label>
                Content:
                <textarea value={props.inputValue} onChange={props.changeInputValue}/>
            </label>
        </form>
        <button type="submit" form="todoForm" value="Submit" onClick={props.submitForm}>Submit</button>
        </div>
    )

}

export default TodoFormUI