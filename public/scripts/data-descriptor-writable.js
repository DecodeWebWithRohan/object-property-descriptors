/**
 * Data descriptor - is a property that has a value and may or may not be writable.
 * writable - when it's true then the value can be changed otherwise not.
 *            By default its false or whatever it was set earlier.
 */

export function demoDataDescriptorWritable() {
    const fruit = {};

    Object.defineProperties(fruit, {
        'name': {
            value: 'Red delicious',
            writable: true,
            enumerable: true,
            configurable: true,
        },
        'color': {
            value: 'Red',
            writable: true,
            enumerable: true,
            configurable: true,
        },
        'type': {
            value: 'Apple',
            writable: false,
            enumerable: true,
            configurable: true,
        },
    });

    console.log('Object defined', fruit);
    console.log(
        'Object\'s property descriptor',
        Object.getOwnPropertyDescriptors(fruit)
    );

    fruit.name = 'Granny smith';
    fruit.color = 'Green';

    // Trying to assign a writable: false
    try {
        fruit.type = 'Pear';
    } catch (error) {
        console.error(error);
    }

    fruit.name = 'Tosca';
    Object.defineProperty(fruit, 'type', {
        value: 'Pear',
        writable: true,
    });

    console.log('Object\'s property descriptor after type is writable', Object.getOwnPropertyDescriptors(fruit));

    Object.defineProperty(fruit, 'type', {
        writable: false,
    });
    console.log('Object\'s property descriptor after type is readonly', Object.getOwnPropertyDescriptors(fruit));
}
