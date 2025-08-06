<?php

// フォームから送信されたデータを取得
$mail = $_POST['mail'];
$sei = $_POST['sei'];
$mei = $_POST['mei'];
$gender = $_POST['gender'];
$content = $_POST['content'];

// 件名と本文を作成
$subject = "ウェブサイトからの問い合わせ";
$body = "以下の内容でお問い合わせがありました。\n\n";
$body .= "メールアドレス： " . $mail . "\n";
$body = "氏名： " . $sei . " " . $mei . "\n";
$body .= "性別： " . $gender . "\n";
$body .= "問い合わせ内容：\n" . $content;

// 送信先のメールアドレス
$to = "info@alpharastest.shop"; // ここに送信先のメールアドレスを入力してください

// ヘッダー情報
$headers = "From: info@alpharastest.shop \n"; // ここに送信元のアドレスを入力してください
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// メール送信
if (mb_send_mail($to, $subject, $body, $headers)) {
    echo "メールが正常に送信されました。";
} else {
    echo "メールの送信に失敗しました。";
}

?>