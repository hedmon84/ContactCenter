//import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
// import * as Flex from "@twilio/flex-ui";
// import * as FlexWebChat from "@twilio/flex-ui";

//import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'SamplePlugin';


export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */

  init(flex, manager) {
    this.registerReducers(manager);


    manager.strings.TaskInfoPanelContent = `
    <h1>Informacion del aplicante</h1>
    <hr />
    <h2>Nombre del aplicante</h2>
    <p>{{task.attributes.name}}</p>
    <hr />
    <h2>Correo del aplicante</h2>
    <p>{{task.attributes.email}}</p>
    <hr />
    <h2>Plaza a la cual aplica</h2>
    <p>{{task.attributes.opportunities}}</p>
    <hr />
    <h2>location</h2>
    <p>{{task.attributes.location}}</p>
    <hr/>
    <h2>Fecha de creacion del chat</h2>
    <p>{{task.dateCreated}}</p>
    <hr/>
    `;


    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task
        ? `https://hedmon.aidaform.com/templates-en-employment-application-form?q=${task.attributes.name}`
        : 'https://hedmon.aidaform.com/templates-en-employment-application-form';
    }
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}