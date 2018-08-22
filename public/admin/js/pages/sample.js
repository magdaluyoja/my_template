require("../common.js");
require("select2");
require("bootstrap-sass-datepicker");
require("summernote");

$(document).ready(function() {
	$('.datepicker').datepicker();
	$('.select2').select2();
	$('.summernote-editor').summernote();
});