import JuventudPhoto from "../photos/Juventud.jpg";
import RazonPhoto from "../photos/Razon.jpg";
import PlanetaPhoto from "../photos/Planeta.jpg";
import FePhoto from "../photos/Niños.jpg";
import NosotrosPhoto from "../photos/Nosotros.jpg";
const About = () => {
    return (
        <div id="about" className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Nosotros</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Somos una fundación con valores católicos y sin ánimos de lucro, cuya misión es contribuir con la formación integral del ser humano a nivel biológico, psicológico, religioso y trascendental, a través de la promoción humana para alcanzar una forma de vida ideal, involucrando las necesidades espirituales, morales y materiales. Queremos reunir a voluntarios que quieran colaborar en beneficio de las personas marginadas, y juntos construir una sociedad mejor</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full rounded-lg" src={NosotrosPhoto} alt="Grupo de niños sembrando un árbol" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">¿Qué hacemos?</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Durante estos años hemos colaborado con el cantón de Desamparados y con las comunidades cercanas: Aserrí, Alajuelita, San Sebastián, Los Guido, San Juan de Dios, San Rafael Abajo, entre otros. Desarrollamos un conjunto de programas que intentan unir juventud, deporte, ambiente, familia y educación</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-lg" src={JuventudPhoto} alt="Imagen de un joven" />
                            <img className="md:hidden block rounded-lg" src={JuventudPhoto} alt="Imagen de un joven" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Juventud</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-lg" src={PlanetaPhoto}  alt="Jóvenes preparando la tierra para sembrar árboles" />
                            <img className="md:hidden block rounded-lg" src={PlanetaPhoto} alt="Jóvenes preparando la tierra para sembrar árboles" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Planeta</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-lg" src={FePhoto} alt="Grupo de niños haciendo deporte" />
                            <img className="md:hidden block rounded-lg" src={FePhoto} alt="Grupo de niños haciendo deporte" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Fé</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden rounded-lg" src={RazonPhoto} alt="Jóvenes estudiando" />
                            <img className="md:hidden block rounded-lg" src={RazonPhoto} alt="Jóvenes estudiando" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Razón</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
