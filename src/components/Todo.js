
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function Todo (props){
    return(
        <div>
            {props.form.description}
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return state.todos
}

export default connect(
    mapStateToProps,
    {addTodo}
)(Todo);