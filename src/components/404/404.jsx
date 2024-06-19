import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">404</h1>
            <p className="text-gray-600">¡Ups! Página no encontrada.</p>
        </div>
    );
};

export { NotFound as default };