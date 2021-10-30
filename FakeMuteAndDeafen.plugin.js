//META{"name":"ExampleLibraryPlugin","website":"https://github.com/YoungBad3739"}*//
//import {DiscordModules as Modules} from "modules";
class ExampleLibraryPlugin {
    
    getName() {return "Fake Mute And Deafen";}
    getDescription() {return "if you have any questions contact with us: https://discord.gg/jsWwwwqbCb";}
    getVersion() {return "0.0.1";}
    getAuthor() {return "YoungBad";}
    



    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "LINK_TO_RAW_CODE");
        
        var text = new TextDecoder("utf-8");

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
window.BdApi.alert("success",`After you turned on the plugin , You can't join any other voice channels , if you wanna turn off the plugin you have restart your discord (CTRL+R) , Before do anythink make sure turn off the plugin`);

    }



    stop() {

    }
}
