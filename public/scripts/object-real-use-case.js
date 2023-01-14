/**
 * Requirements:
 * 1. User profile constructor function
 * 2. Properties: _id, username, email, name, password, country, dateOfBirth, age
 * 3. Method: matchPassword
 * 4. _id: readonly, not deleted or enumerable
 * 5. username: readonly
 * 6. email, country, dateOfBirth: not enumerable
 * 7. password: cannot be stored
 * 8. age: needs to calculated from dateOfBirth
 * 9. username, name and age: are enumerable
*/

function hashPassword(password) {
    return Array.from(password).reduce(
        (passwordHash, character) => (
            ((passwordHash << 5) - passwordHash + character.charCodeAt(0)) | 0
        ),
        0,
    );
}

function UserProfile({
    username,
    email,
    name,
    password,
    country,
    dateOfBirth,
}) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.country = country;
    this.dateOfBirth = dateOfBirth;

    this.matchPassword = (password) => {
        return hashPassword(password) === this.password;
    };

    let _password;
    Object.defineProperties(this, {
        _id: {
            value: Symbol(),
            writable: false,
            enumerable: false,
            configurable: false,
        },
        username: {
            writable: false,
        },
        email: {
            enumerable: false,
        },
        password: {
            get: () => _password,
            set: value => _password = hashPassword(value),
            enumerable: false,
            configurable: true,
        },
        country: {
            enumerable: false,
        },
        dateOfBirth: {
            enumerable: false,
        },
        age: {
            get: () => Math.round(
                (Date.now() - new Date(this.dateOfBirth)) / (1000 * 60 * 60 * 24 * 365)
            ),
            enumerable: true,
        },
        matchPassword: {
            enumerable: false,
        }
    });

    this.password = password;
}

export function demoObjectRealUseCase() {
    const johnProfile = new UserProfile({
        username: 'john_doe_01',
        email: 'john.doe@example.org',
        name: 'John Doe',
        password: 'Myrandompassword',
        country: 'U.K.',
        dateOfBirth: new Date('1969-08-23'),
    });

    console.log('User profile', johnProfile);
    console.log('User profile in JSON', JSON.stringify(johnProfile));
    
    for (const key in johnProfile) {
        console.log('John public data', key, johnProfile[key]);
    }

    console.log('John match correct password', johnProfile.matchPassword('Myrandompassword'));
    console.log('John match invalid password', johnProfile.matchPassword('Differentpassword'));
}
