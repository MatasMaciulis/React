// createPortal yra funkcija, kuri priklauso nuo React bibliotekos react-dom.
// Ši funkcija leidžia įterpti React komponentą į DOM elementą, kuris nėra tiesiogiai susijęs su jūsų pagrindiniu React šakniniu elementu (root elementu). 
// Tai naudinga, kai norite, kad tam tikri komponentai būtų rodomi už šakniniu elementu esančioje DOM medžio dalyje, pvz: viršuje <body>.
// Pagrindinė createPortal funkcijos nauda yra tai, kad ji leidžia jums turėti daugelį šaltinių DOM elementų, kuriuose galite rodyti savo React komponentus. 
// Tai yra naudinga, pavyzdžiui, kurti modalinius langus, perspėjimus arba visiškai kitas dalis, kurios turėtų būti atskirai nuo pagrindinio programos turinio.

// Ši dalis kodo parodo, kaip naudojama createPortal:

return createPortal(
    <div className={styles.container}>
        {/* Modal content */}
    </div>,
    document.body
);

// Ši išraiška rodo, kaip modalinio lango turinys yra perduodamas createPortal funkcijai. Ji priima du argumentus:
// 1) JSX elemento, kurį norite įterpti į DOM, taisyklės.
// 2) DOM elemento, į kurį norite įterpti JSX elementą.

// Tai leidžia modaliniam langui būti uždėtui tiesiogiai ant <body> elemento, nepriklausomai nuo komponento hierarchijos.
// Tai padeda išvengti konfliktų su kitais CSS taisyklėmis ir komponentais jūsų programoje.