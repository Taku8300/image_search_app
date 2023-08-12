# image_search_app

unsplashのAPIを用いた簡易的な画像検索アプリ

## インストール

リポジトリをクローン

```
git clone https://github.com/IESKA2KHobbyLink/HobbyLinks.git
```

## image_search_app

#### image_search_app の環境構築

```
npm install
```

unsplah API KEY を保存するため　.env ファイル作成

```
VITE_MAP_BOX_API=<あなたのunsplash API KEY>
```

#### CLient 　サーバー開始

```
npm run dev
```

## Server

### Server の環境構築

- env.example ファイルを.env にコピーして、データベースの認証情報を更新する
- MySQL は autocommit (自動コミットモード)を無効化する方は　 autocommit を設定してください。

```
cd server
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

#### Server 　サーバー開始

```
php artisan serve
```

### シーダーを使用してデータを設定する

```
php artisan db:seed
```

## webSocket

### webSocket サーバー環境構築

```
cd web-socket
npm install

```

#### webSocket サーバー開始

```
npm run dev
```
 




