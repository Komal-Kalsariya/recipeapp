import React, { useState } from 'react'

const Recipefeed = () => {

    let [name,setName]=useState("")
    let [imag,setimag]=useState("")
    let [desc,setDesc]=useState("")
    let [username,setUsername]=useState("")
    let [recipelist,setRecipe]=useState([])

    const handelData=(e)=>{
        e.preventDefault()
        let data={
            name:name,
            imag:imag,
            desc:desc,
            username:username
        }
       
        setRecipe([...recipelist,data])
        console.log(recipelist)
        
    }

  return (
    <div>
        <h2>RecipeSharingApp</h2>
        <form onSubmit={handelData}>
        <label>Recipe Name:</label>
        <input type="text"  placeholder='Enetr recipe name'  onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label>Image:</label>
        <input type="text"  placeholder="Enter recipe images" onChange={(e)=>setimag(e.target.value)}/>
        <br />
        <label>Description</label>
        <input type="text" placeholder='enter recipe Description' onChange={(e)=>setDesc(e.target.value)}/>
        <br />
        <label>UserName:</label>
        <input type="text"  placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        <button type='submit'>Add</button>
        <div>
        {
        recipelist.map((ele)=>(
          
              <div>
                  <p>{ele.name}</p>
                  <img src={ele.imag} alt="" />
                  <p>{ele.desc}</p>
                  <p>{ele.username}</p>
              </div>
            
        ))
        }
        </div>
        </form>
        
   
        
    </div>
  )
}

export default Recipefeed