var appConfig = {
  //  change the your AccountSid
  accountSid: 'AC92eb890055b6176bc9aae37bd4699cd8',
  // change to your Flex Flow SID
  flexFlowSid: 'FOf04ccca0c7caa80fc8540cf8b71c11ef',

  startEngagementOnInit: true,

  preEngagementConfig: {
    description: 'Please provide some information',
    fields: [
      {
        label: 'What is your name?',
        type: 'InputItem',
        attributes: {
          friendlyName: 'name',
          type: 'text',
          required: true
        }
      },

      {
        label: 'What is your email?',
        type: 'InputItem',
        attributes: {
          name: 'email',
          type: 'email',
          placeholder: 'Enter yout email',
          required: true,
          value: 'Bob@bobson.com',
          readOnly: false
        }
      },

      {
        label: 'opportunities',
        type: 'SelectItem',
        attributes: {
          name: 'opt',
          required: true,
          readOnly: false
        },
        options: 'search'[
          ({
            value: 'label1',
            label: 'Software Developers',
            selected: false
          },
          {
            value: 'label2',
            label: 'Multilingual Interpreter',
            selected: false
          },
          {
            value: 'label3',
            label: 'Intake Information Representative',
            selected: false
          },
          {
            value: 'label4',
            label: 'Client care Representative',
            selected: false
          },
          {
            value: 'label5',
            label: 'It Analyst and Programmer',
            selected: false
          },
          {
            value: 'label6',
            label: 'Medical Interpreter',
            selected: false
          })
        ]
      }
    ],
    submitLabel: "Ok Let's Go!"
  },

  attributes:
    '{"status":"ACTIVE","long_lived":false,"pre_engagement_data":{"name":,"question":"Can you help me with my invoice?","location":"http://localhost:8081/","locationOrigin":"http://someOriginUrl.com","someContextProp":"ContextProp1"},"from":"Bob","channel_type":"web"}',

  colorTheme: {
    overrides: brandedColors
  }
};
