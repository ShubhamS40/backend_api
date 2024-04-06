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
"totalResults": 18,
"articles": [
{
"source": {
"id": "google-news-in",
"name": "Google News (India)"
},
"author": "Mint",
"title": "'Pakistan mein ghus kar maarengey': Rajnath Singh reacts to India's link to ‘targeted killings’ | Mint - Mint",
"description": null,
"url": "https://news.google.com/rss/articles/CBMikQFodHRwczovL3d3dy5saXZlbWludC5jb20vbmV3cy9pbmRpYS9wYWtpc3Rhbi1tZWluLWdodXMta2FyLW1hYXJlbmdleS1yYWpuYXRoLXNpbmdoLXJlYWN0cy10by1pbmRpYXMtbGluay10by10YXJnZXRlZC1raWxsaW5ncy0xMTcxMjMyMjE1MTk1My5odG1s0gGVAWh0dHBzOi8vd3d3LmxpdmVtaW50LmNvbS9uZXdzL2luZGlhL3Bha2lzdGFuLW1laW4tZ2h1cy1rYXItbWFhcmVuZ2V5LXJham5hdGgtc2luZ2gtcmVhY3RzLXRvLWluZGlhcy1saW5rLXRvLXRhcmdldGVkLWtpbGxpbmdzL2FtcC0xMTcxMjMyMjE1MTk1My5odG1s?oc=5",
"urlToImage": null,
"publishedAt": "2024-04-05T13:03:45+00:00",
"content": null
},
{
"source": {
"id": "al-jazeera-english",
"name": "Al Jazeera English"
},
"author": "Abid Hussain",
"title": "Is India behind targeted killings in Pakistan? What we know",
"description": "Pakistani officials tell Al Jazeera at least eight killings could be linked to India. New Delhi rejects these charges.",
"url": "https://www.aljazeera.com/news/2024/4/5/is-india-behind-targeted-killings-in-pakistan-what-we-know",
"urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/04/saleem-rehmani-farooq-khan-1712313206.jpg?resize=1920%2C1440",
"publishedAt": "2024-04-05T12:40:08Z",
"content": "Islamabad, Pakistan  Since June 2021, Pakistan has tracked and accused Indian intelligence agencies of multiple attempts some successful at assassinating individuals New Delhi views as terrorists she… [+7695 chars]"
},
{
"source": {
"id": "google-news-in",
"name": "Google News (India)"
},
"author": "NDTV",
"title": "Rahul Gandhi's Bet On India's Record Market Rally Made Him 28% Richer - NDTV",
"description": null,
"url": "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3Lm5kdHYuY29tL2luZGlhLW5ld3MvcmFodWwtZ2FuZGhpLWJldC1vbi1pbmRpYS1yZWNvcmQtbWFya2V0LXJhbGx5LW1ha2VzLWhpbS1yaWNoZXItNTM4MTE2OdIBbGh0dHBzOi8vd3d3Lm5kdHYuY29tL2luZGlhLW5ld3MvcmFodWwtZ2FuZGhpLWJldC1vbi1pbmRpYS1yZWNvcmQtbWFya2V0LXJhbGx5LW1ha2VzLWhpbS1yaWNoZXItNTM4MTE2OS9hbXAvMQ?oc=5",
"urlToImage": null,
"publishedAt": "2024-04-05T11:49:03+00:00",
"content": null
},
{
"source": {
"id": "google-news-in",
"name": "Google News (India)"
},
"author": "The Hindu",
"title": "India removes export curbs on specified quantity of onions, rice, wheat flour, sugar for Maldives - The Hindu",
"description": null,
"url": "https://news.google.com/rss/articles/CBMimQFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9uYXRpb25hbC9pbmRpYS1yZW1vdmVzLWV4cG9ydC1jdXJicy1vbi1zcGVjaWZpZWQtcXVhbnRpdHktb2Ytb25pb25zLXJpY2Utd2hlYXQtZmxvdXItc3VnYXItZm9yLW1hbGRpdmVzL2FydGljbGU2ODAzMjE4My5lY2XSAZ4BaHR0cHM6Ly93d3cudGhlaGluZHUuY29tL25ld3MvbmF0aW9uYWwvaW5kaWEtcmVtb3Zlcy1leHBvcnQtY3VyYnMtb24tc3BlY2lmaWVkLXF1YW50aXR5LW9mLW9uaW9ucy1yaWNlLXdoZWF0LWZsb3VyLXN1Z2FyLWZvci1tYWxkaXZlcy9hcnRpY2xlNjgwMzIxODMuZWNlL2FtcC8?oc=5",
"urlToImage": null,
"publishedAt": "2024-04-05T11:26:00+00:00",
"content": null
},
{
"source": {
"id": "google-news-in",
"name": "Google News (India)"
},
"author": "The Indian Express",
"title": "Delhi News Live Updates: Court allows CBI to interrogate K Kavitha in excise policy case - The Indian Express",
"description": null,
"url": "https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS9jaXRpZXMvZGVsaGkvZGVsaGktbmV3cy1saXZlLXVwZGF0ZXMtYXJ2aW5kLWtlanJpd2FsLTkyNTI0ODkv0gFkaHR0cHM6Ly9pbmRpYW5leHByZXNzLmNvbS9hcnRpY2xlL2NpdGllcy9kZWxoaS9kZWxoaS1uZXdzLWxpdmUtdXBkYXRlcy1hcnZpbmQta2Vqcml3YWwtOTI1MjQ4OS9saXRlLw?oc=5",
"urlToImage": null,
"publishedAt": "2024-04-05T10:19:00+00:00",
"content": null
},
{
"source": {
"id": "cbc-news",
"name": "CBC News"
},
"author": "CBC News",
"title": "India, Pakistan attempted to interfere in Canada's elections: CSIS | CBC News",
"description": "The governments of Pakistan and India attempted to interfere in Canada's elections in 2019 and 2021, Canada's spy agency said in documents made public late Thursday night.",
"url": "http://www.cbc.ca/news/politics/pakistan-india-elections-canada-1.7164378",
"urlToImage": "https://i.cbc.ca/1.6976086.1695692596!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/trudeau-and-modi.jpg",
"publishedAt": "2024-04-05T08:07:22.8616571Z",
"content": "The governments of India and Pakistan attempted to interfere in Canada's federal elections in 2019 and 2021, Canada's spy agency said in documents made public late Thursday night.\r\nIn 2021, the gover… [+6203 chars]"
},
{
"source": {
"id": "espn",
"name": "ESPN"
},
"author": null,
"title": "Seton Hall rallies late, tops Indiana State to win NIT title - ESPN",
"description": "Trailing by seven with 2:50 left, Seton Hall scored the final nine points to beat Indiana State for its first NIT championship Thursday night.",
"url": "https://www.espn.com/mens-college-basketball/story/_/id/39877177/seton-hall-rallies-late-tops-indiana-state-win-nit-title",
"urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0405%2Fr1314394_1296x729_16%2D9.jpg",
"publishedAt": "2024-04-05T01:56:00Z",
"content": "INDIANAPOLIS -- Dre Davis scored on a layup with 16 seconds left Friday night to cap Seton Hall's decisive late run, giving the Pirates a 79-77 victory over Indiana State and their first NIT champion… [+1598 chars]"
},
{
"source": {
"id": "fortune",
"name": "Fortune"
},
"author": "Emma Hinchliffe, Paige McGlauflin",
"title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
"description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
"url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
"urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
"publishedAt": "2022-06-01T13:22:34Z",
"content": "Skip to Content"
},
{
"source": {
"id": "the-hindu",
"name": "The Hindu"
},
"author": "Ananth Krishnan",
"title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
"description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
"url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
"urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
"publishedAt": "2021-07-22T15:47:01Z",
"content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
},
{
"source": {
"id": "rte",
"name": "RTE"
},
"author": "RTÉ News",
"title": "UK continues with reopening plan despite concerns",
"description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
"url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
"urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
"publishedAt": "2021-05-15T09:33:48Z",
"content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
},
{
"source": {
"id": "the-times-of-india",
"name": "The Times of India"
},
"author": "Rajat Pandit",
"title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
"description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
"url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
"urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
"publishedAt": "2021-04-23T08:29:00Z",
"content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
},
{
"source": {
"id": "the-times-of-india",
"name": "The Times of India"
},
"author": "Times Of India",
"title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
"description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
"url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
"urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
"publishedAt": "2021-04-23T05:44:49Z",
"content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
},
{
"source": {
"id": "the-times-of-india",
"name": "The Times of India"
},
"author": "PTI",
"title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
"description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
"url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
"urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
"publishedAt": "2021-04-23T05:43:00Z",
"content": null
},
{
"source": {
"id": "the-times-of-india",
"name": "The Times of India"
},
"author": "Bloomberg",
"title": "Even record death toll may hide extent of India’s Covid crisis",
"description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
"url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
"urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
"publishedAt": "2021-04-23T04:41:00Z",
"content": null
},
{
"source": {
"id": "the-times-of-india",
"name": "The Times of India"
},
"author": "Dipak K Dash",
"title": "Government to provide 5 kg free food grains to poor for May & June",
"description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
"url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
"urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
"publishedAt": "2021-04-23T04:23:00Z",
"content": null
},
{
"source": {
"id": "the-times-of-india",
"name": "The Times of India"
},
"author": "TIMESOFINDIA.COM",
"title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
"description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
"url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
"urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
"publishedAt": "2021-04-23T03:54:00Z",
"content": null
},
{
"source": {
"id": "the-times-of-india",
"name": "The Times of India"
},
"author": "Times Of India",
"title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
"description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
"url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
"urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
"publishedAt": "2021-04-22T16:20:06Z",
"content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
},
{
"source": {
"id": "espn-cric-info",
"name": "ESPN Cric Info"
},
"author": null,
"title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
"description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
"url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
"urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
"publishedAt": "2020-04-25T03:00:09Z",
"content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
}
]
}

       
        )
})

app.listen(PORT)