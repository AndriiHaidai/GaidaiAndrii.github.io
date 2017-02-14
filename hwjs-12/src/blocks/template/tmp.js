$(function () {
  
  var html = $('#test').html();
  var articles = [
    {
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis perspiciatis modi ipsam deserunt, numquam ad error, rem unde omnis ea. Adipisci pariatur ipsam eos similique explicabo voluptatum asperiores nihil perspiciatis. Facilis excepturi, et eum eligendi quas. Vitae tempore eos ipsam odit architecto. Facilis facere placeat, rem nemo iusto dolor fugit.'
    },
    {
      title: 'Article 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nobis numquam, itaque! Doloribus labore laboriosam in iusto repellendus assumenda culpa, aliquid odit est consectetur dolores possimus officiis at soluta fugiat sint aspernatur error reiciendis quisquam rerum ipsa dolore explicabo aperiam perspiciatis fugit. Ratione ipsum, sequi quos excepturi cum repudiandae, quod iusto facere vel quae, dicta ab eum rerum cumque autem.'
    },
    {
      title: 'Article 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea et corrupti culpa laudantium beatae voluptate, sapiente perferendis enim numquam labore similique quae, aliquid inventore quisquam, blanditiis commodi hic esse! Deserunt placeat ducimus ab, repellat cumque dolore voluptatum. Quisquam, ut illo libero nihil, adipisci ipsa quae, suscipit dolores, a explicabo dignissimos consequatur! Dicta ad obcaecati vero odit reiciendis iste, tenetur quibusdam id minus, aspernatur quam quos, praesentium quo explicabo provident cumque.'
    },
    {
      title: 'Article 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui blanditiis non cum, voluptates illo a cumque praesentium ad rem voluptatum!'
    },

  ];
  var content = tmpl(html, {
    data: articles
  });

  $('body').append(content);

});