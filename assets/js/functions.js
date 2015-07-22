$( document ).ready(function() {

  // Get started!
  
  $('article').readingTime({
    lessThanAMinuteString: '<1 min'
  });

  $('header').readingTime({
        remotePath: 'article.html',
        remoteTarget: 'article'
    });
});
