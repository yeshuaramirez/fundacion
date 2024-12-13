import Hero from "../components/Hero";
import About from "../components/About";
import Stat from "../components/Stat";
import ProjectCard from "../components/ProjectCard";
import DonationSection from "../components/DonationSection";
import Contact from "../components/Contact";

const MainPage = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Stat></Stat>
      <ProjectCard
        photo="https://www.smartick.es/blog/wp-content/uploads/foto-verano-para-blog.jpg"
        title="Cara a Cara"
        description="Esta es una descripcion generica para la prueba del componete de tarjeta horizontal. Posteriormente debe actualizarse, con el fin de que refleje la realidad de los proyectos que la fundacion de la Divina Misericordia lleva a cabo en la actualidad."
      />

      <ProjectCard
        photo="https://a.files.bbci.co.uk/worldservice/live/assets/images/2014/10/06/141006122224_deportes_hijos_624x351_thinkstock.jpg"
        title="Escuela Deportiva Villa Real"
        description="Esta es una descripcion generica para la prueba del componete de tarjeta horizontal. Posteriormente debe actualizarse, con el fin de que refleje la realidad de los proyectos que la fundacion de la Divina Misericordia lleva a cabo en la actualidad."
      />

      <ProjectCard
        photo="https://www.smartick.es/blog/wp-content/uploads/foto-verano-para-blog.jpg"
        title="En Tus Manos"
        description="Esta es una descripcion generica para la prueba del componete de tarjeta horizontal. Posteriormente debe actualizarse, con el fin de que refleje la realidad de los proyectos que la fundacion de la Divina Misericordia lleva a cabo en la actualidad."
      />

      <ProjectCard
        photo="https://www.smartick.es/blog/wp-content/uploads/foto-verano-para-blog.jpg"
        title="Zona Verde"
        description="Esta es una descripcion generica para la prueba del componete de tarjeta horizontal. Posteriormente debe actualizarse, con el fin de que refleje la realidad de los proyectos que la fundacion de la Divina Misericordia lleva a cabo en la actualidad."
      />
      <DonationSection/>
      <Contact/>
    </div>
  );
};

export default MainPage;
