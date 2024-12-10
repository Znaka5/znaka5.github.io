export function bulgarian() {
    document.getElementById("title").textContent = "Магнитни свойства"
    document.getElementById("main-text").textContent = "Магнитни свойства на елементите"
    document.getElementById("basic-introduction").textContent = "Тази уеб страница показва"
    document.getElementById("basic-introduction01").textContent = "Примери за елементи с такива свойства."
    const bg = document.getElementById("bg")
    const en = document.getElementById("en")
    en.innerText = "АНГ"
    bg.innerText = "БГ"
    document.getElementById("translate").textContent = "Превод:"

    document.getElementById("translate").appendChild(bg)
    document.getElementById("translate").appendChild(en)

    const infoText = Array.from(document.querySelectorAll("#text"))
    const CreditsText = Array.from(document.querySelectorAll("#info"))
    const link = document.querySelector("#download")

    infoText[0].textContent = `Парамагнетизмът е форма на магнетизъм, при която някои материали слабо се 
    привличат от външно приложено магнитно поле и образуват вътрешни, индуцирани магнитни полета в посоката 
    на приложеното поле. За разлика от тях, диамагнитните материали се отблъскват от магнитни полета и 
    образуват индуцирани магнитни полета в обратна на приложеното поле посока. Парамагнитните материали 
    включват повечето химични елементи и някои съединения; те имат 
    относителна магнитна проницаемост, малко по-голяма от 1 
    (т.е. малка положителна магнитна възприемчивост) и следователно се привличат към магнитни полета.`

    infoText[1].textContent = `Диамагнетизмът е свойство на материали, които се отблъскват от магнитно поле; 
    приложено магнитно поле създава индуцирано магнитно поле в тях в противоположната посока, което предизвиква отблъскваща сила. 
    За разлика от това, парамагнитните и феромагнитните материали се привличат от магнитно поле.
    Диамагнетизмът е квантовомеханичен ефект, който се проявява при всички материали; 
    когато той е единственият принос към магнетизма, материалът се нарича диамагнитен.`

    infoText[2].textContent = `Феромагнетизмът е свойство на определени материали (като желязото), което води до значителна, 
    видима магнитна проницаемост и в много случаи до значителна магнитна коерцитивност, 
    което позволява на материала да се превърне в постоянен магнит. Феромагнитните материали се привличат осезаемо от магнит, 
    което е следствие от тяхната висока магнитна проницаемост. Магнитната проницаемост описва индуцираното намагнитване на материал в 
    присъствието на външно магнитно поле. Например, тази временна намагнитеност в стоманена плоча обяснява привличането на плочата към магнита.`

    CreditsText[0].textContent = `Информацията е взета от Wikipedia, видеоклипове в YouTube (@cg-physics-global, @7activestudio, @Aasoka), използвана е библиотеката Jquery за анимации.`
    CreditsText[1].textContent = `HTML: 89 реда, JS: 360 реда, CSS: 83 реда`
    link.textContent = `изходен код тук`

    const para = document.getElementById("para-btn")
    const paraHide = document.getElementById("para-hide")
    para.innerText = "Покажи"
    paraHide.innerText = "Скрий"

    const dia = document.getElementById("dia-btn")
    const diaHide = document.getElementById("dia-hide")
    dia.innerText = "Покажи"
    diaHide.innerText = "Скрий"

    const ferro = document.getElementById("ferro-btn")
    const ferroHide = document.getElementById("ferro-hide")
    ferro.innerText = "Покажи"
    ferroHide.innerText = "Скрий"

    const credits = document.getElementById("credits-btn")
    const creditsHide = document.getElementById("credits-hide")
    credits.innerText = "Покажи"
    creditsHide.innerText = "Скрий"

    const list = Array.from(document.querySelectorAll("li"))

    list[0].textContent = "Парамагнити"
    list[0].append(para)
    list[0].append(paraHide)
    
    list[1].textContent = "Диамагнити"
    list[1].append(dia)
    list[1].append(diaHide)

    list[2].textContent = "Феромагнити"
    list[2].append(ferro)
    list[2].append(ferroHide)

    list[3].textContent = "Източник"
    list[3].append(credits)
    list[3].append(creditsHide)
}


