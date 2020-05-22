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
      const JA = record["1960"];
      const JB = record["1961"];
      const JC = record["1962"];
      const JD = record["1963"];
      const JE = record["1964"];
      const JF = record["1965"];
      const JG = record["1966"];
      const JH = record["1967"];
      const JI = record["1968"];
      const JJ = record["1969"];
      const JK = record["1970"];
      const JL = record["1971"];
      const JM = record["1972"];
      const JN = record["1973"];
      const JO = record["1974"];
      const JP = record["1975"];
      const JQ = record["1976"];
      const JR = record["1977"];
      const JS = record["1978"];
      const JT = record["1979"];
      const JU = record["1980"];
      const JV = record["1981"];
      const JW = record["1982"];
      const JX = record["1983"];
      const JY = record["1984"];
      const JZ = record["1985"];
      const ZA = record["1986"];
      const ZB = record["1987"];
      const ZC = record["1988"];
      const ZD = record["1989"];
      const ZE = record["1990"];
      const ZF = record["1991"];
      const ZG = record["1992"];
      const ZH = record["1993"];
      const ZI = record["1994"];
      const ZJ = record["1995"];
      const ZK = record["1996"];
      const ZL = record["1997"];
      const ZM = record["1998"];
      const ZN = record["1999"];
      const ZO = record["2000"];
      const ZP = record["2001"];
      const ZQ = record["2002"];
      const ZR = record["2003"];
      const ZS = record["2004"];
      const ZT = record["2005"];
      const ZU = record["2006"];
      const ZV = record["2007"];
      const ZW = record["2008"];
      const ZX = record["2009"];
      const ZY = record["2010"];
      const ZZ = record["2011"];
      const ZZA = record["2012"];

      pool.query(
        "INSERT INTO sorted_alphabet_final_world_bank_sample(indicatorName, indicatorCode, JA, JB, JC, JD, JE, JF, JG, JH, JI, JJ, JK, JL, JM, JN, JO, JP, JQ, JR, JS, JT, JU, JV, JW, JX, JY, JZ, ZA, ZB, ZC, ZD, ZE, ZF, ZG, ZH, ZI, ZJ, ZK, ZL, ZM, ZN, ZO, ZP, ZQ, ZR, ZS, ZT, ZU, ZV, ZW, ZX, ZY, ZZ, ZZA) \
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55)",
        [
          indicatorName,
          indicatorCode,
          JA,
          JB,
          JC,
          JD,
          JE,
          JF,
          JG,
          JH,
          JI,
          JJ,
          JK,
          JL,
          JM,
          JN,
          JO,
          JP,
          JQ,
          JR,
          JS,
          JT,
          JU,
          JV,
          JW,
          JX,
          JY,
          JZ,
          ZA,
          ZB,
          ZC,
          ZD,
          ZE,
          ZF,
          ZG,
          ZH,
          ZI,
          ZJ,
          ZK,
          ZL,
          ZM,
          ZN,
          ZO,
          ZP,
          ZQ,
          ZR,
          ZS,
          ZT,
          ZU,
          ZV,
          ZW,
          ZX,
          ZY,
          ZZ,
          ZZA,
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




// CREATE TABLE sorted_alphabet_final_world_bank_sample(
// id serial PRIMARY KEY,
// indicatorName VARCHAR NOT NULL,
// indicatorCode VARCHAR NOT NULL,
// JA VARCHAR NOT NULL,
// JB VARCHAR NOT NULL,
// JC VARCHAR NOT NULL,
// JD VARCHAR NOT NULL,
// JE VARCHAR NOT NULL,
// JF VARCHAR NOT NULL,
// JG VARCHAR NOT NULL,
// JH VARCHAR NOT NULL,
// JI  VARCHAR NOT NULL,
// JJ VARCHAR NOT NULL,
// JK VARCHAR NOT NULL,
// JL VARCHAR NOT NULL,
// JM VARCHAR NOT NULL,
// JN VARCHAR NOT NULL,
// JO VARCHAR NOT NULL,
// JP VARCHAR NOT NULL,
// JQ VARCHAR NOT NULL,
// JR VARCHAR NOT NULL,
// JS VARCHAR NOT NULL,
// JT VARCHAR NOT NULL,
// JU VARCHAR NOT NULL,
// JV VARCHAR NOT NULL,
// JW VARCHAR NOT NULL,
// JX VARCHAR NOT NULL,
// JY VARCHAR NOT NULL,
// JZ VARCHAR NOT NULL,
// ZA VARCHAR NOT NULL,
// ZB VARCHAR NOT NULL,
// ZC VARCHAR NOT NULL,
// ZD VARCHAR NOT NULL,
// ZE VARCHAR NOT NULL,
// ZF VARCHAR NOT NULL,
// ZG VARCHAR NOT NULL,
// ZH VARCHAR NOT NULL,
// ZI VARCHAR NOT NULL,
// ZJ VARCHAR NOT NULL,
// ZK VARCHAR NOT NULL,
// ZL VARCHAR NOT NULL,
// ZM VARCHAR NOT NULL,
// ZN VARCHAR NOT NULL,
// ZO VARCHAR NOT NULL,
// ZP VARCHAR NOT NULL,
// ZQ VARCHAR NOT NULL,
// ZR VARCHAR NOT NULL,
// ZS VARCHAR NOT NULL,
// ZT VARCHAR NOT NULL,
// ZU VARCHAR NOT NULL,
// ZV VARCHAR NOT NULL,
// ZW VARCHAR NOT NULL,
// ZX VARCHAR NOT NULL,
// ZY VARCHAR NOT NULL,
// ZZ VARCHAR NOT NULL,
// ZZA VARCHAR NOT NULL
// );

