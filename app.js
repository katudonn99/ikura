        function checkFortune() {
            var time = document.getElementById('time-select').value;
            var sidemenu = document.getElementById('sidemenu-select').value,;    

            var result = "梅とみそ汁"; // デフォルトの値

            if (time === "朝" &&&sidemenu === "汁物") {
                result = "しゃけとみそ汁";
            } else if (time === "朝" && sidemenu === "サラダ") {
                result = "しゃけとコールスロー";    
            } else if (time === "朝"&& sidemenu === "汁物" ) {
                result = "いくらと豚汁";
            }   else if (time === "朝"&& sidemenu === "サラダ" ) {
                result = "いくらとポテトサラダ";
            } else if (time === "朝"  && sidemenu === "汁物" ) {
                result = "昆布とコンソメスープ";
            } else if (time === "朝" && sidemenu === "サラダ" ) {
                result = "昆布とマカロニサラダ";
            } else if (time === "昼"&& sidemenu === "汁物" ) {
                result = "梅と野菜スープ";
            } else if (time === "昼"&& sidemenu === "サラダ") {
                result = "梅とレタスサラダ(胡麻ドレッシング)";
            }else if (time === "昼"&& sidemenu === "汁物") {
                result = "すじことオニオングラタンスープ";
            } else if (time === "昼"&& sidemenu === "サラダ") {
                result = "すじことオニオンサラダ(イタリアンドレッシング)";
            }else if (time === "昼" && sidemenu === "汁物") {
                result = "ツナマヨネーズとミネストローネ";
            } else if (time === "昼" && sidemenu === "サラダ") {
                result = "ツナマヨネーズとレタスサラダ(青じそドレッシング)";
            } else if (time === "おやつに"&& sidemenu === "汁物" ) {
                result = "そぼろとすいとん";
            } else if (time === "おやつに"&& sidemenu === "サラダ" ) {
                result = "そぼろとオニオンサラダ(和風ドレッシング)";
            } else if (time === "おやつに"&& sidemenu === "汁物") {
                result = "塩むすびとお吸い物";
            } else if (time === "おやつに"&&& sidemenu === "サラダ"  &&& number === 1) {
                result = "塩むすびとチョレギサラダ";
            }else if (time === "おやつに" && sidemenu === "汁物") {
                result = "おかかとクラムチャウダー";
            }else if (time === "おやつに" && sidemenu === "サラダ" ) {
                result = "おかかとフルーツサラダ";
            }

            document.getElementById('result-output').innerText = "今日のおにぎりの具材とサイドメニューは【" + result + "】にしましょう!";
        }


