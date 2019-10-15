const form = [
    {   step: 1,
        label: '', data: {
            hasSignedUp: {
                type: Boolean,
                validations: {},
                errors: {}
            }
        }
    },
    {   step: 2,
        label: '', data: {
            email: { type: 'email', validations: {}, errors: {}, placeholder: 'Email' },
        }
    },

    {
        data: {
            firstName: '',
            lastName: '',

        }
    },
    {
        step: 3,
        data: {
            firstName: ['', []],
            lastName: ['', []],
            email: ['', []],
            classification: ['', []]
        }
    }];


//Asking if Signuped Previously
// yes, Email
// yes, Info and Click Okay.

//No, fname, lname, email,
//No, classification
//No, signature, checkbox and submit

export { form };