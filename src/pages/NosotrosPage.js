import '../styles/components/pages/NosotrosPage.css';
import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
             <main className="imagen">
                  <div className="nosimg">
                    <img src="images/nosotros/7.jpg" alt="delicias1"></img>
                  </div>
                       <h2 className="nosotros">Nuestra Historia</h2>
              </main>
            <div className="historia">
                <p>Las hermanas, María y Ana, decidieron emprender en la repostería, impulsando el hobby que antes ocupaba las tardes de los sábados. Uniendo sus respectivas familias decidieron involucrar a sus hijas y establecer un negocio familiar que quedase como herencia para sus nietos.</p>
                <p>Julia y Camila, hijas de María, junto con Emilia, hija de Ana, expandieron el negocio hacia la panadería con la visión de establecer franquicias en un futuro. </p>
            </div>
            <h3 className="nosotros2">Nuestras reposteras y panaderas</h3>
            <div className="staff"> 
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros/3.jpg" alt="Julia" width="150" />
                        <h5>Julia</h5>
                        <h6>Chef y panadera ejecutiva</h6>
                        <p>La mayor de las hijas de María, enamorada de la cocina desde muy chiquita, impulsó a su hermana Camila a hacer cursos de panadería juntas y formar parte del emprendimiento familiar. Actualmente organiza las recetas y menús para la posterioridad.</p>
                    </div>
                    <div className="persona2">
                        <img src="images/nosotros/2.jpg" alt="Camila" width="150" />
                        <h5>Camila</h5>
                        <h6>Chef especializada en panadería y repostería</h6>
                        <p>La menor de las hijas de María, siempre ayudó a su madre a cocinar para toda la familia. Luego de que Julia la impulsara a estudiar panadería a la edad de 13 años, descubrió su pasión y no pudo separarse nunca más de la cocina.</p>
                    </div>
                    <div className="persona3">
                        <img src="images/nosotros/1.jpg" alt="Emilia" width="150" />
                        <h5>Emilia</h5>
                        <h6>Repostera aprendiz</h6>
                        <p>La menor del grupo, hija de Ana, trae frescura a la cocina y aporta posibles futuras recetas que Julia supervisa y aprueba. Aprendiz de Camila se esfuerza para poder alcanzar el nivel de sus primas.</p>
                    </div>
                    <div className="persona4">
                        <img src="images/nosotros/4.jpg" alt="María" width="150" />
                        <h5>María</h5>
                        <h6>Repostera amateur y creadora de Pastelería Isabella</h6>
                        <p>La mayor de las Fozz cocinaba galletas con su hermana en la casa de sus abuelos maternos cuando eran niñas. Su abuela despertó su pasión por la repostería contagiando, luego, a Ana. Ambas crecieron y decidieron cocinar todas las tardes de los sábados de su vida juntas.</p>
                    </div>
                    <div className="persona5">
                        <img src="images/nosotros/5.jpg" alt="Ana" width="150" />
                        <h5>Ana</h5>
                        <h6>Repostera amateur y creadora de Pastelería Isabella</h6>
                        <p>La menor de las Fozz, impulsó a su hermana mayor para emprender en la repostería y, así, establecer un negocio familiar con los conocimientos adqueridos y las recetas de toda la vida de su abuela materna. Logró publicar un libro de recetas en solitario y desea escribir otro con María.</p>
                    </div>

                </div>

            </div>
        </main>
    );
}

export default NosotrosPage;