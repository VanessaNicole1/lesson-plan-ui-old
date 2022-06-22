import { Button } from '@mui/material';
import './teacherInstructions.css';


export const TeacherInstructions = ({change}) => {
  console.log(change) 
  return (
      <>
      <div className='divTeachInt'>
          <h1>Resolución para cumplimiento de Actividades de AD2 </h1>
          <p className='paragraphTI'> La Universidad Nacional de Loja a través de la expedición de la Resolución Nro. 
          080 INSTRUCTIVO PARA LA DISTRIBUCIÓN DE ACTIVIDADES DE DOCENCIA, INVESTIGACIÓN Y GESTIÓN DEL PERSONAL ACADÉMICO 
          DE LA UNIVERSIDAD NACIONAL DE LOJA en marzo de 2021 norma la política institucional para la asignación de las 
          actividades de docencia de acuerdo a cada tipo de docente. Artículo 5. Directrices Generales, apartado 5.1 PARA 
          LA ASIGNACIÓN DE CARGA HORARIA PARA LAS ACTIVIDADES DE DOCENCIA, específicamente en 5.1.2. Para la asignación 
          de carga horaria para actividades de docencia complementarias obligatorias indica en el primer punto que: 
          “Para la preparación y actualización de clases, seminarios, talleres, entre otras, que se codificará como AD2, 
          se asignará la carga horaria de acuerdo a lo establecido en las tablas del anexo 2. Las evidencias del cumplimiento
          de esta actividad podrán ser: las técnicas planificadas para el desarrollo del proceso enseñanza-aprendizaje, 
          las presentaciones, videos, guías para el desarrollo de las actividades de aprendizaje, reportes del EVA u otros
          recursos metodológicos que prepare el docente para el desarrollo de la asignatura”. </p>
      </div>
      
      <div className='buttonTI'>
          <Button variant="contained" color="success" onClick={()=> change(2)}> Aceptar </Button>   
      </div>

      </>
    
  )
}
