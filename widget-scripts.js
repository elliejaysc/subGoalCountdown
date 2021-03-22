const d = document;
const goalValue = d.querySelector(".sub-goal__goal-number");
let subs, goal, lastDigit, countDown, notification = false, clearCmd, fieldData;
let cdObj = {};

let getLastDigit = (str, num)=>{
  return num.toString();
};

window.addEventListener('onWidgetLoad', function (obj) {
  
  	fieldData = obj.detail.fieldData;
  	clearCmd = fieldData.clearCmd || "!clearNotice";
  	goal = fieldData.subGoal;
  	
	SE_API.store.get('lephCounter').then(obj => {
      	
      	if(obj === null) {
          
          countDown = cdObj.value = goal;
          SE_API.store.set('lephCounter', cdObj);	
        }
      	else {
		  countDown = obj.value;
        }

      	goalValue.innerText = countDown;
	});
});

window.addEventListener('onEventReceived', function (obj) {
    if (!obj.detail.event) {
      return;
    }
  
    const listener = obj.detail.listener.split("-")[0];
    const event = obj.detail.event;
  
	if (listener === 'subscriber') {
      
      	if(countDown - 1 == 0) {
          countDown = goal;
          notification = true;
          goalValue.classList.add("notice"); 
        }
      	else {
          countDown = countDown - 1;
        }

      	goalValue.innerText = cdObj.value = countDown;
      	SE_API.store.set('lephCounter', cdObj);
    }
  
  	if (listener === 'message' && obj.detail.event.data.text.trim().toLowerCase() === clearCmd.trim().toLowerCase() && notification) {
      	goalValue.classList.remove("notice");
    }
  
  	if (listener === 'message' && obj.detail.event.data.text.trim().toLowerCase() === "!reset") {
      	goalValue.innerText = cdObj.value = goal;
      	SE_API.store.set('lephCounter', cdObj);
    }
});

