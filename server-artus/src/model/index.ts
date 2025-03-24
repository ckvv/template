import { Sequelize } from '@sequelize/core';
import { User } from './user';

export const sequelize = new Sequelize('sqlite::memory:', {
  models: [User],
});

(async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate([{
    username: 'user1',
  }, {
    username: 'user2',
  }]);
})();

export { User };
