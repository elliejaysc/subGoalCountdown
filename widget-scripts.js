const d = document;
const goalValue = d.querySelector(".sub-goal__goal-number");
let subs, goal, lastDigit, countDown, notification = false, clearCmd;

let getLastDigit = (str, num)=>{
  return num.toString();
};

window.addEventListener('onWidgetLoad', function (obj) {
  
  	const fieldData = obj.detail.fieldData;
    const data = obj.detail.session.data;
  	goal = fieldData.subGoal;
  	clearCmd = fieldData.clearCmd || "!clearNotice";
  	subs = data["subscriber-total"].count;
  	lastDigit = +[...getLastDigit`${subs}`].pop();
  	
  	countDown = goal - lastDigit == goal ? goal : goal - lastDigit;
  	goalValue.innerText = countDown;
});

window.addEventListener('onEventReceived', function (obj) {
    if (!obj.detail.event) {
      return;
    }
  
    const listener = obj.detail.listener.split("-")[0];
    const event = obj.detail.event;
  
	if (listener === 'subscriber') {
  		//countDown = countDown - 1 == 0 ? goal : countDown - 1;
      	if(countDown - 1 == 0) {
          countDown = goal;
          notification = true;
          goalValue.classList.add("notice"); 
        }
      	else {
          countDown = countDown - 1;
        }
      	goalValue.innerText = countDown;
    }
  
  	if (listener === 'message' && obj.detail.event.data.text.trim().toLowerCase() === clearCmd.trim().toLowerCase() && notification) {
      	console.log("This will clear the notice!");
      	goalValue.classList.remove("notice");
    }	
});

