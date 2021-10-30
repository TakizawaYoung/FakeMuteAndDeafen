This is all the code used in the plugin :





//META{"name":"ExampleLibraryPlugin","website":"https://github.com/YoungBad3739"}*//
//import {DiscordModules as Modules} from "modules";
class ExampleLibraryPlugin {
WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
        if (text.decode(data).includes("self_deaf")) {
            console.log("found mute/deafen");
            data = data.replace('"self_mute":false', 'NiceOneDiscord');
            console.log("Activated");
        }
    }
    WebSocket.prototype.original.apply(this, [data]);
}
window.BdApi.alert("success",

}



