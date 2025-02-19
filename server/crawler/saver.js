const fs = require("fs"); //檔案讀寫
const axios = require("axios"); //方便打API套件
const cheerio = require("cheerio"); //俗稱後端的jQuery，方便抓取html元素
// 爬蟲用 header
let headers = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
};

// 寫入檔案範例

const myData = [
  "台北市士林區中山北路六段197號",
  "台北市中山區中山北路三段22號",
  "台北市大安區敦化南路二段69號",
];
const getData = async (addressArray) => {
  return Promise.all(addressArray.map((item) => addressToLongLan(item)));
};
getData(myData)
  .then((newData) => {
    return JSON.stringify(newData);
  })
  // 拿到資料後執行存檔
  .then((writeData) => saveFile("地址轉經緯度檔案.json", writeData));

// 主程式
async function addressToLongLan(addressName) {
  const html = await getGoogleMapHTML(addressName);
  const coordinates = getCoordinates(html, addressName);
  return coordinates;
}

// 爬蟲
async function getGoogleMapHTML(addressName) {
  const url = `https://www.google.com/maps/place/${encodeURI(addressName)}`;
  const res = await axios.get(url, {
    headers,
    params: {
      limit: 30,
      skip: 0,
      first: 0,
      order: "hot",
    },
  });
  const html = res.data;
  return html;
}

// 資料處理
function getCoordinates(html, addressName) {
  const $ = cheerio.load(html);
  const mapImg = $('meta[property="og:image"]').attr("content");
  console.log("已獲取圖片網址:", "https:" + mapImg, "\n");
  const googleMapURL = new URL("https:" + mapImg);
  const coordinates = googleMapURL.searchParams.get("ll").split(",");
  return { coordinates, addressName };
}

// 存檔
function saveFile(myFileName, writeData) {
  fs.writeFile(myFileName, writeData, function (err) {
    if (err) console.log(err);
    else console.log("寫入完成");
  });
}
