import React from 'react'
import { useTheme, Box, Typography } from '@mui/material'
import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 30px" >
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" m="5px 0px" sx={{ color: colors.grey[900] }}>{title}</Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" sx={{ color: colors.redAccent[500] }}>{subtitle}</Typography>
                <Typography variant="h5" fontStyle="italic" fontWeight="bold" sx={{ color: colors.redAccent[500] }}>{increase}</Typography>
            </Box>
        </Box>
    )
}

export default StatBox