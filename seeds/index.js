const sequelize = require('../config/connections');

const init = async () => {
    await sequelize.sync({ force: true });
    process.exit(0);
}

init();