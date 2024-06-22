

"use client";

import { useState, useEffect } from 'react';
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
import { GetAllVideos, DetailsOfFile, DownloadFile, StreamFile} from "@/app/api/api";
import useNotify from "@/hooks/useNotify";
import http from "@/config/http";



const sessions = [{title:'تعداد کل ویدئوهای جلسات', number:345806, icon:<SuccessUsers/>},{title:'تعداد کل ویدئوهای کاربران', number:1041843, icon:<SessionOngoing/>}]

const headCells = [
  {
      id: 'manager',
      position: "right",
      disablePadding: true,
      label: 'کدویدیو جلسات/ادمین جلسه',
    },
{
  id: 'numberOfmember',
  position: "center",
  disablePadding: true,
  label: 'تاریخ و زمان ضبط ویدیو',
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
  label: 'ویدیو جلسات',
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

export default function Videos() {
  const [openModalInformation, setOpenModalInformation] = useState(false);
  const [openModaShowe, setOpenModaShowe] = useState(false);
  const [videosCount, setVideosCount] = useState([{title:'تعداد کل ویدئوهای جلسات', number:345806, icon:<SuccessUsers/>},{title:'تعداد کل ویدئوهای کاربران', number:1041843, icon:<SessionOngoing/>}])
  const [videoList, setVideoList] = useState([],);
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRows, setShowRows] = useState(new Set());

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
const notify = useNotify();

  const getAllVideos = async () => {
    const body = {
      offset: 0,
      limit: 10,
      get_total: false
  }
    try {
      const { data } = await http.post(GetAllVideos, body);
      // console.log(videoList);
      setVideoList(data?.data?.files);

      // const videoCount = videosCount.map(v => ({...v, number: data?.totall}))
      // setVideosCount(videoCount)
      
     
    } catch (e) {
      notify(e?.response?.data?.message, "error");
    }
  };
  const openModal = async (fileId,event) => {
    try {

      const { data } = await http.get(StreamFile(fileId));
      console.log(data);

      setShowRows((prev) => new Set(prev).add(fileId));
      // Explicitly set the content type as 'video/mp4'
      const blob = new Blob([data], { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      // Set the modalContent URL and open the modal
      setModalContent(url);
      setIsModalOpen(true);
      console.log(isModalOpen);
      if (videoRef.current) {
        videoRef.current.load(); // Load the video when modal opens
        videoRef.current.play(); // Play the video when modal opens
      }
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

//  const playVideo  = async (fileId) =>{
//       try {
//         const { data } = await http.get(StreamFile('2sl4k6buasdl28unrt9b3y8fpa51hh'));
//     // داده‌های باینری خود را اینجا قرار دهید
//     const binaryData = new Uint8Array([data]);
//     console.log(binaryData);

//     // تبدیل داده‌های باینری به Blob
//     const blob = new Blob([binaryData], { type: 'video/x-matroska' });
// console.log(blob);   
//  // ایجاد URL قابل استفاده
//     const videoUrl = URL.createObjectURL(blob);
//     console.log(videoUrl);   

//     // تنظیم URL در تگ ویدئو
//     const videoPlayer = document.getElementById('videoPlayer');
//     videoPlayer.src = videoUrl;
//     console.log(videoUrl);
//       } catch (e) {
//         notify(e?.response?.data?.message, "error");
//       }
//           }

  useEffect(() => {
    getAllVideos()
    openModal();
  
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


   const showDetails = async (roomId) =>{
      try {
        const { data } = await http.get(DetailsOfFile(roomId));
        setlInformationVideo(data?.data);
      } catch (e) {
        notify(e?.response?.data?.message, "error");
      }
          }



                                                           
  // videosCount.map(v => ({...v, number: data?.totall}))
const rows = videoList?.map((video,index)=>(
  createData( index,
    {
      name: `${video?.user?.first_name} ${video?.user?.last_name}`,
      natinalityCode: video?.user?.national_code}, 
      formatDateJalali(video?.created_at),
      
        <Box display="flex" justifyContent="center">
          {video?.user?.status == "on_going"?<Box sx={{background:"#28c76f63", borderRadius:"6px"}} p={0.5} ><Typography variant='subtitle2' fontWeight={400}  color="success.main">موفق</Typography></Box>:
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
          openModal(video?.file_id)  
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
      <TableVideo banRows={showRows} rows={rows} headCells={headCells} deleteUser={true} isCheckbox={true}  />

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
     {isModalOpen && (
      <Modal
        maxWidth={"md"}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
            {modalContent && (
              <video controls style={{ maxWidth: "500px" }}>
                <source src={modalContent} type="video/mp4" />
                مرورگر شما ویدیو را ساپورت نمی کند
              </video>
            )}      
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