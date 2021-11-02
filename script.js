const calculate = () => {

      let grname = document.getElementById("grname").value;
      let startingBid = document.getElementById("startingBid").value;

      if(grname == "" || startingBid == ""){
        alert("Name or Starting bid is empty!")
        return;
      }

      const age = document.getElementsByName("age");
      const grrep = document.getElementsByClassName("grrep");
      const skills = document.getElementsByClassName("grskills");
      const gredu = document.getElementById("gredu").value
      const grfam = document.getElementById("grfam").value;
      const caste =document.getElementById("caste").value;
      const grletter =document.getElementById("grletter").value;

      let price = Number(startingBid);

      price *= Number(gredu);
      price *= Number(grfam);
      price += Number(caste);

      price = getCheckboxValuesFilterReduce(skills, price);
      price = getRadioValue(age, price);
      price = getCheckboxValuesForLoop(grrep, price);

	  let person = {
		bride_name: grname,
		bride_price: Math.round(price),
		letter_to_bride: grletter
	  }

      res.innerText = `The price for your bride ${person.bride_price}$. His name is ${person.bride_name}. Your love letter is "${person.letter_to_bride}"`;
}

document.getElementById("btn").addEventListener("click", calculate)
	  
const getRadioValue = (node_list, price) => {
      node_list.forEach(item => {
      if (item.checked) {
            price = price * Number(item.value)
      }
      })
      return price;
}

const getCheckboxValuesForLoop = (html_collection, price) => {
	for (let i=0; i < html_collection.length; i++) {
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}

const getCheckboxValuesFilterReduce = (html_collection, price) => {
    let list = Array.from(html_collection).filter(filteration)
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}




   




