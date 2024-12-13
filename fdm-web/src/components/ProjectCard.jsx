const ProjectCard = ({ photo, title, description }) => {
    return (
      <div className="2xl:container 2xl:mx-auto lg:py-6 lg:px-20 md:py-4 md:px-6 py-3 px-4">
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-101 hover:shadow-2xl max-w-full">
          {/* Imagen */}
          <div className="flex-shrink-0 w-full lg:w-1/3 h-48 lg:h-auto">
            <img
              src={photo}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Contenido */}
          <div className="p-6 flex flex-col justify-between w-full lg:w-2/3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
              {title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  