import React from 'react';

const technicalData = [
    ['Panel Colour', 'Light Ivory (RAL 1015)'],
    ['Panel Strength', 'Hydrostatic Pressure x 4 to x 6 (Safety Factor) on maximum anticipated load.'],
    ['Wind Velocity', '60 m/sec'],
    ['Roof Load', '120 Kgf/m²'],
    ['Water Temperature', '65°C (Max)'],
    ['Specific Gravity', '1.75'],
    ['Glass Content', '33%'],
    ['Tensile Strength', '84 MPa'],
    ['Bending Strength', '171 MPa'],
    ['Impact Strength', '80 Kgf.cm / cm²'],
    ['Compressive Strength', '160 MPa'],
    ['Shear Strength', '100 MPa'],
    ['Barcol Hardness', '64'],
    ['Flame Spread (FSI)', '60'],
    ['Thermal Conductivity', '0.036 W/m²·K'],
    ['Heat Transmission Coefficient', '0.97 W/m²·K'],
    ['Thermal Expansion', '1.66 x 10⁻⁵/°C'],
    ['Water Absorption', 'Less than 0.1%'],
    ['Light Transmission', '0.00%'],
    ['Fire Rating Class', 'B / 2'],
];

const features = [
    {
        title: 'Sanitation',
        description:
            'SOVISY SMC insulated panel tanks meet the Food Sanitation Act. Bacteria or germ formation and growth are prevented by blocking sunlight transmission completely.',
    },
    {
        title: 'Excellent durability',
        description:
            'Due to external supporting system, no metal parts are in touch with water, which gives more life.',
    },
    {
        title: 'Absolute water tightness',
        description:
            'The foam type gasket with excellent elasticity and resilience assures perfect water tightness.',
    },
    {
        title: 'Versatile capacity design',
        description:
            'Various panels make installation of tanks possible in any dimensions or capacities.',
    },
    {
        title: 'Easy installation',
        description:
            'The installation of non-insulated panel tanks is user-friendly even in restricted areas by using standardized bolting type panels.',
    },
    {
        title: 'Outstanding insulation',
        description:
            'Pre-insulated panels are also available. PU foam insulated panels minimize water temperature change under extreme environmental conditions.',
    },
];

const InsulatedPanelFeatures = () => {
    return (
        <>
            {/* Section: Technical Characteristics + Features */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Table */}
                    <div>
                        <h3 className="text-xl font-bold text-white bg-blue-900 px-4 py-2 inline-block mb-4">
                            TECHNICAL CHARACTERISTICS
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <tbody>
                                    {technicalData.map(([label, value], idx) => (
                                        <tr
                                            key={idx}
                                            className={idx % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
                                        >
                                            <td className="p-3 font-medium text-gray-800 w-1/2 border border-gray-200">
                                                {label}
                                            </td>
                                            <td className="p-3 text-gray-700 border border-gray-200">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Features List */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-6">
                            FEATURES OF{' '}
                            <span className="text-blue-700 block text-3xl font-extrabold">
                                Insulated Panel Tanks
                            </span>
                        </h3>
                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <div key={idx}>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-700 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: CTA */}
            <section className="bg-[#000A8B] py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-white text-2xl md:text-3xl font-bold text-center lg:text-left mb-6 lg:mb-0">
                        Need to know more about<br className="hidden md:block" />
                        Sovisy SMC/GRP Insulated Panel Tanks
                    </h2>
                    <button className="bg-[#FF004D] hover:bg-[#e60045] transition text-white font-semibold px-8 py-3 rounded shadow-md">
                        → Contact now
                    </button>
                </div>
            </section>
        </>
    );
};

export default InsulatedPanelFeatures;
