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
        before(() => testCommons.resetTestDB()
            .then(() => UserDomain.create(user))
            .then(() => userService.retrieveAll())
            .then((result) => {
                resultData = result;
                return resultData;
            })
        )
        specify(() => resultData.length.should.be.equals(2));
        after(() => testCommons.closeTestDB())
    });
});