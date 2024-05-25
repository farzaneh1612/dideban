import {useState} from 'react'
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Plus,ScreenShow,Dropdown } from '@/public/Icon';
import SearchInput from "@/components/SearchInput";
import { Button,Divider,Grid,useTheme } from '@mui/material';
import{ Box,styled} from '@mui/material';
import PropTypes from 'prop-types';
import FileSaver from 'file-saver';


export default function EnhancedTableToolbar(props) {
    const { pageContent, screenIcon, deleteUser,handlePageSizeChange } = props;
    const [search, setSearch] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
  const handleDownload=()=>{
    var blob = new Blob(pageContent, {
      type: "text/plain;charset=utf-8"
    });
    FileSaver.saveAs(blob, "hello world.txt");
  }
    return (
  
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          background:"#fff",
          borderBottom:"1px solid #d5d5d5"
        }}
      > <Grid container rowSpacing={2}>
        <Grid item sm={8} xs={8} direction="row">
          <Box display="flex" alignItems="center" justifyContent="start">
           
          {deleteUser && 
            <Button color="adduser" mr="24px"  >
                <Typography color="common.white" variant="h6" fontWeight={400}>
                غیرفعال سازی کاربر 
               </Typography>
          </Button> 
          }
          <Box  px="20px" sx={{maxWidth: '60%'}}>
          <SearchInput
            setData={setSearch}
            allData={[]}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showIcon={true}
            placeholder={'جستجو بر اساس کد'}
        /> 
          </Box>
          {screenIcon  &&
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button color="screenShow"  pr="24px" onClick={handleDownload}>
              <ScreenShow />
                <Typography color="text.light" variant="h6" fontWeight={400} pr={1}>
                خروجی لیست   
                           
                </Typography>
              <Dropdown/>
            </Button>
          </Box> 
          }
          </Box>
          
        </Grid>
                 {/* {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Nutrition
          </Typography>
        )} */}
      <Grid item sm={4} xs={4}>
        <Box display='flex' justifyContent="end">
        <select name="page-size" id="page-size" onChange={handlePageSizeChange}>
        
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
        </Box>
      
        </Grid>
        </Grid>
      </Toolbar>
    );
  }
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  