function mandEmail(){
    var mandrill = require
        ('node-mandrill')
        ('1IAxU49l9P6IffQbvCOwqw');
    var subscription = [
        
    ]

mandrill('/messages/send-template', {
    template_name: "welcome-email",
    template_content: [],
    message: {
        to: [{email: '@gmail.com', name:'Akash'}],
        from_email: 'akash@swarajyamag.com',
        subject: "Thanks For Subscribing!",
        text: "Thanks for subscribing to Swarajya Magazine",
        merge: true,
        merge_language: "handlebars",
        global_merge_vars:
                          [ {
                                        name:"subscription",
                                        content:
                                            {
                                                "subscribed-till":"12-08-2023"
                                            }
                        }]
    }
}, function(error, response)
{
    // there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
});
 
}
mandEmail();




// const mailchimpClient = require("mailchimp_transactional")("YOUR_API_KEY");

// const run = async () => {
//   const response = await mailchimpClient.messages.sendTemplate({
//     template_name: "template_name",
//     template_content: [{}],
//     message: {},
//   });
//   console.log(response);
// };

// run();

