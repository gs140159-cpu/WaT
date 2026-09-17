# wat-system

`https://wat-cloud.com/dev/order/home` のホーム画面を参考に見た目を再現した、
プレーンHTML/CSS/JSのフロントエンド。バックエンドはなく、静的ファイルのみ。

## 構成

- `index.html` — ホーム画面（実装済みのレイアウト）
- `pages/placeholder.html` — 未実装画面用の共通プレースホルダー。
  `?key=...&title=...` のクエリパラメータでサイドバーのハイライトとページタイトルを切り替える。
  未実装のカード・サイドバーリンクは、すべてこのページに遷移する。
- `pages/hp-stock-report.html` — 在庫レポート画面（実装済み）。ホーム画面の
  「在庫検索」カードから遷移する。絞り込みフォーム（製品保管場所/メーカー名/
  製品名/品番/アラートのみ表示）と、Excel出力相当の列を持つ一覧テーブルを持つ。
  データは `STOCK_ROWS`（ページ内にインラインで定義）のモックで、クライアント側
  JSでフィルタリングしている。滅菌期限が近い行は `row-alert` クラスで赤くハイライト。
- `pages/usage-report.html` — 使用報告画面（実装済み）。サイドバーの「使用報告」
  から遷移する。要件は `docs/requirements/usage-report-origin-facility.md` の
  F-4/F-5/F-6（使用日・施設入力 → 製品入力方法選択 → リスト/スキャンで製品選択
  → (同一ロットで最初の入庫施設が複数ある場合のみ)入庫先選択ボトムシート →
  数量入力 → 確認 → 確定 → 完了、のウィザード形式）。
  モックデータは `PRODUCT_STOCK`（ページ内にインライン定義）で、各製品が
  `firstFacility`（最初の入庫施設。在庫移動があっても上書きされず引き継がれる
  想定＝F-1/F-3）を持つ。確認画面の「入 庫 先：」行がF-6の新設項目（`NEW`バッジ付き）。
- `js/nav-data.js` — サイドバーメニュー項目の定義（`key`、`label`、任意で`href`）。
  `href` を指定すると placeholder ではなくそのURLに直接遷移する。
- `js/layout.js` — `nav-data.js` を元にサイドバーの `<ul id="sidebar-nav">` を描画し、
  現在ページ（`document.body.dataset.activeKey`）に応じてハイライトする。
- `css/style.css` — 共通スタイル。
- `docs/requirements/` — 機能要件定義書（Markdown）を保存する場所。

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
