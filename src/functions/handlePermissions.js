import checkPromiseExists from "./checkPromiseExists";
export default function handlePermissions(e) {
  e.preventDefault();
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
  } else if(checkPromiseExists()){
    console.log("Promise FTW!")
      Notification.requestPermission().then((perm) => {
        console.log(perm);
        if (perm === 'granted') {
          const notification = new Notification('Welcome to Notications');
          
          notification.addEventListener('show', (e) => {
            console.log(e);
          });
          
          notification.addEventListener('error', (e) => {
            console.log(e);
          });

        }
      });
  } else {
    console.log("Try a Callback!")
  }
  
}
