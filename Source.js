window.syncFetch = function syncFetch(url) {
    const xhr = new XMLHttpRequest();
    // Добавляем уникальный параметр для обхода кеширования
    const uniqueUrl = `${url}?_=${new Date().getTime()}`;
    xhr.open("GET", uniqueUrl, false);
    xhr.send();
    if (xhr.status === 200) {
        return xhr.responseText;
    } else {
        throw new Error(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
}
var i = document.createElement('iframe');
i.style.display = 'none';
document.body.appendChild(i);
window.console_o = i.contentWindow.console;//restoring orig console
window.console_o.colored=function s(text) {window.console_o.log(`%c ${text} `, 'background: #222; color: #bada55;border-radius:15px');}
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        for (const addedNode of mutation.addedNodes) {
            if (
                addedNode.tagName === 'SCRIPT' &&
                addedNode.src.includes('.main.') &&
                addedNode.defer
            ) {

                // Останавливаем выполнение скрипта
                addedNode.type = 'javascript/blocked';

                // Загружаем содержимое
                fetch(addedNode.src)
                    .then(response => response.text())
                    .then(originalCode => {
                    console_o.colored(`finding code offsets in ${addedNode.src}`)
                    const findedElabasClientHookOffset = originalCode.match(/const\s+\w+\s*=\s*Array\.isArray\(\w+\)\s*\?\s*\w+\s*:\s*\(0,\s*\w+\.\w+\)\(\)\.entities\.getPosition\(\w+\),/)[0];
                    const findedChatOffset = originalCode.match(/\(0,\s*\w+\.\w+\)\(\w+\.\w+,\s*\{\s*msg:\s*\w+,\s*channelName:\s*null\s*!==\s*\(\w+\s*=\s*null\s*===\s*\(\w+\s*=\s*this\.state\.selectedChannel\)\s*\|\|\s*void\s*0\s*===\s*\w+\s*\?\s*void\s*0\s*:\s*\w+\.channelName\)\s*&&\s*void\s*0\s*!==\s*\w+\s*\?\s*\w+\s*:\s*null\s*\}\);/)[0]
                    console_o.log(`Client offset: ${findedElabasClientHookOffset}`)
                    console_o.log(`Chat offset: ${findedChatOffset}`)
                    const modifiedCode = originalCode.replace(
                        findedElabasClientHookOffset,
                        `window.EalabasClient=(0, ${findedElabasClientHookOffset.split("(0,")[1].split(")")[0]})();${findedElabasClientHookOffset}`
                    ).replace(`${findedChatOffset}`,
                             `window.intercall_ealabas={"this":this};${findedChatOffset}`);

                    // Создаем Blob с модифицированным кодом
                    window.editedCode=modifiedCode;
                    console_o.colored('[?] script loaded and changed');
                    const script = document.createElement('script');
                    script.defer = true;
                    script.textContent = 'main()';
                    document.head.appendChild(script);
                    console.error = function () {}
                })
                    .catch(err => console.error('[?] error while loading', err));
            }
        }
    }
});
observer.observe(document, { childList: true, subtree: true });
Object.values_o = Object.values//hooks values
Object.values = function s(e) {
    if (e['AK-47']!==undefined) {
        const fireRate = false; // Замените на нужное значение
        const noInaccuracy = true; // Замените на нужное значение
        const noReloadTime = true;
        const FullAuto = true;
        e["AK-47"] = {
            gunType: "semi_automatic",
            scopeType: "none",
            muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
            muzzleFlashScale: 1.5,
            autoFireWithMouse: FullAuto ? true : !0,
            fireRate: fireRate ? 6000 : 450,
            damage: 20,
            reloadTime: noReloadTime ? 2300/3 : 2300,
            clipSize: 99,
            tagSpeedMult: .8,
            subsequentTagSpeedReductionScalar: .55,
            inaccuracyStanding: noInaccuracy ? 0 : 23,
            inaccuracyFromShot: noInaccuracy ? 0 : 100,
            inaccuracyMovement: noInaccuracy ? 0 : 75,
            yVelocityInaccuracy: noInaccuracy ? 0 : 4,
            inaccuracyFromJump: noInaccuracy ? 0 : 75,
            altInaccuracyStanding: noInaccuracy ? 0 : 12,
            altInaccuracyFromShot: noInaccuracy ? 0 : 42,
            altInaccuracyMovement: noInaccuracy ? 0 : 60,
            recoveryRate: .005,
            kickbackFromShot: noInaccuracy ? 0 : .03,
            kickbackDecreaseRate: .004
        };

        e["M16"] = {
            gunType: "semi_automatic",
            scopeType: "none",
            muzzleFlashOffsetFromGun: [-5.5, -.5, 0],
            muzzleFlashScale: 1.5,
            autoFireWithMouse: FullAuto ? true : !0,
            fireRate: fireRate ? 6000 : 600,
            damage: 14,
            reloadTime: noReloadTime ? 2300/3 : 2300,
            clipSize: 30,
            tagSpeedMult: .8,
            subsequentTagSpeedReductionScalar: .55,
            inaccuracyStanding: noInaccuracy ? 0 : 15,
            inaccuracyFromShot: noInaccuracy ? 0 : 60,
            inaccuracyMovement: noInaccuracy ? 0 : 75,
            yVelocityInaccuracy: noInaccuracy ? 0 : 4,
            inaccuracyFromJump: noInaccuracy ? 0 : 75,
            altInaccuracyStanding: noInaccuracy ? 0 : 7,
            altInaccuracyFromShot: noInaccuracy ? 0 : 32,
            altInaccuracyMovement: noInaccuracy ? 0 : 60,
            recoveryRate: .005,
            kickbackFromShot: noInaccuracy ? 0 : .025,
            kickbackDecreaseRate: .004
        };

        e["MP40"] = {
            gunType: "submachine",
            scopeType: "none",
            muzzleFlashOffsetFromGun: [-5.5, -.25, 0],
            muzzleFlashScale: 1.5,
            autoFireWithMouse: FullAuto ? true : !0,
            fireRate: fireRate ? 6000 : 850,
            damage: 14,
            reloadTime: noReloadTime ? 1700/3 : 1700,
            clipSize: 30,
            tagSpeedMult: .85,
            subsequentTagSpeedReductionScalar: .4,
            inaccuracyStanding: noInaccuracy ? 0 : 45,
            inaccuracyFromShot: noInaccuracy ? 0 : 45,
            inaccuracyMovement: noInaccuracy ? 0 : 7,
            yVelocityInaccuracy: noInaccuracy ? 0 : 4,
            inaccuracyFromJump: noInaccuracy ? 0 : 75,
            altInaccuracyStanding: noInaccuracy ? 0 : 30,
            altInaccuracyFromShot: noInaccuracy ? 0 : 22,
            altInaccuracyMovement: noInaccuracy ? 0 : 7,
            recoveryRate: .005,
            kickbackFromShot: noInaccuracy ? 0 : .02,
            kickbackDecreaseRate: .004
        };

        e["TAR-21"] = {
            gunType: "rifle",
            scopeType: "none",
            muzzleFlashOffsetFromGun: [-7.5, -.5, 0],
            muzzleFlashScale: 3,
            autoFireWithMouse: FullAuto ? true : !1,
            fireRate: fireRate ? 6000 : 150,
            fireRateWithHeldTouch: fireRate ? 6000 : 130,
            damage: 36,
            reloadTime: noReloadTime ? 2300/3 : 2300,
            clipSize: 20,
            tagSpeedMult: .75,
            subsequentTagSpeedReductionScalar: .6,
            inaccuracyStanding: noInaccuracy ? 0 : 12,
            inaccuracyFromShot: noInaccuracy ? 0 : 187,
            inaccuracyMovement: noInaccuracy ? 0 : 112,
            yVelocityInaccuracy: noInaccuracy ? 0 : 4,
            inaccuracyFromJump: noInaccuracy ? 0 : 75,
            altInaccuracyStanding: noInaccuracy ? 0 : 6,
            altInaccuracyFromShot: noInaccuracy ? 0 : 94,
            altInaccuracyMovement: noInaccuracy ? 0 : 97,
            recoveryRate: .005,
            kickbackFromShot: noInaccuracy ? 0 : .24,
            kickbackDecreaseRate: .004
        };

        e["M1911"] = {
            gunType: "pistol",
            scopeType: "none",
            muzzleFlashOffsetFromGun: [-3.5, -1, 0],
            autoFireWithMouse: FullAuto ? true : !1,
            fireRate: fireRate ? 6000 : 800,
            fireRateWithHeldTouch: fireRate ? 6000 : 300,
            damage: 22,
            reloadTime: noReloadTime ? 1500/3 : 1500,
            clipSize: 8,
            tagSpeedMult: .8,
            subsequentTagSpeedReductionScalar: .55,
            inaccuracyStanding: noInaccuracy ? 0 : 23,
            inaccuracyFromShot: noInaccuracy ? 0 : 68,
            inaccuracyMovement: noInaccuracy ? 0 : 45,
            yVelocityInaccuracy: noInaccuracy ? 0 : 4,
            inaccuracyFromJump: noInaccuracy ? 0 : 75,
            altInaccuracyStanding: noInaccuracy ? 0 : 11,
            altInaccuracyFromShot: noInaccuracy ? 0 : 33,
            altInaccuracyMovement: noInaccuracy ? 0 : 30,
            recoveryRate: .005,
            kickbackFromShot: noInaccuracy ? 0 : .06,
            kickbackDecreaseRate: .004
        };

        e["Double Barrel"] = {
            gunType: "shotgun",
            scopeType: "none",
            muzzleFlashOffsetFromGun: [-6.5, -1, 0],
            muzzleFlashScale: 5,
            autoFireWithMouse: FullAuto ? true : !1,
            fireRate: fireRate ? 6000 : 400,
            fireRateWithHeldTouch: fireRate ? 6000 : 130,
            damage: 10,
            shotPelletCount: 10,
            clipSize: 2,
            reloadBulletsIndividually: !0,
            bulletReloadTime: noReloadTime ? 700/3 : 700,
            cockTime: 400,
            tagSpeedMult: .65,
            subsequentTagSpeedReductionScalar: .6,
            inaccuracyStanding: noInaccuracy ? 0 : 170,
            inaccuracyFromShot: noInaccuracy ? 0 : 120,
            inaccuracyMovement: noInaccuracy ? 0 : 20,
            yVelocityInaccuracy: noInaccuracy ? 0 : 7,
            inaccuracyFromJump: noInaccuracy ? 0 : 100,
            altInaccuracyStanding: noInaccuracy ? 0 : 120,
            altInaccuracyFromShot: noInaccuracy ? 0 : 80,
            altInaccuracyMovement: noInaccuracy ? 0 : 20,
            recoveryRate: .005,
            kickbackFromShot: noInaccuracy ? 0 : .24,
            kickbackDecreaseRate: .004
        };

        e["AWP"] = {
            gunType: "rifle",
            scopeType: "sniper",
            muzzleFlashOffsetFromGun: [-8, -2, 0],
            muzzleFlashScale: 2,
            autoFireWithMouse: FullAuto ? true : !1,
            fireRate: fireRate ? 6000 : 50,
            fireRateWithHeldTouch: fireRate ? 6000 : 130,
            damage: 70,
            reloadTime: noReloadTime ? 2300/3 : 2300,
            clipSize: 8,
            tagSpeedMult: .75,
            subsequentTagSpeedReductionScalar: .6,
            inaccuracyStanding: noInaccuracy ? 0 : 150,
            inaccuracyFromShot: noInaccuracy ? 0 : 200,
            inaccuracyMovement: noInaccuracy ? 0 : 150,
            yVelocityInaccuracy: noInaccuracy ? 0 : 4,
            inaccuracyFromJump: noInaccuracy ? 0 : 75,
            altInaccuracyStanding: noInaccuracy ? 0 : 1,
            altInaccuracyFromShot: noInaccuracy ? 0 : 1,
            altInaccuracyMovement: noInaccuracy ? 0 : 112,
            recoveryRate: .02,
            kickbackFromShot: noInaccuracy ? 0 : .1,
            kickbackDecreaseRate: .0025,
            aimZoomFactor: 3.5
        };

        e["Minigun"] = {
            gunType: "submachine",
            scopeType: "none",
            muzzleFlashOffsetFromGun: [-8, -2, 0],
            muzzleFlashScale: 3,
            autoFireWithMouse: FullAuto ? true : !0,
            fireRate: fireRate ? 6000 : 1200,
            damage: 10,
            reloadTime: noReloadTime ? 4000/4: 4000,
            clipSize: 150,
            tagSpeedMult: .8,
            subsequentTagSpeedReductionScalar: .5,
            inaccuracyStanding: noInaccuracy ? 0 : 70,
            inaccuracyFromShot: noInaccuracy ? 0 : 50,
            inaccuracyMovement: noInaccuracy ? 0 : 70,
            yVelocityInaccuracy: noInaccuracy ? 0 : 4,
            inaccuracyFromJump: noInaccuracy ? 0 : 100,
            altInaccuracyStanding: noInaccuracy ? 0 : 40,
            altInaccuracyFromShot: noInaccuracy ? 0 : 30,
            altInaccuracyMovement: noInaccuracy ? 0 : 35,
            recoveryRate: .01,
            kickbackFromShot: noInaccuracy ? 0 : .02,
            kickbackDecreaseRate: .001
        };
        window.gunSettings=e;
        console_o.log(e);
    }
    return Object.values_o(e)
}
window.speedROT = 80;
window.startEalabas = function s() {
    globalThis.mainInterval = setInterval(() => {
        try {
            //document.querySelector(".RespawnButton").click()
            window.EalabasFixed = EalabasClient.noa===undefined ? EalabasClient : EalabasClient.noa
            window.EalabasFixed.serverSettings.creative=getitem("isCreative")
            // Получение состояния удерживаемого объекта и вращение его меша
            const heldItemState = window.EalabasFixed.entities.getHeldItemState(1);
            if (heldItemState && heldItemState.heldItem && heldItemState.heldItem.mesh) {
                heldItemState.heldItem.mesh.rotation.y += 0.01 * window.speedROT;
                if (heldItemState.heldItem.mesh.rotation.y > Math.PI * 2) {
                    heldItemState.heldItem.mesh.rotation.y = 0; // Сброс угла вращения
                }
            }
        } catch {
        }
    }, 40);
    window.DtapInited = false
    window.DtapInterval = setInterval(() =>{
        if (window.EalabasFixed!==undefined) {
            if (!window.DtapInited) {
                window.DtapNums = 3
                window.DesyncInterval = [];
                window.Cview=0;
                window.EalabasFixed.ents.getHeldItem(1).fireBullet_o =window.EalabasFixed.ents.getHeldItem(1).fireBullet
                window.EalabasFixed.ents.getHeldItem(1).fireBulletLocal_o =window.EalabasFixed.ents.getHeldItem(1).fireBulletLocal
                window.EalabasFixed.ents.getHeldItem(1).reload_o = window.EalabasFixed.ents.getHeldItem(1).reload;
                window.EalabasFixed.ents.getHeldItem(1).reload = function s() {
                    this.reload_o();
                    window.DesyncInterval.forEach(e => {clearInterval(e);});
                    window.DesyncInterval=[];
                    window.DesyncInterval.push(setInterval(() => {
                        try {
                            DesyncIndicator.setAttribute("value",window.Cview)
                            if (window.Cview === undefined) window.Cview = 0;
                            else window.Cview++;

                            if (window.Cview > 100) {
                                window.Cview = 0;
                                console.log("Очищаем интервалы", window.DesyncInterval);  // Логируем перед очисткой

                                // Очищаем все интервалы
                                window.DesyncInterval.forEach(e => {
                                    clearInterval(e);
                                });
                            }
                        } catch (e) {
                            console.error("Ошибка при обработке интервала:", e);  // Логируем ошибку
                            window.Cview = 0;
                        }
                    }, (Math.ceil(window.gunSettings[window.EalabasFixed.ents.getHeldItem(1).heldItemState.heldItemName].reloadTime) * 3) / 100));
                }

                window.EalabasFixed.ents.getHeldItem(1).fireBulletLocal = function s() {
                    for (let index = 0; index < DtapNums; index++) {
                        this.fireBulletLocal_o();
                    }
                    return this.fireBulletLocal_o();
                }
                window.EalabasFixed.ents.getHeldItem(1).fireBullet = function (r,l) {
                    for (let index = 0; index < DtapNums; index++) {
                        this.fireBullet_o(r,l)
                    }
                    return this.fireBullet_o(r,l)
                }
                class E_API {

                    constructor() {
                        this.AlrFreezed=false
                    }

                    freeze() {
                        if (!this.AlrFreezed) {
                            this.AlrFreezed=true
                            window.EalabasFixed.ents.setPosition_o = window.EalabasFixed.ents.setPosition;
                            window.EalabasFixed.ents.setPosition = function s(e,r) {
                                if (e!==1) {
                                    if (window.FreezeALL===true) {
                                        return window.EalabasFixed.ents.setPosition_o(e,window.EalabasFixed.ents.getPosition(1))
                                    }
                                    else {
                                        return window.EalabasFixed.ents.setPosition_o(e,r)
                                    }
                                }
                            }
                        }
                    }
                    unfreeze() {
                        if (this.AlrFreezed) {window.EalabasFixed.ents.setPosition=window.EalabasFixed.ents.setPosition_o;this.AlrFreezed=false}
                    }

                    getPos() {
                        return window.EalabasFixed.ents.getPosition(1);
                    }
                    setPos(pos) {
                        if (this.AlrFreezed) {
                            window.EalabasFixed.ents.setPosition_o(1,pos[0],pos[1],pos[2])
                        }
                        else {
                            window.EalabasFixed.ents.setPosition(1,pos[0],pos[1],pos[2])
                        }
                    }

                }
                window.EalabasAPI=new E_API()
                window.DtapInited=true;

            }
        }
    },40)

    try {
        // Выполнение отредактированного кода (если переменная `editedCode` определена)
        if (typeof window.editedCode !== "undefined") {
            eval(window.editedCode);
        }
    } catch (e) {
        console_o.error("Ошибка выполнения editedCode:", e);
    }

    // Функция для синхронного получения данных через XMLHttpRequest


    try {
        // Получение HTML-содержимого из указанного URL
        const htmlContent = window.syncFetch("https://raw.githubusercontent.com/SVO-ARBUZ/EalabasClient/refs/heads/main/menu.html");

        // Создание нового окна с полученным HTML
        const newWindow = window.open("", "_blank", "width=1276,height=800");
        if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(htmlContent);
            newWindow.window.Xlocation=window.location
            newWindow.document.close();
            window.EalabasClientGUI = newWindow;

            // Установка атрибута intersettings в новое окно
            const playerNameElement = document.querySelector(".PlayerNamePreview");
            if (playerNameElement) {
                EalabasClientGUI.document.body.setAttribute("intersettings", JSON.stringify({
                    "name": playerNameElement.innerText
                }));
            } else {
                console_o.warn("Элемент с классом .PlayerNamePreview не найден.");
            }
        } else {
            console_o.error("Не удалось открыть новое окно.");
        }
    } catch (e) {
        console_o.error("Ошибка при загрузке или создании окна:", e);
    }
};
window.upditem = function upditem(item,param) {
  try {
    if (localStorage.eclient!==undefined) {
      var Jsonx = JSON.parse(localStorage.eclient)
      Jsonx[item]=param;
      localStorage.eclient=JSON.stringify(Jsonx)
    }
    else {
      localStorage.eclient=JSON.stringify({})
      upditem(item,param)
    }
  }catch{localStorage.eclient=JSON.stringify({})}
}
window.getitem = function getitem(item) {
  try {
    if (localStorage.eclient!==undefined) {
      var Jsonx = JSON.parse(localStorage.eclient)
      return Jsonx[item]
    }
    else {
      return null
    }
  }catch{localStorage.eclient=JSON.stringify({})}
  return null
}
// Закрытие окна при уходе со страницы
window.addEventListener('beforeunload', () => {
    if (window.EalabasClientGUI && !window.EalabasClientGUI.closed) {
        window.EalabasClientGUI.close();
    }
});
window.mainstart = function () {
console_o.log('DOMContentLoaded: Попытка вызвать startEalabas');

   try {
       window.CreateDesyncIndicator=function createDesyncIndicator(){window.DesyncIndicator=document.createElement("div"),DesyncIndicator.setAttribute("filltype","100%"),DesyncIndicator.setAttribute("value","0"),DesyncIndicator.style.position="absolute",DesyncIndicator.style.zIndex=9999999999,DesyncIndicator.style.top="0",DesyncIndicator.style.left="50%",DesyncIndicator.style.width="150px",DesyncIndicator.style.height="50px",DesyncIndicator.style.borderRadius="5px",DesyncIndicator.style.color="white",DesyncIndicator.style.userSelect="none",DesyncIndicator.style.backgroundColor="#352d2d",DesyncIndicator.innerHTML='\n        <p style="position: relative; top: -15px; text-align: center;">Desync Indicator</p>\n        <div style="position: absolute; height: 10px; margin-top: -20px; border-radius: 10px; width: 100%; background-color: red"></div>\n    ',document.body.appendChild(DesyncIndicator);let e=!1;DesyncIndicator.addEventListener("mousedown",(()=>{e=!0})),document.addEventListener("mouseup",(()=>{e=!1})),document.addEventListener("mousemove",(t=>{e&&(DesyncIndicator.style.left=t.pageX-75+"px",DesyncIndicator.style.top=t.pageY-25+"px")}));new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"value"===e.attributeName){const e=parseFloat(DesyncIndicator.getAttribute("value"))||0;DesyncIndicator.querySelector("div").style.width=`${e}%`}}))})).observe(DesyncIndicator,{attributes:!0})}
       if (typeof window.startEalabas === "function") {
           window.startEalabas(); // Вызов метода
           console_o.log('startEalabas успешно вызван');
           CreateDesyncIndicator();
       } else {
           console_o.error('startEalabas не найден или не является функцией');
       }
   } catch (e) {
       console_o.error('Ошибка при вызове startEalabas:', e);
   }
}
window.main=window.mainstart;
