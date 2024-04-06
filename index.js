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
        "totalResults": 57,
        "articles": [
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Karen Friar",
        "title": "Stock market today: Stocks edge up after jobs report shows more strength - Yahoo Finance",
        "description": "Jobs report Friday finally arrives, bringing a test for stocks that have struggled in the second quarter's early going.",
        "url": "https://finance.yahoo.com/news/live/stock-market-today-stocks-edge-up-after-jobs-report-shows-more-strength-133111514.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/.jarB3zCo_0pVCXxqasPTQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/f813b990-f203-11ee-9ef5-028c2716dca7",
        "publishedAt": "2024-04-05T14:24:03Z",
        "content": "Stocks nudged higher on Friday, headed for a reprieve from losses as jittery investors digested the crucial monthly jobs report and kept one eye on surging oil prices.\r\nThe Dow Jones Industrial Avera… [+8525 chars]"
        },
        {
        "source": {
        "id": "financial-times",
        "name": "Financial Times"
        },
        "author": null,
        "title": "US jobs growth of 303,000 far outstrips expectations - Financial Times",
        "description": "Non-farm payrolls data come as Federal Reserve considers when to cut rates",
        "url": "https://www.ft.com/content/d536f588-a307-4c89-9ae6-1f53686ae347",
        "urlToImage": null,
        "publishedAt": "2024-04-05T13:50:14Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Ashley Capoot",
        "title": "Teladoc CEO departs the company after stock's 95% fall from 2021 highs - CNBC",
        "description": "Teladoc Health on Friday announced the sudden departure of CEO Jason Gorevic",
        "url": "https://www.cnbc.com/2024/04/05/teladoc-ceo-departs-the-company-cfo-to-serve-as-interim-head.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/105898567-1557264335182img_2317r.jpg?v=1557264405&w=1920&h=1080",
        "publishedAt": "2024-04-05T13:02:47Z",
        "content": "Teladoc Health on Friday announced the sudden departure of CEO Jason Gorevic, who is leaving his role as head of the company effective immediately, according to a release.\r\nThe company's board of dir… [+1741 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Fox Business"
        },
        "author": "Greg Norman, Breck Dumas",
        "title": "Apple laying off 614 California workers after scrapping electric car project - Fox Business",
        "description": "Apple has informed California officials that it is laying off 614 workers in the state, months after it reportedly canceled its electric car project.",
        "url": "https://www.foxbusiness.com/economy/apple-laying-off-614-california-workers-after-scrapping-electric-car-project",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/04/0/0/Apple-Store-California.jpg?ve=1&tl=1",
        "publishedAt": "2024-04-05T13:01:00Z",
        "content": "Apple is laying off 614 workers in California following reports that emerged earlier this year that the tech giant is abandoning its effort to build an electric car. \r\nA state filing from Apple shows… [+2353 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Yongchang Chin and Alex Longley",
        "title": "Oil Holds Above $90 After Middle East Tensions Push Brent Higher - Yahoo Finance",
        "description": "(Bloomberg) -- Oil held onto Thursday’s large jump as escalating tensions in the Middle East catapulted prices past the $90-a-barrel threshold.Most Read from...",
        "url": "https://finance.yahoo.com/news/oil-rises-further-middle-east-232803117.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/fjrWVUzaJ25ziKsNmRLdEA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/b697e8648933a1835edfb4d15bb357d6",
        "publishedAt": "2024-04-05T12:58:49Z",
        "content": "(Bloomberg) -- Oil held onto Thursdays large jump as escalating tensions in the Middle East catapulted prices past the $90-a-barrel threshold.\r\nMost Read from Bloomberg\r\nThe global benchmark Brent ea… [+2701 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investor's Business Daily"
        },
        "author": "Investor's Business Daily",
        "title": "Johnson & Johnson To Buy Shockwave Medical For $13.1 Billion - Investor's Business Daily",
        "description": null,
        "url": "https://www.investors.com/news/technology/johnson-johnson-to-buy-shockwave-medical-13-1-billion/",
        "urlToImage": null,
        "publishedAt": "2024-04-05T12:55:00Z",
        "content": null
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "USA TODAY",
        "title": "Powerball jackpot hops to $1.23 billion: When is next lottery drawing? - USA TODAY",
        "description": null,
        "url": "https://www.usatoday.com/story/money/lottery/2024/04/05/powerball-drawing-lottery-jackpot/73214381007/",
        "urlToImage": null,
        "publishedAt": "2024-04-05T12:39:55Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Natasha Turak",
        "title": "McDonald's will buy all 225 restaurants from Israel franchise following pro-Palestinian boycott fallout - CNBC",
        "description": "McDonald's signed a deal to purchase all 225 of the restaurants that comprise its Israel franchise, the American fast-food chain announced.",
        "url": "https://www.cnbc.com/2024/04/05/israel-boycott-mcdonalds-will-buy-all-225-restaurants-from-franchise.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/105079239-GettyImages-929107440.jpg?v=1615980739&w=1920&h=1080",
        "publishedAt": "2024-04-05T12:33:53Z",
        "content": "McDonald's signed a deal to purchase all 225 of the restaurants that comprise its Israel franchise, the American fast-food chain announced, following months of dramatically lower sales due to pro-Pal… [+5721 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "Snejana Farberov",
        "title": "FAA probes near miss between Southwest jet, LaGuardia's air traffic control tower: 'Go around!' - New York Post ",
        "description": "An air traffic controller was heard yelling to the pilot to “go around!”",
        "url": "https://nypost.com/2024/04/05/us-news/faa-probes-planes-close-call-at-laguardia-airport/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/04/79517360.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2024-04-05T12:17:24Z",
        "content": "The Federal Aviation Administration is investigating why a Southwest Airlines flight veered off course and had a frighteningly close call last month with LaGuardia Airports air traffic control tower.… [+1455 chars]"
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
        "id": "reuters",
        "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Yellen says global concerns growing over China's excess industrial capacity - Reuters",
        "description": null,
        "url": "https://www.reuters.com/business/yellen-launches-contentious-meetings-chinese-excess-production-threat-2024-04-05/",
        "urlToImage": null,
        "publishedAt": "2024-04-05T11:46:27Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "Variety"
        },
        "author": "Todd Spangler",
        "title": "Disney Password-Sharing Crackdown for Disney+, Hulu, ESPN+ Accounts Will Begin in June - Variety",
        "description": "Bob Iger said Disney's streaming password-sharing crackdown will start in a few markets in June, before expanding to a \"full rollout\" in September.",
        "url": "https://variety.com/2024/digital/news/when-disney-password-sharing-crackdown-starts-1235961498/",
        "urlToImage": "https://variety.com/wp-content/uploads/2024/03/Disney-Logo_March-2024.png?w=1000&h=563&crop=1",
        "publishedAt": "2024-04-05T11:20:00Z",
        "content": "Some subscribers to Disney‘s streaming services will start seeing some new messaging up this summer: Pay up for anyone outside your main household who’s illicitly piggybacking on the services — or fa… [+4096 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "MarketWatch",
        "title": "Nvidia's stall means momentum trade has lost its mojo. Here's what to do. - MarketWatch",
        "description": null,
        "url": "https://www.marketwatch.com/story/nvidias-stall-means-the-momentum-trade-has-lost-its-mojo-heres-what-investors-should-do-99e61d89",
        "urlToImage": null,
        "publishedAt": "2024-04-05T10:32:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Sam Meredith",
        "title": "Fed's Kashkari raises prospect of zero rate cuts — but Goldman says that would be 'very surprising' - CNBC",
        "description": "Jan Hatzius, chief economist at Goldman Sachs, said Friday that he still expects three interest rate cuts from the Federal Reserve this year.",
        "url": "https://www.cnbc.com/2024/04/05/top-goldman-economist-downplays-prospect-of-zero-fed-rate-cuts-in-2024.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107215254-1679877741720-gettyimages-1139104457-_dsc8696_20190329112239459.jpeg?v=1712312079&w=1920&h=1080",
        "publishedAt": "2024-04-05T10:31:04Z",
        "content": "Goldman Sachs Chief Economist Jan Hatzius on Friday said that he still expects the Federal Reserve to implement three interest rate cuts this year, adding that he would be \"very surprised\" if the U.S… [+2784 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vox"
        },
        "author": "Umair Irfan",
        "title": "How the 2024 total solar eclipse affects the whole power grid - Vox.com",
        "description": "US solar power has more than doubled since the last eclipse. What will happen during this one?",
        "url": "https://www.vox.com/24121090/solar-eclipse-2024-power-grid-energy-electricity-ercot",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/eKB_mXzQi7kgDcf6HeZydIhQhxs=/0x30:5464x2891/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25371077/GettyImages_1452341899.jpg",
        "publishedAt": "2024-04-05T10:30:00Z",
        "content": "As the moon passes in front of the sun on April 8, its shadow will knock down solar power production in a sweeping band across the United States from Texas to Maine, home to more than 31 million peop… [+7211 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Michael Wayland",
        "title": "Hyundai's Genesis brand is a dark horse in U.S. luxury vehicle market - CNBC",
        "description": "Hyundai's Genesis launched in the U.S. nearly eight years ago to much skepticism but has proven itself worthy in the domestic luxury market.",
        "url": "https://www.cnbc.com/2024/04/05/hyundais-genesis-brand-is-a-dark-horse-in-us-luxury-vehicle-market.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107396270-1712163886191-IMG_6511.jpg?v=1712163990&w=1920&h=1080",
        "publishedAt": "2024-04-05T10:00:01Z",
        "content": "NEW YORK When Hyundai Motor launched its Genesis luxury brand domestically in 2016, many were skeptical the South Korean automaker recognized mainly for budget vehicles at the time knew what it was d… [+4772 chars]"
        },
        {
        "source": {
        "id": "fortune",
        "name": "Fortune"
        },
        "author": "Larry Neumeister, The Associated Press",
        "title": "87-year-old billionaire Joe Lewis gets no prison time after pleading guilty in insider trading case - Fortune",
        "description": "Judge G.L. Clarke cited Lewis' decision to promptly come to the United States to face charges and his failing health, along with a lifetime of good works.",
        "url": "https://fortune.com/2024/04/05/87-year-old-billionaire-joe-lewis-no-prison-time-pleading-guilty-insider-trading-case/",
        "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/04/AP24095655975922-e1712306882518.jpg?resize=1200,600",
        "publishedAt": "2024-04-05T08:58:00Z",
        "content": "British billionaire Joe Lewis, whose family trust owns the Tottenham Hotspur soccer club, will not spend any time in prison after pleading guilty to insider trading and conspiracy charges in New York… [+3938 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tipranks.com"
        },
        "author": "TipRanks",
        "title": "AMD Stock: Key Insights for Investors - TipRanks.com - TipRanks",
        "description": null,
        "url": "https://www.tipranks.com/news/amd-stock-key-insights-for-investors",
        "urlToImage": null,
        "publishedAt": "2024-04-05T08:05:24Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Dylan Butts",
        "title": "Nvidia plans to build a $200 million AI center in Indonesia amid push into Southeast Asia - CNBC",
        "description": "Nvidia is planning to build an AI center worth $200 million in Indonesia with a local telecoms giant Indosat Ooredoo Hutchison, an Indonesian minister has said.",
        "url": "https://www.cnbc.com/2024/04/05/nvidia-to-build-a-200-million-ai-center-in-indonesia-amid-southeast-asia-push.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107376935-17086199322024-02-22t112948z_193613553_rc2m76adcywy_rtrmadp_0_nvidia-china.jpeg?v=1709922969&w=1920&h=1080",
        "publishedAt": "2024-04-05T06:42:06Z",
        "content": "Nvidia is planning to build a $200 million artificial intelligence center in Indonesia in partnership with local telco giant Indosat Ooredoo Hutchison, as the U.S. tech darling continues its push int… [+2260 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Morning Bid: Middle East tensions spook markets - Reuters",
        "description": "A look at the day ahead in European and global markets from Rae Wee",
        "url": "https://www.reuters.com/markets/europe/global-markets-view-europe-2024-04-05/",
        "urlToImage": "https://www.reuters.com/resizer/v2/QU5M7Z6VBNIYRLQLCPKLSIFTGA.jpg?auth=c087be60b242eff4039cff977f28cfa4d6a0fda36a9a4409b0d3b13ec1e254a8&width=1920&height=1005&smart=true",
        "publishedAt": "2024-04-05T05:28:07Z",
        "content": null
        }
        ]
        }
       
        )
})

app.listen(PORT)