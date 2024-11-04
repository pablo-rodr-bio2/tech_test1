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

class RegisteredUser{

  constructor(services = []) {
    this.services = services;
  }

  getTotal(){
    let total = 0;

    this.services.forEach(service => {
      let multimediaContent = service.getMultimediaContent();

      if(service instanceof StreamingService) {
        total += multimediaContent.streamingPrice;
      }
      
      if(service instanceof DownloadService) {
        total += multimediaContent.downloadPrice;
      }

      if(multimediaContent instanceof PremiumContent) {
        total += multimediaContent.additionalFee;
      }
    })

    return total
  }
}