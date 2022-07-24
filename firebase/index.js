var admin = require("firebase-admin");

var serviceAccount = require("../config/firebaesServiceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
