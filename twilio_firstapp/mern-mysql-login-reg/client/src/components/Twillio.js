import React, { Component } from 'react';
import webChatConfiguration from '../webchat-appConfig'
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import { listNewPositions } from '../services/newPositionService';

class Twilio extends Component {
    componentDidMount() {

        listNewPositions().then(positions => {
            const config = webChatConfiguration;
            const newPositions = positions
                .map(p => ({ value: p.name, label: p.name, selected: false }));

            config.preEngagementConfig
                .fields
                .find(element => element.label === 'opportunities')
                .options
                .push(...newPositions);

            return FlexWebChat.Manager.create(config);
        })
            .then(manager => this.setState({ manager }))
            .catch(error => this.setState({ error }));
    }

    state = {};

    render() {
        const { manager, error } = this.state;
        if (manager) {
            return (
                <FlexWebChat.ContextProvider manager={manager}>
                    <FlexWebChat.RootContainer />
                </FlexWebChat.ContextProvider>
            );


        }
        if (error) {
            console.error("Failed to initialize Flex Web Chat", error);
        }

        return null;

    }
}

export default Twilio;
