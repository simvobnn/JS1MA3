var jsonObject = {
	"video": [{
		"id": 12312412312,	//logged
		"name" : "Ecuaciones Diferenciales",	//logged
		"url": "/video/math/edo/12312412312",	//logged
		"author": {		//logged, but excluded
			"data": [{
				"name_author": "Alejandro Morales",		//logged
				"url": "/author/alejandro-morales",		//logged
				"type": "master"	//logged
			}]
		}
	}]
};
var jsonObjectArray = (Object.values(jsonObject.video[0]));
for (var i=0, jOALength = jsonObjectArray.length;i < jOALength -1;i++){
	console.log(jsonObjectArray[i]);
}
/*
console.log(jsonObject.video[0].id);
console.log(jsonObject.video[0].name);
console.log(jsonObject.video[0].url);
console.log(jsonObject.video[0].author);
*/
var dataArray = (Object.values(jsonObject.video[0].author.data[0]));
for (var i=0, dALength = dataArray.length;i < dALength;i++){
	console.log(dataArray[i]);
}