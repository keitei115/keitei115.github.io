const TRICKROOM_TURN = 5;
const TAILWIND_TURN = 4;
const WEATHER_TURN = 5;
const BARRIER_TURN = 5;
class Counter {
    constructor(con, disp, btn, ex_flag) {
        this.cnt = 0;
        this.con = con;
        this.disp = disp;
        this.btn = btn;
        this.flag = 0;
        this.ex_flag = ex_flag;
    }
    Set() {
        this.cnt = this.con;
        this.disp.innerHTML = this.cnt;
        this.disp.classList.add("first");
        if (this.ex_flag == 0) {
            this.flag = 1;
            this.btn.className = "start stop";
            this.btn.innerText = "解除";
        } else {
            this.flag = 2;
            this.btn.className = "start ex";
            this.btn.innerText = "延長";
        }
    }
    Count() {
        if (this.cnt == 0) {
            this.flag = 0;
            this.btn.className = "start";
            this.btn.innerText = "開始";
            this.disp.classList.remove("last");
        }
        if (this.cnt > 0) {
            this.cnt--;
            this.disp.innerHTML = this.cnt;
            if (this.cnt == 0) {
                this.disp.classList.remove("last");
                if (this.flag == 1 || this.flag == 0) {
                    this.flag = 0;
                    this.btn.className = "start";
                    this.btn.innerText = "開始";
                }
            }
        }
        if (this.cnt == 1) {
            this.disp.classList.remove("first");
            this.disp.classList.add("last");
        }
    }
    Reset() {
        this.cnt = 0;
        this.disp.innerHTML = this.cnt;
        this.flag = 0;
        this.btn.className = "start";
        this.btn.innerText = "開始";
        this.disp.classList.remove("first");
        this.disp.classList.remove("last");
    }
    Extention() {
        this.cnt += 3;
        if (this.cnt > 8) {
            this.cnt = 8;
        }
        this.disp.innerHTML = this.cnt;
        this.flag = 0;
        this.btn.className = "start";
        this.btn.innerText = "再開始";
        this.disp.classList.remove("last");
        this.disp.classList.add("first");
    }
    Push() {
        if (this.flag == 0) {
            this.Set()
        } else if (this.flag == 1) {
            this.Reset()
        } else if (this.flag == 2) {
            this.Extention()
        }
    }
}
var tailwind_front = new Counter(TAILWIND_TURN, disp_tailwind_front, btn_tailwind_front, 0);
var reflect_front = new Counter(BARRIER_TURN, disp_reflect_front, btn_reflect_front, 1);
var lightscreen_front = new Counter(BARRIER_TURN, disp_lightscreen_front, btn_lightscreen_front, 1);
var safeguard_front = new Counter(BARRIER_TURN, disp_safeguard_front, btn_safeguard_front, 0);
var swamp_front = new Counter(TAILWIND_TURN, disp_swamp_front, btn_swamp_front, 0);
var trickroom = new Counter(TRICKROOM_TURN, disp_trickroom, btn_trickroom, 0);
var weather = new Counter(WEATHER_TURN, disp_weather, btn_weather, 1);
var field = new Counter(WEATHER_TURN, disp_field, btn_field, 0);
var tailwind_back = new Counter(TAILWIND_TURN, disp_tailwind_back, btn_tailwind_back, 0);
var reflect_back = new Counter(BARRIER_TURN, disp_reflect_back, btn_reflect_back, 1);
var lightscreen_back = new Counter(BARRIER_TURN, disp_lightscreen_back, btn_lightscreen_back, 1);
var safeguard_back = new Counter(BARRIER_TURN, disp_safeguard_back, btn_safeguard_back, 0);
var swamp_back = new Counter(TAILWIND_TURN, disp_swamp_back, btn_swamp_back, 0);
btn_tailwind_front.onclick = function () { tailwind_front.Push(); }
btn_swamp_front.onclick = function () { swamp_front.Push(); }
btn_reflect_front.onclick = function () { reflect_front.Push(); }
btn_lightscreen_front.onclick = function () { lightscreen_front.Push(); }
btn_brick_break_front.onclick = function () { reflect_front.Reset(); lightscreen_front.Reset(); }
btn_safeguard_front.onclick = function () { safeguard_front.Push(); }
btn_trickroom.onclick = function () { trickroom.Push(); }
btn_weather.onclick = function () { weather.Push(); }
btn_field.onclick = function () { field.Push(); }
btn_tailwind_back.onclick = function () { tailwind_back.Push(); }
btn_swamp_back.onclick = function () { swamp_back.Push(); }
btn_reflect_back.onclick = function () { reflect_back.Push(); }
btn_lightscreen_back.onclick = function () { lightscreen_back.Push(); }
btn_brick_break_back.onclick = function () { reflect_back.Reset(); lightscreen_back.Reset(); }
btn_safeguard_back.onclick = function () { safeguard_back.Push(); }
btn_tailwind_front.oncontextmenu = function () { tailwind_front.Count(); }
btn_swamp_front.oncontextmenu = function () { swamp_front.Count(); }
btn_reflect_front.oncontextmenu = function () { reflect_front.Count(); }
btn_lightscreen_front.oncontextmenu = function () { lightscreen_front.Count(); }
btn_safeguard_front.oncontextmenu = function () { safeguard_front.Count(); }
btn_trickroom.oncontextmenu = function () { trickroom.Count(); }
btn_weather.oncontextmenu = function () { weather.Count(); }
btn_field.oncontextmenu = function () { field.Count(); }
btn_tailwind_back.oncontextmenu = function () { tailwind_back.Count(); }
btn_swamp_back.oncontextmenu = function () { swamp_back.Count(); }
btn_reflect_back.oncontextmenu = function () { reflect_back.Count(); }
btn_lightscreen_back.oncontextmenu = function () { lightscreen_back.Count(); }
btn_safeguard_back.oncontextmenu = function () { safeguard_back.Count(); }
btn_count.onclick = function () {
    tailwind_front.Count();
    reflect_front.Count();
    lightscreen_front.Count();
    trickroom.Count();
    weather.Count();
    tailwind_back.Count();
    reflect_back.Count();
    lightscreen_back.Count();
    safeguard_front.Count();
    safeguard_back.Count();
    swamp_front.Count();
    swamp_back.Count();
    field.Count();
    disp_turn.innerHTML++;
}
btn_reset.onclick = function () {
    tailwind_front.Reset();
    reflect_front.Reset();
    lightscreen_front.Reset();
    trickroom.Reset();
    weather.Reset();
    tailwind_back.Reset();
    reflect_back.Reset();
    lightscreen_back.Reset();
    safeguard_front.Reset();
    safeguard_back.Reset();
    swamp_front.Reset();
    swamp_back.Reset();
    field.Reset();
    disp_turn.innerHTML = 1;
}

//PWA対応
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/js/service-worker.js').then(function(){
	    console.log("Service Worker is registered!!");
    });
} else {
    console.log("Service Worker is not registered...");
}