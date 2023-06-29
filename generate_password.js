const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '0123456789'
const symbol = '`~!@$%^&*()-={}[]|;:"<>,.?/'

const showinfo = function (formValues) {
  let collection = []
  let newpassword = ''

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

  if (formValues.excludeCharacters) {
    collection = collection.filter(character => {
      if (formValues.excludeCharacters.includes(character)) {
        return false
      }
      return true
    })
  }

  for (let i = 0; i < formValues.passwordLength; i++) {
    const index = Math.floor(Math.random() * collection.length)
    newpassword += collection[index]
  }

  return newpassword
}


module.exports = {
  showinfo
}