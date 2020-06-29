# アプリ名
bread-baking-class
* パン教室のホームページ
* url http://176.34.2.180/
# 概要
* ブログ機能（パン教室の先生のみ編集、投稿、削除ができます。）
* コメント機能（新規登録した生徒さんのみコメントできます。）
* googleapiでmap表示
* googleカレンダーを表示
# 本番環境
aws
* テストアカウント（admin）
  * email: "admin@ad.min"
  * password:  "111111"
# 制作背景
* 姉が大手パン教室で働いているため。
* 顧客を意識して作りたかったため。
# DEMO
<img width="1431" alt="スクリーンショット 2020-06-28 15 13 40" src="https://user-images.githubusercontent.com/64791353/85974565-c5dc1780-ba10-11ea-9618-605cf477083a.png">
<img width="1431" alt="スクリーンショット 2020-06-28 15 14 04" src="https://user-images.githubusercontent.com/64791353/85974574-cb396200-ba10-11ea-81b2-96f6ae0c8394.png">
<img width="1210" alt="スクリーンショット 2020-06-20 23 47 51" src="https://user-images.githubusercontent.com/64791353/85974576-cbd1f880-ba10-11ea-8475-add62919b206.png">

# 使用技術
* action text
* googleカレンダー
* googlemap
* webpack
* rspec
* devise
* toastr
* kaminari
# 今後実装したい機能
* Twitterを左側に表示（ソーシャルシェア）
* dooker
* payjpをつかって定期購入できる
* いいね機能
* comentをajaxで非同期通信
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
 
