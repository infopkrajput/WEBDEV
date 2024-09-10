# day 8 
## hover div
this property change any selected div properties like change color change shape, time taking to change shape, delay duration 
```css
div:hover
{
    background-color: beige;
    /* Shape change 100px border radius*/
    border-radius: 100px;
    
}
```
This till change property value
```css
div{
    height: 200px;
    width: 200px;
    background-color: blue;
    /* any change while hover or click take this time */
    transition: 800ms;
    /* transition change after given time  */
    transition-delay: 1ms;
    /* transition changing function like steps linear  //*/
    transition-timing-function: steps(5);
}
```
### transition effect to change position 
```css
div{
    height: 200px;
    width: 200px;
    background-color: blue;
    margin: 0 auto;
    margin-top: 20px;
    transition: margin-top 2s ease-in-out 0.2s;
    
}
div:hover
{
    background-color: aqua;
    margin-top: 200px;

}
``` 

