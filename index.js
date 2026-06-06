const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const responses = [
  {
    keywords: ['حضانة','نيرسري','nursery','روضة','كي جي','kg'],
    reply: `🏫 *أهلاً بيك في حضانة تعلم لتحيا*\n\nنقبل الأطفال من سن سنتين حتى 6 سنوات:\n🔹 نيرسري\n🔹 KG1\n🔹 KG2\n🔹 تمهيدي\n\n📞 للتسجيل: 01096484170\n📍 مسطرد، القاهرة`
  },
  {
    keywords: ['كامب','كمب','camp','صيفي','صيف','summer'],
    reply: `☀️ *كامب صيف تعلم لتحيا*\n\n🎨 أنشطة فنية وإبداعية\n🏃 رياضة وألعاب\n📚 تنمية مهارات\n\n⏰ 9ص – 2ظ\n📞 احجز مكان ابنك: 01096484170`
  },
  {
    keywords: ['كورس','كورسات','دورة','دورات','course','تعليم'],
    reply: `📚 *كورسات أكاديمية تعلم لتحيا*\n\n🔤 لغة عربية وإنجليزية\n🔢 رياضيات\n🖥️ كمبيوتر للأطفال\n🎨 فنون وإبداع\n\n📞 01096484170`
  },
  {
    keywords: ['سعر','أسعار','اسعار','تكلفة','رسوم','ب
