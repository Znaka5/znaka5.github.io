import { render, html } from "../node_modules/lit-html/lit-html.js"

const template = (index, data, submit, next, back) => html`
     ${data.img1 === '' ? '' : html`<img src=${data.img1}>`}
     ${data.img2 === '' ? '' : html`<img src=${data.img2}>`}
     ${data.img3 === '' || data.img3 === undefined ? '' : html`<img src=${data.img3}>`}
     ${data.video === '' ? '' : html`<video src=${data.video} type="video/mp4" controls=""></video>`}

     <div id="text">
        ${data.text}
     </div>
     <button id="translate" @click=${submit}>Translate</button>
      ${index > 0 && index < 6 ? html`<button id="next" @click=${{handleEvent: next, once: false}}>Next</button> 
        <button id="back" @click=${{handleEvent: back, once: false}}>Back</button>` : index >= 6 ? html`<button id="back" @click=${{handleEvent: back, once: false}}>Back</button> <a href="code vizualizer/vizualize.html" id="source">source code</a>` : html`<button id="next" @click=${{handleEvent: next, once: false}}>Next</button>`}
`

let index = 0
let slides = [
    { //introduction page
        img1: '',
        img2: '',
        video: '',
        text: `This is a S.P.A (single page application) built for a simple introduction in the world of spectral analysis
        hope you enjoy!!!`,
    },

    { //linear specrum
        img1: "img/difference.jpg",
        img2: "img/how.jpg",
        video: "vids/line_spectrum.mp4",
        text: `A spectral line is a weaker or stronger region in an otherwise uniform and continuous 
        spectrum. It may result from emission or absorption of light in a narrow frequency range, compared with the 
        nearby frequencies. Spectral lines are often used to identify atoms and molecules. 
        These "fingerprints" can be compared to the previously collected 
        ones of atoms and molecules, and 
        are thus used to identify the atomic and molecular 
        components of stars and planets, which would otherwise be impossible.
        
        Spectral lines are the result of interaction between a quantum system 
        (usually atoms, but sometimes molecules or atomic nuclei) and a single photon. When a photon has about the right amount of energy 
        (which is connected to its frequency) to allow a change in the energy state of the system (in the case of an atom this is usually an electron changing orbitals), 
        the phon itos absorbed. Then the energy will be spontaneously re-emitted, either as one photon at the same frequency as the original 
        one or in a cascade, where the sum of the energies of the 
        photons emitted will be equal to the energy of the one absorbed (assuming the system returns to its original state).`,

    },

    { //non-linear specrum
        img1: "img/non-linear.png",
        img2: "img/check.jpg",
        img3: "img/non.png",
        video: '',
        text: `Non-linear Spectral Analysis Overview
        Non-linear spectral analysis is used to study systems and signals that exhibit non-linear behavior. Unlike linear systems, where the output is directly proportional to the input and can be analyzed using linear methods like Fourier Transform, non-linear systems produce outputs with complex behaviors such as harmonics, frequency mixing, and chaotic dynamics.

        Key Features of Non-linear Systems
        Superposition Does Not Apply: Non-linear systems do not obey the principle of superposition, meaning the output is not simply the sum of the inputs.

        Frequency Interactions: Non-linear processes can generate:

        Harmonics: Frequencies that are integer multiples of the original frequencies.
        Intermodulation: New frequencies that are sums or differences of input frequencies.
        Energy Redistribution: Energy in a non-linear system can spread across a broader frequency spectrum, unlike in linear systems where it remains confined to specific frequencies.`,
    },

    { //types of spectral analysis
        img1: "img/difference.jpg",
        img2: "img/unnamed.gif",
        video: "vids/types.mp4",
        text: `Absorptive Spectral Analysis
        Description: Absorptive spectral analysis refers to the study of how materials absorb light or electromagnetic radiation at specific wavelengths. When light passes through a material, certain wavelengths are absorbed depending on the material's properties.
        Example: In absorption spectroscopy, the absorption spectrum of a material is recorded to identify the specific wavelengths (or frequencies) of light that are absorbed by the material. This method is widely used in chemistry and physics to identify substances.
        Applications:
        Chemical analysis (e.g., UV-Vis absorption spectroscopy)
        Atmospheric studies (e.g., studying the absorption of sunlight by gases in the atmosphere)
        Medical diagnostics (e.g., using absorption spectra to detect diseases or toxins)
        Emissive Spectral Analysis
        Description: Emissive spectral analysis refers to the study of the wavelengths of light emitted by a material when it is excited, usually by heat or radiation. The emission spectrum is characteristic of the material and can be used to identify it.
        Example: In emission spectroscopy, light emitted by a sample is analyzed after it has been excited (often by heat or electrical energy). The emitted light corresponds to specific wavelengths based on the energy transitions of the atoms or molecules in the material.
        Applications:
        Atomic emission spectroscopy (e.g., identifying elements based on the light they emit)
        Fluorescence (e.g., in biochemical assays)
        Astronomy (e.g., studying the emission lines of stars and galaxies)
`,
    },

    { //uses in the industry
        img1: '',
        img2: '',
        video: "vids/demo.mp4",
        text: `
        Uses of Absorptive Spectral Analysis:
Chemical Analysis:
Identifying Chemical Composition: Absorption spectra help identify the presence of specific compounds or elements in a sample by observing which wavelengths are absorbed.
Examples: UV-Vis (Ultraviolet-Visible) spectroscopy for identifying organic compounds, environmental contaminants, or pollutants.
Environmental Monitoring:
Atmospheric Studies: Used to study how gases absorb specific wavelengths of light, aiding in climate change research, pollutant detection, and the study of atmospheric conditions.
Example: Monitoring the absorption of solar radiation by greenhouse gases.
Material Science:
Studying Material Properties: Absorption spectra provide information on the electronic structure of materials, such as semiconductors, which are important in material design for electronic devices.
Example: Identifying the band gap in semiconductors.
Biological and Medical Applications:
Disease Diagnosis: Absorptive spectroscopy is used in medical diagnostics, such as blood analysis, where certain wavelengths are absorbed by specific biomarkers or cells.
Example: Measuring oxygen levels in blood through absorption of light (pulse oximetry).
Uses of Emissive Spectral Analysis:
Elemental and Chemical Analysis:
Identifying Elements: Emission spectra are used to identify the elements present in a sample based on the characteristic wavelengths of light they emit.
Example: Atomic emission spectroscopy is used to detect metals and elements in samples, widely used in analytical chemistry.
Astronomy and Astrophysics:
Studying Stars and Galaxies: Emission spectra from stars, nebulae, and galaxies reveal the chemical composition, temperature, density, and motion of celestial objects.
Example: Emission lines from hydrogen and other elements are studied to determine the physical properties of stars.
Fluorescence and Imaging:
Biochemical Applications: Fluorescence spectroscopy, where molecules emit light after absorbing photons, is crucial for detecting and analyzing proteins, nucleic acids, and other biomolecules in research.
Example: Fluorescent labeling in biomedical research for tracking proteins or pathogens.
Material Characterization:
Thermal Emission Studies: Thermal emission spectroscopy is used to study the emission of infrared radiation by objects, which helps in analyzing their temperature and surface composition.
Example: Using emission spectra to study the temperature of objects like industrial furnaces or distant planets.
        `,
    },

    { //devices used for such things
        img1: "img/analyzer.png",
        img2: "img/hand.png",
        video: '',
        text: `
        Spectrophotometer:
Use: Measures light absorption or transmission at different wavelengths.
Applications: Commonly used in chemical analysis, biomedical research, and environmental testing. For example, in UV-Vis spectrophotometry, it helps identify the concentration of specific chemicals in solutions or detect pollutants in environmental samples.
Raman Spectrometer:

Use: Analyzes inelastic scattering of light (Raman scattering) to provide molecular and structural information.
Applications: Extensively used in material science to study the chemical composition and structure of materials. In pharmaceuticals, it helps identify drug compounds and detect chemical changes in formulations.
Mass Spectrometer:

Use: Measures the mass-to-charge ratio of ions to identify chemical substances.
Applications: Widely used in forensic science, environmental monitoring, and pharmaceutical analysis. It helps detect and identify pollutants or analyze complex mixtures, such as determining the components of unknown compounds.
        `,
    },

    { //ending page
        img1: '',
        img2: '',
        video: '',
        text: "thanks for watching!!! recources: wikipedia, lit-html, jQuery, @Physics Demos, @Physics4students, @Jan visual physics lines of code:623 , JS:556, HTML:19, CSS:48",
    },
]

