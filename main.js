'use strict';
$(function () {
  $('#register').hide();
  //   $('#login').hide();
  $('.container-header-navigation-form').on('click', (call) => {
    if (call.target.parentNode.id === 'loginTap') {
      $('#registerTap').removeClass('selected');
      $('#' + call.target.parentNode.id).addClass('selected');
      $('#login').show();
      $('#register').hide();
    } else {
      $('#loginTap').removeClass('selected');
      $('#' + call.target.parentNode.id).addClass('selected');
      $('#login').hide();
      $('#register').show();
    }
  });
});

$('#formSubmitLogin').on('submit', (data) => {
  let email = data.target[0].value;
  if (email === '') {
    return false;
  }
  let password = data.target[1].value;
  if (password === '') {
    return false;
  }

  let dataAlert = $('#alert');
  dataAlert[0].innerHTML = '';
  dataAlert.addClass('success');
  dataAlert.append("<p class='m-0'>Data proccess</p>");
  dataAlert.append("<div class='charger'></div>");

  if (true) {
    let dataUser = {
      email: email,
      password: password,
    };
    login(dataUser);
  }
});

$('#formSubmitRegister').on('submit', (data) => {
  let email = data.target[0].value;
  if (email === '') {
    return false;
  }
  let password = data.target[1].value;
  if (password === '') {
    return false;
  }

  let passwordConfirm = data.target[1].value;
  if (passwordConfirm !== password) {
    return false;
  }

  let dataAlert = $('#alert');
  dataAlert[0].innerHTML = '';
  dataAlert.addClass('success');
  dataAlert.append("<p class='m-0'>Data proccess</p>");
  dataAlert.append("<div class='charger'></div>");

  if (true) {
    let dataUser = {
      email: email,
      password: password,
    };
    register(dataUser);
  }
});

function login(data) {
  let dataAlert = $('#alert');
  $.ajax({
    method: 'POST',
    url: 'https://reqres.in/api/login',
    data: data,
    success: function (response) {
      setTimeout(function () {
        dataAlert[0].innerHTML = '';
        dataAlert.removeClass('Error');
        dataAlert.addClass('Success');
        dataAlert.append("<p class='m-0'>Data correct</p>");
      }, 2000);
    },
  }).fail(function (response) {
    setTimeout(function () {
      dataAlert[0].innerHTML = '';
      dataAlert.removeClass('success');
      dataAlert.addClass('Error');
      dataAlert.append("<p class='m-0'>Data incorrect</p>");
    }, 2000);
  });
}

function register(data) {
  let dataAlert = $('#alert');
  $.ajax({
    method: 'POST',
    url: 'https://reqres.in/api/register',
    data: data,
    success: function (response) {
      setTimeout(function () {
        dataAlert[0].innerHTML = '';
        dataAlert.removeClass('Error');
        dataAlert.addClass('Success');
        dataAlert.append("<p class='m-0'>Register correct</p>");
      }, 2000);
    },
  }).fail(function (response) {
    setTimeout(function () {
      dataAlert[0].innerHTML = '';
      dataAlert.removeClass('success');
      dataAlert.addClass('Error');
      dataAlert.append("<p class='m-0'>Register incorrect</p>");
    }, 2000);
  });
}
