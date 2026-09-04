# wat-system

`https://wat-cloud.com/dev/order/home` のホーム画面を参考に見た目を再現した、
プレーンHTML/CSS/JSのフロントエンド。バックエンドはなく、静的ファイルのみ。

## 構成

- `index.html` — ホーム画面（実装済みのレイアウト）
- `pages/placeholder.html` — 未実装画面用の共通プレースホルダー。
  `?key=...&title=...` のクエリパラメータでサイドバーのハイライトとページタイトルを切り替える。
  ホーム画面のカードやサイドバーのリンクは、すべてこのページに遷移する。
- `js/nav-data.js` — サイドバーメニュー項目の定義（`key` と `label`）。
- `js/layout.js` — `nav-data.js` を元にサイドバーの `<ul id="sidebar-nav">` を描画し、
  現在ページ（`document.body.dataset.activeKey`）に応じてハイライトする。
- `css/style.css` — 共通スタイル。

## 実行方法

ルート相対パス（`/css/...`、`/js/...`、`/pages/...`）を使っているため、
`file://` で直接開くと壊れる。プロジェクトルートで簡易サーバーを立てて開くこと。

```
cd projects/wat-system
python3 -m http.server 8000
# または: npx serve .
```

その後 `http://localhost:8000/` を開く。

## 今後の実装

新しい画面を実装する際は、対応する `key` を `pages/placeholder.html` から
専用のHTMLファイルに切り出し、`index.html` / `pages/placeholder.html` 内の該当リンクを
その新しいファイルへのパスに差し替える。
