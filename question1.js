async function fetchpost(){
    const postOutput = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    
    const data = await postOutput.json()
    console.log(postOutput)
    console.log(data.title)
}
fetchpost()