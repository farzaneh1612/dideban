

"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, IconButton, Typography, styled } from '@mui/material';
import { PlayerIcon, ScrinIcon, SessionOngoing, SuccessUsers } from '@/public/Icon';
import Item from '../../_components/Header/_components/SessionsInfo';
import { formatPrice } from '@/utils/helpers/formatPrice';
import { formatDateJalali } from '@/utils/helpers/formatDateJalali';
import TableVideo from '@/components/TableVideo';
import WrapperInformation from './Component/WrapperInformation';
import Modal from '@/components/Modal';
import ReactPlayer from 'react-player';
import { GetAllVideos, DetailsOfFile, DownloadFile } from "@/app/api/api";


const sessions = [{title:'تعداد کل ویدئوهای جلسات', number:345806, icon:<SuccessUsers/>},{title:'تعداد کل ویدئوهای کاربران', number:1041843, icon:<SessionOngoing/>}]

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

export default function Videoss() {
  const [openModalInformation, setOpenModalInformation] = useState(false);
  const [openModaShowe, setOpenModaShowe] = useState(false);
  const [videosCount, setVideosCount] = useState([{title:'تعداد کل ویدئوهای جلسات', number:345806, icon:<SuccessUsers/>},{title:'تعداد کل ویدئوهای کاربران', number:1041843, icon:<SessionOngoing/>}])
  const [videoList, setVideoList] = useState([
    {
        "user": {
            "id": "",
            "first_name": "سعید ",
            "last_name": "عزت الهی",
            "national_code": "00768567878567",
            "username": ""
        },
        "status": "on_going",
        "first": 1716468058,
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
      "first": 1716468058,
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
    "first": 1716468058,
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
  "first": 1716468058,
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
  "first": 1716468058,
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
  "first": 1716468058,
}, {
  "user": {
      "id": "",
      "first_name": "سعید ",
      "last_name": "عزت الهی",
      "national_code": "00768567878567",
      "username": ""
  },
  "status": "on_going",
  "first": 1716468058,
},
],);
const [lInformationVideo, setlInformationVideo] = useState(
  {
      "room_id": "qww-azse-xpd",
      "creator": "e9340e50-9580-49d8-a049-06a2ac0f192d",
      "creator_info": {
          "id": "",
          "first_name": "ممد",
          "last_name": "ممدی",
          "national_code": "654261745716245",
          "username": "ممد نام"
      },
      "users_length": 10,
      "closed": false,
      "created_at": 1716467546,
      "scheduled_at": 1716467547}
  
);
  const [link, setLink] = useState('')
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
 // const getAllVideos = async () => {
  //   const body = {
  //     offset: 0,
  //     limit: 5,
  //     get_total: true
  // }
  //   try {
  //     const { data } = await http.post(GetAllVideos, body);
  //     console.log("aaaaaaaaaaaaa",data);
  //     setVideoList(data?.videos);
  //     const videoCount = videosCount.map(v => ({...v, number: data?.totall}))
  //     setVideosCount(videoCount)
      
     
  //   } catch (e) {
  //     notify(e?.response?.data?.message, "error");
  //   }
  // };

  //  const showDetails = async (roomId) =>{
    //   try {
    //     const { data } = await http.get(DetailsOfFile(roomId));
    //     setlInformationVideo(data?.data);
    //   } catch (e) {
    //     notify(e?.response?.data?.message, "error");
    //   }
    //       }

  // useEffect(() => {
  //   getAllVideos()
  
  // }, [])

//cons playVideo()  = async (roomId) =>{
    //   try {
    //     const { data } = await http.get(DownloadFile(roomId));
    //     setLink(data?.data);
    //   } catch (e) {
    //     notify(e?.response?.data?.message, "error");
    //   }
    //       }
                                                           
  // videosCount.map(v => ({...v, number: data?.totall}))
const rows = videoList?.map((user,index)=>(
  createData( index,
    {
      name: `${user?.user?.first_name} ${user?.user?.last_name}`,
      natinalityCode: user?.user?.national_code}, 
      formatDateJalali(user?.first),
      
        <Box display="flex" justifyContent="center">
          {user?.status == "on_going"?<Box sx={{background:"#28c76f63", borderRadius:"6px"}} p={0.5} ><Typography variant='subtitle2' fontWeight={400}  color="success.main">موفق</Typography></Box>:
          <Box sx={{background:"#ea54552e", borderRadius:"6px"}} p={0.5} ><Typography variant='subtitle2' fontWeight={400}  color="error.main">لغو شده</Typography></Box>}
        </Box>,
         {
         view:  <IconButton
         color="text"
         onClick={() => {
           setOpenModalInformation(true);
        // showDetails(user?.id)

         }}
       >
         <PlayerIcon  />
       </IconButton>,
       
       ban:
       <IconButton
         color="text"
         onClick={() => {
          setOpenModaShowe(true);
        //  playvideo()
         }}
       >
        <ScrinIcon/>
       </IconButton>,
       
       } )),
       
); 
  return (
    <>
     <Container>
      <Grid container mt={0} spacing={2}>       
      <Typography py={4} variant='h3' color="text.gray" >جلسات</Typography>
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
      <TableVideo rows={rows} headCells={headCells} deleteUser={true} isCheckbox={true}  />

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
        <WrapperInformation data={lInformationVideo} />
      </Modal>
    )}
     {openModaShowe && (
      <Modal
        maxWidth={"md"}
        open={openModaShowe}
        onClose={() => setOpenModaShowe(false)}
      >
        <ReactPlayer url={link} controls={true} width="99%" height="99%" playing={true} />
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