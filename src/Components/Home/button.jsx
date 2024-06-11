const Button = () => {
    //const handleClick =() => console.log("ouch!");
    let next = document.querySelector(".next");
    const handleClick2 =() => {
        let myitems = document.querySelectorAll(".items");
        document.querySelector(".slider").appendChild(myitems[0]);
    }
    return<button onClick={handleClick2}><i class="fa-solid fa-arrow-right"></i></button>
}
export default Button
