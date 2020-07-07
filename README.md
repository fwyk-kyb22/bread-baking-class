# アプリ名
bread-baking-class
* パン教室のホームページ
* url http://176.34.2.180/
# 概要
* ブログ機能（パン教室の先生のみ編集、投稿、削除ができます。）
* コメント機能（新規登録した生徒さんのみコメントできます。）
* googleapiでmap表示
* simplecalendarでカレンダー表示（パン教室の先生のみ予定の編集、投稿、削除ができます。）
* ajaxでコメントを非同期通信
# 本番環境
aws
* テストアカウント（admin）
  * email: "admin@ad.min"
  * password:  "111111"
# 制作背景
* 姉が大手パン教室で働いているため。
* 顧客を意識して作りたかったため。
# DEMO

<img width="1228" alt="スクリーンショット 2020-07-02 19 51 55" src="https://user-images.githubusercontent.com/64791353/86350498-bde4d780-bc9d-11ea-8ee0-d0849026a4cf.png">
<img width="1228" alt="スクリーンショット 2020-07-02 19 52 09" src="https://user-images.githubusercontent.com/64791353/86350506-c2a98b80-bc9d-11ea-8567-1f97087ca3f6.png">
<img width="1228" alt="スクリーンショット 2020-07-02 19 52 38" src="https://user-images.githubusercontent.com/64791353/86350510-c3dab880-bc9d-11ea-91d1-1cbace600be0.png">
<img width="1228" alt="スクリーンショット 2020-07-02 19 52 49" src="https://user-images.githubusercontent.com/64791353/86350511-c4734f00-bc9d-11ea-8889-35cb69f0bcfa.png">
<img width="1228" alt="スクリーンショット 2020-07-02 19 53 00" src="https://user-images.githubusercontent.com/64791353/86350512-c50be580-bc9d-11ea-9493-c46d54080f59.png">


# 使用技術
* action text
* simple　calendar
* ajax(非同期通信)
* googlemap
* webpacker
* rspec
* devise
* toastr
* kaminari
# 今後実装したい機能
* Twitterを左側に表示（ソーシャルシェア）
* dooker
* payjpをつかって定期購入できる
* いいね機能
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
 ## meetings テーブル
|Column|Type|Options|
|------|----|-------|
|name|string||
|content|text||
|start_time|datetime||
# Author
 
* 大野絵美子
 
