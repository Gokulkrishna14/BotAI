import { Box, Stack, Typography } from '@mui/material';
import Logo from "../../assests/BotAILogo.png";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <Box
      height="100vh"
      width="15%"
      backgroundColor="rgba(255, 255, 255, 1)"
    >
      <Stack spacing={2} sx={{ height: '100%' }}>
        <Box
          width="100%"
          height="47px"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          backgroundColor="rgba(215, 199, 244, 1)"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <img src={Logo} alt="Logo" height="40px" width="40px" />
          <Typography variant="h5" component="h5">New Chat</Typography>
          <ModeEditOutlinedIcon height="40px" width="40px" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyItems="center"
          alignItems="center"
          width="100%"
          flexGrow={1}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            width="80%"
            height="40px"
            mt="10px"
            backgroundColor="rgba(215, 199, 244, 1)"
            onClick={() => navigate('/feedback')}
            sx={{ cursor: 'pointer' }}
          >
            <Typography component="h6" variant="h6">Past Conversations</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
