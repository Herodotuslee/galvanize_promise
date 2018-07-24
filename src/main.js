
const FortuneTeller = require( 'galvanize-game-mechanics' ).FortuneTeller

function answerQuestions( questions ) {
  let questionArray = questions.split( "," )
  const promises = questionArray.map(question=>{return FortuneTeller.ask( question )})

  return Promise.all( promises ).then( results => {
    return results.map( ans => {
          console.log('ans',ans)
      return ans.response

    } )
  } )
}

console.log(answerQuestions('Hello Elijah,こんにちは,你好,Hola'))

module.exports = {
  answerQuestions
}
