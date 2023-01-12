/**
 * Data descriptor - is a property that has a value and may or may not be writable.
 * Accessor descriptor - is a property that has a get or a set or both.
 *                       It cannot contain value or writable.
 * configurable - when it's false then:
 *              1) the property cannot be deleted,
 *              2) the property cannot be switched from data to accessor property and vice-versa,
 *              3) and, other attributes of the property cannot be changed
 *                 with one exception, if writable is true then value can be updated and it can be set to false
 *            By default its false or whatever it was set earlier.
 * This can also be set for Accessor descriptor.
 */

export function demoDataDescriptorConfigurable() {
    const device = {};

    Object.defineProperties(device, {
        'name': {
            value: 'My PC',
            writable: true,
            enumerable: true,
            configurable: true,
        },
        'model': {
            value: 'Macbook',
            writable: true,
            enumerable: false,
            configurable: true,
        },
        'serialNumber': {
            value: 'K3JHJKL9J82',
            writable: false,
            enumerable: true,
            configurable: false,
        },
    });

    console.log(
        'Object\'s property descriptor',
        Object.getOwnPropertyDescriptors(device),
    );
    // Logging enumerable properties
    console.log('Object\'s enumerable keys', Object.keys(device));

    // Try to delete the serialNumber
    try {
        delete device.serialNumber;
    } catch (error) {
        console.error(error);
    }

    // Try to change the property attributes
    try {
        Object.defineProperty(device, 'serialNumber', {
            enumerable: false,
        });
    } catch (error) {
        console.error(error);
    }

    // Change data property to accessor property
    try {
        Object.defineProperty(device, 'serialNumber', {
            get: () => 'K3JHJKL9J82',
            enumerable: true,
            configurable: false,
        });
    } catch (error) {
        console.error(error);
    }

    // Try to set configurable false property to true
    try {
        Object.defineProperty(device, 'serialNumber', {
            configurable: true,
        });
    } catch (error) {
        console.error(error);
    }

    Object.defineProperty(device, '_id', {
        value: 'Device ID 01',
        writable: true,
        enumerable: false,
        configurable: false,
    });

    console.log('Object\'s device _id', device._id);

    Object.defineProperty(device, '_id', {
        value: 'Device ID 02',
        writable: false,
    });
    console.log(
        'Object\'s device _id property descriptor after changed',
        Object.getOwnPropertyDescriptor(device, '_id')
    );

    // Try to make _id writable again
    try {
        Object.defineProperty(device, '_id', {
            writable: true,
        });
    } catch (error) {
        console.error(error);
    }
}
