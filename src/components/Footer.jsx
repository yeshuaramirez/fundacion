import logo from "../../src/assets/FDM-logo.svg"
const Footer = () => {
    return (
      <footer className="bg-gray-100 border-t py-6">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2">
          <img src={logo} alt="Logo de Fundación de la Divina Misericordia" className="w-20 h-20" />
        </div>
  
          {/* Íconos de redes sociales */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.729 0-1.325.597-1.325 1.326v21.348c0 .729.596 1.326 1.325 1.326h11.49v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.244l-1.918.001c-1.504 0-1.794.716-1.794 1.763v2.309h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.325-.597 1.325-1.326v-21.348c0-.729-.596-1.326-1.325-1.326z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.607.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.607 1.308-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.607-.058-1.265-.069-1.645-.069-4.849s.011-3.584.069-4.849c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.607-1.308 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.67.014-4.947.072-1.523.067-2.885.396-3.95 1.462-1.065 1.065-1.394 2.427-1.462 3.95-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.067 1.523.396 2.885 1.462 3.95 1.065 1.065 2.427 1.394 3.95 1.462 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.523-.067 2.885-.396 3.95-1.462 1.065-1.065 1.394-2.427 1.462-3.95.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.067-1.523-.396-2.885-1.462-3.95-1.065-1.065-2.427-1.394-3.95-1.462-1.277-.058-1.688-.072-4.947-.072z" />
                <circle cx="12" cy="12" r="3.5" />
                <path d="M18.406 4.594c.79 0 1.594-.804 1.594-1.594s-.804-1.594-1.594-1.594-1.594.804-1.594 1.594.804 1.594 1.594 1.594z" />
              </svg>
            </a>
            <a
              href="mailto:deladivinamisericordia.cr@gmail.com"
              className="text-gray-600 hover:text-red-500 transition"
              aria-label="Correo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l11.985-8.713-23.97-.001z" />
                <path d="M12 13.286l-12-8.572v16.286h24v-16.286z" />
              </svg>
            </a>
          </div>

          {/* Derechos reservados */}
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  