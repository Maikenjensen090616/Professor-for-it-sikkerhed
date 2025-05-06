const scenarios = [
    {
        question: "Du finder et offentligt Wi-Fi netværk med navnet 'Gratis_Hurtig_Internet'. Hvad gør du?",
        options: [
            "Forbinder straks for at spare på dit mobildata",
            "Bruger kun din mobildata eller en VPN-forbindelse",
            "Forbinder, men undgår at besøge følsomme websites"
        ],
        correct: 1,
        feedback: [
            "❌ Farligt! Cyberkriminelle opretter ofte falske Wi-Fi netværk med tillokkende navne. Når du forbinder, kan de overvåge al din trafik og potentielt stjæle dine login-oplysninger, bankdata og andre følsomme informationer.",
            "✅ Smart valg! Ved at bruge din egen mobildata eller en pålidelig VPN-tjeneste, krypterer du din datatrafik og beskytter dine oplysninger mod potentielle hackere på offentlige netværk. Det er altid bedre at være på den sikre side.",
            "❌ Risikabelt! Selv når du undgår følsomme websites, kan hackere stadig opfange dine cookies, passwords og andre data fra almindelig browsing. De kan også injicere malware i din datatrafik."
        ],
      
    },
    {
        question: "Du modtager en venneanmodning fra en person, du ikke kender. Hvad gør du?",
        options: [
            "Accepterer anmodningen  – det er altid godt at udvide sit netværk",
            "Tjekker profilen for fælles venner og tidligere opslag for at vurdere, om den er ægte",
            "Svarer med det samme og deler dine kontaktoplysninger, hvis de virker venlige"
        ],
        correct: 1,
        feedback: [
            "❌ Pas på! At acceptere ukendte anmodninger kan føre til identitetstyveri eller svindel. Cyberkriminelle opretter ofte falske profiler for at indsamle personlige oplysninger eller sprede malware. De kan bruge din profil til at nå ud til dine venner og familie.",
            "✅ Godt tænkt! Det er vigtigt at verificere profiler, før du accepterer anmodninger. Ved at tjekke fælles venner, tidligere opslag og profilhistorik kan du bedre vurdere, om profilen er ægte. Vær dog stadig forsigtig, da nogle falske profiler kan være meget overbevisende.",
            "❌ Vær forsigtig! Del aldrig personlige oplysninger med fremmede på nettet, selv hvis de virker venlige. Cyberkriminelle bruger ofte social engineering til at opbygge tillid før de misbruger informationen."
        ],
        
    },
    {
        question: "Du får et opkald fra 'Microsoft Support', der fortæller, at din computer har en virus. Hvad gør du?",
        options: [
            "Følger deres instruktioner og giver dem fjernadgang",
            "Afbryder opkaldet og undersøger selv, om der er et problem",
            "Beder dem sende en e-mail med flere oplysninger"
        ],
        correct: 1,
        feedback: [
            "❌ Stop! Dette er en klassisk teknisk support-svindel. Ved at give fjernadgang får svindlerne fuld kontrol over din computer og kan installere malware eller stjæle følsomme data.",
            "✅ Præcis! Microsoft og andre store tech-virksomheder kontakter aldrig brugere uopfordret om computerproblemer. Hvis du er bekymret, kan du selv kontakte support gennem deres officielle hjemmeside.",
            "❌ Ikke smart! Svindlere vil ofte forsøge at fortsætte kontakten gennem andre kanaler. Det bedste er at afbryde al kommunikation med dem."
        ],
        
    },
    {
        question: "Du finder en USB-nøgle på gaden eller i en offentlig bygning. Hvad gør du?",
        options: [
            "Sætter den i din computer for at se, om du kan finde ejeren",
            "Afleverer den til en sikkerhedsansvarlig på stedet",
            "Smider den ud, så ingen andre kan bruge den"
        ],
        correct: 1,
        feedback: [
            "❌ Meget farligt! USB-nøgler kan indeholde malware der automatisk installeres når de tilsluttes. Nogle USB-enheder kan endda ødelægge din computer ved at sende elektriske stød til USB-porten.",
            "✅ Sikkerhedsbevidst valg! Cyberkriminelle efterlader nogle gange bevidst USB-nøgler på offentlige steder som en del af et malware-angreb. Ved at aflevere den til sikkerhedspersonalet kan de håndtere den forsvarligt og måske finde den rigtige ejer.",
            "❌ Ikke optimalt! Andre kunne finde og tilslutte USB'en. Aflever den i stedet til sikkerhedspersonale eller IT-support, som kan håndtere den sikkert og måske hjælpe med at finde ejeren."
        ],
        
    },
    {
        question: "Din ven sender en besked med et link og skriver: 'Wow, se hvem der har nævnt dig her!' Hvad gør du?",
        options: [
            "Klikker på linket med det samme for at se, hvad det handler om",
            "Spørger din ven, om de virkelig har sendt beskeden, før du klikker",
            "Ignorerer beskeden, da det sikkert ikke er vigtigt"
        ],
        correct: 1,
        feedback: [
            "❌ Farligt valg! Selv links fra venner kan være farlige. Hackere der har overtaget en konto sender ofte phishing-links til alle kontaktpersoner.",
            "✅ Smart tænkt! Ved at kontakte din ven gennem en anden kanal (f.eks. telefon) kan du verificere om beskeden faktisk kommer fra dem. Hvis deres konto er hacket, kan du også advare dem.",
            "❌ Ikke optimalt! Hvis din vens konto er kompromitteret, bør du informere dem så de kan sikre deres konto. Ignorer ikke potentielle sikkerhedstrusler."
        ],
        
    },
    {
        question: "Du modtager en e-mail fra din bank, der beder dig om at bekræfte dine loginoplysninger. Hvad gør du?",
        options: [
            "Klikker på linket i e-mailen og indtaster dine oplysninger",
            "Logger ind via bankens officielle hjemmeside for at tjekke din konto",
            "Svarer på e-mailen og spørger, hvad problemet er"
        ],
        correct: 1,
        feedback: [
            "❌ Advarsel! Dette er et klassisk phishing-forsøg. Banker sender aldrig e-mails med direkte links til login. Disse links fører ofte til falske hjemmesider, der er designet til at stjæle dine login-oplysninger.",
            "✅ Klogt valgt! Ved at gå direkte til bankens officielle hjemmeside (indtast URL'en selv eller brug et bogmærke) sikrer du dig mod falske login-sider. Hvis der er et reelt problem med din konto, vil du kunne se det, når du logger ind normalt.",
            "❌ Risikabelt! Svindlere bruger ofte e-mail-korrespondance til at opbygge tillid og få flere personlige oplysninger. De kan også sende links eller inficerede vedhæftninger i deres svar."
        ],
       
    },
    {
        question: "Du får en SMS, der siger, at du har vundet en konkurrence, du ikke kan huske at have deltaget i. Hvad gør du?",
        options: [
            "Klikker på linket i SMS'en for at modtage din præmie",
            "Sletter beskeden uden at reagere",
            "Sender beskeden videre til dine venner for at høre, om de også har fået den"
        ],
        correct: 1,
        feedback: [
            "Forkert! Svindel-SMS'er forsøger ofte at lokke brugere til at klikke på falske links.",
            "Korrekt! At slette beskeden er den bedste løsning.",
            "Forkert! At dele beskeden kan sprede svindlen videre."
        ],
       
    },
    {
        question: "En online butik tilbyder et populært produkt til en utrolig lav pris. Hvad gør du?",
        options: [
            "Køber med det samme før tilbuddet udløber",
            "Undersøger butikkens legitimitet og anmeldelser grundigt",
            "Deler tilbuddet med venner først"
        ],
        correct: 1,
        feedback: [
            "❌ Pas på! Når noget er for godt til at være sandt, er det det ofte også. Svindlere opretter falske webshops med utroligt lave priser for at lokke folk til at betale, men sender aldrig varerne. De kan også stjæle dine kreditkortoplysninger.",
            "✅ Klogt valgt! Før du handler på en ukendt webshop, bør du: 1) Tjekke trustpilot-anmeldelser, 2) Søge efter butikkens fysiske adresse og CVR-nummer, 3) Undersøge om webshoppen bruger sikker betaling (https og kendte betalingstjenester).",
            "❌ Ikke smart! Ved at dele mistænkelige tilbud hjælper du potentielt svindlere med at sprede deres scam. Dine venner stoler måske på din anbefaling og bliver dermed mere tilbøjelige til at blive snydt."
        ],
        
    }
];

