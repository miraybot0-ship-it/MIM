module.exports.config = {
  name: "fork",
  version: "1.0.0",
  permission: 2,
  credits: "Farhan",
  description: "fork",
  prefix: true, 
  category: "user", 
  usages: "fork",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
     "https://i.postimg.cc/0yjnGt46/Screenshot-2025-0714-013718.png", 
            
            "https://i.postimg.cc/k5NPGMNC/Screenshot-2025-0713-035903.png", 
 ];
   var callback = () => api.sendMessage({body:`👉-এই নাও বস ফারহান এর GITHUB -BOT- লিংক ফলো করে দিও-♻️💯                                            👇{https://github.com/DJ-FARHAN-BOT/MIM}+\nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
