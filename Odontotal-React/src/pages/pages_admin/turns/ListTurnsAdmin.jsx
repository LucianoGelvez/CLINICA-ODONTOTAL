import React, { useContext, useEffect, useState } from 'react'
import NavbarAdmin from '../../../components/component_admin/NavbarAdmin'
import { ContextGlobal } from '../../../components/utils/global.context'
import List from './List'
import Login from '../../../components/Login'
import Register from '../../../components/Register'


const ListTurnsAdmin = () => {
  const { information, showLogin, showRegister, setShowLogin, setShowRegister } = useContext(ContextGlobal);

  const [data, serData] = useState(information);
  const [edition, setedition] = useState(null);

  useEffect(() => {
    serData(information);
  }, [information]);
  
  const handleEditar = (item) => {
    setedition(item);
  };
    
  const handleEliminar = (item) => {
    
    serData((prevState) => prevState.filter((x) => x.id !== item.id));
    const url = "http://localhost:8080/turnos/" + item.id;
    console.log(url)
    const settings = {
      method: "DELETE",
    };
    fetch(url, settings)
      .then((response) => response.json())
      .then((error) => console.log(error));
  };

  const handleGuardar = (item) => {
    console.log(item)
    console.log(item.id)
    if (edition) {
      serData((prevState) =>
        prevState.map((x) => (x.id === item.id ? item : x))
       
      );
      console.log(data)
      console.log(data)
      setedition(null);
    } else {
      serData((prevState) => [...prevState, { ...item, id: Date.now() }]);
    }
  };

  const handleCancelar = () => {
    setedition(false)
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <NavbarAdmin/> 
      {showLogin && <Login/> }
      {showRegister && <Register/> }
      {!showLogin && !showRegister &&
      <>
        <List data={data} onEditar={handleEditar} onEliminar={handleEliminar} />
      </>
      }
     
    </div>
  );
}

export default ListTurnsAdmin