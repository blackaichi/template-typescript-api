# Template API typescript

This is a typescript api template

## Installation

1. To run this project you have to install `make`, `docker` and `docker-compose`
2. After the installation create .env.local (for development) or .env (for production) in the root directory following the structure of .env.example

## How to use it

#### Develop mode
Run the app
```
make dev-app-up
```

#### Run tests
```
make tests-app
```

#### Production mode
Run the app 
```
make app-up
```

Stop the app 
```
make app-down
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[WTFPL](https://choosealicense.com/licenses/wtfpl/)