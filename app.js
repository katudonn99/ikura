        function checkFortune() {
            var time = document.getElementById('time-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "梅"; // デフォルトの値

            if (colour === "朝" && number === 0) {
                result = "しゃけ";
            } else if (colour === "朝" && number === 1) {
                result = "いくら";
            } else if (colour === "朝" && number === 2) {
                result = "昆布";
            } else if (colour === "昼" && number === 0) {
                result = "梅";
            } else if (colour === "昼" && number === 1) {
                result = "すじこ";
            } else if (colour === "昼" && number === 2) {
                result = "ツナマヨネーズ";
            } else if (colour === "おやつに" && number === 0) {
                result = "そぼろ";
            } else if (colour === "おやつに" && number === 1) {
                result = "塩むすび";
            } else if (colour === "おやつに" && number === 2) {
                result = "おかか";
            }

            document.getElementById('result-output').innerText = "今日のおにぎりの具材は【" + result + "】にしましょう!";
        }
