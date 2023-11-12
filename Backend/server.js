const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.listen("5000", () => {
  console.log("Server running on Port 5000");
});

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.on("open", () => {
  console.log("Database Connected");
});

app.get("/", (req, res) => {
  res.send("Backend");
});

const NFTcollections = [
  {
    cid: 1,
    name: "Bored Ape Yacht Club",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=256",
    collectionBannerUrl:
      "https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&dpr=1&w=1080",
    collectionjoined: "April 2021",
    category: "PFPs",
    items: 9998,
  },
  {
    cid: 2,
    name: "CLONE X",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gae/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg?auto=format&dpr=1&w=256",
    collectionBannerUrl:
      "https://i.seadn.io/gcs/files/753018fef6aebaa1c4b6143f4ad30c98.png?auto=format&dpr=1&w=1080",
    collectionjoined: "Dec 2021",
    category: "PFPs",
    items: 19588,
  },
  {
    cid: 3,
    name: "Phanta Bear",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gae/1wTnxFx6paNeV1lv_ht10OFpDucUhg-fL6IZbPrai3Jf_3pHS5dSazhpU_UBn2BVQBUEffYAeoo2iVbCu9LPeUDhmwZwt_7J4xpdrQ?auto=format&dpr=1&w=256",
    collectionBannerUrl:
      "https://i.seadn.io/gcs/files/a394eadf1f1d27ca91e63b3d15fba5ca.jpg?auto=format&dpr=1&w=1080",
    collectionjoined: "Dec 2021",
    category: "PFPs",
    items: 10025,
  },
  {
    cid: 4,
    name: "Meta Legends",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gae/G6oiHHDRJreAXlpneSeaaYM5HVyst2HYd2nQH9Zzw02g8mUfBTSNGl4zlwASuFZl01XbiaXjWX_6rf7l5roJTAaq1o1-EevvOsFFGg?auto=format&dpr=1&w=256",
    collectionBannerUrl:
      "https://i.seadn.io/gae/x3GPJZegIf8K4ZI4cMzifRsLdzULZ4VqkAoryJ4ozt6z5YHfOKB5igT1o1PN2Vgm7CwRdyLctNF0kCpu_8CEhfpP29SZqKL-b0MX?auto=format&dpr=1&w=1920",
    collectionjoined: "Nov 2021",
    category: "Gaming",
    items: 12335,
  },
  {
    cid: 5,
    name: "The Watch",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gae/OxFPtHkMcpPadPxxb8Kqr4E6fcEo_NoYG48X6heC7ttx8qM2KOAebNhKNm4u6wD9Fgb9JJn_n0vcxEJwfQA8hvrjv4mpmPO5uE77Ww?auto=format&dpr=1&w=1200",
    collectionBannerUrl:
      "https://i.seadn.io/gae/sDc9mIyXZ1SdXDk9WprGI1_hsGdBILiTeL2O89TRTJOsfOF5fWvDcLlCoegSVfVtkAqv1pr_OkYO10y2hcUK3nrO4X6Ds7yvFPh4?auto=format&dpr=1&w=1200",
    collectionjoined: "Sep 2021",
    category: "Gaming",
    items: 34561,
  },
  {
    cid: 6,
    name: "InfiniGods - The Elder Gods",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gcs/files/d84df649a0f9e8cc2007ec2484ac494f.jpg?auto=format&dpr=1&w=256",
    collectionBannerUrl:
      "https://i.seadn.io/gcs/files/a55dde5f103b3d4ab205c597e179b605.jpg?auto=format&dpr=1&w=1080",
    collectionjoined: "Dec 2022",
    category: "Gaming",
    items: 4862,
  },
  {
    cid: 7,
    name: "LoudPunx",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gcs/files/ad9b7cdca7bb0956644ae1ef3832ad8f.png?auto=format&dpr=1&w=1080",
    collectionBannerUrl:
      "https://i.seadn.io/gcs/files/ee5c835ca7927237f4dbac8270dc4c0f.png?auto=format&dpr=1&w=1080",
    collectionjoined: "Feb 2023",
    category: "Music",
    items: 2458,
  },
  {
    cid: 8,
    name: "Gutter Dogs",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gae/vNgijw2b0ybGsKbVw5210hQhv42uFiX2r0IMnD0GbyX-Tg-YI7F09_QnIWSiHdPIKfi4ANzH204I1SgKkBz_uMO0njDaVfsXivIPYMU?auto=format&dpr=1&w=256",
    collectionBannerUrl:
      "https://i.seadn.io/gae/IE2GlJf-gN2GHRpR0bDgPmoR1-1BgRCLlRvR2-jG-2p7qvhn5ZK6izIIp4tviYZVFgJlMBZr8-IrDspsl5L5uqJjyd4se0QpsXq9WQ?auto=format&dpr=1&w=1920",
    collectionjoined: "Oct 2021",
    category: "PFPs",
    items: 2955,
  },
  {
    cid: 9,
    name: "Otherdeed for Otherside",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&dpr=1&w=256",
    collectionBannerUrl:
      "https://i.seadn.io/gae/E_XVuM8mX1RuqBym2JEX4RBg_sj9KbTFBAi0qU4eBr2E3VCC0bwpWrgHqBOaWsKGTf4-DBseuZJGvsCVBnzLjxqgq7rAb_93zkZ-?auto=format&dpr=1&w=1920",
    collectionjoined: "Apr 2021",
    category: "Virtual Worlds",
    items: 48562,
  },
  {
    cid: 10,
    name: "Psychedelics Anonymous Genesis",
    chain: "Ethereum",
    collectionLogoUrl:
      "https://i.seadn.io/gae/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o?auto=format&dpr=1&w=256",
    collectionBannerUrl:
      "https://i.seadn.io/gae/Ztbsa_YCs23MJCTLA9DiQUyeO3uSJXRRwEQtoUMF39vhqaxTqrshwU_g1sGRH0XvC7X6w1o1WIR_r7KsO0fNbA8PKQbfiCvBoxcjBw?auto=format&dpr=1&w=1920",
    collectionjoined: "Apr 2021",
    category: "Memberships",
    items: 9588,
  },
  // {
  //     cid:8,
  //     name:"The Watch",
  //     chain:"Ethereum",
  //     collectionLogoUrl:"",
  //     collectionBannerUrl:"",
  //     collectionjoined:"Sep 2021",
  //     category : "Gaming",
  //     items:1,
  // },
];
app.get("/api", (req, res) => {
  res.json(NFTcollections);
});

require("./Routes/collections.routes")(app);
require("./Routes/users.routes")(app);
require("./Routes/nfts.routes")(app);
// app.get("/collection/:id" , (req,res) => {
//     const id = req.params.id ;

//     const collection = NFTcollections.find(col => col.cid == id);

//     if(!collection) {
//         res.status(404).json({message : "Collection does Not exist"});
//     }
//     res.json(collection);
// })
