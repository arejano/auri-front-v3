type EventServiceInterface = {
  on():void;
  off():void;
  emit():void;
}

export class EventService {
  constructor(){
    console.log('Iniciando o event service')
  }

}
