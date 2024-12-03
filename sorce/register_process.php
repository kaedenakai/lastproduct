<?php
// DB接続情報
$host = 'localhost';
$dbname = 'your_database_name';
$user = 'your_database_user';
$password = 'your_database_password';

// フォームからデータを取得
$username = $_POST['username'];
$email = $_POST['email'];
$password_plain = $_POST['password'];

// パスワードをハッシュ化
$password_hashed = password_hash($password_plain, PASSWORD_DEFAULT);

try {
    // データベースに接続
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // ユーザーがすでに存在するかチェック
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo "このメールアドレスはすでに登録されています。";
    } else {
        // 新しいユーザーを登録
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password_hashed);
        $stmt->execute();

        echo "登録が完了しました！";
    }
} catch (PDOException $e) {
    echo "エラー: " . $e->getMessage();
}
?>
