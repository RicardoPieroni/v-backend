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
    context('retrieveUsersByFieldName when exist two register in database - retrieve by name', () => {
        let resultData = 2;
        const name = 'Test user 1';
        const name2 = 'Test user 2';
        const name3 = 'Test';

        const user = userFactory.build();
        user.name = name;
        const user2 = userFactory.build();
        user2.name = name2;
        const user3 = userFactory.build();
        user3.name = name3;

        before(() => testCommons.resetTestDB()
            .then(() => UserDomain.create([user, user2, user3]))
            .then(() => userService.retrieveUsersByFieldName('name', 'user'))
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
    context('retrieveUsersByFieldName when exist two register in database - retrieve by username', () => {
        let resultData = 2;
        const username = 'Test user 1';
        const username2 = 'Test user 2';
        const username3 = 'Test';

        const user = userFactory.build();
        user.username = username;
        const user2 = userFactory.build();
        user2.username = username2;
        const user3 = userFactory.build();
        user3.username = username3;

        before(() => testCommons.resetTestDB()
            .then(() => UserDomain.create([user, user2, user3]))
            .then(() => userService.retrieveUsersByFieldName('username', 'user'))
            .then((result) => {
                resultData = result;
                return resultData;
            })
        )
        specify(() => resultData.length.should.be.equals(2));
        specify(() => resultData[0].username.should.be.equals(user.username));
        specify(() => resultData[1].username.should.be.equals(user2.username));
        after(() => testCommons.closeTestDB())
    });
});