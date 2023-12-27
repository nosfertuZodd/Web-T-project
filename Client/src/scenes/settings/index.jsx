import { Box, Container, Grid } from '@mui/material';
import Header from "../../components/Header";
import AccountProfile from '../../components/AccountProfile'
import AccountSetting from '../../components/AccountSetting'

const Settings = () => {

    return (
        <Box m="15px">
            <Header title="PROFILE SETTINGS" subtitle="Manage the Profile Details" />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 1
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <AccountProfile />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <AccountSetting />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    )
};

export default Settings