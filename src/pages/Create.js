import React, { useState } from 'react'
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
// import { Stack } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'


const useSome = makeStyles({
    field: {
        marginTop: 20,
        marginButtom: 20,
        marginLeft: 60,
        diaplay: 'block',
        width: 600
    }
})


export default function Create() {
    const something = useSome()
    const [title, settitle] = useState('')
    const [details, setdetails] = useState('')
    const [errortitle, seterrortitle] = useState(false)
    const [errordetails, seterrordetails] = useState(false)
    const [radio, setradio] = useState('female')

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        seterrortitle(false)
        seterrordetails(false)

        if (title === '') {
            seterrortitle(true)
        }
        if (details === '') {
            seterrordetails(true)
        }
        if (title && details && radio) {
            const url = 'http://localhost:1234/notes'
            axios.post(url, {
                title: title,
                details: details,
                category: radio,
            }).then(function (res) {
                console.log(res);
                settitle('')
                setdetails('')
                setradio('other')
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    return (
        <Container>
            <Typography
                noWrap
                variant="h4"
                color="textSecondary"
                align='center'
                component='h2'
                gutterBottom
            >
                Create a New Form
            </Typography>
            <br />
            <br />
            <form
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit}
                className={something.field}
            >
                <TextField
                    id=""
                    label="Note Title"
                    variant='outlined'
                    // fullWidth={true}
                    required
                    className={something.field}
                    value={title}
                    onChange={
                        (e) => {
                            settitle(e.target.value)
                            // console.log(title)
                        }
                    }
                    error={errortitle}
                />
                <TextField
                    id=""
                    label="Details"
                    variant='outlined'
                    // fullWidth={true}
                    required
                    className={something.field}
                    multiline
                    rows={4}
                    value={details}
                    onChange={
                        (e) => {
                            setdetails(e.target.value)
                            // console.log(details)
                        }
                    }
                    error={errordetails}
                />
                <br />
                <br />
                <FormControl
                    className={something.field}
                    align='center'
                >
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={radio}
                        align={'center'}
                        onChange={
                            (e) => {
                                setradio(e.target.value)
                                // console.log(radio)
                            }
                        }
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <br />

                <Button
                    className={something.field}
                    variant="contained"
                    color="secondary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
}
