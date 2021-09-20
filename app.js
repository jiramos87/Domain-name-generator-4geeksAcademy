let pronoun = ['my','your','the','a','one'];
let adj = ['small','fast','rapid','perfect','great','big'];
let noun = ['sprinter','cheetah','eagle','planet','octopus'];
let ext = ['.com','.net','.cl','.io','.org'];

let domainName = '';
for(let i = 0; i < pronoun.length; i++) {
    let domainName2 = domainName.concat(pronoun[i]);
    for(let j = 0; j < adj.length; j++) {
        let domainName3 = domainName2.concat(adj[j]);
        for(let k = 0; k < noun.length; k++) {
            let domainName4 = domainName3.concat(noun[k]);
            for(let l = 0; l < ext.length; l++) {
                let domainName5 = domainName4.concat(ext[l]);
                console.log(domainName5);
                domainName = '';
            }
        }
    }
}
