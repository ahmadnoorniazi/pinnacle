import React from "react";

const App = ({ height, viewbox }) => {
  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="359.000000pt"
        height={height || "131.000000pt"}
        viewBox={viewbox ||"0 0 100.000000 131.000000"}
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
          transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)"
          fill="#fff"
          stroke="none"
        >
          <path
            d="M2821 801 c-84 -155 -154 -281 -155 -281 -2 0 -23 29 -46 65 -23 36
-45 65 -49 65 -6 -1 -177 -278 -188 -306 -15 -39 21 3 99 118 l83 122 3 -47
c2 -25 -2 -56 -8 -68 -9 -16 -9 -23 0 -29 9 -5 10 -23 5 -59 -6 -47 -5 -51 13
-51 11 0 27 6 35 14 7 8 87 145 177 305 90 160 165 289 166 288 2 -2 -6 -36
-16 -77 -27 -103 -26 -110 10 -110 17 0 30 -1 30 -2 0 -2 -25 -59 -55 -128
-30 -69 -55 -130 -55 -137 0 -6 11 -20 24 -31 l25 -19 -30 -44 c-16 -24 -29
-48 -29 -52 0 -5 19 -7 43 -5 l42 3 86 175 c86 175 87 175 94 137 4 -21 4 -61
1 -89 l-7 -51 25 17 c25 16 25 16 60 -38 24 -38 56 -69 103 -100 37 -25 69
-44 71 -42 4 5 -376 706 -393 724 -10 11 -43 -43 -164 -267z"
          />
          <path
            d="M140 570 l0 -180 25 0 c24 0 25 2 25 65 l0 65 33 0 c53 0 67 24 67
111 0 103 -12 119 -91 119 l-59 0 0 -180z"
          />
          <path d="M440 570 l0 -180 25 0 25 0 0 180 0 180 -25 0 -25 0 0 -180z" />
          <path
            d="M650 570 l0 -180 30 0 30 0 1 98 1 97 18 -50 c10 -27 19 -71 19 -97
1 -46 2 -48 31 -48 l30 0 0 180 0 180 -30 0 -30 0 -1 -67 0 -68 -21 68 c-19
62 -23 67 -49 67 l-29 0 0 -180z"
          />
          <path
            d="M970 570 l0 -180 25 0 c25 0 25 0 26 103 l1 102 24 -75 c13 -41 24
-87 24 -102 0 -23 4 -28 25 -28 l25 0 0 180 0 180 -25 0 c-23 0 -24 -3 -27
-72 l-3 -73 -23 73 c-20 64 -26 72 -47 72 l-25 0 0 -180z"
          />
          <path
            d="M1280 583 c-35 -92 -65 -174 -68 -180 -3 -10 23 -13 108 -13 98 0
111 2 106 16 -3 9 -6 18 -6 20 0 2 -29 4 -65 4 -44 0 -65 4 -65 12 0 18 74
238 80 238 3 0 28 -64 55 -142 47 -134 52 -143 78 -146 15 -2 27 -2 27 1 0 2
-31 82 -68 178 -62 157 -71 174 -94 177 -23 3 -28 -5 -88 -165z"
          />
          <path
            d="M1602 738 c-8 -8 -12 -60 -12 -168 0 -108 4 -160 12 -168 18 -18 103
-15 122 4 9 8 16 29 16 45 0 24 -4 29 -24 29 -15 0 -26 -7 -29 -20 -3 -12 -14
-20 -26 -20 -20 0 -21 5 -21 131 0 130 0 130 23 127 16 -2 23 -11 25 -30 3
-22 9 -28 28 -28 21 0 24 4 24 38 0 25 -7 45 -18 55 -22 20 -102 23 -120 5z"
          />
          <path
            d="M1890 570 l0 -180 60 0 c57 0 60 1 60 25 0 22 -4 25 -35 25 l-35 0 0
155 0 155 -25 0 -25 0 0 -180z"
          />
          <path
            d="M2150 570 l0 -180 66 0 c62 0 65 1 62 23 -2 17 -11 23 -35 25 -33 3
-33 4 -33 58 0 53 0 54 30 54 25 0 30 4 30 25 0 21 -5 25 -30 25 -29 0 -30 1
-30 49 0 49 1 50 33 53 24 2 33 8 35 26 3 21 0 22 -62 22 l-66 0 0 -180z"
          />
        </g>
      </svg>
    </div>
  );
};
export default App;
