import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './movies'

const Mov1 = () => {
  var[update,setupdate]=useState(false)
  var[singleValue,setSinglevalue]=useState([])
    var[movies,setmovies]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/movie")
        .then(response=>{
            console.log(response.data)
            setmovies(movies=response.data)
        })
        .catch(err=>console.log(err))
    },)
    const deletemovies=(id)=>{
      console.log("delete clicked"+id);
      axios.delete("http://localhost:3005/movies/"+id)
      .then(response=>{
        alert("deleted")
        window.location.reload(false)
      })
    }
const updatestudents=(value)=>{
  setSinglevalue(value);
  setupdate(true);

}
var finalJSX =<TableContainer>
<Table>
    <TableHead>
        <TableRow>
        
                
                   <TableCell>id</TableCell>
                    <TableCell>Movie Name</TableCell>
                    <TableCell>Director</TableCell>
                    <TableCell>Language</TableCell>
                    <TableCell>Genere</TableCell>
                    <TableCell>releaseyear</TableCell>
            
                    
            
        </TableRow>
    </TableHead>
<TableBody>
    {Movies.map((value,index)=>{
        return<TableRow>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.moviename}</TableCell>
            <TableCell>{value.Director}</TableCell>
            <TableCell>{value.Language}</TableCell>
            <TableCell>{value.Genere}</TableCell>
            <TableCell>{value.Releaseyear}</TableCell>
              <Button onClick={()=>Movies(value.id)}  <TableCell>{value.moviename}</TableCell>delete </Button>                   
               </TableCell>
               <TableCell>
              <Button onClick={()=>Movies(value)}>update </Button>                   
               </TableCell>
        </TableRow>
    })}
</TableBody>



</Table>
</TableContainer>
if(update)
finalJSX = <Addstudents data={singleValue} method="put"/>
  return (
    
    <div>
    {finalJSX}
      
    </div>
  )
}

export default Mov1
