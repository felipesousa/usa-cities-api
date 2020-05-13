# ⚙️ USA Cities API

> Generic server to provide USA cities/states to [this experimental project](https://github.com/felipesousa/usa-cities-app).

### Endpoints

> Base Route: `https://usa-cities-api.herokuapp.com/`

| ROUTE | QUERY PARAMS | DEFAULT | RESPONSE MODEL | TYPE |
| ----------- | ----------- | ------ | --------- | --- |
| **cities** | { city: string, state: string } | { city: '', state: '' } | [ { city: string, state: string }] | GET |

Felipe Sousa @ 2020
