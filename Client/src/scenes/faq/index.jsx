import React from 'react'
import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const FAQ = () => {

    const accordItems = AccordData.map((ele, index) => {
        return <Accord key={ele.id} question={ele.question} anwser={ele.anwser} />
    })

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            {accordItems}
        </Box>
    )
}

const Accord = (props) => {
   
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Accordion defaultExpanded style={{backgroundColor: colors.primary[500]}}>
            <AccordionSummary expandIcon={<ExpandMore />} style={{text: "bold"}}>
                <Typography color={colors.redAccent[500]} variant="h5">
                    {props.question}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    {props.anwser}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

const AccordData = [
    {
        id: 1,
        question: "Is ADHost is a fraud ?",
        anwser: "Adhost is world famous company and it has truested customers and partner and it recognized as one of the best AD Agency of the world."
    },

    {
        id: 2,
        question: "How to Change or Reset Your Password ?",
        anwser: "If you can’t remember the password for your Udemy account, you can request a reset password email from the login page."
    },
    {
        id: 3,
        question: "How to change your account’s email address ?",
        anwser: "After you log into your Adhost account, via your browser, navigate to your account settings page. Click the pencil icon beside the email box. Enter the new email address and your password. Click Save."
    },
    {
        id: 4,
        question: "When I try to change my email address it says that address is unavailable. Why ?",
        anwser: "The “email address is unavailable” banner indicates that the email address is registered to another active account or an account that was recently closed. If you recently closed an account that had that email address registered to it, however, that address may not be available to use with another Adhost account for a period of time. "
    }
]

export default FAQ
