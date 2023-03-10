/**
 * Data descriptor - is a property that has a value and may or may not be writable.
 * Accessor descriptor - is a property that has a get or a set or both.
 *                       It cannot contain value or writable.
 * enumerable - when it's true then the property shows up when we try to list them.
 *            By default its false or whatever it was set earlier.
 * This can also be set for Accessor descriptor.
 */

export function demoDataDescriptorEnumerable() {
    const profile = {};

    Object.defineProperties(profile, {
        'username': {
            value: 'RohanRoy01',
            writable: false,
            enumerable: true,
            configurable: true,
        },
        'name': {
            value: 'Rohan Roy',
            writable: true,
            enumerable: true,
            configurable: true,
        },
        'email': {
            value: 'rohan.roy@example.com',
            writable: true,
            enumerable: false,
            configurable: true,
        },
    });

    console.log(
        'Object\'s property descriptor',
        Object.getOwnPropertyDescriptors(profile),
    );

    // Logging enumerable properties
    console.log('Object\'s enumerable keys', Object.keys(profile));
    // Log shallow copy
    console.log({ ...profile });

    Object.defineProperties(profile, {
        'name': {
            enumerable: false,
        },
        'email': {
            enumerable: true,
        },
    });
    console.log(
        'Object\'s property descriptor after its altered',
        Object.getOwnPropertyDescriptors(profile),
    );
    
    for (const key in profile) {
        console.log('Object\'s key after its altered', key);
    }

    console.log(JSON.stringify(profile));
}
