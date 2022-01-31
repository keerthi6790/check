import React, { useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import axios from "axios";
import DataTableFilter from "./Filter/DataTableFilter";

function createData(
  SourceIP,
  DestinagationIP,
  Sent_Time,
  Received_Time,
  Node_ID,
  Temperature,
  Humidity,
  Light,
  Sound,
  PIR,
  Distance,
  Size,
  Anomaly
) {
  return {
    SourceIP,
    DestinagationIP,
    Sent_Time,
    Received_Time,
    Node_ID,
    Temperature,
    Humidity,
    Light,
    Sound,
    PIR,
    Distance,
    Size,
    Anomaly,
  };
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const headCells = [
  {
    id: "SourceIP",
    numeric: false,
    disablePadding: true,
    label: "SourceIP",
  },
  {
    id: "DestinationIP",
    numeric: false,
    disablePadding: false,
    label: "DestinationIP",
  },
  {
    id: "SentTime",
    numeric: false,
    disablePadding: false,
    label: "SentTime",
  },
  {
    id: "ReceivedTime",
    numeric: false,
    disablePadding: false,
    label: "ReceivedTime",
  },
  {
    id: "NodeID",
    numeric: false,
    disablePadding: false,
    label: "NodeID",
  },
  {
    id: "Temperature",
    numeric: false,
    disablePadding: false,
    label: "Temperature",
  },
  {
    id: "Humidity",
    numeric: false,
    disablePadding: false,
    label: "Humidity",
  },
  {
    id: "Light",
    numeric: false,
    disablePadding: false,
    label: "Light",
  },
  {
    id: "Sound",
    numeric: false,
    disablePadding: false,
    label: "Sound",
  },
  {
    id: "PIR",
    numeric: false,
    disablePadding: false,
    label: "PIR",
  },
  {
    id: "Distance",
    numeric: false,
    disablePadding: false,
    label: "Distance",
  },
  {
    id: "Size",
    numeric: false,
    disablePadding: false,
    label: "Size",
  },
  {
    id: "anomaly",
    numeric: false,
    disablePadding: false,
    label: "anomaly",
  },
];



function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all labels",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const [openFilter,setOpenFilter]=useState(false);
  const handleOpen=()=>{
    setOpenFilter(!openFilter)
    props.changeState(openFilter)
  }
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%", m: 3 }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Table Data
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton onClick={handleOpen}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [finalValue, setFinalValue] = useState([]);
  const [show,setShow]=useState(false)
  React.useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/61e4f57eba87c130e3e98fc7/1") //jsonBin
      .then((d) => {
        setFinalValue(d.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const callback = useCallback((finalValue) => {
    setFinalValue(finalValue);
    console.log(finalValue);
  });
  const stateCallback=useCallback((finalValue)=>{
    console.log(finalValue);
    setShow(finalValue)
  })
  console.log(finalValue);
  const rows = finalValue.map((x) => {
    return createData(
      x.SourceIP,
      x.DestinagationIP,
      x.SentTime,
      x.ReceivedTime,
      x.NodeID,
      x.Temperature,
      x.Humidity,
      x.Light,
      x.Sound,
      x.PIR,
      x.Distance,
      x.Size,
      x.anomaly
    );
  });
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} changeState={stateCallback}/>
        {/* //DataTableFiter */}
        {show?<DataTableFilter data={finalValue} parentCallback={callback}/>: null} 
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.SourceIP);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.SourceIP}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.SourceIP}
                      </TableCell>
                      <TableCell align="right">{row.DestinagationIP}</TableCell>
                      <TableCell align="right">{row.Sent_Time}</TableCell>
                      <TableCell align="right">{row.Received_Time}</TableCell>
                      <TableCell align="right">{row.Node_ID}</TableCell>
                      <TableCell align="right">{row.Temperature}</TableCell>
                      <TableCell align="right">{row.Humidity}</TableCell>
                      <TableCell align="right">{row.Light}</TableCell>
                      <TableCell align="right">{row.Sound}</TableCell>
                      <TableCell align="right">{row.PIR}</TableCell>
                      <TableCell align="right">{row.Distance}</TableCell>
                      <TableCell align="right">{row.Size}</TableCell>
                      <TableCell align="right">{row.Anomaly}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
