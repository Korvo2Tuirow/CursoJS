var agora = new Date
var diasemana = agora.getDay()

/**
 * 0 =Domingo
 * 1 = Segunda
 * 2 = Terça
 * Quarta
 * Quinta
 * Sexta
 * Sábado
 */

console.log(diasemana)

switch(diasemana){

    case 0:
        console.log(`Domingo`)
        break

    case 1:
        console.log(`Segunda`)
        break
    
    case 2:
        console.log(`Terça`)
        break
        
    case 3:
        console.log(`Quarta`)
        break
            
    case 4:
        console.log(`Quinta`)
        break
                
        case 5:
        console.log(`Sexta`)
        break
    }
