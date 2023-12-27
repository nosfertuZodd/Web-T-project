import React from 'react'
import { useTheme, Box } from '@mui/material'
import { tokens } from '../theme'

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;

    return (
        <Box sx={{
            background: `radial-gradient(${colors.primary[400]} 50%, transparent 65%), conic-gradient(transparent 0deg ${angle}deg, ${colors.grey[900]} ${angle}deg 360deg), ${colors.redAccent[400]}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`
        }}

        />
    )
}

export default ProgressCircle