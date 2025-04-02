const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
let output = document.getElementById("output")
document.getElementById("btn").addEventListener("click",async() => {
	try{
		let response = await fetch(url)
		let data = await response.json()
		output.innerHTML = `<p>${data.title}</p>`
	}catch(err){
		output.innerHTML = "Failed to fetch error"
	}
})
