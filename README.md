# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# CHAT-SPACE DB設計
## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :messages
- has_many :users, through: :groups_users
- has_many :groups_users


## usersテーブル
|Column|Type|Option|
|------|----|------|
|e-mail|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

# messagesテーブル
|Column|Type|Option|
|------|----|------|
|text|text||
|image|text||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
