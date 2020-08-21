class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :timeoutable
  has_many :comments       
  has_many :articles, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :reservations
  has_many :schools, through: :reservations

  validates :nickname,:familyname,:firstname,:familyname_kana,:firstname_kana,:phone_number,:PIN,presence: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, {presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }}
  validates :familyname,:firstname, format: { with: /\A[ぁ-んァ-ン一-龥]/ , message: "全角のみ使用できます！"}
  validates :familyname_kana,:firstname_kana, format: { with: /\A[ぁ-んー－]+\z/ , message: "全角ひらがなのみ使用できます！"}
  STATUS_VALUES = ['mfsadkljfe']
  validates :PIN, inclusion: { in: STATUS_VALUES , message: "暗証番号が間違ってます！"}
  validates :phone_number, format: { with: /\A\d{10}\z|\A\d{11}\z/ , message: "ハイフンなしでお願いします！10桁or11桁になってますか？ご確認お願いします！"}

  def already_liked?(article)
    self.likes.exists?(article_id: article.id)
  end
  
end
