import { Button, Grid } from "@mui/material";
import React from "react";
import "./tableSchedule.css";

export const TableScheduler = () => {
  const subjects = [
    {id:"s1", nombre:"Compiladores"},
    {id:"s2", nombre: "Titulación"},
    {id:"s3", nombre: "Ingenieria de SW I"},
    {id:"s4", nombre: "Inteligencia Artificial"},
    {id:"s5", nombre: "Etica"},
    {id:"s6", nombre: "Programacion Avanzada"},
    {id:"s7", nombre: "Control Automatizado"},
    {id:"s8", nombre: "Redes"},
    {id:"s9", nombre: "AD2"},
  ];
  const days=[
    "Lunes","Martes","Miercoles","Jueves","Viernes"
  ];

 
//const data=[{dia:"",hora:"",materia:""}];

  return (
    <>
      <div className="divMain">
        <div className="left">
          <table>
            {subjects.map((row, index) => (
              <tr key={index}>
                <td>
                  <div className="item" data-value={row.nombre} id={row.id}>
                    {row.nombre}
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>

        <div className="right">
          <table id="schedule">
            <tr >
              <td className="blank"></td>
              {days.map((row, index) => (
                <td className="title" id={row} key={index}> {row} </td>
              ))}
              
            </tr>

            <tbody>
            <tr className="datos">
              <td className="time" id="hour1">
                7:30
              </td>
              <td className="drop" id="td11"></td>
              <td className="drop" id="td12"></td>
              <td className="drop" id="td13"></td>
              <td className="drop" id="td14"></td>
              <td className="drop" id="td15"></td>
            </tr>
            <tr>
              <td className="time" id="hour2">
                8:30
              </td>
              <td className="drop" id="td21"></td>
              <td className="drop" id="td22"></td>
              <td className="drop" id="td23"></td>
              <td className="drop" id="td24"></td>
              <td className="drop" id="td25"></td>
            </tr>
            <tr>
              <td className="time" id="hour3">
                9:30
              </td>
              <td className="drop" id="td31"></td>
              <td className="drop" id="td32"></td>
              <td className="drop" id="td33"></td>
              <td className="drop" id="td34"></td>
              <td className="drop" id="td35"></td>
            </tr>
            <tr>
              <td className="time" id="hour4">
                10:30
              </td>
              <td className="drop" id="td41"></td>
              <td className="drop" id="td42"></td>
              <td className="drop" id="td43"></td>
              <td className="drop" id="td44"></td>
              <td className="drop" id="td45"></td>
            </tr>
            <tr>
              <td className="time" id="hour5">
                11:30
              </td>
              <td className="drop" id="td51"></td>
              <td className="drop" id="td52"></td>
              <td className="drop" id="td53"></td>
              <td className="drop" id="td54"></td>
              <td className="drop" id="td55"></td>
            </tr>
            <tr>
              <td className="time" id="hour6">
                12:30
              </td>
              <td className="drop" id="td61"></td>
              <td className="drop" id="td62"></td>
              <td className="drop" id="td63"></td>
              <td className="drop" id="td64"></td>
              <td className="drop" id="td65"></td>
            </tr>
            <tr>
              <td className="time" id="hour7">
                13:30
              </td>
              <td className="drop" id="td71"></td>
              <td className="drop" id="td72"></td>
              <td className="drop" id="td73"></td>
              <td className="drop" id="td74"></td>
              <td className="drop" id="td75"></td>
            </tr>
            <tr>
              <td className="time" id="hour8">
                14:30
              </td>
              <td className="drop" id="td81"></td>
              <td className="drop" id="td82"></td>
              <td className="drop" id="td83"></td>
              <td className="drop" id="td84"></td>
              <td className="drop" id="td85"></td>
            </tr>
            </tbody>
          </table>
          
        </div>
        
      </div>

    <Grid container alignContent={"center"} >
    
            <Button id="guardar"> SAVE</Button>
            <button id="saveS" >
              Guardar
                </button>
          
    </Grid>
    </>
  );
};
