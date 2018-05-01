function getIssues() {
  // /users/:username/repos
  fetch('https://api.github.com/repos/azeelleeza/javascript-fetch-lab/issues', {
  // fetch('https://api.github.com/users/azeelleeza/repos', {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => showIssues(res.json()));

}

function showIssues(json="") {
  console.log(json);
  document.getElementsByClassName('issues').innerHTML+=json;
}

function createIssue() {
const postData = {
  body: document.getElementById('title').value + document.getElementById('body').value
};
  fetch('https://api.github.com/repos/azeelleeza/javascript-fetch-lab/issues', {
    method: 'post',
    // body: JSON.stringify(postData),
    body: document.getElementById('title').value + document.getElementById('body').value,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => console.log(res));
}

function showResults(json) {
  document.getElementById('results').innerHTML+=json;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch('https://api.github.com/repos/'+repo+'/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res=>res.json()).then(res => console.log(res)).then(res => showResults(res));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
