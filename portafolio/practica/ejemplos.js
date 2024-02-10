// console.log("mensaje: hola mundo")

// let message = "Hola Mundo :)";
// console.log(message)

// var num = 897
// var flo = 87.32

// console.log(num)
// console.log(flo + num)

// const pi = 3.141597235

// console.log(num * pi)

// ----------------------------------------------

// var name2 = "John";
// var admin = name2;

// console.log(admin)

// ----------------------------------------------

// var array = [1,2,3,4,5,6,7,8,9,0]

//     for (let i of array) 
//     {
//         console.log(i);   
//     }

// ----------------------------------------------

// const string = "Too Bar";
//     for (ch of string)
//     {
//         console.log(ch)
//     }
// console.log("")

// ----------------------------------------------

// const names = ['bob', 'alejandro', 'zandra', 'anna', 'bob'];
// const uniqueNames = new Set(names);
//     for (let name of uniqueNames)
//     {
//         console.log(name);
//     }

//-----------------------------------------------

// const obj = 
// {
//     name: "Bar",
//     age: 20,
//     city: "TIJ"
// }

// for (let key of Object.keys(obj))
// {
//     console.log(key + ": " + obj[key])
// }

// console.log("------------------------------");

// for (let key in obj)
// {
//     console.log(key + ": " + obj[key])
// }

//---------------------- Ciclos WHILE and DO WHILE -------------------------

// var i = 0

// while(i<1000)
// {
//     console.log(i);
//     i += 5
// }

// do 
// {
//     console.log(i);
//     i += 5
// } while(i<1000)

//-----------------------------------------------

// var animal = "kitty"

// if (animal === "kitty")
//     {
//         console.log("yes, is it and is a pretty kitty")
//     }
// else
//     {
//         console.log("no, is not a pretty kitty")
//     }

//-----------------------------------------------

// var animal = "kitty"
// var cat = (animal==="kitty") ? "yes, is it and is a pretty kitty": "no, is not a pretty kitty"
// console.log(cat)

//---------------------- SWITCH -------------------------

// var classroom = 1

// switch (classroom) 
// {
//     case 1:
//         console.log("classroom 1")
//         break;
    
//     case 2:
//         console.log("classroom 2")
//         break;

//     default:
//         console.log("classroom not found")
//         break;
// }

//-----------------------------------------------

// var base = 89
// var altura = 56

// function area(base, altura)
// {
//     return (base * altura)/2
// }
// console.log("El area del triangulo: " + area(base,altura))

//-----------------------------------------------

// var l = 89
// var w = 23
// var h = 12

// function prism(l)
// {
//     return function(w)
//     {
//         return function(h)
//         {
//             return l * w * h;
//         }
//     }
// }

// console.log("El volumen del prisma es: " + prism(l)(w)(h))

//---------------------- Funciones Anonimas, Invocacion Inmediata -------------------------

// (function()
// {
//     console.log("Hello Everyone")
// })();

//----------------------

// (function(message)
// {
//     console.log(message);
// }("Hola hola de nuevo"));

//----------------------

// const f = (function(msg)
//{
//     console.log("Hi" + " " + msg)
//     return msg
// })("Fua");

// console.log(f)

//----------------------

// var a = function() { return 42 } ();
// console.log(a)

//---------------------- Invocacion Nombre -------------------------

// const fx = function sum(x, y)
// {
//     return x + y
// }

// const fy = function(g, h)
// {
//     return g + h
// }

// console.log("fx: " + fx(45, 221) + " - " + "fy: " + fy(65, 89))

//----------------------

// foo();
// function foo()
// {
//     console.log("foo");
// }

//----------------------

// var say = function (times)
// {
//     if (times > 0)
//     {
//         console.log("hello guys!");
//         say(times - 1);
//     }
// }

// var sayHelloTimes = say;
// sayHelloTimes(3);

//---------------------- Funciones con un numero desconocido de argumentos -------------------------

// function personSomeThings(person, ...msg)
// {
//     msg.forEach(words => 
//         {
//             console.log(person, "plays", words);
//         });
// }

// personSomeThings("Antonio", "videogames", "soccer", "basket", "the guitar");

//----------------------

// const logArg = (...args) => console.log(args)
// const list = [1, 2, 3]

// logArg("a", "b", "c", ...list)

//----------------------

function personSay(person, ...msg)
{
    msg.forEach(arg =>
        {
            console.log(person + " say: " + arg)
        })
}

personSay("Monse", "Hola", "Si", "No", "Bien", "Okey", "Bye")

//-----------------------------------------------
