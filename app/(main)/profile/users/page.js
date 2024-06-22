
"use client";

import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, IconButton, Typography, styled } from '@mui/material';
import { BanIcon, Eye, SessionOngoing, SuccessUsers } from '@/public/Icon';
import Item from '../../_components/Header/_components/SessionsInfo';
import TableUsers from '@/components/TableUsers';
import { formatPrice } from '@/utils/helpers/formatPrice';
import { formatDateJalali } from '@/utils/helpers/formatDateJalali';
import WrapperInformation from './Component/WrapperInformation';
import Modal from '@/components/Modal';
import { GetUserList, UserCount, GetSessionsDetails,RemoveBanUser,AddBanUser } from "@/app/api/api";
import useNotify from "@/hooks/useNotify";
import http from "@/config/http";





const sessions = [{title:' تعداد کل کاربران ', number:345806, icon:<SuccessUsers/>},{title:' تعداد کاربران آنلاین  ', number:1041843, icon:<SessionOngoing/>}]

const headCells = [
  {
      id: 'manager',
      position: "right",
      disablePadding: true,
      label: 'کد(شماره ملی)ومشخصات کاربر',
    },
{
  id: 'numberOfmember',
  position: "center",
  disablePadding: true,
  label: 'تاذریخ و زمان ثبت نام',
},
{
  id: 'statusSession',
  position: "center",
  disablePadding: false,
  label: 'وضعیت کاربر',
},
{
  id: 'actions',
  position: "center",
  disablePadding: false,
  label: 'عملیات',
},
// {
//   id: 'carbs',
//   numeric: true,
//   disablePadding: false,
//   label: 'Carbs (g)',
// },
// {
//   id: 'protein',
//   numeric: true,
//   disablePadding: false,
//   label: 'Protein (g)',
// },
];

