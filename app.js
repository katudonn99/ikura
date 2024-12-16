        function checkFortune() {
            var time = document.getElementById('time-select').value;
            var sidemenu = document.getElementById('sidemenu-select').value,;    
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "梅"; // デフォルトの値

            if (time === "朝" && sidemenu === "汁物"&& number === 0) {
                result = "しゃけとみそ汁";
            } else if (time === "朝" && sidemenu === "サラダ"&& number === 0) {
                result = "しゃけと";    
            }
            else if (time === "朝" && number === 1) {
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

            document.getElementById('result-output').innerText = "今日のおにぎりの具材とサイドメニューは【" + result + "】にしましょう!";
        }




メモ
sidemenu
  汁物　　みそ汁
　　　　　豚汁
　　　　　コンソメスープ
　　　　　野菜スープ
　　　　　オニオングラタンスープ
　　　　　ミネストローネ
　　　　　すいとん
　　　　　お吸い物
　　　　　クラムチャウダー

サラダ　
・コールスロー
・ポテトサラダ
・マカロニサラダ
・レタスサラダ(胡麻ドレッシング)
・オニオンサラダ(イタリアンドレッシング)
・レタスサラダ(青じそドレッシング)
・オニオンサラダ(和風ドレッシング)
・チョレギサラダ
・フルーツサラダ
