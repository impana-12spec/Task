import React, { useState} from 'react';


const MyCol = ({ id, values }) => {
  return (
    <h1>{values.map((val, index) => <div key={index}>{val}</div>)}</h1>
  )
}



const HeadTail = () => {
  const [headTail, setHeadTail] = useState({})
  // lastElement -> keep track of previous element
  const [lastElement, setLastElement] = useState(0);
  // to increment column count when element changes
  const [column, setColumn] = useState(0);
  

  

  const addElement = (element) => {
    // If the object is empty create new a temp obj with the column as key and array with the arguement passed to function 
    // Update the state and also update the last element 
    if (Object.keys(headTail).length === 0) {
      const temp = {
        [column]: [element]
      }
      setHeadTail(temp);
      setLastElement(element);
    } else {
      // If element from arguement and current element are same 
      // create a copy of current state and push element to the current column array as the element did not change
      if (element === lastElement) {
        const copy = Object.assign({}, headTail);
        copy[column].push(element);
        setHeadTail(copy);
      } else {
        const copy = Object.assign({}, headTail);
       // copy the current object as it is a different element create a new column (column+1)
       // and update new column value with the arguement passed as array
        const temp = {
          ...copy,
          [column+1]: [element]
          
        }
        setHeadTail(temp);
        setLastElement(element);
        setColumn(column+1);
      }
    }
  }


  return (
    <div className="container">
      <div className= "row">
    <div classname="HeadTail" style={{marginTop:'100px',marginLeft:'500px'}}>
      <button onClick={()=> addElement("H")}   style={{width:'50px',height:'50px'}}>H</button>
      <button onClick={()=> addElement("T")}  style={{width:'50px',height:'50px'}} >T</button>
      <div className='flex'>
        {
          Object.entries(headTail).map(([key, value], index) => {
            return <MyCol key={key} id={key} values={value} />
          })
        }
      </div>
    </div>
    </div>
    </div>
  )
}

export default HeadTail