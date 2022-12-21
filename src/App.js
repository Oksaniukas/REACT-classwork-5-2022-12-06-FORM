import React, { useState } from "react";
import Header from "./components/Header";


function App() {

  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      comments: "",
      checkbox: false
    }
  );


  console.log(formData);

  function handleChange(event) {
    const {name, value, type, checked} = event.target;

    setFormData(prev => {
      return {
        ...prev,
        // [event.target.name]: event.target.value
        /*firstname:Dima*/
        [name]: type === 'checkbox'? checked : value
      }
    })
  }

  async function formSubmitHandler(e) {
    e.preventDefault()
    let request = await fetch('tts.lt', {...formData})
    setTimeout(function(){
      window.location.reload()
    }, 2000)
  }

  return (
      <div className="app-wrapper">
      <Header />
      <div className="form-wrapper">
        <form onSubmit={formSubmitHandler}>
          <input
            type='text'
            placeholder="Name"
            className="input-item"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
          <input
            type='text'
            placeholder="Lastname"
            className="input-item"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
          <textarea 
            placeholder="comments" 
            onChange={handleChange} 
            name='comments' 
            value={formData.comments}
          />
          <input
            type='checkbox'
            id="checkbox"
            onChange={handleChange} 
            checked={formData.checkbox}
            name="checkbox"
          />
          <button> Submit</button> 
        </form>
        <div className="gal">
          <div className="gal-item" >
            Name - {formData.firstName}
          </div>
          <div className="gal-item" >
            LastName - {formData.lastName}
          </div>
          <div className="gal-item" >
            Comments - {formData.comments}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

// function APP() {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')

// console.log(firstName)

// function handleChangeName (event) {
//   setFirstname(event.target.value)
// }
// function handleChangeLastName (event) {
//   setLastname(event.target.value)
// }

// return (
//   <div className="app-wrapper">
//   <Header />
//   <div className="form-wrapper">
//     <form onSubmit={formSubmitHandler} >
//       <input
//       type='text'
//       placeholder="Name"
//       className="input-item"
//       onChange={handleChangeName}
//       name="firstName"
//       />
//       <input
//       type='text'
//       placeholder="Lastname"
//       className="input-item"
//       onChange={handleChangeLastName}
//       name="lastName"
//       />
//        
//     </form>
//     <div className="gal">
//       <div className="gal-item" >
//         Name - {firstName}
//       </div>
//       <div className="gal-item" >
//         LastName - {lastName}
//       </div>
//       
//       </div>
//     </div>

//   </div>
// </div>
// );

// }

