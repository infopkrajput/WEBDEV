# Flexbox
Flexbox (Flexible Box Layout) is a layout model in CSS that provides an efficient way to align and distribute space among items in a container. It’s especially helpful for creating complex layouts without using floats or positioning tricks. With Flexbox, you can easily control the alignment, spacing, and order of elements in a container.

### Flexbox Terminology:
- **Flex container**: The parent element where Flexbox is applied.
- **Flex items**: The direct children of the flex container.

### Flexbox Properties:

#### On the Flex Container:
1. **`display: flex` or `inline-flex`**:
   - Defines the container as a flexbox container.
   - `flex`: The container becomes a block-level flex container.
   - `inline-flex`: The container becomes an inline-level flex container.

   ```css
   .container {
       display: flex; /* or inline-flex */
   }
   ```

2. **`flex-direction`**:
   - Defines the direction of the flex items inside the flex container.
   - Values:
     - `row` (default): Items are placed in a row (left to right).
     - `row-reverse`: Items are placed in a row but reversed (right to left).
     - `column`: Items are placed in a column (top to bottom).
     - `column-reverse`: Items are placed in a column but reversed (bottom to top).

   ```css
   .container {
       display: flex;
       flex-direction: row; /* row, row-reverse, column, column-reverse */
   }
   ```

3. **`justify-content`**:
   - Aligns flex items along the main axis (horizontally by default).
   - Values:
     - `flex-start` (default): Items are aligned to the start of the container.
     - `flex-end`: Items are aligned to the end of the container.
     - `center`: Items are centered along the main axis.
     - `space-between`: Items are evenly distributed; first item at the start, last item at the end.
     - `space-around`: Items are evenly distributed with equal space around them.
     - `space-evenly`: Items are distributed with equal space between them.

   ```css
   .container {
       display: flex;
       justify-content: center; /* flex-start, flex-end, center, space-between, space-around, space-evenly */
   }
   ```

4. **`align-items`**:
   - Aligns flex items along the cross axis (vertically by default).
   - Values:
     - `stretch` (default): Items stretch to fill the container (if no height is set).
     - `flex-start`: Items are aligned to the start of the cross axis.
     - `flex-end`: Items are aligned to the end of the cross axis.
     - `center`: Items are centered along the cross axis.
     - `baseline`: Items are aligned along their baselines.

   ```css
   .container {
       display: flex;
       align-items: center; /* stretch, flex-start, flex-end, center, baseline */
   }
   ```

5. **`flex-wrap`**:
   - Specifies whether the flex items should wrap or stay on a single line.
   - Values:
     - `nowrap` (default): All items are placed in one line.
     - `wrap`: Flex items will wrap onto multiple lines.
     - `wrap-reverse`: Flex items will wrap onto multiple lines, but in reverse order.

   ```css
   .container {
       display: flex;
       flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
   }
   ```

6. **`align-content`** (only works when there are multiple rows of flex items):
   - Aligns rows of flex items when there's extra space along the cross axis.
   - Values:
     - `stretch` (default): Rows stretch to take up the available space.
     - `flex-start`: Rows are packed at the start of the container.
     - `flex-end`: Rows are packed at the end of the container.
     - `center`: Rows are centered in the container.
     - `space-between`: Rows are evenly distributed, with the first row at the start and the last row at the end.
     - `space-around`: Rows are evenly distributed with equal space around them.
     - `space-evenly`: Rows are evenly distributed with equal space between them.

   ```css
   .container {
       display: flex;
       flex-wrap: wrap;
       align-content: center; /* stretch, flex-start, flex-end, center, space-between, space-around, space-evenly */
   }
   ```

---

#### On Flex Items:
1. **`order`**:
   - Controls the order of the flex items. Default is `0`.
   - Lower numbers appear first, higher numbers appear later.

   ```css
   .item {
       order: 2; /* Default is 0 */
   }
   ```

2. **`flex-grow`**:
   - Specifies how much a flex item should grow relative to the rest of the items.
   - Default is `0` (do not grow).
   - A value of `1` means the item will grow to take up the available space.

   ```css
   .item {
       flex-grow: 1; /* Default is 0 */
   }
   ```

3. **`flex-shrink`**:
   - Specifies how much a flex item should shrink relative to the rest of the items when the container is too small.
   - Default is `1` (shrink if necessary).
   - A value of `0` means the item will not shrink.

   ```css
   .item {
       flex-shrink: 0; /* Default is 1 */
   }
   ```

4. **`flex-basis`**:
   - Specifies the initial size of a flex item before the remaining space is distributed. Can be in `px`, `em`, `%`, etc.
   - Default is `auto`.

   ```css
   .item {
       flex-basis: 100px; /* Width of the item before flex-grow/flex-shrink */
   }
   ```

5. **`align-self`**:
   - Overrides the `align-items` property for individual flex items.
   - Values:
     - `auto` (default): Follows the `align-items` property of the flex container.
     - `stretch`: Stretches to fill the container.
     - `flex-start`: Aligns at the start of the container.
     - `flex-end`: Aligns at the end of the container.
     - `center`: Centers the item in the container.
     - `baseline`: Aligns the item along its baseline.

   ```css
   .item {
       align-self: center; /* auto, stretch, flex-start, flex-end, center, baseline */
   }
   ```

---

### Example of Flexbox Layout:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            height: 300px;
            background-color: lightgray;
        }

        .item {
            background-color: tomato;
            color: white;
            padding: 20px;
            text-align: center;
            margin: 10px;
            flex-basis: 100px;
            flex-grow: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

### Explanation:
- The `.container` is a flex container.
- The `.item` elements are the flex items, which grow (`flex-grow: 1`) to take up available space, but with a minimum base size (`flex-basis: 100px`).
- The items are distributed evenly using `justify-content: space-around`, and aligned centrally in the container with `align-items: center`.

Flexbox is ideal for responsive design and complex layouts. Let me know if you'd like more details or specific examples!