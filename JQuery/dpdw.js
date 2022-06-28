$(document).ready(function () {
  //var rowCount = $('#empData tr').length;
 //var rowCount = table.row.length;
  addNewRow = function () {
    var i = empData.rows.length;
      if(i-1<3){//$("#empData tbody tr").first().clone()
          var newRow =  '<tr><td class="col-4"><select id="select1"  class="form-control stockCode" name="location"><option value="">select an item</option><option>Item 1</option><option>Item 2</option><option>Item 3</option></select></td><td class="text-center col-4"><button class="btn btn-danger btn1"type="button" onClick="deleteRow(this)"class="kx-repeatable" >X</button></td></tr>'
           $("#UserLocation").append(newRow);
      }
      i++;//onClick='deleteRow(this)'
    }

});


function deleteRow(btn){
  //var i=1;
   i = empData.rows.length;

  if(i>2){
      var row = btn.parentNode.parentNode;
      row.parentNode.removeChild(row);
  }
}
   

$(document).ready(function() {

var masterList = [];

var selectedList = [];



//this function taken from http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript

Array.prototype.equals = function (array) {

// if the other array is a falsy value, return

if (!array)

return false;



// compare lengths - can save a lot of time 

if (this.length != array.length)

return false;



for (var i = 0, l=this.length; i < l; i++) {

// Check if we have nested arrays

if (this[i] instanceof Array && array[i] instanceof Array) {

// recurse into the nested arrays

if (!this[i].equals(array[i]))

  return false;       

}           

else if (this[i] != array[i]) { 

// Warning - two different object instances will never be equal: {x:20} != {x:20}

return false;   

}           

}       

return true;

}  



function createMasterList() {

masterList = [];

$('#select1\\(1\\)').children('option').each(function() {

masterList.push($(this).val());

});

masterList.shift(); //remove blank value

}



createMasterList(); //used to check if all dropdown values have been selected



function updateSelectedList() {

selectedList = [];

var selectedValue;

$('.stockCode').each(function() {

selectedValue = $(this).find('option:selected').text();

if (selectedValue != "" && $.inArray(selectedValue, selectedList) == "-1") {

selectedList.push(selectedValue);

}

});

}



//disable the dropdown items that have already been selected

function disableAlreadySelected() {

$('option').each(function() {
if ($.inArray(this.value, selectedList) != "-1") {
  
$(this).attr("disabled", true);

} 
else {

$(this).attr("disabled", false);

}

});
updateSelectedList();
}







$('#empData').on('click', '.stockCode', function() {

setTimeout(function() {

updateSelectedList();

disableAlreadySelected();



}, 0);

});



//when a new table row is added, disable the dropdown options that have already been selected

$('#empData #AddNew').on('click', disableAlreadySelected);



//when a table row is removed, update all dropdowns (the removed row's dropdown option will be re-enabled

//in remaining dropdowns

$('#empData').on('DOMNodeRemoved', '.kx-repeatable > tr', function() {

updateSelectedList();

disableAlreadySelected();

hideAddButtonIfDone();

});



});














// $(document).ready(function () {

// 	// Denotes total number of rows
// 	var rowIdx = 0;
//   var x= $('#dropdownid').val('selectedvalue');
// 	// jQuery button click event to add a row
// 	$('#addBtn').on('click', function () {

// 		// Adding a row inside the tbody.
//     if(rowIdx>1){
//       return false;
//     }
//     else{
    
// 		$('#tbody').append(`<tr id="R${rowIdx++} ">
//         <td><select id='products'   class="s">
//         <option  class="text-center" value="item1"id="1">Item 1</option>
//         <option class="text-center" value="item2"id="item2" >Item 2</option>
//         <option class="text-center" value="item3"id="item3">Item 3</option>
//         </td>
// 			<td class="text-center">
// 				<button class="btn btn-danger remove"
// 				type="button">X</button>
// 				</td>
// 			</tr>`);
//   }
 
     
//  // jQuery button click event to remove a row.
// 	$('#tbody').on('click', '.remove', function () {

// 		// Getting all the rows next to the row
// 		// containing the clicked button
// 		var child = $(this).closest('tr').nextAll();

// 		// Iterating across all the rows
// 		// obtained to change the index
// 		child.each(function () {

// 		// Getting <tr> id.
// 		var id = $(this).attr('id');

// 		// Getting the <p> inside the .row-index class.
// 		var idx = $(this).children('.row-index').children('p');

// 		// Gets the row number from <tr> id.
// 		var dig = parseInt(id.substring(1));

// 		// Modifying row index.
// 		idx.html(`Row ${dig - 1}`);

// 		// Modifying row id.
// 		$(this).attr('id', `R${dig - 1}`);
// 		});

// 		// Removing the current row.
// 		$(this).closest('tr').remove();

// 		// Decreasing total number of rows by 1.
// 		rowIdx--;
// 	});
// 	});
// });