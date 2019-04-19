
const options = {
    headers: new Headers({
        'Content-Type': "application/json",
        "Accept": "application/json",
        "type": "all",
        "sort": "created",
        "direction": "desc",
        "visibility": "public"
    })
};

//goal: to take user name from a form to search
/*pcode: when form is submitted -> trigger event listener
         pass user name to triggerCall*/
function searchForUserHandle() {
    $('form').submit(function(event) {
        event.preventDefault();
        let userName = $('#user-name-input').val();
        const dataObj = getGithubApi(userName);
});
 
   console.log("searchForUserHandle function ran"); 
}

function getGithubApi (userName) {
    console.log("getGithubApi function ran");
    const url = `https://api.github.com/orgs/${userName}/repos`;
    fetch(url, options)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
        console.log("fetch function ran");
}
searchForUserHandle();
























function triggerCall() {
//goal: fetch github api with header of user name and return list of user repos
/*pcode: see above*/
    console.log("triggerCall function ran")
}


function displayRepos() {
//goal: show list of user repos
/*pcode: display data in html similar to a render function*/
    console.log("displayRepos function ran")
}
const handle = searchForUserHandle() 


