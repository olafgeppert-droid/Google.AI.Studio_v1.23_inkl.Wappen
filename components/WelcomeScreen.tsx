

import React from 'react';

interface WelcomeScreenProps {
    onShowDatabase: () => void;
    onShowInfo: () => void;
    version: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onShowDatabase, onShowInfo, version }) => {
    // Dynamischer Bildpfad für Wappen
    const wappenSrc =
        window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
            ? "/wappen.png"
            : "https://olafgeppert-droid.github.io/Google.AI.Studio_v1.23_inkl.Wappen/wappen.png";

    return (
        <div
            className="min-h-screen w-full flex items-center justify-center p-4 relative"
            style={{
                backgroundImage: `url(${wappenSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Halbtransparente Overlay-Farbe für bessere Lesbarkeit */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-900/70 to-blue-900/70"></div>

            {/* Content-Box */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-4xl w-full text-center animate-fade-in border-4 border-yellow-300">
                <img
                    src={wappenSrc}
                    alt="Familienwappen"
                    className="mx-auto h-40 w-40 rounded-full border-4 border-white shadow-lg -mt-28 mb-4 drop-shadow-lg"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
                <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
                    Willkommen im Datenbankprogramm zur Verwaltung der Wappenringe der Familie GEPPERT
                </h1>
                <p className="text-gray-500 mb-2">Softwareversion v{version}</p>
                <p className="text-gray-500 mb-6">Copyright by Olaf Geppert</p>

                <div className="text-sm text-gray-800 text-justify bg-gray-200 p-4 rounded-lg border border-gray-300 mb-8">
                    Dieses Programm dient der Dokumentation der ausgegeben Wappenringe der Familie. 
                    Es ermittelt automatisch die korrekte Innengravur eines Ringes in Abhängigkeit 
                    der Abstammungslinie, unabhängig davon, ob er neu angeschafft oder vererbt wurde. 
                    Ziel ist es, die Historie der Ringe für folgende Generationen nachvollziehbar zu machen. 
                    Dieses Programm ersetzt keine Familienchronik oder genealogische Stammbaum Dokumentation.
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={onShowInfo}
                        className="bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                    >
                        WAPPEN-INFO ANZEIGEN
                    </button>
                    <button
                        onClick={onShowDatabase}
                        className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
                    >
                        ZUR DATENBANK
                    </button>
                </div>
            </div>
        </div>
    );
};
