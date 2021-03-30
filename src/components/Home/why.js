import React from "react";
import "styled-components/macro";

const Why = () => {
  return (
    <div
      css={`
        padding: 100px 0;
        grid-gap: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 100vh;

        @media screen and (max-width: 900px) {
          grid-template-columns: 1fr;
        }
      `}
    >
      <section>
        <h2>Por Qué?</h2>
        <p>
          La creación, dinámica y declarativa, de escenas 3D con componentes reutilizables, facilita el trabajo con Threejs y aporta orden y cordura a su código. Estos componentes reaccionan a los cambios de estado, son interactivos y estan listos para usarse y aprovechar el ecosistema infinito de React.
        </p>
      </section>
      <section>
        <h2>Tiene limitaciones?</h2>
        <p>
          Ninguna. Todo lo que funciona en Threejs tambien funcionará aquí. A diferencia de los "enlaces" en los que una biblioteca envía / mantiene docenas de componentes contenedores, sencillamente reconcilia JSX con Threejs de forma dinámica: <mesh /> simplemente es otra expresión para el nuevo THREE.Mesh (). R3F no necesita de una versión específica de Threejs ni necesita actualizaciones para las funciones anteriores modificadas, agregadas o eliminadas.
        </p>
      </section>
      <section>
        <h2>Es más lento que Threejs solo?</h2>
        <p>
          No. El rendimiento de renderizado depende de Threejs y la GPU. Los componentes pueden participar en el renderloop fuera de React, sin ningún gasto adicional. Por lo demás, React es muy eficiente en la creación y gestión de árboles de componentes, podría superar potencialmente a las aplicaciones manuales / imperativas a escala.
        </p>
      </section>
    </div>
  );
};

export default Why;
