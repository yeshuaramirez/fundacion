import React from "react";

const Contact = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-8">
        {/* Información de contacto */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Contáctanos</h2>
          <p className="text-gray-600 text-base lg:text-lg mb-6">
            Estamos aquí para ayudarte. Usa el formulario o contáctanos directamente a través de nuestras redes sociales.
          </p>

          <div className="space-y-4">
            <p className="text-gray-600 text-base">
              <span className="font-semibold text-gray-800">Teléfono:</span> 2222-2222
            </p>
            <p className="text-gray-600 text-base">
              <span className="font-semibold text-gray-800">Correo:</span> info@fundacion.com
            </p>
          </div>

          <div className="flex space-x-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-2xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Envíanos un mensaje</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
            <textarea
              placeholder="Tu mensaje"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
