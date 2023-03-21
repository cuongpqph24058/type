
// function showStringData(a: string): string {
//     return a
// }

// function showNumberData(b: number): number {
//     return b
// }
// // Generic
// function showData<T>(a: T): T {
//     return a
// }

// showData<number>(10)
const numArray = [1,9,4,5,7,10]

// const numArr = [1,2,3,5,8,13] // Fibonacci
// const strArr = ["Hoa", "Duy", "Vu Anh"]
// const result = numArr.map(item => {
//     return item * item
// })

// console.log(result);


// function we17305_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = <T[]>[]
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }

// const result = we17305_map(strArr, (item, index) => {
//     return item + "-we17305"
// })

// console.log(result, "we17305_map");

function selectionSort<T> ( array: T[], callback?: ( a: T, b: T ) => T ): T[]
{


    for ( let i = 0; i < array.length - 1; i++ )
    {


        for ( let j = i + 1; j < array.length; j++ )
        {
            if ( ( !callback && array[ i ] > array[ j ] ) ||
                ( callback && callback( array[ i ], array[ j ] ) > 0 ) )
            {
                var temp = array[ i ];
                array[ i ] = array[ j ];
                array[ j ] = temp;

            }
        }

    }

    return array;
}
const resutt = selectionSort<number>( numArray, ( a, b ) =>
{
    return b - a

} )
console.log( resutt );