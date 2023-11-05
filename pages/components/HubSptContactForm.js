
import React, {useEffect} from "react";

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '44299025',
                    formId: '7df22d0b-533f-4956-b383-0425eec19c14',
                    target: '#hubspotContactForm'
                })
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotContactForm"></div>
        </div>
    );

}

export default HubspotContactForm;




