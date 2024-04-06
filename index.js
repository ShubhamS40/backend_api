const express=require("express")
const app=express()
const PORT=process.env.PORT || 2000
const cors=require("cors")
app.use(cors())
app.use(express.json())

app.use("/",(req,res)=>{
  res.send(
  
    {
    "status": "ok",
    "totalResults": 14369,
    "articles": [
    {
    "source": {
    "id": null,
    "name": "Tjock.se"
    },
    "author": "Roger Åberg",
    "title": "Klocka med känsla av testbild",
    "description": "Från Mido\n\n\n\n\n\n\n\n\n\n\n\n\nMido har en modell som de kallar för Multifort TV Big Date. Det är en riktigt trevlig klocka där boetten har en fin rundning som bär smak av en klassisk tjock-tv från 70- eller 80-talet. Nu släpper man en specialversion där urtavlan likn…",
    "url": "https://tjock.se/garderoben/klocka-med-kansla-av-testbild/466291/",
    "urlToImage": "https://static.feber.se/article_images/58/56/08/585608.jpeg",
    "publishedAt": "2024-04-03T17:40:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+32159 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "electrek.co",
    "title": "Ford takes second in US EV market after sales climb 86% as lower prices take effect",
    "description": "Ford is starting 2024 off strong with EV sales up 86% through the first three months. The growth was enough for Ford to place second in the US EV market behind only Tesla. Ford’s sales surge comes after slashing prices earlier this year. Ford takes second beh…",
    "url": "https://biztoc.com/x/cfa1ab35005e2b26",
    "urlToImage": "https://c.biztoc.com/p/cfa1ab35005e2b26/og.webp",
    "publishedAt": "2024-04-03T17:38:10Z",
    "content": "Ford is starting 2024 off strong with EV sales up 86% through the first three months. The growth was enough for Ford to place second in the US EV market behind only Tesla. Fords sales surge comes aft… [+281 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "thestreet.com",
    "title": "Jim Cramer has some harsh criticism for Cathie Wood",
    "description": "Fast Facts CNBC's Jim Cramer openly criticized fellow investor Cathie Wood in a tweet The two disagree about the future of EVs The exchange comes alongside more disappointing Tesla news For the last few years, one of Tesla's (TSLA) biggest cheerleaders has be…",
    "url": "https://biztoc.com/x/8500030b45cb043c",
    "urlToImage": "https://c.biztoc.com/p/8500030b45cb043c/s.webp",
    "publishedAt": "2024-04-03T17:34:20Z",
    "content": "Fast FactsCNBC's Jim Cramer openly criticized fellow investor Cathie Wood in a tweetThe two disagree about the future of EVsThe exchange comes alongside more disappointing Tesla newsFor the last few … [+291 chars]"
    },
    {
    "source": {
    "id": "lenta",
    "name": "Lenta"
    },
    "author": "Андрей Ставицкий",
    "title": "Продажи Tesla рухнули впервые с 2020 года",
    "description": "Продажи автомобилей Tesla рухнули впервые с 2020 года. В отчете компании говорится, что за первый квартал 2023 года было продано 386 810 электрокаров. Это не соответствует прогнозу аналитиков, которые предсказывали рост. За год продажи автомобилей упали на 8,…",
    "url": "https://lenta.ru/news/2024/04/03/tesla-falls/",
    "urlToImage": "https://icdn.lenta.ru/images/2024/04/03/12/20240403122031690/share_d6127ac47a301f7e96aef27f66f47853.jpg",
    "publishedAt": "2024-04-03T17:31:26Z",
    "content": "Tesla 2020 . Bloomberg.\r\n , 2023 386 810 . , . 8,5 . , .\r\n Tesla , Model 3. Model Y 96 . , - .\r\n« , », Deutsche Bank . Tesla , BYD.\r\nXiaomi, 29 , , . 90 ."
    },
    {
    "source": {
    "id": null,
    "name": "Dinheirama.com"
    },
    "author": "Reuters",
    "title": "Tesla buscará locais na Índia para fábrica de veículos elétricos, diz Financial Times",
    "description": "A Tesla (TSLA; TSLA34) enviará uma equipe à Índia este mês para avaliar locais para uma fábrica de carros elétricos proposta entre 2 bilhões de…\n------ Este artigo foi escrito por Reuters. Este artigo apareceu originalmente no site Dinheirama.A reprodução des…",
    "url": "https://dinheirama.com/tesla-buscara-locais-na-india-para-fabrica-de-veiculos-eletricos-diz-financial-times/",
    "urlToImage": "https://media.dinheirama.com/medias/uploads/2023/12/20231204-tesla.jpg",
    "publishedAt": "2024-04-03T17:30:16Z",
    "content": "4A Tesla (TSLA; TSLA34) enviará uma equipe à Índia este mês para avaliar locais para uma fábrica de carros elétricos proposta entre 2 bilhões de dólares e 3 bilhões de dólares, informou o Financial T… [+1249 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Adslzone.net"
    },
    "author": "Alberto García Méndez",
    "title": "La comparativa Xiaomi SU7 Max VS Tesla Model 3 deja un claro vencedor",
    "description": "Xiaomi pisa fuerte para convertirse en rival serio de Tesla en China. Según las primeras comparativas llevadas a cabo por medios especializados, la versión más sofisticada del SU7 es capaz de superar al Model 3 de Tesla en varias pruebas sobre el terreno. El …",
    "url": "https://www.adslzone.net/e-movilidad/noticias-marcas-modelos/comparativa-xiaomi-tesla-coche-chino/",
    "urlToImage": "https://www.adslzone.net/app/uploads-adslzone.net/2024/04/comparativateslaxiaomi.jpg",
    "publishedAt": "2024-04-03T17:30:15Z",
    "content": "El coche eléctrico que Xiaomi estrenó la semana pasada no solo ha entrado por los ojos a miles de compradores. Su interior también cumple, superando incluso las capacidades del que comúnmente se reco… [+2891 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Tesla Just Announced Its First Sales Drop in Years",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_e1ce2ade-5fb4-46db-ba41-da2bfb0f9c60",
    "urlToImage": null,
    "publishedAt": "2024-04-03T17:30:00Z",
    "content": "If you click 'Accept all', we and our partners (including 240 who are part of the IAB Transparency &amp; Consent Framework) will also use cookies and your personal data, such as IP address, precise l… [+686 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Robb Report"
    },
    "author": "Bryan Hood",
    "title": "Tesla Just Announced Its First Sales Drop in Years",
    "description": "Tesla announced it delivered 383,000 EVs during the first quarter of 2024, which was 8.5 percent less than it moved during the same period last year.",
    "url": "http://robbreport.com/motors/cars/tesla-announces-sharp-drop-deliveries-first-quarter-1235569091/",
    "urlToImage": "https://robbreport.com/wp-content/uploads/2024/01/model301.jpg?w=681&h=383&crop=1",
    "publishedAt": "2024-04-03T17:30:00Z",
    "content": "The first quarter of 2024 went much worse for Tesla than anyone could have imagined.\r\nThe Elon Musk-fronted EV maker announced a shocking drop in quarterly sales on Tuesday, according to The New York… [+3111 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Quartz India"
    },
    "author": "Andy Mills",
    "title": "Tesla's big delivery miss is a sign of tougher competition, analyst says",
    "description": "Shelby McFaddin, an investment analyst at Motley Fool Asset Management, spoke with Quartz for the latest installment of our “Smart Investing” video series.Read more...",
    "url": "https://qz.com/tesla-deliveries-elon-musk-ev-competition-1851384822",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ff9a7bf348849ab9d86e37a89083a69c.jpg",
    "publishedAt": "2024-04-03T17:24:00Z",
    "content": "Shelby McFaddin, an investment analyst at Motley Fool Asset Management, spoke with Quartz for the latest installment of our Smart Investing video series.\r\nWatch the interview above and check out the … [+4628 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Kommersant.ru"
    },
    "author": null,
    "title": "Xiaomi SU7 подвез капитализацию // Почему акции китайского холдинга подскочили в цене на 16%",
    "description": "Капитализация Xiaomi выросла более чем на $7 млрд. Произошло это на фоне старта продаж первого электромобиля, выпущенного компанией. Он стал доступен для заказчиков 28 марта, однако с тех пор биржа в Гонконге была закрыта на пасхальные праздники. После того, …",
    "url": "https://www.kommersant.ru/doc/6617163",
    "urlToImage": "https://im.kommersant.ru/SocialPics/6617163_49_2536465_833039156",
    "publishedAt": "2024-04-03T17:21:12Z",
    "content": "Xiaomi $7 . , . 28 , . , , 16%. Xiaomi $52 . , , , General Motors Ford.\r\n ? FM « » : « . , , , , 100% . , , . \r\n Tesla, , , . , . , Xiaomi, . , , ».\r\n , Xiaomi . Bloomberg, . Tesla , 5%. . , 2024 9% … [+160 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Wille Wilhelmsson",
    "title": "Artister i upprop mot AI",
    "description": "Mänskliga musiker vill inte konkurrera med generativ AI\n\n\n\n\n\n\nDen amerikanska musikorganisationen Artist Rights Alliance har tillsammans med över 200 artister skrivit ett öppet brev till verksamma inom AI-industrin där man uppmanar dessa att sluta använda AI …",
    "url": "https://feber.se/samhalle/artister-i-upprop-mot-ai/466292/",
    "urlToImage": "https://static.feber.se/article_images/58/56/01/585601.jpg",
    "publishedAt": "2024-04-03T17:20:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+36518 chars]"
    },
    {
    "source": {
    "id": "rt",
    "name": "RT"
    },
    "author": "RT en Español\n , RT en Español",
    "title": "Elon Musk: \"Los medios tradicionales están muriendo\"",
    "description": "El empresario y propietario de la red social X vuelve a arremeter contra los medios tradicionales que fracasan en Internet.",
    "url": "https://actualidad.rt.com/actualidad/504674-elon-musk-medios-tradicionales-muertos",
    "urlToImage": "https://mf.b37mrtl.ru/actualidad/public_images/2024.04/article/660d715de9ff7136d147dddb.jpg",
    "publishedAt": "2024-04-03T17:14:52Z",
    "content": "Elon Musk volvió a poner en tela de juicio el valor de los medios de comunicación tradicionales comentando una publicación en X que, con el texto \"Bloomberg está muriendo\", adjunta un gráfico sobre e… [+902 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "marketwatch.com",
    "title": "Elon Musk says Nelson Peltz ‘definitely’ should be on Disney board",
    "description": "Tesla CEO Elon Musk also says he’d buy Disney shares if Nelson Peltz is elected to board. #tesla #elonmusk #disney #nelsonpeltz",
    "url": "https://biztoc.com/x/542b2fde2182af30",
    "urlToImage": "https://c.biztoc.com/273/og.png",
    "publishedAt": "2024-04-03T17:14:04Z",
    "content": "Tesla CEO Elon Musk also says hed buy Disney shares if Nelson Peltz is elected to board.\r\n#tesla#elonmusk#disney#nelsonpeltz\r\nThis story appeared on marketwatch.com, 2024-04-03."
    },
    {
    "source": {
    "id": null,
    "name": "La Tribune.fr"
    },
    "author": "Marie Nidiau",
    "title": "Automobile : Renault et Volvo Trucks jouent la carte de l'innovation sur les véhicules utilitaires pour rester compétitifs",
    "description": "Renault, Volvo Trucks et CMA CGM (propriétaire de La Tribune) s'allient pour former une co-entreprise spécialisée dans la production de véhicules utilitaires électriques. Les industriels misent sur l'innovation et la connectivité pour s'imposer dans ce marché…",
    "url": "https://www.latribune.fr/entreprises-finance/industrie/automobile/automobile-renault-et-volvo-trucks-jouent-la-carte-de-l-innovation-sur-les-vehicules-utilitaires-pour-rester-competitifs-994507.html",
    "urlToImage": "https://static.latribune.fr/full_width/2349013/flexis.jpg",
    "publishedAt": "2024-04-03T17:14:00Z",
    "content": "À quelques mètres de la Seine musicale à Boulogne, c'est l'effervescence. Luca de Meo, directeur général de Renault et Martin Lundstedt, celui de Volvo Trucks, inauguraient officiellement leur co-ent… [+4703 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Neil Winton, Senior Contributor, \n Neil Winton, Senior Contributor\n https://www.forbes.com/sites/neilwinton/",
    "title": "Europe’s EV Pause Opens Temporary Opportunity For Plug-In Hybrids",
    "description": "Mazda seems to have picked the perfect time to launch its plug-in hybrid MX-30 R-EV, but EU CO2 rules will limit the opportunity non EVs.",
    "url": "https://www.forbes.com/sites/neilwinton/2024/04/03/europes-ev-pause-opens-temporary-opportunity-for-plug-in-hybrids/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/660d78848cc8eeee712bf7bf/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-04-03T17:09:21Z",
    "content": "Mazda MX-30 R-EV\r\nMazda\r\nMazda seems to have picked the perfect time to launch its plug-in hybrid MX-30, just as faltering sales from Tesla underline the point that electric cars arent ready for prim… [+7504 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CleanTechnica"
    },
    "author": "Dr. Maximilian Holland",
    "title": "EVs At 58.1% Share In Sweden — The Volvo EX30 Has A Meteoric Climb To #2 Spot",
    "description": "March’s auto market saw plugin EVs at a 58.1% share in Sweden, down YoY from 59.9%. Plugin volumes were down YoY for BEVs, but up slightly for PHEVs. Overall auto volume was 23,891 units, down some 21% YoY. The Tesla Model Y was March’s bestselling BEV.   Mar…",
    "url": "https://cleantechnica.com/2024/04/03/evs-at-58-1-share-in-sweden-the-volvo-ex30-has-a-meteoric-climb-to-2-spot/",
    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/04/March-2024-Sweden-Passenger-Auto-Registrations-WD.png",
    "publishedAt": "2024-04-03T17:04:05Z",
    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nMarchs auto market saw plugin EVs at a 58.1% share in Sweden, down YoY from 59.9%. Plugin volumes were down Y… [+10269 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Bobby Green",
    "title": "Det här är Porsches eldrivna SUV med tre sätesrader",
    "description": "Första gången vi får se K1\n\n\n\n\n\n\n\n\n\n\nNågon gång 2027 planerar Porsche att lansera en stor eldriven SUV med tre sätesrader. Den går under kodnamnet K1 och det här är det första vi får se av prototypen. Den är såklart kraftigt maskerad men den har trots detta r…",
    "url": "https://feber.se/bil/det-har-ar-porsches-eldrivna-suv-med-tre-satesrader/466280/",
    "urlToImage": "https://i.ytimg.com/vi/B9Pxbvv0My8/hqdefault.jpg",
    "publishedAt": "2024-04-03T17:00:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+34925 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Observer"
    },
    "author": "Nhari Djan, Nhari Djan",
    "title": "Elon Musk Makes Two Key Hires to Oversee X’s Content Safety",
    "description": "X has named a new head of safety nine months after the previous person who held the role resigned.",
    "url": "https://observer.com/2024/04/elon-musk-hire-safety-head-x/",
    "urlToImage": "https://observer.com/wp-content/uploads/sites/2/2024/04/GettyImages-2133928250-e1712160953517.jpg?quality=80&w=635&h=419",
    "publishedAt": "2024-04-03T16:57:56Z",
    "content": "Elon Musk hired two executives to lead content moderation at X. Photo by Arturo Holmes/Getty Images\r\nElon Musk’s X yesterday (April 2) announced two new hires in its safety team amidst growing pressu… [+2140 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "engadget.com",
    "title": "The Morning After: California introduces right to disconnect bill",
    "description": "Even with burnout, overwhelm, budget cuts, hiring freezes, waves of redundancies and everything else in 2024, there’s still little regulation in the US to stop employers tapping workers to respond to requests either at their desk or through their smartphones …",
    "url": "https://biztoc.com/x/db59dfdb98f18118",
    "urlToImage": "https://c.biztoc.com/p/db59dfdb98f18118/og.webp",
    "publishedAt": "2024-04-03T16:56:12Z",
    "content": "Even with burnout, overwhelm, budget cuts, hiring freezes, waves of redundancies and everything else in 2024, theres still little regulation in the US to stop employers tapping workers to respond to … [+283 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Quartz India"
    },
    "author": "William Gavin",
    "title": "Tesla's 'nightmare' first quarter in 3 charts",
    "description": "Elon Musk’s Tesla disappointed investors and Wall Street when it reported a major decrease in electric vehicle sales and a more minor dip in production. Read more...",
    "url": "https://qz.com/tesla-stock-q1-sales-elon-musk-deliveries-production-1851384492",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/83d87e794098a6edbeb2afb241462789.jpg",
    "publishedAt": "2024-04-03T16:53:00Z",
    "content": "Elon Musks Tesla disappointed investors and Wall Street when it reported a major decrease in electric vehicle sales and a more minor dip in production. \r\nThe automaker said it delivered 386,810 elect… [+4672 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Derek Saul, Forbes Staff, \n Derek Saul, Forbes Staff\n https://www.forbes.com/sites/dereksaul/",
    "title": "Jeff Bezos Joins World’s Richest Person Bernard Arnault In $200 Billion Club",
    "description": "Bezos is about $85 billion richer than he was a year ago.",
    "url": "https://www.forbes.com/sites/dereksaul/2024/04/03/jeff-bezos-joins-worlds-richest-person-bernard-arnault-in-200-billion-club/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/660d88c47f824997dc89a6db/0x0.jpg?format=jpg&crop=3537,1988,x0,y80,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-04-03T16:52:13Z",
    "content": "Amazon founder and executive chairman Jeff Bezos became the only American with a net worth above $200 billion Wednesday, enjoying a boost from Amazon stocks flirtation with an all-time high.\r\nJeff Be… [+2129 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BMWBLOG"
    },
    "author": "Steven Paul",
    "title": "Low Miles BMW i3s 120Ah Is Still a Great Buy",
    "description": "Car shopping can be stressful. Lucky for you, we found the perfect fit – a lightly used 2019 BMW i3s. If you’re looking for an EV that isn’t a bore to drive, you need look...\nFirst published by https://www.bmwblog.com",
    "url": "https://www.bmwblog.com/2024/04/03/bmw-i3s-120ah-great-buy/",
    "urlToImage": "https://cdn.bmwblog.com/wp-content/uploads/2018/03/BMW-i3s-Autocross-5155.jpg",
    "publishedAt": "2024-04-03T16:47:37Z",
    "content": "Car shopping can be stressful. Lucky for you, we found the perfect fit a lightly used 2019 BMW i3s. If youre looking for an EV that isnt a bore to drive, you need look no further. In case you forgot,… [+4200 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "The New Version of JsOutProx is Attacking Financial Institutions in APAC and MENA via Gitlab Abuse",
    "description": "Resecurity researchers warn that a new Version of JsOutProx is targeting financial institutions in APAC and MENA via Gitlab abuse. Resecurity has detected a new version of JSOutProx, which is targeting financial services and organizations in the APAC and MENA…",
    "url": "https://securityaffairs.com/161438/malware/new-jsoutprox-attacking-financial-institutions-apac-mena.html",
    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/04/signal-2024-04-03-170646.jpeg",
    "publishedAt": "2024-04-03T16:47:27Z",
    "content": "The New Version of JsOutProx is Attacking Financial Institutions in APAC and MENA via Gitlab Abuse\r\n | Google fixed two actively exploited Pixel vulnerabilities\r\n | Highly sensitive files mysteriousl… [+57646 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Quartz India"
    },
    "author": "Andy Mills",
    "title": "Why Tesla stock might not be a buy",
    "description": "After Tesla's big delivery miss this week, The Motley Fool's Shelby McFaddin tells Quartz what's going on with the electric car company's stock",
    "url": "https://qz.com/why-tesla-stock-might-not-be-a-buy-1851384659",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ff9a7bf348849ab9d86e37a89083a69c.jpg",
    "publishedAt": "2024-04-03T16:47:18Z",
    "content": "Our free, fast, and fun briefing on the global economy, delivered every weekday morning."
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "Lightspeed Layoffs 2024: What to Know About the Latest LSPD Job Cuts",
    "description": "Lightspeed Commerce (NYSE:LSPD) layoffs are in the news Wednesday after the cloud-based software subscriptions and payments solutions company announced plans to reduce its headcount. The Lightspeed layoffs will result in roughly 280 employees losing their job…",
    "url": "https://biztoc.com/x/8b49b22f636239c1",
    "urlToImage": "https://c.biztoc.com/p/8b49b22f636239c1/s.webp",
    "publishedAt": "2024-04-03T16:44:06Z",
    "content": "Lightspeed Commerce (NYSE:LSPD) layoffs are in the news Wednesday after the cloud-based software subscriptions and payments solutions company announced plans to reduce its headcount.The Lightspeed la… [+280 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "SPOT Stock Alert: Spotify Is Raising Prices",
    "description": "Spotify (NYSE:SPOT) stock is on the move Wednesday on reports that the music streaming company is going to increase prices this year. According to these reports, Spotify is looking to bump up prices for its streaming content by $1 to $2 in 2024. The company w…",
    "url": "https://biztoc.com/x/652547b0a9a3b8f1",
    "urlToImage": "https://c.biztoc.com/p/652547b0a9a3b8f1/s.webp",
    "publishedAt": "2024-04-03T16:44:05Z",
    "content": "Spotify (NYSE:SPOT) stock is on the move Wednesday on reports that the music streaming company is going to increase prices this year.According to these reports, Spotify is looking to bump up prices f… [+269 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gazeta.ru"
    },
    "author": "Газета.Ru",
    "title": "Стало известно, в какой стране может появиться завод Tesla",
    "description": "Компания Tesla планирует в ближайшее время направить команду специалистов из США в Индию для оценки потенциальных площадок под строительство завода по производству электромобилей стоимостью от $2 млрд до $3 млрд. Об этом сообщает The Indian Express со ссылкой…",
    "url": "https://www.gazeta.ru/business/news/2024/04/03/22701523.shtml",
    "urlToImage": "https://img.gazeta.ru/files3/424/16720424/Snimok-ekrana-2023-05-17-v-23.32-pic_32ratio_900x600-900x600-91231.jpg",
    "publishedAt": "2024-04-03T16:43:41Z",
    "content": ": .Ru (Gazeta.Ru)\r\n: «.», 1067761730376, 7743625728\r\n : 125239, , , , 67\r\n:\r\n117105,\r\n. ,\r\n , .9, .1"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investors.com",
    "title": "Stocks Reverse Higher Ahead Of Powell Speech; Nvidia Up Despite Taiwan Quake As Tesla Falls",
    "description": "Major indexes rose from a key support level as investors awaited Fed Chair Jerome Powell's speech later today. Nvidia (NVDA) pared early losses in the stock market today after an earthquake in Taiwan affected its foundry partner, Taiwan Semiconductor (TSM), w…",
    "url": "https://biztoc.com/x/846e6ba94ffc5676",
    "urlToImage": "https://c.biztoc.com/p/846e6ba94ffc5676/og.webp",
    "publishedAt": "2024-04-03T16:42:09Z",
    "content": "Major indexes rose from a key support level as investors awaited Fed Chair Jerome Powell's speech later today. Nvidia (NVDA) pared early losses in the stock market today after an earthquake in Taiwan… [+287 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Fark.com"
    },
    "author": null,
    "title": "I don't know, alienating your customer base, constantly overhyping your products, and devoting the majority of one's time to vanity projects may not be the best way to run a company [Obvious]",
    "description": "I don't know, alienating your customer base, constantly overhyping your products, and devoting the majority of one's time to vanity projects may not be the best way to run a company",
    "url": "https://www.fark.com/comments/13208380/I-dont-know-alienating-your-customer-base-constantly-overhyping-your-products-devoting-majority-of-ones-time-to-vanity-projects-may-not-be-best-way-to-run-a-company",
    "urlToImage": "https://usrimg-full.fark.net/a/aU/fark_aUUiUH2_YGdZm17VwYd9SOHP1nA.jpg?AWSAccessKeyId=JO3ELGV4BGLFW7Y3EZXN&Expires=1712548800&Signature=NvJE5gl7ShVcNfR8RDsvVjTsRVs%3D",
    "publishedAt": "2024-04-03T16:40:10Z",
    "content": "Further down in the article:Cathie Wood buys Tesla stock\r\nWell, if I wasn't persuaded to avoid the stock before...\r\nSeriously: when Tesla's market cap was more than those of Toyota, Daimler, Volkswag… [+139 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tech Xplore"
    },
    "author": "Shannon Roberts",
    "title": "Even hands-free, phones and their apps cause dangerously distracted driving",
    "description": "Do you ever use your cell phone while driving? Don't feel too guilty about saying yes&mdash;nearly 60% of drivers admit to using their phone in hands-free mode while driving.",
    "url": "https://techxplore.com/news/2024-04-free-apps-dangerously-distracted.html",
    "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2021/phonedrive.jpg",
    "publishedAt": "2024-04-03T16:40:02Z",
    "content": "This article has been reviewed according to Science X's \r\n editorial process\r\n and policies.\r\n Editors have highlighted\r\n the following attributes while ensuring the content's credibility:\r\nfact-chec… [+5041 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Roger Åberg",
    "title": "Trailer för serien Bodkin",
    "description": "Krimpoddare upptäcker saker\n\n\n\n\n\n\n\n\n\n\nKrimpoddar verkar fortfarande vara en grej och i Bodkin spelar krimpoddare huvudrollen. De drar till den irländska staden Bodkin för att forska i ett kallt fall så och inte oväntat kanske blir de inte vidare bra mottagna.…",
    "url": "https://feber.se/film/trailer-for-serien-bodkin/466281/",
    "urlToImage": "https://i.ytimg.com/vi/KoVnzw4nP10/hqdefault.jpg",
    "publishedAt": "2024-04-03T16:40:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+34830 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "tipranks.com",
    "title": "Tesla (NASDAQ:TSLA) Eyes $3B India Plant Amidst Global Headwinds",
    "description": "Tesla (NASDAQ:TSLA) is eyeing a new market for its EVs – India. According to the Financial Times, the electric vehicle giant plans to dispatch a te... #tesla",
    "url": "https://biztoc.com/x/2ac49b7ee9982b15",
    "urlToImage": "https://c.biztoc.com/p/2ac49b7ee9982b15/s.webp",
    "publishedAt": "2024-04-03T16:36:23Z",
    "content": "Tesla (NASDAQ:TSLA) is eyeing a new market for its EVs India. According to the Financial Times, the electric vehicle giant plans to dispatch a te...\r\n#tesla\r\nThis story appeared on tipranks.com, ."
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Stock market today: US stocks drift lower as faith in rate cuts fades - Yahoo Finance",
    "description": "Stock market today: US stocks drift lower as faith in rate cuts fadesYahoo Finance Tesla sales plunge far more than expectedCNN An anxious stock market is awaiting the Fed's speechQuartz Surging bond yields don't change the narrative for stocksYahoo Finance U…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173442038",
    "urlToImage": null,
    "publishedAt": "2024-04-03T16:34:36Z",
    "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ferra.ru"
    },
    "author": "Максим Многословный",
    "title": "Аналитики: Илон Маск вредит «крутости» Tesla",
    "description": "Илон Маск, технологический магнат, стоящий за Tesla, SpaceX и X (бывший Twitter), — это парадокс, считают эксперты. Его инновации произвели революцию в промышленности, но его выходки в Интернете отталкивают некоторых потребителей.",
    "url": "https://www.ferra.ru/news/techlife/analitiki-ilon-mask-vredit-krutosti-tesla-03-04-2024.htm",
    "urlToImage": "https://www.ferra.ru/imgs/2024/04/03/11/6419983/276cebff26f7be398c575f4db6d69671eb8a5f78.png",
    "publishedAt": "2024-04-03T16:30:09Z",
    "content": "Caliber, ,         « » Tesla.        70%   2021  31%   2024 .    .\r\n , Caliber, , 83% Tesla  , .   Tesla,  « », ,   .\r\n Brand Finance ,   Tesla   . Civic Science, , ,    34%   2022  42%   2024 .\r\n : … [+19 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "L'Express"
    },
    "author": "Laetitia Strauch-Bonart",
    "title": "Asma Mhalla : \"Les Gafam ne sont plus des entreprises privées mais des acteurs politiques\"",
    "description": "La chercheuse à l’EHESS publie un essai audacieux sur le pouvoir des géants technologiques, montrant qu’ils ne sont plus des entreprises privées mais de véritables acteurs politiques.",
    "url": "https://www.lexpress.fr/idees-et-debats/asma-mhalla-les-gafam-ne-sont-plus-des-entreprises-privees-mais-des-acteurs-politiques-6C2RJVWYRVG7HEOQLVR6VCVK7I/",
    "urlToImage": "https://www.lexpress.fr/resizer/qNQ9phXBYw0sz_Mznj5ppVieERI=/1200x630/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/IHHEF2OWSBDFHBGFHYUHKQZLLA.jpg",
    "publishedAt": "2024-04-03T16:30:00Z",
    "content": "Cest un succès dédition inattendu : un premier ouvrage paru en février dernier, Technopolitique, vendu depuis à près de 10 000 exemplaires (Edistat). Mais cest aussi un succès tout court. Asma Mhalla… [+17820 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Shiftdelete.net"
    },
    "author": "Alperen Esin",
    "title": "Dizel motorlar geri mi dönüyor?",
    "description": "Toyota yönetimi, dizel motorların önümüzdeki yıllarda da kullanılmaya devam edeceğini öne sürdü. İşte detaylar...",
    "url": "https://shiftdelete.net/toyota-dizel-motor-hakkinda-umutlu",
    "urlToImage": "https://ares.shiftdelete.net/2023/11/Yeni-Toyota-C-HR-Hybrid-4.jpg",
    "publishedAt": "2024-04-03T16:30:00Z",
    "content": "Son dönemin en çok konuulan markalarndan Toyota, bu kez de dizel motorlar hakknda yapt açklama ile gündem oldu. Bu motorlarn önümüzdeki yllarda da kullanlmaya devam edeceini öne süren irket yönetimi,… [+1552 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tech Xplore"
    },
    "author": "James Morton Turner",
    "title": "America's green manufacturing boom, from EV batteries to solar panel production, isn't powered by renewable energy",
    "description": "Panasonic's new US$4 billion battery factory in De Soto, Kansas, is designed to be a model of sustainability&mdash;it's an all-electric factory with no need for a smokestack. When finished, it will cover the size of 48 football fields, employ 4,000 people and…",
    "url": "https://techxplore.com/news/2024-04-america-green-boom-ev-batteries.html",
    "urlToImage": "https://scx2.b-cdn.net/gfx/news/2024/americas-green-manufac.jpg",
    "publishedAt": "2024-04-03T16:28:53Z",
    "content": "This article has been reviewed according to Science X's \r\n editorial process\r\n and policies.\r\n Editors have highlighted\r\n the following attributes while ensuring the content's credibility:\r\nfact-chec… [+5867 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Mark Cuban Predicts World's First 'Trillionaire' Won't Be Musk Or Bezos",
    "description": "A few years back, amid the fanfare surrounding tech titans like Elon Musk and Jeff Bezos, Mark Cuban made a forward-looking statement at SXSW Conference and Festivals in 2017. He declared that the world's first trillionaire would emerge not from the tradition…",
    "url": "https://biztoc.com/x/94baceaa2119f3b6",
    "urlToImage": "https://c.biztoc.com/p/94baceaa2119f3b6/s.webp",
    "publishedAt": "2024-04-03T16:28:06Z",
    "content": "A few years back, amid the fanfare surrounding tech titans like Elon Musk and Jeff Bezos, Mark Cuban made a forward-looking statement at SXSW Conference and Festivals in 2017.He declared that the wor… [+285 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Falk Steiner",
    "title": "Autohersteller müssen TV-Sender auf Infotainmentsystemen anbieten",
    "description": "Der Medienstaatsvertrag fährt ab jetzt auch bei einigen Autos mit. Das betrifft insbesondere Tesla, aber auch Audi und BMW.",
    "url": "https://www.heise.de/news/Autohersteller-muessen-TV-Sender-auf-Infotainmentsystemen-anbieten-9674413.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/6/9/8/7/compositor-f3e9fc98e4f82e37-48876b75a5c1d565.webp",
    "publishedAt": "2024-04-03T16:24:00Z",
    "content": "Die Kommission für Zulassung und Aufsicht (ZAK) der Landesmedienanstalten hat erstmals die Benutzeroberflächen von In-Car-Entertainment-Systemen medienrechtlich bewertet. Das betrifft gleich mehrere … [+2902 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Andrew J. Hawkins",
    "title": "Ford’s hybrids just posted their best sales quarter ever — but so did gas-guzzlers",
    "description": "Ford’s hybrid vehicles had their best sales quarter ever, but so did the company’s gas-guzzling SUVs. EV sales were up 86 percent compared to last year.",
    "url": "https://www.theverge.com/2024/4/3/24119985/ford-q1-2024-sales-hybrid-gas-electric-mustang-f150",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/xsHgDtZmJcKOHMUzYDgxT8V-N-E=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19881636/acastro_200406_1777_ford_0001.0.jpg",
    "publishedAt": "2024-04-03T16:21:20Z",
    "content": "Fords hybrids just posted their best sales quarter ever but so did gas-guzzlers\r\nFords hybrids just posted their best sales quarter ever but so did gas-guzzlers\r\n / Fords EVs also did pretty well, al… [+3332 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Frandroid"
    },
    "author": "Maël Pilven",
    "title": "Petit tour à bord de l’alléchant Ford Explorer : moins cher qu’un Tesla Model Y avec plus d’autonomie",
    "description": "À l'occasion de son lancement commercial, nous avons pu faire un tour à bord du nouveau Ford Explorer. Voici nos premières impressions à bord de cette voiture électrique rivale du Tesla Model Y et du Renault Scénic E-Tech.",
    "url": "https://www.frandroid.com/marques/ford/1981842_petit-tour-a-bord-de-lallechant-ford-explorer-moins-cher-quun-tesla-model-y-avec-plus-dautonomie",
    "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/03/explorer-experience-requests-037-2.jpg",
    "publishedAt": "2024-04-03T16:20:31Z",
    "content": "À l'occasion de son lancement commercial, nous avons pu faire un tour à bord du nouveau Ford Explorer. Voici nos premières impressions à bord de cette voiture électrique rivale du Tesla Model Y et du… [+11578 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "asiafinancial.com",
    "title": "Tesla Searching For $2-3 Billion India EV Factory Site: FT",
    "description": "US EV giant Tesla is planning to scout for sites in India later this month for a $2 billion-plus electric car plant in the country. Tesla will reportedly send a team from the United States, the Financial Times reported on Wednesday, citing people familiar wit…",
    "url": "https://biztoc.com/x/49cf2d9a0975503b",
    "urlToImage": "https://c.biztoc.com/p/49cf2d9a0975503b/s.webp",
    "publishedAt": "2024-04-03T16:20:05Z",
    "content": "US EV giant Tesla is planning to scout for sites in India later this month for a $2 billion-plus electric car plant in the country.Tesla will reportedly send a team from the United States, the Financ… [+294 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "theguardian.com",
    "title": "How much is Elon Musk to blame for Tesla sales slip?",
    "description": "For one Tesla investor, the cause of Tuesday’s underwhelming sales figures was clear: the chief executive, Elon Musk. “Basically Tesla can’t sell its cars due to Elon’s behaviour,” wrote Ross Gerber, the chief executive of the investment management firm Gerbe…",
    "url": "https://biztoc.com/x/74377979882514ea",
    "urlToImage": "https://c.biztoc.com/p/74377979882514ea/s.webp",
    "publishedAt": "2024-04-03T16:20:04Z",
    "content": "For one Tesla investor, the cause of Tuesdays underwhelming sales figures was clear: the chief executive, Elon Musk.Basically Tesla cant sell its cars due to Elons behaviour, wrote Ross Gerber, the c… [+279 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Roger Åberg",
    "title": "Kan man köra standup skriven av 7-åringar?",
    "description": "Ja, men det är plågsamt\n\n\n\n\n\n\n\n\n\n\nMax Fosh har gjort en succé-turné och efter det kommer lite ångest inför nästa gång man ska upp på scenen med nytt material. Kommer folk att älska det eller blir man sågad? \n\nFör att lösa detta fick Max kompis honom att sänka…",
    "url": "https://feber.se/video/kan-man-kora-standup-skriven-av-7-aringar/466279/",
    "urlToImage": "https://i.ytimg.com/vi/n51GQbo7I_A/hqdefault.jpg",
    "publishedAt": "2024-04-03T16:20:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+34716 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "jalopnik.com",
    "title": "Toyota’s Hybrid Sales Are Far Outpacing Its EV Growth",
    "description": "Good morning! It’s Wednesday, April 3, 2024, and this is The Morning Shift, your daily roundup of the top automotive headlines from around the world, in one place. Here are the important stories you need to know. After all the talk of dwindling sales at EV ma…",
    "url": "https://biztoc.com/x/8ea93c2ea0a016a4",
    "urlToImage": "https://c.biztoc.com/p/8ea93c2ea0a016a4/og.webp",
    "publishedAt": "2024-04-03T16:14:10Z",
    "content": "Good morning! Its Wednesday, April 3, 2024, and this is The Morning Shift, your daily roundup of the top automotive headlines from around the world, in one place. Here are the important stories you n… [+289 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Airbag.uy"
    },
    "author": "Montevideo Portal",
    "title": "La china Xiaomi se dispara un 16 % en bolsa tras lanzamiento de su primer auto eléctrico",
    "description": "El SU7 recibió casi 90.000 pedidos en solo 24 horas y busca competir con el Model 3 de Tesla.",
    "url": "https://www.airbag.uy/Airbag/La-china-Xiaomi-se-dispara-un-16--en-bolsa-tras-lanzamiento-de-su-primer-auto-electrico-uc884398",
    "urlToImage": "https://imagenes.montevideo.com.uy/imgnoticias/202404/_W933_80/876761.jpg",
    "publishedAt": "2024-04-03T16:14:00Z",
    "content": "Las acciones de la tecnológica china Xiaomi se dispararon esta semana hasta un 16 % en su regreso a la bolsa tras los feriados de Pascuas a nivel mundial, impulsadas por el lanzamiento de su primer v… [+1808 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "Tesla could 'go bust' and plunge 91% because it's in a bubble and not growing, longtime bear says",
    "description": "None Tesla could end up plunging as low as $14 a share, according to longtime bear Per Lekander, a longtime bear who's been shorting the stock since 2020. • None Lekander, who's been shorting Tesla's stock since 2020, calls it the biggest bubble \"in modern hi…",
    "url": "https://biztoc.com/x/b10b6aad19787e6c",
    "urlToImage": "https://c.biztoc.com/p/b10b6aad19787e6c/s.webp",
    "publishedAt": "2024-04-03T16:10:16Z",
    "content": "None Tesla could end up plunging as low as $14 a share, according to longtime bear Per Lekander, a longtime bear who's been shorting the stock since 2020.None Lekander, who's been shorting Tesla's st… [+274 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "theguardian.com",
    "title": "How much is Elon Musk to blame for Tesla sales slip?",
    "description": "For one Tesla investor, the cause of Tuesday’s underwhelming sales figures was clear: the chief executive, Elon Musk. “Basically Tesla can’t sell its cars due to Elon’s behaviour,” wrote Ross Gerber, the chief executive of the investment management firm Gerbe…",
    "url": "https://biztoc.com/x/58a35c0e1ae3330f",
    "urlToImage": "https://c.biztoc.com/p/58a35c0e1ae3330f/s.webp",
    "publishedAt": "2024-04-03T16:06:19Z",
    "content": "For one Tesla investor, the cause of Tuesdays underwhelming sales figures was clear: the chief executive, Elon Musk.Basically Tesla cant sell its cars due to Elons behaviour, wrote Ross Gerber, the c… [+279 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Futurism"
    },
    "author": "Victor Tangermann",
    "title": "Investor Predicts Tesla Could \"Go Bust\"",
    "description": "Falling Short Tesla is in for a year of hurt. Earlier this week, Tesla posted its first-quarter earnings, shocking investors with worse-than-expected results with a 20 percent quarter-over-quarter drop in deliveries. And analysts bearish on Tesla are expectin…",
    "url": "https://futurism.com/the-byte/investor-predicts-tesla-go-bust",
    "urlToImage": "https://wp-assets.futurism.com/2024/04/investor-predicts-tesla-go-bust.jpg",
    "publishedAt": "2024-04-03T16:06:16Z",
    "content": "\"This was really the beginning of the end of the Tesla bubble.\"\r\nFalling Short\r\nTesla is in for a year of hurt.\r\nEarlier this week, the electric car manufacturer posted its first-quarter earnings, al… [+2156 chars]"
    },
    {
    "source": {
    "id": "lenta",
    "name": "Lenta"
    },
    "author": "Лина Пивоварова",
    "title": "В США засомневались в когнитивных способностях Байдена",
    "description": "Американский миллиардер, глава Tesla и SpaceX Илон Маск заявил, что президент США Джо Байден не понимает, что происходит в США на самом деле и не несет ответственности за свои действия. «Байден на самом деле не понимает, что происходит. За это несет ответстве…",
    "url": "https://lenta.ru/news/2024/04/03/v-ssha-zasomnevalis-v-kognitivnyh-sposobnostyah-baydena/",
    "urlToImage": "https://icdn.lenta.ru/images/2024/04/03/18/20240403185738171/share_943f706506b7468d2ee82832eff459a4.jpg",
    "publishedAt": "2024-04-03T16:01:00Z",
    "content": ", TeslaSpaceX , , . ( Twitter).\r\nCNN , . - , , « , ».\r\n« , . », .\r\n « » ."
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Bobby Green",
    "title": "Efterträdaren till Huracán verkar få namnet Temerario",
    "description": "Betyder \"hänsynslös\"\n\n\n\n\n\n\nEfterträdaren till Lamborghini Huracán är runt hörnet och nu har vi namnet på den, sägs det. Det är Temerario som på italienska betyder \"hänsynslös\". Det verkar alltså vara en riktigt ursinnig tjur vi har att vänta oss, och av logga…",
    "url": "https://feber.se/bil/eftertradaren-till-huracan-verkar-fa-namnet-temerario/466282/",
    "urlToImage": "https://static.feber.se/article_images/58/55/49/585549.jpg",
    "publishedAt": "2024-04-03T16:00:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+34697 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Marketscreener.com"
    },
    "author": null,
    "title": "Tesla: Canaccord Genuity remains Buy, targets $234",
    "description": "(marketscreener.com) On Wednesday, Canaccord Genuity renewed its Buy recommendation on Tesla, with a price target of $234, following the worse-than-expected sales figures published the previous day by the American carmaker.The Canadian broker points out that …",
    "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Tesla-Canaccord-Genuity-remains-Buy-targets-234-46351255/",
    "urlToImage": "https://www.marketscreener.com/images/reuters/2024-03-05T144855Z_1_LYNXNPEK240IP_RTROPTP_3_GERMANY-TESLA-FIRE.JPG",
    "publishedAt": "2024-04-03T15:54:55Z",
    "content": "On Wednesday, Canaccord Genuity renewed its Buy recommendation on Tesla, with a price target of $234, following the worse-than-expected sales figures published the previous day by the American carmak… [+1130 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "El Financiero"
    },
    "author": "Columnista Invitado",
    "title": "Jaime Toussaint von Bertrab: Nearshoring",
    "description": "Una oportunidad única para elevar el empleo en Nuevo León.",
    "url": "https://www.elfinanciero.com.mx/monterrey/2024/04/03/jaime-toussaint-von-bertrab-nearshoring/",
    "urlToImage": "https://www.elfinanciero.com.mx/resizer/lLvaZcZEsiBFuX8qCGJTaZsg0Iw=/1200x630/filters:format(jpg):quality(70):focal(1099x985:1109x995)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/EGM6MVAMSVA2NFGKRP7YVB32VU.jpg",
    "publishedAt": "2024-04-03T15:54:27Z",
    "content": "El fenómeno económico del nearshoring es una oportunidad única para impulsar la creación y calidad de empleos calificados en México, siendo Nuevo León el estado mejor posicionado. El presidente de la… [+4331 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tass.ru"
    },
    "author": "ТАСС",
    "title": "СМИ: Tesla приступила к поиску площадок для строительства завода в Индии",
    "description": "Как пишет газета The Indian Express, предположительно местом для постройки могут стать штаты Махараштра, Гуджарат или Тамилнад",
    "url": "https://tass.ru/ekonomika/20438277",
    "urlToImage": "https://cdn-storage-media.tass.ru/thumb/ru/ekonomika/20438277?u=2024-04-03T15:52:44.255175",
    "publishedAt": "2024-04-03T15:52:44Z",
    "content": "-, 3 . //. Tesla . The Indian Express .\r\n , , , . Tesla , . , , $2-3 .\r\n 2023 Tesla , . 500 . , . $25 . , .\r\n Tesla , - , . Tesla The Wall Street Journal , \" \", , 2023 . - , , \"Tesla , , \"."
    },
    {
    "source": {
    "id": null,
    "name": "01net.com"
    },
    "author": "Mickaël Bazoge",
    "title": "Tesla connaît ses premières difficultés depuis 4 ans, est-ce vraiment inquiétant ?",
    "description": "Les livraisons de Model ont accusé une baisse sensible au premier trimestre, et les perspectives ne sont guère engageantes. Le constructeur s'apprête à vivre quelques mois difficiles.",
    "url": "https://www.01net.com/actualites/tesla-connait-ses-premieres-difficultes-depuis-4-ans-est-ce-vraiment-inquietant.html",
    "urlToImage": "https://www.01net.com/app/uploads/2023/11/Test-Tesla-Model-3-20247.jpg",
    "publishedAt": "2024-04-03T15:52:41Z",
    "content": "Les livraisons de Model ont accusé une baisse sensible au premier trimestre, et les perspectives ne sont guère engageantes. Le constructeur s’apprête à vivre quelques mois difficiles.Tesla a livré 38… [+3097 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Olhardigital.com.br"
    },
    "author": "Gabriel Sérvio",
    "title": "Tesla supera BYD e lidera vendas de carros elétricos",
    "description": "Tesla vendeu 386 mil veículos elétricos no primeiro trimestre de 2024\nO post Tesla supera BYD e lidera vendas de carros elétricos apareceu primeiro em Olhar Digital.",
    "url": "https://olhardigital.com.br/2024/04/03/carros-e-tecnologia/tesla-supera-byd-e-lidera-vendas-de-carros-eletricos/",
    "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2023/04/Tesla2-695x500.jpg",
    "publishedAt": "2024-04-03T15:48:42Z",
    "content": "A BYD foi a montadora que mais vendeu carros elétricos no último trimestre de 2023, superando a Tesla. No início de 2024 o cenário mudou. A empresa de Elon Musk conseguiu tomar a liderança novamente,… [+1500 chars]"
    },
    {
    "source": {
    "id": "financial-post",
    "name": "Financial Post"
    },
    "author": "Bloomberg News",
    "title": "WSP Global caught in short seller's crosshairs, shares tumble",
    "description": "WSP Global Inc. shares plunged after Spruce Point Capital Management LLC said it was shorting the firm’s stock. Find out more.",
    "url": "https://financialpost.com/investing/wsp-global-short-seller-crosshairs-shares-tumble",
    "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/04/no0402tsx.jpg",
    "publishedAt": "2024-04-03T15:47:25Z",
    "content": "WSP Global Inc. shares plunged after Spruce Point Capital Management LLC said it was shorting the Canadian engineering firms stock, slapping it with a strong sell recommendation.\r\nSpruce Point, a pro… [+1791 chars]"
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
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "foxnews.com",
    "title": "Truckers challenge Biden administration over climate crackdown on electric big rigs",
    "description": "American truck drivers are sounding the horn on the Biden administration's recently finalized environmental regulations that aim to push for the heavy-duty vehicle sector to go all-electric. The truckers voiced concerns that electric heavy-duty vehicle techno…",
    "url": "https://biztoc.com/x/43c6b37d751cdcda",
    "urlToImage": "https://c.biztoc.com/p/43c6b37d751cdcda/og.webp",
    "publishedAt": "2024-04-03T15:46:10Z",
    "content": "American truck drivers are sounding the horn on the Biden administration's recently finalized environmental regulations that aim to push for the heavy-duty vehicle sector to go all-electric.The truck… [+285 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Research and Markets",
    "title": "Global Green Technology Sustainability Market Projected to Surge with 20.8% CAGR through 2028",
    "description": "Dublin, April 03, 2024 (GLOBE NEWSWIRE) -- The \"Green Technology Sustainability Market - Global Industry Size, Share, Trends, Opportunity, and Forecast, 2018-2028F\" report has been added to ResearchAndMarkets.com's offering.",
    "url": "https://www.globenewswire.com/news-release/2024/04/03/2857202/28124/en/Global-Green-Technology-Sustainability-Market-Projected-to-Surge-with-20-8-CAGR-through-2028.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
    "publishedAt": "2024-04-03T15:46:00Z",
    "content": "Dublin, April 03, 2024 (GLOBE NEWSWIRE) -- The \"Green Technology Sustainability Market - Global Industry Size, Share, Trends, Opportunity, and Forecast, 2018-2028F\" report has been added to ResearchA… [+4797 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Musk plots $3bn Tesla factory in India as Modi races to overtake China on electric cars",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_a840d6f5-e6d4-4fdb-9e67-ee9317d5de62",
    "urlToImage": null,
    "publishedAt": "2024-04-03T15:45:29Z",
    "content": "If you click 'Accept all', we and our partners (including 240 who are part of the IAB Transparency &amp; Consent Framework) will also use cookies and your personal data, such as IP address, precise l… [+686 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "David Nadelle",
    "title": "Tesla Sales Continue to Plummet — Is Demand for Electric Vehicles Going Down?",
    "description": "Tesla shares dropped another 5% on Monday, April 1, after the EV company's first annual drop in sales was reported. Shares have suffered a loss of more than ...",
    "url": "https://finance.yahoo.com/news/tesla-sales-continue-plummet-demand-154449099.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/3oA3MR942h7h4aHBZ4nNeA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/06e25d4408e3e3c36bc707b327c75487",
    "publishedAt": "2024-04-03T15:44:49Z",
    "content": "Tesla shares dropped another 5% on Monday, April 1, after the EV companys first annual drop in sales was reported. Shares have suffered a loss of more than a third of their value this year. This has … [+4056 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Allan Vélez",
    "title": "Las teorías de la conspiración más disparatadas de Mr. Tartaria",
    "description": "¿La Esfinge de Giza es una antena planetaria? Eso dice Mr. Tartaria en una de sus disparatadas teorías de la conspiración.\nThe post Las teorías de la conspiración más disparatadas de Mr. Tartaria appeared first on Digital Trends Español.",
    "url": "https://es.digitaltrends.com/sociales/mr-tartaria-teorias-de-la-conspiracion-mas-disparatadas/",
    "urlToImage": "https://es.digitaltrends.com/wp-content/uploads/2024/04/Karles-Torah.jpeg?resize=1200%2C630&p=1",
    "publishedAt": "2024-04-03T15:44:44Z",
    "content": "Basta con que busques algún contenido de extraterrestres o sobre las pirámides de Giza para que tarde o temprano te acabes encontrando un TikTokde Mr. Tartaria, el conspiracionista español del moment… [+2904 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Fred Lambert",
    "title": "Tesla brings 0% interest loans to China as it loses market shares",
    "description": "Tesla is launching 0% interest loans for a limited time in China as a new incentive amid the automaker losing market shares in the critical market.\n\n\n\n more…",
    "url": "http://electrek.co/2024/04/03/tesla-0-interest-loans-china-loses-market-shares/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/06/Tesla-Supercharger-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-04-03T15:44:11Z",
    "content": "Tesla is launching 0% interest loans for a limited time in China as a new incentive amid the automaker losing market shares in the critical market.\r\nJust as end-of-quarter incentives ended, Tesla is … [+1429 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Wille Wilhelmsson",
    "title": "Försvarets nya spionfartyg har döpts",
    "description": "Säg hej till HMS Artemis\n\n\n\n\n\n\nIdag döpte flottan sitt senaste signalspaningsfartyg HMS Artemis under en ceremoni vid Örlogshamnen, Karlskrona. Fartyget kommer att ersätta det nuvarande signalspaningsfartyget Orion och kommer att operera i Östersjön, primärt …",
    "url": "https://feber.se/samhalle/forsvarets-nya-spionfartyg-har-dopts/466290/",
    "urlToImage": "https://static.feber.se/article_images/58/56/00/585600.jpg",
    "publishedAt": "2024-04-03T15:40:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+34987 chars]"
    },
    {
    "source": {
    "id": "la-nacion",
    "name": "La Nacion"
    },
    "author": null,
    "title": "Quiénes son las 14 personas con las fortunas más gigantescas del mundo",
    "description": "La riqueza individual de cada uno de estos magnates es superior al PIB de países como Panamá, Uruguay, Costa Rica o Bolivia, según Forbes",
    "url": "https://www.lanacion.com.ar/economia/negocios/quienes-son-las-14-personas-con-las-fortunas-mas-gigantescas-del-mundo-nid03042024/",
    "urlToImage": "https://resizer.glanacion.com/resizer/v2/bernard-arnault-es-el-hombre-mas-rico-del-ADNNXPOLAZHJTDSI2WTIDUSPCY.jpg?auth=0da3b0c2c3a318a5e525159be666a234bd083ad34d65570cbe3a709587ed466c&width=768&quality=70&smart=false",
    "publishedAt": "2024-04-03T15:37:40Z",
    "content": "En la lista Forbes del año pasado solo eran seis los magnates que habían batido el récord de tener una fortuna superior a los US$100.000 millones. La novedad es que en la lista de este año, publicada… [+6466 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "youtube.com",
    "title": "Elon Musk Has a Porn Problem",
    "description": "On this episode of the Elon, Inc. podcast, New York magazine writer John Herrman joins our discussion about X’s growing spam presence and why the platform can’t seem to control it. If you think you’ve been seeing more X-rated content on X lately, you’re not a…",
    "url": "https://biztoc.com/x/a496f1d4b461c09a",
    "urlToImage": "https://c.biztoc.com/p/a496f1d4b461c09a/s.webp",
    "publishedAt": "2024-04-03T15:36:11Z",
    "content": "On this episode of the Elon, Inc. podcast, New York magazine writer John Herrman joins our discussion about Xs growing spam presence and why the platform cant seem to control it. If you think youve b… [+305 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investing.com",
    "title": "Midday movers: Intel, Ulta Beauty fall; Spotify rises By",
    "description": "Investing.com -- Main U.S. indexes gained Wednesday after data on the services sector indicated some softening, improving the outlook for potential Fed rate cuts. Here are some of the biggest U.S. stock movers today:​ Intel (NASDAQ: ) stock slid over 7% after…",
    "url": "https://biztoc.com/x/cdaf67b4c322cc40",
    "urlToImage": "https://c.biztoc.com/p/cdaf67b4c322cc40/s.webp",
    "publishedAt": "2024-04-03T15:36:08Z",
    "content": "Investing.com -- Main U.S. indexes gained Wednesday after data on the services sector indicated some softening, improving the outlook for potential Fed rate cuts.Here are some of the biggest U.S. sto… [+292 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Protothema.gr"
    },
    "author": "Τίνα Μανδηλαρά",
    "title": "Burn Book: A tech love story - Tα άπλυτα της Silicon Valley έγιναν βιβλίο",
    "description": "Η πολυβραβευμένη Αμερικανίδα δημοσιογράφος Κάρα Σουίσερ γράφει, μεταξύ άλλων, για το πάρτι με το γυμνόστηθο άγαλμα που έβγαζε, αντί για γάλα, εξωτικά κοκτέιλ, τον αδέξιο Ζούκερμπεργκ με τα απανωτά σύνδρομα, τον θρασύ Μασκ και τον δαιμόνιο Τζεφ Μπέζος | Ίλον Μ…",
    "url": "https://www.protothema.gr/culture/books/article/1482750/burn-book-a-tech-love-story-ta-apluta-tis-silicon-valley-eginan-vivlio/",
    "urlToImage": "https://i1.prth.gr/images/640x360share/files/2024-04-01/burn-book-mak.jpg",
    "publishedAt": "2024-04-03T15:36:00Z",
    "content": ", , , , . , . 40 60, « media», «Wall Street Journal», . «-: hi-tech » (Burn Book: A tech love story), , , , , - . \r\n, , , . , Google . , , , Amazon . \r\n, , , , . \r\n , Silicon Valley , «Vanity Fair» ,… [+708 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "Can a New Plant in India Save Struggling Tesla (TSLA) Stock?",
    "description": "Factories take years to build, which leaves TSLA stock plenty of time to fall further Following a miss on its first-quarter delivery figures, many analysts have declared that Tesla (NASDAQ: ) is poised to lose its status as a member of the “Magnificent Seven.…",
    "url": "https://biztoc.com/x/f0f0b403df576cd8",
    "urlToImage": "https://c.biztoc.com/p/f0f0b403df576cd8/s.webp",
    "publishedAt": "2024-04-03T15:32:18Z",
    "content": "Factories take years to build, which leaves TSLA stock plenty of time to fall furtherFollowing a miss on its first-quarter delivery figures, many analysts have declared that Tesla (NASDAQ: ) is poise… [+275 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "Amazon Layoffs 2024: What to Know About the Latest AWS Job Cuts",
    "description": "Amazon layoffs are coming for hundreds of employees Amazon (NASDAQ:AMZN) layoffs are coming for hundreds of the e-commerce company’s employees as it makes major cuts at its AWS division. According to an internal email, hundreds of jobs are being eliminated at…",
    "url": "https://biztoc.com/x/561466a7ed268e97",
    "urlToImage": "https://c.biztoc.com/p/561466a7ed268e97/s.webp",
    "publishedAt": "2024-04-03T15:32:18Z",
    "content": "Amazon layoffs are coming for hundreds of employeesAmazon (NASDAQ:AMZN) layoffs are coming for hundreds of the e-commerce companys employees as it makes major cuts at its AWS division.According to an… [+309 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "DIS Stock: Get Ready for the Final Face-Off Between Bob Iger and Nelson Peltz",
    "description": "The proxy battle over Disney's board will likely end in a victory for management. The proxy battle between Walt Disney (NYSE: ) CEO Bob Iger and Trian Partners’ Nelson Peltz is due to end today once the election for Disney directors is over. says Iger has the…",
    "url": "https://biztoc.com/x/3b24701657a9e7cb",
    "urlToImage": "https://c.biztoc.com/p/3b24701657a9e7cb/s.webp",
    "publishedAt": "2024-04-03T15:32:09Z",
    "content": "The proxy battle over Disney's board will likely end in a victory for management.The proxy battle between Walt Disney (NYSE: ) CEO Bob Iger and Trian Partners Nelson Peltz is due to end today once th… [+280 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "abc7.com",
    "title": "More reports, video emerge of woman damaging parked cars in Los Angeles with brick",
    "description": "More reports emerge of woman smashing windshields in Los Angeles with brick More people are coming forward with reports about a woman damaging the windows of parked cars in Los Angeles using a brick. More people are coming forward with reports about a woman d…",
    "url": "https://biztoc.com/x/58e7d1c51024450b",
    "urlToImage": "https://c.biztoc.com/p/58e7d1c51024450b/og.webp",
    "publishedAt": "2024-04-03T15:32:08Z",
    "content": "More reports emerge of woman smashing windshields in Los Angeles with brickMore people are coming forward with reports about a woman damaging the windows of parked cars in Los Angeles using a brick.M… [+291 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "André Westphal",
    "title": "In-Car-Entertainment von Tesla und Co.: Verstärkte Regulierung für Gatekeeper",
    "description": "Die Kommission für Zulassung und Aufsicht (ZAK) hat die In-Car-Entertainment-Systeme von Audi, BMW/ Mini und Tesla als Benutzeroberflächen eingestuft. Den „Tesla Media Player“ ordnet die ZAK außerdem als Medienplattform ein. Was bedeutet das? Nun, die Plattfo…",
    "url": "https://stadt-bremerhaven.de/in-car-entertainment-von-tesla-und-co-verstaerkte-regulierung-fuer-gatekeeper/",
    "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/08/Tesla-Model-3.jpeg",
    "publishedAt": "2024-04-03T15:30:22Z",
    "content": "Die Kommission für Zulassung und Aufsicht (ZAK) hat die In-Car-Entertainment-Systeme von Audi, BMW/ Mini und Tesla als Benutzeroberflächen eingestuft. Den Tesla Media Player ordnet die ZAK außerdem a… [+2480 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "Ex-Chrysler CEO predicts EV startups are 'just not going to make it'",
    "description": "With electric vehicle (EV) names like Tesla and Rivian recently announcing financial woes, the former CEO and Chairman of Chrysler told a cautionary tale about the market’s future. \"They're having one heck of a time. These startups are just not going to make …",
    "url": "https://biztoc.com/x/73edbe02aec7267b",
    "urlToImage": "https://c.biztoc.com/p/73edbe02aec7267b/s.webp",
    "publishedAt": "2024-04-03T15:28:04Z",
    "content": "With electric vehicle (EV) names like Tesla and Rivian recently announcing financial woes, the former CEO and Chairman of Chrysler told a cautionary tale about the markets future.\"They're having one … [+292 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Vedomosti.ru"
    },
    "author": null,
    "title": "Bloomberg: акции Tesla дешевеют и приближаются к $150 за бумагу",
    "description": "",
    "url": "https://www.vedomosti.ru/business/news/2024/04/03/1029708-aktsii-tesla-desheveyut",
    "urlToImage": "https://sharing.vedomosti.ru/1712158022/vedomosti.ru/business/news/2024/04/03/1029708-aktsii-tesla-desheveyut.jpg",
    "publishedAt": "2024-04-03T15:27:02Z",
    "content": "vedomosti.ru\r\n, , , , - . \r\n ( , , «», ). \r\n - «2», vedomosti.ru\r\n © , / 7712108141/771501001, 1027739124775, 127018, . , . , 3 1, I, 2, 21. 19992024"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Peter Johnson",
    "title": "Ford takes second in US EV market after sales climb 86% as lower prices take effect",
    "description": "Ford is starting 2024 off strong with EV sales up 86% through the first three months. The growth was enough for Ford to place second in the US EV market behind only Tesla. Ford’s sales surge comes after slashing prices earlier this year.\n\n\n\n more…",
    "url": "http://electrek.co/2024/04/03/ford-takes-second-us-ev-market-price-cuts-take-effect/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/08/Ford-gas-models-EVs-1.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-04-03T15:26:49Z",
    "content": "Ford is starting 2024 off strong with EV sales up 86% through the first three months. The growth was enough for Ford to place second in the US EV market behind only Tesla. Ford’s sales surge comes af… [+4076 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WebProNews"
    },
    "author": "Rich Ord",
    "title": "Elon Musk’s Neuralink Unleashes Paradigm Shift: Nolan’s Astonishing Transformation Redefines Human Potential",
    "description": "WebProNews\nElon Musk’s Neuralink Unleashes Paradigm Shift: Nolan’s Astonishing Transformation Redefines Human Potential\nPromising to bridge the gap between the human brain and artificial intelligence, Neuralink has emerged as a beacon of hope for individuals …",
    "url": "https://www.webpronews.com/elon-musks-neuralink-unleashes-paradigm-shift-nolans-astonishing-transformation-redefines-human-potential/",
    "urlToImage": "https://www.webpronews.com/wp-content/uploads/2024/04/Screenshot-2024-04-03-at-11.22.28 AM.jpg",
    "publishedAt": "2024-04-03T15:24:50Z",
    "content": "Few innovations in neurotechnology have sparked as much intrigue and fascination as Neuralink, the brainchild of entrepreneur Elon Musk. Promising to bridge the gap between the human brain and artifi… [+3828 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Knack.be"
    },
    "author": "Jeroen de Preter",
    "title": "Waarom daalt plots de verkoop van elektrische wagens? ‘Rijbereik speelt nog nauwelijks een rol’",
    "description": "Zowel Tesla als zijn Chinese concurrent BYD verkochten het afgelopen kwartaal aanzienlijk minder elektrische auto’s dan verwacht. Een tijdelijke dip, of is er meer aan de hand?\nThe post Waarom daalt plots de verkoop van elektrische wagens? ‘Rijbereik speelt n…",
    "url": "https://www.knack.be/nieuws/auto/waarom-daalt-de-verkoop-plots-van-elektrische-wagens-rijbereik-speelt-nog-nauwelijks-een-rol/",
    "urlToImage": "https://img.static-rmg.be/a/view/q75/w1600/h836/f27.93,56.85/5705019/gettyimages-1449024276-jpg.jpg",
    "publishedAt": "2024-04-03T15:22:23Z",
    "content": "Zowel Tesla als zijn Chinese concurrent BYD verkochten het afgelopen kwartaal aanzienlijk minder elektrische autos dan verwacht. Een tijdelijke dip, of is er meer aan de hand?\r\nBYD, de Chinese constr… [+3790 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Moneycontrol Hindi",
    "title": "India में प्लांट लगा सकती है Tesla, जगह तलाशने के लिए भेजेगी टीम: रिपोर्ट",
    "description": "Tesla: देश में कई विदेशी कंपनियां अभी भी अपने कारोबार की शुरुआत करने की राह देख रही हैं। इस बीच यूके के फाइनेंशियल टाइम्स ने बताया कि अरबपति एलॉन मस्क की टेस्ला प्रस्तावित 2 बिलियन से 3 बिलियन डॉलर के इलेक्ट्रिक कार प्लांट के लिए जगह तलाशने के लिए इस महीने भा…",
    "url": "https://hindi.moneycontrol.com/news/tech/auto/tesla-can-set-up-a-plant-in-india-will-send-a-team-to-find-a-place-1887361.html",
    "urlToImage": "https://images.moneycontrol.com/static-hindinews/2023/12/teslaindia-637x435.jpg",
    "publishedAt": "2024-04-03T15:20:35Z",
    "content": "Tesla: 2 3 , 4,150 , , \r\n ,   , , \r\n, , , , \r\n 24,000    \r\n () 15 25 50 , 35,000 ( 29 ) , ,"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "jsor@businessinsider.com (Jennifer Sor)",
    "title": "Tesla could 'go bust' and plunge 91% because it's in a bubble and not growing, longtime bear says",
    "description": "Tesla is arguably \"the biggest stock market bubble in modern history,\" said Per Lekander, an investor who's been shorting the stock since 2020.",
    "url": "https://markets.businessinsider.com/news/stocks/tesla-stock-price-crash-bubble-bear-outlook-demand-per-lekander-2024-4",
    "urlToImage": "https://i.insider.com/5b88338b80eb351f008b583f?width=1200&format=jpeg",
    "publishedAt": "2024-04-03T15:20:29Z",
    "content": "Tesla's stock is in a bubble and has \"no growth,\" which puts it at risk of \"going bust,\" according to hedge funder and longtime bear Per Lekander.\r\nLekander, who told CNBC he's shorted Tesla stock si… [+2633 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Wille Wilhelmsson",
    "title": "Ny trailer för Boy Kills World",
    "description": "Ultravåld med Bill Skarsgård\n\n\n\n\n\n\n\n\n\n\nHär kommer en ny trailer för den kommande actionfilmen Boy Kills World där Bill Skarsgård spelar huvudrollen som den döve \"Boy\". Det ser ut att handla om en klassisk hämndrulle där Boy ger sig ut på en mordturné för att …",
    "url": "https://feber.se/film/ny-trailer-for-boy-kills-world/466265/",
    "urlToImage": "https://i.ytimg.com/vi/z6NibtjmjOk/hqdefault.jpg",
    "publishedAt": "2024-04-03T15:20:00Z",
    "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+34020 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "PR Daily"
    },
    "author": "Sean Devlin",
    "title": "The Scoop: Microsoft had ‘cascade of errors’ that led to hack, government says",
    "description": "Plus: Yahoo acquires Artifact AI news tool; Iowa-LSU game shatters sports betting record. A series of major mistakes was dubbed “a cascade of errors” which led to a Chinese hack of Microsoft, according to a U.S. government review. CNN reports that the infiltr…",
    "url": "https://www.prdaily.com/the-scoop-microsoft-yahoo-artifact-college-basketball/",
    "urlToImage": "https://s39940.pcdn.co/wp-content/uploads/2024/04/iStock-917844370.jpg",
    "publishedAt": "2024-04-03T15:18:46Z",
    "content": "A series of major mistakes was dubbed a cascade of errors which led to a Chinese hack of Microsoft, according to a U.S. government review. CNN reports that the infiltration included a breach of the t… [+5761 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "EV Realty and GreenPoint Partners Form Joint Venture for the Buildout of $200 Million in EV Charging Hubs",
    "description": "SAN FRANCISCO, April 03, 2024 (GLOBE NEWSWIRE) -- (\"EV Realty\"), an EV infrastructure development platform powering commercial fleets, today announced the formation of a joint venture alongside (\"GreenPoint\"), an alternatives firm investing at the intersectio…",
    "url": "https://biztoc.com/x/2bfbcd345ecfac5f",
    "urlToImage": "https://c.biztoc.com/p/2bfbcd345ecfac5f/s.webp",
    "publishedAt": "2024-04-03T15:18:04Z",
    "content": "SAN FRANCISCO, April 03, 2024 (GLOBE NEWSWIRE) -- (\"EV Realty\"), an EV infrastructure development platform powering commercial fleets, today announced the formation of a joint venture alongside (\"Gre… [+306 chars]"
    },
    {
    "source": {
    "id": "la-nacion",
    "name": "La Nacion"
    },
    "author": "LA NACION",
    "title": "De dólar a peso mexicano: a cuánto cotiza la moneda hoy, miércoles 3 de abril",
    "description": "Aquí se puede consultar un resumen completo de la situación económica en México y el valor de la divisa para este miércoles 3 de abril",
    "url": "https://www.lanacion.com.ar/estados-unidos/de-dolar-a-peso-mexicano-a-cuanto-cotiza-la-moneda-hoy-miercoles-3-de-abril-nid03042024/",
    "urlToImage": "https://resizer.glanacion.com/resizer/v2/de-dolar-a-peso-mexicano-la-cotizacion-del-XPRRYMVQFVF7FJH7Z7XGPYQHMY.jpg?auth=23314b9637afb08c99381bcb16b2d4fc0b019532cfdc5db3b1988cad154feca5&width=768&quality=70&smart=false",
    "publishedAt": "2024-04-03T15:14:12Z",
    "content": "Este miércoles 3 de abril, el precio del dólar en México es de $16,5673, de acuerdo con el Diario Oficial de la Federación (DOF), mientras que el que se vende en las ventanillas del Citibanamex es de… [+2440 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Derek Saul, Forbes Staff, \n Derek Saul, Forbes Staff\n https://www.forbes.com/sites/dereksaul/",
    "title": "Here’s Why Disney Will Likely Win Proxy Fight With Peltz—And Why It Still Has To Worry",
    "description": "“If circumstances get tougher at Disney, proxy battles could persist,” warned one analyst, indicative of the long-term headaches facing the entertainment conglomerate.",
    "url": "https://www.forbes.com/sites/dereksaul/2024/04/03/heres-why-disney-will-likely-win-proxy-fight-with-peltz-and-why-it-still-has-to-worry/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65cd2892dd14c59d6b5c72ac/0x0.jpg?format=jpg&crop=2682,1508,x0,y57,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-04-03T15:12:26Z",
    "content": "Billionaire activist investor Nelson Peltzs high-profile proxy battle against Disney will come to a head Wednesday at the companys annual shareholder meeting, and, though reportssuggest Disney likely… [+3329 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Shiftdelete.net"
    },
    "author": "Yiğit Can Polat",
    "title": "Togg’u telefondan kontrol etmek!",
    "description": "Togg T10X artık telefondan kontrol edilebiliyor! Evet, yanlış duymadınız, artık Togg tam anlamıyla bağlantılı bir cihaza dönüştü.",
    "url": "https://shiftdelete.net/togg-u-telefondan-kontrol-etmek",
    "urlToImage": "https://ares.shiftdelete.net/2024/04/Toggu-telefondan-kontrol-etmek.jpg",
    "publishedAt": "2024-04-03T15:11:36Z",
    "content": "Günümüz tarihi bir gün çünkü yanmda bulunan Togg T10X artk telefondan kontrol edilebiliyor! Evet, yanl duymadnz, artk Togg tam anlamyla balantl bir cihaza dönütü. Togg T10X u anda tam anlamyla bir ci… [+2296 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investing.com"
    },
    "author": "Investing.com",
    "title": "Midday movers: Intel, Ulta Beauty fall; Spotify rises",
    "description": "Midday movers: Intel, Ulta Beauty fall; Spotify rises",
    "url": "https://www.investing.com/news/stock-market-news/intel-tesla-tsmc-fall-premarket-calmaine-rises-3363702",
    "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXNPEI2D0PS_L.jpg",
    "publishedAt": "2024-04-03T15:11:02Z",
    "content": "(Updated - April 3, 2024 11:08 AM EDT)\r\nInvesting.com -- Main U.S. indexes gained Wednesday after data on the services sector indicated some softening, improving the outlook for potential Fed rate cu… [+1969 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Aristeguinoticias.com"
    },
    "author": "Redacción AN / JEPM",
    "title": "Samuel García gobernará por horario y el resto del día opinará sobre contienda electoral; ‘Tengo vida’",
    "description": "El gobernador de Nuevo León, Samuel García, anunció que durante la época electoral tendrá un horario laboral fijo de 9:00 a 17:00 horas para que el resto del día pueda opinar, sin ninguna restricción, sobre los comicios del 2 de junio.",
    "url": "https://aristeguinoticias.com/0304/mexico/samuel-garcia-gobernara-por-horario-y-el-resto-del-dia-opinara-sobre-contienda-electoral-tengo-vida/",
    "urlToImage": "https://editorial.aristeguinoticias.com/wp-content/uploads/2024/04/samu-boy.jpg",
    "publishedAt": "2024-04-03T15:07:31Z",
    "content": "El gobernador de Nuevo León, Samuel García, anunció a través de un video publicado en sus redes sociales que durante los próximos dos meses que dura la época electoral tendrá un horario laboral fijo … [+1407 chars]"
    },
    {
    "source": {
    "id": "focus",
    "name": "Focus"
    },
    "author": "FOCUS online",
    "title": "Auch Tesla betroffen - 1 Billion Dollar verbrannt: E-Auto-Aktien im freien Fall",
    "description": "Der Marktwert der Elektroauto-Hersteller hat seit seinem Boom im Jahr 2021 fast eine Billion Dollar verloren. Insbesondere zehn der größten US-Hersteller, darunter Tesla, Rivian und Lucid, verzeichneten enorme Einbußen.",
    "url": "https://www.focus.de/finanzen/boerse/tesla-betroffen-1-billion-dollar-vernichtet-aktien-fuer-e-autos-sind-im-freien-fall_id_259815403.html",
    "urlToImage": "https://p6.focus.de/img/fotos/id_259815356/elon-musk.jpg?im=Crop%3D%280%2C288%2C3464%2C1732%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=3809622cf1d0c9c9ae7425ce14a60ab50ae7df0ba3822eaf44e2d8649e7b16a9",
    "publishedAt": "2024-04-03T15:07:03Z",
    "content": "<ul><li>\r\nKommentare</li><li>\r\nE-Mail</li><li>\r\nTeilen</li><li>\r\nMehr</li><li>\r\nTwitter</li><li>\r\nDrucken</li><li>\r\nFeedback</li><li>\r\nFehler meldenSie haben einen Fehler gefunden?\r\nBitte markieren S… [+4175 chars]"
    },
    {
    "source": {
    "id": "focus",
    "name": "Focus"
    },
    "author": "FOCUS online",
    "title": "Auch Tesla betroffen - 1 Billion Dollar verbrannt: E-Auto-Aktien im freien Fall",
    "description": "Der Marktwert der Elektroauto-Hersteller hat seit seinem Boom im Jahr 2021 fast eine Billion Dollar verloren. Insbesondere zehn der größten US-Hersteller, darunter Tesla, Rivian und Lucid, verzeichneten enorme Einbußen.",
    "url": "https://www.focus.de/finanzen/boerse/tesla-betroffen-e-auto-aktien-im-freien-fall-1-billion-dollar-verbrannt_id_259815403.html",
    "urlToImage": "https://p6.focus.de/img/fotos/id_259815356/elon-musk.jpg?im=Crop%3D%280%2C288%2C3464%2C1732%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=3809622cf1d0c9c9ae7425ce14a60ab50ae7df0ba3822eaf44e2d8649e7b16a9",
    "publishedAt": "2024-04-03T15:07:03Z",
    "content": "<ul><li>\r\nKommentare</li><li>\r\nE-Mail</li><li>\r\nTeilen</li><li>\r\nMehr</li><li>\r\nTwitter</li><li>\r\nDrucken</li><li>\r\nFeedback</li><li>\r\nFehler meldenSie haben einen Fehler gefunden?\r\nBitte markieren S… [+4146 chars]"
    },
    {
    "source": {
    "id": "focus",
    "name": "Focus"
    },
    "author": "FOCUS online",
    "title": "Auch Tesla betroffen - 1 Billion Dollar verbrannt: E-Auto-Aktien im freien Fall",
    "description": "Der Marktwert der Elektroauto-Hersteller hat seit seinem Boom im Jahr 2021 fast eine Billion Dollar verloren. Insbesondere zehn der größten US-Hersteller, darunter Tesla, Rivian und Lucid, verzeichneten enorme Einbußen.",
    "url": "https://www.focus.de/finanzen/boerse/tesla-betroffen-fast-eine-billion-dollar-verbrannt-e-auto-aktien-im-freien-fall_id_259815403.html",
    "urlToImage": "https://p6.focus.de/img/fotos/id_259815356/elon-musk.jpg?im=Crop%3D%280%2C288%2C3464%2C1732%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=3809622cf1d0c9c9ae7425ce14a60ab50ae7df0ba3822eaf44e2d8649e7b16a9",
    "publishedAt": "2024-04-03T15:07:03Z",
    "content": "<ul><li>\r\nKommentare</li><li>\r\nE-Mail</li><li>\r\nTeilen</li><li>\r\nMehr</li><li>\r\nTwitter</li><li>\r\nDrucken</li><li>\r\nFeedback</li><li>\r\nFehler meldenSie haben einen Fehler gefunden?\r\nBitte markieren S… [+4146 chars]"
    },
    {
    "source": {
    "id": "focus",
    "name": "Focus"
    },
    "author": "FOCUS online",
    "title": "Auch Tesla betroffen - 1 Billion Dollar verbrannt: E-Auto-Aktien im freien Fall",
    "description": "Der Marktwert der Elektroauto-Hersteller hat seit seinem Boom im Jahr 2021 fast eine Billion Dollar verloren. Insbesondere zehn der größten US-Hersteller, darunter Tesla, Rivian und Lucid, verzeichneten enorme Einbußen.",
    "url": "https://www.focus.de/finanzen/boerse/tesla-betroffen-fast-eine-billion-dollar-verbrannt-e-auto-aktien-sind-im-freien-fall_id_259815403.html",
    "urlToImage": "https://p6.focus.de/img/fotos/id_259815356/elon-musk.jpg?im=Crop%3D%280%2C288%2C3464%2C1732%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=3809622cf1d0c9c9ae7425ce14a60ab50ae7df0ba3822eaf44e2d8649e7b16a9",
    "publishedAt": "2024-04-03T15:07:03Z",
    "content": "<ul><li>\r\nKommentare</li><li>\r\nE-Mail</li><li>\r\nTeilen</li><li>\r\nMehr</li><li>\r\nTwitter</li><li>\r\nDrucken</li><li>\r\nFeedback</li><li>\r\nFehler meldenSie haben einen Fehler gefunden?\r\nBitte markieren S… [+4146 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Thomas Estimbre",
    "title": "Ce constructeur de voitures électriques est au bord de la faillite",
    "description": "La catastrophe se profile pour le constructeur automobile américain Fisker, présent en France avec sa voiture électrique Ocean. Dans une situation financière délicate, il fait face à l'annulation de 40 000 réservations. L'avenir s'assombrit et la faillite se …",
    "url": "https://www.journaldugeek.com/2024/04/03/ce-constructeur-de-voitures-electriques-est-au-bord-de-la-faillite/",
    "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/04/Fisker-Ocean-Graz-MultiColor.jpg",
    "publishedAt": "2024-04-03T15:03:11Z",
    "content": "Fisker est au plus mal et se retrouve aujourd’hui au bord de la faillite. Ce constructeur automobile américain joue sa survie et les dernières nouvelles sont dramatiques. Nous avons récemment appris … [+3550 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Expansion.com"
    },
    "author": "Esperanza Balaguer",
    "title": "Taylor Swift entra en la lista de multimillonarios más ricos del mundo",
    "description": "La cantante Taylor Swift continúa la buena racha que comenzó el año pasado con el éxito de su gira mundial The Eras Tour. La avalancha de asistentes a sus conciertos le ha hecho entrar por primera vez en la lista de los más ricos del mundo. Leer",
    "url": "https://www.expansion.com/economia/2024/04/03/660d6dbbe5fdea96578b4593.html",
    "urlToImage": "https://phantom-expansion.unidadeditorial.es/7796d715e9e2432a0a4c762602a5209f/crop/206x65/1842x1156/resize/1200/f/webp/assets/multimedia/imagenes/2024/04/03/17121562945776.jpg",
    "publishedAt": "2024-04-03T15:02:43Z",
    "content": "La cantante Taylor Swift continúa la buena racha que comenzó el año pasado con el éxito de su gira mundial The Eras Tour. La avalancha de asistentes a sus conciertos le ha hecho entrar por primera ve… [+4483 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "cnn.com",
    "title": "Tesla has a big competitor. And it is Chinese",
    "description": "Editor’s Note: Sign up for CNN’s Meanwhile in China newsletter which explores what you need to know about the country’s rise and how it impacts the world. In 1995, metallurgy graduate Wang Chuanfu founded BYD, a small Chinese company focused on producing rech…",
    "url": "https://biztoc.com/x/0a771e511e6a7bb9",
    "urlToImage": "https://c.biztoc.com/p/0a771e511e6a7bb9/og.webp",
    "publishedAt": "2024-04-03T15:02:06Z",
    "content": "Editors Note: Sign up for CNNs Meanwhile in China newsletter which explores what you need to know about the countrys rise and how it impacts the world.In 1995, metallurgy graduate Wang Chuanfu founde… [+284 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "Breitbart",
    "title": "Buttigieg: Opposing Electric Cars Is Like Wanting ‘Landline Phones Forever’",
    "description": "Secretary of Transportation Pete Buttigieg said Tuesday on Fox News Channel’s “America Reports” that people who do not want electric cars were like those who wanted “landline phones forever.” Buttigieg said, “Let’s be clear consumers have wanted and purchased…",
    "url": "https://freerepublic.com/focus/f-news/4228715/posts",
    "urlToImage": null,
    "publishedAt": "2024-04-03T15:01:43Z",
    "content": "Skip to comments.\r\nButtigieg: Opposing Electric Cars Is Like Wanting Landline Phones ForeverBreitbart ^\r\n | 04/03/2024\r\n | Pam Key\r\nPosted on 04/03/2024 8:01:43 AM PDT by ChicagoConservative27\r\nSecre… [+6464 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Alberto de la Torre",
    "title": "\"Conducir un Tesla otorga estatus\": los aprendizajes de BYD para que el coche eléctrico chino triunfe en Europa",
    "description": "Trabajó para Ford en China durante gran parte de su carrera y ahora es uno de los hombres fuertes de BYD en Europa. Sun Yi forma parte de los altos ejecutivos que la firma china ha puesto a trabajar en suelo europeo para adaptarse a nuestros gustos y entender…",
    "url": "https://www.xataka.com/movilidad/conducir-tesla-otorga-estatus-aprendizajes-byd-coche-electrico-chino-triunfe-europa",
    "urlToImage": "https://i.blogs.es/e62363/65bc0e0a0daad53ef234aaba_dsc04967-20copia/840_560.jpeg",
    "publishedAt": "2024-04-03T15:00:49Z",
    "content": "Trabajó para Ford en China durante gran parte de su carrera y ahora es uno de los hombres fuertes de BYD en Europa. Sun Yi forma parte de los altos ejecutivos que la firma china ha puesto a trabajar … [+5149 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bizjournals.com",
    "title": "Federal judge rules EEOC can proceed with Tesla discrimination lawsuit",
    "description": "EV maker in hot water over alleged discrimination and retaliation against Black employees at Fremont plant. #fremont",
    "url": "https://biztoc.com/x/680f66417eac8686",
    "urlToImage": "https://c.biztoc.com/p/680f66417eac8686/s.webp",
    "publishedAt": "2024-04-03T15:00:27Z",
    "content": "EV maker in hot water over alleged discrimination and retaliation against Black employees at Fremont plant.\r\n#fremont\r\nThis story appeared on bizjournals.com, ."
    },
    {
    "source": {
    "id": null,
    "name": "Diariomotor.com"
    },
    "author": "David Villarreal",
    "title": "El drama del SUV de lujo que vino a comerse a Tesla y ahora puedes comprártelo a precio de Toyota Corolla",
    "description": "Los talluditos, que ya llevamos un tiempo en esto, nos acordamos de una época en el que el coche eléctrico de moda, entre famosos, emprendedores, estrellas de la televisión y el cine, no era un Tesla, y ni mucho menos su último gran éxito, el Cybertruck. Hace…",
    "url": "https://www.diariomotor.com/noticia/desplome-precios-fisker-ocean/",
    "urlToImage": "https://www.diariomotor.com/imagenes/2024/04/fisker-ocean-2024.jpg",
    "publishedAt": "2024-04-03T15:00:18Z",
    "content": "Los talluditos, que ya llevamos un tiempo en esto, nos acordamos de una época en el que el coche eléctrico de moda, entre famosos, emprendedores, estrellas de la televisión y el cine, no era un Tesla… [+3638 chars]"
    }
    ]
    }
    )
})

app.listen( PORT, ()=>{
  console.log(`server is listening on ${PORT}`);
})