# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(nickname:  "admin",
             familyname: "管理",
             firstname: "者",
             familyname_kana: "かんり",
             firstname_kana: "しゃ",
             phone_number: "00000000000",
             PIN: Rails.application.credentials.PIN,
             email: Rails.application.credentials.EMAIL,
             password: Rails.application.credentials.PASSWORD,
             password_confirmation: Rails.application.credentials.PASSWORD,
             admin: true)