export default function Users() {

  const [userList, setUserList] = useState([{manager:'سعید عزت الهی', numberOfmember:14, status:'موفق', action:true},{manager:'سعید عزت الهی', numberOfmember:14, status:'موفق', action:true},{manager:'سعید عزت الهی', numberOfmember:14, status:'موفق', action:true}]);
  const [users, setUsers] = useState([   
    {
    "user": {
        "id": "",
        "first_name": "سعید ",
        "last_name": "عزت الهی",
        "national_code": "00768567878567",
        "username": ""
    },
    "status": "on_going",
    "first_occurrence": 1717406330,
},
{
  "user": {
      "id": "",
      "first_name": "سعید ",
      "last_name": "عزت الهی",
      "national_code": "00768567878567",
      "username": ""
  },
  "status": "on_going",
  "first_occurrence": 1716468058,
}, 
{
"user": {
    "id": "",
    "first_name": "سعید ",
    "last_name": "عزت الهی",
    "national_code": "00768567878567",
    "username": ""
},
"status": "on_going",
"first_occurrence": 1716468058,
}, 
{
"user": {
  "id": "",
  "first_name": "سعید ",
  "last_name": "عزت الهی",
  "national_code": "00768567878567",
  "username": ""
},
"status": "on_going",
"first_occurrence": 1716468058,
}, 
{
"user": {
  "id": "",
  "first_name": "سعید ",
  "last_name": "عزت الهی",
  "national_code": "00768567878567",
  "username": ""
},
"status": "on_going",
"first_occurrence": 1716468058,
}, 
{
"user": {
  "id": "",
  "first_name": "سعید ",
  "last_name": "عزت الهی",
  "national_code": "00768567878567",
  "username": ""
},
"status": "on_going ",
"first_occurrence": 1716468058,
}, {
"user": {
  "id": "",
  "first_name": "سعید ",
  "last_name": "عزت الهی",
  "national_code": "00768567878567",
  "username": ""
},
"status": "on_going",
"first_occurrence": 1716468058,
},],);
const [openModalInformation, setOpenModalInformation] = useState(false);
const [banRows, setBanRows] = useState(new Set());

const [InformationUser, setInformationUser] = useState();

const notify = useNotify();
const getAllUsers = async () => {
  const body = {
    offset: 0,
    limit: 14,
    get_total: true
}
  try {
    const { data } = await http.post(GetUserList, body);
    console.log({data});
    setUsers(data?.data?.users);
    
   
  } catch (e) {
    notify(e?.response?.data?.message, "error");
  }
};

 const getCountUser = async () =>{
  try {
        const { data } = await http.get(UserCount);
        console.log("useeeeer",data);
        
       
      } catch (e) {
        notify(e?.response?.data?.message, "error");
      }
 }


useEffect(() => {
  getAllUsers()
  getCountUser()

}, [])


function createData(id,manager, numberOfmember, statusSession, actions,)
  {
  return {
    id,
    manager ,
    numberOfmember,
    statusSession,
    actions,
  };
}


  const banUser = async (userId) =>{
    const body = {
      user_id:userId
      }
    try { 
      const { data } = await http.post(AddBanUser, body );
      console.log({data});
      setBanRows((prev) => new Set(prev).add(userId));
      notify(data.message, "success");
      getAllUsers()
           } catch (e) {
          notify(e?.response?.data?.message, "error");
        }
   }

  const removeBanUser = async (userId) =>{
    const body = {
      user_id:userId
      }
    try { 
      const { data } = await http.delete(RemoveBanUser, body );
    getAllUsers()
      notify(data.message, "success");
           } catch (e) {
          notify(e?.response?.data?.message, "error");
        }
   }

const rows = users?.map((user,index)=>(
  createData( index,
    {
      name: `${user?.user?.first_name} ${user?.user?.last_name}`,
      natinalityCode: user?.user?.national_code,}, 
      formatDateJalali(user?.first_occurrence),
      
        <Box display="flex" justifyContent="center">
          {user?.status == "on_going"?<Box sx={{background:"#7367f024", borderRadius:"6px"}} p={0.5} ><Typography variant='subtitle2' fontWeight={400}  color="button.secondary">فعال</Typography></Box>:
          <Box sx={{background:"#ea54552e", borderRadius:"6px"}} p={0.5} ><Typography variant='subtitle2' fontWeight={400}  color="error.main">غیرفعال </Typography></Box>}
        </Box>,
         {
         view:  <IconButton
         color="text"
         onClick={() => {
           setOpenModalInformation(true);
         //call function getvroom info by roomid
         setInformationUser(user)
         }}
       >
         <Eye  />
       </IconButton>,
       
       ban:
       user?.status == "on_going" ?
       (<IconButton
      //  disabled={banRow}
         color="text"
         onClick={() => {
          //  setOpenModalInformation(true);
         banUser(user?.user?.id)
         }}
       >
        <BanIcon/>
       </IconButton>)
       :(<IconButton
         onClick={() => {
          //  setOpenModalInformation(true);
         removeBanUser(user?.user?.id)
         }}
       >
        <SuccessUsers/>
       </IconButton>)
       
       } )),
       
);   

  return (
    <>
       <Container>
      <Grid container mt={0} spacing={2}>       
      
        <Typography py={4} variant='h3' color="text.gray" >کاربران</Typography>
        <Grid item xs={12}>
        <Grid container spacing={{ xs: 2, md: 3 }} >
        {sessions.map((item, index) => (
             <Grid item xs={12} sm={6} md={6} key={index}>
             <Item height={'104px'}>
                 <BoxCard>
                     <Box item xs={6}>
                         <Typography variant='h4' fontWeight={400} pb={2}  color="text.secondary">
                             {item.title}
                         </Typography>
                         <Typography variant='h4' fontWeight={500} textAlign="right"  color="text.secondary">
                         {formatPrice(item.number)}
                         </Typography>
                     </Box>
 
                     <Box item xs={6}>
                         {item.icon}
 
                     </Box>
                     </BoxCard>
             </Item>
           </Grid>
        ))}
        </Grid>
        </Grid>
    <Grid item xs={12}>
    <Box pt={2}>
      <TableUsers banRows={banRows} rows={rows} headCells={headCells} deleteUser={true} isCheckbox={true} />

    </Box>
    </Grid>
    
    </Grid>
    </Container>
    {openModalInformation && (
      <Modal
        maxWidth={"sm"}
        open={openModalInformation}
        onClose={() => setOpenModalInformation(false)}
      >
        <WrapperInformation data={InformationUser} />
      </Modal>
        
    
    )}
    </>
 
  );
}


const BoxCard = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));