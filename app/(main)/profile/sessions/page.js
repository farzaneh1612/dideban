"use client";

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, IconButton, Typography, styled } from '@mui/material';
import { Eye, SessionDelete, SessionOngoing, SuccessUsers, Trash } from '@/public/Icon';
import Tablee from "@/components/Tablee";
import WrapperInformation from "@/components/WrapperInformation";
// import TableSession from "./Component/TableSession";
import Image from "next/image";
import Item from '../../_components/Header/_components/SessionsInfo';
import http from "@/config/http";
import useNotify from "@/hooks/useNotify";

import { formatPrice } from "@/utils/helpers/formatPrice";
import { GetSessions, GetSessionsContent, GetSessionsDetails } from "@/app/api/api";
import Modal from '@/components/Modal';

const headCells = [
  {
      id: 'manager',
      position: "right",
      disablePadding: true,
      label: 'مدیر جلسات',
    
    },
{
  id: 'numberOfmember',
  position: "center",
  disablePadding: true,
  label: 'تعداد افراد حاصر در جلسه',
},
{
  id: 'statusSession',
  position: "center",
  disablePadding: false,
  label: 'وضعیت جلسه',
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

const headTitle= 'جلسات'

export default function Sessions() {
  const [userList, setUserList] = useState([{manager:'سعید عزت الهی', numberOfmember:14, status:'موفق', action:true},{manager:'سعید عزت الهی', numberOfmember:14, status:'موفق', action:true},{manager:'سعید عزت الهی', numberOfmember:14, status:'موفق', action:true}]);
  const [roomsInfo, setRoomsInfo] = useState([
    {
        "room_id": "fjo-nixe-nzr",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "سعید ",
            "last_name": "عزت الهی",
            "national_code": "00768567878567",
            "username": ""
        },
        "users_length": 10,
        "closed": true,
        "created_at": 1716468058,
        "scheduled_at": 1716468060
    },
    {
        "room_id": "qww-azse-xpd",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716467546,
        "scheduled_at": 1716467547
    },
    {
        "room_id": "gfx-fhph-dlf",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716467313,
        "scheduled_at": 1716467314
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "eun-cnzq-zha",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716466717,
        "scheduled_at": 1716466719
    },
    {
        "room_id": "dvo-vict-pgz",
        "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
        "creator_info": {
            "id": "",
            "first_name": "",
            "last_name": "",
            "national_code": "",
            "username": ""
        },
        "users_length": 10,
        "closed": false,
        "created_at": 1716465683,
        "scheduled_at": 1716465685
    }
],);
const [sessions, setSessions] = useState([{title:'جلسات موفق', number:1860, icon:<SuccessUsers/>},{title:' جلسات در حال برگزاری', number:1860, icon:<SessionOngoing />},{title:'جلسات لغو شده', number:1860, icon:<SessionDelete/>}])
const [openModalInformation, setOpenModalInformation] = useState(false);
const [lInformationRoom, setlInformationRoom] = useState(
  {
      "room_id": "qww-azse-xpd",
      "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
      "creator_info": {
          "id": "",
          "first_name": "",
          "last_name": "ممدی",
          "national_code": "654261745716245",
          "username": "ممد نام"
      },
      "users_length": 10,
      "closed": false,
      "created_at": 1716467546,
      "scheduled_at": 1716467547}
  
);

  const notify = useNotify();


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
//  const showDetails = async (roomId) =>{
//   try {
//     const { data } = await http.get(GetSessionsDetails(roomId));
//     setlInformationRoom(data?.data);
//     console.log(lInformationRoom);
//   } catch (e) {
//     notify(e?.response?.data?.message, "error");
//   }
//       }
 const rows = roomsInfo?.map((room,index)=>(
  createData( index,
    {image:room?.creator_info?.image?<Image src="image:room?.creator_info?.image" alt="" width={38} height={38} />:<Image src="/image/Avatar.png" alt="" width={38} height={38} />,
     name: `${room?.creator_info?.first_name} ${room?.creator_info?.last_name}`,
    natinalityCode: room?.creator_info?.national_code,}, 
      ` ${room?.users_length} نفر `,
      
        <Box display="flex" justifyContent="center">
          {room?.closed?<Box sx={{background:"#28c76f63", borderRadius:"6px"}} p={0.5} ><Typography variant='subtitle2' fontWeight={400}  color="success.main">موفق</Typography></Box>:
          <Box sx={{background:"#ea54552e", borderRadius:"6px"}} p={0.5} ><Typography variant='subtitle2' fontWeight={400}  color="error.main">لغو شده</Typography></Box>}
        </Box>,
         {trash:<Trash/>,
         view:  <IconButton
         color="text"
         onClick={() => {
          // showDetails(room?.room_id)
           setOpenModalInformation(true);
         }}
       >
         <Eye  />
       </IconButton>} )

        ),
);   
 
  

  // const getAllSessions = async () => {
  //   const body = {
  //     offset: 0,
  //     limit: 5,
  //     get_total: true
  // }
  //   try {
  //     const { data } = await http.post(GetSessions, body);
  //     console.log("aaaaaaaaaaaaa",data);
  //     setRoomsInfo(data?.rooms);
      
     
  //   } catch (e) {
  //     notify(e?.response?.data?.message, "error");
  //   }
  // };

  //  const getCountSessions = async () =>{
  //   try {
  //         const { data } = await http.get(GetSessionsContent);
  //         console.log("aaaaaaaaaaaaa",data);
  //         setSessions();
          
         
  //       } catch (e) {
  //         notify(e?.response?.data?.message, "error");
  //       }
  //  }

  // useEffect(() => {
  //   getAllSessions()
  //   getCountSessions()
  
  // }, [])
  
  return (
    <>
    <Container>
      <Grid container mt={0}>
        <Box sx={{ flexGrow: 1 }}>
        <Typography py={4} variant='h3' color="text.gray" >جلسات</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {sessions.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
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
    </Box>
    <Box sx={{ flexGrow: 1, pt: 12 }}>
    <Tablee rows={rows} headCells={headCells} headTitle={headTitle} addIcon={true} screenIcon={true}/>
{/* <TableSession allReferral={rows} /> */}
    </Box>
    </Grid>
    </Container>

{openModalInformation && (
  <Modal
    maxWidth={"sm"}
    open={openModalInformation}
    onClose={() => setOpenModalInformation(false)}
  >
    <WrapperInformation data={lInformationRoom} />
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