import React from 'react'
import './admin-dashoard.css'
import { ColorModeContext, useMode } from '../theme';
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from 'react-router-dom';
import { ProSidebarProvider } from "react-pro-sidebar";

import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar'
import Dashboard from '../scenes/dashboard';

import AddClient from '../scenes/addClient';
import UpdateClient from '../scenes/updateClient';
import Client from '../scenes/user';

import Youtuber from '../scenes/youtuber';
import AddYoutuber from '../scenes/addYoutuber';

import Job from '../scenes/adminJobs';
// import Service from './scenes/service';

import Settings from '../scenes/settings'
import FAQ from '../scenes/faq';

const AdminRoutes = () => {
  const [theme, colorMode] = useMode();
  return (
    <>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <ProSidebarProvider>
              <Sidebar />
            </ProSidebarProvider>
            <main className="dash">
              <Topbar />

              <div>
                <Routes>
                  <Route exact path="/" element={<Dashboard />} />

                  <Route path="youtuber" element={<Youtuber />} />
                  <Route path="create-youtuber" element={<AddYoutuber />} />

                  <Route path="client" element={<Client />} />
                  <Route path="create-client" element={<AddClient />} />
                  <Route path="client/:id" element={<UpdateClient />} />

                  <Route path="job" element={<Job />} />
                  {/* <Route path="/service" element={<Service />} /> */}

                  <Route path="faq" element={<FAQ />} />
                  <Route path="settings" element={<Settings />} />

                </Routes>
              </div>

            </main>

          </div>

        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default AdminRoutes