let counter = 0
let language = ''
function renderer() {
    const currentSlide = slides[index]
    document.getElementById("container").style.opacity = 0

    console.log(language === '' )
    render(template(index, currentSlide, onClick, next, back), document.querySelector("#container"))
    if (language === '' || language === 'EN') {
        document.getElementById("translate").textContent = "translate"

        if (index < 6) {
        document.getElementById("next").textContent = "next"
        }
        if (index > 0) {
            document.getElementById("back").textContent = "back"
        }
        if (index >= 6) {
            document.getElementById("source").textContent = "source code"
        }
    } else if (language === "BG") {
        document.getElementById("tittle").textContent = "Спектрален анализ"
        document.getElementById("heading").textContent = "Спектрален анализ"
        document.getElementById("translate").textContent = "преведи"

        if (index < 6) {
        document.getElementById("next").textContent = "напред"
        }
        if (index > 0) {
            document.getElementById("back").textContent = "назад"
        }
        if (index >= 6) {
            document.getElementById("source").textContent = "изходен код"
        }
    }

    $(document).one('renderComplete', () => {
        $('#container').animate({ opacity: 1 }, 1000);
        document.getElementById("container").style.opacity = 1
    });
    setTimeout(() => $(document).trigger('renderComplete'), 0)
}

function back(ev) {
    ev.preventDefault()
    if (language === '' || language === 'EN') {
        document.getElementById("translate").textContent = "translate"

        if (index < 6) {
        document.getElementById("next").textContent = "next"
        }
        if (index > 0) {
            document.getElementById("back").textContent = "back"
        }
        if (index >= 6) {
            document.getElementById("source").textContent = "source code"
        }
    } else if (language === "BG") {
        document.getElementById("tittle").textContent = "Спектрален анализ"
        document.getElementById("heading").textContent = "Спектрален анализ"
        document.getElementById("translate").textContent = "преведи"

        if (index < 6) {
        document.getElementById("next").textContent = "напред"
        }
        if (index > 0) {
            document.getElementById("back").textContent = "назад"
        }
        if (index >= 6) {
            document.getElementById("source").textContent = "изходен код"
        }
    }
    index--
    document.getElementById("container").style.opacity = 0
    renderer()
}

