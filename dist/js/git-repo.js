import { Octokit, App } from "https://esm.sh/octokit?dts";

window.addEventListener('DOMContentLoaded', async function () {
    async function get(url) {
        const resp = await fetch(url);
        return resp.json();
    }
    
    const octokit = new Octokit({
        auth: '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',
    });
    const result = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'dharsan-r',
            repo: 'personal-website',
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
        });

    console.log(result.data.language)
    
    


    document.querySelectorAll('.project-info').forEach(async function (identity) {
        const name = identity.getAttribute('data-repo');

        

          
    });


});