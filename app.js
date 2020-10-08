//  function to get list of people user follows
$('.following').on('click', function getFollowing() {
    const user = window.user;
    $.ajax({
      type: 'GET',
      url: `/api/connections/${user}`
    }).then(function (res) {
      const followingList = $('<ul>');
      for (let i = 0; i < res.length; i++) {
        const oneFollowee = $('<li>').text(`${res.User.firstName} ${res.User.lastName}`);
        followingList.append(oneFollowee);
      }
      $('.modal-body').append(followingList).css('z-index', '2');
    });
  });

  