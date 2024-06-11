const Button = () => {
    //const handleClick =() => console.log("ouch!");
    let next = document.querySelector(".next");
    const handleClick2 =() => {
        let myitems = document.querySelectorAll(".items");
        document.querySelector(".slider").prepend(myitems[myitems.length - 1]);
    }
    return<button onClick={handleClick2}><i class="fa-solid fa-arrow-left"></i></button>
}
export default Button