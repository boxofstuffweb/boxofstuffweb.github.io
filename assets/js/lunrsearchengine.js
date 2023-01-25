
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about/",
    "title": "About BoxOfStuff.com",
    "body": "This domain name is for lease "
    }, {
    "id": 2,
    "url": "/about",
    "title": "About BoxOfStuff.com",
    "body": "What’s in the box? "
    }, {
    "id": 3,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/",
    "title": "Home",
    "body": "      Featured:                                 All Stories:                                                             BoxOfStuff. com domain name for sale / lease              :       This domain name is available to lease. Minimum 5 year term. Reach out for details. Do you have a box? Does it have stuff in it? Does it need a. . . :                               04 Jul 2021                                                                                            Loot boxes!              :       Loot Boxes:                               10 Feb 2021                                                                                            Welcome to BoxOfStuff. com!              :       Do you have a box? Does it have stuff in it? Does it need a domain name? You’ve come to the right place. But in order to unlock the power. . . :                               16 Nov 2020                                            "
    }, {
    "id": 5,
    "url": "/About",
    "title": "",
    "body": ""
    }, {
    "id": 6,
    "url": "/redirects.json",
    "title": "",
    "body": "{“/About”:”/about”} "
    }, {
    "id": 7,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 8,
    "url": "/domain-for-sale/",
    "title": "BoxOfStuff.com domain name for sale / lease",
    "body": "2021/07/04 - This domain name is available to lease. Minimum 5 year term. Reach out for details. Do you have a box? Does it have stuff in it? Does it need a domain name? You’ve come to the right place. But in order to unlock the power of the box, you must make an offer that is reasonable. This domain is available for lease, inquire via twitter or email for details. Loot BoxesClothing BoxesFood BoxesFree Boxes"
    }, {
    "id": 9,
    "url": "/loot-boxes/",
    "title": "Loot boxes!",
    "body": "2021/02/10 - Loot BoxesVideo games sell loot boxes. People really love them! (not really). The video game industry has turned video games into continuous money making machines by selling credits that can be used to buy loot boxes, and then ultimately turning them into lottery like devices to obtain addons, skins, weapons and such for additional game play options. Examples of Loot Boxes"
    }, {
    "id": 10,
    "url": "/welcome-to-boxofstuff/",
    "title": "Welcome to BoxOfStuff.com!",
    "body": "2020/11/16 - Do you have a box? Does it have stuff in it? Does it need a domain name? You’ve come to the right place. But in order to unlock the power of the box, you must make an offer that is reasonable. This domain is available for lease, inquire below for details. Loot BoxesVideo games sell loot boxes. People really love them! (not really). The video game industry has turned video games into continuous money making machines by selling credits that can be used to buy loot boxes, and then ultimately turning them into lottery like devices to obtain addons, skins, weapons and such for additional game play options. Clothing BoxesNot sure what type of stitch you need to get your clothing fix? There are plenty of third parties now that will sell you services and clothing, so you never have to leave your house! Unless you want other people to see this clothing you buy. You can find stylists online that will send you items that you can try on, and only pay for the items that you choose to keep. Food BoxesNot sure what you want for dinner tonight? Not sure what ingredients you need to make your next meal? There are food boxes for that! Many of these boxes come with all the ingredients, and instructions for preparing a meal. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});