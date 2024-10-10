const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0k1dFc4RStManMxY2t1c25BRDQ1R3lRTWloT0FSQ1lqRWdYYzVwczhGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjFaNGdQTTAyeU5NUUtLb3ZWVTltNUtienJnRDlTYWxXbGE5VEpCbHEwOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TWdKR3RwRmtBRlVPMDk4NllIdFF5dzlHR3FRTXhYNmRQOWF0MnhTUG00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0SjNRMDRyYnVCNUNFMG1ESkMybG5DaG5ubzJETENwZXFuVUhJNDIzREY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCS095M1ZlVGdDMDFkRTFPdEErRkNaamlLaVZJNUQ1VGVnUlg1d25jM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ0N21ZSjRxeTdud3c5QnJrQUFCMTFYLzZyMk9ISXJjNmxTaGRZTVEyMmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUh0OVlUYy9GR1JmU01iSHZ1b3BuRzJoUEdraWhzNHlTQTZjQUEwZXVHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzc2eVloN2l6UWk5TW53OWZqNlUwam1odkY0QzFTL0lzdUtFWnpHSWVnRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpKaHdGQjYzR3dEbmk2WmpETi9jL01uSHJwWW5iVGNyYmt3OThRU1BlNU1kUlBvV0kwc0c3QkcyN1pnOEY1WXh3RCtBMUM2VkgwQXRyNTBPbmNRSGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJEY2h3VEp0bkxwOFl3T0R0UEdyOHRMUHY3TmFKYzBIeTNFUEN5R0VpWkU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnQkpyNFY1TFQ1ZWIxczhZdFZTVzBRIiwicGhvbmVJZCI6ImVkMTQxMjEyLWYzYTMtNGQ2OC04YWI4LTQwZGVmMzJjYzMyMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT2hhL3NmUGVsTkk4ZHpjb2ovMWp1ZnBvLzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzNPTXcxMHcwdFRsT3dKZXNzQ0U1N0Q2azBjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY5OThNOUhOIiwibWUiOnsiaWQiOiI1MDkzNzI5NDc0Nzo0MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtcnMgbGlsaW5lIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMm11K3NIRU1ldG9MZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxYkZmU3pxSWNHRHV0eUZvdnJOc0ZVbVhqVlloZ2F5QmFydUpGNkdidzF3PSIsImFjY291bnRTaWduYXR1cmUiOiJIeE5kNEEzUitmY09Wdmc1OER2SXBOUjFRVnk2Mk9UOXNYVlQyaHZNRmNWVUlQb2Z0TDRWK3NNVXZhN05wNEMvZDN1Qlc4TFgyVUc2OTFzd2U4TEVDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMHI5TzRuZ0thZnlmcnJJSUJXZFlqTTBteUhhR3JqYmZCUHIxdENKUDE1ODgrTEllVHJRSXVlekRnd1YzUG5nZTJIYnREN1ZKc3gwYml2S08vUGdRaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNzI5NDc0Nzo0MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkV3hYMHM2aUhCZzdyY2hhTDZ6YkJWSmw0MVdJWUdzZ1dxN2lSZWhtOE5jIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTgzNDE4fQ==' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '50937294747' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by sasuke': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || true  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
