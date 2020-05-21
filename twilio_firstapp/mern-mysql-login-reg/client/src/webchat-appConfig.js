
const appConfig = {
  //  change the your AccountSid
  accountSid: 'AC9ecffdbd277b26cc26ea96098fe38195',
  // change to your Flex Flow SID
  flexFlowSid: 'FO3571bb880e57223242fc851ba030f751',

  startEngagementOnInit: false,
  preEngagementConfig: {
    description: 'Please provide some information',
    fields: [
      {
        label: 'What is your name?',
        type: 'InputItem',
        attributes: {
          name: 'friendlyName',
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
        options: [
          {
            value: 'Medical Interpreter',
            label: 'Medical Interpreter',
            selected: false
          }
        ]
      }
    ],
    footerLabel: 'PowerdbyLevanter',
    submitLabel: "Ok Let's Go!"
  },

  attributes:
    '{"status":"ACTIVE","long_lived":false,"pre_engagement_data":{"friendlyName":"Anonymous","email":"Can you help me with my invoice?","location":"http://localhost:8081/","opt":"nha","someContextProp":"ContextProp1"},"from":"Bob","channel_type":"web"}',

  colorTheme: {
    //overrides: brandedColors
  }
};

export default appConfig;