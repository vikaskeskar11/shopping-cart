let Constants = {
  SALT_WORK_FACTOR: 10,
  PROTOCOL_HTTPS: 'https',
  adminUser: {
    firstName: 'Admin',
    lastName: 'Tansa'
  },
  passcodeStatus: {
    VERIFIED: 'verified',
    ACTIVE: 'active',
    EXPIRED: 'expired'
  },
  connectionRequestErrors: {
    INVALID_EMAIL: 'invalid.email',
    INVALID_PASSCODE: 'invalid.passcode',
    EXPIRED_PASSCODE: 'expired.passcode'
  },
  emailTemplates: [{
    name: 'sendLicenseKey',
    body: "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html><head><meta http-equiv='Content-type' content='text/html; charset=utf-8'/><link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/><style type='text/css' media='screen'>[style*='open-sans']{font-family: 'Open Sans', Arial, sans-serif !important;/*, Arial, sans-serif*/}</style></head><body><table cellpadding='0' cellspacing='0' border='0' width='620px'><tbody><tr><td class='registrationMailWrapper' style='padding: 10px; text-align: left; background-color: #49494D;' align='left'><table class='mailContainer' style='width: 600px; height:205px;border-spacing: 0px; padding: 0px;'><tbody><tr><td class='lingofyMailLogoContainer' style='border-spacing: 0px; padding: 0px; color: black; font-size: 14px; font-weight: bold;'><img class='tansaMailLogo' src='cid:tns@tansaMailLogo' style='height:205px; width:600px;'></img></td></tr><tr><td class='mailEditableContentWrapper registrationMail' style='background-color: #FFFFFF; font-size: 13px; padding-top: 60px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px;'><div class='mailBody' style='color: #49494D; font-family: open-sans; font-size: 15pt;'><p>Dear user,</p><p>Following is your license key:</p><p><span class='notEditable'><%=licenseKey %></span><br></p><p>Happy editing!<br>The Tansa Support Team</p></div></td></tr></tbody></table></td></tr></tbody></table></body></html>",
    subject: 'Tansa License Key'
  },
  {
    name: 'sendPasscode',
    body: "<!DOCTYPE html     PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'> <html>  <head>     <meta http-equiv='Content-type' content='text/html; charset=utf-8' />     <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />     <style type='text/css' media='screen'>         [style*='open-sans'] {             font-family: 'Open Sans', Arial, sans-serif !important;             /*, Arial, sans-serif*/         }     </style> </head>  <body>     <table cellpadding='0' cellspacing='0' border='0' width='620px'>         <tbody>             <tr>                 <td class='registrationMailWrapper' style='padding: 10px; text-align: left; background-color: #49494D;'                     align='left'>                     <table class='mailContainer' style='width: 600px; height:205px;border-spacing: 0px; padding: 0px;'>                         <tbody>                             <tr>                                 <td class='lingofyMailLogoContainer'                                     style='border-spacing: 0px; padding: 0px; color: black; font-size: 14px; font-weight: bold;'>                                     <img class='tansaMailLogo' src='cid:tns@tansaMailLogo'                                         style='height:205px; width:600px;'></img></td>                             </tr>                             <tr>                                 <td class='mailEditableContentWrapper registrationMail'                                     style='background-color: #FFFFFF; font-size: 13px; padding-top: 60px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px;'>                                     <div class='mailBody'                                         style='color: #49494D; font-family: open-sans; font-size: 15pt;'>                                         <p>Dear user,</p>                                         <p>Here is your one-time passcode:</p>                                         <p><span class='notEditable'><%=passcode %></span><br></p>                                         <p>Happy editing!<br>The Tansa Support Team</p>                                     </div>                                 </td>                             </tr>                         </tbody>                     </table>                 </td>             </tr>         </tbody>     </table> </body>  </html>",
    subject: 'Tansa Connection Passcode'
  }]
}

module.exports = Constants
