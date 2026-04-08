const container = document.querySelector("#container")
async function fetchInfo (){
const userResponse = await fetch("https://jsonplaceholder.typicode.com/users")

const activeRespone = await userResponse.json();

activeRespone.map((user) =>{
    const nameContainer = document.createElement("h2");
    const emailConatiner = document.createElement("p");
    const cardContainer = document.createElement("div");

    cardContainer.className = "w-[300px] h-[400px] bg-red-500 rounded-lg p-2 shadow-lg flex flex-col items-center justify-center gap-2";
    nameContainer.className = "text-center text-[blue] text-2xl font-bold"
    emailConatiner.className = "text-center text-xl font-semibold text-gray-500"

    nameContainer.textContent = user.name;
    emailConatiner.textContent = user.email;

    cardContainer.appendChild(nameContainer)
    cardContainer.appendChild(emailConatiner)
    container.appendChild(cardContainer)
})

}
fetchInfo()