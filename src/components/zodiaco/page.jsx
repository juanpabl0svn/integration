const Zodiaco = () => {
  return (
    <>
      <video autoPlay muted loop id="bg-video">
        <source src="/video/stars_background.mp4" type="video/mp4" />
      </video>

      <div className="page-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="cd-slider-nav">
                <nav className="navbar navbar-expand-lg" id="tm-nav">
                  <a className="navbar-brand" href="#">
                    Zodi
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-supported-content"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbar-supported-content"
                  >
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      <li className="nav-item selected">
                        <a
                          className="nav-link"
                          aria-current="page"
                          href="#0"
                          data-no="1"
                        >
                          Home
                        </a>
                        <div className="circle"></div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="2">
                          Signos
                        </a>
                        <div className="circle"></div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="3">
                          Horóscopo
                        </a>
                        <div className="circle"></div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid tm-content-container">
        <ul className="cd-hero-slider mb-0 py-5">
          <li className="px-3" data-page-no="1">
            <div className="page-width-1 page-left">
              <div className="d-flex position-relative tm-border-top tm-border-bottom intro-container">
                <div className="intro-left tm-bg-dark">
                  <h2 className="mb-4">¡Bienvenidos a Zodi!</h2>
                  <p className="mb-4" hidden>
                    Entra en el fascinante mundo de la astrología y descubre lo
                    que las estrellas tienen reservado para ti.
                    <br /> En nuestro espacio dedicado al zodíaco, encontrarás
                    información detallada sobre cada signo, su personalidad
                    única y sus compatibilidades con otros signos.{" "}
                  </p>
                  <p className="mb-0"></p>
                </div>

                <div className="circle intro-circle-1"></div>
                <div className="circle intro-circle-2"></div>
                <div className="circle intro-circle-3"></div>
                <div className="circle intro-circle-4"></div>
              </div>
              <div className="text-center">
                <a
                  href="#0"
                  data-page-no="2"
                  className="btn btn-primary tm-intro-btn tm-page-link"
                >
                  Empezar
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <li data-page-no="2">
        <div className="mx-auto position-relative gallery-container">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="mx-auto tm-border-top gallery-slider">
            <figure className="effect-julia item">
              <img src="/img/acuario.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Acuario
                    <br />
                    20 de enero - 18 de febrero
                    <br />
                    Elemento: Aire
                    <br />
                    Piedra: Amatista
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/piscis.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Piscis
                    <br />
                    19 de febrero - 20 de marzo
                    <br />
                    Elemento: Agua
                    <br />
                    Piedra: Aguamarina
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/aries.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Aries
                    <br />
                    21 de marzo - 19 de abril
                    <br />
                    Elemento: Fuego
                    <br />
                    Piedra: Diamante
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/tauro.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Tauro
                    <br />
                    20 de abril - 20 de mayo
                    <br />
                    Elemento: Tierra
                    <br />
                    Piedra: Esmeralda
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/geminis.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Geminis
                    <br />
                    21 de mayo - 20 de junio
                    <br />
                    Elemento: Aire
                    <br />
                    Piedra: Ágata
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/cancer.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Cancer
                    <br />
                    21 de junio - 22 de julio
                    <br />
                    Elemento: Agua
                    <br />
                    Piedra: Perla
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/leo.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Leo
                    <br />
                    23 de julio - 22 de agosto
                    <br />
                    Elemento: Fuego
                    <br />
                    Piedra: Rubí
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/virgo.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Virgo
                    <br />
                    23 de agosto - 22 de septiembre
                    <br />
                    Elemento: Tierra
                    <br />
                    Piedra: Zafiro
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/libra.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Libra
                    <br />
                    23 de septiembre - 22 de octubre
                    <br />
                    Elemento: Aire
                    <br />
                    Piedra: Opalo
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/escorpio.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Escorpio
                    <br />
                    23 de octubre - 21 de noviembre
                    <br />
                    Elemento: Agua
                    <br />
                    Piedra: Topacio
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/sagitario.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Sagitario
                    <br />
                    22 de noviembre - 21 de diciembre
                    <br />
                    Elemento: Fuego
                    <br />
                    Piedra: Turquesa
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-julia item">
              <img src="/img/capricornio.jpeg" alt="Image" />
              <figcaption>
                <div>
                  <p>
                    Capricornio
                    <br />
                    22 de diciembre - 19 de enero
                    <br />
                    Elemento: Tierra
                    <br />
                    Piedra: Granate
                  </p>
                </div>
                <a href="#">View more</a>
              </figcaption>
            </figure>
          </div>
        </div>
      </li>
      <li data-page-no="3" className="px-3">
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Acuario</h2>
            <p className="mb-4">
              Acuario es un signo de aire que se caracteriza por su
              originalidad, independencia y su mente creativa. Las personas
              nacidas bajo este signo suelen ser visionarias, humanitarias y
              valoran la libertad. Son conocidas por su espíritu innovador y su
              capacidad para pensar fuera de la caja.
              <br />
              <br />
              Horóscopo del día para Acuario: Hoy es un buen día para conectarte
              con tus amigos y colegas. Tu naturaleza sociable te ayudará a
              forjar nuevas relaciones y colaboraciones interesantes. No temas
              mostrar tus ideas innovadoras y creativas; podrían abrir nuevas
              puertas.
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Piscis</h2>
            <p className="mb-4">
              Piscis es un signo de agua que se caracteriza por su sensibilidad,
              empatía y creatividad. Las personas nacidas bajo este signo suelen
              ser intuitivas y compasivas. Son soñadoras y tienen una fuerte
              conexión con el mundo emocional y espiritual.
              <br />
              <br />
              Horóscopo del día para Piscis: Hoy es un buen día para prestar
              atención a tus intuiciones. Confía en tus instintos y sigue tus
              sueños. Puede que encuentres inspiración en lugares inesperados.
              Aprovecha tu sensibilidad para conectar con los demás.
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Aries</h2>
            <p className="mb-4">
              Aries es un signo de fuego regido por Marte. Las personas nacidas
              bajo este signo suelen ser enérgicas, valientes y líderes
              naturales. Tienen un espíritu pionero y una pasión por los
              desafíos. A menudo, son impulsivos y disfrutan tomando la
              iniciativa en todo lo que hacen.
              <br />
              <br />
              Horóscopo del día para Aries: "Hoy es un buen día para canalizar
              tu energía en proyectos que te apasionen. Mantén la mente abierta
              a nuevas oportunidades y no temas tomar la iniciativa. Tu
              determinación te llevará lejos."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Tauro</h2>
            <p className="mb-4">
              Tauro es un signo de tierra regido por Venus. Las personas nacidas
              bajo este signo suelen ser prácticas, estables y amantes de la
              belleza. Valoran la seguridad y la comodidad, y tienen un fuerte
              sentido de la lealtad. Son conocidos por su perseverancia y
              determinación.
              <br />
              <br />
              Horóscopo del día para Tauro: "Hoy, disfruta de los placeres
              simples de la vida. Encuentra tiempo para apreciar la belleza que
              te rodea. En cuestiones financieras, la paciencia y la
              planificación serán tus aliados."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Géminis</h2>
            <p className="mb-4">
              Géminis es un signo de aire regido por Mercurio. Las personas
              nacidas bajo este signo suelen ser curiosas, comunicativas y
              adaptables. Tienen una mente ágil y disfrutan de la variedad en la
              vida. Son conocidos por su habilidad para comunicarse y su
              versatilidad.
              <br />
              <br />
              Horóscopo del día para Géminis: "Hoy, tu mente estará llena de
              ideas y tu comunicación será clara. Aprovecha esta energía para
              conectar con los demás y explorar nuevas oportunidades. Mantén la
              mente abierta y abraza el cambio."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Cáncer</h2>
            <p className="mb-4">
              Cáncer es un signo de agua regido por la Luna. Las personas
              nacidas bajo este signo suelen ser emocionales, intuitivas y
              protectoras. Tienen una fuerte conexión con su hogar y su familia,
              y son conocidas por su compasión y sensibilidad.
              <br />
              <br />
              Horóscopo del día para Cáncer: "Hoy es un buen día para fortalecer
              los lazos familiares y cuidar de tus seres queridos. Tu intuición
              te guiará en la toma de decisiones. Dedica tiempo para el
              autocuidado y la reflexión."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Leo</h2>
            <p className="mb-4">
              Leo es un signo de fuego regido por el Sol. Las personas nacidas
              bajo este signo suelen ser carismáticas, seguras de sí mismas y
              llenas de energía. Disfrutan de la atención y tienen una
              naturaleza generosa. Son líderes naturales y amantes del lujo.
              <br />
              <br />
              Horóscopo del día para Leo: "Hoy es un día para brillar y liderar.
              Tu carisma te abrirá puertas y te permitirá destacar en cualquier
              situación. No temas ser el centro de atención, y asegúrate de ser
              generoso con quienes te rodean."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Virgo</h2>
            <p className="mb-4">
              Virgo es un signo de tierra regido por Mercurio. Las personas
              nacidas bajo este signo suelen ser perfeccionistas, detallistas y
              prácticas. Tienen un fuerte sentido del deber y se esfuerzan por
              mejorar las cosas a su alrededor. Son conocidas por su habilidad
              para analizar y organizar.
              <br />
              <br />
              Horóscopo del día para Virgo: "Hoy, tu enfoque en los detalles y
              la organización será una ventaja. Dedica tiempo a resolver
              problemas y mejorar tu entorno. La paciencia y la precisión te
              llevarán lejos."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Libra</h2>
            <p className="mb-4">
              Libra es un signo de aire regido por Venus. Las personas nacidas
              bajo este signo suelen ser amantes de la belleza, equitativas y
              sociales. Tienen una fuerte necesidad de equilibrio y armonía en
              sus relaciones y entorno. Son conocidas por su encanto y
              habilidades sociales.
              <br />
              <br />
              Horóscopo del día para Libra: "Hoy es un buen día para fortalecer
              tus relaciones y buscar el equilibrio en tu vida. Tu encanto
              natural te ayudará a resolver conflictos y llegar a acuerdos.
              Dedica tiempo a actividades creativas."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Escorpio</h2>
            <p className="mb-4">
              Escorpio es un signo de agua regido por Plutón (tradicionalemente
              por Marte). Las personas nacidas bajo este signo suelen ser
              intensas, apasionadas y determinadas. Tienen una naturaleza
              misteriosa y son conocidas por su capacidad de profundizar en las
              emociones y desafíos.
              <br />
              <br />
              Horóscopo del día para Escorpio: "Hoy, tu intensidad y
              determinación te llevarán lejos. Abraza tus pasiones y utiliza tu
              fuerza interior para superar obstáculos. No temas explorar lo
              profundo de tu propia mente y emociones."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Sagitario</h2>
            <p className="mb-4">
              Sagitario es un signo de fuego regido por Júpiter. Las personas
              nacidas bajo este signo suelen ser aventureras, optimistas y
              expansivas. Tienen un espíritu libre y disfrutan de la exploración
              y el aprendizaje. Son conocidas por su entusiasmo y sentido del
              humor.
              <br />
              <br />
              Horóscopo del día para Sagitario: "Hoy es un día para explorar
              nuevas aventuras y aprender algo nuevo. Tu optimismo y entusiasmo
              te llevarán lejos. Mantén una mente abierta y busca oportunidades
              de crecimiento."
            </p>
          </div>
        </div>
        <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
          <div className="circle intro-circle-1"></div>
          <div className="circle intro-circle-2"></div>
          <div className="circle intro-circle-3"></div>
          <div className="circle intro-circle-4"></div>
          <div className="tm-bg-dark content-pad">
            <h2 className="mb-4">Capricornio</h2>
            <p className="mb-4">
              Capricornio es un signo de tierra regido por Saturno. Las personas
              nacidas bajo este signo suelen ser ambiciosas, responsables y
              disciplinadas. Tienen una fuerte ética de trabajo y tienden a ser
              líderes en su campo. Son conocidas por su enfoque en la estructura
              y la planificación.
              <br />
              <br />
              Horóscopo del día para Capricornio: "Hoy es un buen día para
              avanzar en tus objetivos a largo plazo. Tu enfoque y determinación
              te ayudarán a superar cualquier desafío. Aprovecha tu habilidad
              para la organización y la toma de decisiones."
            </p>
          </div>
        </div>
      </li>
      <li data-page-no="4">
        <div className="mx-auto page-width-2">
          <div className="row">
            <div className="col-md-6 me-0 ms-auto">
              <h2 className="mb-4">Contact Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 tm-contact-left">
              <form action="#" method="POST" className="contact-form">
                <div className="input-group tm-mb-30">
                  <input
                    name="name"
                    type="text"
                    className="form-control rounded-0 border-top-0 border-end-0 border-start-0"
                    placeholder="Name"
                  />
                </div>
                <div className="input-group tm-mb-30">
                  <input
                    name="email"
                    type="text"
                    className="form-control rounded-0 border-top-0 border-end-0 border-start-0"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group tm-mb-30">
                  <textarea
                    rows="5"
                    name="message"
                    className="textarea form-control rounded-0 border-top-0 border-end-0 border-start-0"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="input-group justify-content-end">
                  <input
                    type="submit"
                    className="btn btn-primary tm-btn-pad-2"
                    value="Send"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 tm-contact-right">
              <p className="mb-4">
                Integer erat turpis, vestibulum pellentesque aliquam ultricies,
                finibus nec dui. Donec bibendum enim mi, at tristique leo
                feugiat at.
              </p>
              <div>
                Email:{" "}
                <a href="mailto:info@company.com" className="tm-link-white">
                  info@company.com
                </a>
              </div>
              <div className="tm-mb-45">
                Tel:{" "}
                <a href="tel:0100200340" className="tm-link-white">
                  010-020-0340
                </a>
              </div>
              <div className="map-outer">
                <div className="gmap-canvas">
                  <iframe
                    width="100%"
                    height="400"
                    id="gmap-canvas"
                    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <div className="container-fluid">
        <footer className="row mx-auto tm-footer"></footer>
      </div>
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <script src="//js/jquery-3.5.1.min.js"></script>
      <script src="//js/bootstrap.min.js"></script>
      <script src="//js/slick.js"></script>
      <script src="//js/templatemo-script.js"></script>
    </>
  );
};

export default Zodiaco;
