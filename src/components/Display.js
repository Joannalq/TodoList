import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {
  addTodo,
  deleteTodo,
  deleteSelectedItems,
  updateCheckList,
} from "../redux/actions";
import Item from "./Item";

const headCells = [
  {
    id: "description",
    numeric: false,
    disablePadding: true,
    label: "Description",
  },
  { id: "category", numeric: false, disablePadding: false, label: "Category" },
  { id: "operate", numeric: false, disablePadding: false, label: "Operate" },
];

// table title
function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
          >
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    width: "70%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

function Display({ items, checkList, deleteSelectedItems, updateCheckList }) {
  const classes = useStyles();
  console.log(checkList);

  const handleSelectAllClick = (event) => {
    const checked = event.target.checked;
    const newSelecteds = items.map((n) => ({ id: n.id, checked: checked }));

    updateCheckList(newSelecteds);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Button
            onClick={() => deleteSelectedItems(checkList)}
            style={{ background: "#4285f4" }}
          >
            Delete selected
          </Button>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={checkList.filter((item) => item.checked).length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={items.length}
            />
            <TableBody>
              {items.map((item, _) => {
                const target = checkList.find((ele) => ele.id === item.id);
                const isChecked = !!target && target.checked;
                return <Item item={item} key={item.id} isChecked={isChecked} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { items: state.todos.items, checkList: state.todos.checkList };
};

const actions = { addTodo, deleteTodo, deleteSelectedItems, updateCheckList };
export default connect(mapStateToProps, actions)(Display);
