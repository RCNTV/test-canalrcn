import React from "react";
import logoRcn from '../img/logorcn.jpg'

function Instruction() {
  return (
    <>
      <h1 className="title is-2">Prueba de ReactJS</h1>
      <div className="logo-rcn">
        <img src={logoRcn} alt='Logo RCN' />
      </div>
      <h2 className="subtitle is-4">Descripción</h2>
      <p className="parrafo">Esta prueba está diseñada para saber sobre tus conocimientos de front-end, específicamente en tecnología basada en lenguaje Javascript y librerías ReactJS.</p>
      <h2 className="subtitle is-4">Prueba</h2>
      <p className="parrafo">La prueba consiste en crear una sección con artículos relacionados al Canal RCN, que puedes extraer de un servicio Json disponible en Internet en este <a href>link</a>.</p>
      <p className="parrafo">Debes implementar un listado con ese contenido y debes poder navegar en el contenido de alguna de las notas a las que le des click.</p>
      <h2 className="subtitle is-4">Tareas</h2>
      <ul className="lista-tareas">
        <li>
          Crear una función que consuma el servicio del Json con todo el listado de los artículos.
        </li>
        <li>
          Crear una grilla o lista html que muestre la información relevante del listado, los artículos deben tener un link para navegar en su contenido.
        </li>
        <li>
          Ver la información del artículo en una página de detalle de la nota.
        </li>
      </ul>
      <h2 className="subtitle is-4">Bonus (Opcional)</h2>
      <ul className="lista-tareas">
        <li>
          Crear un menú dinámico de 3 niveles con la fuente del menú de este <a href>Json</a>.
        </li>
        <li>
          Uso de elementos que declaren un html semántico y buenas prácticas de SEO.
        </li>
      </ul>
      <h2 className="subtitle is-4">Repositorio</h2>
      <p className="parrafo">Vas a tener acceso a un repositorio donde se encuentra este proyecto inicial, debes crear los componentes que necesites para esta prueba y los puedes reemplazar por el componente de <strong>"Instruction"</strong> del archivo <strong>App.js</strong></p>
      <p className="parrafo">Crea una nueva rama a partir de la rama <strong>master</strong> del repositorio y has push de esa rama al repositorio cuando finalices con el desarrollo.</p>      
      <h2 className="subtitle is-4">Consideraciones</h2>
      <ul className="lista-tareas">
        <li>
          El proyecto usa una librería llamada Bulma para aplicar los estilos a los elementos, puedes ir a su documentación en esta página <a href='https://bulma.io/' target='_blank' rel='noreferrer'>https://bulma.io/</a>.
        </li>
      </ul>
      <h2 className="subtitle is-4">Como desplegar</h2>
      <ul className="lista-tareas">
        <li>
          Debes tener intalado <strong>nodejs</strong> y <strong>npm</strong> en tu computadora.
        </li>
        <li>
          Una vez descargues el repositorio debes estar ubicado dentro de la carpeta del proyecto y ejecutar el comando <strong>npm install</strong> desde la consola de comandos para instalar todas las dependencias.
        </li>
        <li>
          Para ejecutar el proyecto ejecuta <strong>npm start</strong>.
        </li>
        <li>
          Tu proyecto se debe ejecutar en la dirección <a href='localhost:3000' target='_blank' rel='noreferrer'>localhost:3000</a>.
        </li>
      </ul>
      <br />< br />
      <h2 className="title is-4">Mucha suerte!!!</h2>
      <br />< br />
    </>
  );
}

export default Instruction;