const scenarioContainer = document.getElementById('scenario');
const summaryContainer = document.getElementById('summary');
const summaryChoicesContainer = document.getElementById('summary-choices');

let currentScenarioIndex = 0;
let userChoices = [];

// Indlæs tidligere gemte valg hvis de findes
const savedChoices = localStorage.getItem('securityQuizChoices');
if (savedChoices) {
    userChoices = JSON.parse(savedChoices);
}

// Funktion til at gemme valg i localStorage
function saveChoices() {
    localStorage.setItem('securityQuizChoices', JSON.stringify(userChoices));
}

// Funktion til at opdatere progress bar
function updateProgressBar() {
    const progress = (currentScenarioIndex) / scenarios.length * 100;
    document.querySelector('.progress-bar__fill').style.width = `${progress}%`;
}

// Funktion til at starte spillet
function startGame() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('scenario').style.display = 'block';
    currentScenarioIndex = 0;
    userChoices = [];
    
    console.log('Starter spillet...');
    const intro = document.getElementById('intro');
    if (!intro) {
        console.error('Intro element ikke fundet!');
        return;
    }
    intro.style.display = 'none';

    if (!scenarioContainer) {
        console.error('Scenario container ikke fundet!');
        return;
    }
    scenarioContainer.style.display = 'block';

    updateProgressBar();
    loadScenario();
}

