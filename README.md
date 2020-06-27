# アプリ名
bread-baking-class
パン教室のホームページ
# 概要
ブログ機能（パン教室の先生のみ編集、投稿、削除ができます。）
コメント機能（新規登録した生徒さんのみコメントできます。）
googleapiでmap表示
googleカレンダーを表示
# 本番環境
aws
テストアカウント（admin）
  email: "admin@ad.min"
  password:  "111111"
# 制作背景
姉が大手パン教室で働いているため。
顧客を意識して作りたかったため。
# DEMO

# 使用技術
action text
googleカレンダー
googlemap
webpack
rspec
devise
toastr
kaminari
# 今後実装したい機能
先生のTwitterを左側に表示（ソーシャルシェア）
dooker
payjpをつかって定期購入できる
いいね機能
# DB設計
## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|password|string|null: false|
|nickname|string|null: false|
|familyname|string|null: false|
|firstname|string|null: false|
|familyname_kana|string|null: false|
|firstname_kana|string|null: false|
|phone_number|string|null: false|
|PIN|string|null: false|
|admin|boolean|default: false|
### Association
- has_many :comments

## Comments テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true |
|content|string|null: false|

### Association
- belongs_to :user

## articles テーブル
|Column|Type|Options|
|------|----|-------|
|title|string||

actiontextのdb設計は省略させていただきます

# Author
 
* 大野絵美子
 
