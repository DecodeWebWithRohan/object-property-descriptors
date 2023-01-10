/**
 * Accessor descriptor - is a property that has a get or a set or both.
 *                       It cannot contain value or writable.
 * set - function to act as a setter function. It's called with one
 *       argument that can used to set the property value, that's accessible
 *       using property getter.
 *       By default its undefined or whatever it was set earlier.
 * This can also be set for Accessor descriptor.
 */

export function demoAccessorDescriptorSetter() {
    const roomItemsMap = {
        table: 2,
        chair: 2,
        bed: 1,
        cupboard: 4,
    };

    Object.defineProperties(roomItemsMap, {
        'numberOfItems': {
            get: () => Object.keys(roomItemsMap).reduce(
                (sum, key) => sum + (
                    key != 'numberOfItems'
                        && typeof roomItemsMap[key] === 'number'
                    ? roomItemsMap[key]
                    : 0
                ),
                0,
            ),
            enumerable: true,
            configurable: false,
        },
        'addItems': {
            set: (newItems) => {
                if (typeof newItems !== 'object') {
                    return;
                }
    
                Object.entries(newItems).forEach(([item, noOfItems]) => {
                    roomItemsMap[item] = (roomItemsMap[item] ?? 0) + noOfItems;
                });
            },
            enumerable: false,
            configurable: false,
        }
    });

    console.log(
        'Object\'s property descriptor',
        Object.getOwnPropertyDescriptors(roomItemsMap)
    );

    // Add items to the room
    roomItemsMap.addItems = {
        table: 5,
        'wall clock': 1,
    };
    console.log('Object defined after items added', roomItemsMap);

    // Try to get a property with only setter
    console.log('Object get addItems', roomItemsMap.addItems);

    let _id;
    Object.defineProperty(roomItemsMap, '_id', {
        get: () => _id,
        set: value => _id = value,
    });
    roomItemsMap._id = 'Room number 25';
    console.log('Object get room _id', roomItemsMap._id);
}
