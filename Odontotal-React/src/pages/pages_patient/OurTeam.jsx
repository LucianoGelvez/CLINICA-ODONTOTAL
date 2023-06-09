import React, { useContext, useState } from 'react'
import NavbarPatient from '../../components/componentPatient/NavbarPatient'
import { ContextGlobal } from '../../components/utils/global.context';
import lola from '../../images/soonDelete/1.png'
import pedro from '../../images/soonDelete/2.png'
import laura from '../../images/soonDelete/3.png'
import tania from '../../images/soonDelete/4.png'
import silvio from '../../images/soonDelete/5.png'
// import susan from '../../images/soonDelete/6.png'
import '../../styles/pagesStyles/OurTeamStyle.css'

import Dentist from '../../components/componentPatient/Dentist';

const OurTeam = () => {
  const { information } = useContext(ContextGlobal);
  const images = [lola, pedro, laura, silvio, tania]

  const [dentist, setDentist] = useState([
    {
      id: 1,
      nombre: "Kevin",
      apellido: "Ben",
      especialidad: "Frontend Developer",
      img: lola,
    },
    {
      id: 2,
      nombre: "Alex",
      apellido: "Ben",
      especialidad: "Backend Developer",
      img: pedro,
    },
    {
      id: 3,
      nombre: "Ben",
      apellido: "Ben",
      especialidad: "Designer",
      img: laura,
    },
    {
      id: 4,
      nombre: "Ben",
      apellido: "Ben",
      especialidad: "Designer",
      img: silvio
    },
    {
      id: 5,
      nombre: "Ben",
      apellido: "Ben",
      especialidad: "Designer",
      img: tania,
    },
    {
      id: 6,
      nombre: "Ben",
      apellido: "Ben",
      especialidad: "Designer",
      img: pedro,
    },
    {
      id: 7,
      nombre: "Ben",
      apellido: "Ben",
      especialidad: "Designer",
      img: laura,
    },
    {
      id: 8,
      nombre: "Ben",
      apellido: "Ben",
      especialidad: "Designer",
      img: silvio,
    },
    {
      id: 9,
      nombre: "Ben",
      apellido: "Ben",
      especialidad: "Designer",
      img: tania,
    },
    
  ]);

  return (
    <div className='container'>
      <NavbarPatient/>
      <h2>Nuesto personal calificado nos distingue</h2>
      <div >
  <div className="row" >
 {dentist.map((dentist)=>{
  return <Dentist key={dentist.id} nombre={dentist.nombre} apellido={dentist.apellido}
   img={dentist.img} especialidad={dentist.especialidad}/>
 })}
 <div className='container_text'>
 <p className='container_text_desk'>Nuestro equipo de dentistas altamente capacitados tiene años de experiencia en el diagnóstico y tratamiento de una amplia variedad de problemas dentales.
   Mantenemos nuestros conocimientos actualizados para ofrecer los tratamientos dentales más avanzados y efectivos.
    Nos dedicamos a brindar una atención personalizada y de alta calidad, asegurándonos de que nuestros pacientes se sientan cómodos y seguros durante todo el proceso.
 </p>
 <p className='container_text_responsive'>
    Nos dedicamos a brindar una atención personalizada y de alta calidad, asegurándonos de que nuestros pacientes se sientan cómodos y seguros durante todo el proceso.
 </p>
 </div>

  </div>
      
      </div></div>
  )
}

export default OurTeam