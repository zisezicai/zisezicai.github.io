
function JumpTo(id){
    let element = document.getElementById(id);
    element.scrollIntoView({
        behavior:"smooth"
    });
    // window.scrollBy(0,-50)
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}