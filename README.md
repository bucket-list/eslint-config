# ESlint config

## Install

### npm

required modules
```bash
npm install babel-eslint eslint eslint-config-airbnb eslint-config
```

optional modules
```bash
npm install eslint-plugin-react
```



### .eslintrc

```json
{
    "extends": ["airbnb", "bucket-list"]
}
```

```json
{
    "extends": ["airbnb/base", "bucket-list/rules/back-end"]
}
```

## Run

```bash
./node_modules/.bin/eslint
```
