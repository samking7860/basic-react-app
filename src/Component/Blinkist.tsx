import React from 'react';
import image from './images/sc.png';
import Card from '@mui/material/Card';
import { CardMedia } from '@material-ui/core';
import { CardActions, CardContent, Typography} from '@mui/material';
import { IconButton } from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box} from '@mui/system';


const Blinkist=()=>{
    return(
        <>
                <Card sx={{maxWidth:270, ml:20,mt:10}}>
                        <CardMedia
                            component="img"
                            height="100%"
                            width="100%"
                            image={image}
                            alt="book pic"
                        />
                        <CardContent>
                            <Typography>
                                <strong>Building an Inclusive Organisation</strong>
                            </Typography>
                            <Typography sx={{mt:1}} color="text.secondary">
                                Stephen Frost, Raafi-Karim...
                            </Typography>
                            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                                <Typography sx={{pl:0,fontSize:13}} color="text.secondary">
                                    <AccessTimeIcon fontSize='small' sx={{pt:1.5}}/> 15 minute read
                                </Typography>
                                <Typography sx={{pl:0,fontSize:13}} color="text.secondary">
                                     <PersonOutlineIcon fontSize='small' sx={{pt:1.5}}/> 17.1k reads
                                </Typography>
                            </Box>
                        </CardContent>
                        <Box sx={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end"}}>
                            <CardActions>
                                    <IconButton>
                                    <strong> <MoreHorizIcon fontSize='medium'/></strong>
                                    </IconButton>
                            </CardActions>
                        </Box>
            </Card>
                     



        </>
    );
}
export default Blinkist;