import { b4aGET, b4aPOST, b4aPUT, b4aDELETE } from "./b4aRequest.js";
import { b4aRegister, b4aLogin, b4aLogout } from "./auth.js";

// абстрактни функции за заявки
window.b4aGET = b4aGET;
window.b4aPOST = b4aPOST;
window.b4aPUT = b4aPUT;
window.b4aDELETE = b4aDELETE;

// auth функции
window.b4aRegister = b4aRegister;
window.b4aLogin = b4aLogin;
window.b4aLogout = b4aLogout;