export function english() {
    document.getElementById("title").textContent = "Magnetic properties"
    document.getElementById("main-text").textContent = "Magnetic properties of elements"
    document.getElementById("basic-introduction").textContent = "This web page shows"
    document.getElementById("basic-introduction01").textContent = "examples of elements with such properties."
    const bg = document.getElementById("bg")
    const en = document.getElementById("en")
    en.innerText = "EN"
    bg.innerText = "BG"
    document.getElementById("translate").textContent = "Translate:"

    document.getElementById("translate").appendChild(bg)
    document.getElementById("translate").appendChild(en)

    const infoText = Array.from(document.querySelectorAll("#text"))
    const CreditsText = Array.from(document.querySelectorAll("#info"))
    const link = document.querySelector("#download")

    infoText[0].textContent = `Paramagnetism is a form of magnetism whereby some materials are weakly
            attracted by an externally applied magnetic field, and form internal, induced magnetic fields in the
            direction of the applied magnetic field. In contrast with this behavior, diamagnetic materials are repelled
            by magnetic fields and form induced magnetic fields in the direction opposite to that of the applied
            magnetic field. Paramagnetic materials include most chemical elements and some compounds; they have a
            relative magnetic permeability slightly greater than 1 (i.e., a small positive magnetic susceptibility) and
            hence are attracted to magnetic fields.`

    infoText[1].textContent = `Diamagnetism is the property of materials that are repelled by a magnetic
            field; an applied magnetic field creates an induced magnetic field in them in the opposite direction,
            causing a repulsive force. In contrast, paramagnetic and ferromagnetic materials are attracted by a magnetic
            field. Diamagnetism is a quantum mechanical effect that occurs in all materials; when it is the only
            contribution to the magnetism, the material is called diamagnetic.`

    infoText[2].textContent = `Ferromagnetism is a property of certain materials (such as iron) that
            results in a
            significant, observable magnetic permeability, and in many cases, a significant magnetic coercivity,
            allowing the material to form a permanent magnet. Ferromagnetic materials are noticeably attracted
            to a
            magnet, which is a consequence of their substantial magnetic permeability.Magnetic permeability
            describes
            the induced magnetization of a material due to the presence of an external magnetic field. For
            example, this
            temporary magnetization inside a steel plate accounts for the plate's attraction to a magnet.`

    CreditsText[0].textContent = `Information gotten from Wikipedia, vids YT(@cg-physics-global, @7activestudio, @Aasoka) used Jquery library for animations`
    CreditsText[1].textContent = `HTML: 89 lines, Js: 360 lines, Css: 84 lines`
    link.textContent = `source code here`

    const para = document.getElementById("para-btn")
    const paraHide = document.getElementById("para-hide")
    para.innerText = "Show"
    paraHide.innerText = "Hide"

    const dia = document.getElementById("dia-btn")
    const diaHide = document.getElementById("dia-hide")
    dia.innerText = "Show"
    diaHide.innerText = "Hide"

    const ferro = document.getElementById("ferro-btn")
    const ferroHide = document.getElementById("ferro-hide")
    ferro.innerText = "Show"
    ferroHide.innerText = "Hide"

    const credits = document.getElementById("credits-btn")
    const creditsHide = document.getElementById("credits-hide")
    credits.innerText = "Show"
    creditsHide.innerText = "Hide"

    const list = Array.from(document.querySelectorAll("li"))

    list[0].textContent = "Paramagnetic"
    list[0].append(para)
    list[0].append(paraHide)
    
    list[1].textContent = "Diamagnetic"
    list[1].append(dia)
    list[1].append(diaHide)

    list[2].textContent = "Ferromagnetic"
    list[2].append(ferro)
    list[2].append(ferroHide)

    list[3].textContent = "Credits"
    list[3].append(credits)
    list[3].append(creditsHide)
}