// Funktion til at loade et scenario
function loadScenario() {
    console.log('Loader scenario:', currentScenarioIndex);
    if (currentScenarioIndex >= scenarios.length) {
        console.log('Ingen flere scenarier, viser opsummering');
        showSummary();
        return;
    }

    const scenario = scenarios[currentScenarioIndex];
    console.log('Nuværende scenario:', scenario);

    if (!scenario) {
        showSummary();
        return;
    }

    scenarioContainer.innerHTML = `
        <div class="navigation-buttons">
            <button id="homeButton" class="back-button">
                <i class="fas fa-home"></i> Start
            </button>
            ${currentScenarioIndex > 0 ? `
                <button id="backButton" class="back-button">
                    <i class="fas fa-arrow-left"></i> Forrige
                </button>
            ` : ''}
        </div>
        <div class="progress-bar">
            <div class="progress-bar__fill" style="width: ${(currentScenarioIndex / scenarios.length) * 100}%"></div>
        </div>
        <h2>${scenario.question}</h2>
        <div class="options">
            ${scenario.options.map((option, index) => `
                <button class="option" onclick="selectAnswer(${index})">${option}</button>
            `).join('')}
        </div>
    `;

    // Tilføj event listerne til tilbage-knappen
   /*
    document.getElementById('backButton').addEventListener('click', function() {
        if (currentScenarioIndex > 0) {
            currentScenarioIndex--;
            userChoices.pop(); // Fjern sidste valg
            loadScenario();
            updateProgressBar();
        } else {
            document.getElementById('scenario').style.display = 'none';
            document.getElementById('intro').style.display = 'block';
        }
    });
    */

    // Tilføj event listener til hjem-knappen
    document.getElementById('homeButton').addEventListener('click', function() {
        document.getElementById('scenario').style.display = 'none';
        document.getElementById('intro').style.display = 'block';
        currentScenarioIndex = 0;
        userChoices = [];
        updateProgressBar();
    });

    // Tilføj billede for scenariet
    
    scenario.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = () => selectAnswer(index);
        scenarioContainer.appendChild(button);
    });

    scenarioContainer.style.display = 'block';
}

// Funktion til at vælge et svar
function showFeedback(scenario, selectedIndex, feedbackContainer) {
    const isCorrect = selectedIndex === scenario.correct;
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const emoji = isCorrect ? '✨' : '💡';
    const title = isCorrect ? 'Godt klaret!' : 'Husk på...';

    feedbackContainer.innerHTML = `
        <div class="feedback-message ${feedbackClass}">
            <p class="feedback-emoji">${emoji}</p>
            <h3 class="feedback-title">${title}</h3>
            <p class="feedback-text">${scenario.feedback[selectedIndex]}</p>
            <button class="continue-button">
                <span>Fortsæt</span>
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M1 8h12M8 3l5 5-5 5" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    `;

    // Tilføj animation classes med forsinkelse
    requestAnimationFrame(() => {
        feedbackContainer.querySelector('.feedback-message').classList.add('show');
    });

    // Håndter fortsæt-knap
    const continueButton = feedbackContainer.querySelector('.continue-button');
    continueButton.addEventListener('click', () => {
        currentScenarioIndex++;
        if (currentScenarioIndex < scenarios.length) {
            loadScenario();
        } else {
            showSummary();
        }
    });
}

