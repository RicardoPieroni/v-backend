import { Factory } from 'rosie';
import Chance from 'chance';

const chanceInstance = new Chance();
const userFactory = new Factory()
    .attrs({
        _id: () => chanceInstance.string({ length: 24, pool: '0123456789' }),
        username: () => chanceInstance.string({ length: 10, pool: 'abcdefghijklmnopqrstuvxz0123456789'}),
        name: () => chanceInstance.name(),
        city: () => chanceInstance.city(),
        rideInGroup: () => {
            if (chanceInstance.bool()) {
                return 'Always';
            }
            return 'Never';
        },
        daysWeek: () => chanceInstance.weekday(),
        postsCount: () => chanceInstance.integer({ min: 0, max: 40 }),
        albunsCount: () => chanceInstance.integer({ min: 0, max: 15 }),
        photosCount: () => chanceInstance.integer({ min: 0, max: 600 }) 
    }).attr('userId', ['_id'], _id => _id);

export default userFactory;
