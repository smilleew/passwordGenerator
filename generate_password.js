const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '0123456789'
const symbol = '`~!@$%^&*()-={}[]|;:"<>,.?/'

const showinfo = function (length, lowercase, uppercase, numbers, symbols, excludeCharacters) {
  let collection = []
  let newpassword = ''

  if (lowercase === 'on') {
    collection = collection.concat(...lower)
  } 

  if (uppercase === 'on') {
    collection = collection.concat(...upper)
  }  

  if (numbers === 'on') {
    collection = collection.concat(...number)
  }  

  if (symbols === 'on') {
    collection = collection.concat(...symbol)
  }

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * collection.length)
    newpassword += collection[index]
  }

  return newpassword
}


module.exports = {
  showinfo
}