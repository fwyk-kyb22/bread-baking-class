# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(nickname:  "kanrisya",
             familyname: "kanri",
             firstname: "kanri",
             familyname_kana: "kanri",
             firstname_kana: "kanri",
             phone_number: "000-0000-0000",
             PIN: " mfsadkljfe",
             email: "kanri@kanri",
             password:  "111111",
             password_confirmation: "111111",
             admin: true)