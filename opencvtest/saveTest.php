<?php

// 保存先のディレクトリ
$saveDirectory = "uploads/";

// ディレクトリが存在しない場合は作成
if (!is_dir($saveDirectory))
{
    mkdir($saveDirectory, 0777, true);

}

// POSTデータを受け取る
$filename = $_POST['name'] ?? 'default.txt';
$content = $_POST['content'] ?? '';

// ファイルパスを設定
$filePath = $saveDirectory . basename($filename);

// 受信したものを取り出す
$fileGetAA = file_get_contents("php://input");

$data = base64_decode($fileGetAA);

$result = file_put_contents($filePath, $data, LOCK_EX);  //書き込み中のファイルをロック
// ファイルを保存
//$result = file_put_contents($filePath, $content, LOCK_EX);  //書き込み中のファイルをロック
if($result == 0)
{
    echo "Failed to save file. !!";
}
else
{
    echo "File saved successfully. " . $result . " Byte\n";
}
?>
