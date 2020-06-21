FactoryBot.define do

  factory :user do
    nickname              {"abe"}
    email                 {"kkk@gmail.com"}
    password              {"00000000"}
    password_confirmation {"00000000"}
    familyname            {"山田"}
    firstname             {"太郎"}
    familyname_kana       {"やまだ"}
    firstname_kana        {"たろう"}
    phone_number          {"00000000000"}  
    PIN                   {"mfsadkljfe"}  
  end

end