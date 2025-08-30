import React from 'react';

interface HeaderProps {
    version: string;
    color: string;
}

export const Header: React.FC<HeaderProps> = ({ version, color }) => {
    // Dynamisch den Bildpfad setzen (lokal vs. GitHub Pages)
    const wappenSrc =
        window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
            ? "/wappen.png"
            : "https://olafgeppert-droid.github.io/Google.AI.Studio_v1.23_inkl.Wappen/wappen.png";

    return (
        <header
            style={{ backgroundColor: color }}
            className="
                text-white shadow-md z-20 print:flex p-2 sm:p-3
                md:sticky md:top-0
                force-relative-on-landscape-phone
            "
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

            {/* Nur für Landscape-Phones: Header soll NICHT sticky sein */}
            <style>{`
                /*
                  Standard (ab md: sticky) gilt weiterhin.
                  Diese Ausnahme greift für Geräte mit Touch (coarse), ohne Hover
                  und kleiner Viewport-Höhe (typisch: iPhone Landscape).
                */
                @media (hover: none) and (pointer: coarse) and (max-height: 500px) {
                    .force-relative-on-landscape-phone {
                        position: relative !important;
                        top: auto !important;
                    }
                }
            `}</style>
        </header>
    );
};
