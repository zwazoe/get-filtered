# Install

```
npm i get-filtered
```

# Usage

```
const getFiltered = require('getFiltered')

const data = [
    {
        id: 1,
        name: "USA",
        continent: "North America",
        planet: "Earth"
    },
    {
        id: 2,
        name: "Canada",
        planet: "Earth"
    },
    {
        id: 3,
        name: "Haiti",
        continent: "North America",
    }
]

const config = {
    inc: ["Earth"],
    filter_key: "planet"
}

const callback = (f) => {
    console.log(f)
    return f
}
const gotFiltered = getFiltered(data, config, callback)



```
