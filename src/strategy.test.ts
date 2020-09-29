import { Context, LoginWithGoogle, LoginWithInstagram, LoginWithSpotify } from './strategy'

describe('Strategy Pattern Tests', () => {
    test('should login with selected strategy', () => {
        jest.spyOn(console, 'log').mockImplementation(jest.fn());

        var context = new Context(new LoginWithGoogle());
        var result = context.executeLogin();
        expect(result).toEqual("Successful login with Google");
    });

    test('on changing strategy should login with last strategy', () => {
        jest.spyOn(console, 'log').mockImplementation(jest.fn());

        var context = new Context(new LoginWithInstagram());
        context.setStrategy(new LoginWithSpotify())
        var result = context.executeLogin();
        expect(result).toEqual("Successful login with Spotify");
    });
});