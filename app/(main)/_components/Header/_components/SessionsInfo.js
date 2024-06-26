 
 import { experimentalStyled as styled } from '@mui/material/styles';
 import Paper from '@mui/material/Paper';

 const Item = styled(Paper)(({ theme, height }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: height
  }));
  export default Item;