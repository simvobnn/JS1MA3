var jsonObject = {
	"video": [{
		"id": 12312412312,
		"name" : "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};

console.log(jsonObject.video[0].id);
console.log(jsonObject.video[0].name);
console.log(jsonObject.video[0].url);
console.log(jsonObject.video[0].author);
for (var i=0;i < jsonObject.video[0].author.data.length;i++){
    console.log(jsonObject.video[0].author.data[i]);
}

    

 