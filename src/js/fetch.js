const userName = 'PawelJeziorowski';
fetch(`https://api.github.com/users/${userName}/repos`)
.then(Response =>Response.json())
.then(response=> {
for (let repository of response){
    const {name, html_url} = repository
    console.log(name + ": "+ html_url);

}
})
.catch((e) => console.log(e))