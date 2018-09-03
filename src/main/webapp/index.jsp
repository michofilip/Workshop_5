<%--
  Created by IntelliJ IDEA.
  User: michal
  Date: 31.08.18
  Time: 15:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

<a href="" id="add">Add new book</a>
<form>
    <%--<label> ID<input type="number" id="id" value="0"> </label><br>--%>
    <label> Title<input type="text" id="title" value="aaaaaaaaaaaaaa"> </label><br>
    <label> Author<input type="text" id="author" value="aaaaaaaaaaaaaa"> </label><br>
    <label> Publisher<input type="text" id="publisher" value="aaaaaaaaaaaaaa"> </label><br>
    <label> ISBN<input type="text" id="isbn" value="12345"> </label><br>
    <label> Type<input type="text" id="type" value="aaaaaaaaaaaaaa"> </label><br>
    <!--<a href="" name="save">Save</a>-->
    <button id="save">Save</button>
    <br>
</form>


<ul id="books">
</ul>

<script
        src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous"></script>
<script src="js/app.js"></script>

</body>
</html>
