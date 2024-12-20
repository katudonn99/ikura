        function checkFortune() {
            var time = document.getElementById('time-select').value;
            var sidemenu = document.getElementById('sidemenu-select').value,;    
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "梅"; // デフォルトの値

            if (time === "朝" && sidemenu === "汁物"&& number === 0) {
                result = "しゃけとみそ汁";
            } else if (time === "朝" && sidemenu === "サラダ"&& number === 0) {
                result = "しゃけとコールスロー";    
            } else if (time === "朝"&& sidemenu === "汁物" && number === 1) {
                result = "いくらと豚汁";
            }   else if (time === "朝"&& sidemenu === "サラダ" && number === 1) {
                result = "いくらとポテトサラダ";
            } else if (time === "朝" && && sidemenu === "汁物" number === 2) {
                result = "昆布とコンソメスープ";
            } else if (time === "朝" && && sidemenu === "サラダ" number === 2) {
                result = "昆布とマカロニサラダ";
            } else if (time === "昼"&& sidemenu === "汁物"  && number === 0) {
                result = "梅と野菜スープ";
            } else if (time === "昼"&& sidemenu === "サラダ"  && number === 0) {
                result = "梅とレタスサラダ(胡麻ドレッシング)";
            }else if (time === "昼"&& sidemenu === "汁物"  && number === 1) {
                result = "すじことオニオングラタンスープ";
            } else if (time === "昼"&& sidemenu === "サラダ"  && number === 1) {
                result = "すじことオニオンサラダ(イタリアンドレッシング)";
            }else if (time === "昼" && sidemenu === "汁物" && number === 2) {
                result = "ツナマヨネーズとミネストローネ";
            } else if (time === "昼" && sidemenu === "サラダ" && number === 2) {
                result = "ツナマヨネーズとレタスサラダ(青じそドレッシング)";
            } else if (time === "おやつに"&& sidemenu === "汁物"  && number === 0) {
                result = "そぼろとすいとん";
            } lse if (time === "おやつに"&& sidemenu === "サラダ"  && number === 0) {
                result = "そぼろとオニオンサラダ(和風ドレッシング)";
            } else if (time === "おやつに"&& sidemenu === "汁物"  && number === 1) {
                result = "塩むすびとお吸い物";
            } else if (time === "おやつに"&& sidemenu === "サラダ"  && number === 1) {
                result = "塩むすびとチョレギサラダ";
            }else if (time === "おやつに" && sidemenu === "汁物" && number === 2) {
                result = "おかかとクラムチャウダー";
            }else if (time === "おやつに" && sidemenu === "サラダ" && number === 2) {
                result = "おかかとフルーツサラダ";
            }

            document.getElementById('result-output').innerText = "今日のおにぎりの具材とサイドメニューは【" + result + "】にしましょう!";
        }




メモ
sidemenu
  汁物　 　みそ汁
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
