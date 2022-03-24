import { CardContent, Collapse, Typography } from '@material-ui/core'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const NoteCard = ({ content, handledelete }) => {

    return (
        <Card
            sx={{
                // width: 2,
                // marginBottom: 20,
                backgroundColor: 'black',
            }} 
            // elevation={30}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {content.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={() => handledelete(content.id)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                }
                title={content.title}
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="textPrimary">
                    {content.details}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default NoteCard