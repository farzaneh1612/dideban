import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import EnhancedTableToolbar from '@/components/table/EnhancedTableToolbar'
import { visuallyHidden } from '@mui/utils';
import { Divider,Typography,styled,useTheme } from '@mui/material';
import Pagination from "@/components/Pagination";


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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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



function EnhancedTableHead(props) {
  const {isCheckbox=false, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort,headCells } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead >
      <TableRow>
        {isCheckbox && <TableCell padding="checkbox">
          <Checkbox
            color="adduser"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        
        </TableCell>}
        
        {headCells?.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.position }
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
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
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function EnhancedTable({rows,banRows, headCells, headTitle, addIcon=false, screenIcon=false, deleteUser=false,isCheckbox=false}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  // const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [pageSize, setPageSize] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };





  const handlePage = (page) => {setPage(page)};

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
   
  };

  const totalPages = Math.ceil(rows.length / pageSize);

  const pageContent = rows.slice((page - 1) * pageSize, page * pageSize);


  const isSelected = (id) => selected.indexOf(id) !== -1;




const theme = useTheme()
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', mb: 2 }}>
        
        <EnhancedTableToolbar handlePageSizeChange={handlePageSizeChange} numSelected={selected.length}  theme ={theme} addIcon={addIcon} screenIcon={screenIcon} deleteUser={false}/>
        <TableContainer sx={{ backgroundColor: '#fff'}} pt={2}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
              headTitle={headTitle}
              isCheckbox={true}

            />
            <TableBody>
              {pageContent.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                const isBanned = banRows.has(row.id);
                return (
                  <TableRow
                    hover
                    style={{ backgroundColor: isBanned ? 'red' : 'inherit' }}
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                   
                  >
                    {isCheckbox &&<TableCell padding="checkbox">
                      <Checkbox
                        color="adduser"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        onClick={(event) => handleClick(event, row.id)}

                      />
                    </TableCell>}
                    
                    <TableCell align="right" >
                      <Box display="flex">
                   
                      <Box display="flex" pr={1} alignItems="center">
                        <Typography variant='subtitle2' color="button.secondary" fontWeight={400} pl={2}>
                          {row.manager.natinalityCode}
                        </Typography>

                        <Typography variant='h6'>
                      {row.manager.name}

                        </Typography>
                        
                    
                      
                      </Box>
                      </Box>
                   
                    
                    </TableCell>
                   
                    <TableCell align="center">{row.numberOfmember}</TableCell>
                    <TableCell align="center">{row.statusSession}</TableCell>
                    <TableCell align="center"><Box display="flex" alignItems="center" justifyContent="center">
                    {row.actions.ban}  {row.actions.view} 
                      </Box></TableCell>
                 
                  </TableRow>
                );
              })}
             
            </TableBody>
          </Table>
        </TableContainer>
        
 
        <Pagination
              totalPages={totalPages}
              handlePageSizeChange={handlePageSizeChange}
              handlePage={handlePage}
              page={page}
            />
      </Box>
      
    </Box>
  );
}


const MuiPaginationStyle = styled(TablePagination)(({ theme }) => ({
  direction: "ltr",
  ".MuiPagination-ul": {
    justifyContent: "center",

    ".MuiButtonBase-root": {
      background: theme.palette.text.border,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      lineHeight: "0",
      color: theme.palette.text.secondary,
      borderRadius: "4px",

      "&.Mui-selected": {
        background: theme.palette.adduser.main,
        color: theme.palette.common.white,
      },
  
    },
  },
}));