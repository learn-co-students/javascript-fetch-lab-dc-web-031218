// GET /repos/:owner/:repo/issues
function getIssues() {
	const repo = 'SaturdayAM/javascript-fetch-lab';
  	const url = 'https://api.github.com/repos/'+ repo + '/issues';
  	fetch(url, {method: 'GET'})
  		.then(r=>r.json())
  		.then(json=>json.forEach(issue=>{showIssues(issue)}))

}

function showIssues(json) {
	let issueStr = `<div><h3>${json.title}</h3> <p>${json.body}</p></div>`
	document.getElementById('issues').innerHTML += issueStr;
}

//Create an Issue: POST /repos/:owner/:repo/issues
function createIssue() {
	const repo = 'SaturdayAM/javascript-fetch-lab';
  	const url = 'https://api.github.com/repos/'+ repo + '/issues';

	let titleValue = document.querySelector('#title').value;
	let bodyValue = document.querySelector('#body').value;
	let postObj = {
		"title": titleValue,
		"body": bodyValue
	}

	let fetchInitObj = {
		method: 'post',
		headers: {
			Authorization: `token ${getToken()}`
		},
		body: JSON.stringify(postObj)
	}
	fetch(url, fetchInitObj);
}

function showResults(json) {
}

//List forks: GET /repos/:owner/:repo/forks
//Create fork: POST /repos/:owner/:repo/forks
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const url = 'https://api.github.com/repos/'+ repo + '/forks';
  let fetchInitObj = {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }

  //use fetch to fork it!
  fetch(url, fetchInitObj).then(r => r.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(json){
	let resultsDiv = document.querySelector('#results');
	resultsDiv.innerHTML = `Forked at: <a href="${json['html_url']}">${json['html_url']}</a>`;
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
