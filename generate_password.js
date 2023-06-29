const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '0123456789'
const symbol = '`~!@$%^&*()-={}[]|;:"<>,.?/'

const showinfo = function (formValues) {
  //隨機抽選項目
  let collection = []
  //新密碼
  let newpassword = ''

  //如果checkbox有勾選就將相關的資料放入抽選項目中
  if (formValues.lowercaseCharacters === 'on') {
    collection = collection.concat(...lower)
  } 

  if (formValues.uppercaseCharacters === 'on') {
    collection = collection.concat(...upper)
  }  

  if (formValues.numbers === 'on') {
    collection = collection.concat(...number)
  }  

  if (formValues.symbols === 'on') {
    collection = collection.concat(...symbol)
  }

  //刪除不想要的項目
  if (formValues.excludeCharacters) {
    collection = collection.filter(character => {
      if (formValues.excludeCharacters.includes(character)) {
        return false
      }
      return true
    })
  }

  //如果沒有隨機項目不產生密碼
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  //依照數量隨機產生密碼
  for (let i = 0; i < formValues.passwordLength; i++) {
    const index = Math.floor(Math.random() * collection.length)
    newpassword += collection[index]
  }

  return newpassword
}


module.exports = {
  showinfo
}