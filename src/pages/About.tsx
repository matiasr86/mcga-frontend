const aboutUs = () => {
  return (
    <>
      <div className="bg-dark text-white m-5">
        <h2>Sobre Nosotros..</h2>
        <hr />
        <div className="row">
          <div className="col-12 mb-4">
            <h3>¿Quiénes Somos?</h3>
            <p className="justified-text">
              ¡Bienvenido a MCGA Librería! un rincón literario donde las historias cobran vida. En el corazón de nuestra librería, te invitamos a explorar mundos imaginarios, descubrir conocimientos y sumergirte en la magia de las palabras impresas.
              Nos apasiona fomentar el amor por la lectura y compartir la fascinación por los libros. Cada título que seleccionamos está cuidadosamente elegido para inspirar, educar y entretener. Somos más que una librería; somos un refugio para los amantes de la lectura, un lugar donde las páginas se convierten en puertas hacia nuevas aventuras.
            </p>
          </div>
          <div className="col-12 mb-4">
            <h3>¿Dónde Puedes Encontrarnos?</h3>
            <p className="justified-text">
              Nuestra librería física se encuentra en San Juan 445 - Rosario, un espacio acogedor donde puedes perder la noción del tiempo entre estanterías repletas de historias cautivadoras. Además, explorar nuestro catálogo en línea te permite sumergirte en la experiencia desde la comodidad de tu hogar.
              Síguenos en las redes sociales y únete a nuestra comunidad de lectores apasionados.
            </p>
          </div>
          <div className="col-12 text-center">
            <img
              className=""
              src="../src/assets/map.jpg"
              alt="mapa librería"
              style={{ width: '60%', height: 'auto' }}
            />
            <p className="justified-text mt-4">
              En MCGA Librería, estamos comprometidos con la difusión de la magia de la lectura. ¡Descubre el placer de hojear, explorar y perderse en un buen libro con nosotros!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
