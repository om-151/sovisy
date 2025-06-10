import React from 'react';
import InsulatedPanelFeatures from '../InsulatedPanelFeatures/InsulatedPanelFeatures';

const TankSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                        SMC/GRP
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">
                        NON-INSULATED PANEL TANKS
                    </h3>
                    <p className="text-gray-700 text-base mb-4 leading-relaxed">
                        Supplying and placing on position of ISI Marked SOVISY SMC insulated & non insulated panel
                        tanks for water storage as confirming with IS 14399: 1996...
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed">
                        The tanks to be leak proof after installation and having following specifications. Standard Non
                        Insulated SMC Panels Hot pressed moulded UV stabilised made from Sheet Moulding Compounds (SMC)...
                    </p>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://sovisy.com/wp-content/uploads/2024/03/Technical1-copy.webp"
                        alt="SMC GRP Non-Insulated Tank"
                        className="w-full max-w-md object-contain"
                    />
                </div>
            </div>

            {/* Table Section */}
            <div className="max-w-7xl mx-auto px-6 mt-16 overflow-x-auto">
                <h4 className="text-xl font-bold text-gray-800 mb-4">SMC PANELS: Made by Hot Pressed Process Moulded</h4>
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-blue-900 text-white text-left">
                            <th className="p-3">Component</th>
                            <th className="p-3">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-blue-50">
                        <tr>
                            <td className="p-3 font-medium">Bottom Panel</td>
                            <td className="p-3">SMC Panel - 1 x 1 mtr. Convex Shape</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 font-medium">Drain Panel & Outlet Panels</td>
                            <td className="p-3">SMC Panel - 1 x 1 mtr. Special design for complete drain</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Side Panel</td>
                            <td className="p-3">SMC Panel - 1 x 2 mtr, 1 x 1 mtr, 1 x 0.5 mtr</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 font-medium">Ceiling Panel</td>
                            <td className="p-3">SMC Panel - 1 x 1 mtr textured type for anti-skidding design</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Manhole</td>
                            <td className="p-3">SMC Panel - 1 x 1 mtr with lockable lid dia 700mm</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="text-xl font-bold text-gray-800 mt-10 mb-4">SPECIAL ACCESSORIES</h4>
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-blue-900 text-white text-left">
                            <th className="p-3">Accessory</th>
                            <th className="p-3">Specification</th>
                        </tr>
                    </thead>
                    <tbody className="bg-blue-50">
                        <tr>
                            <td className="p-3 font-medium">Corner Frame</td>
                            <td className="p-3">HDG Steel Vertical Corner Angle</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 font-medium">Sealing Tape - Non Toxic</td>
                            <td className="p-3">3mm thick, high resistance (Make: Norseal by Saint Gobain, USA)</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Steel Bolts for Panel Joints</td>
                            <td className="p-3">HDG Steel Nut-Bolt - 8.8 Grade M12 x 40mm</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 font-medium">Air Vent - Mosquito proof</td>
                            <td className="p-3">Mosquito proof mesh Air Vent 100 dia</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">External Ladder - 1 each</td>
                            <td className="p-3">Galvanised with fixing arrangement outside</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 font-medium">Roof Support Pipe</td>
                            <td className="p-3">FRP Internal Ceiling Panel support</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Inlet/Outlet/Overflow/Drain</td>
                            <td className="p-3">G.I. Flanges with 9" Long Nipple 50NB each</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 font-medium">External Reinforcement</td>
                            <td className="p-3">
                                ISI marked C channel every 1m (tied with top external tie rods) - for tanks 1m height
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Internal Roof Supports</td>
                            <td className="p-3">FRP Hollow Square section 5mm thick</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 font-medium">Airvent</td>
                            <td className="p-3">Airvent - Mosquito proof mesh insect proof - 100mm</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Water Level Indicator</td>
                            <td className="p-3">Aluminium body water level indicator with clear tube type</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="p-3 font-medium">Ladders</td>
                            <td className="p-3">External Ladders with all mounting arrangement.</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Connection fixing</td>
                            <td className="p-3">Inlet, Outlet, Overflow & Drain - 50 NB</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 mt-20">

                {/* Left Content */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                        SMC/GRP
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">
                        INSULATED PANEL TANKS
                    </h3>
                    <p className="text-gray-700 text-base mb-4 leading-relaxed">
                        GRP panels are insulated by rigid polyurethane foam of density 40kg/m3 in order to reduce the thermal transmission in extreme climates. The thickness of the insulation foam is 25mm protected by 2mm GPP cover. (Only manufactured by SOVISY in the world) All 6 sides' insulation (roof, bottom & sides) is also available to reach the lowest thermal transmission.
                    </p>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://sovisy.com/wp-content/uploads/2024/03/Insulation1.png.webp"
                        alt="SMC GRP Non-Insulated Tank"
                        className="w-full max-w-md object-contain"
                    />
                </div>
            </div>
            <InsulatedPanelFeatures />
        </section>
    );
};

export default TankSection;