function selectAnswer(selectedIndex) {
    const scenario = scenarios[currentScenarioIndex];
    const choice = {
        scenario: scenario.question,
        choice: scenario.options[selectedIndex],
        correct: selectedIndex === scenario.correct,
        feedback: scenario.feedback[selectedIndex]
    };
    userChoices.push(choice);

    // Vis feedback på knapperne
    const buttons = scenarioContainer.querySelectorAll('.option');
    buttons.forEach((button, index) => {
        if (index === scenario.correct) {
            button.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== scenario.correct) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    // Find eller opret feedback container
    let feedbackContainer = scenarioContainer.querySelector('.feedback-container');
    if (!feedbackContainer) {
        feedbackContainer = document.createElement('div');
        feedbackContainer.className = 'feedback-container';
        scenarioContainer.appendChild(feedbackContainer);
    }

    // Vis feedback
    showFeedback(scenario, selectedIndex, feedbackContainer);

    // Opdater progress bar
    const progress = (currentScenarioIndex + 1) / scenarios.length * 100;
    document.querySelector('.progress-bar__fill').style.width = `${progress}%`;

    // Gem resultater
    saveChoices();
}

// Funktion til at vise opsummering
function showSummary() {
    scenarioContainer.style.display = 'none';
    summaryContainer.style.display = 'block';

    // Beregn score
    const correctAnswers = userChoices.filter(choice => choice.correct).length;
    const totalQuestions = scenarios.length;
    const score = (correctAnswers / totalQuestions) * 100;

    // Vis forskellige slutninger baseret på score
    let conclusion = '';
    if (score >= 80) {
        conclusion = `<div class="final-score">
            <h3>Ekspert i Datasikkerhed! 👑</h3>
            <p class="score">${score}%</p>
            <p>Fantastisk! Du har vist fremragende forståelse for datasikkerhed. 
            Du er godt rustet til at håndtere digitale trusler og beskytte dine data.</p>
        </div>`;
    } else if (score >= 50) {
        conclusion = `<div class="final-score">
            <h3>På rette vej 🌟</h3>
            <p class="score">${score}%</p>
            <p>Du har en god grundlæggende forståelse for datasikkerhed, 
            men der er plads til forbedring. Prøv igen for at blive endnu bedre!</p>
        </div>`;
    } else {
        conclusion = `<div class="final-score">
            <h3>Brug for mere øvelse 📚</h3>
            <p class="score">${score}%</p>
            <p>Det er vigtigt at forbedre din forståelse af datasikkerhed. 
            Tag quizzen igen og lær af feedbacken for at beskytte dig selv bedre online.</p>
        </div>`;
    }

    summaryChoicesContainer.innerHTML = conclusion;

    userChoices.forEach(choice => {
        const choiceElement = document.createElement("div");
        choiceElement.classList.add(choice.correct ? 'correct' : 'incorrect');
        choiceElement.innerHTML = `<p><strong>${choice.scenario}</strong><br>Dit valg: ${choice.choice}<br>Feedback: ${choice.feedback}</p>`;
        summaryChoicesContainer.appendChild(choiceElement);
    });

    // Tilføj en "Prøv igen" knap
    const retryButton = document.createElement("button");
    retryButton.innerText = "Prøv igen";
    retryButton.onclick = () => {
        currentScenarioIndex = 0;
        userChoices = [];
        saveChoices();
        location.reload();
    };
    summaryChoicesContainer.appendChild(retryButton);

    // Gem resultater i localStorage
    saveChoices();
}

document.addEventListener('DOMContentLoaded', function() {
    // Tilbage-knap funktionalitet
    document.getElementById('backButton').addEventListener('click', function() {
        if (currentScenarioIndex > 0) {
            currentScenarioIndex--;
            userChoices.pop(); // Fjern sidste valg
            loadScenario();
            updateProgressBar();
        } else {
            document.getElementById('scenario').style.display = 'none';
            document.getElementById('intro').style.display = 'block';
        }
    });
});