
# @nghinv/react-native-icons

# Installation

## Installing the package

* Use yarn

```sh
yarn add @nghinv/react-native-icons
```

* Use npm

```sh
npm install @nghinv/react-native-icons
```

* Add library [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

# How to use

```javascript
import React from 'react';
import { Icon } from '@nghinv/react-native-icons';

export default function Example() {
  return (
    <Icon
      size={36}
      name='photo'
      color='tomato'
      type='MaterialIcons'
    />
  );
}
```