# Styled Components

## Tip1:

Usually when you're styling components using `styled-components` in `React`, It's conventional to just wrap only the parent with a custom element

from styled components and then add `className`(s) to nested elements so you can select them easily.

cause wrapping every single element is pretty tedious because of the following reasons:

1. This can slow you down cause instead of making an element in JSX, you wrap it first in a custom component below and then use it above.

2. This eliminate one of the most important features in styled-components which is `nesting rules`:

```js
const StyledInput = styled.div`
  position: relative;
  input {
    .icon {
      position: absolute;
    }
    &:focus {
      outline: none;
    }
  }
`
```

3. Doesn't look like CSS and makes it very hard to read and understand what's going on and eliminates the use for class names and Ids which isn't a problem using them in `styled-components` context cause the parent className would be generated to a unique identifier when you build your app.

### Mark these words to decide wether It's good to abstract a specefic element to a custom `styled-component` or not:

#### when react developers see JSX they expect:

1. The root if It was a custom component that It'll be below the component function.
2. Any custom components inside the root element of a component to come from external files

## Tip2:

`styled-components` global styles file `GlobalStyles.js` is technically a component, so It should be placed under `src/components` directory

## Tip3:

`styles` folder should only be used to place `*.css` files either It was css modules or pure css, so if you want to add a Theme object to follow a design system It would be better placed in `config/theme.js` instead of `styles/Theme.style.js`

## Tip4:

when you're in a situation like this, where you want to access variables that are only available within the component scope in a styled component

```js
import styled from 'styled-components'

let selected

const Tip = ({ value, select = false }) => {
  selected = select
  return <StyledTip>{value}%</StyledTip>
}

const StyledTip = styled.div`
  background-color: ${({ theme }) =>
    selected ? theme.colors.strongCyan : theme.colors.veryDarkCyan};
  color: ${({ theme }) =>
    selected ? theme.colors.veryDarkCyan : theme.colors.white};
  ...
`
```

Remember... you've access to the `theme` within this context right?

```js
const StyledTip = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ..
`
```

and you know where did you got the `theme` from?, you've extracted it from `props` object 🥳 that means you can solve this problem in a more elegant way

```js
import styled from 'styled-components'

const Tip = ({ value, select = false }) => {
  return <StyledTip select={select}>{value}%</StyledTip>
}

const StyledTip = styled.div`
  background-color: ${(props) =>
    props.select
      ? props.theme.colors.strongCyan
      : props.theme.colors.veryDarkCyan};
  color: ${(props) =>
    props.select ? props.theme.colors.veryDarkCyan : props.theme.colors.white};
`
```

## Tip5:

Please....Never ever push `node_modules` folder to `github` or `production`, It's pretty damn huge, It can take up to 2GB of unnecessary space to upload.

## Other than that, I think you've done a pretty good job, the code was very clean and well organized, Good Job 🌟
