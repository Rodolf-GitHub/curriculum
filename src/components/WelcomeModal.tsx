import React from 'react';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¡Bienvenido a tu Curriculum Vitae! 🎉
          </h2>
          
          <div className="text-gray-600 mb-6 space-y-4">
            <p className="text-lg">
              Has creado tu curriculum vitae personal con React y Tailwind CSS.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg text-left">
              <h3 className="font-semibold text-blue-800 mb-2">¿Qué puedes hacer?</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• 📝 <strong>Editar</strong> toda tu información personal</li>
                <li>• 📷 <strong>Subir imágenes</strong> de perfil y proyectos</li>
                <li>• 💼 <strong>Agregar</strong> experiencia laboral y educación</li>
                <li>• 🛠️ <strong>Personalizar</strong> habilidades y proyectos</li>
                <li>• 📤 <strong>Exportar</strong> a PDF e imagen</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-left">
              <h3 className="font-semibold text-green-800 mb-2">¡Tus datos se guardan automáticamente!</h3>
              <p className="text-green-700 text-sm">
                Todo lo que edites se guardará en tu navegador, así que no perderás tu trabajo.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ¡Empezar a Editar!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal; 