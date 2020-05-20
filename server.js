const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello',(req, res) => {
  res.send({message: "Hellp Nodemon!"});
});

app.get('/api/companyinfo', (req, res) => {
  res.send({
    companyName : "콴텍(주)",
    ceoName : "이상근",
    comRN : "114-86-80501",
    location : "서울특별시 영등포구 여의대로 14 | 콴택(주) 14층",
    locationEn : "14, Yeoui-departFocus, Yeongdeungpo-getComputedStyle, Seoul, Republic of Korea",
    homepage : "www.quantec.co.kr",
    email : "info@quantec.co.kr",
    telNum : "02.6339.2100",
    fax : "02.6280.1378",
    other1 : "",
    other2 : "",
    other3 : ""
  });
});

app.listen(port, () => console.log(`Lisening on port ${port}`));