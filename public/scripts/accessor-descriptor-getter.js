/**
 * Accessor descriptor - is a property that has a get or a set or both.
 *                       It cannot contain value or writable.
 * get - function to act as a getter function. It's called without any arguments.
 *       By default its undefined or whatever it was set earlier.
 * This can also be set for Accessor descriptor.
 */

export function demoAccessorDescriptorGetter() {
    const roomItemsMap = {
        table: 2,
        chair: 2,
        bed: 1,
        cupboard: 4,
    };

    Object.defineProperty(roomItemsMap, 'numberOfItems', {
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
    });

    console.log('Object defined', roomItemsMap);
    console.log(
        'Object\'s property descriptor',
        Object.getOwnPropertyDescriptors(roomItemsMap)
    );

    // Show number of items in the room
    console.log('Object numberOfItems', roomItemsMap.numberOfItems);

    // Try to assign a value to numberOfItems without setter
    try {
        roomItemsMap.numberOfItems = 40;
    } catch (error) {
        console.error(error);
    }
}
