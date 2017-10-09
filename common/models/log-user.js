'use strict';
var config = require('../../server/config.json');
var path = require('path');
module.exports = function(Loguser) {
//send verification email after registration
  Loguser.afterRemote('create', function(context, LoguserInstance, next) {
    console.log('> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: LoguserInstance.email,
      from: 'noreply@loopback.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../client/views/tmpl/pages/verify.ejs'),
      redirect: 'core.login',
      Loguser: Loguser
    };
      
      
      
    LoguserInstance.verify(options, function(err, response, next) {
      if (err) return next(err);

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' -
            'before logging in.',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
    });
    
};
