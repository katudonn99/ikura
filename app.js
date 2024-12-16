        function checkFortune() {
            var time = document.getElementById('time-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "梅"; // デフォルトの値

            if (time === "朝" && number === 0) {
                result = "しゃけ";
            } else if (time === "朝" && number === 1) {
                result = "いくら";
            } else if (time === "朝" && number === 2) {
                result = "昆布";
            } else if (time === "昼" && number === 0) {
                result = "梅";
            } else if (time === "昼" && number === 1) {
                result = "すじこ";
            } else if (time === "昼" && number === 2) {
                result = "ツナマヨネーズ";
            } else if (time === "おやつに" && number === 0) {
                result = "そぼろ";
            } else if (time === "おやつに" && number === 1) {
                result = "塩むすび";
            } else if (time === "おやつに" && number === 2) {
                result = "おかか";
            }

            document.getElementById('result-output').innerText = "今日のおにぎりの具材は【" + result + "】にしましょう!";
        }




 function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "黒" && number === 0) {
                result = "小吉";
            } else if (colour === "黒" && number === 1) {
                result = "中吉";
            } else if (colour === "黒" && number === 2) {
                result = "凶";
            } else if (colour === "白" && number === 0) {
                result = "中吉";
            } else if (colour === "白" && number === 1) {
                result = "中吉";
            } else if (colour === "白" && number === 2) {
                result = "大凶";
            } else if (colour === "オレンジ" && number === 0) {
                result = "凶";
            } else if (colour === "オレンジ" && number === 1) {
                result = "大吉";
            } else if (colour === "オレンジ" && number === 2) {
                result = "中吉";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }

