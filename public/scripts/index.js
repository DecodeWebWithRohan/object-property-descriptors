'use strict';

import { demoDataDescriptorValue } from './data-descriptor-value.js';
import { demoDataDescriptorWritable } from './data-descriptor-writable.js';
import { demoDataDescriptorEnumerable } from './data-descriptor-enumerable.js';
import { demoDataDescriptorConfigurable } from './data-descriptor-configurable.js';
import { demoAccessorDescriptorGetter } from './accessor-descriptor-getter.js';
import { demoAccessorDescriptorSetter } from './accessor-descriptor-setter.js';
import { demoObjectRealUseCase } from './object-real-use-case.js';

(() => {
    demoDataDescriptorValue();
    demoDataDescriptorWritable();
    demoDataDescriptorEnumerable();
    demoDataDescriptorConfigurable();
    demoAccessorDescriptorGetter();
    demoAccessorDescriptorSetter();
    demoObjectRealUseCase();
})();
