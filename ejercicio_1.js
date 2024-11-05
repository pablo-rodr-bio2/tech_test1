/*
  * Ejercicio 1
  * Los problemas que detecto son los siguientes:
  * 1. la función forEach es incorrecta, se le está pasando como primer argumento la lista entera,
  * cuando justamente se utiliza esta función para poder trabajar con los elementos individuales 
  * de la lista
  * 2. las condiciones usando typeof son siempre falsas: devuelve un string con el 
  * nombre del tipo del objeto, no una referencia al tipo. Sería más lógico usar instanceof
  * 3. Aunque no sea un error, si en el futuro se quisiera poner más tipos de servicios
  * exclusivos entre sí, yo quitaría el else if
*/

// class RegisteredUser{

//   constructor(services = []) {
//     this.services = services;
//   }

//   getTotal(){
//     let total = 0;

//     this.services.forEach(service => {
//       let multimediaContent = service.getMultimediaContent();

//       if(service instanceof StreamingService) {
//         total += multimediaContent.streamingPrice;
//       }
      
//       if(service instanceof DownloadService) {
//         total += multimediaContent.downloadPrice;
//       }

//       if(multimediaContent instanceof PremiumContent) {
//         total += multimediaContent.additionalFee;
//       }
//     })

//     return total
//   }
// }

// Aplicación de principios SOLID:
// 1. SRP: La clase RegisteredUser se encarga de demasiadas ConstantSourceNode, realizando el cálculo de
// los precios de todos los servicios y de los contenidos multimedia. Sería mejor separar la lógica de 
// cálculo de precios en sus propias clases
// 2. OCP: cada vez que se añada un tipo de servicio habría que modificar la clase RegisteredUser, lo que
// violaría el principio de abierto a extender pero cerrado a modificar. La solución sería parecida al 
//  primer punto, crear clases para cada servicio, que calculen ellas el precio y lo devuelvan a RegisteredUser


class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    const calculator = new ServicePricingCalculator();
    return calculator.calculateTotal(this.services);
  }
}

class ServicePricingCalculator {
  calculateTotal(services) {
    return services.reduce((total, service) => total + service.getPrice(), 0);
  }
}

class StreamingService {
  constructor(multimediaContent) {
    this.multimediaContent = multimediaContent;
  }

  getPrice() {
    return this.multimediaContent.streamingPrice + this.multimediaContent.getAdditionalFee();
  }
}

class DownloadService {
  constructor(multimediaContent) {
    this.multimediaContent = multimediaContent;
  }

  getPrice() {
    return this.multimediaContent.downloadPrice + this.multimediaContent.getAdditionalFee();
  }
}
