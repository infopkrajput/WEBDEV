# Transition
In CSS, the `transition` property is used to smoothly change a property from one state to another over a specified duration. This is particularly useful when styling interactive elements such as buttons, hover effects, or animations.

### Basic Syntax:

```css
transition: property duration timing-function delay;
```

### Explanation of Parameters:

1. **Property**: Specifies the CSS property you want to animate (e.g., `width`, `background-color`, `transform`). You can also use `all` to apply the transition to all properties that change.
   
2. **Duration**: Defines how long the transition will take to complete. It’s specified in seconds (`s`) or milliseconds (`ms`), e.g., `0.5s`.

3. **Timing Function**: Defines the speed curve of the transition. Common values:
   - `ease`: Starts slow, speeds up, then slows down (default).
   - `linear`: Maintains a constant speed.
   - `ease-in`: Starts slow, then speeds up.
   - `ease-out`: Starts fast, then slows down.
   - `ease-in-out`: Starts slow, speeds up, then slows down.
   
4. **Delay** (Optional): Specifies the delay before the transition starts. This is also specified in seconds or milliseconds.

### Example with Hover Effect:

```css
div {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: background-color 0.5s ease, width 1s;
}

div:hover {
    background-color: red;
    width: 200px;
}
```

### Breakdown:
- `transition: background-color 0.5s ease, width 1s`: This line states that changes to the `background-color` will take 0.5 seconds with an "ease" curve, while changes to the `width` will take 1 second.
- When you hover over the `div`, the background will smoothly change from blue to red in 0.5 seconds, and the width will expand to 200px in 1 second.

### Example with Multiple Properties:

```css
button {
    padding: 10px 20px;
    background-color: green;
    border: 1px solid transparent;
    transition: background-color 0.3s ease, padding 0.5s, border 0.4s;
}

button:hover {
    background-color: yellow;
    padding: 15px 30px;
    border: 1px solid black;
}
```

### Transition Shorthand:

You can also write `transition` in shorthand for multiple properties like this:

```css
transition: all 0.5s ease-in-out;
```

This applies a transition to **all properties** (e.g., `color`, `background`, `width`, etc.) that change with a duration of 0.5 seconds and an `ease-in-out` timing function.

### Example with Delay:

```css
div {
    background-color: green;
    width: 100px;
    height: 100px;
    transition: background-color 1s ease, width 0.5s 1s; /* 1 second delay on width */
}

div:hover {
    background-color: red;
    width: 200px;
}
```

In this case, when you hover over the `div`, the background color will change immediately but the width will start changing only after a 1-second delay.


### Tips:
- Always use the `transition` property with `hover`, `focus`, or other interactive states to provide a smooth user experience.
- You can combine `transition` with CSS properties like `opacity`, `height`, `width`, `transform`, `background-color`, etc., for smooth transitions.