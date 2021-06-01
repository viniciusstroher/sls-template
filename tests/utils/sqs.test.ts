import {AwsConfig} from "@application/utils/sqs"
describe('Aws Lambdas Test', () => {
    test('should import', async () => {
        expect(AwsConfig).toBeDefined();
    });
});
