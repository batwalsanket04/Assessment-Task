 import React, { useReducer } from 'react'
 
 const Reducer = () => {


    const Reducer=(state,action)=>{

        switch (action.type){

            case "INC" :return {count:state.count+1}

            case "DEC": return {count:state.count>0 ? state.count-1:0}

            case "RESET" : return {count:state.count=0}

        }
    }

    const[state,dispatch]=useReducer(Reducer,{count:0})
   return (

    
     <div style={{  
  
        justifyContent: "center",
        alignContent: "center",
        margin:"auto",
        marginTop:"100px",
        height: "70vh", // full viewport height
        width: "70vw", // full viewport width,
        textAlign: "center",
          padding: "20px 40px",
          borderRadius: "12px",
         
          boxShadow: "0 4px 12px rgba(141, 121, 121, 0.94)",

     }}>
        <h1 className='p-4'>Intial Count: <mark>{state.count}</mark></h1>
        <button  className='btn btn-outline-success mx-2' onClick={()=>dispatch({type:"INC"})}>Update</button>
        <button className='btn btn-outline-success mx-2'  onClick={()=>dispatch({type:"DEC"})}>Reduce</button>
        <button  className='btn btn-outline-success mx-2' onClick={()=>dispatch({type:"RESET"})}>RESET</button>

     </div>
   )
 }
 
 export default Reducer
 