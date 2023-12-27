import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
    useTheme
} from '@mui/material';
import { tokens } from "../theme";


const user = {
    avatar: '../img/team-7.jpg',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

const AccountProfile = (props) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Card {...props} style={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Avatar
                        src={user.avatar}
                        sx={{
                            height: 64,
                            mb: 2,
                            width: 64
                        }}
                    />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="h5"
                    >
                        {user.city}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="h6"
                    >
                       {user.country} 
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions style={{ backgroundColor: colors.primary[400] }}>
                <Button
                    fullWidth
                    variant="text"
                    style={{ color: colors.grey[900], fontSize: "14px" }}
                >
                    Upload picture
                </Button>
            </CardActions>
        </Card>
    )
}

export default AccountProfile
