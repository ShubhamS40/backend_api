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
        "totalResults": 36206,
        "articles": [
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "India build big lead despite Stokes' return wicket",
        "description": "England look on course for defeat by India in the fifth Test after the hosts build a lead of 255 runs on day two in Dharamsala.",
        "url": "https://www.bbc.co.uk/sport/cricket/68500387",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15E06/production/_132860698_rohitsharmaandshubmangill.jpg",
        "publishedAt": "2024-03-08T11:20:47Z",
        "content": "Ben Stokes had not bowled competitively since last year's Ashes series in England\r\n<table><tr><th>Fifth Test, Dharamsala (day two of five):</th></tr>\r\n<tr><td>England 218: Crawley 79; Kuldeep 5-72, A… [+5024 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "England look for quick wickets to wrap up India innings",
        "description": "Follow live text updates from day three of the fifth Test between India and England in Dharamsala.",
        "url": "https://www.bbc.co.uk/sport/live/cricket/67781550",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2024-03-08T12:06:14Z",
        "content": "England did go into their shells a little in the first innings but India were were proactive and it served them very well. England will want to show a bit more proactiveness without being reckless. \r… [+388 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "India v England: Fifth Test, day one - text updates",
        "description": "Follow live text updates from day one of the fifth Test between India and England in Dharamsala.",
        "url": "https://www.bbc.co.uk/sport/live/cricket/67781543",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2024-03-06T15:31:35Z",
        "content": "Dharamsala is this week's venue and judging from the England players' social media, it looks like an absolute stunner. \r\nI was lucky enough to visit Newlands in Cape Town last year and both are surel… [+419 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "India resume on 135-1, just 83 behind England on day two",
        "description": "Follow live text updates from day two of the fifth Test between India and England in Dharamsala.",
        "url": "https://www.bbc.co.uk/sport/live/cricket/67781547",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2024-03-08T03:37:13Z",
        "content": "Morning!\r\nA first-innings total of 218, after winning the toss, has left England behind in the game. \r\nit got worse when India reached 135-1 at close, just 83 runs behind.\r\nThe pitch in Dharamsala lo… [+96 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "'Exposed' England have 'thinking' to do - McCullum",
        "description": "England have been \"exposed\" in India and have some \"deep thinking\" ahead, according to coach Brendon McCullum.",
        "url": "https://www.bbc.co.uk/sport/cricket/68528077",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15836/production/_132881188_brendonmccullum.jpg",
        "publishedAt": "2024-03-10T12:47:13Z",
        "content": "England have lost seven of their past 12 Tests\r\nEngland have been \"exposed\" in India and have some \"deep thinking\" ahead, according to coach Brendon McCullum.\r\nThe tourists won the first Test but the… [+5395 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "Wood replaces Robinson for fifth Test",
        "description": "Mark Wood replaces fellow seamer Ollie Robinson in England's only change for the final Test against India in Dharamsala starting on Thursday.",
        "url": "https://www.bbc.co.uk/sport/cricket/68488004",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
        "publishedAt": "2024-03-06T07:42:40Z",
        "content": "<table><tr><th>India v England, fifth Test</th></tr>\r\n<tr><td>Venue: Himachal Pradesh CA Stadium, Dharamsala Dates: 7-11 March Time: 04:00 GMT</td></tr><tr><td>Coverage: Live text commentary on the B… [+1035 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Maxwell Zeff",
        "title": "10 Modern ‘Mechanical Turks’: When Automation Is Just Humans in Disguise",
        "description": "Amazon’s grocery stores ditched their “Just Walk Out” technology on Tuesday, though it turned out the automated checkout system included 1,000 reviewers in India. However, this is hardly the only example of times when automation breakthroughs were nothing mor…",
        "url": "https://gizmodo.com/modern-mechanical-turks-automation-humans-in-disguise-1851382957",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/56fbb74a489b621416392f3cdda838e4.jpg",
        "publishedAt": "2024-04-03T12:00:00Z",
        "content": "Amazons grocery stores ditched their Just Walk Out technology on Tuesday, though it turned out the automated checkout system included 1,000 reviewers in India. However, this is hardly the only exampl… [+1528 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "India Drops Plan To Require Approval For AI Model Launches",
        "description": "An anonymous reader quotes a report from TechCrunch: India is walking back on a recent AI advisory after receiving criticism from many local and global entrepreneurs and investors. The Ministry of Electronics and IT shared an updated AI advisory with industry…",
        "url": "https://yro.slashdot.org/story/24/03/15/1953258/india-drops-plan-to-require-approval-for-ai-model-launches",
        "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
        "publishedAt": "2024-03-15T20:50:00Z",
        "content": "India is walking back on a recent AI advisory after receiving criticism from many local and global entrepreneurs and investors. The Ministry of Electronics and IT shared an updated AI advisory with i… [+1535 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Fans stunned as Ed Sheeran sings in Punjabi",
        "description": "The star teamed up with Indian singer Diljit Dosanjh at his concert in Mumbai, delighting the crowd.",
        "url": "https://www.bbc.co.uk/news/entertainment-arts-68590845",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0BE5/production/_132354030_f0c9870f4b4e1b2ce95ae3aec95cafc1bca3ab34.jpg",
        "publishedAt": "2024-03-17T10:50:28Z",
        "content": "Ed Sheeran has sung in Punjabi for the first time during his concert in Mumbai, leaving fans stunned and setting social media ablaze.\r\nDuring the show on Saturday night, the English superstar invited… [+1734 chars]"
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
        "name": "ReadWrite"
        },
        "author": "Graeme Hanna",
        "title": "India revises approval stance on AI model launches",
        "description": "Amidst a torrent of backlash from industry experts, India’s regulatory authorities have backtracked on their planned framework for the deployment… Continue reading India revises approval stance on AI model launches\nThe post India revises approval stance on AI…",
        "url": "https://readwrite.com/india-revises-approval-stance-on-ai-model-launches/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/lIhOCThxSiqDf6QcV2v0Nw.png",
        "publishedAt": "2024-03-18T15:41:47Z",
        "content": "Amidst a torrent of backlash from industry experts, India’s regulatory authorities have backtracked on their planned framework for the deployment of cutting-edge artificial intelligence (AI) technolo… [+1824 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
        "title": "Motorola Edge 50 Pro with Snapdragon 7 Gen 3 is launching early next month",
        "description": "Motorola is gearing up to launch its next mid-range phone in India on April 3. It packs a host of impressive specs for its segment.",
        "url": "https://www.androidcentral.com/phones/motorola-edge-50-pro-launching-on-april-3-2024",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/rHBUZmjMQT4SL5jd7oxRpE-1200-80.jpg",
        "publishedAt": "2024-03-25T15:45:15Z",
        "content": "What you need to know\r\n<ul><li>Motorola Edge 50 Pro is launching in India on April 3.</li><li>The device is listed on the country's Flipkart e-commerce site.</li><li>The listing reveals most of the d… [+2684 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
        "title": "Samsung launches Galaxy F15 with an impressive 6000mAh battery for India",
        "description": "Samsung has a new budget smartphone named Galaxy F15 that offers several segment-exclusive features for the Indian market.",
        "url": "https://www.androidcentral.com/phones/samsung-galaxy-f15-announced-for-india",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/W2kxjgtLvzsztzYMbKJRFD-1200-80.jpg",
        "publishedAt": "2024-03-05T18:35:22Z",
        "content": "<ul><li>Samsung introduces Galaxy F15 with notable specs for the Indian market.</li><li>It comes with a 6.5-inch AMOLED display with 90Hz refresh rates.</li><li>The budget device is powered by MediaT… [+2301 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "WATCH: Indian boy calmly traps wandering leopard",
        "description": "The leopard was later tranquillised and rescued by wildlife officials in Maharashtra state.",
        "url": "https://www.bbc.co.uk/news/av/world-asia-india-68499209",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/06EF/production/_132857710_p0hh3p20.jpg",
        "publishedAt": "2024-03-07T09:40:29Z",
        "content": "Imagine you're casually scrolling through your phone and a leopard walks into the room.\r\nThat's what happened to 12-year-old Mohit Ahire from the western Indian state of Maharashtra this week. He was… [+508 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Gouri Sharma",
        "title": "I bought my first house in rural Scotland at 22. Housing is affordable in the countryside and I love it here.",
        "description": "After moving from India to Scotland for university, Simran Kaur decided to settle in the countryside and bought her first house at 22.",
        "url": "https://www.businessinsider.com/how-i-bought-my-first-house-22-2024-3",
        "urlToImage": "https://i.insider.com/65e7116b90413ab8e1d9276c?width=1200&format=jpeg",
        "publishedAt": "2024-03-06T10:00:19Z",
        "content": "Simran Kaur loves countryside living in Kilmarnock, Scotland, where she moved after studying in Glasgow for four years.Peter Mulligan/Getty Images\r\n<ul><li>Simran Kaur is a 22-year-old tax associate … [+5242 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Dan Latu",
        "title": "The Ambani family owns the world's most expensive private residence. Take a look at their Mumbai tower, Antilia, which cost $1 billion to build, has 3 helipads, and contains a 168-car garage.",
        "description": "The Ambanis, the richest family in India and one of the wealthiest in the world, built a 27-story home on Mumbai's Billionaire's Row.",
        "url": "https://www.businessinsider.com/ambani-house-photos-altamount-road-mumbai-spa-parking-amenities-art-2024-3",
        "urlToImage": "https://i.insider.com/65e74c4790413ab8e1d9465a?width=1200&format=jpeg",
        "publishedAt": "2024-03-07T03:57:44Z",
        "content": "The Ambanis' tower, called Antilia, rises above the Mumbai skyline.Ashwin Nagpal\r\n<ul><li>The Ambani family, which just threw a pre-wedding party for son Anant, has built a tower in Mumbai. </li><li>… [+4568 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Alex Bitter",
        "title": "Amazon's Just Walk Out technology relies on hundreds of workers in India watching you shop",
        "description": "Amazon promoted Just Walk Out as AI-powered cashierless technology. But the tech reportedly relied on workers in India for accuracy.",
        "url": "https://www.businessinsider.com/amazons-just-walk-out-actually-1-000-people-in-india-2024-4",
        "urlToImage": "https://i.insider.com/660d66df3f923f7dab040be4?width=1200&format=jpeg",
        "publishedAt": "2024-04-03T17:10:56Z",
        "content": "Amazon is pulling its Just Walk Out cashierless technology from its Amazon Fresh grocery stores.Reuters/HENRY NICHOLLS\r\n<ul><li>Amazon has spent years promoting its AI-based checkout-free Just Walk O… [+2864 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Abby Narishkin,Benjamin Nigh,Dorian Barranco",
        "title": "Why melted bugs on candy and lemons fuel a $167 million industry",
        "description": "Jelly beans, Junior Mints, and lemons are all coated with a shiny resin called shellac. It's made from tiny insects in India, and it's safe to eat.",
        "url": "https://www.businessinsider.com/why-melted-bugs-candy-lemons-are-behind-167-million-industry-2024-3",
        "urlToImage": "https://i.insider.com/65f458773037f8e81750bd04?width=1200&format=jpeg",
        "publishedAt": "2024-03-15T14:48:19Z",
        "content": "Read the original article on Business Insider"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Abby Narishkin,Benjamin Nigh,Dorian Barranco",
        "title": "Why melted bugs on candy and lemons fuel a $267 million industry",
        "description": "Jelly beans, Junior Mints, and lemons are all coated with a shiny resin called shellac. It's made from tiny insects in India, and it's safe to eat.",
        "url": "https://www.businessinsider.com/why-melted-bugs-candy-lemons-are-behind-267-million-industry-2024-3",
        "urlToImage": "https://i.insider.com/65f458773037f8e81750bd04?width=1200&format=jpeg",
        "publishedAt": "2024-03-15T14:29:43Z",
        "content": "Read the original article on Business Insider"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jyoti Mann",
        "title": "I'm a software engineer for Nvidia. Here's how I landed the job — and how much I'm making.",
        "description": "A Nvidia software engineer in India says the technical interviews for the job were \"pretty hard,\" but breaks down how to navigate them.",
        "url": "https://www.businessinsider.com/nvidia-software-engineer-how-landed-job-preparation-culture-interviews-2024-4",
        "urlToImage": "https://i.insider.com/659a6ad16979d7371821152c?width=1200&format=jpeg",
        "publishedAt": "2024-04-02T13:12:42Z",
        "content": "Nvidia's stock price has soared in recent months, making options more valuable.NurPhoto / Getty\r\n<ul><li>A software engineer at Nvidia in India reveals how he got the job, and breaks down his compens… [+4023 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Joshua Zitser,Spriha Srivastava",
        "title": "The extravagant Ambani pre-wedding party was an affront to the millions of Indians in poverty, critics say",
        "description": "The pre-wedding events for Anant Ambani and Radhika Merchant, which featured Rihanna, show a blatant disregard for poverty in India, Indians said.",
        "url": "https://www.businessinsider.com/anant-ambani-pre-wedding-festivities-lack-empathy-india-radhika-merchant-2024-3",
        "urlToImage": "https://i.insider.com/65eb10cace7f1785b2e7b8cc?width=1200&format=jpeg",
        "publishedAt": "2024-03-08T14:09:39Z",
        "content": "Anant Ambani at the pre-wedding festivities and a slum in New Delhi, India, in a composite image.Reuters Connect\r\n<ul><li>The pre-wedding festivities for Anant Ambani and Radhika Merchant cost many m… [+4822 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "msmash",
        "title": "India Cuts Import Taxes on EVs in Boost For Tesla's Entry Plans",
        "description": "India will lower import taxes on certain electric vehicles for companies committing to invest at least $500 million and setting up a local manufacturing facility within three years, a policy shift that could potentially bolster Tesla's plans to enter the Sout…",
        "url": "https://tech.slashdot.org/story/24/03/15/1341218/india-cuts-import-taxes-on-evs-in-boost-for-teslas-entry-plans",
        "urlToImage": "https://a.fsdn.com/sd/topics/transportation_64.png",
        "publishedAt": "2024-03-15T14:40:00Z",
        "content": "Obviously it's good that India is moving towards EVs, but Teslas aren't exactly affordable in the West. What they need are the super cheap Eastern European and Chinese models. Dacia has one coming ou… [+200 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "Why Bell put England before a £30,000 WPL deal",
        "description": "England fast bowler Lauren Bell discusses withdrawing from the Women's Premier League, her ambitions for 2024 and her growing responsibility in Heather Knight's team.",
        "url": "https://www.bbc.co.uk/sport/cricket/68565691",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1730/production/_132963950_gettyimages-1508864769.jpg",
        "publishedAt": "2024-03-20T14:00:41Z",
        "content": "Lauren Bell has become one of the leaders of England's bowling attack in all formats since her debut in 2022\r\nLauren Bell is not even two years into her international career, and yet her trajectory -… [+3774 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Czech Republic's Krystyna Pyszková is crowned Miss World in India",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_21e07a4f-433e-44d0-9b1e-d1a079c7c57d",
        "urlToImage": null,
        "publishedAt": "2024-03-10T03:51:39Z",
        "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
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
        "name": "Android Central"
        },
        "author": "techkritiko@gmail.com (Jay Bonggolto)",
        "title": "The Motorola Edge 50 Pro could make its debut in early April",
        "description": "It seems like the Motorola Edge 50 Pro launch is right around the corner now.",
        "url": "https://www.androidcentral.com/phones/motorola-edge-50-pro-debut-in-early-april",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/WcUy6ZmSfkE36NMqWeU7cK-1200-80.jpg",
        "publishedAt": "2024-03-18T21:32:16Z",
        "content": "What you need to know\r\n<ul><li>Motorola is gearing up to launch its next flagship phone in India soon, specifically the Motorola Edge 50 Pro.</li><li>Although a specific date wasn't mentioned, a tips… [+2973 chars]"
        },
        {
        "source": {
        "id": "wired",
        "name": "Wired"
        },
        "author": "Sabrina Weiss",
        "title": "How to Stay Cool Without Warming the Planet",
        "description": "The race is on to create climate-friendly air-con technology.",
        "url": "https://www.wired.com/story/aircon-climate-co2-emissions/",
        "urlToImage": "https://media.wired.com/photos/65b174a342a7a338235d6c5f/191:100/w_1280,c_limit/GettyImages-1233709080.jpg",
        "publishedAt": "2024-03-20T03:45:09Z",
        "content": "There is an insidious irony to climate change: as it gets hotter, more and more people are cranking up their air conditioners, which in turn contributes to global warming. Air conditioner (AC) sales … [+3114 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Gordon Jackson and James Whitbrook",
        "title": "Steven Moffat Talks Returning to Doctor Who",
        "description": "The Bad Guys will return next year. The First Omen goes retro in its new TV spot. Get a look at Roku’s take on The Spiderwick Chronicles. Plus, the X-Men go to hell in a look at today’s episode of X-Men ‘97, and what’s to come on Resident Alien. To me, my spo…",
        "url": "https://gizmodo.com/steven-moffat-doctor-who-return-bbc-russell-t-davies-1851367228",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/357921e098f35bca3d2e5de498410ba8.png",
        "publishedAt": "2024-03-27T14:15:00Z",
        "content": "The Bad Guys will return next year. The First Omen goes retro in its new TV spot. Get a look at Rokus take on The Spiderwick Chronicles. Plus, the X-Men go to hell in a look at todays episode of X-Me… [+1943 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "WhatsApp, Instagram and Facebook apps hit by outage",
        "description": "Users on Meta platforms suffer access problems as thousands report outages on Wednesday evening.",
        "url": "https://www.bbc.co.uk/news/business-68727854",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10008/production/_132844556_gettyimages-1841474590.jpg",
        "publishedAt": "2024-04-03T21:11:02Z",
        "content": "WhatsApp, Facebook and Instagram have all gone down briefly as part of a major outage at parent company Meta. \r\nThousands of app users reported issues accessing the three sites late on Wednesday, wit… [+1590 chars]"
        },
        {
        "source": {
        "id": "time",
        "name": "Time"
        },
        "author": "Billy Perrigo",
        "title": "Exclusive: YouTube Approved Ads Promoting Disinformation on India’s Election",
        "description": "YouTube approved dozens of ads promoting voter suppression and incitement to violence ahead of the upcoming election in India.",
        "url": "https://time.com/6961504/youtube-ads-disinformation-india-election/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/03/indian-election-youtube-disinformation.jpg?quality=85",
        "publishedAt": "2024-04-02T10:30:00Z",
        "content": "YouTube approved dozens of ads promoting voter suppression and incitement to violence ahead of the upcoming election in India, according to a new investigation by the rights groups Global Witness and… [+8560 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Aditya Kalra, David Lawder and Shivangi  Acharya",
        "title": "Exclusive-India 'screwed up': How the U.S. lobbied New Delhi to reverse laptop rules",
        "description": "India reversed a laptop licensing policy after behind-the-scenes lobbying by U.S. officials, who however remain concerned about New Delhi's compliance with...",
        "url": "https://ca.news.yahoo.com/exclusive-india-screwed-u-lobbied-050825336.html",
        "urlToImage": "https://media.zenfs.com/en/reuters.com/4776fcf0ea42ded284d368b2c48c5c2f",
        "publishedAt": "2024-03-21T05:08:25Z",
        "content": "By Aditya Kalra, David Lawder and Shivangi Acharya\r\nNEW DELHI/WASHINGTON (Reuters) - India reversed a laptop licensing policy after behind-the-scenes lobbying by U.S. officials, who however remain co… [+5606 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "Only Seven Countries Meet WHO Air Quality Standard, Research Finds",
        "description": "An anonymous reader quotes a report from The Guardian: Only seven countries are meeting an international air quality standard, with deadly air pollution worsening in places due to a rebound in economic activity and the toxic impact of wildfire smoke, a new re…",
        "url": "https://news.slashdot.org/story/24/03/19/2145211/only-seven-countries-meet-who-air-quality-standard-research-finds",
        "urlToImage": "https://a.fsdn.com/sd/topics/earth_64.png",
        "publishedAt": "2024-03-20T03:33:00Z",
        "content": "Only seven countries are meeting an international air quality standard, with deadly air pollution worsening in places due to a rebound in economic activity and the toxic impact of wildfire smoke, a n… [+2445 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Lauren Edmonds",
        "title": "You probably missed one of the biggest shows of wealth at the Ambanis' pre-wedding celebration, and it had nothing to do with the bride and groom",
        "description": "Nita Ambani casually wore an enormous emerald necklace and a 52.58-carat diamond ring dubbed the Mirror of Paradise.",
        "url": "https://www.businessinsider.com/nita-ambani-jewelry-at-anant-ambani-pre-wedding-celebration-2024-3",
        "urlToImage": "https://i.insider.com/65ea30de90413ab8e1da8e93?width=1200&format=jpeg",
        "publishedAt": "2024-03-07T22:43:19Z",
        "content": "Mukesh Ambani, the chairman of Reliance Industries, his wife Nita Ambani, and their son Anant Ambani.Reliance Industries/Handout via REUTERS\r\n<ul><li>The Ambani family hosted a lavish pre-wedding cel… [+2927 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "India rescues citizens caught in Cambodia scams",
        "description": "India said it has saved and repatriated 75 citizens in the past three months, and 250 in total so far.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-68705913",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4F8D/production/_133056302_hacking.jpg",
        "publishedAt": "2024-04-01T07:05:05Z",
        "content": "The Indian government has said that it has rescued 250 citizens in Cambodia who were forced to run online scams.\r\nSeventy-five people were rescued in the past three months while the timeline for the … [+2131 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "India opposition MP arrested over corruption claims",
        "description": "His party has accused the ruling Bharatiya Janata Party of playing \"dirty politics\" in the case.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-68630659",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/152E6/production/_132985768_mediaitem132985764.jpg",
        "publishedAt": "2024-03-21T17:58:44Z",
        "content": "Prominent opposition politician and Delhi chief minister Arvind Kejriwal has been arrested by India's financial crime agency, his party said.\r\nThe arrest is in connection with corruption allegations … [+1928 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hackaday"
        },
        "author": "Dave Rowntree",
        "title": "2024 Home Sweet Home Automation: [HEX]POD – Climate Tracker and Digital Nose",
        "description": "[eBender] was travelling India with friends, when one got sick. Unable to find a thermometer anywhere during COVID, they finally ended up in a hospital. After being evacuated back home, [eBender] h…",
        "url": "https://hackaday.com/2024/03/27/2024-home-sweet-home-automation-hexpod-climate-tracker-and-digital-nose/",
        "urlToImage": "https://hackaday.com/wp-content/uploads/2024/03/3962391701725633826-featured.png",
        "publishedAt": "2024-03-27T18:30:41Z",
        "content": "[eBender] was travelling India with friends, when one got sick. Unable to find a thermometer anywhere during COVID, they finally ended up in a hospital. After being evacuated back home, [eBender] hat… [+1784 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": null,
        "title": "Anderson becomes first pace bowler to 700 Test wickets",
        "description": "England's James Anderson has become the first fast bowler to take 700 Test wickets after dismissing India's Kuldeep Yadav in the fifth Test.",
        "url": "https://www.bbc.co.uk/sport/cricket/68217903",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/D037/production/_132630335_james_anderson_700story.jpg",
        "publishedAt": "2024-03-09T04:16:50Z",
        "content": "England's James Anderson has become the first pace bowler to take 700 Test wickets. \r\nThe 41-year-old reached the landmark by dismissing India's Kuldeep Yadav on day three of the fifth Test in Dharam… [+2119 chars]"
        },
        {
        "source": {
        "id": "time",
        "name": "Time"
        },
        "author": "Associated Press",
        "title": "India Announces 6-Week General Elections Starting April 19, Modi’s BJP Tops Surveys",
        "description": "India on Saturday announced its 6-week-long general elections will start on April 19. Voting will stretch over seven phases.",
        "url": "https://time.com/6957662/india-general-elections-april-modi-bjp/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/03/AP24076374340595.jpg?quality=85",
        "publishedAt": "2024-03-16T14:38:49Z",
        "content": "NEW DELHI India on Saturday announced its 6-week-long general elections will start on April 19, with most surveys predicting a victory for Prime Minister Narendra Modi and his Hindu nationalist Bhara… [+2670 chars]"
        },
        {
        "source": {
        "id": "time",
        "name": "Time"
        },
        "author": "Astha Rajvanshi",
        "title": "Why India’s Political Opposition is So Weak",
        "description": "More than two dozen opposition parties in India have banded together—but the fractured alliance can't seem to pose a real challenge.",
        "url": "https://time.com/6962684/india-election-2024-opposition-party/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/04/AP24091453637920.jpg?quality=85",
        "publishedAt": "2024-04-02T18:27:39Z",
        "content": "When more than two dozen opposition parties in India announced they would band together as the Indian National Developmental Inclusive Alliance (or INDIA) last June, critics of the ruling Bharatiya J… [+8297 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "tips@androidcentral.com (Nickolas Diaz)",
        "title": "Nothing Phone 3 rumored to feature Qualcomm's latest flagship variant",
        "description": "A rumor suggested the Nothing Phone 3 could see a flagship Qualcomm chip variant and a possible price hike.",
        "url": "https://www.androidcentral.com/phones/nothing-phone-3-qualcomm-chip-price-rumors",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/F7utDYfLZ9XYPhH5hbyT3A-1200-80.jpg",
        "publishedAt": "2024-04-01T19:13:51Z",
        "content": "What you need to know\r\n<ul><li>Early rumors suggest Nothing's Phone 3 will feature Qualcomm's toned-down Snapdragon 8s Gen 3 SoC.</li><li>The chip launched in March and clocked at 3.0GHz with a singu… [+2593 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
        "title": "The OnePlus Ace 3V design revealed ahead of this week's launch",
        "description": "OnePlus is gearing up for two smartphone launches — the Ace 3V this week and the OnePlus Nord CE 4 next month.",
        "url": "https://www.androidcentral.com/phones/oneplus-ace-3v-design-revealed",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/PWoqrxYvvdFxHWucP4NEeW-1200-80.jpg",
        "publishedAt": "2024-03-19T03:26:46Z",
        "content": "What you need to know\r\n<ul><li>OnePlus is launching a new mid-range phone in China this week.</li><li>It is dubbed the OnePlus Ace 3V and is likely to be rebranded as the OnePlus Nord 4 outside of Ch… [+1987 chars]"
        },
        {
        "source": {
        "id": "wired",
        "name": "Wired"
        },
        "author": "Vittoria Elliott",
        "title": "The House Passed the Bill That Could Ban TikTok—and It Wasn't Close",
        "description": "If the Senate passes the bill, President Joe Biden has said he would sign it.",
        "url": "https://www.wired.com/story/congress-tiktok-ban/",
        "urlToImage": "https://media.wired.com/photos/65f1c5556d1c818fc4449530/191:100/w_1280,c_limit/House-Bans-TikTok-GettyImages-2081195969.jpg",
        "publishedAt": "2024-03-13T15:34:04Z",
        "content": "This morning, the US House of Representatives voted to essentially ban TikTok, unless Chinese-owned Bytedance divests from the app entirely. If passed in the Senate, TikTok would have about 6 months … [+4094 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Design-milk.com"
        },
        "author": "Vy Yang",
        "title": "Christopher Farr Merges Illustration With Textiles for The Elder Statesman",
        "description": "Designed in collaboration with Christopher Farr, The Elder Statesman founder, Greg Chait, reimagines his grandmother's illustrations in a new rug collection.",
        "url": "https://design-milk.com/christopher-farr-merges-illustration-with-textiles-for-the-elder-statesman/",
        "urlToImage": "https://design-milk.com/images/2024/03/the-elder-statesman-christopher-farr-rugs-7.jpg",
        "publishedAt": "2024-03-11T14:00:50Z",
        "content": "During this years Frieze LA design festival, Los Angeles-based luxury lifestyle brand The Elder Statesman launched a new collection that once again pays homage to founder Greg Chaits grandmother, The… [+1669 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "US urges fair legal process for India opposition leader",
        "description": "Washington reiterated its remark hours after Delhi summoned a US diplomat over similar comments.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-68681612",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/79C4/production/_133027113_gettyimages-2031349169.jpg",
        "publishedAt": "2024-03-28T06:13:46Z",
        "content": "The US has reiterated that it encourages a \"transparent\" legal process in a corruption case against Delhi Chief Minister Arvind Kejriwal.\r\nState Department spokesperson Mathew Miller said on Wednesda… [+3035 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Top India airline to cut flights amid crew protests",
        "description": "Vistara has seen massive disruption in its services amid reports of pilots going on mass sick leave.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-68729578",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13463/production/_133074987_gettyimages-1259154664-594x594.jpg",
        "publishedAt": "2024-04-04T06:51:36Z",
        "content": "A major Indian airline is scaling back operations this month amid widespread flight cancellations and delays due to unavailability of its pilots.\r\nSince 31 March, Vistara has seen nearly 150 flight c… [+2107 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Alejandro Alcolea",
        "title": "En plena calma tensa en Asia, un viejo enemigo de China acaba de sacar a pasear sus nuevos portaaviones: India",
        "description": "El océano Índico tiene una importancia vital para los países colindantes, pero para India y China, el control de estas aguas se ha convertido en un asunto de máxima importancia. Y no es para menos, ya que es clave para afianzar la estrategia de control geopol…",
        "url": "https://www.xataka.com/transporte/plena-calma-tensa-asia-viejo-enemigo-china-acaba-sacar-a-pasear-sus-nuevos-portaaviones-india",
        "urlToImage": "https://i.blogs.es/df518e/captura-de-pantalla-2024-03-13-a-las-15.23.03/840_560.jpeg",
        "publishedAt": "2024-03-17T14:00:46Z",
        "content": "El océano Índico tiene una importancia vital para los países colindantes, pero para India y China, el control de estas aguas se ha convertido en un asunto de máxima importancia. Y no es para menos, y… [+4407 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Ricardo Aguilar",
        "title": "Amazon quería tiendas 100% automatizadas. Acabó con 1.000 trabajadores en la India vigilando cada compra",
        "description": "En 2016 Amazon lanzaba 'Just Walk Out', su plan para eliminar los cajeros de las tiendas. El plan era fácil de explicar, pero difícil de ejecutar: tiendas repletas de sensores y cámaras para detectar qué compraba cada cliente y evitar así el personal humano. …",
        "url": "https://www.xataka.com/empresas-y-economia/amazon-queria-tiendas-100-automatizadas-acabo-1-000-trabajadores-india-vigilando-cada-compra",
        "urlToImage": "https://i.blogs.es/e58ec4/comprar/840_560.jpeg",
        "publishedAt": "2024-04-03T08:30:48Z",
        "content": "En 2016 Amazon lanzaba 'Just Walk Out', su plan para eliminar los cajeros de las tiendas. El plan era fácil de explicar, pero difícil de ejecutar: tiendas repletas de sensores y cámaras para detectar… [+3701 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NPR"
        },
        "author": "Omkar Khandekar",
        "title": "Indian judge says billion-dollar ayurvedic company has taken the public 'for a ride'",
        "description": "The country's supreme court has temporarily banned Patanjali, a leading maker of ayurvedic products with ties to the prime minister, from advertising certain items due to a history of false claims.",
        "url": "https://www.npr.org/sections/goatsandsoda/2024/03/14/1236533011/ayurvedic-india-banned-advertising-some-products",
        "urlToImage": "https://media.npr.org/assets/img/2024/03/12/01_2023-06-16t100516z_1966443998_mt1asnews20230616023l_rtrmadp_3_ani_wide-f011a553c8b56fa42ef8839564913033729478a5-s1400-c100.jpg",
        "publishedAt": "2024-03-14T11:05:12Z",
        "content": "Yoga guru Baba Ramdev, the brand ambassador for the billion dollar company Patanjali Ayurved, addresses the media during a launch of \"premium products\" in New Delhi.\r\nRahul Singh/ANI via Reuters Conn… [+7712 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "Public Trust In AI Is Sinking Across the Board",
        "description": "Trust in AI technology and the companies that develop it is dropping, in both the U.S. and around the world, according to new data from Edelman shared first with Axios. Axios reports: Globally, trust in AI companies has dropped to 53%, down from 61% five year…",
        "url": "https://tech.slashdot.org/story/24/03/06/2116226/public-trust-in-ai-is-sinking-across-the-board",
        "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
        "publishedAt": "2024-03-06T23:40:00Z",
        "content": "Globally, trust in AI companies has dropped to 53%, down from 61% five years ago. In the U.S., trust has dropped 15 percentage points (from 50% to 35%) over the same period. Trust in AI is low across… [+722 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "China is on pace to buy a record amount of Russian oil this month",
        "description": "China is expected to import 1.7 million barrels of Russian crude a day, taking over Indian demand, Kpler data cited by Bloomberg shows.",
        "url": "https://markets.businessinsider.com/news/commodities/china-russia-economy-record-trade-crude-oil-india-demand-sanctions-2024-3",
        "urlToImage": "https://i.insider.com/6549429936d588dc55cba5e9?width=1200&format=jpeg",
        "publishedAt": "2024-03-18T17:30:06Z",
        "content": "Crude oil tankerGetty Images\r\n<ul>\n<li>China's intake of Russian crude is set to reach a record this month, Kpler data cited by Bloomberg shows.</li>\n<li>Imports of Sokol crude are on course to jump … [+2415 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Joshua Zitser",
        "title": "Google says it will restrict Gemini's ability to answer election-related questions 'out of an abundance of caution'",
        "description": "Google will restrict AI chatbot Gemini from responding to election-related queries, weeks after pulling its ability to generate images of people.",
        "url": "https://www.businessinsider.com/google-restricts-gemini-ai-chatbot-answering-election-questions-trump-biden-2024-3",
        "urlToImage": "https://i.insider.com/65f1861a90413ab8e1dc01ef?width=1200&format=jpeg",
        "publishedAt": "2024-03-13T11:25:00Z",
        "content": "In this photo illustration, the logo of 'Google' is displayed on a phone screen in front of a 'Google Gemini' logo.AnadoluBetul Abali/Getty Images\r\n<ul><li>Google will restrict its AI chatbot Gemini … [+2669 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NPR"
        },
        "author": "Kamala Thiagarajan",
        "title": "Q&A: Yashica Dutt on her life as part of an oppressed caste in 'Coming Out As Dalit'",
        "description": "When Dutt was a kid, her family pretended to be rich so no one would suspect their caste identity. In her memoir, she talks of her struggles — and her decision to publicly declare she is a Dalit.",
        "url": "https://www.npr.org/sections/goatsandsoda/2024/03/10/1237079092/q-a-yashica-dutt-on-her-life-as-part-of-an-oppressed-caste-in-coming-out-as-dali",
        "urlToImage": "https://media.npr.org/assets/img/2024/03/08/01_comingoutasdalit_wide-895b0b9b0fd08fe9790e4b32370b877a59832e64-s1400-c100.jpg",
        "publishedAt": "2024-03-10T12:43:43Z",
        "content": "As a young girl growing up in Ajmer, a small town in the Western Indian state of Rajasthan, journalist and author, Yashica Dutt, 38, says that she was painfully aware of the many sacrifices her mothe… [+7709 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "The maverick leader who took on India's Modi",
        "description": "Mr Kejriwal's arrest contrasts his anti-corruption campaign that took India by storm in 2011.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-68271366",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10CB4/production/_132988786_mediaitem132988785.jpg",
        "publishedAt": "2024-03-22T06:36:02Z",
        "content": "When Delhi Chief Minister Arvind Kejriwal was arrested on Thursday on claims of corruption, it came as no surprise.\r\nMonths earlier, in November, Mr Kejriwal's Aam Aadmi Party (AAP) had run a door to… [+5305 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tattle.co.in"
        },
        "author": null,
        "title": "Securing Your Codebase",
        "description": "We build tools and datasets to understand and respond to misinformation in India.",
        "url": "https://tattle.co.in/blog/2024-04-03-securing-feluda-pt1/",
        "urlToImage": "https://tattle.co.in/static/bb58f653a64a4d4f4795ba34be781f0b/social-card-blog.png",
        "publishedAt": "2024-04-04T05:36:46Z",
        "content": "Published on Tue Apr 02 2024Aurora - Feluda\r\nWe have recently made numerous improvements to Feluda, following a security-first approach to allow long-term maintenance and active contributions. These … [+11049 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Joe Rossignol",
        "title": "Lower-Cost AirPods Rumored to Launch Later This Year",
        "description": "Apple plans to release lower-cost AirPods later this year, according to Jeff Pu, an analyst who covers companies within Apple's supply chain.\n\n\n\n\n\nIn a research today with investment firm Haitong International Securities, Pu said the lower-cost AirPods will b…",
        "url": "https://www.macrumors.com/2024/04/01/lower-cost-airpods-late-2024-rumor/",
        "urlToImage": "https://images.macrumors.com/t/qEYhkC0wur0lTbK87eogXgkEW-Y=/2500x/article-new/2023/04/airpods-3-orange.jpg",
        "publishedAt": "2024-04-02T00:21:08Z",
        "content": "Apple plans to release lower-cost AirPods later this year, according to Jeff Pu, an analyst who covers companies within Apple's supply chain.\r\nIn a research today with investment firm Haitong Interna… [+1103 chars]"
        },
        {
        "source": {
        "id": "time",
        "name": "Time"
        },
        "author": "Sunita Viswanath",
        "title": "The Hindu Leaders Fighting Hindu Nationalism",
        "description": "The religion has a long and rich history of inclusion that must be reclaimed to fight India's ruling BJP.",
        "url": "https://time.com/6958798/hindu-leaders-fighting-hindu-supremacism/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/03/hindu-nationalism-modi.jpg?quality=85",
        "publishedAt": "2024-03-21T08:30:00Z",
        "content": "As India hurtles toward the worlds largestelections next month, I mourn for the democracy of my homeland that once was. The press is increasingly muzzled, dissent is met with incarceration, and a pal… [+4719 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "James Jones",
        "title": "Motorola Edge 50 Pro: release date, specs, price and everything we know",
        "description": "Motorola is preparing to announce its latest flagship phone, with the Edge 50 Pro due to be revealed to the… Continue reading Motorola Edge 50 Pro: release date, specs, price and everything we know\nThe post Motorola Edge 50 Pro: release date, specs, price and…",
        "url": "https://readwrite.com/motorola-edge-50-pro-release-date-specs-price-and-everything-we-know/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/s2D6x44yWdhzwp9K3E6KVP-650-80.jpg.webp",
        "publishedAt": "2024-04-02T10:13:37Z",
        "content": "Motorola is preparing to announce its latest flagship phone, with the Edge 50 Pro due to be revealed to the public in the first week of April 2024.\r\nIt is widely expected that improved AI features wi… [+5295 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Graeme Hanna",
        "title": "AI skills acting as catalyst for higher salaries",
        "description": "A survey has found employees are willing to pay 44% more for workers skilled in artificial intelligence (AI) for the… Continue reading AI skills acting as catalyst for higher salaries\nThe post AI skills acting as catalyst for higher salaries appeared first on…",
        "url": "https://readwrite.com/ai-skills-acting-as-catalyst-for-higher-salaries/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/tupZlMx2RDCoVEFwpBuj0Q.png",
        "publishedAt": "2024-03-08T17:56:03Z",
        "content": "A survey has found employees are willing to pay 44% more for workers skilled in artificial intelligence (AI) for the IT sector and 41% more for staff working in research and development.\r\nThe study w… [+2189 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Delhi world's 'most polluted' capital city: report",
        "description": "India, of which Delhi is the capital, was also ranked as the third-most polluted country in the world.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-68613502",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1236F/production/_132970647_gettyimages-1855948107.jpg",
        "publishedAt": "2024-03-20T09:35:11Z",
        "content": "Delhi was the most polluted capital city in the world in 2023, a Swiss-based air-quality monitoring group has found.\r\nIndia, of which Delhi is the capital, was also ranked as the world's third-most p… [+2023 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Extreme heat can double stillbirth risk - study",
        "description": "Women in India are found to be twice as likely to lose babies if they are working in hot conditions.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-68575943",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8D7F/production/_132932263_2-sumathydownthebarrel.jpg",
        "publishedAt": "2024-03-21T00:16:53Z",
        "content": "Working in extreme heat can double the risk of stillbirth and miscarriage for pregnant women, according to new research from India. \r\nThe study found that the risks to mothers-to-be are significantly… [+9928 chars]"
        },
        {
        "source": {
        "id": "time",
        "name": "Time"
        },
        "author": "Astha Rajvanshi",
        "title": "Why India’s Next Election Will Last 44 Days",
        "description": "Nearly 970 million Indians could head to the polls between April 19 and June 1, with results expected June 4. Here's why it takes so long.",
        "url": "https://time.com/6958093/india-elections-2024-phases-long/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/03/AP24078276669050.jpg?quality=85",
        "publishedAt": "2024-03-18T17:59:13Z",
        "content": "India, the worlds most populous democracy, is set to hold its next general election over a seven-phase period that will last 44 days. On March 16, the Indian Election Commission announced that Indian… [+4687 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Gabriel Erard",
        "title": "China usará IA para interferir en las elecciones de EE. UU. y otros países, advierte Microsoft",
        "description": "China planea usar inteligencia artificial (IA) para interferir en las elecciones de Estados Unidos, India y Corea del Sur, advirtió Microsoft. En un nuevo informe elaborado por su Centro de Análisis de Amenazas, los de Redmond alertaron por el incremento de l…",
        "url": "http://hipertextual.com/2024/04/china-ia-interferir-elecciones-estados-unidos",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/04/china-regula-ia-generativa-scaled.jpg",
        "publishedAt": "2024-04-05T13:24:30Z",
        "content": "China planea usar inteligencia artificial (IA) para interferir en las elecciones de Estados Unidos, India y Corea del Sur, advirtió Microsoft. En un nuevo informe elaborado por su Centro de Análisis … [+3642 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Carlos Prego",
        "title": "Recorrer 1.800 kilómetros en un tren bala bajo el mar: la alucinante propuesta del túnel submarino Emiratos-India",
        "description": "Cuando de megaestructuras se trata a Emiratos Árabes Unidos no le tiembla el pulso. Ahí están para demostrarlo el Burj Khalifa, el mayor rascacielos del planeta, o proyectos como el resort en forma de Luna de Dubái u One Za´abeel, dotado del mayor edificio en…",
        "url": "https://www.xataka.com/ingenieria-y-megaconstrucciones/recorrer-1-800-kilometros-en-un-tren-bala-bajo-el-mar-la-alucinante-propuesta-del-tunel-submarino-emiratos-india",
        "urlToImage": "https://i.blogs.es/8f5e5e/tunel3/840_560.jpeg",
        "publishedAt": "2024-03-12T18:15:22Z",
        "content": "Cuando de megaestructuras se trata a Emiratos Árabes Unidos no le tiembla el pulso. Ahí están para demostrarlo el Burj Khalifa, el mayor rascacielos del planeta, o proyectos como el resort en forma d… [+5012 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "msmash",
        "title": "Only 57 Companies Produced 80% of Global Carbon Dioxide",
        "description": "Last year was the hottest on record and the Earth is headed towards a global warming of 2.7 degrees, yet top fossil fuel and cement producers show a disregard for climate change and actively make things worse. From a report: A new Carbon Majors Database repor…",
        "url": "https://news.slashdot.org/story/24/04/04/141214/only-57-companies-produced-80-of-global-carbon-dioxide",
        "urlToImage": "https://a.fsdn.com/sd/topics/earth_64.png",
        "publishedAt": "2024-04-04T14:01:00Z",
        "content": "A new Carbon Majors Database report found that just 57 companies were responsible for 80 percent of the global carbon dioxide emissions between 2016 and 2022. Thirty-eight percent of total emissions … [+1071 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Marquez",
        "title": "Esta ciudad india tiene un enorme problema de tráfico. Y cree tener la clave para abordarlo: inteligencia artificial",
        "description": "Bangalore supo ser un auténtico paraíso natural, pero con el paso del tiempo acabó convirtiéndose en un polo tecnológico calificado por muchos como “el Silicon Valley de la India”. En esta metrópoli destacan los edificios enormes, las mansiones de los millona…",
        "url": "https://www.xataka.com/robotica-e-ia/esta-ciudad-india-tiene-enorme-problema-trafico-cree-tener-clave-para-abordarlo-inteligencia-artificial",
        "urlToImage": "https://i.blogs.es/2830c5/india-trafico-portada/840_560.jpeg",
        "publishedAt": "2024-03-26T23:48:28Z",
        "content": "Bangalore supo ser un auténtico paraíso natural, pero con el paso del tiempo acabó convirtiéndose en un polo tecnológico calificado por muchos como el Silicon Valley de la India. En esta metrópoli de… [+3117 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Charissa Cheong",
        "title": "We moved to Finland and aren't sure it's the 'happiest country in the world' — but we have no regrets",
        "description": "Finland isn't always 'the happiest country in the world' for expats, an immigrant couple says. But it's still a great place to live and raise kids.",
        "url": "https://www.businessinsider.com/finland-happiest-country-in-the-world-immigrants-2024-3",
        "urlToImage": "https://i.insider.com/65e85ff290413ab8e1d99c87?width=1200&format=jpeg",
        "publishedAt": "2024-03-07T10:16:07Z",
        "content": "Kristaps Kovalonoks and Megha Goswami met in Finland in 2019 and got married in August 2023.Courtesy of Barbara Kaucher.\r\n<ul><li>Kristaps Kovalonoks and Megha Goswami met in Finland after they both … [+5759 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (William Gallagher)",
        "title": "Apple won't unlock India Prime Minister's election opponent's iPhone",
        "description": "India's Enforcement Directorate has jailed Delhi's Chief Minister Arvind Kejriwal ahead of elections, and wants proof of alleged bribery it says is locked in his iPhone.Indian election rival Arvind Kejriwal has refused to unlock his iPhone after his arrestKej…",
        "url": "https://appleinsider.com/articles/24/04/01/apple-wont-unlock-india-prime-ministers-election-opponents-iphone",
        "urlToImage": "https://photos5.appleinsider.com/gallery/59153-120741-000-lede-passcode-xl.jpg",
        "publishedAt": "2024-04-01T11:03:06Z",
        "content": "Indian election rival Arvind Kejriwal has refused to unlock his iPhone after his arrest\r\nIndia's Enforcement Directorate has jailed Delhi's Chief Minister Arvind Kejriwal ahead of elections, and want… [+2031 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Rubén Chicharro",
        "title": "Los Realme 12 Pro y 12 Pro+ llegan a España con una oferta de lanzamiento muy atractiva",
        "description": "Después de su lanzamiento en la India, la compañía china ha anunciado globalmente los Realme 12 Pro y 12 Pro+, que llegan para intentar hacerse un hueco en la gama media apostándolo todo en el diseño y la pantalla con un precio de salida de 399 euros. Realme …",
        "url": "http://hipertextual.com/2024/03/los-realme-12-pro-y-12-pro-llegan-a-espana-con-un-atractivo-descuento",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/01/realme-12-pro-001.jpg",
        "publishedAt": "2024-03-14T11:00:15Z",
        "content": "Después de su lanzamiento en la India, la compañía china ha anunciado globalmente los Realme 12 Pro y 12 Pro+, que llegan para intentar hacerse un hueco en la gama media apostándolo todo en el diseño… [+2704 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Asteriskmag.com"
        },
        "author": null,
        "title": "The Ruin of Mumbai–Asterisk",
        "description": "Mumbai’s land use regulations are designed to keep population density low. Instead, they force Mumbaikars into slums, while all of India pays the price.",
        "url": "https://asteriskmag.com/issues/05/the-ruin-of-mumbai",
        "urlToImage": "https://asteriskmag.com/media/pages/issues/05/the-ruin-of-mumbai/ba7c8bbae3-1709578900/screenshot-2024-03-04-at-11-01-28am-1200x630-crop.png",
        "publishedAt": "2024-03-08T10:56:30Z",
        "content": "A few years ago, following a peculiar series of events involving a family friend and an international political incident, I found myself living in a two-room apartment in Mumbai at a rate steeply bel… [+17529 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "nandika.iyerravi@futurenet.com (Nandika Ravi)",
        "title": "Ten years later, OnePlus is still trying to find its footing in the US",
        "description": "A look into One Plus' strategy in the U.S. and what the brand's future looks like.",
        "url": "https://www.androidcentral.com/phones/oneplus-north-american-strategy-ten-years-later",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/2KjH7Z9nyS6grAqUerD2fD-1200-80.jpg",
        "publishedAt": "2024-04-01T17:05:22Z",
        "content": "OnePlus is a major player in the Indian smartphone market, offering a wide range of devices, from flagships to midrange phones like the new Nord CE 4. However, the picture across North America looks … [+7281 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Reuters",
        "title": "In big win for Tesla, India to lower EV import tax if $500 million invested",
        "description": "Filed under:\n Green,Tesla,Electric\n Continue reading In big win for Tesla, India to lower EV import tax if $500 million invested\nIn big win for Tesla, India to lower EV import tax if $500 million invested originally appeared on Autoblog on Sat, 16 Mar 2024 07…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_4e8c80c2-7d11-42f6-b0aa-5c8c5d7c3959",
        "urlToImage": null,
        "publishedAt": "2024-03-16T11:00:00Z",
        "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Pratima Harigunani",
        "title": "Missing Link: India's Software Brain Drain Turns the Tide to Talent Shortage",
        "description": "From India’s own digital rise to new visa dynamics to a huge demand for talent by Big Tech – there are many levers pulling IT professionals back to India.",
        "url": "https://www.heise.de/hintergrund/Missing-Link-India-s-Software-Brain-Drain-Turns-the-Tide-to-Talent-Shortage-9639695.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/8/3/5/7/shutterstock_2288178675-0d8fbb8d299a1a9f.jpg",
        "publishedAt": "2024-03-17T07:04:00Z",
        "content": "Inhaltsverzeichnis\r\nNote: Dieser Artikel ist auch auf Deutsch verfügbar.\r\nIf you drive to Hyderabad, once a nondescript city in India only popular for its palaces and biryani, now an IT metropolis, a… [+9627 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Pratima Harigunani",
        "title": "Missing Link: India's Software Brain Drain Turns the Tide to Talent Shortage",
        "description": "From India’s own digital rise to new visa dynamics to a huge demand for talent by Big Tech – there are many levers pulling IT professionals back to India.",
        "url": "https://www.heise.de/hintergrund/Missing-Link-India-s-Software-Brain-Drain-Turns-the-Tide-to-Talent-Shortage-9658730.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/8/6/4/8/shutterstock_2288178675-0d8fbb8d299a1a9f.jpg",
        "publishedAt": "2024-03-24T07:05:00Z",
        "content": "Inhaltsverzeichnis\r\nNote: Dieser Artikel ist auch auf Deutsch verfügbar.\r\nIf you drive to Hyderabad, once a nondescript city in India only popular for its palaces and biryani, now an IT metropolis, a… [+9902 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Indian troops to exit Maldives as China gains foothold",
        "description": "Maldives President Mohamed Muizzu, seen as pro-China, had asked Delhi to withdraw troops from his country.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-68498232",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E2DB/production/_132857085_gettyimages-2000245092.jpg",
        "publishedAt": "2024-03-08T01:48:17Z",
        "content": "India is set to pull its first batch of military personnel from the Maldives on Sunday as the island nation moves closer to China.\r\nThe phased withdrawal of about 80 Indian troops must meet a May dea… [+5826 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Marquez",
        "title": "Un millonario indio mandó a construir una mansión en la cima de un rascacielos: es una réplica de la Casa Blanca",
        "description": "Sabemos que las mansiones suelen ser un capricho común entre los millonarios, pero no todos tienen los mismos gustos. El empresario estadounidense Ken Griffin, por ejemplo, no duda en gastar cientos de millones de dólares en construir la casa de sus sueños fr…",
        "url": "https://www.xataka.com/magnet/millonario-indio-mando-a-construir-su-propia-casa-blanca-cima-rascacielos-quizas-que-nunca-pueda-vivir-alli",
        "urlToImage": "https://i.blogs.es/cc536e/vijay-mallya-kingfisher-towers-portada/840_560.jpeg",
        "publishedAt": "2024-03-25T21:31:48Z",
        "content": "Sabemos que las mansiones suelen ser un capricho común entre los millonarios, pero no todos tienen los mismos gustos. El empresario estadounidense Ken Griffin, por ejemplo, no duda en gastar cientos … [+2343 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Police"
        },
        "author": "Chris Thomas",
        "title": "OnePlus quietly pulls advertised features from the 12 and 12R, upsetting fans",
        "description": "Dual SIM dual active, eSIM support in India, and UFS 4.0 miscues: OnePlus might want to tighten up its feature marketing to keep fans happy",
        "url": "https://www.androidpolice.com/oneplus-sends-wrong-signals-repeated-spec-sheet-mistakes/",
        "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/08/oneplus-10t-logo-macro-2-B.jpg",
        "publishedAt": "2024-03-29T11:00:12Z",
        "content": "When you buy a phone, you expect it to have all the advertised features. Some selling points, like constantly evolving AI toolkits, might take time to implement. Others, like dual SIM card support or… [+6227 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NPR"
        },
        "author": "Lauren Frayer",
        "title": "Ireland's prime minister, Leo Varadkar, has resigned",
        "description": "Leo Varadkar announced he will step down as taoiseach, or prime minister, within weeks as soon as his Fine Gael party chooses a successor.",
        "url": "https://www.npr.org/2024/03/20/1239622769/ireland-prime-minister-leo-varadkar-resigns",
        "urlToImage": "https://media.npr.org/assets/img/2024/03/20/gettyimages-1977311958_wide-8cee9555df0085b05c164ad79cf0806226e0e58f-s1400-c100.jpg",
        "publishedAt": "2024-03-20T13:33:49Z",
        "content": "Prime Minister of Ireland Leo Varadkar arrives to attend a European Union summit on Feb. 1 in Brussels, Belgium.\r\nPier Marco Tacca/Getty Images\r\nLONDON Ireland's prime minister, Leo Varadkar, has ann… [+1499 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Suswati Basu",
        "title": "Here’s a list of countries that have a TikTok ban and why",
        "description": "TikTok has encountered a barrage of bans, and the U.S. is close to joining the list. Discussions of a ban… Continue reading Here’s a list of countries that have a TikTok ban and why\nThe post Here’s a list of countries that have a TikTok ban and why appeared f…",
        "url": "https://readwrite.com/heres-a-list-of-countries-have-a-tiktok-ban-and-why/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/Heres-a-list-of-countries-have-a-TikTok-ban-and-why.png",
        "publishedAt": "2024-04-04T19:01:23Z",
        "content": "TikTok has encountered a barrage of bans, and the U.S. is close to joining the list. Discussions of a ban started last year, gaining attention, especially after a high-profile congressional hearing f… [+11243 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "VentureBeat"
        },
        "author": "Dean Takahashi",
        "title": "Hunch raises $23M for new-age social discovery app",
        "description": "Hunch, a new social discovery app, has raised $23 Million to fuel its global expansion.",
        "url": "https://venturebeat.com/games/hunch-raises-23m-for-new-age-social-discovery-app/",
        "urlToImage": "?w=1200&strip=all",
        "publishedAt": "2024-03-06T16:00:00Z",
        "content": "Are you looking to showcase your brand in front of the gaming industrys top leaders? Learn more about GamesBeat Summit sponsorship opportunities here. \r\nHunch, a new social discovery app, has raised … [+1116 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "tips@androidcentral.com (Nickolas Diaz)",
        "title": "Galaxy Buds 2 Pro update brings 'Auto Switch' and teases more Auracast",
        "description": "Samsung started rolling out a new update for its Galaxy Buds 2 Pro, though it's still missing the promised Galaxy AI features.",
        "url": "https://www.androidcentral.com/accessories/earbuds/galaxy-buds-2-pro-auto-switch-auracast-update",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/sC6mumTPFrXVfkxAoYGKsg-1200-80.jpg",
        "publishedAt": "2024-03-06T19:18:24Z",
        "content": "<ul><li>Samsung's Galaxy Buds 2 Pro is beginning to receive a new update that brings \"Auto Switch\" to the device, capable of working with phones, tablets, and Galaxy Books.</li><li>The update also se… [+2139 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
        "title": "Snapdragon 7 Gen 3 powered OnePlus Nord CE4 gets a launch date of April 1",
        "description": "After seeing Vivo V30 with Snapdragon 7 Gen 3, we might see a second device with the same SoC from OnePlus.",
        "url": "https://www.androidcentral.com/phones/oneplus-nord-ce-4-to-launch-on-april-1-2024",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/uZ2wNCYW3aztae36XTarGB-1200-80.jpg",
        "publishedAt": "2024-03-11T21:01:22Z",
        "content": "<ul><li>OnePlus has a new mid-range smartphone up its sleeve for April 1, 2024.</li><li>Dubbed OnePlus Nord CE4, it will be powered by Snapdragon 7 Gen 3.</li><li>It will be available in two colorway… [+2144 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
        "title": "OnePlus 12R receives a new update with stability improvements and more",
        "description": "After putting an end to the UFS 4.0 controversy, OnePlus is rolling out one of the first OxygenOS 14 updates to the OnePlus 12R.",
        "url": "https://www.androidcentral.com/apps-software/oneplus-12r-first-oxygenos-14-security-update",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/8cuz3GmxjpJBbsD84fkgrS-1200-80.jpg",
        "publishedAt": "2024-03-12T16:08:58Z",
        "content": "<ul><li>The OnePlus 12R is getting an OxygenOS 14.0.0.500 update with a February 2024 security patch.</li><li>It also includes several system-wide improvements and fixes.</li><li>The latest firmware … [+2133 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
        "title": "Nothing Phone 2a gets its first update, boosting performance",
        "description": "After launching the Phone 2a early this month, Nothing has already started rolling out its first update.",
        "url": "https://www.androidcentral.com/apps-software/nothing-phone-2a-gets-its-first-update",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/NQcxEdeKTAsnEjv7Wsr2fK-1200-80.jpg",
        "publishedAt": "2024-03-12T20:31:54Z",
        "content": "<ul><li>Nothing Phone 2a receives its first update after its launch on March 5.</li><li>The update introduces new widgets, cameras, and performance improvements to the company's first budget phone.</… [+2386 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "tips@androidcentral.com (Nickolas Diaz)",
        "title": "Galaxy S24 sales reportedly rise in 'key' markets globally to beat the S23",
        "description": "A new report stated Samsung's Galaxy S24 series has experienced a growth in sales globally.",
        "url": "https://www.androidcentral.com/phones/galaxy-s24-sales-increase-markets-globally-report",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/J8ViYCdxbKzymYykhUsuq9-1200-80.jpg",
        "publishedAt": "2024-03-11T21:32:34Z",
        "content": "<ul><li>A report courtesy of data from Counterpoint Research shows Samsung's Galaxy S24 has experienced a growth in sales in \"key\" regions.</li><li>The series' sales reportedly grew by 14% in the U.S… [+2327 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
        "title": "Motorola Edge 50 Fusion renders leak ahead of anticipated April launch",
        "description": "While we just heard about the Edge 50 Pro launch, a new leak reveals that a new Edge 50 Fusion is launching next to it.",
        "url": "https://www.androidcentral.com/phones/motorola-edge-50-fusion-launch-april-3-2024",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/53T5ZidvFeqd4CMqYNSjQm-1200-80.jpg",
        "publishedAt": "2024-03-25T20:41:16Z",
        "content": "What you need to know\r\n<ul><li>The latest Motorola Edge 50 Fusion renders have now leaked, showing the entirety of the device.</li><li>It will feature at least three colorways and IP68 water resistan… [+2215 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "stevenshaw444@gmail.com (Steven Shaw)",
        "title": "WhatsApp has started blocking screenshots of profile pictures",
        "description": "WhatsApp has started rolling out screenshot blocking for profile pictures on the stable version of the app.",
        "url": "https://www.androidcentral.com/apps-software/whatsapp-has-started-blocking-screenshots-of-profile-pictures",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/C4TGRtjzz5cBSzUAhCrqhc-1200-80.jpg",
        "publishedAt": "2024-03-13T17:24:41Z",
        "content": "<ul><li>Screenshot blocking for profile pictures on WhatsApp is being rolled out.</li><li>The feature hasn’t been officially confirmed by WhatsApp, but it appears on the stable version of the app for… [+2124 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Airlines are roaring back in places you might not expect",
        "description": "The rebound is well under way in young, emerging economies where spending power is on the rise.",
        "url": "https://www.bbc.co.uk/news/business-68573429",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2D2B/production/_133036511_gettyimages-1689521241.jpg",
        "publishedAt": "2024-03-29T00:44:48Z",
        "content": "When India's Tata Group bought the country's national airline, it was welcomed as something of a miracle. \r\nAir India had been mired in debt and under-funded state management for decades. No-one want… [+6473 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Playstation.com"
        },
        "author": "Hector R Fernandez",
        "title": "Revealing 5 India Hero Project games coming to PlayStation",
        "description": "PlayStation has been part of India’s vibrant gaming scene for over two decades. In May 2023, we embarked on an ambitious journey with the India Hero Project. We aimed to unearth and empower India’s brightest game development talents to share their unique visi…",
        "url": "https://blog.playstation.com/2024/03/05/revealing-5-india-hero-project-games-coming-to-playstation/",
        "urlToImage": "https://blog.playstation.com/tachyon/2024/03/947768ff409c3e430f0649f6a3cf38bdb9216956.jpg",
        "publishedAt": "2024-03-05T15:01:02Z",
        "content": "PlayStation has been part of India’s vibrant gaming scene for over two decades. In May 2023, we embarked on an ambitious journey with the India Hero Project. We aimed to unearth and empower India’s b… [+4698 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Quelian Sanz",
        "title": "Las tiendas de Amazon no son tan inteligentes: funcionan con miles de personas vigilando a través de cámaras",
        "description": "Amazon se está enfrentando a una nueva polémica tras comenzar a eliminar su sistema Just Walk Out de las tiendas Amazon Fresh. La compañía ha confirmado que está dejando de utilizar la tecnología que permitía a los usuarios entrar, coger cualquier producto y …",
        "url": "http://hipertextual.com/2024/04/las-tiendas-de-amazon-no-son-tan-inteligentes-funcionan-con-miles-de-personas-vigilando-a-traves-de-camaras",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/04/a9801f22-0afb-4ae2-977c-f2bd5738bd69_8256x5504-scaled.jpg",
        "publishedAt": "2024-04-03T09:51:05Z",
        "content": "Amazon se está enfrentando a una nueva polémica tras comenzar a eliminar su sistema Just Walk Out de las tiendas Amazon Fresh. La compañía ha confirmado que está dejando de utilizar la tecnología que… [+2818 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Theregister.com"
        },
        "author": "Laura Dobberstein",
        "title": "Vigorous US lobbying reportedly reversed India PC import license scheme",
        "description": "Washington was most displeased and New Delhi knew it made a mistake\nIndia was subjected to intense US lobbying after suddenly imposing a requirement that computer importers obtain a license, according to a news report on Thursday.…",
        "url": "https://www.theregister.com/2024/03/22/us_lobbies_india_pc_license/",
        "urlToImage": "https://regmedia.co.uk/2021/02/25/india.jpg",
        "publishedAt": "2024-03-22T05:46:51Z",
        "content": "India was subjected to intense US lobbying after suddenly imposing a requirement that computer importers obtain a license, according to a news report on Thursday.\r\nIndia's regulation was announced in… [+2477 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "India announces steps to implement a citizenship law that excludes Muslims",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_bb03a5dc-5a5c-4ffe-b93a-70c39b9158ef",
        "urlToImage": null,
        "publishedAt": "2024-03-11T15:00:43Z",
        "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Rachael Davis",
        "title": "Google opens new cyberdefense hub in Japan",
        "description": "Google has established its very first Asia-Pacific cyberdefense hub in Tokyo, with rising concern about threats from China and others… Continue reading Google opens new cyberdefense hub in Japan\nThe post Google opens new cyberdefense hub in Japan appeared fir…",
        "url": "https://readwrite.com/google-opens-new-cyberdefense-hub-in-japan/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/iedoCct2StG69N9nyZyhFQ.png",
        "publishedAt": "2024-03-07T12:39:18Z",
        "content": "Google has established its very first Asia-Pacific cyberdefense hub in Tokyo, with rising concern about threats from China and others in the region.\r\nOn Thursday, the US-based company opened a new fa… [+1842 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ReadWrite"
        },
        "author": "Charlotte Colombo",
        "title": "Apple settles lawsuit over CEO China comments",
        "description": "Apple has agreed to pay $490 million to settle a class-action lawsuit. The suit alleges that Tim Cook, Apple’s chief… Continue reading Apple settles lawsuit over CEO China comments\nThe post Apple settles lawsuit over CEO China comments appeared first on ReadW…",
        "url": "https://readwrite.com/apple-settles-lawsuit-over-ceo-china-comments/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/Apple-Settles-lawsuit.jpg",
        "publishedAt": "2024-03-15T18:55:49Z",
        "content": "Apple has agreed to pay $490 million to settle a class-action lawsuit. The suit alleges that Tim Cook, Apples chief executive, defrauded shareholders by hiding the fact that iPhone demand was falling… [+1634 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Openculture.com"
        },
        "author": "Colin Marshall",
        "title": "The Oldest Known Photographs of India (1863–1870)",
        "description": "After about a century of indirect company rule, India became a full-fledged British colony in 1858. The consequences of this political development remain a matter of heated debate today, but one thing is certain: it made India into a natural destination for e…",
        "url": "https://www.openculture.com/2024/03/the-oldest-known-photographs-of-india-1863-1870.html",
        "urlToImage": "https://cdn8.openculture.com/2024/03/25224840/Screenshot-2024-03-25-at-10.47.15%E2%80%AFPM-1-1024x608.png",
        "publishedAt": "2024-03-26T09:00:30Z",
        "content": "After about a cen­tu­ry of indi­rect com­pa­ny rule, India became a full-fledged British colony in 1858. The con­se­quences of this polit­i­cal devel­op­ment remain a mat­ter of heat­ed debate today,… [+3277 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "Why the US Could Be On the Cusp of a Productivity Boom",
        "description": "Neil Irwin reports via Axios: The dearth of productivity growth over the last couple of decades has held back incomes in the U.S. and other rich countries, according to a report out Wednesday from the McKinsey Global Institute, the research arm of the global …",
        "url": "https://news.slashdot.org/story/24/03/27/2315212/why-the-us-could-be-on-the-cusp-of-a-productivity-boom",
        "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
        "publishedAt": "2024-03-28T01:25:00Z",
        "content": "The dearth of productivity growth over the last couple of decades has held back incomes in the U.S. and other rich countries, according to a report out Wednesday from the McKinsey Global Institute, t… [+2347 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Mikhaila Friel",
        "title": "Indian and Nepalese men say they were tricked into fighting for Russia in Ukraine and can't return home",
        "description": "Indian and Nepalese men told The Guardian that they had been pressured into signing military contracts written in Russian.",
        "url": "https://www.businessinsider.com/russia-ukraine-war-indian-nepalese-men-tricked-front-lines-2024-3",
        "urlToImage": "https://i.insider.com/65e9bb6bce7f1785b2e740b5?width=1200&format=jpeg",
        "publishedAt": "2024-03-07T16:18:24Z",
        "content": "Russia's President Vladimir Putin.Artem Geodakyan/POOL/AFP via Getty Images\r\n<ul><li>Indian and Nepalese men are being coerced into fighting for Russia against Ukraine, a report said.</li><li>The men… [+5340 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "China needs Apple even as it tries to push foreign firms out, economist says",
        "description": "China is trying to disinvest itself of firms that could create a national security risk, Shehzad Qazi told CNBC. But Apple is too important to it.",
        "url": "https://www.businessinsider.com/china-apple-iphone-security-risk-semiconductors-foreign-direct-investment-ives-2024-3",
        "urlToImage": "https://i.insider.com/660190763f923f7dab00cc35?width=1200&format=jpeg",
        "publishedAt": "2024-03-25T17:37:10Z",
        "content": "The Chinese national flag is displayed in front of an Apple store in Shanghai on October 9, 2021.HECTOR RETAMAL\r\n<ul>\n<li>China is unlikely to push Apple out of the country, Shehzad Qazi of China Bei… [+2353 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Huileng Tan",
        "title": "Russia has finally admitted Western sanctions are hitting its oil exports",
        "description": "Secondary sanctions are spooking global banks, as some of them turn away from doing business with Russia.",
        "url": "https://www.businessinsider.com/russia-economy-west-secondary-sanctions-hitting-oil-exports-payments-revenue-2024-3",
        "urlToImage": "https://i.insider.com/6600e0991caec1275a68d716?width=1200&format=jpeg",
        "publishedAt": "2024-03-25T09:04:08Z",
        "content": "Russia's President Vladimir Putin.Artem Geodakyan/POOL/AFP via Getty Images\r\n<ul><li>Russia's oil industry is facing challenges due to intensified Western sanctions.</li><li>Secondary sanctions are s… [+2008 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Huileng Tan",
        "title": "Putin wasted no time buttering up China after his election victory",
        "description": "In the wake of sweeping sanctions, Russia's Putin is leaning on China for economic and political support.",
        "url": "https://www.businessinsider.com/russia-economy-putin-praises-china-after-election-victory-taiwan-2024-3",
        "urlToImage": "https://i.insider.com/65f8f1cc4af076d3cf9187f9?width=1200&format=jpeg",
        "publishedAt": "2024-03-19T06:14:21Z",
        "content": "Russian President Vladimir Putin and Chinese leader Xi Jinping in Beijing on October 17, 2023.Sergei Savostyanov/Pool/AFP/Getty Images\r\n<ul><li>Russian President Vladimir Putin praised China and tout… [+2627 chars]"
        }
        ]
        }
        )
})

app.listen(PORT, hostname, backlog)