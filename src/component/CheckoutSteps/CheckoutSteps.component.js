import { PureComponent } from 'react';

import './CheckoutSteps.style.scss'

import {
    BILLING_STEP, DETAILS_STEP, SHIPPING_STEP,
} from 'SourceRoute/Checkout/Checkout.config';

const allSteps = [SHIPPING_STEP, BILLING_STEP, DETAILS_STEP]

export class CheckoutSteps extends PureComponent {

    stepMap = {
        [SHIPPING_STEP]: {
            id: 0,
            title: __('Shipping step'),
        },
        [BILLING_STEP]: {
            id: 1,
            title: __('Billing step'),
        },
        [DETAILS_STEP]: {
            id: 2,
            title: __('Success!'),
        }
    }

    renderTitle(step) {
        const { title } = this.stepMap[step]

        return title
    }

    stepClassName(step, stepId) {
        const { checkoutStep } = this.props
        const currentStepId = this.stepMap[checkoutStep].id

        return stepId < currentStepId || step === checkoutStep ?
            "Step" : "StepDisabled"
    }

    stepCircleCharacter(stepId) {
        const { checkoutStep } = this.props
        const currentStepId = this.stepMap[checkoutStep].id

        return stepId < currentStepId ? '✓' : stepId + 1
    }

    render() {
        return (
            <div className="CheckoutSteps">
                {allSteps.map((step, id) => (
                    <div className={this.stepClassName(step, id)}>
                        <div className="Circle">
                            {this.stepCircleCharacter(id)}
                        </div>
                        <div className="Title">
                            {this.renderTitle(step)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}

export default CheckoutSteps