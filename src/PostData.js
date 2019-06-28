//import React,{Component} from 'react'

export function PostData(type,userData)
{
	let BaseUrl=`https://api.thewallscript.com/restful`;

	return new Promise((resolve,reject)=>
	{

        fetch(BaseUrl+type,{method:'POST',body:JSON.stringify(userData)})
        .then((response)=>response.Json())
        .then((responseJson)=>{resolve(responseJson);})
        .cath((error)=>{reject(error);});
	}
		)
}

