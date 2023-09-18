import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Header from '../components/Header';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import ProgressCircle from '../components/ProgressCircle';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [progress, setProgress] = useState(75);
  const waterType = 'fresh';

  const textColor = waterType === 'fresh' ? colors.grey[100] : colors.green[500];

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title={
            <span
              style={{
                backgroundImage:
                  'linear-gradient(to right, #10B981, #60A5FA)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontFamily: 'sans-serif',
              }}
            >
              AI WELL ADVISOR
            </span>
          }
        />

        <Box>
          <Button
            sx={{
              background: 'linear-gradient(to right, #10B981, #60A5FA)',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }}/>
            Download pdf
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box width={isSmallScreen ? '100%' : '30rem'}>
              <Typography
                variant="h3"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                color={textColor}
                sx={{ fontSize: isSmallScreen ? '2rem' : '3rem' }}
              >
                Water Supply
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: '26px', color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height={isSmallScreen ? 'auto' : '250px'} m={isSmallScreen ? '0' : '-20px 0 0 0'}>
            <LineChart isDashboard={true} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            p={isSmallScreen ? '20px' : '30px'}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
              color={isSmallScreen ? 'white' : undefined}
              sx={{ fontSize: isSmallScreen ? '2rem' : '3rem' }}
            >
              Water Reserve
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
              <ProgressCircle size={isSmallScreen ? '80' : '130'} progress={progress} />
              <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
                {progress}%
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            backgroundColor={colors.primary[400]}
            width={isSmallScreen ? '100%' : '50rem'}
            height={isSmallScreen ? 'auto' : '20rem'}
          >
            <Box height={isSmallScreen ? 'auto' : '20rem'} mt="">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
