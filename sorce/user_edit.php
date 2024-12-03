<?php
session_start();

// ログイン確認
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

// DB接続情報
$host = 'localhost';
$dbname = 'your_database_name';
$user = 'your_database_user';
$password = 'your_database_password';

try {
    // データベースに接続
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 現在のユーザー情報を取得
    $stmt = $pdo->prepare("SELECT username, email, bio, interests FROM users WHERE id = :id");
    $stmt->bindParam(':id', $_SESSION['user_id']);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo "ユーザー情報が見つかりません。";
        exit();
    }
} catch (PDOException $e) {
    echo "エラー: " . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>ユーザー情報編集</title>
    <style>
        /* 簡単なスタイルを追加 */
        body { font-family: Arial, sans-serif; }
        .form-container { width: 300px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
        label { display: block; margin-top: 10px; }
        input, textarea, button { width: 100%; margin-top: 5px; padding: 8px; font-size: 16px; }
        button { background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background-color: #45a049; }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>ユーザー情報編集</h2>
        <form action="user_edit_process.php" method="POST">
            <label for="username">ユーザー名</label>
            <input type="text" id="username" name="username" value="<?= htmlspecialchars($user['username']) ?>" required>

            <label for="email">メールアドレス</label>
            <input type="email" id="email" name="email" value="<?= htmlspecialchars($user['email']) ?>" required>

            <label for="bio">自己紹介</label>
            <textarea id="bio" name="bio" rows="4"><?= htmlspecialchars($user['bio']) ?></textarea>

            <label for="interests">興味・関心</label>
            <input type="text" id="interests" name="interests" value="<?= htmlspecialchars($user['interests']) ?>">

            <button type="submit">保存</button>
        </form>
    </div>
</body>
</html>
