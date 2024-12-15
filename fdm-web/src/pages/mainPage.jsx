import Hero from "../components/Hero";
import About from "../components/About";
import Stat from "../components/Stat";
import ProjectCard from "../components/ProjectCard";
import DonationSection from "../components/DonationSection";
import Contact from "../components/Contact";
import ZonaVerdePhoto from "../photos/ZonaVerde.jpg";
import EscuelaDeportivaPhoto from "../photos/EscuelaDeportivaVillaReal.jpg";
import CaraACaraPhoto from "../photos/CaraACara.jpg";
import EnTusManosPhoto from "../photos/EnTusManos.png";

const MainPage = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Stat></Stat>
      <div id="cara-a-cara">
        <ProjectCard
          photo={CaraACaraPhoto}
          title="Cara a Cara"
          description="Esta es una descripcion generica para la prueba del componete de tarjeta horizontal. Posteriormente debe actualizarse, con el fin de que refleje la realidad de los proyectos que la fundacion de la Divina Misericordia lleva a cabo en la actualidad."
        />
      </div>
      <div id="escuela-deportiva-villa-real">
        <ProjectCard
          photo={EscuelaDeportivaPhoto}
          title="Escuela Deportiva Villa Real"
          description="Esta es una descripcion generica para la prueba del componete de tarjeta horizontal. Posteriormente debe actualizarse, con el fin de que refleje la realidad de los proyectos que la fundacion de la Divina Misericordia lleva a cabo en la actualidad."
        />
      </div>
      <div id="en-tus-manos">
        <ProjectCard
          photo={EnTusManosPhoto}
          title="En Tus Manos"
          description="Esta es una descripcion generica para la prueba del componete de tarjeta horizontal. Posteriormente debe actualizarse, con el fin de que refleje la realidad de los proyectos que la fundacion de la Divina Misericordia lleva a cabo en la actualidad."
        />
      </div>
      <div id="zona-verde">
        <ProjectCard
          photo={ZonaVerdePhoto}
          title="Zona Verde"
          description="Esta es una descripcion generica para la prueba del componete de tarjeta horizontal. Posteriormente debe actualizarse, con el fin de que refleje la realidad de los proyectos que la fundacion de la Divina Misericordia lleva a cabo en la actualidad."
        />
      </div>
      <DonationSection />
      <Contact />
    </div>
  );
};

export default MainPage;
