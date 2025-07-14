const fs = require("fs");
module.exports = {
  config:{
  name: "@─꯭─⃝͎̽C⃪͓͢T⃔͢ B̷⃪⃨͢O⃔͢T̷⃪▁▁▁╱╱😈🙂🩵🪽",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "Farhan", 
  description: "Fun",
  category: "no prefix",
  usages: "🙋‍♂️",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("oi")==0 || body.indexOf("oii")==0 || body.indexOf("@কে'ট'বে'রি ত্যা'হ")==0 || body.indexOf("@─꯭─⃝͎̽C⃪͓͢T⃔͢ B̷⃪⃨͢O⃔͢T̷⃪▁▁▁╱╱😈🙂🩵🪽")==0) {
    var msg = {
        body: "~ ডাকো কেনো গো, আমি আছি তো এখানে..!✋🥀",
        attachment: fs.createReadStream(__dirname + `/Nayan/dakoknogo.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 
