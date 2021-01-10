import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { deleteTodo, updateCheckList } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Item({ item, deleteTodo, updateCheckList, isChecked }) {
  // const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    updateCheckList([{ id: item.id, checked: !isChecked }]);
  };

  return (
    <TableRow key={item.id}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </TableCell>

      <TableCell>
        <Link to={`/${item.id}`}>{item.content.description}</Link>
      </TableCell>

      <TableCell>{item.content.category}</TableCell>
      <TableCell>
        <Button onClick={() => deleteTodo(item.id)}>Delete</Button>
      </TableCell>
    </TableRow>
  );
}

const mapStateToProps = (state) => {
  return state.todos;
};

export default connect(mapStateToProps, {
  deleteTodo,
  updateCheckList,
})(Item);
// export default Item
