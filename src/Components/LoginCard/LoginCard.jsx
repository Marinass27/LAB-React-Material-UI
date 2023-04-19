import React from 'react'
import { Card, CardContent, CardHeader, TextField, IconButton, Button } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Email, Password, Lock, Visibility, VisibilityOff} from '@mui/icons-material'
import { useState } from 'react'
import LinkButton from '../LinkButton/LinkButton'

function LoginCard() {
    const [isPassVisible, setIsPassVisible] = useState(false)

const handleClick = () => {
  return <LinkButton path= {'/ability'}/>
}


  return (
    <Card sx={{ maxWidth: '700px', backgroundColor: blue[50] }} raised={true}>
      <CardHeader title= "Login">
      </CardHeader>
      <CardContent>
        <TextField
         label= "email"
         variant ="outlined"
         fullWidth= {true}
         margin = "dense"
         InputProps= {{
            endAdornment:(
              <Email/>
                )
          }}
        ></TextField>

    <TextField
         label= "password"
         variant ="outlined"
         fullWidth= {true}
         margin = "dense"
         type={isPassVisible ? "text" : "password"}
         InputProps= {{
            startAdornment: <Lock/>,
            endAdornment:( 
            <IconButton
            onClick={() => {setIsPassVisible(!isPassVisible)}}
            >
            {isPassVisible ? <Visibility/> :<VisibilityOff/>}
            </IconButton>
                
  ),}}
        ></TextField>
        <Button sx = {{ variant: "text", backgroundColor: blue[300], color: "success"}}
        OnClick={handleClick}
        
        >Start</Button>
      </CardContent>
    </Card>
    
  )
}

export default LoginCard