var fs = require("fs");
var csv = require("fast-csv");
const pool = require("./pgdb");

pool.connect(function (err) {
  if (err) {
    console.log(err);
  }
});

let counter = 0;

// let header = [];
// let data = [];

let csvStream = csv
  .parseFile(".//csv//World-Bank-CHN.csv", { headers: true })
  .on("data", function (record) {
    csvStream.pause();

    if (counter < 2000) {
      const indicatorName = record.indicatorName;
      const indicatorCode = record.indicatorCode;
      const oneNineSixZero = record["1960"];
      const oneNineSixOne = record["1961"];
      const oneNineSixTwo = record["1962"];
      const oneNineSixThree = record["1963"];
      const oneNineSixFour = record["1964"];
      const oneNineSixFive = record["1965"];
      const oneNineSixSix = record["1966"];
      const oneNineSixSeven = record["1967"];
      const oneNineSixEight = record["1968"];
      const oneNineSixNine = record["1969"];
      const oneNineSevenZero = record["1970"];
      const oneNineSevenOne = record["1971"];
      const oneNineSevenTwo = record["1972"];
      const oneNineSevenThree = record["1973"];
      const oneNineSevenFour = record["1974"];
      const oneNineSevenFive = record["1975"];
      const oneNineSevenSix = record["1976"];
      const oneNineSevenSeven = record["1977"];
      const oneNineSevenEight = record["1978"];
      const oneNineSevenNine = record["1979"];
      const oneNineEightZero = record["1980"];
      const oneNineEightOne = record["1981"];
      const oneNineEightTwo = record["1982"];
      const oneNineEightThree = record["1983"];
      const oneNineEightFour = record["1984"];
      const oneNineEightFive = record["1985"];
      const oneNineEightSix = record["1986"];
      const oneNineEightSeven = record["1987"];
      const oneNineEightEight = record["1988"];
      const oneNineEightNine = record["1989"];
      const oneNineNineZero = record["1990"];
      const oneNineNineOne = record["1991"];
      const oneNineNineTwo = record["1992"];
      const oneNineNineThree = record["1993"];
      const oneNineNineFour = record["1994"];
      const oneNineNineFive = record["1995"];
      const oneNineNineSix = record["1996"];
      const oneNineNineSeven = record["1997"];
      const oneNineNineEight = record["1998"];
      const oneNineNineNine = record["1999"];
      const twoZeroZeroZero = record["2000"];
      const twoZeroZeroOne = record["2001"];
      const twoZeroZeroTwo = record["2002"];
      const twoZeroZeroThree = record["2003"];
      const twoZeroZeroFour = record["2004"];
      const twoZeroZeroFive = record["2005"];
      const twoZeroZeroSix = record["2006"];
      const twoZeroZeroSeven = record["2007"];
      const twoZeroZeroEight = record["2008"];
      const twoZeroZeroNine = record["2009"];
      const twoZeroOneZero = record["2010"];
      const twoZeroOneOne = record["2011"];
      const twoZeroOneTwo = record["2012"];

      pool.query(
        "INSERT INTO attempt_world_bank_sample(indicatorName, indicatorCode, oneNineSixZero, oneNineSixOne, oneNineSixTwo, oneNineSixThree, oneNineSixFour, oneNineSixFive, oneNineSixSix, oneNineSixSeven, oneNineSixEight, oneNineSixNine, oneNineSevenZero, oneNineSevenOne, oneNineSevenTwo, oneNineSevenThree, oneNineSevenFour, oneNineSevenFive, oneNineSevenSix, oneNineSevenSeven, oneNineSevenEight, oneNineSevenNine, oneNineEightZero, oneNineEightOne, oneNineEightTwo, oneNineEightThree, oneNineEightFour, oneNineEightFive, oneNineEightSix, oneNineEightSeven, oneNineEightEight, oneNineEightNine, oneNineNineZero, oneNineNineOne, oneNineNineTwo, oneNineNineThree, oneNineNineFour, oneNineNineFive, oneNineNineSix, oneNineNineSeven, oneNineNineEight, oneNineNineNine, twoZeroZeroZero, twoZeroZeroOne, twoZeroZeroTwo, twoZeroZeroThree, twoZeroZeroFour, twoZeroZeroFive, twoZeroZeroSix, twoZeroZeroSeven, twoZeroZeroEight, twoZeroZeroNine, twoZeroOneZero, twoZeroOneOne, twoZeroOneTwo) \
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55)",
        [
          indicatorName,
          indicatorCode,
          oneNineSixZero,
          oneNineSixOne,
          oneNineSixTwo,
          oneNineSixThree,
          oneNineSixFour,
          oneNineSixFive,
          oneNineSixSix,
          oneNineSixSeven,
          oneNineSixEight,
          oneNineSixNine,
          oneNineSevenZero,
          oneNineSevenOne,
          oneNineSevenTwo,
          oneNineSevenThree,
          oneNineSevenFour,
          oneNineSevenFive,
          oneNineSevenSix,
          oneNineSevenSeven,
          oneNineSevenEight,
          oneNineSevenNine,
          oneNineEightZero,
          oneNineEightOne,
          oneNineEightTwo,
          oneNineEightThree,
          oneNineEightFour,
          oneNineEightFive,
          oneNineEightSix,
          oneNineEightSeven,
          oneNineEightEight,
          oneNineEightNine,
          oneNineNineZero,
          oneNineNineOne,
          oneNineNineTwo,
          oneNineNineThree,
          oneNineNineFour,
          oneNineNineFive,
          oneNineNineSix,
          oneNineNineSeven,
          oneNineNineEight,
          oneNineNineNine,
          twoZeroZeroZero,
          twoZeroZeroOne,
          twoZeroZeroTwo,
          twoZeroZeroThree,
          twoZeroZeroFour,
          twoZeroZeroFive,
          twoZeroZeroSix,
          twoZeroZeroSeven,
          twoZeroZeroEight,
          twoZeroZeroNine,
          twoZeroOneZero,
          twoZeroOneOne,
          twoZeroOneTwo,
        ],
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
      ++counter;
    }

    csvStream.resume();
  })
  .on("end", function () {
    console.log("Job is done!");
  })
  .on("error", function (err) {
    console.log(err);
  });


// CREATE TABLE attempt_world_bank_sample(
// indicatorName VARCHAR NOT NULL,
// indicatorCode VARCHAR NOT NULL,
// oneNineSixZero VARCHAR NOT NULL,
// oneNineSixOne VARCHAR NOT NULL,
// oneNineSixTwo VARCHAR NOT NULL,
// oneNineSixThree VARCHAR NOT NULL,
// oneNineSixFour VARCHAR NOT NULL,
// oneNineSixFive VARCHAR NOT NULL,
// oneNineSixSix VARCHAR NOT NULL,
// oneNineSixSeven VARCHAR NOT NULL,
// oneNineSixEight  VARCHAR NOT NULL,
// oneNineSixNine VARCHAR NOT NULL,
// oneNineSevenZero VARCHAR NOT NULL,
// oneNineSevenOne VARCHAR NOT NULL,
// oneNineSevenTwo VARCHAR NOT NULL,
// oneNineSevenThree VARCHAR NOT NULL,
// oneNineSevenFour VARCHAR NOT NULL,
// oneNineSevenFive VARCHAR NOT NULL,
// oneNineSevenSix VARCHAR NOT NULL,
// oneNineSevenSeven VARCHAR NOT NULL,
// oneNineSevenEight VARCHAR NOT NULL,
// oneNineSevenNine VARCHAR NOT NULL,
// oneNineEightZero VARCHAR NOT NULL,
// oneNineEightOne VARCHAR NOT NULL,
// oneNineEightTwo VARCHAR NOT NULL,
// oneNineEightThree VARCHAR NOT NULL,
// oneNineEightFour VARCHAR NOT NULL,
// oneNineEightFive VARCHAR NOT NULL,
// oneNineEightSix VARCHAR NOT NULL,
// oneNineEightSeven VARCHAR NOT NULL,
// oneNineEightEight VARCHAR NOT NULL,
// oneNineEightNine VARCHAR NOT NULL,
// oneNineNineZero VARCHAR NOT NULL,
// oneNineNineOne VARCHAR NOT NULL,
// oneNineNineTwo VARCHAR NOT NULL,
// oneNineNineThree VARCHAR NOT NULL,
// oneNineNineFour VARCHAR NOT NULL,
// oneNineNineFive VARCHAR NOT NULL,
// oneNineNineSix VARCHAR NOT NULL,
// oneNineNineSeven VARCHAR NOT NULL,
// oneNineNineEight VARCHAR NOT NULL,
// oneNineNineNine VARCHAR NOT NULL,
// twoZeroZeroZero VARCHAR NOT NULL,
// twoZeroZeroOne VARCHAR NOT NULL,
// twoZeroZeroTwo VARCHAR NOT NULL,
// twoZeroZeroThree VARCHAR NOT NULL,
// twoZeroZeroFour VARCHAR NOT NULL,
// twoZeroZeroFive VARCHAR NOT NULL,
// twoZeroZeroSix VARCHAR NOT NULL,
// twoZeroZeroSeven VARCHAR NOT NULL,
// twoZeroZeroEight VARCHAR NOT NULL,
// twoZeroZeroNine VARCHAR NOT NULL,
// twoZeroOneZero VARCHAR NOT NULL,
// twoZeroOneOne VARCHAR NOT NULL,
// twoZeroOneTwo VARCHAR NOT NULL
// );
