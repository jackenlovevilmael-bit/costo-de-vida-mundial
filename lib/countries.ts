export interface Country {
  slug: string;
  name: string;
  capital: string;
  continent: string;
  currency: string;
  language: string;
  population: string;
  costOfLivingIndex: number; // Relative to New York = 100
  minSalary: number; // EUR equivalent monthly net approx
  avgSalary: number; // EUR equivalent monthly net
  rent1BedCenter: number; // EUR / month
  rent1BedOutside: number;
  mealInexpensive: number; // EUR
  monthlyGroceries: number; // EUR for single person
  monthlyTransport: number; // EUR public transport pass
  advantages: string[];
  disadvantages: string[];
  faqs: { question: string; answer: string }[];
  summary: string; // Short SEO description
}

export const countries: Country[] = [
  {
    slug: "espana",
    name: "España",
    capital: "Madrid",
    continent: "Europa",
    currency: "Euro (€)",
    language: "Español",
    population: "47.9 millones",
    costOfLivingIndex: 54,
    minSalary: 1134,
    avgSalary: 2150,
    rent1BedCenter: 980,
    rent1BedOutside: 780,
    mealInexpensive: 13,
    monthlyGroceries: 280,
    monthlyTransport: 42,
    advantages: [
      "Excelente calidad de vida y sanidad pública universal",
      "Clima mediterráneo privilegiado la mayor parte del año",
      "Rica cultura, gastronomía y vida social vibrante",
      "Buena conectividad y vuelos baratos dentro de Europa",
      "Costos razonables fuera de las grandes capitales"
    ],
    disadvantages: [
      "Salarios relativamente bajos comparados con Europa del Norte",
      "Alta tasa de desempleo juvenil en algunas regiones",
      "Burocracia administrativa lenta en algunos trámites",
      "Calor extremo en verano en el sur y centro",
      "Mercado laboral con alta temporalidad"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir cómodamente en España como pareja?",
        answer: "Una pareja puede vivir cómodamente en una ciudad mediana con 2.800-3.500 € al mes incluyendo alquiler, comida, transporte y ocio. En Madrid o Barcelona el presupuesto sube a 3.800-4.500 €."
      },
      {
        question: "¿Es fácil encontrar trabajo en España siendo extranjero?",
        answer: "Depende del sector. Tecnología, turismo, enseñanza de idiomas y atención sanitaria tienen buena demanda. Es recomendable tener nivel alto de español y, para trabajos cualificados, homologar títulos."
      },
      {
        question: "¿Cuál es el salario mínimo en España en 2026?",
        answer: "El Salario Mínimo Interprofesional (SMI) en 2025-2026 está en 1.134 € mensuales en 14 pagas (aprox. 1.134 € netos). Muchas empresas pagan por encima de este mínimo."
      },
      {
        question: "¿Qué ciudades de España tienen mejor relación calidad-precio?",
        answer: "Valencia, Málaga, Sevilla, Bilbao y Zaragoza ofrecen excelente equilibrio entre costo de vida, oportunidades laborales y calidad de vida. Madrid y Barcelona son más caras pero tienen más oportunidades."
      },
      {
        question: "¿Los impuestos en España son altos para residentes extranjeros?",
        answer: "España tiene un sistema fiscal progresivo. Los residentes fiscales pagan IRPF desde el 19% hasta el 47%. Existe régimen especial para impatriados (nómadas digitales y trabajadores cualificados) con ventajas fiscales los primeros años."
      }
    ],
    summary: "España ofrece una de las mejores relaciones calidad de vida-precio de Europa Occidental. Ideal para familias y jubilados que buscan clima, cultura y sanidad excelente."
  },
  {
    slug: "japon",
    name: "Japón",
    capital: "Tokio",
    continent: "Asia",
    currency: "Yen Japonés (¥)",
    language: "Japonés",
    population: "124.5 millones",
    costOfLivingIndex: 82,
    minSalary: 1420,
    avgSalary: 2650,
    rent1BedCenter: 1250,
    rent1BedOutside: 820,
    mealInexpensive: 7,
    monthlyGroceries: 320,
    monthlyTransport: 85,
    advantages: [
      "Uno de los países más seguros del mundo",
      "Excelente transporte público, puntualidad y eficiencia",
      "Alta calidad tecnológica y servicios públicos",
      "Gastronomía excepcional y cultura única milenaria",
      "Bajo índice de criminalidad y gran respeto cívico"
    ],
    disadvantages: [
      "Costo de vida muy alto en Tokio y grandes ciudades",
      "Barrera del idioma muy presente fuera del turismo",
      "Jornada laboral intensa y cultura de overtime",
      "Terremotos frecuentes y preparación constante",
      "Sociedad envejecida con menos oportunidades para extranjeros"
    ],
    faqs: [
      {
        question: "¿Es caro vivir en Japón como extranjero?",
        answer: "Tokio es una de las ciudades más caras del mundo. Una persona sola necesita mínimo 2.200-2.800 USD/mes. Fuera de las grandes ciudades como Osaka o Fukuoka los costos bajan significativamente."
      },
      {
        question: "¿Se puede vivir en Japón sin hablar japonés?",
        answer: "En Tokio y para trabajos en multinacionales es posible, pero la vida diaria, trámites y relaciones sociales son mucho más fáciles con japonés intermedio-avanzado. La barrera del idioma sigue siendo real."
      },
      {
        question: "¿Cuál es el salario promedio en Japón para profesionales extranjeros?",
        answer: "Profesionales cualificados en tecnología, finanzas o ingeniería pueden ganar entre 4-7 millones de yenes anuales (aprox. 2.400-4.200 €/mes netos). El salario inicial para recién graduados suele ser más bajo."
      },
      {
        question: "¿Qué ciudades japonesas tienen mejor costo de vida?",
        answer: "Fukuoka, Sapporo, Hiroshima y Sendai ofrecen mejor equilibrio. Tokio y Yokohama son significativamente más caras en vivienda y transporte."
      },
      {
        question: "¿Japón es un buen destino para familias extranjeras?",
        answer: "Sí, especialmente en áreas suburbanas. Las escuelas públicas son excelentes, la seguridad es altísima y los servicios para niños están muy bien organizados. Muchos colegios internacionales en Tokio y Osaka."
      }
    ],
    summary: "Japón combina seguridad, eficiencia y cultura única. Ideal para profesionales de tecnología y amantes de la cultura asiática que aceptan altos costos en las grandes ciudades."
  },
  {
    slug: "alemania",
    name: "Alemania",
    capital: "Berlín",
    continent: "Europa",
    currency: "Euro (€)",
    language: "Alemán",
    population: "84.1 millones",
    costOfLivingIndex: 62,
    minSalary: 1580,
    avgSalary: 2850,
    rent1BedCenter: 920,
    rent1BedOutside: 720,
    mealInexpensive: 12,
    monthlyGroceries: 260,
    monthlyTransport: 58,
    advantages: [
      "Salarios altos y fuerte economía industrial",
      "Excelente equilibrio trabajo-vida y 30+ días de vacaciones",
      "Sistema de salud de los mejores del mundo",
      "Excelente transporte público y calidad de infraestructura",
      "Muchas oportunidades en ingeniería, IT y manufactura"
    ],
    disadvantages: [
      "Inviernos fríos y oscuros en el norte",
      "Burocracia pesada (Anmeldung, contratos, etc.)",
      "El alemán es casi imprescindible para integración laboral",
      "Mercado inmobiliario muy competitivo en Múnich y Berlín",
      "Impuestos altos sobre el salario"
    ],
    faqs: [
      {
        question: "¿Cuánto necesito para vivir bien en Alemania?",
        answer: "En ciudades medianas como Leipzig o Dresde, 2.200-2.600 €/mes es suficiente para una vida cómoda. En Múnich o Hamburgo se recomienda 2.800-3.400 €/mes."
      },
      {
        question: "¿Es fácil conseguir la Blue Card europea en Alemania?",
        answer: "Sí. Alemania tiene uno de los procesos más rápidos para trabajadores cualificados. Con título universitario y oferta de trabajo por encima de ~45.000-58.000 €/año puedes obtener la Blue Card en semanas."
      },
      {
        question: "¿Cuál es el salario mínimo en Alemania 2026?",
        answer: "El salario mínimo legal en 2025-2026 es de 12,82 €/hora brutos (aproximadamente 1.580-1.650 € mensuales a tiempo completo)."
      },
      {
        question: "¿Qué ciudades alemanas tienen mejor relación calidad-precio?",
        answer: "Leipzig, Dresde, Núremberg, Hannover y Colonia ofrecen excelente calidad de vida con costos mucho más bajos que Múnich, Frankfurt o Hamburgo."
      },
      {
        question: "¿Los extranjeros pagan muchos impuestos en Alemania?",
        answer: "Los impuestos son altos (hasta 45% + solidaridad), pero a cambio recibes sanidad excelente, educación gratuita de calidad, seguridad social robusta y 30+ días de vacaciones pagadas."
      }
    ],
    summary: "Alemania es el destino ideal para ingenieros, desarrolladores y profesionales que buscan altos salarios, estabilidad laboral y excelente calidad de vida en Europa central."
  },
  {
    slug: "canada",
    name: "Canadá",
    capital: "Ottawa",
    continent: "America",
    currency: "Dólar Canadiense (CAD $)",
    language: "Inglés / Francés",
    population: "41.1 millones",
    costOfLivingIndex: 68,
    minSalary: 1680,
    avgSalary: 3120,
    rent1BedCenter: 1450,
    rent1BedOutside: 1150,
    mealInexpensive: 15,
    monthlyGroceries: 310,
    monthlyTransport: 78,
    advantages: [
      "Alta calidad de vida, seguridad y naturaleza impresionante",
      "Sistema de salud público universal",
      "Políticas de inmigración amigables y puntos por skills",
      "Excelentes oportunidades en tecnología, energía y recursos",
      "Sociedad multicultural y tolerante"
    ],
    disadvantages: [
      "Inviernos muy largos y fríos en la mayor parte del país",
      "Vivienda extremadamente cara en Toronto y Vancouver",
      "Impuestos altos y costo de vida elevado en grandes ciudades",
      "Mercado laboral competitivo para extranjeros sin experiencia local",
      "Aislamiento geográfico y vuelos caros a Europa"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en Toronto o Vancouver?",
        answer: "Toronto y Vancouver son de las ciudades más caras de Norteamérica. Una persona sola necesita fácilmente 3.200-4.000 CAD/mes. Ciudades como Calgary, Ottawa o Montreal son más asequibles."
      },
      {
        question: "¿Es fácil emigrar a Canadá en 2026?",
        answer: "Canadá sigue siendo uno de los países más abiertos. El sistema Express Entry premia edad, educación, experiencia laboral e idioma. Profesionales en IT, salud y oficios tienen muy buenas probabilidades."
      },
      {
        question: "¿Cuál es el salario mínimo en Canadá?",
        answer: "Varía por provincia. En 2026 Ontario está en 17.20 CAD/hora, British Columbia ~17.40 CAD, Alberta 15 CAD. El promedio nacional ronda los 16-17.5 CAD/hora."
      },
      {
        question: "¿Qué ciudades canadienses ofrecen mejor calidad de vida por el dinero?",
        answer: "Calgary, Edmonton, Ottawa, Halifax y Winnipeg ofrecen mejor equilibrio. Montreal tiene excelente calidad de vida y costos más bajos que Toronto/Vancouver."
      },
      {
        question: "¿Los impuestos en Canadá compensan los servicios públicos?",
        answer: "Sí. Aunque los impuestos son altos (federal + provincial hasta 50%+), recibes sanidad gratuita de calidad, educación universitaria asequible, seguridad y excelente infraestructura."
      }
    ],
    summary: "Canadá es perfecto para familias y profesionales que valoran seguridad, naturaleza y un sistema social fuerte. Las grandes ciudades son caras, pero el interior ofrece mejor relación calidad-precio."
  },
  {
    slug: "australia",
    name: "Australia",
    capital: "Canberra",
    continent: "Oceania",
    currency: "Dólar Australiano (AUD $)",
    language: "Inglés",
    population: "26.8 millones",
    costOfLivingIndex: 74,
    minSalary: 1920,
    avgSalary: 3380,
    rent1BedCenter: 1380,
    rent1BedOutside: 1050,
    mealInexpensive: 14,
    monthlyGroceries: 295,
    monthlyTransport: 72,
    advantages: [
      "Altísima calidad de vida y salarios entre los más altos del mundo",
      "Clima excelente y estilo de vida al aire libre",
      "Excelente equilibrio trabajo-vida y vacaciones generosas",
      "Naturaleza única y ciudades modernas y seguras",
      "Gran demanda de profesionales cualificados"
    ],
    disadvantages: [
      "Distancia extrema de Europa y América (vuelos caros y largos)",
      "Vivienda muy cara en Sydney y Melbourne",
      "Mercado laboral competitivo y regulación estricta para extranjeros",
      "Alto costo de vida generalizado",
      "Aislamiento y dependencia de importaciones"
    ],
    faqs: [
      {
        question: "¿Cuánto necesito para vivir bien en Australia?",
        answer: "En Sydney o Melbourne una persona sola necesita 3.500-4.500 AUD/mes. En Brisbane, Perth o Adelaide el presupuesto baja a 2.800-3.400 AUD/mes para un estilo de vida cómodo."
      },
      {
        question: "¿Es fácil conseguir visa de trabajo en Australia?",
        answer: "Australia tiene varios programas. Working Holiday visa para menores de 35, Skilled Migration y employer sponsored visas. Profesionales en salud, IT, ingeniería y oficios calificados tienen buenas opciones."
      },
      {
        question: "¿Cuál es el salario mínimo en Australia 2026?",
        answer: "El National Minimum Wage en 2025-2026 es aproximadamente 24.10 AUD por hora (alrededor de 3.800-4.000 AUD mensuales a tiempo completo)."
      },
      {
        question: "¿Qué ciudades australianas tienen mejor relación calidad-precio?",
        answer: "Adelaide, Brisbane, Perth y Gold Coast ofrecen mejor equilibrio. Sydney y Melbourne son significativamente más caras en vivienda."
      },
      {
        question: "¿Vale la pena mudarse a Australia desde Europa o Latinoamérica?",
        answer: "Sí, si buscas altos ingresos y calidad de vida. El proceso de inmigración es selectivo pero transparente. El estilo de vida y salarios compensan la distancia para muchos profesionales."
      }
    ],
    summary: "Australia ofrece algunos de los salarios más altos del mundo y calidad de vida excepcional. Ideal para profesionales cualificados dispuestos a adaptarse a la distancia y altos costos en las ciudades principales."
  },
  {
    slug: "estados-unidos",
    name: "Estados Unidos",
    capital: "Washington D.C.",
    continent: "America",
    currency: "Dólar Estadounidense (USD $)",
    language: "Inglés",
    population: "341.8 millones",
    costOfLivingIndex: 71,
    minSalary: 1250,
    avgSalary: 3850,
    rent1BedCenter: 1650,
    rent1BedOutside: 1280,
    mealInexpensive: 16,
    monthlyGroceries: 320,
    monthlyTransport: 85,
    advantages: [
      "Salarios más altos del mundo en muchos sectores (tech, finanzas, medicina)",
      "Gran diversidad de oportunidades laborales y geográficas",
      "Innovación tecnológica y ecosistema emprendedor líer mundial",
      "Universidades de élite y excelente formación continua",
      "Cultura diversa y muchas ciudades con gran energía"
    ],
    disadvantages: [
      "Sin sanidad pública universal (seguros caros)",
      "Desigualdad económica muy marcada entre ciudades y estados",
      "Armas y violencia en algunas áreas urbanas",
      "Vacaciones cortas (10-15 días promedio)",
      "Proceso migratorio complejo y costoso"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en Nueva York o San Francisco?",
        answer: "NYC y SF son extremadamente caras. Una persona sola necesita 4.500-6.500 USD/mes fácilmente. Ciudades como Austin, Denver, Atlanta o Raleigh ofrecen mucho mejor relación calidad-precio."
      },
      {
        question: "¿Es fácil conseguir visa de trabajo en EE.UU.?",
        answer: "Es uno de los procesos más difíciles. H-1B es por sorteo, L-1 para transferidos, O-1 para talento extraordinario. Muchas empresas patrocinan pero la competencia es alta. EB-2/EB-3 para green card por empleo."
      },
      {
        question: "¿Cuál es el salario mínimo federal en EE.UU.?",
        answer: "El salario mínimo federal sigue en 7.25 USD/hora desde 2009. Sin embargo, muchos estados tienen mínimos mucho más altos (California 16.50 USD, Nueva York 16.50 USD, Washington 16.66 USD en 2026)."
      },
      {
        question: "¿Qué estados de EE.UU. tienen mejor calidad de vida por el dinero?",
        answer: "Texas (sin income tax), Florida, Tennessee, Nevada y Utah ofrecen mejor equilibrio fiscal y costos. Evita California, Nueva York, Massachusetts y Hawái si buscas ahorrar."
      },
      {
        question: "¿Cómo funciona el sistema de salud para residentes?",
        answer: "No existe sanidad pública universal. La mayoría tiene seguro privado a través del empleador. Los costos pueden ser muy altos si no tienes buen seguro. Muchos expats recomiendan planes premium."
      }
    ],
    summary: "Estados Unidos ofrece las mayores oportunidades económicas del mundo, especialmente en tecnología y negocios. La calidad de vida varía enormemente según el estado y la ciudad elegida."
  },
  {
    slug: "reino-unido",
    name: "Reino Unido",
    capital: "Londres",
    continent: "Europa",
    currency: "Libra Esterlina (£)",
    language: "Inglés",
    population: "67.7 millones",
    costOfLivingIndex: 65,
    minSalary: 1450,
    avgSalary: 2680,
    rent1BedCenter: 1350,
    rent1BedOutside: 980,
    mealInexpensive: 14,
    monthlyGroceries: 275,
    monthlyTransport: 95,
    advantages: [
      "Londres es hub global de finanzas, tech y cultura",
      "Idioma inglés nativo y ambiente internacional",
      "Excelentes universidades y sistema educativo",
      "Historia, cultura y diversidad incomparable",
      "Buena conectividad con Europa y el mundo"
    ],
    disadvantages: [
      "Londres y el sureste son extremadamente caros",
      "Clima gris y lluvioso la mayor parte del año",
      "Brexit complicó trámites para europeos",
      "Sistema de salud NHS saturado en algunas áreas",
      "Impuestos altos y costo de vivienda elevado"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en Londres vs otras ciudades del UK?",
        answer: "Londres es una de las ciudades más caras del mundo. Manchester, Birmingham, Leeds, Glasgow y Bristol ofrecen costos 35-50% más bajos con buena calidad de vida y oportunidades."
      },
      {
        question: "¿Es fácil conseguir visa de trabajo después del Brexit?",
        answer: "El sistema de puntos (Skilled Worker visa) requiere oferta de trabajo con sponsor y salario mínimo de £38,700 (2026). Profesionales en escasez (IT, salud, ingeniería) tienen más facilidades."
      },
      {
        question: "¿Cuál es el salario mínimo en Reino Unido 2026?",
        answer: "El National Living Wage para mayores de 21 años es de £11.44 por hora (aprox. 1.450-1.550 £ mensuales a tiempo completo)."
      },
      {
        question: "¿Qué ciudades del Reino Unido tienen mejor relación calidad-precio?",
        answer: "Manchester, Leeds, Bristol, Birmingham, Glasgow y Newcastle ofrecen excelente equilibrio entre oportunidades, cultura y costos mucho más bajos que Londres."
      },
      {
        question: "¿Vale la pena mudarse al Reino Unido en 2026?",
        answer: "Depende del sector. Finanzas, tecnología, investigación y consultoría siguen siendo fuertes. Para otros perfiles, países de la UE pueden ofrecer mejor equilibrio post-Brexit."
      }
    ],
    summary: "El Reino Unido, especialmente fuera de Londres, sigue siendo atractivo para profesionales de habla inglesa. La calidad de vida es alta, aunque los costos en el sur son elevados."
  },
  {
    slug: "francia",
    name: "Francia",
    capital: "París",
    continent: "Europa",
    currency: "Euro (€)",
    language: "Francés",
    population: "68.4 millones",
    costOfLivingIndex: 61,
    minSalary: 1280,
    avgSalary: 2420,
    rent1BedCenter: 1050,
    rent1BedOutside: 820,
    mealInexpensive: 14,
    monthlyGroceries: 270,
    monthlyTransport: 55,
    advantages: [
      "Calidad de vida excepcional y gastronomía mundialmente famosa",
      "Excelente sistema de salud y protección social",
      "35 horas semanales y muchas vacaciones",
      "Cultura, arte e historia inigualables",
      "Buena infraestructura y trenes de alta velocidad"
    ],
    disadvantages: [
      "París es muy cara y competitiva",
      "El francés es prácticamente obligatorio para integración",
      "Burocracia y rigidez laboral",
      "Impuestos altos sobre el patrimonio y sucesiones",
      "Huelgas frecuentes en transporte y servicios públicos"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir cómodamente en Francia?",
        answer: "En París se necesitan 3.000-3.800 €/mes. En Lyon, Toulouse, Burdeos o Nantes el presupuesto baja a 2.200-2.700 €/mes para una vida muy cómoda."
      },
      {
        question: "¿Es fácil conseguir la visa de talento o trabajo en Francia?",
        answer: "Francia tiene el 'Passeport Talent' para profesionales cualificados, investigadores y emprendedores. El proceso es relativamente ágil comparado con otros países europeos."
      },
      {
        question: "¿Cuál es el salario mínimo en Francia?",
        answer: "El SMIC en 2026 está aproximadamente en 1.280 € netos mensuales (1.801,80 € brutos). Muchos convenios colectivos pagan por encima."
      },
      {
        question: "¿Qué ciudades francesas tienen mejor relación calidad-precio?",
        answer: "Lyon, Toulouse, Nantes, Burdeos, Lille y Montpellier ofrecen excelente equilibrio. Evita París y la Costa Azul si buscas ahorrar."
      },
      {
        question: "¿Los impuestos en Francia son muy altos?",
        answer: "Sí, Francia tiene uno de los niveles de presión fiscal más altos de la OCDE. A cambio recibes sanidad excelente, educación gratuita de calidad y generosas prestaciones sociales."
      }
    ],
    summary: "Francia ofrece una calidad de vida excepcional, especialmente fuera de París. Ideal para amantes de la cultura, gastronomía y buen equilibrio trabajo-vida."
  },
  {
    slug: "italia",
    name: "Italia",
    capital: "Roma",
    continent: "Europa",
    currency: "Euro (€)",
    language: "Italiano",
    population: "58.9 millones",
    costOfLivingIndex: 58,
    minSalary: 980,
    avgSalary: 1950,
    rent1BedCenter: 850,
    rent1BedOutside: 680,
    mealInexpensive: 15,
    monthlyGroceries: 265,
    monthlyTransport: 38,
    advantages: [
      "Calidad de vida mediterránea inigualable",
      "Gastronomía, arte, historia y cultura excepcionales",
      "Clima excelente la mayor parte del año",
      "Costos razonables fuera de Milán y Roma",
      "Estilo de vida relajado y social"
    ],
    disadvantages: [
      "Salarios bajos comparados con el norte de Europa",
      "Burocracia extrema y lentitud administrativa",
      "Mercado laboral rígido y alto desempleo juvenil",
      "Corrupción e ineficiencia en algunas regiones del sur",
      "Inviernos húmedos y contaminación en el norte industrial"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir bien en Italia?",
        answer: "En ciudades medianas del norte o centro (Bolonia, Florencia, Turín) 2.000-2.500 €/mes es suficiente. En Milán y Roma el presupuesto sube a 2.800-3.500 €."
      },
      {
        question: "¿Es fácil encontrar trabajo en Italia siendo extranjero?",
        answer: "Es difícil. El mercado laboral es cerrado y la burocracia es pesada. Las mejores oportunidades están en el norte industrial (Milán, Turín) en moda, diseño, automoción y turismo de lujo."
      },
      {
        question: "¿Cuál es el salario mínimo en Italia?",
        answer: "Italia no tiene salario mínimo nacional legal. Los convenios colectivos establecen mínimos por sector. El promedio ronda los 980-1.100 € netos para trabajos básicos."
      },
      {
        question: "¿Qué regiones de Italia tienen mejor calidad de vida?",
        answer: "Trentino-Alto Adigio, Emilia-Romagna, Toscana y Lombardía ofrecen el mejor equilibrio. El sur (Sicilia, Calabria, Campania) tiene costos más bajos pero menos oportunidades."
      },
      {
        question: "¿Italia es buena opción para jubilados extranjeros?",
        answer: "Sí, especialmente en pueblos pequeños de Toscana, Umbría o Puglia. El clima, la comida y los costos bajos atraen a muchos jubilados europeos y estadounidenses."
      }
    ],
    summary: "Italia es ideal para quienes priorizan calidad de vida, cultura y gastronomía por encima de altos salarios. Las regiones del norte ofrecen mejores oportunidades laborales."
  },
  {
    slug: "mexico",
    name: "México",
    capital: "Ciudad de México",
    continent: "America",
    currency: "Peso Mexicano (MXN $)",
    language: "Español",
    population: "129.9 millones",
    costOfLivingIndex: 38,
    minSalary: 380,
    avgSalary: 920,
    rent1BedCenter: 420,
    rent1BedOutside: 310,
    mealInexpensive: 6,
    monthlyGroceries: 180,
    monthlyTransport: 22,
    advantages: [
      "Costo de vida muy bajo comparado con EE.UU. y Europa",
      "Clima cálido todo el año y playas espectaculares",
      "Gastronomía reconocida como Patrimonio de la Humanidad",
      "Cultura vibrante, hospitalidad y vida social activa",
      "Proximidad a Estados Unidos y tratados comerciales"
    ],
    disadvantages: [
      "Seguridad variable según la región (violencia en algunas zonas)",
      "Salarios bajos y desigualdad económica marcada",
      "Contaminación y tráfico extremo en CDMX",
      "Sistema de salud público saturado",
      "Corrupción e inestabilidad política en algunos periodos"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir cómodamente en México?",
        answer: "En CDMX una persona sola puede vivir bien con 1.200-1.800 USD/mes. En ciudades como Guadalajara, Monterrey, Mérida o Querétaro el presupuesto baja a 900-1.400 USD."
      },
      {
        question: "¿Es seguro vivir en México como extranjero?",
        answer: "Depende mucho de la zona. CDMX, Guadalajara, Monterrey, Mérida, Playa del Carmen y Puerto Vallarta son relativamente seguras para expats. Evita ciertas regiones del norte y sur del país."
      },
      {
        question: "¿Cuál es el salario mínimo en México 2026?",
        answer: "En 2026 el salario mínimo es de aproximadamente 380-420 USD mensuales dependiendo de la zona (frontera norte más alto). Muy bajo para estándares internacionales."
      },
      {
        question: "¿Qué ciudades mexicanas son mejores para vivir como extranjero?",
        answer: "Mérida, Guadalajara, Querétaro, San Miguel de Allende, Puerto Vallarta y Playa del Carmen son las favoritas de la comunidad expat por seguridad, clima y comunidad internacional."
      },
      {
        question: "¿Puedo trabajar remotamente desde México con visa de turista?",
        answer: "Técnicamente la visa de turista no permite trabajar. Muchos nómadas digitales entran como turistas y trabajan remotamente. Para estancias largas se recomienda la visa de residente temporal."
      }
    ],
    summary: "México ofrece uno de los costos de vida más bajos de Norteamérica con excelente clima y cultura. Ideal para nómadas digitales y jubilados que priorizan presupuesto y experiencia cultural."
  },
  {
    slug: "brasil",
    name: "Brasil",
    capital: "Brasilia",
    continent: "America",
    currency: "Real Brasileño (BRL R$)",
    language: "Portugués",
    population: "216.4 millones",
    costOfLivingIndex: 35,
    minSalary: 320,
    avgSalary: 780,
    rent1BedCenter: 380,
    rent1BedOutside: 280,
    mealInexpensive: 5,
    monthlyGroceries: 165,
    monthlyTransport: 28,
    advantages: [
      "Costo de vida extremadamente bajo",
      "Playas increíbles, naturaleza diversa y clima tropical",
      "Cultura alegre, música y fiestas vibrantes",
      "Gente hospitalaria y sociable",
      "Oportunidades en agronegocios, minería y energía"
    ],
    disadvantages: [
      "Seguridad problemática en muchas ciudades grandes",
      "Inestabilidad económica y política recurrente",
      "Infraestructura deficiente fuera de las grandes ciudades",
      "Sistema de salud público saturado",
      "Burocracia extrema y corrupción endémica"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir bien en Brasil?",
        answer: "En ciudades como Florianópolis, Curitiba o Campinas una persona puede vivir cómodamente con 1.000-1.600 USD/mes. En Río o São Paulo el presupuesto sube a 1.800-2.500 USD."
      },
      {
        question: "¿Es seguro Brasil para extranjeros?",
        answer: "Varía enormemente. Barrios cerrados en São Paulo, Florianópolis, Curitiba y algunas zonas de Río son seguros. Evita favelas y ciertas áreas del norte y noreste."
      },
      {
        question: "¿Cuál es el salario mínimo en Brasil?",
        answer: "El salario mínimo nacional en 2026 ronda los 1.400-1.500 BRL mensuales (aprox. 320-350 USD). Muy bajo para estándares internacionales."
      },
      {
        question: "¿Qué ciudades brasileñas recomiendan los expats?",
        answer: "Florianópolis, Curitiba, Campinas, Ribeirão Preto y algunas zonas de São Paulo son las más recomendadas por seguridad, clima y calidad de vida."
      },
      {
        question: "¿Brasil es buena opción para nómadas digitales?",
        answer: "Sí, especialmente Florianópolis y São Paulo tienen buena comunidad digital. El visado de nómada digital existe desde 2022 y permite estancias de hasta 1 año renovable."
      }
    ],
    summary: "Brasil ofrece costos muy bajos y experiencias únicas de naturaleza y cultura. Requiere precaución con la seguridad y es mejor para quienes ya hablan portugués o están dispuestos a aprenderlo."
  },
  {
    slug: "india",
    name: "India",
    capital: "Nueva Delhi",
    continent: "Asia",
    currency: "Rupia India (INR ₹)",
    language: "Hindi / Inglés",
    population: "1.45 mil millones",
    costOfLivingIndex: 28,
    minSalary: 180,
    avgSalary: 520,
    rent1BedCenter: 220,
    rent1BedOutside: 140,
    mealInexpensive: 3,
    monthlyGroceries: 95,
    monthlyTransport: 15,
    advantages: [
      "Costo de vida extremadamente bajo",
      "Cultura milenaria, diversidad y espiritualidad única",
      "Rápido crecimiento tecnológico y oportunidades en IT",
      "Comida deliciosa y variada",
      "Gran mercado interno y economía en expansión"
    ],
    disadvantages: [
      "Contaminación extrema en las grandes ciudades",
      "Infraestructura básica deficiente en muchas zonas",
      "Seguridad y acoso para mujeres en algunas áreas",
      "Burocracia legendaria y lentitud administrativa",
      "Desigualdad social muy marcada"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir cómodamente en India?",
        answer: "En ciudades como Bangalore, Hyderabad o Pune una persona puede vivir muy bien con 600-1.200 USD/mes. En Delhi o Mumbai el presupuesto sube a 1.400-2.000 USD."
      },
      {
        question: "¿Es fácil trabajar en India como extranjero?",
        answer: "En el sector IT y startups de Bangalore, Hyderabad y Gurgaon hay muchas oportunidades para perfiles senior. El proceso de visa de trabajo (Employment Visa) es relativamente directo para multinacionales."
      },
      {
        question: "¿Cuál es el salario mínimo en India?",
        answer: "Varía por estado y sector. El mínimo nacional es muy bajo (~180-250 USD/mes). En el sector IT los salarios para profesionales cualificados son competitivos internacionalmente."
      },
      {
        question: "¿Qué ciudades de India son mejores para expats?",
        answer: "Bangalore, Hyderabad, Pune, Gurgaon (cerca de Delhi) y Mumbai tienen las mejores infraestructuras para extranjeros y comunidades internacionales."
      },
      {
        question: "¿India es recomendable para familias occidentales?",
        answer: "Es un desafío. La contaminación, el tráfico, la higiene y las diferencias culturales son grandes. Muchas familias expats viven en comunidades cerradas y usan escuelas internacionales."
      }
    ],
    summary: "India ofrece costos extremadamente bajos y oportunidades crecientes en tecnología. Ideal para profesionales de IT y emprendedores que toleran el caos, la contaminación y las diferencias culturales."
  },
  {
    slug: "corea-del-sur",
    name: "Corea del Sur",
    capital: "Seúl",
    continent: "Asia",
    currency: "Won Surcoreano (KRW ₩)",
    language: "Coreano",
    population: "51.7 millones",
    costOfLivingIndex: 72,
    minSalary: 1380,
    avgSalary: 2480,
    rent1BedCenter: 980,
    rent1BedOutside: 680,
    mealInexpensive: 8,
    monthlyGroceries: 240,
    monthlyTransport: 55,
    advantages: [
      "Tecnología de vanguardia y eficiencia extrema",
      "Seguridad muy alta y bajo índice de criminalidad",
      "Excelente transporte público y ciudades ultra modernas",
      "Gastronomía única (K-food) y cultura pop global",
      "Sistema educativo de alto rendimiento"
    ],
    disadvantages: [
      "Presión laboral intensa y cultura de horas extras",
      "Costo de vida alto en Seúl",
      "Barrera del idioma muy fuerte",
      "Sociedad competitiva y presiones sociales",
      "Inviernos fríos y veranos muy húmedos"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en Seúl?",
        answer: "Seúl es cara. Una persona sola necesita 2.200-3.000 USD/mes mínimo. Ciudades como Busan, Daegu o Incheon ofrecen costos 25-35% más bajos."
      },
      {
        question: "¿Es fácil conseguir trabajo en Corea del Sur?",
        answer: "Para extranjeros es difícil fuera de la enseñanza de inglés o roles en multinacionales. El idioma coreano es casi imprescindible para la mayoría de trabajos."
      },
      {
        question: "¿Cuál es el salario mínimo en Corea del Sur?",
        answer: "En 2026 el salario mínimo es de aproximadamente 9.860 KRW/hora (alrededor de 1.380-1.450 USD mensuales)."
      },
      {
        question: "¿Corea del Sur es buena opción para familias?",
        answer: "Sí, especialmente para educación. El sistema educativo es excelente pero muy competitivo y exigente. La seguridad es de las mejores del mundo."
      },
      {
        question: "¿Vale la pena aprender coreano para vivir allí?",
        answer: "Absolutamente. Aunque en Seúl hay algo de inglés en zonas turísticas y empresas internacionales, la vida diaria, amistades y oportunidades laborales mejoran drásticamente con coreano."
      }
    ],
    summary: "Corea del Sur combina tecnología de punta, seguridad y modernidad. Ideal para profesionales de tecnología y K-culture que aceptan la intensidad laboral y la barrera del idioma."
  },
  {
    slug: "paises-bajos",
    name: "Países Bajos",
    capital: "Ámsterdam",
    continent: "Europa",
    currency: "Euro (€)",
    language: "Neerlandés / Inglés",
    population: "17.9 millones",
    costOfLivingIndex: 68,
    minSalary: 1520,
    avgSalary: 2780,
    rent1BedCenter: 1250,
    rent1BedOutside: 980,
    mealInexpensive: 14,
    monthlyGroceries: 255,
    monthlyTransport: 65,
    advantages: [
      "Excelente equilibrio trabajo-vida y 25+ días de vacaciones",
      "Inglés hablado fluidamente en todo el país",
      "Infraestructura ciclista y transporte público de primer nivel",
      "Sociedad progresista, tolerante e internacional",
      "Fuerte economía en logística, tecnología y agricultura"
    ],
    disadvantages: [
      "Vivienda extremadamente cara y escasa en Ámsterdam y Randstad",
      "Clima húmedo, gris y ventoso la mayor parte del año",
      "Impuestos altos sobre el salario",
      "Proceso de integración (civic integration) obligatorio",
      "Espacio limitado y densidad de población alta"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en los Países Bajos?",
        answer: "En Ámsterdam o Utrecht se necesitan 2.800-3.600 €/mes. En Eindhoven, Groningen o Tilburg el presupuesto baja a 2.200-2.700 €/mes."
      },
      {
        question: "¿Es fácil conseguir trabajo en Países Bajos?",
        answer: "Sí, especialmente en tecnología, logística y startups. Muchas empresas usan inglés como idioma de trabajo. El mercado laboral es flexible y hay escasez en varios sectores."
      },
      {
        question: "¿Cuál es el salario mínimo en Países Bajos?",
        answer: "En 2026 el salario mínimo es de aproximadamente 1.520 € brutos mensuales para mayores de 21 años (a tiempo completo)."
      },
      {
        question: "¿Qué ciudades holandesas tienen mejor relación calidad-precio?",
        answer: "Eindhoven, Groningen, Tilburg, Nijmegen y Arnhem ofrecen mejor equilibrio. Ámsterdam, Utrecht y La Haya son significativamente más caras."
      },
      {
        question: "¿Los Países Bajos son buenos para familias?",
        answer: "Excelentes. Escuelas de alta calidad, seguridad, parques, cultura ciclista y políticas familiares generosas. Uno de los mejores países del mundo para criar hijos."
      }
    ],
    summary: "Países Bajos ofrece excelente calidad de vida, inglés ubicuo y equilibrio trabajo-vida. Ideal para profesionales internacionales, aunque la vivienda en el Randstad es cara."
  },
  {
    slug: "suecia",
    name: "Suecia",
    capital: "Estocolmo",
    continent: "Europa",
    currency: "Corona Sueca (SEK kr)",
    language: "Sueco",
    population: "10.5 millones",
    costOfLivingIndex: 67,
    minSalary: 1680,
    avgSalary: 2950,
    rent1BedCenter: 980,
    rent1BedOutside: 780,
    mealInexpensive: 11,
    monthlyGroceries: 245,
    monthlyTransport: 72,
    advantages: [
      "Uno de los mejores sistemas de bienestar social del mundo",
      "Excelente equilibrio trabajo-vida y parental leave generoso",
      "Alta innovación tecnológica y empresas globales (Spotify, IKEA, Volvo)",
      "Naturaleza impresionante y calidad de aire excelente",
      "Sociedad igualitaria y transparente"
    ],
    disadvantages: [
      "Inviernos largos, oscuros y fríos",
      "Costo de vida alto y vivienda cara en Estocolmo",
      "El sueco es muy útil para integración social",
      "Impuestos muy altos (hasta 55-60%)",
      "Sociedad reservada y difícil de hacer amigos"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en Suecia?",
        answer: "En Estocolmo se necesitan 2.800-3.500 €/mes. En Gotemburgo, Malmö o Linköping el presupuesto baja a 2.300-2.800 €/mes."
      },
      {
        question: "¿Es fácil conseguir trabajo en Suecia?",
        answer: "Para perfiles cualificados en tecnología, ingeniería y salud hay demanda. Muchas empresas multinacionales usan inglés. El mercado es competitivo pero transparente."
      },
      {
        question: "¿Cuál es el salario mínimo en Suecia?",
        answer: "Suecia no tiene salario mínimo legal. Los convenios colectivos establecen mínimos por sector. El promedio para trabajos básicos ronda los 1.680-1.900 €/mes."
      },
      {
        question: "¿Suecia es buena para familias?",
        answer: "Una de las mejores del mundo. Parental leave de 480 días compartidos, guarderías de alta calidad y baratas, y cultura que valora el tiempo en familia."
      },
      {
        question: "¿Cómo son los inviernos en Suecia?",
        answer: "Muy oscuros (diciembre tiene ~6 horas de luz en Estocolmo) y fríos (-5 a -15°C). Muchos expats sufren Seasonal Affective Disorder (SAD). La luz artificial y vitamina D ayudan."
      }
    ],
    summary: "Suecia ofrece el mejor bienestar social del mundo y excelente equilibrio vida-trabajo. Ideal para familias y profesionales que valoran la calidad de vida por encima del salario neto."
  },
  {
    slug: "suiza",
    name: "Suiza",
    capital: "Berna",
    continent: "Europa",
    currency: "Franco Suizo (CHF)",
    language: "Alemán / Francés / Italiano",
    population: "8.9 millones",
    costOfLivingIndex: 95,
    minSalary: 2850,
    avgSalary: 4250,
    rent1BedCenter: 1650,
    rent1BedOutside: 1280,
    mealInexpensive: 18,
    monthlyGroceries: 340,
    monthlyTransport: 85,
    advantages: [
      "Salarios más altos del mundo y economía extremadamente estable",
      "Calidad de vida, seguridad y limpieza inigualables",
      "Naturaleza alpina espectacular y ciudades limpias",
      "Excelente transporte público y puntualidad",
      "Sistema educativo y de salud de primer nivel mundial"
    ],
    disadvantages: [
      "Costo de vida extremadamente alto (uno de los más altos del mundo)",
      "Impuestos variables por cantón pero generalmente altos",
      "El alemán suizo (Schwiizerdütsch) es difícil incluso para hablantes de alemán",
      "Sociedad conservadora y difícil de integrarse socialmente",
      "Vivienda muy cara y escasa en Zúrich y Ginebra"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en Suiza?",
        answer: "Zúrich y Ginebra son de las ciudades más caras del mundo. Una persona sola necesita fácilmente 4.500-6.000 CHF/mes. Ciudades como Basilea, Berna o Lausana son algo más asequibles."
      },
      {
        question: "¿Es fácil conseguir trabajo en Suiza?",
        answer: "Para perfiles altamente cualificados en finanzas, pharma, tecnología y relojería hay oportunidades. El mercado es competitivo y el idioma local es importante fuera de multinacionales."
      },
      {
        question: "¿Cuál es el salario mínimo en Suiza?",
        answer: "No existe salario mínimo nacional. Cada cantón decide. En 2026 algunos cantones como Neuchâtel, Jura y Ticino tienen mínimos alrededor de 3.000-3.500 CHF/mes para trabajos básicos."
      },
      {
        question: "¿Suiza es buena opción para familias?",
        answer: "Excelente. Seguridad altísima, escuelas de calidad, naturaleza y actividades al aire libre. El costo de vida es el principal desafío."
      },
      {
        question: "¿Compensa mudarse a Suiza por los salarios altos?",
        answer: "Sí, si consigues un buen puesto. El salario neto después de impuestos y costos sigue siendo de los más altos del mundo. Muchos expats ahorran significativamente más que en su país de origen."
      }
    ],
    summary: "Suiza ofrece los salarios más altos del mundo y calidad de vida excepcional. Ideal para profesionales senior en finanzas, pharma y tecnología que pueden costear el alto precio de entrada."
  },
  {
    slug: "singapur",
    name: "Singapur",
    capital: "Singapur",
    continent: "Asia",
    currency: "Dólar de Singapur (SGD $)",
    language: "Inglés / Mandarín / Malayo / Tamil",
    population: "6.0 millones",
    costOfLivingIndex: 85,
    minSalary: 1680,
    avgSalary: 3120,
    rent1BedCenter: 1850,
    rent1BedOutside: 1250,
    mealInexpensive: 9,
    monthlyGroceries: 280,
    monthlyTransport: 65,
    advantages: [
      "Una de las ciudades más seguras, limpias y eficientes del mundo",
      "Impuestos muy bajos y economía próspera",
      "Excelente conectividad aérea y hub asiático",
      "Multicultural y comida excepcional",
      "Oportunidades en finanzas, tecnología y logística"
    ],
    disadvantages: [
      "Costo de vida muy alto, especialmente vivienda",
      "Clima tropical húmedo y caluroso todo el año",
      "Espacio muy limitado y sensación de hacinamiento",
      "Reglas estrictas y multas por todo (chicle, basura, etc.)",
      "Lejanía de familia y amigos para occidentales"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en Singapur?",
        answer: "Singapur es cara. Una persona sola necesita 3.200-4.500 SGD/mes mínimo. La vivienda es el mayor gasto. Muchos expats viven en condominios con piscina y gimnasio."
      },
      {
        question: "¿Es fácil conseguir trabajo en Singapur?",
        answer: "Para perfiles cualificados en finanzas, IT, pharma y logística hay demanda. El Employment Pass requiere salario mínimo de ~5.000 SGD/mes para profesionales."
      },
      {
        question: "¿Cuál es el salario mínimo en Singapur?",
        answer: "No existe salario mínimo legal para la mayoría de trabajadores. El gobierno recomienda mínimos para ciertos sectores. Los profesionales cualificados ganan muy por encima del promedio regional."
      },
      {
        question: "¿Singapur es buena opción para familias?",
        answer: "Sí. Seguridad altísima, escuelas internacionales excelentes, parques limpios y actividades. El clima tropical y el tamaño pequeño son los principales desafíos."
      },
      {
        question: "¿Vale la pena mudarse a Singapur?",
        answer: "Sí para carreras en finanzas asiáticas, tecnología o logística. Los impuestos bajos y la seguridad compensan los altos costos para muchos profesionales senior."
      }
    ],
    summary: "Singapur es el hub asiático por excelencia: seguro, eficiente y con oportunidades globales. Ideal para profesionales de finanzas y tecnología que buscan Asia con estándares occidentales."
  },
  {
    slug: "emiratos-arabes-unidos",
    name: "Emiratos Árabes Unidos",
    capital: "Abu Dabi",
    continent: "Asia",
    currency: "Dirham de los EAU (AED)",
    language: "Árabe / Inglés",
    population: "9.9 millones",
    costOfLivingIndex: 58,
    minSalary: 980,
    avgSalary: 2450,
    rent1BedCenter: 980,
    rent1BedOutside: 720,
    mealInexpensive: 8,
    monthlyGroceries: 220,
    monthlyTransport: 45,
    advantages: [
      "Impuestos cero sobre la renta personal",
      "Seguridad muy alta y ciudades modernas ultra desarrolladas",
      "Clima cálido todo el año y playas espectaculares",
      "Hub de aviación y conectividad global",
      "Oportunidades en energía, finanzas, turismo y tecnología"
    ],
    disadvantages: [
      "Clima extremo de calor (45-50°C en verano)",
      "Cultura conservadora y reglas estrictas (alcohol, parejas, vestimenta)",
      "Dependencia del coche y distancias largas",
      "Comunidad muy transitoria (pocos se quedan a largo plazo)",
      "Falta de historia y cultura local accesible"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir en Dubái o Abu Dabi?",
        answer: "Dubái es cara. Una persona sola necesita 2.800-4.000 AED/mes (760-1.090 USD). Abu Dabi es ligeramente más barata. La vivienda es el mayor gasto."
      },
      {
        question: "¿Es fácil conseguir trabajo en EAU?",
        answer: "Sí, especialmente en Dubái. Muchos sectores contratan extranjeros. El proceso de visa es rápido cuando tienes oferta de trabajo. No se requiere sponsor para muchos roles cualificados."
      },
      {
        question: "¿Hay salario mínimo en Emiratos Árabes Unidos?",
        answer: "No existe salario mínimo legal. Los salarios varían enormemente. Para roles cualificados en Dubái el rango suele ser 8.000-25.000+ AED/mes dependiendo de experiencia y sector."
      },
      {
        question: "¿EAU es buena opción para familias?",
        answer: "Sí para familias que buscan seguridad, sol todo el año y servicios de lujo. Las escuelas internacionales son excelentes pero caras. El calor extremo en verano es un desafío."
      },
      {
        question: "¿Puedo beber alcohol y tener pareja en Dubái?",
        answer: "Sí, pero con reglas. El alcohol solo se vende en hoteles y bares con licencia. Las parejas no casadas pueden vivir juntas pero hay que ser discretos en público. Las leyes se han relajado mucho desde 2020."
      }
    ],
    summary: "EAU ofrece cero impuestos sobre la renta, seguridad y modernidad extrema. Ideal para profesionales de finanzas, energía y turismo que toleran el calor y la cultura conservadora."
  },
  {
    slug: "argentina",
    name: "Argentina",
    capital: "Buenos Aires",
    continent: "America",
    currency: "Peso Argentino (ARS $)",
    language: "Español",
    population: "46.0 millones",
    costOfLivingIndex: 32,
    minSalary: 420,
    avgSalary: 780,
    rent1BedCenter: 280,
    rent1BedOutside: 195,
    mealInexpensive: 7,
    monthlyGroceries: 145,
    monthlyTransport: 18,
    advantages: [
      "Costo de vida muy bajo en dólares",
      "Excelente calidad de vida en Buenos Aires y ciudades del interior",
      "Gastronomía, vino y cultura excepcionales",
      "Gente cálida, educada y con alto nivel cultural",
      "Naturaleza diversa (Patagonia, cataratas, montañas)"
    ],
    disadvantages: [
      "Inestabilidad económica crónica e inflación alta",
      "Moneda local muy volátil y controles de cambio",
      "Inseguridad en algunas zonas de Buenos Aires",
      "Sistema de salud y educación pública en declive",
      "Burocracia y trámites lentos"
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta vivir cómodamente en Argentina?",
        answer: "En Buenos Aires una persona puede vivir muy bien con 800-1.400 USD/mes. En ciudades del interior como Córdoba, Mendoza o Rosario el presupuesto baja a 600-1.000 USD."
      },
      {
        question: "¿Es seguro Argentina para extranjeros?",
        answer: "Buenos Aires es relativamente segura en barrios como Palermo, Recoleta y Belgrano. Evita ciertas zonas del sur y conurbano. El resto del país es generalmente seguro."
      },
      {
        question: "¿Cuál es el salario mínimo en Argentina?",
        answer: "El salario mínimo en 2026 ronda los 420-500 USD mensuales (dependiendo del tipo de cambio oficial vs blue). Muy bajo en dólares pero cubre necesidades básicas."
      },
      {
        question: "¿Qué ciudades argentinas recomiendan los expats?",
        answer: "Buenos Aires (Palermo, Villa Urquiza), Córdoba, Mendoza, Rosario y Bariloche son las favoritas. Mendoza destaca por calidad de vida, vino y clima."
      },
      {
        question: "¿Cómo funciona el tema de los dólares y la inflación?",
        answer: "Argentina tiene múltiples tipos de cambio. Muchos expats y locales usan el 'dólar blue' o cripto para protegerse de la inflación. Es recomendable tener parte de los ingresos en dólares."
      }
    ],
    summary: "Argentina ofrece costos muy bajos en dólares y excelente calidad de vida cultural. Ideal para nómadas digitales y jubilados que toleran la inestabilidad económica y usan dólares."
  }
];

export const continents = ["Europa", "Asia", "America", "Oceania"] as const;

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug);
}

export function getRelatedCountries(currentSlug: string, limit: number = 3): Country[] {
  const current = getCountryBySlug(currentSlug);
  if (!current) return [];
  
  return countries
    .filter(c => c.continent === current.continent && c.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}