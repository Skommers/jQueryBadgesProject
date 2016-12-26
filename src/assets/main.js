$(function() {
$.ajax({
  url: 'https://www.codeschool.com/users/skommers.json',
  dataType: 'jsonp',
  success: function(response){
    console.log(response.courses.completed)
    addCources(response.courses.completed)
    //for completed in response.courses.completed {


    //}
  }

})
function addCources(courses){
  console.log("ran");
var $badges = $('#badges');
courses.forEach(function(course){
  console.log('loop');
  var $course = $('<div />',{
    'class':'course'
}).appendTo($badges)

  $('<h3 />',{
    text: course.title
  }).appendTo($course)

  $('<img />',{
    src: course.badge
  }).appendTo($course)

  $('<a />',{
    'class': 'bnt btn-primary',
    target: '_blank',
    href: course.url,
    text: "see course"
  }).appendTo($course)
})
}

});
