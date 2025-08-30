import React from 'react';

interface HeaderProps {
    version: string;
    color: string;
}

export const Header: React.FC<HeaderProps> = ({ version, color }) => {
    return (
        <header 
            style={{ backgroundColor: color }} 
            className="text-white shadow-md relative z-20 print:hidden p-2 sm:p-3"
        >
            <div className="flex justify-center items-center w-full gap-12">
                {/* Linkes Wappen */}
                <img 
                    src="/wappen.png" 
                    alt="Familienwappen links" 
                    className="h-12 sm:h-16 w-auto"
                />

                {/* Überschrift */}
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
                    src="/wappen.png" 
                    alt="Familienwappen rechts" 
                    className="h-12 sm:h-16 w-auto"
                />
            </div>
        </header>
    );
};
