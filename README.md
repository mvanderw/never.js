# never.js

In the spirit of awesome control flow libraries like async and step, never.js aims to ease the pain of callback hell by going one step further: it never executes your callbacks. Managing your application logic has never been easier!

The never.js library handles parallel & serial execution as well as any stepping/queuing logic you might ever need.

## Usage

The library exports two functions. Both accept any number of functions as arguments.

####`never(callback)`
Never executes your callback.

####`neverSync(callback)`
Never executes your callback, synchronously.

Note: this will still not block, since never doesn't execute your callback anyway.

## Error handling

never.js never executes your callbacks, so you get automagic built-in error handling for free.

## This is stupid

Fair enough. I had a few mins waiting for my database work and wanted to get a quick look at [Mocha](http://mochajs.org/).

## License 

(The WTF Public License)


            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

    Copyright (C) 2013 Marius van der Wel <marius.vanderwel@gmail.com>

    Everyone is permitted to copy and distribute verbatim or modified
    copies of this license document, and changing it is allowed as long
    as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

    0. You just DO WHAT THE FUCK YOU WANT TO.
