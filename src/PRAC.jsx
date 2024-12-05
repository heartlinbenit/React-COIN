import React, { useEffect, useRef, useState } from 'react'

// function PRAC() {
  
// const [name, setName] = useState("");

// function handleSubmi() {
//   alert(`Name: ${name}`);
// }
//   // const [count, setCount] = useState(8);

//   // useEffect(() => {
//   //   document.title = `Count: ${count}`
//   // }, [count]);

//   // function  handleClick(){
//   //     setCount(count + 1)
//   //     console.log("hiii")
//   // }


//   // return (
//   //   <div>
//   //     <p>Count: {count}</p>
//   //     <button onClick={handleClick}>Increment</button>
//   //     {/* <button onClick={setCount(count + 1)}>Increment</button> */}

//   //   </div>
//   // );

//   const inputRef = useRef(null);

//   function handleSubmit() {
//     alert(inputRef.current.value);
//   }

//   return (
//     <>
//       <div className="App">
//         <h1 className="geeks">useref</h1>

//         <form onSubmit={handleSubmit}>
//           <label>Name :</label>
//           <input
//             type="text"
//             ref={inputRef}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       <div className="App">
//         <h1 className="geeks">State</h1>
        
//         <form onSubmit={handleSubmi}>
//           <label>Name:</label>
//           <input
//             type='text'
//             value={name}
//             onChange={(e) =>
//               setName(e.target.value)
//             }
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }


// export default PRAC






export default function PRAC() {

  const [count, setCount] = useState(0);


  const countRef = useRef(0);

  const incrementState = () => {
    setCount(count + 1); 
  };

  const incrementRef = () => {
    countRef.current = countRef.current + 1; 
    console.log("Ref Count:", countRef.current);
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <button onClick={incrementState}>Increment State</button>

      <p>Ref Count: {countRef.current}</p>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}
