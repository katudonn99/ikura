function checkFortune() {
            var time = document.getElementById('time-select').value;
        　　 var number = parseInt(document.getElementById('number-input').value, 10);
             var result = "梅おにぎりとみそ汁"; // デフォルトの値

            if (time === "朝" && number ===0 ) {
                result = "しゃけおにぎりとみそ汁";
            } else if (time === "朝" && number ===1) {
                result = "しゃけおにぎりとコールスロー";    
            } else if (time === "朝"&& number === 2) {
                result = "いくらおにぎりと豚汁";
            }   else if (time ==="朝" && number === 3 ) {
                result = "いくらおにぎりとポテトサラダ";
            } else if (time === "朝"  && number === 4) {
                result = "昆布おにぎりとコンソメスープ";
            } else if (time === "朝" && number === 5) {
                result = "昆布おにぎりとマカロニサラダ";
            } else if (time === "昼"&& number === 0) {
                result = "梅おにぎりと野菜スープ";
            } else if (time === "昼"&& number === 1) {
                result = "梅おにぎりとレタスサラダ(胡麻ドレッシング)";
            }else if (time === "昼"&& number === 2) {
                result = "すじこおにぎりとオニオングラタンスープ";
            } else if (time === "昼"&& number === 3) {
                result = "すじこおにぎりとオニオンサラダ(イタリアンドレッシング)";
            }else if (time === "昼" && number === 4) {
                result = "ツナマヨネーズおにぎりとミネストローネ";
            } else if (time === "昼"&& number === 5) {
                result = "ツナマヨネーズおにぎりとレタスサラダ(青じそドレッシング)";
            } else if (time === "おやつに"&& number === 0) {
                result = "そぼろおにぎりとすいとん";
            } else if (time === "おやつに"&& number === 1) {
                result = "そぼろおにぎりとオニオンサラダ(和風ドレッシング)";
            } else if (time === "おやつに"&& number === 2) {
                result = "塩むすびとお吸い物";
            } else if (time === "おやつに"&& number === 3) {
                result = "塩むすびとチョレギサラダ";
            }else if (time === "おやつに" && number === 4) {
                result = "おかかおにぎりとクラムチャウダー";
            }else if (time === "おやつに" && number === 5 ) {
                result = "おかかおにぎりとフルーツサラダ";
            }

            document.getElementById('result-output').innerText = "今日のおにぎりの具材とサイドメニューは【" + result + "】にしましょう!";
        }

      
