import React,{useEffect,useState} from 'react'
import BringCharacters from './BringCharacters'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import '../index.css'


const Home = () => {
    const [characters, setCharacters] = useState([])
    const [input, setInput] = useState('')
    
    const getCharacters = ()=>{
        const chars = BringCharacters(input)
        chars.then(setCharacters)
        console.log(characters)
    }

    const manejoClick = (e)=>{
        e.preventDefault()
        BringCharacters(input)
        console.log('hey')
    }


    useEffect(()=>{
        getCharacters()
    },[input])
  return (
    <div>
        
        <div>    
            <div id='logo'>
                <img id='marvelLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="" />
            </div>
            <div id='form'>
                <form onSubmit={(e)=>manejoClick(e)}>
                <TextField 
                label="Marvel" 
                size='small'
                color="error" focused
                type="text"
                placeholder='Buscar'
                value={input}
                onChange={(ev)=>setInput(ev.target.value)} 
                />
                <Button size="large" color="error" variant="contained" onClick={(e)=>manejoClick(e)}>
                        Buscar
                </Button>
                </form>
            </div> 
            <h1 style={{"textAlign":"center","color":"#ff0000"}}>{input.toUpperCase()}</h1>   
        </div>
        <div id='cardContainer'>
            {characters.map((character)=>
                <Card key={character.id} id='charCard' sx={{ maxWidth: 300, backgroundColor:"#30467F" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      M
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={character.name}
                  subheader={character.id}
                />
                <CardMedia
                  component="img"
                  height="300"
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <CardContent>
                  <div>
                    <ul id='events'>
                        <li>{character.events.available >= 1 ? character.events.items[0].name:'no events to show'}</li>
                        <li>{character.events.available >= 2 ? character.events.items[1].name:''}</li>
                        <li>{character.events.available >= 3 ? character.events.items[2].name:''}</li>
                    </ul>
                  </div>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
                  {/* <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      .)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent> */}

              </Card>
                
            )}              
        </div>
                
            
        
    </div>
  )
}

export default Home