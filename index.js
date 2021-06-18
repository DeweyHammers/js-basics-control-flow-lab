function scuberGreetingForFeet(value){
   if (value <= 400) {
     return 'This one is on me!'
   } else if (value >= 2500){
    return 'No can do.'
   } else {
     return 'I will gladly take your thirty bucks.'
   }
}

function ternaryCheckCity(value){
  return (value === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(value){
  switch(value){
    case 'generous':
      return 'Thank you so much.'
      break
    case 'not as generous':
      return 'Thank you.'
      break
    case 'thanks for everything':
      return 'Bye.'
  }
}