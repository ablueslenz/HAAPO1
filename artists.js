
<!DOCTYPE html>
<html  ng-app="artistsAPP" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>History of African American Photographers Online</title>

    <!-- Bootstrap core CSS -->
    <link href="dist/css/bootstrap.min.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
    <link href="stylesheet.css" rel="stylesheet">
  </head>
<!-- NAVBAR
================================================== -->
  <body ng-controller="ArtistsListCtrl">
    <div class="navbar-wrapper">
      <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">History of African American Photographers Online</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">More<span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="browse.html">Browse</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header"><a href="resources.html">RESOURCES</a></li>
                    <li><a href="timeliner.html">Timeline</a></li>
                    <li><a href="books.html">Books</a></li>
                    <li><a href="terms.html">Elements of Photography</a></li>
                    <li><a href="website.html">Photography Websites</a></li>
                    <li><a href="organizations">Photography Organizations</a></li>
                  </ul>
                </li>
              </ul>
              <form class="navbar-form navbar-right" role="search">
                  <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                 </div>
                  <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
          </form>
            </div>
          </div>
        </nav>

      </div>
    </div>
                 
<div class="container">
        <div class="container-fluid">
          <div class="row'">
          <div class="col-md-2"

                Search: <input ng-model="query">
           </div>
           <div class="col-md-10">     

                 <ul>
                              <li ng-repeat="artist in artists | filter:query">
                                  <span>{{artists.fname}}</span>
                                  <span>{{artists.lname}}</span>
                                  <p>{{artists.birth}}</p>
                                  <p>{{artists.death}}</p>
                                  <p>{{artists.subject}}</p>
                                  <p>{{artists.process}}</p>
                                  <p>{{artists.sex}}</p>
                                  <p>{{artists.style}}</p>  
                              </li>
                              
                 </ul>

            </div>
        </div>
      </div>










      <!-- FOOTER -->
      <footer>
        <p class="pull-right"><a href="#">Back to top</a></p>
        <p>&copy; 2014 eko design and consulting, inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>

    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="dist/js/bootstrap.min.js"></script>
    <script src="assets/js/docs.min.js"></script>
    <script src="bower_components/angular/angular.js"></script>
      <script src="js/controllers.js"></script>
    
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
