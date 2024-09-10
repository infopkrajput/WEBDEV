# Position 
In CSS, the `position` property is used to control the layout of elements on the page by specifying how an element is positioned relative to its containing block or the viewport.

### Values of `position`:

1. **static (default)**:
   - The default positioning for elements.
   - Elements are placed in the normal document flow (one after the other).
   - Does not respond to the `top`, `right`, `bottom`, or `left` properties.

   ```css
   .static-element {
       position: static;
   }
   ```

2. **relative**:
   - Positioned relative to its **normal position** in the document flow.
   - The `top`, `right`, `bottom`, and `left` properties can be used to adjust the element’s position relative to where it would normally be.
   - Other elements are not affected by this change in position.

   ```css
   .relative-element {
       position: relative;
       top: 20px;   /* Moves the element 20px down from its original position */
       left: 10px;  /* Moves the element 10px to the right from its original position */
   }
   ```

3. **absolute**:
   - Positioned relative to the nearest positioned ancestor (i.e., an ancestor element that is positioned with `relative`, `absolute`, or `fixed`).
   - If no positioned ancestor is found, it is positioned relative to the **initial containing block** (usually the `<html>` element or viewport).
   - Removed from the normal document flow, meaning it doesn't affect other elements.

   ```css
   .absolute-element {
       position: absolute;
       top: 50px;
       left: 100px;
   }
   ```

4. **fixed**:
   - Positioned relative to the **viewport**, which means it stays in the same position on the screen even when the page is scrolled.
   - Like `absolute`, it is removed from the document flow, so other elements will not be affected.

   ```css
   .fixed-element {
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       background-color: black;
       color: white;
   }
   ```

5. **sticky**:
   - A hybrid between `relative` and `fixed`.
   - Acts like a `relative` element until it reaches a defined scroll position, after which it behaves like `fixed`.
   - Typically used to create sticky headers or elements that remain visible as you scroll the page.

   ```css
   .sticky-element {
       position: sticky;
       top: 0; /* Sticks to the top of the viewport when you scroll */
       background-color: yellow;
   }
   ```

---

### Usage of `top`, `right`, `bottom`, `left` Properties:
These properties specify offsets for an element relative to the edges of its positioned ancestor or the viewport.

- **top**: Moves the element down from the top.
- **right**: Moves the element from the right edge.
- **bottom**: Moves the element up from the bottom.
- **left**: Moves the element from the left edge.

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            width: 400px;
            height: 300px;
            background-color: lightgray;
            position: relative; /* The child absolute element will be positioned relative to this */
        }

        .absolute-box {
            position: absolute;
            top: 50px;
            left: 100px;
            width: 100px;
            height: 100px;
            background-color: red;
        }

        .fixed-box {
            position: fixed;
            bottom: 10px;
            right: 10px;
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
    <title>Position Example</title>
</head>
<body>
    <div class="container">
        <div class="absolute-box">Absolute Box</div>
    </div>
    <div class="fixed-box">Fixed Box</div>
</body>
</html>
```

### Key Points:
- **Relative** moves the element relative to its original position without affecting the document flow.
- **Absolute** is positioned relative to the nearest positioned ancestor or the document body, and it is removed from the document flow.
- **Fixed** stays fixed relative to the viewport, even when scrolling.
- **Sticky** combines the behaviors of `relative` and `fixed` and is often used to "stick" headers or elements at a certain point.

Let me know if you want more examples or details on a specific position type!