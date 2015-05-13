/* Donut chart component */

var React = require('react'),
	component = require('omniscient');

var d = React.DOM;

/* 
*	Donut as a react component. 
*	props should have a cursor, from wich this Donut will render
*/
var Donut = component('Donut', function render(props){

	var dataPaths = props.cursor.cursor(['data']);

	return d.g(null,

	);
});

module.exports = Donut;