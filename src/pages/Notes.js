import { Container, Grid, Paper, Table } from '@material-ui/core'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'
import NoteCard from '../components/NoteCard'


const Notes = () => {
    const url = 'http://localhost:1234/notes'
    const [returndata, setreturndata] = useState([])
    useEffect(() => {
        setInterval(() => {
            fetch(url).then((res) => res.json()).then((data) => setreturndata(data))
        }, 1000);
    }, [])
    const handleDelete = async (id) => {
        await fetch('http://localhost:1234/notes/' + id, {
            method: 'DELETE'
        })
        const newNotes = returndata.filter(note => returndata.id !== id)
        setreturndata(newNotes)
    }

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }


    return (
        <Container>
            <Typography
                align={'center'}
            >
                <Link to='/create'>Create</Link>
            </Typography>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {returndata.map(note => (
                    <div key={note.id} >
                        <NoteCard
                            content={note}
                            handledelete={handleDelete}
                        />
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}

export default Notes