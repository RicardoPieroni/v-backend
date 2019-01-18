import testCommons from '../lib/test-commons';
import userService from '../../service/user-service';
import UserDomain from '../../domain/user-domain';
import UserFactory from '../lib/factories/user-factory';
import config from '../../config';
import userFactory from '../lib/factories/user-factory';

config.mongo.uri = 'mongodb://localhost/v-database';

testCommons.init();

describe('user-service', () => {
    context('retrieveAll', () => {
        let resultData = 2;
        const user = userFactory.build();
        const user2 = userFactory.build();
        before(() => testCommons.resetTestDB()
            .then(() => UserDomain.create([user, user2]))
            .then(() => userService.retrieveAll())
            .then((result) => {
                resultData = result;
                return resultData;
            })
        )
        specify(() => resultData.length.should.be.equals(2));
        specify(() => resultData[0].name.should.be.equals(user.name));
        specify(() => resultData[1].name.should.be.equals(user2.name));
        after(() => testCommons.closeTestDB())
    });
    context('retrieveById when exist two register in database', () => {
        let resultData = 2;

        const user = userFactory.build();
        const user2 = userFactory.build();
        before(() => testCommons.resetTestDB()
            .then(() => UserDomain.create([user, user2]))
            .then(() => userService.retrieveById(user._id))
            .then((result) => {
                resultData = result;
                return resultData;
            })
        )
        specify(() => resultData.name.should.be.equals(user.name));
        after(() => testCommons.closeTestDB())
    });
    context('updateById', () => {
        let resultData = 2;

        const user = userFactory.build();
        const user2 = userFactory.build();
        before(() => testCommons.resetTestDB()
            .then(() => UserDomain.create(user))
            .then(() => userService.updateUserById(
                user._id,
                user2.name,
                user2.username,
                user2.city,
                user2.email,
                user2.rideInGroup,
                user2.daysWeek))
            .then(() => userService.retrieveById(user._id))
            .then((result) => {
                resultData = result;
                return resultData;
            })
        )
        specify(() => resultData.name.should.be.not.equals(user.name));
        specify(() => resultData.name.should.be.equals(user2.name));
        specify(() => resultData.username.should.be.equals(user2.username));
        specify(() => resultData.daysWeek.length.should.be.equals(user2.daysWeek.length));

        after(() => testCommons.closeTestDB())
    });
    context('removeUser when exist two register in database', () => {
        let resultData = 2;

        const user = userFactory.build();
        const user2 = userFactory.build();
        before(() => testCommons.resetTestDB()
            .then(() => UserDomain.create([user, user2]))
            .then(() => userService.removeUser(user._id))
            .then(() => userService.retrieveAll())
            .then((result) => {
                resultData = result;
                return resultData;
            })
        )
        specify(() => resultData.length.should.be.equals(1));
        specify(() => resultData[0].name.should.be.equals(user2.name));
        after(() => testCommons.closeTestDB())
    });
});