$(document).ready(function(){
	var sites = [
	"http://www.businessinsider.com/health-benefits-of-medical-marijuana-2014-4",
	"http://www.cracked.com/article_20023_5-illegal-drugs-with-surprisingly-wholesome-medical-uses.html", 
	"http://dilanka.cc/ten-reasons-why-you-should-start-doing-drugs/",
	"http://www.medicinalmarijuanaassociation.com/medical-marijuana-blog/5-great-websites-to-buy-weed-online", 
	"http://a056-crimestoppers.nyc.gov/crimestoppers/public/index.html",
	"http://www.thetoptens.com/ways-get-arrested/",
	"https://blog.tsheets.com/2016/just-for-fun/robots-taking-your-job",
	"http://www.textfiles.com/anarchy/FDR/fdr-0366.txt",
	"http://listverse.com/2008/08/07/11-tips-for-outrunning-the-cops/",
	"http://www.askmen.com/money/how_to_300/310_how_to.html",
	];
	var random;
	var input;
	$("#look").click(function(){
		random = sites[Math.floor(Math.random()*sites.length)]
		input = $("#search_input").val();
		$('#search_stuff').append('<a href="'+ random +'"><h3>'+  input +'</h3></a>');
	});
});