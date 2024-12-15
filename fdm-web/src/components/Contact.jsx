import React, { useState } from "react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla la visibilidad del modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí mostramos el modal en lugar de enviar el formulario
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="contact" className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-8">
        {/* Información de contacto */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Contáctanos</h2>
          <p className="text-gray-600 text-base lg:text-lg mb-6">
            ¡Habla con nosotros! Usa el formulario o contáctanos directamente a través de nuestras redes sociales.
          </p>

          <div className="space-y-4">
            <p className="text-gray-600 text-base">
              <span className="font-semibold text-gray-800">Teléfono:</span> (+506) 8744-8987
            </p>
            <p className="text-gray-600 text-base">
              <span className="font-semibold text-gray-800">Correo:</span> deladivinamisericordia.cr@gmail.com
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleInputChange}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Lo sentimos, por el momento no es posible realizar el envío de su mensaje.
            </h3>
            <p className="text-gray-600 mb-4">
              Comunícate con nosotros directamente a través de nuestro correo, número telefónico o redes sociales.
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
