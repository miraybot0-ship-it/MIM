const fs = require("fs");
const axios = require("axios");
const path = require("path");

module.exports.config = {
  name: "zombie",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "Apply zombie effect to image",
  prefix: true,
  category: "image",
  usages: "[reply or url]",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const axios = global.nodemodule["axios"];

  let linkanh = event.messageReply?.attachments?.[0]?.url || args.join(" ");
  if (!linkanh || typeof linkanh !== 'string' || !linkanh.trim()) {
    return api.sendMessage('[🧟‍♂️]➜ Please reply to an image or provide a valid image URL.', event.threadID, null, event.messageID);
  }

  try {
    linkanh = linkanh.trim().replace(/\s/g, '');
    if (!/^https?:\/\//.test(linkanh)) {
      return api.sendMessage('[🧟‍♂️]➜ Invalid URL: Must start with http:// or https://', event.threadID, null, event.messageID);
    }

    
    const loadingMessage = await api.sendMessage('[🧟‍♂️]➜ Applying zombie effect, please wait...', event.threadID);

    const encodedUrl = encodeURIComponent(linkanh);
    const apiUrl = `http://65.109.80.126:20392/nayan/zombie?url=${encodedUrl}`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    if (!data.success || !data.link) {
      api.unsendMessage(loadingMessage.messageID);
      return api.sendMessage('[🧟‍♂️]➜ Failed to apply zombie effect.', event.threadID, null, event.messageID);
    }

    const imageResponse = await axios.get(data.link, { responseType: 'arraybuffer' });
    const imagePath = path.join(__dirname, "cache", `zombie_${Date.now()}.jpg`);
    fs.writeFileSync(imagePath, Buffer.from(imageResponse.data, "binary"));

    
    api.unsendMessage(loadingMessage.messageID);

    
    api.sendMessage({
      body: "[🧟‍♂️]➜ Here is your zombie effect image:",
      attachment: fs.createReadStream(imagePath)
    }, event.threadID, () => fs.unlinkSync(imagePath), event.messageID);

  } catch (err) {
    console.error(err);
    return api.sendMessage('[🧟‍♂️]➜ An error occurred while processing the image.', event.threadID, null, event.messageID);
  }
};
