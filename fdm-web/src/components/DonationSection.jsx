const DonationSection = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Apoya Nuestra Fundación
        </h2>
        <p className="text-gray-600 text-base lg:text-lg mb-8">
          Tus donaciones nos ayudan a seguir haciendo la diferencia en nuestras comunidades.
          Elige tu método de donación preferido:
        </p>

        {/* Métodos de donación */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Opción SINPE Móvil */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Donar por SINPE Móvil
            </h3>
            <p className="text-gray-600 text-base">
              Realiza tu donación al número: 
              <span className="block text-gray-800 font-bold text-lg mt-2">
                2222-2222
              </span>
            </p>
          </div>

          {/* Opción PayPal */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Donar por PayPal
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Haz tu donación de manera segura con PayPal.
            </p>
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Donar con PayPal
            </a>
          </div>

          {/* Opción Cuenta Corriente */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Donar por Cuenta Corriente
            </h3>
            <p className="text-gray-600 text-base">
              Dona en la cuenta corriente del BCR:
              <span className="block text-gray-800 font-bold text-lg mt-2">
                111111111111111111
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
