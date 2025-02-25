# WEBブラウザ3Dモデルコンフィグレータ（M）

- ローカルWEBサーバーチェック
    - 1.Node.jsインストール
    - 2.コマンドコンソールでフォルダ移動 cd
    - 3.コマンド[npx http-server]実行
    - 4.表示されたURLOpen（デフォルト：http://127.0.0.1:8080)

- シーン内ホットスポットURL設定
    - config-url.json内のURL先をカスタマイズできます。
        これにより、シーン内のホットスポットをクリック/タップしたときのURL遷移先が変更できます。

        - 例：変更前
          ```
            {
                "targetURLs": [
                    "https://www.ddstudio.co.jp/",
                    "https://www.ddstudio.co.jp/jp/jp_topics/2024.html",
                    "https://www.ddstudio.co.jp/jp/jp_gallary/gallary.html"
                ]
                ,"cameraAppURLs":[
                    "https://www.ddstudio.co.jp/"
                ]
            }


            ```
        - 変更後
            ```
            {
                "targetURLs": [
                    "https://www.google.co.jp/",                    //説明アプリのURLを記述
                    "https://www.youtube.com/?app=desktop&hl=ja",   //説明アプリのURLを記述
                    "https://www.yahoo.co.jp/"                      //説明アプリのURLを記述
                ]
                ,"cameraAppURLs":[
                    "https://www.ddstudio.co.jp/"　//カメラアプリのURLを記述
                ]
            }
            ```
