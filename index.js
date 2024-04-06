const express=require("express")
const app=express()
const cors=require("cors")
const PORT= process.env.PORT ||2000


app.use(cors())
app.use(express())
app.use("/",(req,res)=>{
    res.send(
      
        {
        "status": "ok",
        "totalResults": 42103,
        "articles": [
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Cheryl Eddy",
        "title": "If Space Aliens Invade, Barack Obama Is Ready to Do His Part",
        "description": "While Bill Pullman’s Independence Day character will likely always be the gold standard for how the President of the United States should react if hostile aliens invade, a certain real-life former POTUS seems a probable close second. It’s sci-fi guyBarack Oba…",
        "url": "https://gizmodo.com/obama-3-body-problem-cameo-aliens-game-of-thrones-1851344741",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/587da0d670ef92b6903fe8d2edebaaa2.jpg",
        "publishedAt": "2024-03-18T17:45:00Z",
        "content": "While Bill Pullmans Independence Day character will likely always be the gold standard for how the President of the United States should react if hostile aliens invade, a certain real-life former POT… [+1381 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Brent Crane",
        "title": "'No CCP in USA!!' Inside a Michigan town's unhinged war over a Chinese battery plant.",
        "description": "Some saw the battery plant as an economic godsend. Others saw it as a Chinese communist takeover.",
        "url": "https://www.businessinsider.com/inside-michigan-towns-war-over-a-chinese-owned-battery-plant-2024-3",
        "urlToImage": "https://i.insider.com/65cd13dbf533b039a883b031?width=1200&format=jpeg",
        "publishedAt": "2024-03-10T10:00:01Z",
        "content": "The backlash in Green Charter represents something seldom seen since the Red Scare: a quasi-militant, homegrown resistance to the perceived threat of communism at home.Matt Harrison Clough for BI\r\nWh… [+22185 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NPR"
        },
        "author": "Rachel Treisman",
        "title": "Cash-strapped Trump is now selling $60 Bibles, U.S. Constitution included",
        "description": "The \"God Bless The USA\" Bible is inspired by the Lee Greenwood anthem and includes copies of the nation's founding documents. Trump launched it ahead of Easter as his financial woes mount.",
        "url": "https://www.npr.org/2024/03/27/1241186975/donald-trump-bible-god-bless-usa",
        "urlToImage": "https://media.npr.org/assets/img/2024/03/27/gettyimages-1216826643_wide-0189df8232496344e37dfd310d3028d6065cb2ab-s1400-c100.jpg",
        "publishedAt": "2024-03-27T19:13:53Z",
        "content": "Then-President Donald Trump holds up a Bible outside St. John's Episcopal Church in Washington, D.C., during a controversial 2020 photo-op.\r\nBrendan Smialowski/AFP via Getty Images\r\nFormer President … [+7353 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Imke Stock",
        "title": "USA: Mann erschießt Polizei-Roboterhund​",
        "description": "In den USA hat sich ein bewaffneter Mann in einem Haus verbarrikadiert. Die Polizei setzte einen Roboterhund ein, der daraufhin von dem Mann erschossen wurde.",
        "url": "https://www.heise.de/news/USA-Mann-erschiesst-Polizei-Roboterhund-9671564.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/5/4/4/9/GJr1_xyWIAAxx8W-3434ad9aa7257d44.jpg",
        "publishedAt": "2024-03-31T05:12:00Z",
        "content": "In den USA wollte diese Woche ein SWAT-Team einen bewaffneten Mann festzunehmen, der sich in Barnstable (Massachusetts) in einem Haus verbarrikadiert hatte. Zur Unterstützung kam dabei laut Bericht d… [+2914 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "msmash",
        "title": "AI Seen Cutting Worker Numbers, Survey By Staffing Company Shows",
        "description": "AI will lead to many companies employing fewer people in the next five years, staffing provider Adecco Group said on Friday, in a new survey highlighting the upheaval AI will bring to the workplace. From a report: Some 41% of senior executives expect to have …",
        "url": "https://slashdot.org/story/24/04/05/162234/ai-seen-cutting-worker-numbers-survey-by-staffing-company-shows",
        "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
        "publishedAt": "2024-04-05T16:05:00Z",
        "content": "time to lower the full time hours and add OT X2 / X2.5 levels.\r\nOut side the usa some places start OT at 35 hours.\r\nIn the usa maybe lower full time to 35-32 hours and add an X2 level at 50-60 and X2… [+322 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Mariella Moon",
        "title": "GOG gets into cloud gaming with Amazon Luna partnership",
        "description": "GOG, the gaming storefront owned by CD Projekt, is getting into cloud gaming by teaming up with Amazon Luna. Since the Luna cloud service streams games from Amazon's cloud servers, you'll be able to access the titles you've purchased from the store across any…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_70b9dd2f-9654-4074-a61a-49c33e6cb80f",
        "urlToImage": null,
        "publishedAt": "2024-03-19T08:45:58Z",
        "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NPR"
        },
        "author": "Jonathan Franklin",
        "title": "More than 440,000 Starbucks mugs recalled after reports of a dozen injuries",
        "description": "The holiday-inspired mugs were sold online and in stores such as Target and Walmart from November 2023 through January 2024. The injuries included severe burns, blisters and cuts on hands and fingers.",
        "url": "https://www.npr.org/2024/03/21/1239934036/starbucks-mug-recall-nestle-injuries",
        "urlToImage": "https://media.npr.org/assets/img/2024/03/21/ap24065512103946_wide-aafb5b5774eb96c6ee5eb2edce8ee01d7a5a400e-s1400-c100.jpg",
        "publishedAt": "2024-03-21T19:59:04Z",
        "content": "Nestle says it is recalling nearly half a million Starbucks mugs that were sold recently after at least a dozen people suffered injuries including burns or cuts while using the product. Shown here is… [+1988 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Tim Keeney",
        "title": "USA vs Jamaica live stream: Can you watch for free?",
        "description": "USA take on Jamaica in the semifinals of the CONCACAF Nations League tonight. Here's how to watch a free live stream of the match.",
        "url": "https://www.digitaltrends.com/movies/usa-vs-jamaica-live-stream-march-2024/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2016/03/UEFA-soccer.png?resize=1200%2C630&p=1",
        "publishedAt": "2024-03-21T13:00:55Z",
        "content": "Looking to make it three titles in a row since the tournament’s inception, the United States Men’s National Team takes on Jamaica in the semifinals of the 2024 CONCACAF Nations League tonight.\r\nThe m… [+2601 chars]"
        },
        {
        "source": {
        "id": "polygon",
        "name": "Polygon"
        },
        "author": "Pete Volk",
        "title": "No show is having more fun than Chucky",
        "description": "The Chucky television show is a gleefully fun time, and with the second part of the third season returning soon on Syfy, USA, and Peacock, it’s time to dip in.",
        "url": "https://www.polygon.com/24113753/chucky-tv-show-syfy-usa-peacock-season-3-its-bloody-good",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/tKtedGPm0e8OqQcaqplmkqqUokg=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24251919/chucky.jpg",
        "publishedAt": "2024-04-02T14:00:00Z",
        "content": "TV has gotten off to a strong start in 2024. Shgunis legitimately fantastic, and the kind of weekly watercooler show weve been missing as a culture in a post-Game of Thronesworld. Delicious in Dungeo… [+3961 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "ChatGPT está escribiendo estudios médicos y económicos. Lo sabemos porque usa palabras rarunas",
        "description": "Amazon lo sabe bien: se están publicando tantos libros escritos por IA que han tenido que limitar la autopublicación. La capacidad de modelos de IA generativa como ChatGPT para redactar textos es tan notable que muchos los están usando no solo para escribir e…",
        "url": "https://www.xataka.com/robotica-e-ia/chatgpt-esta-escribiendo-estudios-medicos-economicos-sabemos-porque-usa-palabras-rarunas",
        "urlToImage": "https://i.blogs.es/0f8b63/robot-escritor/840_560.jpeg",
        "publishedAt": "2024-04-01T12:00:32Z",
        "content": "Amazon lo sabe bien: se están publicando tantos libros escritos por IA que han tenido que limitar la autopublicación. La capacidad de modelos de IA generativa como ChatGPT para redactar textos es tan… [+3949 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Young catfishing victims 'should have hope'",
        "description": "Online child protection expert Jim Gamble says images can be taken off the internet.",
        "url": "https://www.bbc.co.uk/news/uk-northern-ireland-68543194",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BCF0/production/_132886384_gettyimages-1308753258.jpg",
        "publishedAt": "2024-03-12T10:17:43Z",
        "content": "Young catfishing victims should be given hope that the issue can be dealt with, an online child protection expert has said.\r\nIt comes after a man at the centre of one of the world's largest catfishin… [+2351 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Paul McNally",
        "title": "Genshin Impact 4.5: Everything we know – Release date, worldwide start time, contents",
        "description": "Genshin Impact, the world’s most profitable gacha game and one of the two miHoYo behemoths alongside Honkai Star rail is… Continue reading Genshin Impact 4.5: Everything we know – Release date, worldwide start time, contents\nThe post Genshin Impact 4.5: Every…",
        "url": "https://readwrite.com/genshin-impact-4-5-everything-we-know-release-date-worldwide-start-time-contents/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/chori.jpg",
        "publishedAt": "2024-03-12T12:42:49Z",
        "content": "Genshin Impact, the worlds most profitable gacha game and one of the two miHoYo behemoths alongside Honkai Star rail is about to get its 4.5 updates and the world is excited. So when can you get it a… [+2363 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "Krypto-Pleitier Do Kwon: Auslieferung an die USA erneut verhindert",
        "description": "In den USA soll dem TerraUSD-Gründer Do Kwon der Prozess gemacht werden. Die Auslieferung aus Montenegro wurde aber jetzt einmal mehr gerichtlich untersagt.",
        "url": "https://www.heise.de/news/Krypto-Pleitier-Do-Kwon-Auslieferung-an-die-USA-erneut-verhindert-9647231.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/2/3/7/6/shutterstock_2279412659-f34b5e51675a363e.jpg",
        "publishedAt": "2024-03-06T05:46:00Z",
        "content": "Weniger als zwei Wochen vor dem geplanten Beginn des Verfahrens gegen den Chef von Terraform-Labs und Verantwortlichen für die implodierte Kryptowährung TerraUSD, hat Do Kwon seine Auslieferung in di… [+2092 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "USA: Weißes Haus warnt vor gefährlichen Cyberangriffen auf Wasserwerke",
        "description": "Die US-Bundesstaaten sollen dafür sorgen, dass die Wasserversorgung vor Cyberangriffen geschützt ist, fordert Washington. Sie empfiehlt simple Maßnahmen.",
        "url": "https://www.heise.de/news/USA-Weisses-Haus-warnt-vor-gefaehrlichen-Cyberangriffen-auf-Wasserwerke-9659925.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/9/2/9/8/shutterstock_1312274558-d5df69af6d07d5ed.jpg",
        "publishedAt": "2024-03-20T06:44:00Z",
        "content": "Die US-Regierung hat die Bundesstaaten vor gefährlichen Cyberattacken auf die Wasserversorgung gewarnt und zu Gegenmaßnahmen geraten. In einem Brief an die Gouverneure weist das Weiße Haus auf Angrif… [+1932 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Bernd Mewes",
        "title": "USA: Per Überwachung von vernetzten Autos zu höheren Kfz-Versicherungsprämien",
        "description": "US-Datenanalyseunternehmen versorgen Versicherungen mit Fahrdaten – direkt vom Autohersteller – von Fahrzeugen. Das wirkt sich auf Versicherungsprämien aus.",
        "url": "https://www.heise.de/hintergrund/USA-Per-Ueberwachung-von-vernetzten-Autos-zu-hoeheren-Kfz-Versicherungspraemien-9653169.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/5/5/9/7/shutterstock_1703012575-9035f08742e53e29.jpg",
        "publishedAt": "2024-03-16T09:15:00Z",
        "content": "Inhaltsverzeichnis\r\nDass Fahrinformationen von Versicherten per OBD-Dongel (On-Board-Diagnose) oder Smartphone-App an den Versicherer übermittelt werden, um so bessere Konditionen (Telematik-Tarife) … [+6406 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Casey Crownhart",
        "title": "Methan-Lecks in den USA sind schlimmer, als bislang angenommen",
        "description": "Methanemissionen sind einer der größten Treiber des Klimawandels. Mithilfe neue Technologien und Messungen spüren Forscher die größten Lecks langsam auf.",
        "url": "https://www.heise.de/news/Methan-Lecks-in-den-USA-sind-schlimmer-als-bislang-angenommen-9657696.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/8/0/7/9/shutterstock_138247598-928a3f8279926ebf.jpg",
        "publishedAt": "2024-03-18T10:14:00Z",
        "content": "Alarmierende Ergebnisse sind es, auf die Forscherinnen und Forscher jüngst aufmerksam machen: Die Methanemissionen in den US-amerikanischen Öl- und Gasförderregionen sind in vielen Gebieten deutlich … [+6081 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Greta Friedrich",
        "title": "USA regulieren KI-Nutzung in Behörden: Bürger und Infrastruktur schützen",
        "description": "Wie US-Behörden künftig KI-Tools nutzen, reguliert ein neues Dekret. Die erste Regel: Die Tools dürfen die Rechte und Sicherheit von US-Bürgern nicht gefährden.",
        "url": "https://www.heise.de/news/USA-regulieren-KI-Nutzung-in-Behoerden-Buerger-und-Infrastruktur-schuetzen-9671185.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/5/2/5/9/shutterstock_730013212-c396e75ae8f76a64.jpg",
        "publishedAt": "2024-03-30T10:31:00Z",
        "content": "Die US-Regierung hat eine Richtlinie veröffentlicht, die den Einsatz von KI-Tools in US-Behörden reguliert. Unter anderem müssen die Behörden Wege finden, um Biases in Algorithmen zu entschärfen. Sie… [+3452 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Detlef Borchers",
        "title": "Julian Assange wird vorerst nicht an die USA ausgeliefert",
        "description": "Für die Auslieferung von Julian Assange verlangt ein britisches Gericht Garantien der US-Regierung. Die hat dafür jetzt drei Wochen Zeit.",
        "url": "https://www.heise.de/news/Julian-Assange-wird-vorerst-nicht-an-die-USA-ausgeliefert-9667090.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/3/0/8/9/shutterstock_1670989342-8d60f72913843041.jpg",
        "publishedAt": "2024-03-26T12:13:00Z",
        "content": "Wikileaks-Gründer Julian Assange wird vorerst nicht an die USA ausgeliefert und erhält eine neue Chance auf eine Berufung. Das zuständige Gericht in London hat am Dienstag entschieden, dass Assange n… [+2689 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "Patentamt: Bosch führt hierzulande bei KI-Patentanmeldungen, USA insgesamt vorn",
        "description": "In der Zahl der KI-Patentanmeldungen sieht man hierzulande noch keine Folge des jüngsten Hypes. Deutschland hält noch gut mit, die USA liegen aber klar vorn.",
        "url": "https://www.heise.de/news/Patentamt-Bosch-fuehrt-hierzulande-bei-KI-Patentanmeldungen-USA-insgesamt-vorn-9657425.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/7/9/3/0/shutterstock_146257814-4a8a8791d8d90b75.jpg",
        "publishedAt": "2024-03-18T07:22:00Z",
        "content": "Beim Deutschen Patent- und Markenamt wurden im vergangenen Jahr so viele Patente mit KI-Bezug angemeldet wie nie zuvor, fast ein Drittel davon von Anmeldern aus den USA. Auf Platz zwei folgen Anmeldu… [+2657 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "Sonnenfinsternis in den USA: NASA will drei Höhenforschungsraketen starten",
        "description": "In wenigen Tagen können die Menschen in den USA eine totale Sonnenfinsternis bestaunen. Die NASA plant dafür drei Starts von besonderen Raketen.",
        "url": "https://www.heise.de/news/Sonnenfinsternis-in-den-USA-NASA-will-drei-Hoehenforschungsraketen-starten-9670294.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/4/7/9/5/20231014-a-hb488-1010-4539fd4738e287df.webp",
        "publishedAt": "2024-03-28T17:34:00Z",
        "content": "Die anstehende totale Sonnenfinsternis über den USA will die NASA dafür nutzen, um mit drei Höhenforschungsraketen Veränderungen in der Ionosphäre zu vermessen. Damit solle erforscht werden, wie sich… [+2107 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Theonion.com"
        },
        "author": "Sirhan Sirhan",
        "title": "Trump Releases ‘God Bless The USA’ Quran",
        "description": "DEARBORN, MI—In an effort to raise money to cover his mounting legal bills, former President Donald Trump announced at a campaign event Friday that he was selling the central religious text of Islam in a special new edition called the “God Bless The USA” Qura…",
        "url": "https://www.theonion.com/trump-releases-god-bless-the-usa-quran-1851374740",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/5f43c40bba24eb69e34d84a969451169.jpg",
        "publishedAt": "2024-03-29T18:30:00Z",
        "content": "DEARBORN, MIIn an effort to raise money to cover his mounting legal bills, former President Donald Trump announced at a campaign event Friday that he was selling the central religious text of Islam i… [+766 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Andreas Knobloch",
        "title": "Milliardenschwerer Rechtsstreit: Google vernichtet Browserdaten",
        "description": "Google hat der Vernichtung von Milliarden von Datensätzen zugestimmt, um einen jahrelangen Rechtsstreit in den USA beizulegen.",
        "url": "https://www.heise.de/news/Milliardenschwerer-Rechtsstreit-Google-vernichtet-Browserdaten-9672208.html",
        "urlToImage": "https://heise.cloudimg.io/cdn/n/n/_www-heise-de_/imgs/18/4/5/6/5/7/7/6/Inkognito-00479e4fc5bbcecf.gif",
        "publishedAt": "2024-04-02T03:15:00Z",
        "content": "Der US-Konzern Google hat sich bereit erklärt, Milliarden von Datensätzen zu vernichten oder zu de-identifizieren, um einen Rechtsstreit in den USA beizulegen. Dies geht aus einem am Montag eingereic… [+2909 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Daniel AJ Sokolov",
        "title": "Telefonspam-Nazi musst fast 10 Millionen Dollar Strafe zahlen",
        "description": "Falsche Rufnummern anzuzeigen, kann in den USA illegal sein. Das kommt einen Neonazi teuer, der telefonisch Tausende belästigt hat.​",
        "url": "https://www.heise.de/news/Telefonspam-Nazi-musst-fast-10-Millionen-Dollar-Strafe-zahlen-9667972.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/3/5/5/8/Telefon_Festnetz-ac2ff58859b9be69.jpg",
        "publishedAt": "2024-03-26T23:24:00Z",
        "content": "Fast zehn Millionen US-Dollar Strafe muss der US-amerikanische Neonazi Scott Rhodes zahlen, weil er bei rassistischen Spam-Anrufen seine Anruferkennung (Caller-ID) gefälscht hat. Diese Entscheidung d… [+4348 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Christine Persaud",
        "title": "3 TV comedies on Amazon Prime Video you need to watch in March 2024",
        "description": "Among the three TV comedies on Prime Video you need to watch in March are two '90s classics, along with a long-running and underrated USA Network show.",
        "url": "https://www.digitaltrends.com/movies/3-tv-comedies-amazon-prime-video-watch-march-2024/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/royal-pains_600.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2024-03-09T13:00:28Z",
        "content": "USA Network\r\nSome of the best TV comedies hail from the 1990s. We’re talking classics that you can watch and rewatch and yet they never get old. Among the three TV comedies on Prime Video you need to… [+3974 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Jose García",
        "title": "iOS 17.4 incluye una función muy útil para conocer la salud de la batería de tu iPhone. Así se usa",
        "description": "La batería sigue siendo uno de los puntos críticos de cualquier dispositivo, ya sea un móvil, un reloj inteligente o una tablet. Si tiene una batería, está expuesto a la inevitable degradación de la misma y, por lo tanto, a que la autonomía final vaya cada ve…",
        "url": "https://www.xataka.com/moviles/ios-17-4-incluye-funcion-muy-util-para-conocer-salud-bateria-tu-iphone-asi-se-usa",
        "urlToImage": "https://i.blogs.es/5fa63f/bateria/840_560.jpeg",
        "publishedAt": "2024-03-06T13:31:42Z",
        "content": "La batería sigue siendo uno de los puntos críticos de cualquier dispositivo, ya sea un móvil, un reloj inteligente o una tablet. Si tiene una batería, está expuesto a la inevitable degradación de la … [+2817 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Nico Ernst",
        "title": "Zwangsverkauf von TikTok könnte Hunderte Milliarden Dollar kosten",
        "description": "In den USA gibt es laut Medienberichten Gespräche unter Unternehmern über einen Kauf von TikTok. Der könnte bald erzwungen werden.",
        "url": "https://www.heise.de/news/Zwangsverkauf-von-TikTok-koennte-Hunderte-Milliarden-Dollar-kosten-9650851.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/4/3/6/6/shutterstock_634024823-24a4da6aea5ab43f.jpg",
        "publishedAt": "2024-03-10T16:56:00Z",
        "content": "Weil eine politische Entscheidung über die Zukunft von TikTok in den USA unmittelbar bevorsteht, überlegen einige Größen der Tech-Branche gemeinsam, wie ein möglicher Zwangsverkauf abgewickelt werden… [+2002 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Grace Dean",
        "title": "Record numbers of wealthy Americans are looking for ways to live overseas or get foreign citizenship amid turmoil in the US",
        "description": "Migration consultancy Henley & Partners found that more US citizens than ever before are looking at alternative residency and citizenship options.",
        "url": "https://www.businessinsider.com/wealthy-americans-foreign-residence-citizenship-investment-migration-henley-partners-2024-3",
        "urlToImage": "https://i.insider.com/65f96c244af076d3cf918ec9?width=1200&format=jpeg",
        "publishedAt": "2024-03-19T11:05:20Z",
        "content": "Former President Donald TrumpRyan Collerd/AFP/Getty Images\r\n<ul><li>An investment-migration consultancy says record numbers of rich Americans are enquiring about citizenship abroad.</li><li>Portugal'… [+2330 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Joanna Nelius",
        "title": "The M3 MacBook Air has a familiar look",
        "description": "The all-new 13-inch and 15-inch Apple MacBook Air M3s can drive two displays with the lid closed but still have a ton in common with the M2 models.",
        "url": "https://www.theverge.com/24092910/apple-macbook-air-m3-first-impressions",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/iQQ9uTaPhLEYhg8QMBLC0Rtoo0g=/0x0:2040x1187/1200x628/filters:focal(1020x594:1021x595)/cdn.vox-cdn.com/uploads/chorus_asset/file/25322167/DSCF6617.jpg",
        "publishedAt": "2024-03-07T14:00:00Z",
        "content": "The midnight color still smudges, but the M3 processor gives it a speed boost.\r\nByJoanna Nelius, laptop reviewer. She has covered consumer technology, with an emphasis on PC gaming, since 2018. Previ… [+3502 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Oliver Bünte",
        "title": "Rain: Autonomer Sikorsky-Helikopter bekämpft Waldbrände",
        "description": "Bei der Bekämpfung von Waldbränden kommt es auf jede Minute an. In den USA soll dies eine Flotte autonomer Helikopter zukünftig automatisiert übernehmen.",
        "url": "https://www.heise.de/news/Rain-Autonomer-Sikorsky-Helikopter-bekaempft-Waldbraende-9646955.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/2/2/3/8/Rain-e59b15f1b7a5f0e5.jpg",
        "publishedAt": "2024-03-05T18:07:00Z",
        "content": "Der Helikopter-Hersteller Sikorsky hat zusammen mit der Spezialfirma Rain einen Helikopter entwickelt, der selbstständig Waldbrände bekämpfen kann. Ein Pilot und eine Bediencrew sind dazu nicht zwing… [+2641 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "USA gehen gegen führende Köpfe der Spyware-Entwickler von Intellexa vor",
        "description": "Die Firmen hinter der Spyware Predator wurden bereits 2023 sanktioniert. Jetzt gehen die USA erstmals auch gegen leitende Personen solcher Organisationen vor.",
        "url": "https://www.heise.de/news/USA-gehen-gegen-fuehrende-Koepfe-der-Spyware-Entwickler-von-Intellexa-vor-9647214.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/2/3/6/8/shutterstock_1071308096-d6abdd329c611829.jpg",
        "publishedAt": "2024-03-06T03:31:00Z",
        "content": "Inhaltsverzeichnis\r\nDas Finanzministerium der Vereinigten Staaten von Amerika verschärft das Vorgehen gegen Entwickler und Anbieter kommerzieller Spyware. Jetzt hat die US-Regierung Sanktionen nicht … [+3836 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "Mittwoch: US-Sanktionen gegen Spyware-Manager, Warnung vor KI-Konvention der EU",
        "description": "USA gegen Predator-Spyware + Überwachung durch KI + Google mit DMA-Updates + Ende der Android-Apps in Windows + Feinschliff für Powertoys + Störungen bei Meta",
        "url": "https://www.heise.de/news/Mittwoch-US-Sanktionen-gegen-Spyware-Manager-Warnung-vor-KI-Konvention-der-EU-9647225.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/2/3/7/3/mittwoch-17b8c87b40975cd8.webp",
        "publishedAt": "2024-03-06T05:30:00Z",
        "content": "Die europäischen Firmen hinter der weltweit genutzten kommerziellen Spyware Predator wurden bereits 2023 sanktioniert. Jetzt gehen die USA erstmals auch gegen leitende Personen solcher Organisationen… [+4816 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Malte Kirchner",
        "title": "#heiseshow: Entlassungen im Tech-Sektor, 20 Jahre Fritzbox, Kfz-Versicherungen",
        "description": "Diesmal in der #heiseshow: Die größte Entlassungswelle seit der Dot-Com-Krise, Jahrestag für die Fritzbox und Beängstigendes über Kfz-Versicherungen in den USA.",
        "url": "https://www.heise.de/news/heiseshow-Entlassungen-im-Tech-Sektor-20-Jahre-Fritzbox-Kfz-Versicherungen-9661066.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/9/9/0/2/heiseshow2023-3119ca5435dd1dc9.png",
        "publishedAt": "2024-03-21T05:15:00Z",
        "content": "Moderatorin Anna Kalinowsky, heise-online-Chefredakteur Dr. Volker Zota (@DocZet) und Malte Kirchner (@maltekir) sprechen in dieser Ausgabe der #heiseshow unter anderem über folgende Themen:\r\n#heises… [+1014 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "USA gehen leer aus: Krypto-Pleitier Do Kwon wird doch an Südkorea ausgeliefert",
        "description": "Seit Monaten ringen Gerichte in Montenegro darum, ob der TerraUSD-Gründer an die USA oder Südkorea ausgeliefert wird. Nun gibt es angeblich ein finales Urteil.",
        "url": "https://www.heise.de/news/USA-gehen-leer-aus-Krypto-Pleitier-Do-Kwon-wird-doch-an-Suedkorea-ausgeliefert-9661916.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/0/3/6/8/shutterstock_2279412659-f34b5e51675a363e.jpg",
        "publishedAt": "2024-03-21T14:00:00Z",
        "content": "Fast genau ein Jahr nachdem der südkoreanische Krypto-Pleitier Do Kwon in Montenegro aufgegriffen wurde, steht nun fest, dass er an sein Heimatland ausgeliefert wird. Die USA gehen leer aus. Davon je… [+2631 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Nico Ernst",
        "title": "Abstimmung über TikTok-Verbot im Senat verzögert sich",
        "description": "Im Repräsentantenhaus der USA wurde einem Gesetz zum Verbot oder Verkauf des sozialen Netzwerks mit breiter Mehrheit zugestimmt. Im Senat sieht das anders aus.",
        "url": "https://www.heise.de/news/Abstimmung-ueber-TikTok-Verbot-im-Senat-verzoegert-sich-9657110.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/7/7/7/1/urn-newsml-dpa-com-20090101-200924-99-687686_large_4_3-6c063fed4aeb61b8.jpg",
        "publishedAt": "2024-03-16T16:14:00Z",
        "content": "Der US-Senat wird so schnell über einen erzwungenen Verkauf oder ein Verbot von TikTok in den USA abstimmen, wie das in dieser Woche das Repräsentantenhaus tat. Dies berichtet die New York Times nach… [+3359 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "dpa",
        "title": "Zweieinhalb Jahre US-EU-Handelsrat: Autoindustrie sieht kaum Fortschritte",
        "description": "Seit zweieinhalb Jahren verhandeln EU und USA über engere Zusammenarbeit in Handel und Technologie, für die Industrie mit zu wenig konkreten Ergebnissen.",
        "url": "https://www.heise.de/news/Zweieinhalb-Jahre-US-EU-Handelsrat-Autoindustrie-sieht-kaum-Fortschritte-9676618.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/8/1/7/1/Hildegard_Mueller-825a2239000b8cd7.jpg",
        "publishedAt": "2024-04-05T12:19:00Z",
        "content": "Wenn es nach der deutschen Autoindustrie geht, sind die Verhandlungen im US-EU-Handelsrat erneut mit zu wenig konkreten Ergebnissen zu Ende gegangen. Der Verband der deutschen Automobilindustrie (VDA… [+1778 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "US-Gericht: Von KI \"verbessertes\" Video nicht als Beweismittel zugelassen",
        "description": "Ein Mann hat in den USA drei Menschen getötet und beruft sich auf Notwehr. Ein mit KI-Hilfe \"verbessertes\" Video soll das beweisen. Dem wurde nun widersprochen.",
        "url": "https://www.heise.de/news/US-Gericht-Von-KI-verbessertes-Video-nicht-als-Beweismittel-zugelassen-9675312.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/7/4/7/6/shutterstock_1862983123-7878bcb52d1a7676.jpg",
        "publishedAt": "2024-04-04T14:16:00Z",
        "content": "In den USA hat ein Richter die Nutzung einer Videoaufnahme als Beweismittel in einem Gerichtsverfahren untersagt, weil der Film zu sehr mit KI-Technik verändert wurde. Das berichtet NBC News und ziti… [+2754 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Theonion.com"
        },
        "author": "ji39f8deollek3",
        "title": "Best Parts Of Trump’s $60 ‘God Bless The USA’ Bible",
        "description": "Donald Trump recently announced on Truth Social that he has teamed up with country music artist Lee Greenwood to sell a custom “God Bless The USA” Bible for $59.99. Here is everything we know about the bespoke religious text that the former president is hawki…",
        "url": "https://www.theonion.com/best-parts-of-trump-s-60-god-bless-the-usa-bible-1851375202",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/868d0a0ee45f1dd713c353d0274abc93.png",
        "publishedAt": "2024-04-02T11:00:00Z",
        "content": "In order to make them seem less Jewish, Abraham, Isaac, and Jacob now go by Tucker, Rudy, and Ted Nugent."
        },
        {
        "source": {
        "id": null,
        "name": "Demofox.org"
        },
        "author": "demofox2",
        "title": "What I wish I knew about ESPP and RSUs sooner (2024, USA, California)",
        "description": "Disclaimer: This is based on information I believe to be true, in 2024, in the United States, and in the state of California specifically. Laws change over time and there are subtleties to all thes…",
        "url": "https://blog.demofox.org/2024/03/17/what-i-wish-i-knew-about-espp-and-rsus-sooner-company-stock-benefits-2024-usa-california/",
        "urlToImage": "https://demofox2.files.wordpress.com/2017/05/cropped-grand-teton.jpg?w=200",
        "publishedAt": "2024-03-17T22:44:03Z",
        "content": "Disclaimer: This is based on information I believe to be true, in 2024, in the United States, and in the state of California specifically. Laws change over time and there are subtleties to all these … [+11628 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "Eine eigene Uhrzeit für den Mond: NASA soll \"koordinierte Mondzeit\" ausarbeiten",
        "description": "Die USA wollen zurück zum Mond und eine dauerhafte Präsenz errichten. Dafür braucht es eine eigene Uhrzeit und die NASA soll jetzt einen Vorschlag ausarbeiten.",
        "url": "https://www.heise.de/news/Eine-eigene-Uhrzeit-fuer-den-Mond-NASA-soll-koordinierte-Mondzeit-ausarbeiten-9673915.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/6/7/1/6/35692483553_b2bb2af880_o-016ea3b2ff1172e4.jpg",
        "publishedAt": "2024-04-03T12:48:00Z",
        "content": "Das Weiße Haus hat die NASA angewiesen, in Kooperation mit anderen US-Behörden einen einheitlichen Zeitstandard für den Mond und andere Himmelskörper zu entwickeln. Das geht aus einer jetzt öffentlic… [+3218 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "Threads von Meta bekommt aktuelle Trends, wird X/Twitter immer ähnlicher",
        "description": "In den USA zeigt Threads jetzt aktuelle Themen. Damit bekommt der Kurznachrichtendienst von Meta eine Funktion, die X/Twitter zu Popularität verholfen hatte.",
        "url": "https://www.heise.de/news/Threads-von-Meta-bekommt-aktuelle-Trends-wird-X-Twitter-immer-aehnlicher-9659892.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/9/2/8/2/shutterstock_2339442247-2bfa796d634c9f83.jpg",
        "publishedAt": "2024-03-20T04:05:00Z",
        "content": "Die Twitter-Alternative Threads von Meta zeigt in den Vereinigten Staaten ab sofort eine Liste aktuell besonders heiß diskutierter Themen. Das verkündete Meta-Chef Mark Zuckerberg per Beitrag beim Ku… [+2909 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Detlef Borchers",
        "title": "Zahlen, bitte! – 64.050.000 Pfund Wachs dank Sommerzeit sparen​",
        "description": "Die Sommerzeitumstellung bringt viele Debatten über ihren Sinn. Die Diskussionen sind aber nicht neu: Schon ein Gründervater der USA wollte damit Wachs sparen.",
        "url": "https://www.heise.de/hintergrund/Zahlen-bitte-64-050-000-Pfund-Wachs-dank-Sommerzeit-sparen-9666720.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/2/8/9/9/ZahlenBitte_normal_Kopie_2__55_-0476d95a3aa2d89e.png",
        "publishedAt": "2024-03-26T12:41:00Z",
        "content": "Inhaltsverzeichnis\r\nBald wird wieder auf Sommerzeit umgestellt. Die Diskussionen hierzulande um das Für und Wider haben eine lange Tradition bis in den Ersten Weltkrieg hinein: Deutschland wagte ab d… [+8201 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Nico Ernst",
        "title": "Bezahlsystem \"Amazon One\" macht Hand-Scans per App",
        "description": "Wer in den USA mit Amazon One zahlen will, braucht für die Authentifikation keine zertifizierte Stelle mehr aufzusuchen. Die App erledigt den ersten Hand-Scan.",
        "url": "https://www.heise.de/news/Bezahlsystem-Amazon-One-macht-Hand-Scans-per-App-9671936.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/5/6/3/9/Amazon_One-3bc6647f01a46bc6-127c4b7274ce2b7b.webp",
        "publishedAt": "2024-04-01T12:24:00Z",
        "content": "Seit 2021 gibt es das Bezahlsystem \"Amazon One\" in den USA. Nun ist das Projekt des Internet-Riesen einen Schritt weiter: Wer es nutzen möchte, muss dafür nicht einen der Läden aufsuchen, die es unte… [+1711 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Oliver Bünte",
        "title": "Tiktok: Chinesische Regierung verweigert möglichen erzwungenen Verkauf",
        "description": "Die chinesische Regierung will den Verkauf des US-Geschäfts von Tiktok nicht einfach hinnehmen. Sie soll stattdessen über ein Verbot in den USA nachdenken.",
        "url": "https://www.heise.de/news/Tiktok-Chinesische-Regierung-verweigert-moeglichen-erzwungenen-Verkauf-9655595.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/6/9/3/0/shutterstock_1336435262-a215553faf3f5782.jpg",
        "publishedAt": "2024-03-15T06:18:00Z",
        "content": "Die chinesische Regierung hat signalisiert, einem erzwungenen Verkauf des chinesischen Kurzvideodienstes Tiktok in den USA nicht zuzustimmen. Das berichtet das Wall Street Journal (WSJ) am Freitag. D… [+2992 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Ben Schwan",
        "title": "Leak: In diesen Ländern könnte die Vision Pro als nächstes erscheinen",
        "description": "Bislang wird Apples Mixed-Reality-Headset nur in den USA vertrieben. Die nächsten Länder dürften jedoch bald folgen. Erste Indizien liefert nun ein Codeleak.",
        "url": "https://www.heise.de/news/Leak-In-diesen-Laendern-koennte-die-Vision-Pro-als-naechstes-erscheinen-9654632.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/6/4/1/2/vision_pro_set-e9ec54093d28d03c.png",
        "publishedAt": "2024-03-14T09:44:00Z",
        "content": "Wann kommt die Vision Pro nach Europa? Noch gibt es nur Gerüchte, dass es bis zum Sommer zu Apples Entwicklerkonferenz WWDC 2024 soweit sein könnte. Im Rahmen eines Codeleaks sind nun zwölf neue Länd… [+2186 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "Montag: Intel-Werk in Italien ungewiss, Details zur kommenden Playstation 5 Pro",
        "description": "Norditaliens Intel-Fab auf Eis + PS5 Pro mit mehr Leistung + SpaceX-Spionagenetz für USA + Stellenabbau und Jobsuche in IT-Branche + 25 Jahre Wing Commander",
        "url": "https://www.heise.de/news/Montag-Intel-Werk-in-Italien-auf-Eis-Details-zur-kommenden-Playstation-5-Pro-9657407.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/7/9/2/1/monday-3648c7c0803ae6c8.webp",
        "publishedAt": "2024-03-18T05:30:00Z",
        "content": "Intel wollte die in Magdeburg produzierten Chips in Norditalien weiterverarbeiten. Doch der Bau dieses Packaging-Werks in der Veneto-Region ist jetzt ungewiss. Offenbar hat Intel seine Investitionen … [+6271 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Paul McNally",
        "title": "War Thunder gets Alpha Strike update with new jets and dozens more vehicles",
        "description": "If you like War Thunder you are in for a treat with Gaijin Entertainment’s new Alpha Strike content update. Alpha… Continue reading War Thunder gets Alpha Strike update with new jets and dozens more vehicles\nThe post War Thunder gets Alpha Strike update with …",
        "url": "https://readwrite.com/war-thunder-gets-alpha-strike-update-with-new-jets-and-dozens-more-vehicles/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/war_thunder-scaled.jpg",
        "publishedAt": "2024-03-15T14:14:36Z",
        "content": "If you like War Thunder you are in for a treat with Gaijin Entertainment’s new Alpha Strike content update.\r\nAlpha Strike contains dozens of new military vehicles including the European Alpha Jet att… [+3424 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": null,
        "title": "Filson Made in USA Pioneer Pocket T-Shirt",
        "description": "The humble pocket tee. There's nothing more timeless — or necessary to keep stocked in the wardrobe. Filson's Pioneer Pocket t-shirt is made from a midweight 6.5 oz. 100% cotton fabric, with a roomy fit perfect for wearing by itself or as a layer. A rib-knit …",
        "url": "https://shop.uncrate.com/products/filson-made-in-usa-pioneer-pocket-t-shirt",
        "urlToImage": "http://shop.uncrate.com/cdn/shop/files/filson-pioneer-tshirt-black-21.jpg?v=1710946091",
        "publishedAt": "2024-03-20T15:57:09Z",
        "content": "Editor’s Note\r\nThe humble pocket tee. There's nothing more timeless or necessary to keep stocked in the wardrobe. Filson's Pioneer Pocket t-shirt is made from a midweight 6.5 oz. 100% cotton fabric, … [+174 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Knives Out director pays tribute to acting 'legend'",
        "description": "M Emmet Walsh, who has died at the age of 88, was one of Hollywood's most admired character actors.",
        "url": "https://www.bbc.co.uk/news/entertainment-arts-68624028",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10425/production/_132979566_gettyimages-529167412.jpg",
        "publishedAt": "2024-03-21T10:45:02Z",
        "content": "M Emmet Walsh, one of Hollywood's most admired character actors, with roles in films including Blade Runner, Blood Simple and Knives Out, has died at 88.\r\nWalsh memorably played the police captain en… [+3291 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Marie-Claire Koch",
        "title": "KI-Update kompakt: Google, Microsoft, neue ChatGPT-Funktionen & KI in den USA",
        "description": "Das \"KI-Update\" liefert werktäglich eine Zusammenfassung der wichtigsten KI-Entwicklungen.",
        "url": "https://www.heise.de/news/KI-Update-kompakt-Google-Microsoft-neue-ChatGPT-Funktionen-KI-in-den-USA-9669219.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/4/2/2/1/KIupdate_16_9_Audio-03ea3d1e1633a193-865a9f539de581f9.webp",
        "publishedAt": "2024-03-27T16:11:00Z",
        "content": "Inhaltsverzeichnis\r\nDie \"Search Generative Experience\" (SGE) von Google, eine KI-gestützte Suche, empfiehlt derzeit betrügerische Websites, etwa solche, die Malware verbreiten. EO-Consultant Lily Ray… [+6257 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "USA: Polizei will Daten zu allen, die öffentliche YouTube-Videos angesehen haben",
        "description": "Im Rahmen von verdeckten Ermittlungen will die Polizei in Kentucky herausfinden, wer bestimmte YouTube-Videos angesehen hat. Das Gericht hat dem zugestimmt.",
        "url": "https://www.heise.de/news/USA-Polizei-will-Daten-zu-allen-die-oeffentliche-YouTube-Videos-angesehen-haben-9664535.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/1/7/4/5/shutterstock_2152152371-92caced2c6ae030f.jpg",
        "publishedAt": "2024-03-25T07:31:00Z",
        "content": "US-Strafverfolgungsbehörden haben in mehreren Fällen Informationen von YouTube zu allen Internetnutzern und -nutzerinnen verlangt, die öffentlich verfügbare Videos angesehen haben. Das berichtet Forb… [+2847 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "Montag: TikTok vor Zwangsverkauf in den USA, Google Pixel 8 mit KI-Einschränkung",
        "description": "Milliarden-Kosten des TikTok-Verkaufs + Google-Smartphone ohne Google-KI + Datenklau bei Microsoft + Palantir mit KI-Aufrag der US-Armee + KI in der Forschung",
        "url": "https://www.heise.de/news/Montag-TikTok-vor-Zwangsverkauf-in-den-USA-Google-Pixel-8-mit-KI-Einschraenkung-9650911.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/4/3/9/9/monday-ee442410952edfa5.webp",
        "publishedAt": "2024-03-11T05:30:00Z",
        "content": "In den USA gibt es Gespräche unter Unternehmern über einen Kauf von TikTok. Der könnte bald erzwungen werden, denn Politiker sind erbost über TikToks jüngsten Aufruf an die Nutzer, politischen Einflu… [+4386 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland -",
        "title": "USA: US-Senat verabschiedet Haushaltspaket",
        "description": "Den USA drohte der nächste Shutdown. Kurz nach Ablauf der Frist erfolgte dann die Einigung. Präsident Joe Biden muss das Gesetz noch unterzeichnen, das gilt als Formalie.",
        "url": "https://www.zeit.de/politik/ausland/2024-03/usa-us-senat-haushaltspaket-joe-biden",
        "urlToImage": "https://img.zeit.de/administratives/sharing/fallback-image/wide__1300x731",
        "publishedAt": "2024-03-23T06:50:36Z",
        "content": "Der US-Senat hat im letzten Moment ein Haushaltspaket in Billionenhöhe verabschiedet. Die Abstimmung begann kurz vor Ablaufen der Frist eine Minute nach Mitternacht und endete am frühen Samstagmorgen… [+2427 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "Donnerstag: Comeback der Netzneutralität in den USA, eintägige Google I/O im Mai",
        "description": "FCC mit Demokraten-Mehrheit + Google I/O mit KI-Schwerpunkt + SK Hynix mit US-Chipfabrik + Microsofts Sicherheitsversagen + TV-Pflicht in Autos + #heiseshow",
        "url": "https://www.heise.de/news/Donnerstag-Comeback-der-Netzneutralitaet-in-den-USA-eintaegige-Google-I-O-im-Mai-9674505.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/7/0/3/4/thursday-226cd30cd9419f5f.webp",
        "publishedAt": "2024-04-04T04:30:00Z",
        "content": "Unter Donald Trump hat sich die US-Regulierungsbehörde FCC von der Internetregulierung verabschiedet. Nun haben Demokraten eine Mehrheit und bringen die FCC damit wieder auf einen Kurs in Richtung Ne… [+5016 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "AJ Willingham, CNN",
        "title": "The Christian reaction to Trump’s Bible endorsement goes deeper than you think",
        "description": "Former President Donald Trump’s endorsement of a patriotic Bible during Holy Week has been challenged by some Christians who say it preys on people’s faith...",
        "url": "https://www.cnn.com/2024/03/28/us/donald-trump-bible-christianity-cec/index.html",
        "urlToImage": "https://media.zenfs.com/en/cnn_articles_875/90fc863b5fb5c3e128c401bc64cf10a1",
        "publishedAt": "2024-03-28T17:32:35Z",
        "content": "Former President Donald Trump is officially selling a patriotic copy of the Christian Bible themed to Lee Greenwoods famous song, God Bless the USA.\r\nHappy Holy Week! Trump announced on social media … [+9141 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Madison Hall",
        "title": "Trump endorses a $60 bible one day after comparing himself to Jesus",
        "description": "Trump endorsed the country music-inspired print one day after he compared himself to Jesus in a Truth Social post.",
        "url": "https://www.businessinsider.com/trump-endorses-bible-after-comparing-himself-to-jesus-2024-3",
        "urlToImage": "https://i.insider.com/660316611caec1275a69a55e?width=1200&format=jpeg",
        "publishedAt": "2024-03-26T21:01:58Z",
        "content": "President Donald Trump holds up a Bible outside of St John's Episcopal church across Lafayette Park in Washington, DC on June 1, 2020.BRENDAN SMIALOWSKI/AFP via Getty Images\r\n<ul><li>Republican forme… [+2878 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Internetkonzern: Eigentümerwechsel bei Tiktok? USA erhöhen Druck",
        "description": "Hier finden Sie Informationen zu dem Thema „Internetkonzern“. Lesen Sie jetzt „Eigentümerwechsel bei Tiktok? USA erhöhen Druck“.",
        "url": "https://www.zeit.de/news/2024-03/13/eigentuemerwechsel-bei-tiktok-usa-erhoehen-druck",
        "urlToImage": "https://img.zeit.de/news/2024-03/13/eigentuemerwechsel-bei-tiktok-usa-erhoehen-druck-image-group/wide__1300x731",
        "publishedAt": "2024-03-13T06:23:13Z",
        "content": "In den USA steht ein neuer Anlauf bevor, einen Eigentümerwechsel bei der Kurzvideo-App Tiktok zu erzwingen. Das Abgeordnetenhaus in Washington könnte heute über ein Gesetz abstimmen, das zur Verbannu… [+4663 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Zeitgeschehen - Christian Vooren, Johanna Roth",
        "title": "USA: Mehr als nur ein Brückenschaden",
        "description": "Das Schiffsunglück von Baltimore hat beträchtliche Folgen für die Wirtschaft nicht nur in der Region. Und zeigt, wie verwundbar die weltweiten Handelswege sind.",
        "url": "https://www.zeit.de/gesellschaft/zeitgeschehen/2024-03/usa-baltimore-schiffskollision-seehandel-wirtschaft",
        "urlToImage": "https://img.zeit.de/wirtschaft/2024-03/usa-baltimore-schiffskollision-seehandel/wide__1300x731",
        "publishedAt": "2024-03-27T19:42:33Z",
        "content": "Der Kollaps eines einzigen Pfeilers reichte aus, um ein nicht nur menschliches, sondern auch wirtschaftliches Desaster auszulösen. Nachdem das rund 300 Meter lange Frachtschiff Dali den Hafen von Bal… [+499 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Industrie: Schott Pharma investiert in den USA",
        "description": "Hier finden Sie Informationen zu dem Thema „Industrie“. Lesen Sie jetzt „Schott Pharma investiert in den USA“.",
        "url": "https://www.zeit.de/news/2024-03/18/schott-pharma-investiert-in-den-usa",
        "urlToImage": "https://img.zeit.de/news/2024-03/18/schott-pharma-investiert-in-den-usa-image-group/wide__1300x731",
        "publishedAt": "2024-03-18T17:55:51Z",
        "content": "Der Mainzer Pharmaverpackungskonzern Schott Pharma will in den USA einen neuen Produktionsstandort für Spritzen aufbauen. Mit einer Investition von rund 340 Millionen Euro sollen am neuen Standort in… [+1568 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "USA: Murmeltier-Nachwuchs: Frühlingsorakel Phil ist Vater",
        "description": "Hier finden Sie Informationen zu dem Thema „USA“. Lesen Sie jetzt „Murmeltier-Nachwuchs: Frühlingsorakel Phil ist Vater“.",
        "url": "https://www.zeit.de/news/2024-03/29/murmeltier-nachwuchs-fruehlingsorakel-phil-ist-vater",
        "urlToImage": "https://img.zeit.de/news/2024-03/29/murmeltier-nachwuchs-fruehlingsorakel-phil-ist-vater-image-group/wide__1300x731",
        "publishedAt": "2024-03-29T14:01:38Z",
        "content": "Amerikas berühmtes Wetterorakel Murmeltier Phil ist erstmals Vater geworden. Seine Murmeltier-Gefährtin Phyllis habe zwei gesunde Babys zur Welt gebracht, teilte der «Groundhog Club» in der Kleinstad… [+2195 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Sabina Graves",
        "title": "Star Wars, Encanto, Indiana Jones, and More Are Coming to Disney Parks Expansions",
        "description": "Big news for theme park fans out of Disney Imagineering: Disneyland and Walt Disney World are expanding with attractions and more inspired by Star Wars, James Cameron’s Avatar, Encanto, and Indiana Jones.Read more...",
        "url": "https://gizmodo.com/star-wars-encanto-indiana-jones-disney-parks-expansions-1851385982",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6383e13a01a4c7c6a2a94a14d93e7ae3.jpg",
        "publishedAt": "2024-04-04T14:00:00Z",
        "content": "Big news for theme park fans out of Disney Imagineering: Disneyland and Walt Disney World are expanding with attractions and more inspired by Star Wars, James Camerons Avatar, Encanto, and Indiana Jo… [+4729 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Faz.net"
        },
        "author": "dpa",
        "title": "Haushaltsstreit: Teilweiser „Shutdown“ in den USA abgewendet",
        "description": "Das politische Gezerre um den Haushalt ist in den USA nicht ungewöhnlich. Auch dieses Mal wurde wieder kurz vor Fristablauf ein Stillstand der Regierungsgeschäfte abgewendet.",
        "url": "https://www.faz.net/aktuell/politik/ausland/haushaltsstreit-teilweiser-shutdown-in-den-usa-abgewendet-19574769.html",
        "urlToImage": "https://media0.faz.net/ppmedia/aktuell/politik/953771862/1.9574766/facebook_teaser/us-kapitol-in-washington-dc.jpg",
        "publishedAt": "2024-03-09T01:15:46Z",
        "content": "Der amerikanische Kongress hat einen teilweisen Stillstand der Regierungsgeschäfte in den USA abgewendet. Am Freitagabend (Ortszeit) verabschiedete nach dem Repräsentantenhaus auch der Senat ein Gese… [+1656 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Faz.net"
        },
        "author": "Alexander Wulfers",
        "title": "Drohende Abspaltung in USA: Countdown für Tiktok",
        "description": "Die einflussreiche Kurz-Video-App soll ihre Verbindungen nach China kappen. So will es die amerikanische Politik. Ist das bloß Protektionismus? Ein Verbot will jedenfalls kaum jemand – aus gutem Grund.",
        "url": "https://www.faz.net/aktuell/wirtschaft/drohende-abspaltung-in-usa-countdown-fuer-tiktok-19589789.html",
        "urlToImage": "https://media0.faz.net/ppmedia/aktuell/664456273/1.9589786/facebook_teaser/eine-frau-demonstriert-vor-dem.jpg",
        "publishedAt": "2024-03-16T11:59:28Z",
        "content": "Noch nie stand die Zukunft Tiktoks so sehr auf dem Spiel wie in dieser Woche. Das liegt an einem Gesetzentwurf aus den USA, den das Repräsentantenhaus am Mittwoch mit großer Mehrheit verabschiedet ha… [+2774 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": "Brian Windhorst",
        "title": "Why Paris 2024 will be the toughest Olympics ever for men's basketball",
        "description": "With several of the NBA's biggest stars expected to play in Paris, it's shaping up to be the toughest event ever in men's international basketball.",
        "url": "https://www.espn.com/olympics/basketball/story/_/id/39767532/2024-olympics-paris-men-basketball-team-usa",
        "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0320%2Fr1307399_1296x729_16%2D9.jpg",
        "publishedAt": "2024-03-20T12:50:11Z",
        "content": "With LeBron James and Stephen Curry expected to play for Team USA and top international players like Nikola Jokic and Victor Wembanyama also set to feature, the Olympic men's basketball tournament in… [+5304 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNET"
        },
        "author": "Kevin Lynch",
        "title": "USA vs. Jamaica Livestream: How to Watch CONCACAF Nations League Semifinal Soccer From Anywhere - CNET",
        "description": "Gregg Berhalter's USMNT take on the Reggae Boyz for a place in Sunday's final.",
        "url": "https://www.cnet.com/tech/services-and-software/usa-vs-jamaica-livestream-how-to-watch-concacaf-nations-league-semifinal-soccer-from-anywhere/",
        "urlToImage": "https://www.cnet.com/a/img/resize/ff0139cd7b4f2cd87946f7f8f8603d42730d0603/hub/2024/03/21/7f9885a6-6049-409a-b2ea-9586356a5252/gettyimages-1529219914.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2024-03-21T20:00:05Z",
        "content": "The CONCACAF Nations League semifinals get underway on Thursday, as defending champs USA take on Jamaica at AT&amp;T Stadium in Arlington, Texas. \r\nGregg Berhalter will be expecting an improvement fr… [+4854 chars]"
        },
        {
        "source": {
        "id": "abc-news",
        "name": "ABC News"
        },
        "author": "Molly Nagle",
        "title": "HUD Secretary Marcia Fudge to step down",
        "description": "Secretary of Housing and Urban Development Marcia Fudge announced Monday that she is stepping down from her cabinet position later this month.",
        "url": "https://abcnews.go.com/Politics/hud-secretary-marcia-fudge-step/story?id=108013782",
        "urlToImage": "https://i.abcnewsfe.com/a/19259dce-aafb-4846-8c97-539412f109aa/Marcia-Fudge-1-gty-jm-240311_1710176008033_hpMain_16x9.jpg?w=1600",
        "publishedAt": "2024-03-11T17:08:10Z",
        "content": "Secretary of Housing and Urban Development Marcia Fudge announced Monday that she is stepping down from her cabinet position later this month -- marking only the second cabinet secretary to do so dur… [+922 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Anthony Mackie: We need more fun on our TVs",
        "description": "The actor says he didn't overthink his latest role, and he doesn't think that viewers should either.",
        "url": "https://www.bbc.co.uk/news/newsbeat-68605856",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ECBF/production/_132970606_twst_101-20220522-sb_02832_rt.jpg",
        "publishedAt": "2024-03-21T01:40:46Z",
        "content": "Anthony Mackie is a \"truck guy\".\r\n\"I drive a big Ford with a lift kit and big tyres. I am not a speed guy,\" he tells BBC Newsbeat. \r\n\"I barely ever go over 25 miles an hour. I'm the guy driving and p… [+3744 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland - Anna-Lena Schlitt",
        "title": "USA: Republikanerin Nikki Haley steigt aus Vorwahlrennen aus",
        "description": "Nikki Haley macht den Weg frei für Donald Trump: Berichten zufolge will die Republikanerin nach Niederlagen am Super Tuesday ihre Präsidentschaftskandidatur zurückziehen.",
        "url": "https://www.zeit.de/politik/ausland/2024-03/republikanerin-nikki-haley-steigt-aus-vorwahlrennen-aus",
        "urlToImage": "https://img.zeit.de/politik/ausland/2024-03/nikki-haley-praesidentschaftskandidatur-us-republikaner-bild/wide__1300x731",
        "publishedAt": "2024-03-06T11:48:13Z",
        "content": "Die Republikanerin Nikki Haley will sich laut Berichten aus \r\ndem parteiinternen Rennen um die US-Präsidentschaftskandidatur zurückziehen. Sie werde ihren Rückzug noch am\r\nMittwoch in einer Rede beka… [+419 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Regierung: Habeck reist in die USA - Flüssig-Erdgas ist Thema",
        "description": "Hier finden Sie Informationen zu dem Thema „Regierung“. Lesen Sie jetzt „Habeck reist in die USA - Flüssig-Erdgas ist Thema“.",
        "url": "https://www.zeit.de/news/2024-03/06/habeck-reist-in-die-usa-fluessig-erdgas-ist-thema",
        "urlToImage": "https://img.zeit.de/news/2024-03/06/habeck-reist-in-die-usa-fluessig-erdgas-ist-thema-image-group/wide__1300x731",
        "publishedAt": "2024-03-06T05:21:17Z",
        "content": "Bundeswirtschaftsminister Robert Habeck bricht heute zu einer mehrtägigen Reise in die USA auf. Der Vizekanzler will dort in Washington, New York und Chicago bis Samstag Wirtschaftsvertreter und Poli… [+2254 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Martin Holland",
        "title": "US-Gesetzentwurf: ByteDance soll zum Verkauf von TikTok gezwungen werden",
        "description": "Abgeordnete beider großer US-Parteien wollen ByteDance per Gesetz dazu zwingen, TikTok zu verkaufen. Das Weiße Haus hat bereits Unterstützung signalisiert.",
        "url": "https://www.heise.de/news/US-Gesetzentwurf-ByteDance-soll-zum-Verkauf-von-TikTok-gezwungen-werden-9647237.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/2/3/7/9/shutterstock_1336435262-a215553faf3f5782.jpg",
        "publishedAt": "2024-03-06T06:27:00Z",
        "content": "In den USA hat eine Gruppe von Abgeordneten aus beiden großen Parteien im Repräsentantenhaus den nächsten Angriff auf die beliebte Video-App TikTok begonnen. In einem jetzt vorgelegten Gesetzentwurf … [+2092 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Konflikte: Haiti-Krise: USA sagen weitere 100 Millionen Dollar zu",
        "description": "Hier finden Sie Informationen zu dem Thema „Konflikte“. Lesen Sie jetzt „Haiti-Krise: USA sagen weitere 100 Millionen Dollar zu“.",
        "url": "https://www.zeit.de/news/2024-03/12/haiti-krise-usa-sagen-weitere-100-millionen-dollar-zu",
        "urlToImage": "https://img.zeit.de/news/2024-03/12/haiti-krise-usa-sagen-weitere-100-millionen-dollar-zu-image-group/wide__1300x731",
        "publishedAt": "2024-03-12T02:00:04Z",
        "content": "Die USA haben ihre finanzielle Zusage für eine multinationale Sicherheitsmission im Krisenstaat Haiti um 100 Millionen auf 300 Millionen Dollar (rund 274 Millionen Euro) erhöht. Das verkündete US-Auß… [+2864 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Russland: Putin warnt USA vor Wiederaufnahme von Atomwaffentests",
        "description": "Hier finden Sie Informationen zu dem Thema „Russland“. Lesen Sie jetzt „Putin warnt USA vor Wiederaufnahme von Atomwaffentests“.",
        "url": "https://www.zeit.de/news/2024-03/13/putin-warnt-usa-vor-wiederaufnahme-von-atomwaffentests",
        "urlToImage": "https://img.zeit.de/news/2024-03/13/putin-warnt-usa-vor-wiederaufnahme-von-atomwaffentests-image-group/wide__1300x731",
        "publishedAt": "2024-03-13T08:20:17Z",
        "content": "Russlands Präsident Wladimir Putin hat den USA Pläne zur Wiederaufnahme von Atomwaffenversuchen unterstellt und mit Gegenmaßnahmen gedroht. In einem solchen Fall würde auch Russland erwägen, neue Ker… [+2315 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Kriminalität: USA: Ex-Polizisten wegen Folter von Schwarzen verurteilt",
        "description": "Hier finden Sie Informationen zu dem Thema „Kriminalität“. Lesen Sie jetzt „USA: Ex-Polizisten wegen Folter von Schwarzen verurteilt“.",
        "url": "https://www.zeit.de/news/2024-03/20/usa-ex-polizisten-wegen-folter-von-schwarzen-verurteilt",
        "urlToImage": "https://img.zeit.de/news/2024-03/20/usa-ex-polizisten-wegen-folter-von-schwarzen-verurteilt-image-group/wide__1300x731",
        "publishedAt": "2024-03-20T01:33:23Z",
        "content": "Zwei ehemalige Polizeibeamte aus dem US-Bundesstaat Mississippi müssen wegen Folter und Misshandlung von zwei Schwarzen lange ins Gefängnis. Ein Richter in Jackson verurteilte die beiden weißen Männe… [+2512 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "USA: US-Repräsentantenhaus stimmt für Haushalt - Shutdown droht",
        "description": "Hier finden Sie Informationen zu dem Thema „USA“. Lesen Sie jetzt „US-Repräsentantenhaus stimmt für Haushalt - Shutdown droht“.",
        "url": "https://www.zeit.de/news/2024-03/22/us-repraesentantenhaus-stimmt-fuer-haushalt-shutdown-droht",
        "urlToImage": "https://img.zeit.de/news/2024-03/22/us-repraesentantenhaus-stimmt-fuer-haushalt-shutdown-droht-image-group/wide__1300x731",
        "publishedAt": "2024-03-22T16:24:10Z",
        "content": "Das US-Repräsentantenhaus hat kurz vor einem drohenden Stillstand der Regierungsgeschäfte ein Haushaltspaket in Billiardenhöhe verabschiedet. Der Gesetzesentwurf wurde mit parteiübergreifender Mehrhe… [+950 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Krieg in Nahost: Israel und USA uneins wegen Gaza-Krieg",
        "description": "Hier finden Sie Informationen zu dem Thema „Krieg in Nahost“. Lesen Sie jetzt „Israel und USA uneins wegen Gaza-Krieg“.",
        "url": "https://www.zeit.de/news/2024-03/23/israel-und-usa-uneins-wegen-gaza-krieg",
        "urlToImage": "https://img.zeit.de/news/2024-03/23/israel-und-usa-uneins-wegen-gaza-krieg-image-group/wide__1300x731",
        "publishedAt": "2024-03-23T04:27:22Z",
        "content": "Während die Unstimmigkeiten zwischen Israel und den USA über die Vorgehensweise im Gaza-Krieg immer offener zutage treten, hat sich eine israelische Delegation erneut auf den Weg nach Doha gemacht, u… [+6990 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland - Rieke Havertz, Klaus Brinkbäumer",
        "title": "TikTok in den USA: TikTok, China und ein Kennedy",
        "description": "Demokraten und Republikaner können sich noch einig sein: bei TikTok. Ein Kennedy könnte Biden ärgern und die Debatte um Trumps \"Blutbad\"-Aussage. Die Themen im US-Podcast",
        "url": "https://www.zeit.de/politik/ausland/2024-03/tiktok-usa-demokraten-republikaner-ok-america",
        "urlToImage": "https://img.zeit.de/politik/ausland/2024-03/tiktok-usa-demokraten-republikaner-ok-america-frau/wide__1300x731",
        "publishedAt": "2024-03-21T08:03:30Z",
        "content": "Protest vor dem US-Kapitol gegen die Pläne von US-Politikern, TikTok aus den USA zu verbannen, sollte die App in chinesischem Besitz bleiben.\r\n© [M] Foto: Craig Hudson/Reuters\r\n352 Ja-Stimmen für ein… [+1183 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Krieg in Nahost: USA wollen temporären Gaza-Hafen für Hilfen",
        "description": "Hier finden Sie Informationen zu dem Thema „Krieg in Nahost“. Lesen Sie jetzt „USA wollen temporären Gaza-Hafen für Hilfen“.",
        "url": "https://www.zeit.de/news/2024-03/08/usa-wollen-temporaeren-gaza-hafen-fuer-hilfen",
        "urlToImage": "https://img.zeit.de/news/2024-03/08/usa-wollen-temporaeren-gaza-hafen-fuer-hilfen-image-group/wide__1300x731",
        "publishedAt": "2024-03-08T04:29:53Z",
        "content": "Angesichts der katastrophalen humanitären Lage im Gazastreifen sollen neben Lieferungen aus der Luft nun auch Güter über den Seeweg kommen. Das US-Militär will dafür zusammen mit internationalen Part… [+8229 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland - Christian Bangel",
        "title": "USA: Trump scheitert mit Aufschub von Millionenzahlung an Kolumnistin",
        "description": "Ex-Präsident Donald Trump muss bis Montag gut 83 Millionen US-Dollar an die Autorin E. Jean Carroll zahlen. Sie bezichtigt ihn der Verleumdung und sexueller Übergriffe.",
        "url": "https://www.zeit.de/politik/ausland/2024-03/donald-trump-verleumdungsklage-jean-carroll",
        "urlToImage": "https://img.zeit.de/politik/ausland/2024-03/donald-trump-verleumdungsklage-jean-carroll-bild/wide__1300x731",
        "publishedAt": "2024-03-08T07:43:53Z",
        "content": "Ein Bundesrichter in den USA hat einen Antrag von Ex-Präsident Donald Trump abgelehnt, eine Strafzahlung über 83,3 Millionen US-Dollar aufzuschieben. Er muss nun bis Montag die komplette Summe an die… [+2062 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland - Isabelle Daniel",
        "title": "USA: Trump-Anklägerin darf Ermittlungen in Georgia weiterführen",
        "description": "Trotz einer Affäre bleibt Staatsanwältin Fani Willis im Wahlbetrugsprozess gegen Donald Trump im Amt. Eine andere Gerichtsentscheidung nutzt dem Republikaner.",
        "url": "https://www.zeit.de/politik/ausland/2024-03/donald-trump-georgia-staatsanwaeltin-fani-willis-bleibt",
        "urlToImage": "https://img.zeit.de/politik/ausland/2024-03/usa-donald-trump-georgia-staatsanwaeltin-bleibt-bild/wide__1300x731",
        "publishedAt": "2024-03-15T23:04:26Z",
        "content": "Im Wahlbetrugsprozess gegen Ex-US-Präsident Donald Trump in Georgia darf die leitende Staatsanwältin ihre Ermittlungen fortführen. Das hat der zuständige Richter Scott McAfee entschieden. Einen Antra… [+5164 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Gaza-Krieg: USA warnen Israel mit Nachdruck vor Rafah-Offensive",
        "description": "Hier finden Sie Informationen zu dem Thema „Gaza-Krieg“. Lesen Sie jetzt „USA warnen Israel mit Nachdruck vor Rafah-Offensive“.",
        "url": "https://www.zeit.de/news/2024-03/19/usa-warnen-israel-mit-nachdruck-vor-rafah-offensive",
        "urlToImage": "https://img.zeit.de/news/2024-03/19/usa-warnen-israel-mit-nachdruck-vor-rafah-offensive-image-group/wide__1300x731",
        "publishedAt": "2024-03-19T00:20:27Z",
        "content": "Die USA wollen im Gaza-Krieg Israel von der geplanten Bodenoffensive gegen die mit Geflüchteten überfüllte Stadt Rafah abbringen. US-Präsident Joe Biden habe Israels Ministerpräsidenten Benjamin Neta… [+4175 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Krieg in Nahost: USA erhöhen Druck auf Israel",
        "description": "Hier finden Sie Informationen zu dem Thema „Krieg in Nahost“. Lesen Sie jetzt „USA erhöhen Druck auf Israel“.",
        "url": "https://www.zeit.de/news/2024-03/19/usa-erhoehen-druck-auf-israel",
        "urlToImage": "https://img.zeit.de/news/2024-03/19/usa-warnen-israel-mit-nachdruck-vor-rafah-offensive-image-group/wide__1300x731",
        "publishedAt": "2024-03-19T04:09:20Z",
        "content": "Die USA wollen im Gaza-Krieg Israel von seiner geplanten Bodenoffensive gegen die mit Flüchtlingen überfüllte Stadt Rafah abbringen. US-Präsident Joe Biden habe Israels Ministerpräsidenten Benjamin N… [+7313 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Wirtschaftssenatorin: Treffen mit Investoren: Giffey fliegt in die USA",
        "description": "Hier finden Sie Informationen zu dem Thema „Wirtschaftssenatorin“. Lesen Sie jetzt „Treffen mit Investoren: Giffey fliegt in die USA“.",
        "url": "https://www.zeit.de/news/2024-03/16/treffen-mit-investoren-giffey-fliegt-in-die-usa",
        "urlToImage": "https://img.zeit.de/news/2024-03/16/treffen-mit-investoren-giffey-fliegt-in-die-usa-image-group/wide__1300x731",
        "publishedAt": "2024-03-16T10:52:54Z",
        "content": "Wirtschaftssenatorin Franziska Giffey reist am Montag für fünf Tage in die USA. In New York will die SPD-Politikerin das Berliner Business Office besuchen und Gespräche mit Investoren über Unternehme… [+2865 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Innenminister: Ebling: Standort Rheinland-Pfalz in USA hochgeschätzt",
        "description": "Hier finden Sie Informationen zu dem Thema „Innenminister“. Lesen Sie jetzt „Ebling: Standort Rheinland-Pfalz in USA hochgeschätzt“.",
        "url": "https://www.zeit.de/news/2024-03/21/ebling-standort-rheinland-pfalz-in-usa-hochgeschaetzt",
        "urlToImage": "https://img.zeit.de/news/2024-03/21/ebling-standort-rheinland-pfalz-in-usa-hochgeschaetzt-image-group/wide__1300x731",
        "publishedAt": "2024-03-21T04:42:17Z",
        "content": "Rheinland-Pfalz wird nach den Worten von Innenminister Michael Ebling in den USA als Standort für das Militär und seine Angehörigen sowie als Drehscheibe sehr geschätzt. Bei seinen Gesprächen in Wash… [+2581 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Krieg in Nahost: Bericht: USA liefern Israel Tausende Bomben",
        "description": "Hier finden Sie Informationen zu dem Thema „Krieg in Nahost“. Lesen Sie jetzt „Bericht: USA liefern Israel Tausende Bomben“.",
        "url": "https://www.zeit.de/news/2024-03/30/bericht-usa-liefern-israel-tausende-bomben",
        "urlToImage": "https://img.zeit.de/news/2024-03/30/bericht-usa-liefern-israel-tausende-bomben-image-group/wide__1300x731",
        "publishedAt": "2024-03-30T03:59:51Z",
        "content": "Trotz der Bedenken der USA wegen Israels geplanter Bodenoffensive gegen die mit Geflüchteten überfüllte Stadt Rafah im Gazastreifen liefert Washington einem Zeitungsbericht zufolge Israel weitere Tau… [+6281 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "USA: Nach Kontakt mit Kühen: Mensch mit Vogelgrippe infiziert",
        "description": "Hier finden Sie Informationen zu dem Thema „USA“. Lesen Sie jetzt „Nach Kontakt mit Kühen: Mensch mit Vogelgrippe infiziert“.",
        "url": "https://www.zeit.de/news/2024-04/02/nach-kontakt-mit-kuehen-mensch-mit-vogelgrippe-infiziert",
        "urlToImage": "https://img.zeit.de/news/2024-04/02/nach-kontakt-mit-kuehen-mensch-mit-vogelgrippe-infiziert-image-group/wide__1300x731",
        "publishedAt": "2024-04-02T10:00:31Z",
        "content": "Im US-Bundesstaat Texas ist ein Mensch positiv auf Vogelgrippe getestet worden. Die Person habe zuvor Kontakt zu Milchkühen gehabt, bei denen das hochpathogene H5N1-Virus vermutet worden sei, teilte … [+2699 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland - Melina Crispin",
        "title": "USA: Mann wegen führender Rolle beim Sturm aufs Kapitol verurteilt",
        "description": "Weil er 2021 einen Angriff auf Polizisten angeführt hatte, ist ein Mann zu sieben Jahren Haft verurteilt worden. Anhänger von Donald Trump stürmten damals das Kapitol.",
        "url": "https://www.zeit.de/politik/ausland/2024-04/sturm-auf-das-kapitol-mann-verurteilt-donald-trump",
        "urlToImage": "https://img.zeit.de/administratives/sharing/fallback-image/wide__1300x731",
        "publishedAt": "2024-04-03T18:52:15Z",
        "content": "Ein Mann, der per Megafon\r\neinen Angriff auf Polizisten während des Sturms auf das US-Kapitolgebäude\r\ngeleitet haben soll, ist zu sieben Jahren und drei Monaten Haft verurteilt\r\nworden. US-Bezirksric… [+2286 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland - Johanna Roth",
        "title": "US-Regierung: Die Israel-Politik der USA wird immer widersprüchlicher",
        "description": "Nach dem Angriff auf einen Hilfskonvoi kritisiert Joe Biden Israel scharf. Politisch folgen lässt er darauf aber nichts.",
        "url": "https://www.zeit.de/politik/ausland/2024-04/us-regierung-israel-politik-nahost-krieg-joe-biden",
        "urlToImage": "https://img.zeit.de/politik/ausland/2024-04/us-regierung-israel-nahost-krieg-joe-biden/wide__1300x731",
        "publishedAt": "2024-04-04T11:10:03Z",
        "content": "\"Wütend\" und \"untröstlich\" sei Joe Biden. So steht es gleich im ersten Satz der Mitteilung, die er kürzlich veröffentlichen ließ. Darin verurteilte der US-Präsident die Tötung von sieben humanitären … [+401 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Terrorismus: USA nannten Crocus City Hall als mögliches Terrorziel",
        "description": "Hier finden Sie Informationen zu dem Thema „Terrorismus“. Lesen Sie jetzt „USA nannten Crocus City Hall als mögliches Terrorziel“.",
        "url": "https://www.zeit.de/news/2024-04/03/usa-nannten-crocus-city-hall-als-moegliches-terrorziel",
        "urlToImage": "https://img.zeit.de/news/2024-04/03/usa-nannten-crocus-city-hall-als-moegliches-terrorziel-image-group/wide__1300x731",
        "publishedAt": "2024-04-03T07:37:45Z",
        "content": "Die US-Sicherheitsbehörden haben einem Zeitungsbericht zufolge die russische Seite direkt vor einem möglichen Terroranschlag auf die Moskauer Konzerthalle Crocus City Hall gewarnt.\r\nMehr Schlagzeilen… [+3031 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland - Sven Wolters",
        "title": "Superwahljahr: \"Die USA sind die am meisten gefährdete Demokratie\"",
        "description": "Noch nie konnten in einem Jahr so viele Menschen weltweit wählen. Die ersten Wahlen zeigen aber: Antidemokraten haben gute Chancen. Ein Film über das Demokratie-Paradox",
        "url": "https://www.zeit.de/politik/ausland/2024-03/superwahljahr-trump-putin-modi-europawahl-iran",
        "urlToImage": "https://img.zeit.de/politik/ausland/2024-03/superwahljahr/wide__1300x731",
        "publishedAt": "2024-03-10T05:30:25Z",
        "content": "Mehr als eine halbe Milliarde Menschen hatte 2024 schon die Wahl. Doch laut einer Studie ist die Demokratie seit 17 Jahren weltweit auf dem Rückzug. Die bisherigen Wahlen in Bangladesch, Aserbaidscha… [+427 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Krieg in Nahost: Bericht: USA haben Alternativen zur Rafah-Offensive",
        "description": "Hier finden Sie Informationen zu dem Thema „Krieg in Nahost“. Lesen Sie jetzt „Bericht: USA haben Alternativen zur Rafah-Offensive“.",
        "url": "https://www.zeit.de/news/2024-03/20/bericht-usa-haben-alternativen-zur-rafah-offensive",
        "urlToImage": "https://img.zeit.de/news/2024-03/20/bericht-usa-haben-alternativen-zur-rafah-offensive-image-group/wide__1300x731",
        "publishedAt": "2024-03-20T01:17:31Z",
        "content": "Die USA werden Israel einem Medienbericht zufolge Alternativen zu einer Bodenoffensive in der mit Flüchtlingen überfüllten Stadt Rafah im Süden des Gazastreifens aufzeigen. Die Regierung von US-Präsi… [+3986 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Kriminalität: USA: Mann erschießt drei Menschen und nimmt Geiseln",
        "description": "Hier finden Sie Informationen zu dem Thema „Kriminalität“. Lesen Sie jetzt „USA: Mann erschießt drei Menschen und nimmt Geiseln“.",
        "url": "https://www.zeit.de/news/2024-03/16/usa-mann-erschiesst-drei-menschen-und-nimmt-geiseln",
        "urlToImage": "https://img.zeit.de/news/2024-03/16/usa-mann-erschiesst-drei-menschen-und-nimmt-geiseln-image-group/wide__1300x731",
        "publishedAt": "2024-03-16T19:15:47Z",
        "content": "In den USA hat ein Mann nach Polizeiangaben drei Menschen erschossen und sich anschließend mit mehreren Geiseln in einem Haus verbarrikadiert. Die Schüsse fielen an zwei unterschiedlichen Orten in Fa… [+1188 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Unwetter: Heftiger Schneesturm im Osten der USA und Kanadas",
        "description": "Hier finden Sie Informationen zu dem Thema „Unwetter“. Lesen Sie jetzt „Heftiger Schneesturm im Osten der USA und Kanadas“.",
        "url": "https://www.zeit.de/news/2024-04/05/heftiger-schneesturm-im-osten-der-usa-und-kanadas",
        "urlToImage": "https://img.zeit.de/news/2024-04/05/heftiger-schneesturm-im-osten-der-usa-und-kanadas-image-group/wide__1300x731",
        "publishedAt": "2024-04-05T10:15:31Z",
        "content": "Ein heftiger Schneesturm hat an der Ostküste der USA und Kanadas für Chaos gesorgt. In den USA waren nach Angaben der Seite poweroutage.us in der Nacht zu Freitag (Ortszeit) zeitweise knapp eine halb… [+2473 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Regierung: USA wollen temporären Hafen für Hilfslieferungen nach Gaza einrichten",
        "description": "Hier finden Sie Informationen zu dem Thema „Regierung“. Lesen Sie jetzt „USA wollen temporären Hafen für Hilfslieferungen nach Gaza einrichten“.",
        "url": "https://www.zeit.de/news/2024-03/07/usa-wollen-temporaeren-hafen-fuer-hilfslieferungen-nach-gaza-einrichten",
        "urlToImage": "https://img.zeit.de/administratives/sharing/fallback-image/wide__1300x731",
        "publishedAt": "2024-03-07T17:27:23Z",
        "content": "Das US-Militär soll gemeinsam mit internationalen Partnern einen temporären Hafen an der Küste des Gazastreifens einrichten. So soll die notleidende Zivilbevölkerung zusätzliche Hilfe über den Seeweg… [+129 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Russische Invasion: USA kündigen Not-Militärpaket für Ukraine an",
        "description": "Hier finden Sie Informationen zu dem Thema „Russische Invasion“. Lesen Sie jetzt „USA kündigen Not-Militärpaket für Ukraine an“.",
        "url": "https://www.zeit.de/news/2024-03/12/usa-kuendigen-not-militaerpaket-fuer-ukraine-an",
        "urlToImage": "https://img.zeit.de/news/2024-03/12/usa-kuendigen-not-militaerpaket-fuer-ukraine-an-image-group/wide__1300x731",
        "publishedAt": "2024-03-12T18:22:32Z",
        "content": "Nach monatelanger Pause hat die Regierung von US-Präsident Joe Biden ein Not-Hilfspaket mit militärischer Ausrüstung für die Ukraine angekündigt. Bidens Nationaler Sicherheitsberater, Jake Sullivan, … [+2822 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Wetter: Mehrere Verletzte und Schäden durch Tornados in den USA",
        "description": "Hier finden Sie Informationen zu dem Thema „Unwetter“. Lesen Sie jetzt „Mehrere Verletzte und Schäden durch Tornados in den USA“.",
        "url": "https://www.zeit.de/news/2024-03/15/mehrere-verletzte-und-schaeden-durch-tornados-in-den-usa",
        "urlToImage": "https://img.zeit.de/news/2024-03/15/mehrere-verletzte-und-schaeden-durch-tornados-in-den-usa-image-group/wide__1300x731",
        "publishedAt": "2024-03-15T07:42:26Z",
        "content": "Heftige Wirbelstürme und Tornados haben in den USA mehrere Menschen verletzt und erhebliche Schäden angerichtet. Betroffen waren vor allem die Bundesstaaten Indiana, Ohio und Kentucky, wie örtliche M… [+2599 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Ausland - Johanna Roth",
        "title": "US-Repräsentantenhaus: Verbieten die USA jetzt wirklich TikTok?",
        "description": "Demokraten und Republikaner sind sich überraschend einig: TikTok ist eine Gefahr für die nationale Sicherheit. Doch ein mögliches Verbot könnte sich im Wahljahr rächen.",
        "url": "https://www.zeit.de/politik/ausland/2024-03/us-repraesentantenhaus-tiktok-verbot-kongress",
        "urlToImage": "https://img.zeit.de/politik/ausland/2024-03/us-repraesentantenhaus-tiktok-verbot-kongress-2/wide__1300x731",
        "publishedAt": "2024-03-15T04:32:39Z",
        "content": "Gott sei Dank: Wenn es wirklich drauf ankommt, dann können Demokraten und Republikaner zusammenarbeiten. Mit großer Mehrheit stimmten Abgeordnete beider Parteien im US-Repräsentantenhaus am Mittwoch … [+335 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Konflikte: Netanjahu sagt Reise von Delegation in die USA ab",
        "description": "Hier finden Sie Informationen zu dem Thema „Konflikte“. Lesen Sie jetzt „Netanjahu sagt Reise von Delegation in die USA ab“.",
        "url": "https://www.zeit.de/news/2024-03/25/netanjahu-sagt-reise-von-delegation-in-die-usa-ab",
        "urlToImage": "https://img.zeit.de/administratives/sharing/fallback-image/wide__1300x731",
        "publishedAt": "2024-03-25T15:37:07Z",
        "content": "Israels Ministerpräsident Benjamin Netanjahu hat wegen der Forderung des Weltsicherheitsrates nach einer sofortigen Waffenruhe im Gazastreifen die geplante Reise einer israelischen Delegation in die … [+175 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "USA: Berichte: Trump kehrt mit Medien-Deal an Börse zurück",
        "description": "Hier finden Sie Informationen zu dem Thema „USA“. Lesen Sie jetzt „Berichte: Trump kehrt mit Medien-Deal an Börse zurück“.",
        "url": "https://www.zeit.de/news/2024-03/22/berichte-trump-kehrt-mit-medien-deal-an-boerse-zurueck",
        "urlToImage": "https://img.zeit.de/news/2024-03/22/berichte-trump-kehrt-mit-medien-deal-an-boerse-zurueck-image-group/wide__1300x731",
        "publishedAt": "2024-03-22T19:34:16Z",
        "content": "Ein Medienunternehmen von Donald Trump wird übereinstimmenden Berichten zufolge an die Börse gehen - und den früheren US-Präsidenten wohl um einen Milliardenbetrag reicher machen. Der Zeitpunkt der E… [+2997 chars]"
        },
        {
        "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Wirtschaftspolitik: Giffey nach USA-Reise: Guter Ruf als Innovationsstandort",
        "description": "Hier finden Sie Informationen zu dem Thema „Wirtschaftspolitik“. Lesen Sie jetzt „Giffey nach USA-Reise: Guter Ruf als Innovationsstandort“.",
        "url": "https://www.zeit.de/news/2024-03/24/giffey-nach-usa-reise-guter-ruf-als-innovationsstandort",
        "urlToImage": "https://img.zeit.de/news/2024-03/24/giffey-nach-usa-reise-guter-ruf-als-innovationsstandort-image-group/wide__1300x731",
        "publishedAt": "2024-03-24T16:47:02Z",
        "content": "Berlins Wirtschaftssenatorin Franziska Giffey (SPD) hat nach ihrer USA-Reise ein positives Fazit gezogen. In Gesprächen mit potenziellen Investoren und Ansiedlungen sowie neuen Kooperationen sei deut… [+2337 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "Intel erhält 8,5 Milliarden Dollar von der US-Regierung für seine Chipfabriken",
        "description": "Die bislang größte Förderung des Chips Act geht an Intel. Der Marktführer bekommt fast 20 Milliarden Dollar an Zuschüssen und Krediten für vier Chipfabriken.",
        "url": "https://www.heise.de/news/Intel-erhaelt-8-5-Milliarden-Dollar-von-der-US-Regierung-fuer-seine-Chipfabriken-9661193.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/9/9/7/1/Intel_Investition_USA-67b29f5e94631e29.webp",
        "publishedAt": "2024-03-21T04:17:00Z",
        "content": "Intel wird 8,5 Milliarden US-Dollar Zuschuss und 11 Milliarden Dollar an Krediten von der US-Regierung erhalten für den Bau und den Ausbau von Chipfabriken in den USA. Das erklärte US-Präsident Joe B… [+2417 chars]"
        }
        ]
        }
        
        )
})

app.listen(PORT)