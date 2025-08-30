import React from 'react';

interface HeaderProps {
    version: string;
    color: string;
}

export const Header: React.FC<HeaderProps> = ({ version, color }) => {
    // Dynamisch den Bildpfad setzen
    const wappenSrc =
        window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
            ? "/wappen.png"
            : "https://olafgeppert-droid.github.io/Google.AI.Studio_v1.23_inkl.Wappen/wappen.png";

    return (
        <header
            style={{ backgroundColor: color }}
            className="text-white shadow-md relative z-20 print:hidden p-2 sm:p-3"
        >
            <div className="flex justify-center items-center w-full gap-4 sm:gap-8">
                {/* Linkes Wappen */}
                <img
                    src={wappenSrc}
                    alt="Familienwappen"
                    className="h-16 sm:h-20 md:h-24 w-auto"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />

                {/* Überschrift + Version */}
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Wappenringe der Familie GEPPERT
                    </h1>
                    <span className="text-sm sm:text-base text-white/80 -mt-1 block">
                        Version {version}
                    </span>
                </div>

                {/* Rechtes Wappen */}
                <img
                    src={wappenSrc}
                    alt="Familienwappen"
                    className="h-16 sm:h-20 md:h-24 w-auto"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
            </div>
        </header>
    );
};
