On the iTunes websites ([Apple Music/Radio](https://music.apple.com), [Podcasts](https://podcasts.apple.com), [Apps/Games](https://www.apple.com/app-store), etc.), you can get the cover image (e.g. by `Open in new tab` or `Inspect`), however, these images are resized at lower resolutions (removing the resizing suffix (e.g. "/540x540bb.webp") will not work), so this [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) script converts the resized image link to the original image link (to obtain the cover image in its original quality).

## How to use
Create a new bookmark in your browser, copy the entire content from **script.bookmarklet.js** into the URL field of the bookmark.  
Go to the browser tab of the iTunes image link, click on the previously created bookmark, the image link will be converted automatically.

## Examples
- [Origins by ‎Imagine Dragons](https://music.apple.com/us/album/origins-deluxe/1437948883) (Apple Music)  
resized image link: https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3f/80/a8/3f80a8ef-5409-42ac-c126-c7354698c7fc/18UMGIM65849.rgb.jpg/540x540bb.webp  
will be converted to  
original image link: https://a1.mzstatic.com/us/r1000/0/Music112/v4/3f/80/a8/3f80a8ef-5409-42ac-c126-c7354698c7fc/18UMGIM65849.rgb.jpg  

- [Overheard at National Geographic](https://podcasts.apple.com/us/podcast/overheard-at-national-geographic/id1466697207) (Apple Podcasts)  
resized image link: https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6a/c6/27/6ac62782-1fcc-6bf2-59f5-56ebca3f5807/mza_5881293316125837102.jpg/268x0w.webp  
will be converted to  
original image link: https://a1.mzstatic.com/us/r1000/0/Podcasts116/v4/6a/c6/27/6ac62782-1fcc-6bf2-59f5-56ebca3f5807/mza_5881293316125837102.jpg  

- [Call of Duty: Mobile](https://apps.apple.com/us/app/call-of-duty-mobile/id1287282214) (App Store)  
resized image link: https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/fc/b9/78/fcb9786c-3b65-0292-49a2-b2523cc8e9da/AppIcon-1x_U007emarketing-0-9-0-85-220.png/246x0w.webp  
will be converted to  
original image link: https://a1.mzstatic.com/us/r1000/0/Purple122/v4/fc/b9/78/fcb9786c-3b65-0292-49a2-b2523cc8e9da/AppIcon-1x_U007emarketing-0-9-0-85-220.png  

