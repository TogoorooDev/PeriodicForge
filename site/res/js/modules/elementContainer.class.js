class ElementContainer{
	constructor(eleArray = []){
		this.internelElementArray = eleArray;
	}

	// add(element){
	// 	this.internelElementArray.push(element);
	// }

	add(...elements){
		elements.forEach(item => {
			this.internelElementArray.push(item);
		})
	}

	remove(element){
		this.internelElementArray.filter(arrayEle => { arrayEle.number != element.number });
	}

	get(elementNumber){
		let ret = null;

		this.internelElementArray.forEach(item => {
			if (item.number == elementNumber){
				ret = item;
			}
		});

		return ret;
	}

	getCompatable(ltr, htr){
		let ret = null;
		this.internelElementArray.forEach(item => {
			if (item.lowTrigger == ltr && item.highTrigger == htr){
				ret = item;
			}
		});

		return ret;
	}

}