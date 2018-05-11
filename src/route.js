import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './component/Dashboard/Dashboard'
import WizardOne from './component/Wizard/WizardOne';
import WizardTwo from './component/Wizard/WizardTwo';
import WizardThree from './component/Wizard/WizardThree';
export default (
        <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='/wizard/step1' component={WizardOne} />
            <Route path='/wizard/step2' component={WizardTwo} />
            <Route path='/wizard/step3' component={WizardThree} />
    </Switch>
)

