/**
 * Created by irekromaniuk on 4/23/2015.
 */
function foo() {
    console.error('foo');
}

process.nextTick(foo);
console.error('bar');
