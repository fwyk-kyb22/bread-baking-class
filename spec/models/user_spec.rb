require 'rails_helper'

describe 'user登録テスト', model: User do 
  describe '#create' do

    it "nicknameとemail、passwordとpassword_confirmationが存在すれば登録できること" do
      user = build(:user)
      expect(user).to be_valid
    end

    it "nicknameがない場合は登録できないこと" do
      user = build(:user, nickname: nil)
      user.valid?
      expect(user.errors[:nickname]).to include("を入力してください")
    end

    it "emailがない場合は登録できないこと" do
      user = build(:user, email: nil)
      user.valid?
      expect(user.errors[:email]).to include("を入力してください")
    end

    it "emailが@を含まないと登録できないこと" do
      user = build(:user, email: "aaa.aaa")
      user.valid?
      expect(user.errors[:email]).to include("は不正な値です")
    end

    it "emailがドメインを含まないと登録できないこと" do
      user = build(:user, email: "aaa@aaa")
      user.valid?
      expect(user.errors[:email]).to include("は不正な値です")
    end

    it "passwordがない場合は登録出来ないこと" do
      user = build(:user, password: nil)
      user.valid?
      expect(user.errors[:password]).to include("を入力してください")
    end

    it "passwordが存在してもpassword_confirmationがない場合は登録できないこと" do
      user = build(:user, password_confirmation: "")
      user.valid?
      expect(user.errors[:password_confirmation]).to include("とパスワードの入力が一致しません")
    end

      it " 重複したemailが存在する場合は登録できないこと " do
        user = create(:user)
        another_user = build(:user, email: user.email)
        another_user.valid?
        expect(another_user.errors[:email]).to include("はすでに存在します")
      end

      it " passwordが6文字以上であれば登録できること " do
        user = build(:user, password: "000000", password_confirmation: "000000")
        expect(user).to be_valid
      end

      it " passwordが5文字以下であれば登録できないこと " do
        user = build(:user, password: "00000", password_confirmation: "00000")
        user.valid?
        expect(user.errors[:password]).to include("は6文字以上で入力してください")
      end
      it "苗字と名前、苗字のふりがな、名前のふりがな、生年月日が存在すれば登録できること" do
        user = build(:user)
        expect(user).to be_valid
      end
  
      it " 苗字がない場合は登録できないこと" do
        user = build(:user, familyname: nil)
        user.valid?
        expect(user.errors[:familyname]).to include("を入力してください")
      end
  
      it "名前がない場合は登録できないこと" do
        user = build(:user, firstname: nil)
        user.valid?
        expect(user.errors[:firstname]).to include("を入力してください")
      end

      it "苗字のふりがながない場合は登録できないこと" do
        user = build(:user, familyname_kana: nil)
        user.valid?
        expect(user.errors[:familyname_kana]).to include("を入力してください")
      end
  
      it "名前のふりがながない場合は登録できないこと" do
        user = build(:user, firstname_kana: nil)
        user.valid?
        expect(user.errors[:firstname_kana]).to include("を入力してください")
      end

      it " 苗字が全角でなかったら登録できないこと" do
        user = build(:user, familyname: "aaa")
        user.valid?
        expect(user.errors[:familyname]).to include("全角のみ使用できます！")
      end

      it "名前が全角でなかったら登録できないこと" do
        user = build(:user, familyname: "aaa")
        user.valid?
        expect(user.errors[:familyname]).to include("全角のみ使用できます！")
      end

      it "苗字のふりがなが全角ひらがなでなかったら登録できないこと" do
        user = build(:user, familyname_kana: "aaa")
        user.valid?
        expect(user.errors[:familyname_kana]).to include("全角ひらがなのみ使用できます！")
      end

      it "名前のふりがなが全角ひらがなでなかったら登録できないこと" do
        user = build(:user, firstname_kana: "aaa")
        user.valid?
        expect(user.errors[:firstname_kana]).to include("全角ひらがなのみ使用できます！")
      end
  
      it "電話番号がなかったら登録できないこと" do
        user = build(:user, phone_number: "")
        user.valid?
        expect(user.errors[:phone_number]).to include("を入力してください")
      end

      it "電話番号が9桁だと登録できないこと" do
        user = build(:user, phone_number: "111111111")
        user.valid?
        expect(user.errors[:phone_number]).to include("ハイフンなしでお願いします！10桁or11桁になってますか？ご確認お願いします！")
      end
  
      it "電話番号が12桁だと登録できないこと" do
        user = build(:user, phone_number: "111111111111")
        user.valid?
        expect(user.errors[:phone_number]).to include("ハイフンなしでお願いします！10桁or11桁になってますか？ご確認お願いします！")
      end

      it "電話番号が数字以外だと登録できないこと" do
        user = build(:user, phone_number: "aaaaaaaaaa")
        user.valid?
        expect(user.errors[:phone_number]).to include("ハイフンなしでお願いします！10桁or11桁になってますか？ご確認お願いします！")
      end

      it "PINがないと登録できないこと" do
        user = build(:user, PIN: "")
        user.valid?
        expect(user.errors[:PIN]).to include("を入力してください")
      end

      it "PINが指定と違うと登録できないこと" do
        user = build(:user, PIN: "asfefdse")
        user.valid?
        expect(user.errors[:PIN]).to include("暗証番号が間違ってます！")
      end

    end
  end
