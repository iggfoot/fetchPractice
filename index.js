function searchForUserHandle() {
//goal: to take user name from a form to search
/*pcode: when form is submitted -> trigger event listener
         pass user name to triggerCall*/
$('form').submit(function(event) {
    let userName = $('#user-name-input').val();

}
 
   console.log("searchForUserHandle function ran") 
};

function getGithubApi () {
    const url = `https://api.github.com/orgs/${userName}/repos`
    console.log("getGithubApi function ran")
};

const options = {
    headers: new Headers ({
        Accept: application/vnd.github.v3+json,

    })
};

fetch(url, options){

    console.log("fetch function ran")
}


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


