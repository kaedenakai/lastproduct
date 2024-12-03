<?php
// DB接続情報
$host = 'localhost';
$dbname = 'your_database_name';
$user = 'your_database_user';
$password = 'your_database_password';

// フォームからデータを取得
$email = $_POST['loginEmail'];
$password_plain = $_POST['loginPassword'];

try {
    // データベースに接続
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // ユーザーを検索
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password_plain, $user['password'])) {
        // セッションを開始し、ログイン成功
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        
        echo "ログインに成功しました！";
        // 必要に応じて、リダイレクトコードを追加します（例：ホームページにリダイレクト）
    } else {
        echo "メールアドレスまたはパスワードが正しくありません。";
    }
} catch (PDOException $e) {
    echo "エラー: " . $e->getMessage();
}
?>
