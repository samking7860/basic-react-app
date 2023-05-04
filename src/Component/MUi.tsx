import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


const Btn = ()=>{
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };
  return (
    <>
      <h3>Text Button</h3>
      <Button>Click Me</Button>
      <Button color="secondary">Secondary</Button>
      <Button href="https://google.com" color="primary">Link</Button>
      <Button disabled>Disabled </Button>
      <h3>Contained Button</h3>
      <Button variant="contained">Click Me</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" href="https://google.com" color="primary">Link</Button>
      <Button variant="contained" disabled>Disabled </Button>
      <h3>Outlined Button</h3>
      <Button variant="outlined">Click Me</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" href="https://google.com" color="primary">Link</Button>
      <Button variant="outlined" disabled>Disabled</Button>
      <h3>Button Size</h3>
      <Button variant="contained" color="secondary" size="small">Small</Button>
      <Button variant="contained" color="secondary" size="medium">Medium</Button>
      <Button variant="contained" color="secondary" size="large">Large</Button>
      <h3>Button with Icon</h3>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>Delete</Button>
      <h3>Icon Button</h3>
      <IconButton>
        <DeleteIcon  color="secondary" />
      </IconButton>
      <h3>Custom Button</h3>
      <Button variant="contained" color="secondary" style={{ backgroundColor: "blue" }}>Custom</Button>
      <h3>Button Group</h3>
      <ButtonGroup variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h3>Vertical Button Group</h3>
      <ButtonGroup orientation="vertical" color="primary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h3>Floating Action Button</h3>
      <Fab color="primary"><AddIcon /></Fab>
      <Fab color="secondary"><EditIcon /></Fab>
      <Fab variant="extended"><NavigationIcon />Navigate</Fab>
      <Fab disabled><FavoriteIcon /></Fab>
      <h3>Checkbox</h3>
      <Checkbox />
      <Checkbox checked={true} />
      <Checkbox checked={true} color="primary" />
      <Checkbox defaultChecked indeterminate />
      <FormControlLabel
        control={<Checkbox checked={true} name="checkedA" />}
        label="Secondary"
      />
      <h3>Radio Button</h3>
      <Radio
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      <h3>Slider</h3>
      <Slider value={5} />
      <h3>Switch</h3>
      <Switch />
      <h3>Box</h3>
      <Box>Hello World</Box>
      <h3>Alignment</h3>
      <Box textAlign="left">Hello</Box>
      <Box textAlign="center">Hello</Box>
      <Box textAlign="right">Hello</Box>
      <h3>Font Weight</h3>
      <Box fontWeight="fontWeightBold">Hello</Box>
      <Box fontWeight={500}>Hello</Box>
      <h3>Font Size</h3>
      <Box fontSize={24}>Hello</Box>
      <h3>Font Style</h3>
      <Box fontStyle="italic">Hello</Box> 
      <h3>Color</h3>
      <Box color="primary.main">primary</Box>
      <Box color="secondary.main">secondary</Box>
      <Box color="error.main">error</Box>
      <Box color="warning.main">warning</Box>
      <Box color="info.main">info</Box>
      <Box color="success.main">success</Box>
      <h3>Background Color</h3>
      <Box bgcolor="primary.main">primary</Box>
      <Box bgcolor="secondary.main">secondary</Box>
      <Box bgcolor="error.main">error</Box>
      <Box bgcolor="warning.main">warning</Box>
      <Box bgcolor="info.main">info</Box>
      <Box bgcolor="success.main">success</Box>
      
      <h3>Margin</h3>
      <Box m={10}> All Side Margin</Box>
      <Box mt={10}>Margin Top</Box>
      <Box mb={10}>Margin Bottom</Box>
      <Box ml={10}>Margin Left</Box>
      <Box mr={10}>Margin Right</Box>
      <Box mx={10}>Margin Left Right</Box>
      <Box my={10}>Margin Top Bottom</Box>
      <h3>Padding</h3>
      <Box p={10}> All Side Padding</Box>
      <Box pt={10}>Padding Top</Box>
      <Box pb={10}>Padding Bottom</Box>
      <Box pl={10}>Padding Left</Box>
      <Box pr={10}>Padding Right</Box>
      <Box px={10}>Padding Left Right</Box>
      <Box py={10}>Padding Top Bottom</Box>
      <h3>Width Sizing</h3>
      <Box width={1 / 4} bgcolor="red">Width 1/4</Box>
      <Box width={500} bgcolor="yellow">Width 500px</Box>
      <Box width="50%" bgcolor="pink">Width 50%</Box>
      <Box width={1} bgcolor="green">Width 100%</Box>
      <h3>Height Sizing</h3>
      <Box height="50%" bgcolor="pink">Height 50%</Box>
      <Box height={200} bgcolor="yellow">Height 200px</Box>
      <h3>Border</h3>
      <Box border={1}>Hello 1</Box>
      <Box borderTop={1}>Hello 2</Box>
      <Box borderBottom={1}>Hello 3</Box>
      <Box borderLeft={1}>Hello 4</Box>
      <Box borderRight={1}>Hello 5</Box>
  
      <Box border={0}>Hello 1</Box>
      <Box border={1} borderTop={0}>Hello 2</Box>
      <Box border={1} borderBottom={0}>Hello 3</Box>
      <Box border={1} borderLeft={0}>Hello 4</Box>
      <Box border={1} borderRight={0}>Hello 5</Box>
      <h3>Border Color</h3>
      <Box border={1} borderColor="secondary.main">Hello</Box>
      <h3>Border Radius</h3>
      <Box border={1} borderRadius="50%" width={300} height={300}></Box>
      <Box border={1} borderRadius={16} width={300} height={300}></Box>
         
      <h3>Avatars</h3>
      <Avatar>G</Avatar>
      <Avatar src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" />
      <h3>Badges</h3>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={40}>
        <MailIcon />
      </Badge>
      <Badge anchorOrigin={{ vertical: "bottom", horizontal: "right" }} badgeContent={100} color="primary" max={50} >
        <MailIcon />
      </Badge>
      <Badge color="primary" variant="dot">
        <MailIcon />
      </Badge>
        </>


    );
}
export default Btn;