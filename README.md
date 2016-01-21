# ESlint config

## Install

### npm

required modules
```bash
npm install babel-eslint eslint eslint-config-airbnb eslint-config-trejgun
```

optional modules
```bash
npm install eslint-plugin-react
```



### .eslintrc

```json
{
    "extends": ["airbnb", "trejgun"]
}
```

```json
{
    "extends": ["airbnb/base", "trejgun/rules/back-end"]
}
```

## Run

```bash
./node_modules/.bin/eslint
```
