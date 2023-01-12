/**
 * Data descriptor - is a property that has a value and may or may not be writable.
 * value - By default its undefined or whatever it was defined earlier.
 */

export function demoDataDescriptorValue() {
    const user = {};
    
    // 1st method: Assignment Operation
    user.name = 'Product Support';
    
    // 2nd method: Use of defineProperty()
    Object.defineProperty(user, 'email', {
        value: 'product.support@example.org',
        writable: true,
        enumerable: true,
        configurable: true,
    });
    
    Object.defineProperty(user, '_id', {
        value: Symbol(),
    });
    
    console.log(
        'Object\'s own property descriptors',
        Object.getOwnPropertyDescriptors(user),
    );
    
    // Trying to assign a writable: false
    try {
        user._id = Symbol();
    } catch (error) {
        console.error(error);
    }
    
    // Trying to delete a configurable: false
    try {
        delete user._id;
    } catch (error) {
        console.error(error);
    }
    
    // Logging enumerable properties
    console.log('Object\'s enumerable keys', Object.keys(user));

    // Change only the enumerable configuration for email
    Object.defineProperty(user, 'email', {
        enumerable: false,
    });
    
    // Logging enumerable properties
    console.log('Object\'s enumerable keys', Object.keys(user));

    // Define an undefined property
    Object.defineProperty(user, 'password', {
        writable: true,
        enumerable: true,
        configurable: true,
    });
    console.log('Object', user);
}
