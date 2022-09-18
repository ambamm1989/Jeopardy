// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;
const jeopardyBoard = $("#jeopardy");
let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds() {
    let randomIds = _.sampleSize(catIds.data, NUM_CATEGORIES);
	let categoryIds = [];
	// push each id into an array
	for (cat of randomIds) {
		categoryIds.push(cat.id);
	}
	return categoryIds;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
    const cat = catIds.map(function(e) {
 
        let res = axios.get(`https://jservice.io/api/clues?category=${e}`);
        return res;
    });
 
    Promise.all(cat).then((values) => {
        for (let value of values) {
           let arr = value.data.slice(0, 5);
           for (let array of arr) {
               let cluesArray = [
                   {
                       question: array.question,
                       answer: array.answer,
                       showing: null
                   }
               ];
               let clue = {
                   title: array.category.title,
                   clueArray: cluesArray
               }
               catsAndClues.push(clue);
           }
        } console.log(catsAndClues);
    });
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    $("#game-board").append(
        `<table class="table table-bordered table-dark">
            <thead>
                <tr>
                    <th scope="col">${catsAndClues[0].title}</th>
                    <th scope="col">${catsAndClues[5].title}</th>
                    <th scope="col">${catsAndClues[10].title}</th>
                    <th scope="col">${catsAndClues[15].title}</th>
                    <th scope="col">${catsAndClues[20].title}</th>
                    <th scope="col">${catsAndClues[25].title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-question="${catsAndClues[0].clueArray[0].question}"
                        data-answer="${catsAndClues[0].clueArray[0].answer}"
                        data-showing="${catsAndClues[0].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[5].clueArray[0].question}"
                        data-answer="${catsAndClues[5].clueArray[0].answer}"
                        data-showing="${catsAndClues[5].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[10].clueArray[0].question}"
                        data-answer="${catsAndClues[10].clueArray[0].answer}"
                        data-showing="${catsAndClues[10].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[15].clueArray[0].question}"
                        data-answer="${catsAndClues[15].clueArray[0].answer}"
                        data-showing="${catsAndClues[15].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[20].clueArray[0].question}"
                        data-answer="${catsAndClues[20].clueArray[0].answer}"
                        data-showing="${catsAndClues[20].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[25].clueArray[0].question}"
                        data-answer="${catsAndClues[25].clueArray[0].answer}"
                        data-showing="${catsAndClues[25].clueArray[0].showing}">?
                    </td>
                </tr>
                <tr>
                    <td data-question="${catsAndClues[1].clueArray[0].question}"
                        data-answer="${catsAndClues[1].clueArray[0].answer}"
                        data-showing="${catsAndClues[1].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[6].clueArray[0].question}"
                        data-answer="${catsAndClues[6].clueArray[0].answer}"
                        data-showing="${catsAndClues[6].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[11].clueArray[0].question}"
                        data-answer="${catsAndClues[11].clueArray[0].answer}"
                        data-showing="${catsAndClues[11].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[16].clueArray[0].question}"
                        data-answer="${catsAndClues[16].clueArray[0].answer}"
                        data-showing="${catsAndClues[16].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[21].clueArray[0].question}"
                        data-answer="${catsAndClues[21].clueArray[0].answer}"
                        data-showing="${catsAndClues[21].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[26].clueArray[0].question}"
                        data-answer="${catsAndClues[26].clueArray[0].answer}"
                        data-showing="${catsAndClues[26].clueArray[0].showing}">?
                    </td>
                </tr>
                <tr>
                    <td data-question="${catsAndClues[2].clueArray[0].question}"
                        data-answer="${catsAndClues[2].clueArray[0].answer}"
                        data-showing="${catsAndClues[2].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[7].clueArray[0].question}"
                        data-answer="${catsAndClues[7].clueArray[0].answer}"
                        data-showing="${catsAndClues[7].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[12].clueArray[0].question}"
                        data-answer="${catsAndClues[12].clueArray[0].answer}"
                        data-showing="${catsAndClues[12].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[17].clueArray[0].question}"
                        data-answer="${catsAndClues[17].clueArray[0].answer}"
                        data-showing="${catsAndClues[17].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[22].clueArray[0].question}"
                        data-answer="${catsAndClues[22].clueArray[0].answer}"
                        data-showing="${catsAndClues[22].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[27].clueArray[0].question}"
                        data-answer="${catsAndClues[27].clueArray[0].answer}"
                        data-showing="${catsAndClues[27].clueArray[0].showing}">?
                    </td>
                </tr>
                <tr>
                    <td data-question="${catsAndClues[3].clueArray[0].question}"
                        data-answer="${catsAndClues[3].clueArray[0].answer}"
                        data-showing="${catsAndClues[3].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[8].clueArray[0].question}"
                        data-answer="${catsAndClues[8].clueArray[0].answer}"
                        data-showing="${catsAndClues[8].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[13].clueArray[0].question}"
                        data-answer="${catsAndClues[13].clueArray[0].answer}"
                        data-showing="${catsAndClues[13].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[18].clueArray[0].question}"
                        data-answer="${catsAndClues[18].clueArray[0].answer}"
                        data-showing="${catsAndClues[18].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[23].clueArray[0].question}"
                        data-answer="${catsAndClues[23].clueArray[0].answer}"
                        data-showing="${catsAndClues[23].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[28].clueArray[0].question}"
                        data-answer="${catsAndClues[28].clueArray[0].answer}"
                        data-showing="${catsAndClues[28].clueArray[0].showing}">?
                    </td>
                </tr>
                <tr>
                    <td data-question="${catsAndClues[4].clueArray[0].question}"
                        data-answer="${catsAndClues[4].clueArray[0].answer}"
                        data-showing="${catsAndClues[4].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[9].clueArray[0].question}"
                        data-answer="${catsAndClues[9].clueArray[0].answer}"
                        data-showing="${catsAndClues[9].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[14].clueArray[0].question}"
                        data-answer="${catsAndClues[14].clueArray[0].answer}"
                        data-showing="${catsAndClues[14].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[19].clueArray[0].question}"
                        data-answer="${catsAndClues[19].clueArray[0].answer}"
                        data-showing="${catsAndClues[19].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[24].clueArray[0].question}"
                        data-answer="${catsAndClues[24].clueArray[0].answer}"
                        data-showing="${catsAndClues[24].clueArray[0].showing}">?
                    </td>
                    <td data-question="${catsAndClues[29].clueArray[0].question}"
                        data-answer="${catsAndClues[29].clueArray[0].answer}"
                        data-showing="${catsAndClues[29].clueArray[0].showing}">?
                    </td>
                </tr>
            </tbody>
        </table>
        
        `
    )
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    let x = e.target.id[0];
	let y = e.target.id[2];
	// if answer is displayed, do nothing
	if (e.target.classList.contains("answer")) {
		return;
		// if question is displayed, display answer instead
	} else if (e.target.classList.contains("question")) {
		e.target.innerText = categories[x].clues[y].answer;
		e.target.classList.remove("question");
		e.target.classList.add("answer");
		// if nothing is displayed yet, display question
	} else {
		e.target.innerText = categories[x].clues[y].question;
		e.target.classList.add("question");
	}
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    const resCategories = await axios.get("http://jservice.io/api/categories", {
		params: {
			count: 100
		}
	});
	let catIds = getCategoryIds(resCategories);

	for (id of catIds) {
		// for each id, get clue data from jservoce.io
		const resTitles = await axios.get("http://jservice.io/api/clues", {
			params: {
				category: id
			}
		});
		getCategory(resTitles);
	}
	fillTable();
}

/** On click of start / restart button, set up game. */
$("#restart").on("click", function() {
	location.reload();
});

// when document is loaded, start game and add event listener for jeopardy board
$(document).ready(function() {
	setupAndStart();
	$("#jeopardy").on("click", "div", handleClick);
});
// TODO

/** On page load, add event handler for clicking clues */

// TODO