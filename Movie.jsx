import { Button, TableContainer, TextField, Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Movie = (props) => {
    
    var[addmovies,set]=useState(props.data)
    
    const handlechange=(e)=>{
        const{name,value}=e.target 
        setaddmovie({...addmovie,[name]:value})
        console.log(addmovies)
    }
    const savedata=()=>{
      

        if(props.method==="post"){
            console.log("POST Button clicked")
    axios.post(" http://localhost:3005/movie",addmovie)    
    .then(response=>{
        alert=("Success")
    })
    .catch(error=>{
        alert("failed")
    })

}else if(props.method=="put"){
    axios.put("http://localhost:3005/movie/"+addmovie.id,addmovie)
    .then((response)=>{
        console.log("put data",response.data);
    alert("success")
        window.location.reload(false);
    })
    .catch((err)=>{
        console.log(err)
    })
   }
    }
   

    
    
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
      <Typography variant='h4'>Add movie</Typography>
      <form>
      <TextField id="outlined-basic" label="id" variant="outlined" name='id'value={addmovie.id} onChange={handlechange}/>
      <br />
      <br />
      <TextField id="outlined-basic" label="Moviename" variant="outlined" name='id'value={addmovie.id} onChange={handlechange}/>
      <br />
      <br />
      <TextField id="outlined-basic" label="Director" variant="outlined" name='id'value={addmovie.id} onChange={handlechange}/>
      <br />
      <br /> <TextField id="outlined-basic" label="Language" variant="outlined" name='id'value={addmovie.id} onChange={handlechange}/>
      <br />
      <br /> <TextField id="outlined-basic" label="Genere" variant="outlined" name='id'value={addmovie.id} onChange={handlechange}/>
      <br />
      <br /> <TextField id="outlined-basic" label="Releaseyear" variant="outlined" name='id'value={addmovie.id} onChange={handlechange}/>
      <br />
      <br />
      <Button variant="contained" color='success' onClick={savedata}>Submit</Button>
      </form>
    </div>
  )
}

export default Movie
