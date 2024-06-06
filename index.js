//index.js


require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;

// if (!PORT) {
//   console.error('PORT is not set in the environment variables.');
//   process.exit(1);
// }

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT} //index.js`);
// });