import TimeService from "../Services/TimeService.js";
import store from "../store.js";

//Private
function _draw() {
  let time = store.State.time;
  let target = document.getElementById('clock');
  target.innerHTML = time.Template;
}

//Public
export default class TimeController {
  constructor() {
    store.subscribe("time", _draw);
    TimeService.update()
    setInterval(() => {
      TimeService.update()
    }, 250); // 1/4 a minute
  }
}