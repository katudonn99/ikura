        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "黒" && number === 0) {
                result = "しゃけ";
            } else if (colour === "黒" && number === 1) {
                result = "いくら";
            } else if (colour === "黒" && number === 2) {
                result = "昆布";
            } else if (colour === "白" && number === 0) {
                result = "梅";
            } else if (colour === "白" && number === 1) {
                result = "すじこ";
            } else if (colour === "白" && number === 2) {
                result = "塩むすび";
            } else if (colour === "オレンジ" && number === 0) {
                result = "そぼろ";
            } else if (colour === "オレンジ" && number === 1) {
                result = "ツナマヨネーズ";
            } else if (colour === "オレンジ" && number === 2) {
                result = "おかか";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