function next(ev) {
    ev.preventDefault()
    if (language === '' || language === 'EN') {
        document.getElementById("translate").textContent = "translate"

        if (index < 6) {
        document.getElementById("next").textContent = "next"
        }
        if (index > 0) {
            document.getElementById("back").textContent = "back"
        }
        if (index >= 6) {
            document.getElementById("source").textContent = "source code"
        }
    } else if (language === "BG") {
        document.getElementById("tittle").textContent = "Спектрален анализ"
        document.getElementById("heading").textContent = "Спектрален анализ"
        document.getElementById("translate").textContent = "преведи"
        if (index < 6) {
        document.getElementById("next").textContent = "напред"
        }
        if (index > 0) {
            document.getElementById("back").textContent = "назад"
        }
        if (index >= 6) {
            document.getElementById("source").textContent = "изходен код"
        }
    }
    index++
    document.getElementById("container").style.opacity = 0
    renderer()
}

function onClick() {
    if (counter % 2 === 0) {
        slides = [
            { //introduction page
                img1: '',
                img2: '',
                video: '',
                text: `Това е едностранично приложение (SPA), създадено за проста интродукция в света на спектралния анализ. 
                Надявам се да Ви хареса!`,
            },

            { //linear specrum
                img1: "img/difference.jpg",
                img2: "img/how.jpg",
                video: "vids/line_spectrum.mp4",
                text: `Спектралната линия е по-слаба или по-силна област в иначе равномерен и непрекъснат спектър. 
                Това може да е резултат от емисия или абсорбция на светлина в тесен честотен диапазон, в сравнение с близките честоти. 
                Спектралните линии често се използват за идентифициране на атоми и молекули. 
                Тези "пръстоВи отпечатъци" могат да се сравнят с тези, събрани по-рано за атоми и молекули и 
                по този начин се използват за идентифициране на атомните и молекулните компоненти на звезди и планети, което в противен случай би било невъзможно.
                
                Спектралните линии са резултат от взаимодейстВието между квантова система 
                (обикновено атоми, но понякога молекули или атомни ядра) и един фотон. Когато фотонът има почти точното количество енергия 
                (което е свързано с неговата честота), за да позволи промяна в енергийното състояние на системата (в случая на атом, това обикновено е електрон, който променя орбитата си), 
                фотонът се абсорбира. След това енергията ще бъде спонтанно пренасочена, или като един фотон с същата честота като оригиналния, 
                или в каскада, при която сумата от енергиите на излъчените фотони ще бъде равна на енергията на абсорбирания фотон (при услоВие че системата се върне в своето оригинално състояние).`,
            },

            { //non-linear specrum
                img1: "img/non-linear.png",
                img2: "img/check.jpg",
                img3: "img/non.png",
                video: '',
                text: `Обзор на не-линейния спектрален анализ
                Нелинейният спектрален анализ се използва за изследване на системи и сигнали, които показват нелинейно поведение. За разлика от линейните системи, при които изходът е директно пропорционален на входа и може да бъде анализиран с линейни методи като преобразуването на Фурие, нелинейните системи генерират изходи с комплексно поведение като хармоници, смесване на честоти и хаотична динамика.
        
                Основни характеристики на нелинейните системи
                Принципът на суперпозиция не важи: Нелинейните системи не подчиняват принципа на суперпозиция, което означава, че изходът не е просто сумата на входовете.
        
                Честотни взаимодейстВия: Нелинейните процеси могат да генерират:
        
                Хармоници: Честоти, които са цели множители на оригиналните честоти.
                Интермодулация: НоВи честоти, които са суми или разлики на входните честоти.
                Преразпределение на енергията: Енергията в нелинейна система може да се разпространи в по-широк честотен спектър, за разлика от линейните системи, при които остава ограничена до специфични честоти.`,
            },

            { //types of spectral analysis
                img1: "img/difference.jpg",
                img2: "img/unnamed.gif",
                video: "vids/types.mp4",
                text: `Абсорбционен спектрален анализ
                Описание: Абсорбционният спектрален анализ се отнася до изследването на начина, по който материалите абсорбират светлина или електромагнитно излъчване при определени дължини на вълните. Когато светлината преминава през материал, определени дължини на вълните се абсорбират в заВисимост от свойствата на материала.
                Пример: В абсорбционната спектроскопия се записва абсорбционният спектър на материал, за да се идентифицират конкретни дължини на вълните (или честоти) на светлината, които се абсорбират от материала. Този метод се използва широко в химията и физиката за идентифициране на вещества.
                Приложения:
                Химичен анализ (например, UV-Vis абсорбционна спектроскопия)
                Атмосферни изследвания (например, изследване на абсорбцията на слънчева светлина от газове в атмосферата)
                Медицинска диагностика (например, използване на абсорбционни спектри за откриване на болести или токсини)
                Емисивен спектрален анализ
                Описание: Емисивният спектрален анализ се отнася до изследването на дължините на вълните на светлината, излъчвана от материал, когато той е възбуден, обикновено от топлина или радиация. Емисията на светлина е характерна за материала и може да се използва за неговата идентификация.
                Пример: В емисионната спектроскопия се анализира светлината, излъчвана от проба след като е възбудена (често от топлина или електрическа енергия). Излъчваната светлина съответства на конкретни дължини на вълните въз основа на енергийните преходи на атомите или молекулите в материала.
                Приложения:
                Атомна емисионна спектроскопия (например, идентифициране на елементи на базата на светлината, която излъчват)
                Флуоресценция (например, в биохимични тестове)
                Астрономия (например, изследване на емисионни линии на звезди и галактики)`
            },

            { //uses in the industry
                img1: '',
                img2: '',
                video: "vids/demo.mp4",
                text: `
                Използване на абсорбционен спектрален анализ:
        Химичен анализ:
        Идентифициране на химичния състав: Абсорбционните спектри помагат за идентифициране на присъстВието на конкретни съединения или елементи в проба чрез наблюдение на това кои дължини на вълните се абсорбират.
        Примери: UV-Vis (ултраВиолетова и Видима) спектроскопия за идентифициране на органични съединения, замърсители или токсини.
        Екологичен мониторинг:
        Атмосферни изследвания: Използва се за изучаване на това как газовете абсорбират конкретни дължини на вълните на светлината, като така подпомага изследванията за климатичните промени, откриването на замърсители и проучването на атмосферните услоВия.
        Пример: Мониторинг на абсорбцията на слънчево излъчване от парникоВи газове.
        Наука за материалите:
        Изследване на свойствата на материалите: Абсорбционните спектри предоставят информация за електронната структура на материалите, като например полупроводниците, които са важни за дизайна на материали за електронни устройства.
        Пример: Идентифициране на енергийната междина в полупроводниците.
        Биологични и медицински приложения:
        Диагностика на заболявания: Абсорбционната спектроскопия се използва в медицинската диагностика, например в анализите на кръв, където определени дължини на вълните се абсорбират от конкретни биомаркери или клетки.
        Пример: Измерване на нивата на кислород в кръвта чрез абсорбция на светлина (пулсова оксиметрия).
        Използване на емисивен спектрален анализ:
        Елементарен и химичен анализ:
        Идентифициране на елементи: Емисивните спектри се използват за идентифициране на елементите, присъстващи в пробата, на базата на характерните дължини на вълните на светлината, които излъчват.
        Пример: Атомната емисионна спектроскопия се използва за откриване на метали и елементи в проби, широко използвана в аналитичната химия.
        Астрономия и астрофизика:
        Изследване на звезди и галактики: Емисивните спектри от звезди, туманности и галактики разкриват химическия състав, температурата, плътността и дВижението на небесните тела.
        Пример: Емисивни линии от водород и други елементи се изучават, за да се определят физическите свойства на звездите.
        Флуоресценция и изображение:
        Биохимични приложения: Флуоресцентната спектроскопия, при която молекулите излъчват светлина след поглъщане на фотони, е основополагаща за откритията и анализа на протеини, нуклеиноВи киселини и други биомолекули в изследванията.
        Пример: Флуоресцентно маркиране в биомедицински изследвания за проследяване на протеини или патогени.
        Характеризация на материалите:
        Изследвания на термално излъчване: Термалната емисионна спектроскопия се използва за изследване на инфрачервеното излъчване от обекти, което помага в анализа на тяхната температура и състав.
        Пример: Използване на емисионни спектри за изследване на температурата на обекти като индустриални пещи или отдалечени планети.`,
            },

            { //devices used for such things
                img1: "img/analyzer.png",
                img2: "img/hand.png",
                video: '',
                text: `
                Спектрофотометър:
        Използване: Измерва абсорбцията или пропускането на светлина при различни дължини на вълните.
        Приложения: Обикновено се използва в химичния анализ, биомедицинските изследвания и екологични тестове. Например, в UV-Vis спектрофотометията, помага за определяне на концентрацията на специфични химикали в разтвори или откриване на замърсители в екологични проби.
        Раман спектрометър:
        
        Използване: Анализира нелинейното разсейване на светлината (Раманово разсейване), за да предостаВи молекулна и структурна информация.
        Приложения: Широко се използва в науката за материалите за изследване на химическия състав и структурата на материалите. В фармацевтиката помага за идентифициране на лекарствени съединения и откриване на химически промени във формулировки.
        Масов спектрометър:
        
        Използване: Измерва съотношението маса към заряд на йони за идентифициране на химически вещества.
        Приложения: Широко използван в съдебната наука, екологичния мониторинг и фармацевтичния анализ. Помага за откриване и идентифициране на замърсители или анализ на сложни смеси, като например определяне на съставните части на неизвестни съединения.`,
            },

            { //ending page
                img1: '',
                img2: '',
                video: '',
                text: "Благодаря Ви, че гледахте!!! Източници: Wikipedia, lit-html, jQuery, @Physics Demos, @Physics4students, @Jan visual physics линии с код:623 , JS:556, HTML:19, CSS:48",
            },
        ]

        document.getElementById("tittle").textContent = "Спектрален анализ"
        document.getElementById("heading").textContent = "Спектрален анализ"
        document.getElementById("translate").textContent = "преведи"

        if (index < 6) {
        document.getElementById("next").textContent = "напред"
        }
        if (index > 0) {
            document.getElementById("back").textContent = "назад"
        }
        if (index >= 6) {
            document.getElementById("source").textContent = "изходен код"
        }
       
        language = "BG"
    } else {
        slides = [
            { //introduction page
                img1: '',
                img2: '',
                video: '',
                text: `This is a S.P.A (single page application) built for a simple introduction in the world of spectral analysis
                hope you enjoy!!!`,
            },

            { //linear specrum
                img1: "img/difference.jpg",
                img2: "img/how.jpg",
                video: "vids/line_spectrum.mp4",
                text: `A spectral line is a weaker or stronger region in an otherwise uniform and continuous 
                spectrum. It may result from emission or absorption of light in a narrow frequency range, compared with the 
                nearby frequencies. Spectral lines are often used to identify atoms and molecules. 
                These "fingerprints" can be compared to the previously collected 
                ones of atoms and molecules, and 
                are thus used to identify the atomic and molecular 
                components of stars and planets, which would otherwise be impossible.
                
                Spectral lines are the result of interaction between a quantum system 
                (usually atoms, but sometimes molecules or atomic nuclei) and a single photon. When a photon has about the right amount of energy 
                (which is connected to its frequency) to allow a change in the energy state of the system (in the case of an atom this is usually an electron changing orbitals), 
                the phon itos absorbed. Then the energy will be spontaneously re-emitted, either as one photon at the same frequency as the original 
                one or in a cascade, where the sum of the energies of the 
                photons emitted will be equal to the energy of the one absorbed (assuming the system returns to its original state).`,

            },

            { //non-linear specrum
                img1: "img/non-linear.png",
                img2: "img/check.jpg",
                img3: "img/non.png",
                video: '',
                text: `Non-linear Spectral Analysis Overview
                Non-linear spectral analysis is used to study systems and signals that exhibit non-linear behavior. Unlike linear systems, where the output is directly proportional to the input and can be analyzed using linear methods like Fourier Transform, non-linear systems produce outputs with complex behaviors such as harmonics, frequency mixing, and chaotic dynamics.
        
                Key Features of Non-linear Systems
                Superposition Does Not Apply: Non-linear systems do not obey the principle of superposition, meaning the output is not simply the sum of the inputs.
        
                Frequency Interactions: Non-linear processes can generate:
        
                Harmonics: Frequencies that are integer multiples of the original frequencies.
                Intermodulation: New frequencies that are sums or differences of input frequencies.
                Energy Redistribution: Energy in a non-linear system can spread across a broader frequency spectrum, unlike in linear systems where it remains confined to specific frequencies.`,
            },

            { //types of spectral analysis
                img1: "img/difference.jpg",
                img2: "img/unnamed.gif",
                video: "vids/types.mp4",
                text: `Absorptive Spectral Analysis
                Description: Absorptive spectral analysis refers to the study of how materials absorb light or electromagnetic radiation at specific wavelengths. When light passes through a material, certain wavelengths are absorbed depending on the material's properties.
                Example: In absorption spectroscopy, the absorption spectrum of a material is recorded to identify the specific wavelengths (or frequencies) of light that are absorbed by the material. This method is widely used in chemistry and physics to identify substances.
                Applications:
                Chemical analysis (e.g., UV-Vis absorption spectroscopy)
                Atmospheric studies (e.g., studying the absorption of sunlight by gases in the atmosphere)
                Medical diagnostics (e.g., using absorption spectra to detect diseases or toxins)
                Emissive Spectral Analysis
                Description: Emissive spectral analysis refers to the study of the wavelengths of light emitted by a material when it is excited, usually by heat or radiation. The emission spectrum is characteristic of the material and can be used to identify it.
                Example: In emission spectroscopy, light emitted by a sample is analyzed after it has been excited (often by heat or electrical energy). The emitted light corresponds to specific wavelengths based on the energy transitions of the atoms or molecules in the material.
                Applications:
                Atomic emission spectroscopy (e.g., identifying elements based on the light they emit)
                Fluorescence (e.g., in biochemical assays)
                Astronomy (e.g., studying the emission lines of stars and galaxies)
        `,
            },

            { //uses in the industry
                img1: '',
                img2: '',
                video: "vids/demo.mp4",
                text: `
                Uses of Absorptive Spectral Analysis:
        Chemical Analysis:
        Identifying Chemical Composition: Absorption spectra help identify the presence of specific compounds or elements in a sample by observing which wavelengths are absorbed.
        Examples: UV-Vis (Ultraviolet-Visible) spectroscopy for identifying organic compounds, environmental contaminants, or pollutants.
        Environmental Monitoring:
        Atmospheric Studies: Used to study how gases absorb specific wavelengths of light, aiding in climate change research, pollutant detection, and the study of atmospheric conditions.
        Example: Monitoring the absorption of solar radiation by greenhouse gases.
        Material Science:
        Studying Material Properties: Absorption spectra provide information on the electronic structure of materials, such as semiconductors, which are important in material design for electronic devices.
        Example: Identifying the band gap in semiconductors.
        Biological and Medical Applications:
        Disease Diagnosis: Absorptive spectroscopy is used in medical diagnostics, such as blood analysis, where certain wavelengths are absorbed by specific biomarkers or cells.
        Example: Measuring oxygen levels in blood through absorption of light (pulse oximetry).
        Uses of Emissive Spectral Analysis:
        Elemental and Chemical Analysis:
        Identifying Elements: Emission spectra are used to identify the elements present in a sample based on the characteristic wavelengths of light they emit.
        Example: Atomic emission spectroscopy is used to detect metals and elements in samples, widely used in analytical chemistry.
        Astronomy and Astrophysics:
        Studying Stars and Galaxies: Emission spectra from stars, nebulae, and galaxies reveal the chemical composition, temperature, density, and motion of celestial objects.
        Example: Emission lines from hydrogen and other elements are studied to determine the physical properties of stars.
        Fluorescence and Imaging:
        Biochemical Applications: Fluorescence spectroscopy, where molecules emit light after absorbing photons, is crucial for detecting and analyzing proteins, nucleic acids, and other biomolecules in research.
        Example: Fluorescent labeling in biomedical research for tracking proteins or pathogens.
        Material Characterization:
        Thermal Emission Studies: Thermal emission spectroscopy is used to study the emission of infrared radiation by objects, which helps in analyzing their temperature and surface composition.
        Example: Using emission spectra to study the temperature of objects like industrial furnaces or distant planets.
                `,
            },

            { //devices used for such things
                img1: "img/analyzer.png",
                img2: "img/hand.png",
                video: '',
                text: `
                Spectrophotometer:
        Use: Measures light absorption or transmission at different wavelengths.
        Applications: Commonly used in chemical analysis, biomedical research, and environmental testing. For example, in UV-Vis spectrophotometry, it helps identify the concentration of specific chemicals in solutions or detect pollutants in environmental samples.
        Raman Spectrometer:
        
        Use: Analyzes inelastic scattering of light (Raman scattering) to provide molecular and structural information.
        Applications: Extensively used in material science to study the chemical composition and structure of materials. In pharmaceuticals, it helps identify drug compounds and detect chemical changes in formulations.
        Mass Spectrometer:
        
        Use: Measures the mass-to-charge ratio of ions to identify chemical substances.
        Applications: Widely used in forensic science, environmental monitoring, and pharmaceutical analysis. It helps detect and identify pollutants or analyze complex mixtures, such as determining the components of unknown compounds.
                `,
            },

            { //ending page
                img1: '',
                img2: '',
                video: '',
                text: "thanks for watching!!! recources: wikipedia, lit-html, jQuery, @Physics Demos, @Physics4students, @Jan visual physics lines of code:623 , JS:556, HTML:19, CSS:48",
            },
        ]

        document.getElementById("tittle").textContent = "spectral analysis"
        document.getElementById("heading").textContent = "Spectral analysis"
        document.getElementById("translate").textContent = "translate"

        if (index < 6) {
        document.getElementById("next").textContent = "next"
        }

        if (index > 0) {
            document.getElementById("back").textContent = "back"
        }

        if (index >= 6) {
            document.getElementById("source").textContent = "source code"
        }

        language = "EN"
    }

    renderer()
    counter++
}

window.onload = (ev) => {
    ev.preventDefault()

    renderer()
}