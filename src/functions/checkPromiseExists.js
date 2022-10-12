export default function checkPromiseExists(){
    try{
      Notification.requestPermission().then();
    } catch(e){
      return false;
    }
    return true;
  }