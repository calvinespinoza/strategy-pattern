class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public executeLogin(): string {
        console.log('Context: Logging in (not sure with which service)');
        return this.strategy.login();
    }
}

interface Strategy {
    login(): string;
}

class LoginWithGoogle implements Strategy {
    public login(): string {
        console.log("Logging in with Google...")
        setTimeout(function() {
            console.log("Login complete")
        }, 2000);
        return "Successful login with Google";
    }
}

class LoginWithInstagram implements Strategy {
    public login(): string {
        console.log("Logging in with Instagram...")
        setTimeout(function() {
            console.log("Login complete")
        }, 2000);
        return "Successful login with Instagram";
    }
}

class LoginWithSpotify implements Strategy {
    public login(): string {
        console.log("Logging in with Spotify...")
        setTimeout(function() {
            console.log("Login complete")
        }, 2000);
        return "Successful login with Spotify";
    }
}

function clientCode() {
    const context = new Context(new LoginWithGoogle());
    console.log('Client: Login strategy set to Google');
    context.executeLogin();

    console.log('');

    console.log('Client: Login strategy set to Instagram');
    context.setStrategy(new LoginWithInstagram());
    context.executeLogin();

    console.log('');

    console.log('Client: Login strategy set to Spotify');
    context.setStrategy(new LoginWithSpotify());
    context.executeLogin();
}

export { Context, LoginWithGoogle, LoginWithInstagram, LoginWithSpotify }
